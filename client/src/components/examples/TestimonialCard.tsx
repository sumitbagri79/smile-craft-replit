import TestimonialCard from "../TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="John D."
        quote="Dr. Chen is amazing! She made me feel so comfortable during my visit."
        rating={5}
      />
    </div>
  );
}
