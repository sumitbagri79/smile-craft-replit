import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Tv, Sparkles, Heart, Moon, Smile } from "lucide-react";

const comfortItems = [
  {
    icon: Heart,
    title: "Gentle Care",
    description: "Dr. Kaur takes extra time to ensure every procedure is as comfortable as possible"
  },
  {
    icon: Moon,
    title: "Sedation Options",
    description: "Nitrous oxide and oral sedation available for anxious patients"
  },
  {
    icon: Headphones,
    title: "Personal Music",
    description: "Bring your headphones or use ours to listen to your favorite music"
  },
  {
    icon: Tv,
    title: "TV & Entertainment",
    description: "Watch Netflix or TV during your treatment to help you relax"
  },
  {
    icon: Sparkles,
    title: "Modern Equipment",
    description: "State-of-the-art technology for faster, more comfortable treatments"
  },
  {
    icon: Smile,
    title: "Friendly Team",
    description: "Our warm, welcoming staff makes every visit feel like family"
  }
];

export default function ComfortSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-comfort">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Comfort is Our Priority</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nervous about visiting the dentist? We've created a relaxing environment with amenities designed to put you at ease.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comfortItems.map((item, index) => (
            <Card key={index} className="text-center" data-testid={`comfort-card-${index}`}>
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
