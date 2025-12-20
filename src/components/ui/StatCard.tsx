import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
  light?: boolean;
}

export function StatCard({
  value,
  label,
  suffix = "",
  icon,
  delay = 0,
  light = false,
}: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      
      // Format number with original formatting
      if (value.includes(",")) {
        setDisplayValue(current.toLocaleString());
      } else if (value.includes("L")) {
        setDisplayValue(current.toString());
      } else {
        setDisplayValue(current.toString());
      }

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value.replace(/[^0-9,L+]/g, ""));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : delay === 300 ? "delay-300" : "";

  return (
    <div
      ref={ref}
      className={cn(
        "text-center p-6 rounded-xl transition-all duration-300",
        "opacity-0",
        isVisible && `animate-scale-in ${delayClass}`,
        light
          ? "bg-white/10 backdrop-blur-sm"
          : "bg-card shadow-lg border border-border"
      )}
    >
      {icon && (
        <div
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full mb-4",
            light ? "bg-accent/20" : "bg-accent/10"
          )}
        >
          <span className="text-accent">{icon}</span>
        </div>
      )}
      <div
        className={cn(
          "font-display text-4xl md:text-5xl tracking-wide",
          light ? "text-accent" : "text-primary dark:text-accent"
        )}
      >
        {displayValue}
        {suffix}
      </div>
      <p
        className={cn(
          "mt-2 text-sm font-medium tracking-wide uppercase",
          light ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {label}
      </p>
    </div>
  );
}
