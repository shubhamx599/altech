import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

export default function Contact() {
  const contactRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  return (
    <div className="pt-20">
      <SEO
        title="Contact Us"
        description="Contact Altech Equipments for crane rental inquiries. Call +91 98737 20646 or email altech_equipments@yahoo.com. Pan-India operations with 24/7 support."
        canonical="/contact"
        keywords="contact Altech, crane rental inquiry, heavy lifting quote, crane hire India"
      />
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            CONTACT US
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Get in touch with us for crane rental inquiries and project discussions
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Details */}
            <div ref={contactRef.ref}>
              <span
                className={cn(
                  "inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4",
                  "bg-accent/10 text-accent",
                  "opacity-0",
                  contactRef.isVisible && "animate-fade-up"
                )}
              >
                Get In Touch
              </span>
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl md:text-4xl tracking-wide text-foreground",
                  "opacity-0",
                  contactRef.isVisible && "animate-fade-up delay-100"
                )}
              >
                REACH OUT TO US
              </h2>
              <p
                className={cn(
                  "mt-4 text-muted-foreground leading-relaxed",
                  "opacity-0",
                  contactRef.isVisible && "animate-fade-up delay-200"
                )}
              >
                Whether you need crane rental services, have project inquiries,
                or want to discuss partnership opportunities, our team is here
                to help.
              </p>

              <div
                className={cn(
                  "mt-8 space-y-6",
                  "opacity-0",
                  contactRef.isVisible && "animate-fade-up delay-300"
                )}
              >
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-foreground">
                      Location
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      New Delhi, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-foreground">
                      Phone
                    </h3>
                    <a
                      href="tel:+919873720646"
                      className="text-muted-foreground hover:text-accent transition-colors mt-1 inline-block"
                    >
                      +91 98737 20646
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:altech_equipments@yahoo.com"
                      className="text-muted-foreground hover:text-accent transition-colors mt-1 inline-block"
                    >
                      altech_equipments@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-foreground">
                      Website
                    </h3>
                    <a
                      href="https://www.altechequipments.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors mt-1 inline-block"
                    >
                      www.altechequipments.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-foreground">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      <span className="text-accent font-medium">
                        24/7 Emergency Support Available
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              ref={mapRef.ref}
              className={cn(
                "opacity-0",
                mapRef.isVisible && "animate-slide-in-right delay-200"
              )}
            >
              <div className="rounded-xl overflow-hidden shadow-lg border border-border h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703081234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Altech Equipments Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            label="Why Choose Us"
            title="READY TO SERVE"
            subtitle="Our commitment to excellence in every project."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {[
              {
                title: "Pan-India Operations",
                description:
                  "We operate across all major states in India with quick mobilization capabilities for your project.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our technical team is available round-the-clock for emergency support and project assistance.",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored crane rental packages and lifting solutions designed for your specific project requirements.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 border border-border hover:border-accent transition-colors"
              >
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-12 md:py-16 lg:py-24">
        <div className="container-custom text-center px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-wide animate-fade-up">
            LET'S BUILD TOGETHER
          </h2>
          <p className="mt-3 md:mt-4 text-white/80 text-base md:text-lg max-w-2xl mx-auto animate-fade-up delay-100">
            Contact us today to discuss your project requirements and experience
            the Altech difference.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-up delay-200">
            <a
              href="tel:+919873720646"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-yellow-hover transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call +91 98737 20646
            </a>
            <a
              href="mailto:altech_equipments@yahoo.com"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
