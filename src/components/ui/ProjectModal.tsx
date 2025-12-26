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
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 bg-card border-border overflow-hidden flex flex-col">
        {/* Scrollable container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold px-3 py-1">
              {project.category}
            </Badge>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <DialogHeader className="space-y-2">
              <DialogTitle className="font-display text-2xl md:text-4xl tracking-wide text-foreground">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Meta info cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted border border-border">
                <div className="p-2 rounded-lg bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="font-semibold text-foreground">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted border border-border">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Client</p>
                  <p className="font-semibold text-foreground">{project.client}</p>
                </div>
              </div>
              {project.tonnage && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted border border-border">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Weight className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Tonnage</p>
                    <p className="font-semibold text-foreground">{project.tonnage}</p>
                  </div>
                </div>
              )}
              {project.duration && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-muted border border-border">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                    <p className="font-semibold text-foreground">{project.duration}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-display text-lg tracking-wide text-foreground">
                About This Project
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-display text-lg tracking-wide text-foreground">
                  Project Highlights
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
