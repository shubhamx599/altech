import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Phone, Cog, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    submenu: [
      { name: "All Services", path: "/services" },
      { name: "Equipment", path: "/equipment" },
    ]
  },
  { name: "Projects", path: "/projects" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
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
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md flex items-center gap-1 group relative",
                        location.pathname === link.path || link.submenu.some(sub => location.pathname === sub.path)
                          ? "text-accent bg-primary dark:bg-secondary"
                          : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openDropdown === link.name && "rotate-180"
                      )} />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-xl border border-border rounded-lg shadow-xl overflow-hidden animate-fade-in z-50">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            className={cn(
                              "block px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-muted hover:pl-6",
                              location.pathname === sublink.path
                                ? "text-accent bg-primary/10"
                                : "text-foreground/80"
                            )}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md relative group",
                      location.pathname === link.path
                        ? "text-accent bg-primary dark:bg-secondary"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
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
          <nav className="flex flex-col gap-1 bg-background/95 backdrop-blur-xl border border-border rounded-lg p-2 shadow-xl">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={cn(
                        "w-full px-4 py-3 text-sm font-medium transition-colors rounded-md flex items-center justify-between",
                        location.pathname === link.path || link.submenu.some(sub => location.pathname === sub.path)
                          ? "text-accent bg-primary dark:bg-secondary"
                          : "text-foreground/80 hover:text-accent hover:bg-muted"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        openDropdown === link.name && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      openDropdown === link.name ? "max-h-40" : "max-h-0"
                    )}>
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className={cn(
                            "block px-6 py-2 text-sm font-medium transition-colors rounded-md",
                            location.pathname === sublink.path
                              ? "text-accent bg-primary/10"
                              : "text-foreground/60 hover:text-accent hover:bg-muted"
                          )}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
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
                )}
              </div>
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
    </header>
  );
}
