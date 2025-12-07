import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart, Users, Building, Lightbulb } from "lucide-react";
import dentistImage from "@assets/Gemini_Generated_Image_cmdta9cmdta9cmdt_(1)_1765076309494.png";
import officeImage from "@assets/generated_images/welcoming_dental_office_interior.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Badge variant="secondary" className="mb-4">About Smile Craft Dental</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-page-title">
                  Your Partners in Dental Health
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  At Smile Craft Dental, we believe everyone deserves a healthy, beautiful smile. 
                  As Edison's newest dental practice, we combine state-of-the-art technology 
                  with a warm, patient-centered approach to create an experience that's 
                  comfortable, efficient, and effective.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is simple: to provide exceptional dental care in a welcoming 
                  environment where every patient feels heard, respected, and cared for. 
                  Whether you're here for a routine cleaning or a complete smile makeover, 
                  we're committed to exceeding your expectations.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={officeImage}
                    alt="Edison Dental Care modern office"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Modern Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    Digital X-rays, intraoral cameras, and the latest dental equipment for precise, comfortable care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Patient-First Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Your comfort and satisfaction are our top priorities. We listen, explain, and customize your care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Community Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Proud to serve the Edison community with accessible, affordable dental care for families.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge variant="secondary" className="mb-4">Meet Your Dentist</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-dr-kaur-title">
                  Dr. Manleen Kaur, DDS
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dr. Manleen Kaur is proud to call Edison home and is dedicated to serving the families 
                  of her community with compassionate, high-quality dental care. At Smile Craft Dental, 
                  she combines her global education with a local heart, striving to make top-tier dentistry 
                  accessible to her neighbors in Edison and the surrounding Central New Jersey areas.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a mother and a resident of the area, Dr. Kaur understands the importance of finding 
                  a dental home where every family member feels safe and respected. She is passionate about 
                  building long-term relationships with her patients, treating them not just as appointments, 
                  but as fellow community members.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When she isn't at the office, you can find Dr. Kaur out and about in Edison, enjoying time 
                  with her husband and their two children, or planning their next family travel adventure.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Educational Excellence</p>
                      <p className="text-sm text-muted-foreground">
                        Bachelor of Dental Surgery - Amritsar, India<br />
                        Master of Public Health in Epidemiology - University of North Texas<br />
                        Doctor of Dental Surgery - University of Minnesota
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Professional Memberships</p>
                      <p className="text-sm text-muted-foreground">
                        American Dental Association<br />
                        New Jersey Dental Association<br />
                        Academy of General Dentistry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Practice Founded</p>
                      <p className="text-sm text-muted-foreground">2024 - Edison, NJ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl">
                  <img
                    src={dentistImage}
                    alt="Dr. Manleen Kaur, DDS - Smile Craft Dental"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <LiveChat />
      <MobileCallButton />
    </div>
  );
}
