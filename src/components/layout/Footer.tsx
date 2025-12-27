import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Equipment", path: "/equipment" },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Wind Turbine Erection",
  "Girder Erection",
  "Heavy Lifting",
  "Infrastructure Projects",
  "Crane Rental",
];

export function Footer() {
  return (
    <footer className="gradient-navy text-white">
      <div className="container-custom py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl tracking-wider text-accent">
                ALTECH
              </h3>
              <p className="text-xs tracking-widest text-white/70">
                EQUIPMENTS PVT. LTD.
              </p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              India's leading crane rental and heavy-lifting company specializing
              in wind turbine erection, girder erection, and large-scale
              infrastructure projects.
            </p>
            <div className="flex items-center gap-2 text-accent font-display text-lg">
              <span>2 Lakh+ Tons Erected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4 text-accent">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4 text-accent">
              OUR SERVICES
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-4 text-accent">
              CONTACT US
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919873720646"
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  +91 98737 20646
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:altech_equipments@yahoo.com"
                  className="text-white/80 hover:text-accent transition-colors text-sm break-all"
                >
                  altech_equipments@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="https://www.altechequipments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  www.altechequipments.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Altech Equipments Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
