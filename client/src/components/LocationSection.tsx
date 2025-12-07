import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const businessHours = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "8:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function LocationSection() {
  return (
    <section className="py-16 sm:py-24" data-testid="section-location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Our Edison Office</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in the heart of Edison, NJ with easy parking and accessibility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=34-36+Progress+St,+Suite+B6,+Edison,+NJ+08820&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smile Craft Dental Location"
            />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      34-36 Progress Street, Suite B6<br />
                      Edison, NJ 08820
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=34-36+Progress+St+Suite+B6+Edison+NJ+08820"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-2 inline-block"
                      data-testid="link-directions"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3">Office Hours</h3>
                    <div className="space-y-1">
                      {businessHours.map(({ day, hours }) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{day}</span>
                          <span className={hours === "Closed" ? "text-muted-foreground" : ""}>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+19084814882">
                <Button variant="outline" className="w-full" data-testid="button-call">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </a>
              <a href="mailto:info@smilecraftdental.com">
                <Button variant="outline" className="w-full" data-testid="button-email">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
