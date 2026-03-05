import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Priya Mohan", text: "Excellent service and friendly staff. My bridal makeup was absolutely stunning! Everyone at the wedding complimented my look.", rating: 5 },
  { name: "Lakshmi Ramesh", text: "Makeup look very beautiful. They understand exactly what I wanted and made me feel like a princess on my engagement day.", rating: 5 },
  { name: "Kavitha Sundaram", text: "Customer treat very nice. I always come here for all beauty services. The staff is so warm and welcoming every time.", rating: 5 },
  { name: "Deepa Krishnan", text: "Ear piercing very good. Very safe and hygienic. I brought my daughter too and they were so gentle with her.", rating: 5 },
  { name: "Meena Bala", text: "Best mehendi artist in Thanjavur! My bridal mehendi was so detailed and beautiful. All my relatives were impressed.", rating: 5 },
  { name: "Saranya Devi", text: "I've been coming here for years. Threading, facial, everything is done so well. Very affordable and great quality.", rating: 5 },
];

const TestimonialsPage = () => {
  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Testimonials</h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg">
            Hear from our happy clients who trust us with their beauty needs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-foreground font-display font-semibold">— {r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
