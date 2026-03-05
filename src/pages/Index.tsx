import { Link } from "react-router-dom";
import { Star, Sparkles, Heart, MapPin, Scissors, Flower2, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Sparkles, title: "Bridal Makeup", desc: "Stunning bridal looks for your special day with long-lasting, skin-friendly products." },
  { icon: Hand, title: "Mehendi Designs", desc: "Intricate traditional and modern mehendi art for brides, festivals & celebrations." },
  { icon: Scissors, title: "Ear Piercing", desc: "Safe, hygienic ear piercing with gentle care and quick process." },
  { icon: Flower2, title: "Facials", desc: "Rejuvenating facial treatments to cleanse, nourish, and glow your skin." },
  { icon: Scissors, title: "Threading", desc: "Precise eyebrow and facial threading for a clean, defined look." },
  { icon: Heart, title: "Waxing", desc: "Smooth, gentle waxing services for soft, hair-free skin." },
];

const testimonials = [
  { name: "Priya M.", text: "Excellent service and friendly staff. My bridal makeup was absolutely stunning!", rating: 5 },
  { name: "Lakshmi R.", text: "Makeup look very beautiful. They understand exactly what I wanted.", rating: 5 },
  { name: "Kavitha S.", text: "Customer treat very nice. I always come here for all beauty services.", rating: 5 },
  { name: "Deepa K.", text: "Ear piercing very good. Very safe and hygienic. Highly recommended!", rating: 5 },
];

const galleryItems = [
  { label: "Bridal Makeup", gradient: "from-rose to-secondary" },
  { label: "Mehendi Art", gradient: "from-secondary to-gold" },
  { label: "Hand Mehendi", gradient: "from-primary to-rose" },
  { label: "Wedding Look", gradient: "from-gold to-primary" },
  { label: "Festival Mehendi", gradient: "from-secondary to-primary" },
  { label: "Reception Look", gradient: "from-rose to-gold" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent to-background py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-secondary rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-secondary/50 rounded-full" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-1 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4 fill-current" />
            4.9 Rated Beauty Parlour
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 max-w-4xl mx-auto">
            Bridal Makeup & Mehendi Specialists in{" "}
            <span className="text-primary">Thanjavur</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Enhancing your natural beauty for weddings, celebrations, and special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Link to="/mehendi-gallery">View Mehendi Designs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, label: "4.9 Google Rating", color: "text-secondary" },
              { icon: Sparkles, label: "Bridal Specialist", color: "text-primary" },
              { icon: Heart, label: "Friendly Parlour", color: "text-primary" },
              { icon: MapPin, label: "Serving Thanjavur", color: "text-secondary" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className={`h-6 w-6 ${item.color}`} />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Welcome to Sri Sai Sakthi
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sri Sai Sakthi Beauty Parlor & Mehandi is a trusted local women's beauty parlour in Karanthai, Thanjavur offering bridal makeup, mehendi art, ear piercing, and beauty treatments with a personal touch. We treat every client like family.
          </p>
          <Button asChild variant="link" className="mt-4 text-secondary font-semibold">
            <Link to="/about">Learn More About Us →</Link>
          </Button>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <Button asChild variant="ghost" size="sm" className="text-secondary hover:text-secondary">
                    <Link to="/services">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            Our Work
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} flex items-end p-4 group cursor-pointer hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <span className="text-sm font-semibold text-background drop-shadow-lg relative z-10">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/mehendi-gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic mb-4">"{t.text}"</p>
                  <p className="text-foreground font-semibold text-sm">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Book Your Bridal Makeup or Mehendi Appointment Today
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Let us make your special day even more beautiful with our expert services.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-base px-8">
            <Link to="/book-appointment">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
