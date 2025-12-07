import TestimonialCard from "./TestimonialCard";
import malePatient from "@assets/generated_images/male_patient_testimonial_portrait.png";
import femalePatient from "@assets/generated_images/female_patient_testimonial_portrait.png";

const testimonials = [
  {
    name: "Michael R.",
    image: malePatient,
    quote: "I've always been nervous about dental visits, but Dr. Kaur and her team made me feel completely at ease. The office is beautiful and modern, and the care is exceptional. Highly recommend!",
    rating: 5
  },
  {
    name: "Jennifer L.",
    image: femalePatient,
    quote: "Finally found a dentist in Edison that I actually look forward to visiting! The staff is friendly, appointments run on time, and Dr. Kaur takes the time to explain everything.",
    rating: 5
  },
  {
    name: "David K.",
    quote: "Best dental experience I've had. The new patient process was smooth, and they worked with my insurance to make everything affordable. My whole family now comes here!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our Edison community has to say about their experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              image={testimonial.image}
              quote={testimonial.quote}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
