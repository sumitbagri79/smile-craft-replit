import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Stethoscope, 
  Sparkles, 
  Shield, 
  Baby, 
  Smile, 
  Wrench,
  HeartPulse,
  Scan,
  Clock,
  CheckCircle,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, and preventive care for the whole family.",
    features: ["Dental exams & cleanings", "Cavity detection", "Gum disease treatment", "Oral cancer screening"]
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers to enhance your appearance.",
    features: ["Professional whitening", "Porcelain veneers", "Dental bonding", "Smile makeovers"]
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Fluoride treatments, sealants, and education to keep your teeth healthy.",
    features: ["Fluoride treatments", "Dental sealants", "Oral hygiene education", "Sports mouth guards"]
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, kid-friendly dental care in a comfortable environment.",
    features: ["Child-friendly approach", "First dental visits", "Sealants & fluoride", "Growth monitoring"]
  },
  {
    icon: Smile,
    title: "Invisalign",
    description: "Clear aligners for straighter teeth without traditional braces.",
    features: ["Clear aligners", "Custom treatment plans", "Comfortable fit", "Removable design"]
  },
  {
    icon: Wrench,
    title: "Restorative Care",
    description: "Fillings, crowns, bridges, and implants to restore your smile.",
    features: ["Tooth-colored fillings", "Dental crowns", "Bridges & implants", "Full mouth restoration"]
  },
  {
    icon: HeartPulse,
    title: "Root Canal Therapy",
    description: "Pain-free root canal treatment to save your natural teeth.",
    features: ["Modern techniques", "Minimal discomfort", "Same-day treatment", "Natural tooth preservation"]
  },
  {
    icon: Scan,
    title: "Digital X-Rays",
    description: "State-of-the-art imaging with reduced radiation exposure.",
    features: ["Low radiation", "Instant results", "Precise diagnostics", "Digital records"]
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies when you need us most.",
    features: ["Same-day service", "After-hours care", "Pain relief", "Trauma treatment"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-services-title">
                Our Dental Services
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive dental care for you and your family, all under one roof in Edison, NJ. 
                We combine the latest technology with a gentle, patient-centered approach.
              </p>
            </div>

            <div className="grid gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className={index % 2 === 0 ? "" : ""} data-testid={`card-service-detail-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <service.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h2 className="text-2xl font-semibold">{service.title}</h2>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="lg:w-1/3">
                        <h3 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                          What's Included
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button size="lg" data-testid="button-services-book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LiveChat />
      <MobileCallButton />
    </div>
  );
}
