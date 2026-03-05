import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  { label: "Traditional Bridal Look", gradient: "from-primary to-secondary" },
  { label: "Reception Glamour", gradient: "from-secondary to-gold" },
  { label: "South Indian Bride", gradient: "from-rose to-primary" },
  { label: "Engagement Glow", gradient: "from-gold to-secondary" },
  { label: "Before & After", gradient: "from-primary/80 to-rose" },
  { label: "Wedding Day Ready", gradient: "from-rose to-gold" },
];

const BridalPortfolio = () => {
  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Bridal Portfolio</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            See our stunning bridal transformations. Every bride deserves to look and feel her absolute best.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${item.gradient} flex items-end p-6 group cursor-pointer hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <p className="text-lg font-display font-semibold text-background drop-shadow-lg relative z-10">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-accent border border-border">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Custom Bridal Packages Available</h3>
            <p className="text-muted-foreground mb-4">Contact us for personalized bridal makeup packages tailored to your needs.</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/book-appointment">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BridalPortfolio;
