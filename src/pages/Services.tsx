import { useState } from "react";
import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import {
  Wind,
  Building2,
  Construction,
  Target,
  Truck,
  Settings,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  fullDescription: string;
}

const services: Service[] = [
  {
    title: "Wind Turbine (WTG) Erection",
    description:
      "Specialized WTG erection services using advanced crawler cranes for hub heights up to 168m.",
    icon: Wind,
    features: [
      "Hub heights up to 168m",
      "Nacelle installation",
      "Blade mounting",
      "Tower section assembly",
    ],
    fullDescription:
      "Our WTG erection services utilize state-of-the-art crawler cranes, including the Zoomlion ZCC9800W (800T), specifically designed for wind turbine installations. We handle complete tower assembly, nacelle positioning, and blade mounting with precision and safety. Our experienced team has successfully erected numerous wind turbines across India, contributing to the nation's renewable energy infrastructure.",
  },
  {
    title: "PSC Girder Erection",
    description:
      "Expert erection of Pre-Stressed Concrete girders for bridges, flyovers, and highway projects.",
    icon: Building2,
    features: [
      "40m, 55m, 60m span girders",
      "Full-span launching",
      "Highway & expressway projects",
      "Record execution times",
    ],
    fullDescription:
      "We specialize in PSC girder erection for major highway and expressway projects. Our team has achieved remarkable feats like erecting 195 full-span PSC girders (16,000 tons) in just 40 days for the SHMA Road project. Using specialized equipment including axle pullers and high-capacity cranes, we ensure safe and efficient girder placement for spans up to 60 meters.",
  },
  {
    title: "RCC Girder Erection",
    description:
      "Reinforced Cement Concrete girder installation for infrastructure and industrial projects.",
    icon: Target,
    features: [
      "Up to 200 ton capacity",
      "Bridge construction",
      "Industrial structures",
      "Precision placement",
    ],
    fullDescription:
      "Our RCC girder erection services cater to a wide range of infrastructure projects including bridges, industrial facilities, and commercial structures. With cranes capable of lifting up to 200 tons, we handle even the most challenging RCC girder installations with precision and efficiency.",
  },
  {
    title: "Steel Girder Erection",
    description:
      "Heavy steel girder installation for railway bridges, industrial plants, and special structures.",
    icon: Settings,
    features: [
      "Up to 250 MT capacity",
      "Railway bridge construction",
      "Industrial plant structures",
      "Complex assemblies",
    ],
    fullDescription:
      "Steel girder erection requires specialized expertise and equipment. Our team handles steel girders up to 250 metric tons, serving railway bridge construction, industrial plants, and other critical infrastructure. Notable projects include the 240-ton railway steel bridge erection at Madhopur using our powerful crawler cranes.",
  },
  {
    title: "Heavy Lifting Services",
    description:
      "State-of-the-art crawler cranes with capacities from 100T to 800T for critical lifts.",
    icon: Construction,
    features: [
      "100T to 800T capacity",
      "Industrial equipment",
      "Modular construction",
      "Critical lifts",
    ],
    fullDescription:
      "Our fleet of crawler cranes, ranging from 100T to 800T capacity, enables us to undertake the most demanding heavy lifting operations. Whether it's industrial equipment installation, modular construction, or time-critical lifts, our experienced operators and riggers ensure safe and precise execution every time.",
  },
  {
    title: "Crane Package Services",
    description:
      "Complete crane rental solutions with skilled operators, riggers, and support equipment.",
    icon: Truck,
    features: [
      "Fully operated rentals",
      "Skilled manpower",
      "Support equipment",
      "Project management",
    ],
    fullDescription:
      "We offer comprehensive crane rental packages that include not just the equipment but also skilled operators, riggers, and necessary support equipment. Our project management team coordinates logistics, safety protocols, and execution to ensure seamless operations at your site.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="pt-20">
      <SEO
        title="Our Services"
        description="Comprehensive heavy lifting services - WTG erection up to 168m, PSC/RCC/Steel girder installation, industrial lifting with capacities from 100T to 800T."
        canonical="/services"
        keywords="WTG erection, girder erection, heavy lifting services, crane services India"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1920&auto=format&fit=crop"
            alt="Heavy lifting services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            OUR SERVICES
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Comprehensive heavy lifting and erection solutions for India's infrastructure
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="What We Offer"
            title="SPECIALIZED SERVICES"
            subtitle="From wind turbine erection to heavy industrial lifting, we deliver excellence across all domains."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                delay={index * 100}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            label="How We Work"
            title="OUR PROCESS"
            subtitle="A systematic approach to ensure project success."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your project requirements and site conditions.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Detailed lift plans, safety protocols, and resource allocation.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Precision operations with experienced crew and equipment.",
              },
              {
                step: "04",
                title: "Completion",
                description:
                  "Quality verification, documentation, and project handover.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative bg-card rounded-xl p-6 border border-border hover:border-accent transition-colors"
              >
                <span className="font-display text-5xl text-accent/20">
                  {item.step}
                </span>
                <h3 className="font-display text-xl tracking-wide text-foreground mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                    <selectedService.icon className="h-7 w-7 text-accent" />
                  </div>
                  <DialogTitle className="font-display text-2xl tracking-wide">
                    {selectedService.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedService.fullDescription}
                </p>
                <div>
                  <h4 className="font-display text-lg tracking-wide mb-3">
                    Key Capabilities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <CTASection
        title="Need Heavy Lifting Solutions?"
        subtitle="Contact us to discuss your project requirements."
      />
    </div>
  );
}
