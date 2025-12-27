import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Award,
  Target,
  Users,
  Construction,
  CheckCircle,
  Eye,
  Heart,
} from "lucide-react";

const stats = [
  { value: "2", suffix: "L+", label: "Tons Erected" },
  { value: "0", suffix: "", label: "Incidents" },
  { value: "10", suffix: "+", label: "Advanced Cranes" },
  { value: "500", suffix: "+", label: "Projects Completed" },
];

const strengths = [
  {
    icon: Construction,
    title: "Specialized Equipment",
    description:
      "Fleet of advanced crawler cranes from leading manufacturers like Zoomlion, Kobelco, and Hitachi with capacities ranging from 100T to 800T.",
  },
  {
    icon: Users,
    title: "Expert Manpower",
    description:
      "Highly trained operators, riggers, and engineers with decades of combined experience in heavy lifting and precision operations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    description:
      "Zero-incident track record backed by rigorous safety protocols, regular training, and adherence to international safety standards.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Successfully completed over 2 lakh tons of erection work across WTG, highway, railway, and industrial projects throughout India.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every lift is executed with meticulous planning and precision engineering.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Uncompromising commitment to safety in every operation we undertake.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication and honest dealings with all our partners and clients.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "Dedicated to delivering excellence and exceeding client expectations.",
  },
];

export default function About() {
  const introRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const strengthsRef = useScrollAnimation();

  return (
    <div className="pt-20">
      <SEO
        title="About Us"
        description="Learn about Altech Equipments - India's leading crane rental company with 15+ years of experience, 2L+ tons erected, and zero safety incidents."
        canonical="/about"
        keywords="about Altech, crane company India, heavy lifting expertise, WTG specialist"
      />
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Heavy crane operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            ABOUT US
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Building India's infrastructure with precision, safety, and excellence
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-6">
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

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            ref={introRef.ref}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          >
            <div>
              <span
                className={cn(
                  "inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4",
                  "bg-accent/10 text-accent",
                  "opacity-0",
                  introRef.isVisible && "animate-fade-up"
                )}
              >
                Who We Are
              </span>
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground",
                  "opacity-0",
                  introRef.isVisible && "animate-fade-up delay-100"
                )}
              >
                ALTECH EQUIPMENTS PVT. LTD.
              </h2>
              <div
                className={cn(
                  "mt-6 space-y-4 text-muted-foreground leading-relaxed",
                  "opacity-0",
                  introRef.isVisible && "animate-fade-up delay-200"
                )}
              >
                <p>
                  Altech Equipments Pvt. Ltd. is a leading crane rental and
                  heavy-lifting company in India, specializing in wind turbine
                  erection, girder erection, and large-scale infrastructure
                  projects.
                </p>
                <p>
                  With a fleet of advanced crawler cranes ranging from 100T to
                  800T capacity, including the powerful Zoomlion ZCC9800W, we
                  are equipped to handle the most demanding lifting operations
                  across India.
                </p>
                <p>
                  Our team of expert operators, riggers, and project managers
                  brings decades of combined experience to every project,
                  ensuring precision, safety, and timely delivery.
                </p>
              </div>
            </div>
            <div
              className={cn(
                "relative",
                "opacity-0",
                introRef.isVisible && "animate-slide-in-right delay-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop"
                alt="Crane operations"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div
            ref={storyRef.ref}
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          >
            <div
              className={cn(
                "order-2 lg:order-1 relative",
                "opacity-0",
                storyRef.isVisible && "animate-slide-in-left delay-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop"
                alt="Infrastructure project"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span
                className={cn(
                  "inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4",
                  "bg-accent/10 text-accent",
                  "opacity-0",
                  storyRef.isVisible && "animate-fade-up"
                )}
              >
                Our Expertise
              </span>
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl md:text-4xl tracking-wide text-foreground",
                  "opacity-0",
                  storyRef.isVisible && "animate-fade-up delay-100"
                )}
              >
                SPECIALIZATIONS
              </h2>
              <div
                className={cn(
                  "mt-6 space-y-4",
                  "opacity-0",
                  storyRef.isVisible && "animate-fade-up delay-200"
                )}
              >
                {[
                  "Wind Turbine Generator (WTG) Erection up to 168m hub height",
                  "PSC Girder Erection (40m, 55m, 60m spans)",
                  "RCC Girder Erection up to 200 tons",
                  "Steel Girder Erection up to 250 MT",
                  "Heavy Industrial Lifting Services",
                  "Highway & Railway Infrastructure Projects",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Why Choose Us"
            title="OUR STRENGTHS"
            subtitle="The pillars that make Altech a trusted partner in heavy lifting."
          />
          <div
            ref={strengthsRef.ref}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
          >
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className={cn(
                  "bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300",
                  "opacity-0",
                  strengthsRef.isVisible && `animate-fade-up delay-${index * 100}`
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <strength.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg tracking-wide text-foreground mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-navy">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="WHAT DRIVES US"
            subtitle="The principles that guide every decision we make."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl tracking-wide text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner With Industry Leaders"
        subtitle="Join hands with Altech for your next infrastructure project."
      />
    </div>
  );
}
