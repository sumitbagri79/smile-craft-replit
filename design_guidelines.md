# Design Guidelines: Edison Dental Practice Website

## Design Approach
**Reference-Based: Modern Healthcare/Dental** - Drawing inspiration from contemporary dental practices like Tend, One Medical, and forward-thinking healthcare sites that balance clinical professionalism with warm approachability. Focus on trust-building for a new practice while maintaining an inviting, patient-centered experience.

## Core Design Principles
1. **Warmth Over Clinical** - Approachable, human-centered design that reduces dental anxiety
2. **Trust Through Clarity** - Transparent information architecture, clear service descriptions
3. **Local First** - Strong Edison, NJ presence throughout the experience
4. **Mobile-Optimized Actions** - One-tap calling, easy form completion on small screens

---

## Typography System

**Primary Font**: Inter or Poppins (Google Fonts)
- Headings (H1): 3xl to 5xl, font-semibold to font-bold
- Headings (H2/H3): 2xl to 3xl, font-semibold
- Body: base to lg, font-normal, leading-relaxed
- Accents: font-medium for CTAs and emphasis

**Secondary Font**: System sans-serif stack for forms and UI elements

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Component spacing: gap-8 to gap-12 between major elements
- Card padding: p-6 to p-8
- Form field spacing: space-y-6

**Container Strategy**:
- Full-width sections with inner max-w-7xl for content
- Text content: max-w-3xl for readability
- Forms: max-w-2xl centered

---

## Component Library

### Navigation
- Sticky header with practice logo/name, phone number, and "Book Appointment" CTA
- Mobile: Hamburger menu with large touch targets
- Desktop: Horizontal nav with subtle hover states
- Include Edison, NJ in header tagline or subtext

### Hero Section
- Large, warm hero image (smiling patient or welcoming office space)
- Overlaid heading: "Your Trusted Dentist in Edison, NJ" or similar
- Subheading emphasizing new patient welcome
- Two CTAs: Primary "Book Appointment" and Secondary "Virtual Consultation"
- Buttons with blurred background for contrast over image
- Height: 80vh to 90vh for impact

### Service Cards
- Grid layout: 3 columns on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), 1 on mobile
- Each card: Icon, service name, brief description
- Soft shadows and rounded corners (rounded-xl)
- Hover: Subtle lift effect

### Forms (Appointment Request, Contact, Virtual Consultation)
- Single column layout, max-w-2xl
- Large input fields with clear labels
- Prominent submit buttons
- Validation states with friendly messaging
- Phone field with Edison area code (732) pre-filled

### Trust Elements
- Credentials section: Education, certifications, professional memberships
- Testimonial cards: Patient quote, name (first name + last initial), 2-column on desktop
- Insurance logos grid: Accepted insurance providers

### Live Chat Widget
- Fixed bottom-right position
- Friendly chat bubble icon
- Opens to simple chat interface for general questions
- Clear disclaimer: "For general questions only"

### Footer
- 3-4 column layout on desktop: Practice info, Quick links, Services, Contact
- Newsletter signup for dental health tips
- Social media links
- Google Maps preview/link
- Office hours prominently displayed

---

## Page-Specific Layouts

### Homepage
1. Hero with dual CTAs
2. Welcome section: "Welcome to [Practice Name] - Edison's Newest Dental Home"
3. Services overview (6-9 service cards)
4. About preview with dentist photo and credentials
5. Patient testimonials (2-3 cards)
6. Insurance/payment information
7. Location section with map and directions
8. Final CTA: "New Patients Welcome"

### Services Page
- Hero: Brief intro to comprehensive care
- Service categories with detailed descriptions
- Each service: Icon, name, description, "Learn More" expansion
- Before/after gallery (start with stock, replace with real cases)
- CTA: "Schedule Your Visit"

### About Page
- Dentist photo (professional but friendly)
- Personal story: Why Edison, dental philosophy
- Credentials and education timeline
- Team section (if applicable)
- Office tour gallery

### Contact/New Patients
- Split layout: Contact form on left, info on right (desktop)
- Info includes: Address, phone (click-to-call), email, hours
- Interactive Google Maps embed
- "What to Expect" section for first visit
- Insurance and payment options clearly listed

---

## Images

### Required Images
1. **Hero Image**: Warm, inviting dental office or smiling patient (full-width, high-quality)
2. **Dentist Portrait**: Professional headshot with friendly expression (About page)
3. **Office Photos**: 3-4 images of welcoming treatment rooms, reception area
4. **Service Icons**: Simple, line-style icons for each dental service
5. **Team Photos**: Staff members if applicable (warm, approachable poses)

**Image Treatment**: Soft, natural lighting; avoid overly clinical/sterile aesthetics; use warm color grading

---

## Mobile-Specific Considerations
- Click-to-call button fixed at bottom of screen on mobile
- Simplified navigation with priority on "Book Appointment"
- Stack all multi-column layouts to single column
- Touch-friendly form inputs (minimum 44px height)
- Reduced animation/transitions for performance

---

## SEO Integration Points
- H1 tag: Include "Dentist in Edison, NJ"
- Alt text for all images referencing location and service
- Schema markup placeholders for LocalBusiness, Dentist, and FAQPage
- Meta descriptions emphasizing "new practice," "Edison," and key services

---

## Accessibility
- WCAG 2.1 AA compliance
- Sufficient color contrast for text (4.5:1 minimum)
- Keyboard navigation support
- ARIA labels for interactive elements
- Form error messages clearly associated with fields

---

This warm, trust-focused design will position your new Edison practice as approachable and professional, optimized for converting first-time patients while establishing strong local SEO presence.