import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";
import AppointmentForm from "@/components/AppointmentForm";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Phone, Mail, Calendar, Video } from "lucide-react";
import { useLocation } from "wouter";

const businessHours = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "8:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function Contact() {
  const [location] = useLocation();
  const isVirtual = location.includes("type=virtual");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ready to schedule your visit? Fill out the form below or give us a call. 
                We'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue={isVirtual ? "virtual" : "appointment"} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="appointment" className="flex items-center gap-2" data-testid="tab-appointment">
                      <Calendar className="h-4 w-4" />
                      In-Office Visit
                    </TabsTrigger>
                    <TabsTrigger value="virtual" className="flex items-center gap-2" data-testid="tab-virtual">
                      <Video className="h-4 w-4" />
                      Virtual Consultation
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="appointment">
                    <AppointmentForm 
                      title="Request an In-Office Appointment"
                      description="Fill out the form below and we'll contact you within 24 hours to confirm your appointment."
                    />
                  </TabsContent>
                  <TabsContent value="virtual">
                    <AppointmentForm 
                      title="Request a Virtual Consultation"
                      description="Perfect for cosmetic consultations, second opinions, or initial discussions about treatment options."
                      isVirtual={true}
                    />
                  </TabsContent>
                </Tabs>
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
                        <p className="text-sm text-muted-foreground">
                          34-36 Progress Street, Suite B6<br />
                          Edison, NJ 08820
                        </p>
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=34-36+Progress+St+Suite+B6+Edison+NJ+08820"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline mt-2 inline-block"
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
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+19084814882" className="text-sm text-muted-foreground hover:text-foreground">
                          (908) 481-4882
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@smilecraftdental.com" className="text-sm text-muted-foreground hover:text-foreground">
                          info@smilecraftdental.com
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
              </div>
            </div>

            <div className="mt-12">
              <div className="aspect-video lg:aspect-[21/9] rounded-xl overflow-hidden">
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
