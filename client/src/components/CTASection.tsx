import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-primary" data-testid="section-cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          New Patients Welcome
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          We're accepting new patients and would love to welcome you to our Edison dental family. 
          Schedule your first appointment today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-cta-book">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your First Visit
            </Button>
          </Link>
          <a href="tel:+19084814882">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground bg-white/10 backdrop-blur-sm"
              data-testid="button-cta-call"
            >
              <Phone className="mr-2 h-5 w-5" />
              (908) 481-4882
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
