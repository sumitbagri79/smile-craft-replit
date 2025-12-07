import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Clock, Star } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700" data-testid="section-promo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <Badge className="mb-3 bg-white/20 text-white border-white/30 no-default-hover-elevate">
              <Star className="h-3 w-3 mr-1" />
              Grand Opening Special
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
              New Patient Complete Care Package
            </h2>
            <p className="text-emerald-100 text-lg mb-4">
              Now Open in Edison & Welcoming New Patients!
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white/90 text-sm">
              <li className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Evening & Weekend Hours
              </li>
              <li className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Se Habla Español
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-card rounded-md p-6 text-center min-w-[280px]">
            <p className="text-muted-foreground text-sm mb-1">Only</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-emerald-600">$79</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              <span className="line-through">Value of $550</span>
            </p>
            <p className="font-medium mb-4">
              Exam, Digital X-Rays & Professional Cleaning
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/contact">
                <Button className="w-full" data-testid="button-promo-book">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </Link>
              <a href="tel:+19084814882">
                <Button variant="outline" className="w-full" data-testid="button-promo-call">
                  <Phone className="h-4 w-4 mr-2" />
                  (908) 481-4882
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Valid through Dec 31, 2025. Not combinable with insurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
