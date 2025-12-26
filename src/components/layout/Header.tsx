import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Phone, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Equipment", path: "/equipment" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div
        className={cn(
          "rounded-2xl transition-all duration-500 border",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-xl border-border"
            : "bg-background/70 backdrop-blur-lg border-border/50"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Cog className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl text-primary dark:text-foreground tracking-wider">
                  ALTECH
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground -mt-1 tracking-widest">
                  EQUIPMENTS PVT. LTD.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group overflow-hidden",
                    location.pathname === link.path
                      ? "text-accent bg-primary dark:bg-secondary"
                      : "text-foreground/80 hover:text-accent"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span 
                    className={cn(
                      "absolute inset-0 bg-primary/10 dark:bg-accent/10 scale-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-100",
                      location.pathname === link.path && "hidden"
                    )} 
                  />
                  <span 
                    className={cn(
                      "absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-3/4",
                      location.pathname === link.path && "hidden"
                    )} 
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-muted"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <a href="tel:+919873720646">
                <Button className="bg-accent text-accent-foreground hover:bg-yellow-hover gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden xl:inline">+91 98737 20646</span>
                  <span className="xl:hidden">Call</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-muted"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-muted"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-[500px] pb-4" : "max-h-0"
            )}
          >
            <nav className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors rounded-md",
                    location.pathname === link.path
                      ? "text-accent bg-primary dark:bg-secondary"
                      : "text-foreground/80 hover:text-accent hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+919873720646" className="mt-2">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-yellow-hover gap-2">
                  <Phone className="h-4 w-4" />
                  +91 98737 20646
                </Button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
