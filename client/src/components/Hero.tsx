import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Video } from "lucide-react";
import heroImage from "@assets/generated_images/welcoming_dental_office_interior.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern welcoming dental office in Edison, NJ"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/90 text-sm font-medium mb-4 uppercase tracking-wider">
            Now Welcoming New Patients
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
            Your Smile is<br />Our Craft
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Experience compassionate dental care in a warm, welcoming environment. 
            We're here to help you achieve and maintain a healthy, beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-primary/90 backdrop-blur-sm border border-primary-border" data-testid="button-hero-book">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact?type=virtual">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white"
                data-testid="button-hero-virtual"
              >
                <Video className="mr-2 h-5 w-5" />
                Virtual Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
