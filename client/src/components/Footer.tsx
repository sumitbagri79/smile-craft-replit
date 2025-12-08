import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/clean_minimal_tooth_logo_icon.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "New Patients", href: "/new-patients" },
  { label: "Contact", href: "/contact" }
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Preventive Care",
  "Invisalign",
  "Emergency Care"
];

export default function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src={logoImage}
                alt="Smile Craft Dental - Edison, NJ"
                className="h-24 w-auto object-contain"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing compassionate, comprehensive dental care to the Edison community. 
              Your healthy smile is our priority.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  34-36 Progress Street, Suite B6<br />Edison, NJ 08820
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+19084814882" className="text-muted-foreground hover:text-foreground transition-colors">
                  (908) 481-4882
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@smilecraftdental.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@smilecraftdental.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Mon-Thu: 8am-6pm<br />
                  Fri: 8am-4pm | Sat: 9am-2pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Smile Craft Dental. All rights reserved.</p>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
          <Button variant="outline" size="sm" asChild data-testid="button-google-review">
            <a 
              href="https://share.google/p57afZlRTSBnB4cpD" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Star className="h-4 w-4 mr-2" />
              Leave a Google Review
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
