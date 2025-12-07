import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, Percent } from "lucide-react";

const insuranceProviders = [
  "Delta Dental",
  "Aetna",
  "Cigna",
  "MetLife",
  "United Healthcare",
  "Blue Cross Blue Shield",
  "Guardian",
  "Humana"
];

export default function InsuranceSection() {
  return (
    <section className="py-16 sm:py-24" data-testid="section-insurance">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Insurance & Payment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We accept most major dental insurance plans and offer flexible payment options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Insurance Accepted</h3>
              <p className="text-sm text-muted-foreground">We work with most major dental insurance providers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Payment</h3>
              <p className="text-sm text-muted-foreground">Payment plans available for major treatments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Percent className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">New Patient Special</h3>
              <p className="text-sm text-muted-foreground">Special pricing for new patients without insurance</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">Accepted Insurance Providers</p>
          <div className="flex flex-wrap justify-center gap-2">
            {insuranceProviders.map((provider) => (
              <Badge key={provider} variant="secondary" data-testid={`badge-insurance-${provider.toLowerCase().replace(/\s+/g, "-")}`}>
                {provider}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
