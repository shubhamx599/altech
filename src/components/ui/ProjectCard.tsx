import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Weight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  client: string;
  image: string;
  category: string;
  tonnage?: string;
  duration?: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  location,
  client,
  image,
  category,
  tonnage,
  duration,
  description,
  delay = 0,
  onClick,
}: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : delay === 300 ? "delay-300" : delay === 400 ? "delay-400" : "";

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border",
        "hover:border-accent hover:shadow-xl transition-all duration-300",
        "cursor-pointer hover-lift",
        "opacity-0",
        isVisible && `animate-fade-up ${delayClass}`
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
          {category}
        </Badge>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-xl md:text-2xl text-white tracking-wide line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {tonnage && (
            <div className="flex items-center gap-1.5 bg-muted px-2 py-1 rounded">
              <Weight className="h-3.5 w-3.5 text-accent" />
              <span>{tonnage}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1.5 bg-muted px-2 py-1 rounded">
              <Calendar className="h-3.5 w-3.5 text-accent" />
              <span>{duration}</span>
            </div>
          )}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Client: <span className="font-medium text-foreground">{client}</span>
        </p>
      </div>
    </div>
  );
}
