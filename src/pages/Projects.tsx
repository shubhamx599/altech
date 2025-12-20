import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  location: string;
  client: string;
  image: string;
  category: string;
  tonnage?: string;
  duration?: string;
  description: string;
  highlights?: string[];
}

const projects: Project[] = [
  {
    title: "SHMA Road - Vadodara Mumbai Expressway",
    location: "Gujarat",
    client: "Larsen & Toubro",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop",
    category: "Highway",
    tonnage: "16,000 Tons",
    duration: "40 Days",
    description:
      "One of our most ambitious projects - erecting 195 nos of full-span PSC girders in record time for the prestigious Vadodara-Mumbai Expressway.",
    highlights: [
      "195 full-span PSC girders erected",
      "16,000 tons of total erection work",
      "Completed in just 40 days",
      "Zero safety incidents",
      "Record execution speed in India",
    ],
  },
  {
    title: "MAPI Road Project",
    location: "Andhra Pradesh",
    client: "Larsen & Toubro",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop",
    category: "Highway",
    tonnage: "30,000 Tons",
    duration: "Ongoing",
    description:
      "Large-scale PSC girder erection project contributing to major highway infrastructure development in Andhra Pradesh.",
    highlights: [
      "30,000 tons PSC girder erection",
      "Multiple crane deployment",
      "Advanced safety protocols",
      "Continuous 24x7 operations",
    ],
  },
  {
    title: "Madhopur Railway Bridge",
    location: "Bihar",
    client: "L&T / Afcons",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    category: "Railway",
    tonnage: "240 Tons",
    duration: "Completed",
    description:
      "Critical railway bridge construction involving 240-ton steel girder erection with precision crane operations.",
    highlights: [
      "240-ton steel bridge erection",
      "Precision railway alignment",
      "Heavy crawler crane deployment",
      "Complex site conditions managed",
    ],
  },
  {
    title: "Jammu Highway Project",
    location: "Jammu & Kashmir",
    client: "Shapoorji Pallonji",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    category: "Highway",
    tonnage: "85 Tons per girder",
    duration: "Completed",
    description:
      "High-altitude girder erection at 24-25 meter heights in challenging terrain conditions of Jammu region.",
    highlights: [
      "85-ton girders at 24-25m height",
      "High-altitude operations",
      "Challenging terrain management",
      "Multiple span completion",
    ],
  },
  {
    title: "Wind Farm - Rajasthan",
    location: "Rajasthan",
    client: "Suzlon / Siemens Gamesa",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop",
    category: "Wind Energy",
    tonnage: "Multiple WTGs",
    duration: "Ongoing",
    description:
      "Wind turbine generator erection at various wind farm locations using our specialized 800T crawler crane.",
    highlights: [
      "168m hub height capability",
      "Complete WTG assembly",
      "Nacelle and blade installation",
      "Specialized equipment deployment",
    ],
  },
  {
    title: "Industrial Plant Lift",
    location: "Maharashtra",
    client: "Tata Projects",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
    category: "Industrial",
    tonnage: "200+ Tons",
    duration: "Completed",
    description:
      "Heavy industrial equipment installation requiring precision lifting and placement in a manufacturing facility.",
    highlights: [
      "Heavy equipment module lift",
      "Precision placement",
      "Tight space operations",
      "Zero production disruption",
    ],
  },
  {
    title: "Metro Viaduct Construction",
    location: "Delhi NCR",
    client: "J. Kumar Infraprojects",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop",
    category: "Metro Rail",
    tonnage: "120+ Tons",
    duration: "Completed",
    description:
      "Urban metro rail viaduct construction with girder erection in densely populated areas requiring specialized planning.",
    highlights: [
      "Urban environment operations",
      "Night-time erection work",
      "Minimal traffic disruption",
      "Strict timeline adherence",
    ],
  },
  {
    title: "Coastal Bridge Project",
    location: "Gujarat Coast",
    client: "Afcons Infrastructure",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop",
    category: "Bridge",
    tonnage: "150+ Tons",
    duration: "Completed",
    description:
      "Challenging coastal bridge construction with heavy girder erection in marine environment conditions.",
    highlights: [
      "Marine environment operations",
      "Tide-dependent scheduling",
      "Corrosion-resistant procedures",
      "Environmental compliance",
    ],
  },
];

const categories = ["All", "Highway", "Railway", "Wind Energy", "Industrial", "Metro Rail", "Bridge"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&auto=format&fit=crop"
            alt="Infrastructure projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            OUR PROJECTS
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Landmark infrastructure projects delivered with precision and excellence
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                2L+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Tons Erected
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                500+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Projects Completed
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                15+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                States Covered
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                0
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Safety Incidents
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Work"
            title="PROJECT GALLERY"
            subtitle="Explore our portfolio of successfully completed infrastructure projects."
          />

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  selectedCategory === category &&
                    "bg-accent text-accent-foreground hover:bg-yellow-hover"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={(index % 3) * 100}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      {/* CTA */}
      <CTASection
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can contribute to your infrastructure goals."
      />
    </div>
  );
}
