import Header from "@/components/Header";
import QuickActionBar from "@/components/QuickActionBar";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServicesSection";
import ComfortSection from "@/components/ComfortSection";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import InsuranceSection from "@/components/InsuranceSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <QuickActionBar />
      <main className="flex-1">
        <Hero />
        <PromoBanner />
        <ServicesSection />
        <ComfortSection />
        <AboutPreview />
        <TestimonialsSection />
        <FAQSection />
        <InsuranceSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <LiveChat />
      <MobileCallButton />
    </div>
  );
}
