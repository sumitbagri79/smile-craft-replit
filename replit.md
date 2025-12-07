# Smile Craft Dental - Edison, NJ Website

## Overview

This is a modern dental practice website for Smile Craft Dental, located in Edison, New Jersey. The application serves as a digital presence for the practice, enabling potential and existing patients to learn about services, book appointments, and contact the practice. The site emphasizes warmth, accessibility, and a welcoming approach to dental care, moving away from traditional clinical aesthetics.

**Business Purpose**: Attract new patients, facilitate appointment bookings, and provide essential information about dental services in a user-friendly manner.

**Key Features**:
- Multi-page informational website (Home, Services, About, New Patients, Contact)
- Appointment booking system with in-office and virtual consultation options
- Contact form for general inquiries
- Live chat widget for real-time assistance
- Mobile-first design with one-tap calling
- Insurance information and payment options
- Patient testimonials and service showcase

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter - a lightweight client-side routing library providing navigation between pages without full page reloads.

**UI Component Library**: Radix UI primitives with shadcn/ui styling system. This provides accessible, unstyled components that are customized using Tailwind CSS. The "new-york" style variant is configured.

**Styling Approach**:
- Tailwind CSS for utility-first styling
- Custom CSS variables for theming (light/dark mode support configured)
- Design system follows guidelines in `design_guidelines.md` emphasizing warmth, approachability, and modern healthcare aesthetics
- Custom fonts: Poppins (primary), DM Sans, Architects Daughter, Geist Mono, and Fira Code

**State Management**:
- TanStack React Query (v5) for server state management, data fetching, and caching
- React Hook Form with Zod validation for form state and validation
- Local component state using React hooks

**Key Design Decisions**:
- Mobile-first responsive design with sticky header and mobile call button
- Accessibility-focused using Radix UI primitives
- Performance optimized with lazy loading and code splitting via Vite
- Forms use client-side validation with Zod schemas for type safety

### Backend Architecture

**Runtime**: Node.js with Express.js framework

**API Design**: RESTful JSON API with the following endpoints:
- `POST /api/appointments` - Create new appointment requests
- `GET /api/appointments` - Retrieve appointment list
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact` - Retrieve contact messages

**Data Layer**:
- Drizzle ORM configured for PostgreSQL
- Type-safe database queries using Drizzle
- Schema definitions in `shared/schema.ts` with Zod validation
- Current implementation uses in-memory storage (`MemStorage`) as a fallback, but Drizzle schema is defined for PostgreSQL migration

**Storage Strategy**:
- Database schema defined for: users, appointments, contact_messages
- UUID primary keys generated via PostgreSQL's `gen_random_uuid()`
- Timestamps for tracking creation dates
- Status fields for appointment workflow management

**Build Process**:
- esbuild bundles server code for production
- Vite builds client with HMR in development
- Server dependencies are selectively bundled (allowlist) to reduce cold start times
- Static file serving for production builds

**Development vs Production**:
- Development: Vite dev server with HMR, middleware mode for Express integration
- Production: Pre-built static files served by Express

### Schema Design

**User Schema**: Basic authentication structure (username/password) - currently unused but prepared for future admin portal.

**Appointment Schema**:
- Patient information: firstName, lastName, email, phone
- Scheduling: preferredDate, preferredTime
- Service details: reason for visit, optional message
- Feature flags: isVirtual (for virtual consultations)
- Workflow: status field (defaults to "pending")

**Contact Message Schema**:
- Sender information: name, email, optional phone
- Message content: subject, message body
- Metadata: createdAt timestamp

**Validation Strategy**: Drizzle-Zod integration generates type-safe Zod schemas from database table definitions, ensuring consistency between database and API validation.

### External Dependencies

**UI Component Libraries**:
- @radix-ui/* (v1.x) - Accessible component primitives for dialogs, dropdowns, forms, navigation, toasts, etc.
- embla-carousel-react - Carousel/slider functionality
- cmdk - Command palette component
- lucide-react - Icon library

**Form Handling**:
- react-hook-form - Form state management
- @hookform/resolvers - Integration with Zod validation
- zod - Schema validation and type inference
- drizzle-zod - Generate Zod schemas from Drizzle tables

**Data Fetching**:
- @tanstack/react-query - Server state management and caching

**Database**:
- drizzle-orm - TypeScript ORM for SQL databases
- pg (implied) - PostgreSQL client driver
- drizzle-kit - Migration and schema management tools

**Styling**:
- tailwindcss - Utility-first CSS framework
- tailwind-merge - Merge Tailwind classes intelligently
- clsx - Conditional className utility
- class-variance-authority - Type-safe variant styling
- autoprefixer - PostCSS plugin for vendor prefixes

**Utilities**:
- date-fns - Date manipulation and formatting
- nanoid - Unique ID generation

**Development Tools**:
- @replit/vite-plugin-* - Replit-specific development enhancements
- TypeScript - Type safety across the stack
- ESM modules throughout (type: "module" in package.json)

**Asset Management**: Images stored in `attached_assets` directory and imported using Vite's asset handling with path alias `@assets`.

**Google Fonts Integration**: Poppins, DM Sans, Architects Daughter, Geist Mono, and Fira Code loaded via Google Fonts CDN.

**Browser Compatibility**: Modern browsers with ES6+ support; uses `browserslist` defaults.