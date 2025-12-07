import ServiceCard from "../ServiceCard";
import { Sparkles } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        icon={Sparkles}
        title="Teeth Whitening"
        description="Brighten your smile with our professional whitening treatments."
      />
    </div>
  );
}
