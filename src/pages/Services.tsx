import { Sparkles, Hand, Scissors, Flower2, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            From bridal transformations to everyday beauty care, we offer a complete range of services for every woman.
          </p>
        </div>
      </section>

      {/* Bridal Makeup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-7 w-7 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Bridal Makeup</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Traditional Bridal", "Reception Makeup", "Engagement Makeup", "Party Makeup"].map((s, i) => (
                  <Card key={i} className="bg-card border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <p className="font-semibold text-foreground text-sm">{s}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">Why Choose Our Bridal Makeup?</h3>
              <ul className="space-y-2">
                {["Long-lasting makeup that stays flawless", "Customized bridal looks for your style", "Skin-friendly, premium products", "Expert artists with years of experience"].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mehendi */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <Hand className="h-7 w-7 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Mehendi Services</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Bridal Mehendi", desc: "Elaborate, detailed designs for brides – full hands, feet, and arms." },
              { title: "Festival Mehendi", desc: "Beautiful patterns for Karwa Chauth, Diwali, and other celebrations." },
              { title: "Custom Designs", desc: "Personalized mehendi art tailored to your preferences and style." },
            ].map((m, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ear Piercing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <Scissors className="h-7 w-7 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Ear Piercing</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🛡️", title: "Safe", desc: "Using sterilized equipment for every client." },
              { icon: "✨", title: "Hygienic", desc: "Strict cleanliness protocols followed at all times." },
              { icon: "⚡", title: "Quick Process", desc: "Comfortable and fast procedure with gentle care." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Treatments */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <Flower2 className="h-7 w-7 text-secondary" />
            <h2 className="font-display text-2xl font-bold text-foreground">Beauty Treatments</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Everyday beauty care services to help you look and feel your best. Professional treatments with quality products.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Scissors, title: "Threading" },
              { icon: Flower2, title: "Facials" },
              { icon: Heart, title: "Waxing" },
              { icon: Sparkles, title: "Grooming" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
