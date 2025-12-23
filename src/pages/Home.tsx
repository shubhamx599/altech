import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { CTASection } from "@/components/ui/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Wind,
  Building2,
  Construction,
  ShieldCheck,
  Award,
  Target,
  Users,
} from "lucide-react";


const services = [
  {
    title: "Wind Turbine Erection",
    description:
      "Specialized WTG erection services using advanced crawler cranes for hub heights up to 168m.",
    icon: Wind,
  },
  {
    title: "Girder Erection",
    description:
      "Expert erection of PSC, RCC, and Steel girders up to 250 MT for bridges and flyovers.",
    icon: Building2,
  },
  {
    title: "Heavy Lifting",
    description:
      "State-of-the-art crawler cranes with capacities from 100T to 800T for critical lifts.",
    icon: Construction,
  },
  {
    title: "Infrastructure Projects",
    description:
      "Comprehensive support for highway, railway, and industrial infrastructure development.",
    icon: Target,
  },
];

const featuredEquipment = [
  {
    name: "Zoomlion ZCC9800W",
    capacity: "800 TON",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    features: ["Max height: 168m", "WTG erection specialist", "Advanced hydraulics"],
    category: "Crawler Crane",
  },
  {
    name: "Zoomlion ZCC4000V",
    capacity: "400 TON",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    features: ["Heavy duty lifting", "Versatile operations", "Remote controlled"],
    category: "Crawler Crane",
  },
  {
    name: "Hitachi Sumitomo SCX 2800",
    capacity: "275 TON",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
    features: ["Precision lifting", "Japanese engineering", "High reliability"],
    category: "Crawler Crane",
  },
];

const featuredProjects = [
  {
    title: "SHMA Road - Vadodara Mumbai Expressway",
    location: "Gujarat",
    client: "Larsen & Toubro",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop",
    category: "Highway",
    tonnage: "16,000 Tons",
    duration: "40 Days",
    description: "Erected 195 nos of full span PSC girders in record time with zero incidents.",
  },
  {
    title: "MAPI Road Project",
    location: "Andhra Pradesh",
    client: "Larsen & Toubro",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop",
    category: "Highway",
    tonnage: "30,000 Tons",
    duration: "Ongoing",
    description: "Large-scale PSC girder erection for major highway infrastructure project.",
  },
];

const clients = [
  "Larsen & Toubro",
  "Tata Projects",
  "Shapoorji Pallonji",
  "Afcons Infrastructure",
  "Sarens",
  "J. Kumar Infraprojects",
];

export default function Home() {
  const heroRef = useScrollAnimation();
  const whyUsRef = useScrollAnimation();

  return (
    <div className="overflow-hidden">
      <SEO
        title="Heavy Lifting & Crane Rental"
        description="India's premier crane rental and heavy lifting company. Specializing in WTG erection, girder installation with 2L+ tons erected and zero incidents."
        canonical="/"
        keywords="crane rental, heavy lifting, WTG erection, girder erection, crawler crane, infrastructure"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background */}
        <div className="absolute inset-x-16 md:inset-x-24 lg:inset-x-32 inset-y-4 top-24 z-0 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Heavy crane at construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--navy-dark)/0.95)] via-[hsl(var(--navy)/0.85)] to-[hsl(var(--navy)/0.6)]" />
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--navy-light)/0.3),transparent_50%)]" />
        </div>

        {/* Content */}
        <div
          ref={heroRef.ref}
          className="relative z-10 container-custom text-center text-white py-20"
        >
          <span
            className={cn(
              "inline-block px-5 py-2.5 bg-accent/20 text-accent text-sm font-semibold tracking-widest uppercase rounded-full mb-8 border border-accent/30 backdrop-blur-sm",
              "opacity-0",
              heroRef.isVisible && "animate-fade-up"
            )}
          >
            India's Premier Heavy Lifting Company
          </span>
          <h1
            className={cn(
              "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-[0.9]",
              "opacity-0",
              heroRef.isVisible && "animate-fade-up delay-100"
            )}
          >
            PRECISION
            <br />
            <span className="text-accent drop-shadow-[0_0_30px_hsl(var(--accent)/0.5)]">LIFTING</span>
          </h1>
          <p
            className={cn(
              "mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed",
              "opacity-0",
              heroRef.isVisible && "animate-fade-up delay-200"
            )}
          >
            Delivering excellence in crane rental, WTG erection, and girder
            installation with over <span className="text-accent font-semibold">2 lakh tons</span> of successful projects 
            and an impeccable <span className="text-accent font-semibold">zero-incident</span> safety record.
          </p>
          <div
            className={cn(
              "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
              "opacity-0",
              heroRef.isVisible && "animate-fade-up delay-300"
            )}
          >
            <Link to="/services">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base h-14 px-8 text-lg font-semibold shadow-lg shadow-accent/30"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/equipment">
              <Button
                size="lg"
                variant="hero"
                className="gap-2 text-base h-14 px-8 text-lg"
              >
                View Equipment Fleet
              </Button>
            </Link>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={whyUsRef.ref}>
              <span
                className={cn(
                  "inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4",
                  "bg-accent/10 text-accent",
                  "opacity-0",
                  whyUsRef.isVisible && "animate-fade-up"
                )}
              >
                About Altech
              </span>
              <h2
                className={cn(
                  "font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground",
                  "opacity-0",
                  whyUsRef.isVisible && "animate-fade-up delay-100"
                )}
              >
                WHY CHOOSE ALTECH?
              </h2>
              <p
                className={cn(
                  "mt-6 text-muted-foreground leading-relaxed",
                  "opacity-0",
                  whyUsRef.isVisible && "animate-fade-up delay-200"
                )}
              >
                Altech Equipments Pvt. Ltd. is a premier crane rental and
                heavy-lifting company in India. We specialize in wind turbine
                erection, girder installation, and large-scale infrastructure
                projects. Our fleet of advanced cranes combined with expert
                manpower ensures precision, safety, and efficiency in every
                project.
              </p>
              <div
                className={cn(
                  "mt-8 grid sm:grid-cols-2 gap-4",
                  "opacity-0",
                  whyUsRef.isVisible && "animate-fade-up delay-300"
                )}
              >
                {[
                  { icon: Construction, text: "Advanced Equipment" },
                  { icon: Users, text: "Expert Manpower" },
                  { icon: ShieldCheck, text: "Zero Incident Record" },
                  { icon: Award, text: "Industry Leaders" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                  >
                    <item.icon className="h-6 w-6 text-accent" />
                    <span className="font-medium text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className={cn(
                  "inline-flex items-center gap-2 mt-8 text-accent hover:underline font-medium",
                  "opacity-0",
                  whyUsRef.isVisible && "animate-fade-up delay-400"
                )}
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div
              className={cn(
                "relative",
                "opacity-0",
                whyUsRef.isVisible && "animate-slide-in-right delay-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop"
                alt="Heavy crane operations"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-lg hidden md:block">
                <div className="font-display text-4xl text-accent-foreground">
                  15+
                </div>
                <div className="text-sm text-accent-foreground/80 font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            label="What We Do"
            title="OUR CORE SERVICES"
            subtitle="Comprehensive heavy lifting and erection solutions for infrastructure development."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Fleet"
            title="ADVANCED EQUIPMENT"
            subtitle="State-of-the-art crawler cranes and machinery for precision lifting operations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEquipment.map((equipment, index) => (
              <EquipmentCard
                key={equipment.name}
                {...equipment}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/equipment">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                View Full Fleet
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            label="Our Work"
            title="FEATURED PROJECTS"
            subtitle="Landmark infrastructure projects delivered with precision and excellence."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} delay={index * 100} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Trusted By"
            title="OUR ESTEEMED CLIENTS"
            subtitle="Partnering with India's leading infrastructure and construction companies."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <ClientLogo
                key={client}
                name={client}
                delay={(index % 6) * 100}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/clients">
              <Button variant="outline" className="gap-2">
                View All Clients
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
