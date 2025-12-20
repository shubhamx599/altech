import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { CTASection } from "@/components/ui/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const clients = [
  { name: "Larsen & Toubro", sector: "EPC / Infrastructure" },
  { name: "Tata Projects", sector: "Infrastructure" },
  { name: "Shapoorji Pallonji", sector: "Construction" },
  { name: "Afcons Infrastructure", sector: "Infrastructure" },
  { name: "Sarens", sector: "Heavy Lifting" },
  { name: "Keller", sector: "Geotechnical" },
  { name: "Bauer", sector: "Foundation Engineering" },
  { name: "ITD Cem", sector: "Construction" },
  { name: "J. Kumar Infraprojects", sector: "Infrastructure" },
  { name: "Suzlon", sector: "Wind Energy" },
  { name: "Siemens Gamesa", sector: "Wind Energy" },
  { name: "NHPC", sector: "Hydropower" },
];

const testimonials = [
  {
    quote:
      "Altech's performance on the SHMA Road project was exceptional. 195 girders in 40 days with zero incidents - truly remarkable.",
    author: "Project Director",
    company: "Larsen & Toubro",
  },
  {
    quote:
      "Their equipment fleet and operator expertise make them our preferred partner for heavy lifting operations.",
    author: "Operations Manager",
    company: "Afcons Infrastructure",
  },
  {
    quote:
      "Professional team, advanced equipment, and unwavering commitment to safety. Highly recommended.",
    author: "Site Manager",
    company: "Tata Projects",
  },
];

export default function Clients() {
  const partnersRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            OUR CLIENTS
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Trusted by India's leading infrastructure companies
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                50+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Trusted Clients
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                15+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Years of Partnership
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                98%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Client Retention
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                100%
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Project Success Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Partners"
            title="ESTEEMED CLIENTS"
            subtitle="We're proud to partner with India's most prestigious infrastructure and construction companies."
          />
          <div
            ref={partnersRef.ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={cn(
                  "bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300",
                  "flex flex-col items-center justify-center text-center",
                  "opacity-0",
                  partnersRef.isVisible && "animate-scale-in"
                )}
                style={{ animationDelay: `${(index % 4) * 100}ms` }}
              >
                <span className="font-display text-lg text-foreground">
                  {client.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            label="What They Say"
            title="CLIENT TESTIMONIALS"
            subtitle="Hear from the companies we've partnered with."
          />
          <div
            ref={testimonialsRef.ref}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card rounded-xl p-6 md:p-8 border border-border",
                  "opacity-0",
                  testimonialsRef.isVisible && "animate-fade-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Why Partner With Us"
            title="PARTNERSHIP BENEFITS"
            subtitle="What makes Altech the preferred choice for leading companies."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Reliable Fleet",
                description:
                  "Access to 10+ advanced crawler cranes from 100T to 800T capacity, always maintained and ready.",
              },
              {
                title: "Expert Team",
                description:
                  "Highly trained operators, riggers, and engineers with extensive experience in complex operations.",
              },
              {
                title: "Safety Record",
                description:
                  "Zero-incident track record backed by rigorous safety protocols and continuous training.",
              },
              {
                title: "Timely Delivery",
                description:
                  "Proven ability to meet aggressive timelines without compromising on quality or safety.",
              },
              {
                title: "Pan-India Presence",
                description:
                  "Operational capabilities across all major states with quick mobilization.",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and emergency response capabilities.",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Become a Partner"
        subtitle="Join our growing list of satisfied clients and experience the Altech difference."
      />
    </div>
  );
}
