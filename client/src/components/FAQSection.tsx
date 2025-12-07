import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a comprehensive exam, digital X-rays, and a professional cleaning. Dr. Kaur will discuss your oral health goals and create a personalized treatment plan. The entire visit typically takes about an hour."
  },
  {
    question: "Do you accept my dental insurance?",
    answer: "Yes! We accept most PPO dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, United Healthcare, and many more. Our team will help you maximize your benefits and understand your coverage."
  },
  {
    question: "What if I don't have dental insurance?",
    answer: "No problem! We offer affordable payment options and our $79 New Patient Special includes exam, X-rays, and cleaning. We also accept CareCredit financing with flexible payment plans."
  },
  {
    question: "Do you offer evening and weekend appointments?",
    answer: "Yes! We understand busy schedules. We offer evening and weekend appointments to accommodate your family's needs. Call us to find a time that works for you."
  },
  {
    question: "What if I'm nervous about visiting the dentist?",
    answer: "We specialize in gentle, anxiety-free dentistry. Our office offers a calming environment, and Dr. Kaur takes extra time to explain procedures and ensure your comfort. We also offer sedation options for patients with dental anxiety."
  },
  {
    question: "Do you see children and families?",
    answer: "Absolutely! Smile Craft Dental is a family-friendly practice. We welcome patients of all ages, from toddlers to seniors. Dr. Kaur loves working with children and making their dental visits positive experiences."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-24" data-testid="section-faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? We have answers. Here are some common questions from our patients.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="text-left" data-testid={`faq-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`faq-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
