import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart } from "lucide-react";
import dentistImage from "@assets/Gemini_Generated_Image_cmdta9cmdta9cmdt_(1)_1765076309494.png";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24" data-testid="section-about-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <img
                src={dentistImage}
                alt="Dr. Manleen Kaur, DDS - Smile Craft Dental"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-card p-4 rounded-xl shadow-lg border">
              <p className="text-sm font-medium">Smile Craft Dental - Est. 2024</p>
              <p className="text-xs text-muted-foreground">New Practice, Experienced Care</p>
            </div>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4">Meet Your Dentist</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-about-title">
              Dr. Manleen Kaur, DDS
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dr. Kaur is proud to call Edison home and is dedicated to serving families with 
              compassionate, high-quality dental care. She combines her global education with a 
              local heart, building long-term relationships with patients as fellow community members.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">University of Minnesota</p>
                  <p className="text-sm text-muted-foreground">Doctor of Dental Surgery (DDS)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">American Dental Association Member</p>
                  <p className="text-sm text-muted-foreground">Committed to continuing education</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Patient-Centered Approach</p>
                  <p className="text-sm text-muted-foreground">Your comfort is my priority</p>
                </div>
              </div>
            </div>

            <Link href="/about">
              <Button variant="outline" data-testid="button-learn-more">
                Learn More About Dr. Kaur
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
