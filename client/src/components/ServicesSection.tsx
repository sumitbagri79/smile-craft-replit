import ServiceCard from "./ServiceCard";
import { 
  Stethoscope, 
  Sparkles, 
  Shield, 
  Baby, 
  Smile, 
  Wrench,
  HeartPulse,
  Scan,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive dental exams, cleanings, and preventive care for the whole family."
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers to enhance your appearance."
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Fluoride treatments, sealants, and education to keep your teeth healthy."
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, kid-friendly dental care in a comfortable environment."
  },
  {
    icon: Smile,
    title: "Invisalign",
    description: "Clear aligners for straighter teeth without traditional braces."
  },
  {
    icon: Wrench,
    title: "Restorative Care",
    description: "Fillings, crowns, bridges, and implants to restore your smile."
  },
  {
    icon: HeartPulse,
    title: "Root Canal Therapy",
    description: "Pain-free root canal treatment to save your natural teeth."
  },
  {
    icon: Scan,
    title: "Digital X-Rays",
    description: "State-of-the-art imaging with reduced radiation exposure."
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies when you need us most."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care for you and your family, all under one roof in Edison, NJ.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
