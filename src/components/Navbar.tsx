import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Bridal Makeup", path: "/bridal-portfolio" },
  { label: "Mehendi Gallery", path: "/mehendi-gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Book Appointment", path: "/book-appointment" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
            Sri Sai Sakthi
          </span>
          <span className="text-xs text-secondary font-semibold tracking-widest uppercase">
            Beauty Parlor & Mehandi
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === item.path
                    ? "bg-primary/15 text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
