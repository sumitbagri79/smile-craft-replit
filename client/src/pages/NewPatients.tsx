import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";
import InsuranceSection from "@/components/InsuranceSection";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardList, 
  Clock, 
  Stethoscope, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  FileText,
  CreditCard
} from "lucide-react";

const firstVisitSteps = [
  {
    icon: ClipboardList,
    title: "Complete Forms",
    description: "Fill out our new patient forms online or arrive 15 minutes early to complete them in person."
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Exam",
    description: "Dr. Kaur will perform a thorough examination of your teeth, gums, and oral health."
  },
  {
    icon: FileText,
    title: "Digital X-Rays",
    description: "Low-radiation digital X-rays help us see what's happening beneath the surface."
  },
  {
    icon: MessageSquare,
    title: "Treatment Discussion",
    description: "We'll discuss our findings and create a personalized treatment plan together."
  }
];

const whatToBring = [
  "Photo ID (driver's license or passport)",
  "Insurance card (if applicable)",
  "List of current medications",
  "Previous dental X-rays (if available)",
  "Completed new patient forms"
];

export default function NewPatients() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Welcome!</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-new-patients-title">
                New Patient Information
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We're excited to welcome you to Smile Craft Dental! Here's everything you need to 
                know to prepare for your first visit.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {firstVisitSteps.map((step, index) => (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    What to Bring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatToBring.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Pro Tip:</strong> Arrive 15 minutes early if you haven't completed 
                      your forms online. This gives us time to review your information and 
                      ensures your appointment starts on time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Appointment Duration</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan for 60-90 minutes for your first visit so we can provide comprehensive care.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Payment Options</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept cash, credit cards, HSA/FSA, and offer payment plans for major treatments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Questions?</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't hesitate to ask! Our team is here to make your visit as comfortable as possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <InsuranceSection />
        <CTASection />
      </main>
      <Footer />
      <LiveChat />
      <MobileCallButton />
    </div>
  );
}
