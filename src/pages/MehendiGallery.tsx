const categories = ["All", "Bridal", "Festival", "Full Hand", "Close-up Art"];

const galleryItems = [
  { label: "Bridal Full Hand", category: "Bridal", gradient: "from-primary to-secondary" },
  { label: "Festival Mehendi", category: "Festival", gradient: "from-secondary to-gold" },
  { label: "Close-up Floral", category: "Close-up Art", gradient: "from-rose to-primary" },
  { label: "Bridal Feet Design", category: "Bridal", gradient: "from-gold to-secondary" },
  { label: "Full Hand Arabic", category: "Full Hand", gradient: "from-primary/80 to-rose" },
  { label: "Diwali Special", category: "Festival", gradient: "from-secondary to-primary" },
  { label: "Traditional Bridal", category: "Bridal", gradient: "from-rose to-gold" },
  { label: "Peacock Design", category: "Close-up Art", gradient: "from-gold to-primary" },
  { label: "Full Arm Mehendi", category: "Full Hand", gradient: "from-primary to-secondary/80" },
  { label: "Karwa Chauth", category: "Festival", gradient: "from-rose to-secondary" },
  { label: "Bridal Jaal", category: "Bridal", gradient: "from-secondary/80 to-gold" },
  { label: "Lotus Detail", category: "Close-up Art", gradient: "from-primary to-rose" },
];

import { useState } from "react";

const MehendiGallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Mehendi Gallery</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Browse our collection of intricate mehendi designs — from bridal masterpieces to festival specials.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-muted-foreground hover:bg-primary/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} flex items-end p-4 group cursor-pointer hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300" />
                <div className="relative z-10">
                  <span className="text-xs text-background/70">{item.category}</span>
                  <p className="text-sm font-semibold text-background drop-shadow-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MehendiGallery;
