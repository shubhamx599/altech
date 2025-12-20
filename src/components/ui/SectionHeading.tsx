import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4",
            "opacity-0",
            isVisible && "animate-fade-up",
            light
              ? "bg-accent/20 text-accent"
              : "bg-accent/10 text-accent dark:bg-accent/20"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl tracking-wide",
          "opacity-0",
          isVisible && "animate-fade-up delay-100",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl",
            align === "center" && "mx-auto",
            "opacity-0",
            isVisible && "animate-fade-up delay-200",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
