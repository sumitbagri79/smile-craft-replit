import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileCallButton() {
  return (
    <a href="tel:+19084814882" className="md:hidden fixed bottom-4 left-4 z-50">
      <Button size="lg" variant="secondary" className="h-14 shadow-lg" data-testid="button-mobile-call">
        <Phone className="h-5 w-5 mr-2" />
        Call Now
      </Button>
    </a>
  );
}
