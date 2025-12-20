import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Weight, Building2, CheckCircle } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    location: string;
    client: string;
    image: string;
    category: string;
    tonnage?: string;
    duration?: string;
    description: string;
    highlights?: string[];
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            {project.category}
          </Badge>
        </div>

        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl tracking-wide">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-accent" />
              <span>{project.client}</span>
            </div>
            {project.tonnage && (
              <div className="flex items-center gap-2">
                <Weight className="h-4 w-4 text-accent" />
                <span>{project.tonnage}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="font-display text-lg tracking-wide mb-3">
                Project Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
