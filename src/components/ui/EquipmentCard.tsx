import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

interface EquipmentCardProps {
  name: string;
  capacity: string;
  image: string;
  features: string[];
  category: string;
  delay?: number;
}

export function EquipmentCard({
  name,
  capacity,
  image,
  features,
  category,
  delay = 0,
}: EquipmentCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : delay === 300 ? "delay-300" : delay === 400 ? "delay-400" : "";

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-card rounded-xl overflow-hidden border border-border",
        "hover:border-accent hover:shadow-xl transition-all duration-300",
        "hover-lift",
        "opacity-0",
        isVisible && `animate-fade-up ${delayClass}`
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
          {category}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="font-display text-2xl text-white tracking-wide">
            {capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg tracking-wide text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <ul className="mt-3 space-y-1.5">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1 h-1 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
