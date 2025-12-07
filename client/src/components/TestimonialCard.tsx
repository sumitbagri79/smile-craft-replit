import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image?: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({ name, image, quote, rating = 5 }: TestimonialCardProps) {
  const initials = name.split(" ").map(n => n[0]).join("");
  
  return (
    <Card data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">Patient</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
