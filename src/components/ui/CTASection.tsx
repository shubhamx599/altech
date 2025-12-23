import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showContact?: boolean;
}

export function CTASection({
  title = "Ready to Partner with Us?",
  subtitle = "Let's discuss your next project and deliver excellence together.",
  showContact = true,
}: CTASectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="gradient-navy py-16 md:py-24">
      <div ref={ref} className="container-custom text-center">
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wide",
            "opacity-0",
            isVisible && "animate-fade-up"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-4 text-white/80 text-lg max-w-2xl mx-auto",
            "opacity-0",
            isVisible && "animate-fade-up delay-100"
          )}
        >
          {subtitle}
        </p>
        <div
          className={cn(
            "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4",
            "opacity-0",
            isVisible && "animate-fade-up delay-200"
          )}
        >
          {showContact && (
            <a href="tel:+919873720646">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-yellow-hover gap-2 text-base"
              >
                <Phone className="h-5 w-5" />
                Call +91 98737 20646
              </Button>
            </a>
          )}
          <Link to="/contact">
            <Button
              size="lg"
              variant="hero"
              className="gap-2 text-base"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
