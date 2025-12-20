import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ClientLogoProps {
  name: string;
  logo?: string;
  delay?: number;
}

export function ClientLogo({ name, logo, delay = 0 }: ClientLogoProps) {
  const { ref, isVisible } = useScrollAnimation();
  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : delay === 300 ? "delay-300" : delay === 400 ? "delay-400" : delay === 500 ? "delay-500" : "";

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center p-6 bg-card rounded-xl border border-border",
        "hover:border-accent hover:shadow-lg transition-all duration-300",
        "group",
        "opacity-0",
        isVisible && `animate-scale-in ${delayClass}`
      )}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="font-display text-lg text-muted-foreground group-hover:text-accent transition-colors text-center">
          {name}
        </span>
      )}
    </div>
  );
}
