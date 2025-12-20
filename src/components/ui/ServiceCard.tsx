import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  delay?: number;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features = [],
  delay = 0,
  onClick,
}: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : delay === 300 ? "delay-300" : delay === 400 ? "delay-400" : "";

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative bg-card rounded-xl p-6 md:p-8 border border-border",
        "hover:border-accent hover:shadow-xl transition-all duration-300",
        "cursor-pointer hover-lift overflow-hidden",
        "opacity-0",
        isVisible && `animate-fade-up ${delayClass}`
      )}
    >
      {/* Accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
          <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl tracking-wide text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          {features.length > 0 && (
            <ul className="mt-4 space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
