import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { CTASection } from "@/components/ui/CTASection";
import { StatCard } from "@/components/ui/StatCard";
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

const stats = [
  { value: "2", suffix: "L+", label: "Tons Erected" },
  { value: "0", suffix: "", label: "Incidents" },
  { value: "10", suffix: "+", label: "Advanced Cranes" },
  { value: "15", suffix: "+", label: "Years Experience" },
];


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
      <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
          className="relative z-10 container-custom text-center text-white flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 md:py-20 px-4"
        >
          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <span
              className={cn(
                "inline-block px-4 py-2.5 md:px-6 md:py-3 bg-white/10 text-accent text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase rounded-full mb-8 md:mb-10 border border-accent/40 backdrop-blur-md",
                "opacity-0",
                heroRef.isVisible && "animate-fade-up"
              )}
            >
              India's Premier Heavy Lifting Company
            </span>
            
            <div className="relative">
              {/* Decorative line */}
              <div className={cn(
                "absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-8 md:w-20 h-[2px] bg-gradient-to-r from-transparent to-accent/60",
                "opacity-0",
                heroRef.isVisible && "animate-fade-up delay-100"
              )} />
              <div className={cn(
                "absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-8 md:w-20 h-[2px] bg-gradient-to-l from-transparent to-accent/60",
                "opacity-0",
                heroRef.isVisible && "animate-fade-up delay-100"
              )} />
              
              <h1
                className={cn(
                  "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85]",
                  "opacity-0",
                  heroRef.isVisible && "animate-fade-up delay-100"
                )}
              >
                <span className="block text-white/95">PRECISION</span>
                <span className="block text-accent drop-shadow-[0_0_40px_hsl(var(--accent)/0.6)] mt-1 md:mt-2">LIFTING</span>
              </h1>
            </div>
            
            <p
              className={cn(
                "mt-8 md:mt-10 text-sm md:text-base lg:text-lg text-white/75 max-w-xl mx-auto leading-relaxed font-light tracking-wide",
                "opacity-0",
                heroRef.isVisible && "animate-fade-up delay-200"
              )}
            >
              Excellence in crane rental, WTG erection & girder installation. 
              <span className="block mt-2 text-white/90 font-medium">
                <span className="text-accent">2 Lakh+ Tons</span> lifted · <span className="text-accent">Zero Incidents</span>
              </span>
            </p>
            
            <div
              className={cn(
                "mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5",
                "opacity-0",
                heroRef.isVisible && "animate-fade-up delay-300"
              )}
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 gap-2.5 text-sm md:text-base h-12 md:h-14 px-8 md:px-10 font-bold shadow-xl shadow-accent/40 hover:shadow-accent/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link to="/equipment">
                <Button
                  size="lg"
                  variant="hero"
                  className="w-full sm:w-auto gap-2.5 text-sm md:text-base h-12 md:h-14 px-8 md:px-10 font-semibold hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Fleet
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator with gap - hidden on mobile */}
          <div className="hidden md:flex flex-col items-center mt-16 md:mt-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/25 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2.5 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
            ))}
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
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
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
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
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
