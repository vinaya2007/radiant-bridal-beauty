import { Heart, Shield, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Personal Touch", desc: "Every client is treated like family with personalized attention and care." },
  { icon: Shield, title: "Hygiene First", desc: "We maintain the highest standards of cleanliness and safety in all services." },
  { icon: Users, title: "Community Trust", desc: "Built on years of trust and word-of-mouth referrals in Thanjavur." },
  { icon: Sparkles, title: "Bridal Expertise", desc: "Specialized in creating stunning bridal looks for traditional weddings." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sri Sai Sakthi Beauty Parlor & Mehandi has been a trusted name in Karanthai, Thanjavur for women's beauty services. From bridal makeup to intricate mehendi designs, we bring passion, skill, and warmth to every appointment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/30 via-accent to-secondary/30 flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium">Parlour Photo</span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small beauty parlour has grown into one of Thanjavur's most beloved women's beauty destinations. Our founder's passion for bridal beauty and mehendi artistry has earned us a 4.9-star Google rating.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe every woman deserves to feel beautiful. Whether it's your wedding day or a simple threading appointment, we provide the same level of care, attention, and warmth. Our clients aren't just customers — they're part of our family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Our Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/15 flex items-center justify-center">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
