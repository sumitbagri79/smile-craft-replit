import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Star, Phone, MapPin } from "lucide-react";

const actions = [
  {
    icon: Calendar,
    label: "Request Appointment",
    href: "/contact",
    isExternal: false
  },
  {
    icon: FileText,
    label: "New Patient Info",
    href: "/new-patients",
    isExternal: false
  },
  {
    icon: Star,
    label: "Leave a Review",
    href: "https://share.google/p57afZlRTSBnB4cpD",
    isExternal: true
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+19084814882",
    isExternal: true
  },
  {
    icon: MapPin,
    label: "Get Directions",
    href: "https://maps.google.com/?q=34-36+Progress+Street+Suite+B6+Edison+NJ+08820",
    isExternal: true
  }
];

export default function QuickActionBar() {
  return (
    <div className="bg-muted/50 border-b" data-testid="quick-action-bar">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1 sm:gap-2 py-2 overflow-x-auto">
          {actions.map((action, index) => (
            action.isExternal ? (
              <Button key={index} variant="ghost" size="sm" asChild className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap" data-testid={`quick-action-${index}`}>
                <a href={action.href} target={action.href.startsWith("tel:") ? undefined : "_blank"} rel="noopener noreferrer">
                  <action.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{action.label}</span>
                </a>
              </Button>
            ) : (
              <Button key={index} variant="ghost" size="sm" asChild className="flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap" data-testid={`quick-action-${index}`}>
                <Link href={action.href}>
                  <action.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{action.label}</span>
                </Link>
              </Button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
