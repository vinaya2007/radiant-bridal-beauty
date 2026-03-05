import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Star, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl font-bold text-background mb-3">Sri Sai Sakthi</h3>
          <p className="text-sm text-background/70 leading-relaxed">
            Trusted beauty parlour in Thanjavur for bridal makeup, mehendi, and beauty services.
          </p>
          <div className="flex items-center gap-1 mt-3 text-secondary">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold">4.9 Google Rating</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-background mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Book Appointment", path: "/book-appointment" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-background/70 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-background mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>Bridal Makeup</li>
            <li>Mehendi Designs</li>
            <li>Ear Piercing</li>
            <li>Facials & Threading</li>
            <li>Waxing & Grooming</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-background mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              Kuthirai Katti St, Karanthai, Thanjavur – 613002
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              <a href="tel:+916379262005" className="hover:text-secondary transition-colors">63792 62005</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-secondary" />
              Opens at 10 AM
            </li>
          </ul>
          <a
            href="https://wa.me/916379262005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-background/10 py-4">
        <p className="text-center text-xs text-background/50">
          © {new Date().getFullYear()} Sri Sai Sakthi Beauty Parlor & Mehandi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
