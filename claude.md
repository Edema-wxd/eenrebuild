# EEN Consulting Website - Development Guide

**Last Updated**: 2026-01-03
**Version**: 1.0
**Project Type**: Next.js 15 (App Router) - Static Export Site

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Brand Guidelines](#brand-guidelines)
5. [Design System](#design-system)
6. [Component Architecture](#component-architecture)
7. [Page Structure](#page-structure)
8. [Features & Functionality](#features--functionality)
9. [Blog System](#blog-system) ⭐ NEW
10. [Development Workflow](#development-workflow)
11. [Code Conventions](#code-conventions)
12. [Deployment](#deployment)

---

## Project Overview

**EEN Consulting** is a professional website for an energy consulting and sustainability company operating in Nigeria. The company specializes in:

- Solar energy solutions
- Water conservation systems (exclusive Neoperl distributor for West Africa)
- Smart metering systems
- EDGE Building Certification (IFC/World Bank partnership)

### Mission & Vision

**Mission**: Implement sustainable energy in homes, offices, schools, and hospitals
**Vision**: Achieve efficient energy use in Nigeria and build a sustainable future

### Key Metrics

- **7+ years** of excellence
- **100+ clients** served
- **50M+ liters** of water saved
- **20%+ energy savings** guaranteed
- **30% average** energy reduction

---

## Tech Stack

### Core Framework

```json
{
  "next": "15.3.3",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "typescript": "5"
}
```

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Radix UI** - Accessible component primitives
- **Class Variance Authority (CVA)** - Component variant system
- **clsx + tailwind-merge** - Classname utilities

### Animation & Motion

- **framer-motion** (12.23.0) - Production-ready motion library
- **tw-animate-css** (1.3.4) - Tailwind animation utilities
- Custom CSS animations (fade-in-up, scale-x, blob, float)

### Icons

- **lucide-react** (0.513.0) - Primary icon library
- **react-icons** (5.5.0) - Supplementary icons (Font Awesome, Game Icons)

### Forms & Email

- **@emailjs/browser** (4.4.1) - Email service integration
- Custom form validation utilities
- Rate limiting via localStorage

### Build Tools

- ESLint 9
- PostCSS with Tailwind

---

## Project Structure

```
/eenrebuild
├── /public/
│   ├── /images/          # Hero images, backgrounds
│   ├── /logos/           # Company and partner logos
│   ├── /team/            # Team member photos
│   └── *.svg            # Icon assets
├── /src/
│   ├── /app/            # Next.js App Router pages
│   │   ├── page.tsx                    # Home page
│   │   ├── about/page.tsx              # About Us
│   │   ├── contact-us/page.tsx         # Contact form
│   │   ├── edge-building/page.tsx      # EDGE Certification
│   │   ├── partners/page.tsx           # Partners
│   │   ├── services/
│   │   │   ├── page.tsx               # Services hub
│   │   │   ├── solar/page.tsx         # Solar energy
│   │   │   ├── smart-metering/page.tsx
│   │   │   └── water-solutions/page.tsx
│   │   ├── layout.tsx                  # Root layout
│   │   └── globals.css                 # Global styles
│   ├── /components/
│   │   ├── /ui/                # shadcn/ui primitives
│   │   ├── /genui/             # Layout components (Header, Footer)
│   │   ├── /home/              # Home page components
│   │   ├── /about/             # About page components
│   │   ├── /edge/              # EDGE certification components
│   │   ├── /services/          # Service page components
│   │   └── /partners/          # Partner components
│   ├── /lib/
│   │   └── utils.ts            # cn() utility for classnames
│   └── /utils/
│       ├── email.ts            # Email service configuration
│       ├── formValidation.ts   # Form validation logic
│       └── rateLimiter.ts      # Submission rate limiting
├── components.json              # shadcn/ui configuration
├── next.config.ts              # Next.js config (static export)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

### Directory Purposes

- **`/app`**: Next.js 15 App Router pages - each folder represents a route
- **`/components/ui`**: Generic, reusable UI components from shadcn/ui
- **`/components/genui`**: Layout components (Header, Footer)
- **`/components/[feature]`**: Feature-specific components organized by page
- **`/lib`**: Core utilities (classname merging)
- **`/utils`**: Business logic utilities (email, validation, rate limiting)
- **`/public`**: Static assets served directly

---

## Brand Guidelines

### Company Identity

**Company Name**: EEN Consulting
**Legal Entity**: EEN Consulting Limited
**Tagline**: "Driving sustainability in the Nigerian built environment"

### Brand Colors

#### Primary Palette

```css
/* Battery Blue - Primary brand color */
--battery-blue: #1AA3DD;
rgb(26, 163, 221)

/* Mantis Green - Sustainability accent */
--mantis-green: #73C167;
rgb(115, 193, 103)

/* Granite Gray - Professional neutral */
--granite-gray: #606163;
rgb(96, 97, 99)

/* Light Gray - Backgrounds */
--light-gray: #f5f5f5;
rgb(245, 245, 245)
```

#### Service-Specific Colors

```css
/* Water Solutions */
--water-blue: #00A8E8;

/* Solar Energy */
--solar-orange: #FFA500;
--solar-yellow: #FFD700;

/* Smart Metering */
--electric-purple: #6B46C1;
--data-blue: #0066CC;

/* EDGE Certification */
--edge-green: #00A651;
--edge-blue: #0072CE;
```

#### Partner Brand Colors

```css
/* Neoperl */
--neoperl-blue: #0066CC;

/* IFC | World Bank */
--ifc-blue: #002F6C;

/* Solid Green */
--solid-green: #00A651;
```

### Typography

**Primary Font**: Montserrat (Google Fonts)
**Fallback**: system-ui, sans-serif
**Monospace**: Geist Mono (for code)

**Font Weights Used**:
- Regular (400) - Body text
- Medium (500) - Subheadings
- Semibold (600) - Section titles
- Bold (700) - Headlines
- Extrabold (800) - Hero titles

**Typical Sizes**:
- Hero: `text-4xl md:text-5xl lg:text-6xl` (36-60px)
- Section Heading: `text-3xl md:text-4xl` (30-36px)
- Card Title: `text-xl md:text-2xl` (20-24px)
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px)

### Logo Assets

- **Main Logo**: `/logos/een-logo.svg`
- **Partner Logos**: `/logos/neoperl-logo.png`, `/logos/ifc-logo.png`, etc.

### Visual Style

**Design Principles**:
- Clean, modern, professional
- High contrast for readability
- Generous whitespace
- Subtle animations (Framer Motion)
- Gradient accents for visual interest

**Imagery Guidelines**:
- Use high-quality, professional photography
- Prefer images showing solar panels, buildings, technology
- Hero image should be optimized (quality: 100)
- Team photos: Professional headshots with clean backgrounds

**Animation Philosophy**:
- Subtle and purposeful
- Enhance UX, don't distract
- Scroll-triggered animations for engagement
- Smooth transitions (duration: 0.3-0.6s)

---

## Design System

### Color System

The site uses Tailwind CSS 4 with custom CSS variables in OKLch color space for better color manipulation.

**CSS Variables Location**: [src/app/globals.css](src/app/globals.css)

**Usage Pattern**:
```jsx
// Primary blue
<div className="bg-[#1AA3DD] text-white">

// Service-specific color
<div className="bg-[#00A8E8]"> // Water blue

// Gradients
<div className="bg-gradient-to-r from-[#1AA3DD] to-[#73C167]">
```

### Spacing System

Uses Tailwind's default spacing scale (1 unit = 0.25rem = 4px):

- **Section Padding**: `py-16 md:py-24` (64-96px vertical)
- **Container**: `container mx-auto px-4 md:px-6`
- **Card Gap**: `gap-6 md:gap-8` (24-32px)
- **Element Spacing**: `space-y-4` (16px vertical rhythm)

### Border Radius

- **Default**: `rounded-lg` (0.625rem = 10px)
- **Cards**: `rounded-xl` (0.75rem = 12px)
- **Buttons**: `rounded-md` (0.375rem = 6px)
- **Full**: `rounded-full` (circles, pills)

### Shadows

```css
shadow-sm    /* Subtle card lift */
shadow-md    /* Standard card */
shadow-lg    /* Elevated card */
shadow-xl    /* Modal/dropdown */
shadow-2xl   /* Hero elements */
```

### Gradients

**Text Gradients**:
```jsx
<h1 className="bg-gradient-to-r from-[#1AA3DD] to-[#73C167] bg-clip-text text-transparent">
  Gradient Text
</h1>
```

**Background Gradients**:
```jsx
<div className="bg-gradient-to-br from-blue-50 to-green-50">
```

### Animations

**Custom CSS Animations** (in [globals.css](src/app/globals.css)):

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -50px) scale(1.1); }
  50% { transform: translate(0, 20px) scale(0.9); }
  75% { transform: translate(-20px, -15px) scale(1.05); }
}
```

**Usage**:
```jsx
<div className="animate-fade-in-up">Fades in from bottom</div>
<div className="animate-blob">Morphing blob</div>
```

**Framer Motion Patterns**:

```jsx
// Scroll-triggered fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Staggered children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } },
  }}
>
  <motion.div variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }} />
</motion.div>

// Hover effect
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Responsive Breakpoints

```javascript
{
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (desktops)
  xl: '1280px',  // Extra large devices (large desktops)
  '2xl': '1536px' // 2X extra large devices
}
```

**Usage Pattern**:
```jsx
// Mobile first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  // 1 column on mobile, 2 on tablet, 3 on desktop
</div>
```

---

## Component Architecture

### Component Categories

#### 1. UI Components (`/components/ui/`)

**Primitive components** from shadcn/ui built on Radix UI:

- **Button** - CVA-based variants (default, destructive, outline, ghost, link)
- **Card** - Container with Header, Title, Description, Content, Footer
- **Accordion** - Collapsible content sections
- **Dropdown Menu** - Context menus and dropdowns
- **Menubar** - Menu bars with triggers
- **Navigation Menu** - Complex navigation structures

**Key Features**:
- Fully accessible (ARIA labels, keyboard navigation)
- Composable API (Root → Trigger → Content)
- Styled with Tailwind
- TypeScript typed props

#### 2. Layout Components (`/components/genui/`)

**Header** ([Header.tsx](src/components/genui/Header.tsx)):
- Sticky navigation with scroll effect
- Desktop: Horizontal menu with active state indicators
- Mobile: Hamburger menu with backdrop
- EEN logo links to home
- Auto-close on escape key

**Footer** ([Footer.tsx](src/components/genui/Footer.tsx)):
- Gradient background (blue to green)
- Quick links, services, contact info
- Social media links
- Copyright notice

#### 3. Feature Components

Organized by page/feature:

**Home Components** (`/components/home/`):
- [Hero.tsx](src/components/home/Hero.tsx) - Landing section with animated background blobs
- [Services.tsx](src/components/home/Services.tsx) - Service cards with staggered animations
- [WhyEdge.tsx](src/components/home/WhyEdge.tsx) - EDGE certification benefits
- [Trusted.tsx](src/components/home/Trusted.tsx) - Partner logo showcase
- [CTA.tsx](src/components/home/CTA.tsx) - Reusable call-to-action

**About Components** (`/components/about/`):
- [AboutHero.tsx](src/components/about/AboutHero.tsx) - About page hero
- [Mission.tsx](src/components/about/Mission.tsx) - Mission/Vision cards with gradient bars
- [Building.tsx](src/components/about/Building.tsx) - Stats and achievements
- [Team.tsx](src/components/about/Team.tsx) - Team member profiles with image fallback

**Service Components** (`/components/services/`):
- Solar: SolarHero, SolarChallenge, SolarSolutions, SolarTechnology, SolarProcess, SolarBenefits
- Water: WHero, WChallenge, WSol, WTech, WCase
- Smart Metering: SMHero, SMVis, SMFeat, SMSol, SMHow, SMBen
- General: SProcess, SChoose

### Component Patterns

#### Standard Component Structure

```tsx
'use client'
import { motion } from 'framer-motion'

export default function ComponentName() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Section Title
          </h2>
          {/* Content */}
        </motion.div>
      </div>
    </section>
  )
}
```

#### Reusable Component with Props

```tsx
interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function CTA({ title, description, buttonText, buttonLink }: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1AA3DD] to-[#73C167]">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8">{description}</p>
        <a href={buttonLink} className="btn-primary">{buttonText}</a>
      </div>
    </section>
  )
}
```

### Component Composition

Components are composed from smaller pieces:

```tsx
// Card composition example
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Main content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

## Page Structure

### Available Routes

| Route | Purpose | Key Components |
|-------|---------|----------------|
| `/` | Home page | Hero, Services, WhyEdge, Trusted, CTA |
| `/about` | Company info | AboutHero, Mission, Building, Team |
| `/services` | Services hub | Hero, service cards, SProcess, SChoose |
| `/services/solar` | Solar energy | SolarHero, SolarChallenge, SolarSolutions, SolarTech, SolarProcess, SolarBenefits |
| `/services/water-solutions` | Water conservation | WHero, WChallenge, WSol, WTech, WCase |
| `/services/smart-metering` | Smart meters | SMHero, SMVis, SMFeat, SMSol, SMHow, SMBen |
| `/edge-building` | EDGE certification | EHero, ECertificate, EBenefits, Esect |
| `/partners` | Partnerships | PHero, Pcards, PPower, PIntegrate |
| `/contact-us` | Contact form | Contact form, contact info, urgent assistance |

### Page Template

```tsx
// app/[route]/page.tsx
import Component1 from '@/components/feature/Component1'
import Component2 from '@/components/feature/Component2'

export default function PageName() {
  return (
    <main>
      <Component1 />
      <Component2 />
      {/* Additional components */}
    </main>
  )
}
```

### Root Layout ([app/layout.tsx](src/app/layout.tsx))

```tsx
import Header from '@/components/genui/Header'
import Footer from '@/components/genui/Footer'
import { Montserrat } from 'next/font/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### SEO Metadata

Each page should include metadata:

```tsx
export const metadata = {
  title: 'Page Title | EEN Consulting',
  description: 'Page description for SEO',
}
```

---

## Features & Functionality

### 1. Contact Form

**Location**: [app/contact-us/page.tsx](src/app/contact-us/page.tsx)

**Form Fields**:
- First Name (required, 2-50 chars)
- Last Name (required, 2-50 chars)
- Email (required, valid email format)
- Phone Number (required, valid Nigerian format)
- Company Name (optional)
- Service Interest (dropdown: Solar, Water, Smart Metering, EDGE, General Inquiry)
- Message (required, 10-1000 chars)
- Honeypot field (hidden, anti-spam)

**Validation** ([utils/formValidation.ts](src/utils/formValidation.ts)):

```typescript
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Validates all fields
export function validateForm(formData: FormData): ValidationResult

// Individual validators
validateEmail(email: string): boolean
validatePhone(phone: string): boolean
validateName(name: string): boolean
validateMessage(message: string): boolean
```

**Anti-Spam Measures**:
1. Honeypot field (if filled, reject submission)
2. Submission speed check (minimum 3 seconds)
3. Rate limiting (3 submissions per hour per IP)

**Rate Limiting** ([utils/rateLimiter.ts](src/utils/rateLimiter.ts)):

```typescript
export function checkRateLimit(): { allowed: boolean; resetTime?: number }
export function recordSubmission(): void
```

**Email Integration** ([utils/email.ts](src/utils/email.ts)):

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_oeq5w9r',
  TEMPLATES: {
    CONTACT: 'template_p9xmyq8',
    EDGE: 'template_edge',
    AUTO_RESPONSE: 'template_autoresponse',
    SOLAR: 'template_solar',
    PARTNERSHIP: 'template_partnership',
  },
}
```

**EmailJS Setup**:
- Service: Gmail (service_oeq5w9r)
- Templates configured in EmailJS dashboard
- Auto-response sent to user
- Notification sent to EEN team

### 2. Responsive Navigation

**Desktop Navigation**:
- Horizontal menu bar
- Hover effects
- Active page indicator (underline with brand color)
- Sticky positioning with scroll effect

**Mobile Navigation**:
- Hamburger icon (☰)
- Full-screen overlay menu
- Backdrop blur effect
- Close on click outside or ESC key
- Smooth animations (Framer Motion)

**Code Pattern**:
```tsx
const [isOpen, setIsOpen] = useState(false)

// Mobile menu toggle
<button onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <X /> : <Menu />}
</button>

// Mobile menu
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
    >
      {/* Menu items */}
    </motion.div>
  )}
</AnimatePresence>
```

### 3. Team Member Cards

**Location**: [components/about/Team.tsx](src/components/about/Team.tsx)

**Features**:
- Team member photos
- Image fallback to initials with gradient background
- Name, title, description
- Contact links (email, phone)

**Image Fallback Logic**:
```tsx
const [imageError, setImageError] = useState(false)

{!imageError ? (
  <Image
    src={member.image}
    alt={member.name}
    onError={() => setImageError(true)}
  />
) : (
  <div className="bg-gradient-to-br from-[#1AA3DD] to-[#73C167]">
    <span className="text-4xl font-bold text-white">
      {member.initials}
    </span>
  </div>
)}
```

### 4. Service Cards

**Staggered Animation Pattern**:

```tsx
<motion.div
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {services.map((service) => (
    <motion.div
      key={service.title}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <ServiceCard {...service} />
    </motion.div>
  ))}
</motion.div>
```

### 5. EDGE Certification Process

**3-Step Visualization**:
1. **Design** - Upload plans for EDGE assessment
2. **Audit** - Independent verification (if required)
3. **Certify** - Receive EDGE certificate

**Benefits Highlighted**:
- Fast: Quick certification process
- Affordable: Cost-effective for developers
- ROI: Increased property value
- ESG Compliance: Meet sustainability standards

**Efficiency Metrics**:
- 20% reduction in energy consumption
- 20% reduction in water usage
- 20% reduction in embodied energy in materials

### 6. Partner Showcase

**Current Partners**:

1. **Neoperl** (Exclusive West Africa Distributor)
   - Water-saving aerators and flow controllers
   - Blue brand color (#0066CC)

2. **IFC | World Bank** (EDGE Program)
   - EDGE certification expertise
   - Blue brand color (#002F6C)

3. **Solid Green** (Sustainability Partner)
   - Green building consulting
   - Green brand color (#00A651)

### 7. Animation System

**Scroll-Triggered Animations**:
- Elements fade in as user scrolls
- `viewport={{ once: true }}` prevents re-triggering
- Subtle Y-axis translation (20-30px)

**Hover Effects**:
- Cards: `scale: 1.05` on hover
- Buttons: `scale: 0.95` on tap
- Images: Brightness increase

**Background Animations**:
- Blob morphing in hero section
- Floating elements
- Gradient color shifts

---

## Blog System

### Overview

The website now includes a fully-featured blog system powered by **Contentful CMS** (headless CMS). The blog is optimized for SEO, compatible with static export, and works seamlessly with FTP deployment.

### Quick Start

**For immediate setup**, see **[QUICK_START.md](QUICK_START.md)** (15 minutes to first post!)

**For detailed documentation**:
- [CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md) - CMS setup guide
- [BLOG_DEPLOYMENT_GUIDE.md](BLOG_DEPLOYMENT_GUIDE.md) - Build & deployment
- [BLOG_IMPLEMENTATION_SUMMARY.md](BLOG_IMPLEMENTATION_SUMMARY.md) - Feature overview

### Features

✅ **Content Management**
- Contentful CMS (free tier, no credit card required)
- Rich text editor for non-technical editors
- Image CDN with automatic optimization
- Category and tag system
- Author profiles

✅ **Blog Features**
- Blog listing page with pagination (9 posts/page)
- Individual blog post pages
- Category pages (`/blog/category/solar-energy`)
- Featured posts system
- Related posts (algorithm-based)
- Reading time calculator
- Table of contents (auto-generated)
- Code syntax highlighting

✅ **Search & Discovery**
- Client-side search (FlexSearch)
- RSS feed (`/rss.xml`)
- Dynamic sitemap (includes all posts)
- Social share buttons (Twitter, Facebook, LinkedIn, Email)

✅ **SEO Optimized**
- Meta titles and descriptions
- Open Graph tags
- Twitter Cards
- Structured data ready
- Optimized images
- Semantic HTML

### Tech Stack

```json
{
  "CMS": "Contentful (free tier)",
  "Content Fetching": "@contentful/rich-text-react-renderer",
  "Search": "FlexSearch (client-side)",
  "RSS": "feed",
  "Images": "Contentful CDN (auto-optimized)"
}
```

### File Structure

```
/src
├── /app
│   ├── /blog
│   │   ├── page.tsx                    # Blog listing
│   │   ├── [slug]/page.tsx             # Individual post
│   │   └── category/[category]/page.tsx # Category pages
│   ├── /rss.xml/route.ts               # RSS feed
│   └── sitemap.ts                       # Dynamic sitemap
├── /components/blog                     # Blog components
│   ├── BlogCard.tsx
│   ├── BlogContent.tsx
│   ├── BlogHero.tsx
│   ├── CategoryBadge.tsx
│   ├── CategoryFilter.tsx               # Client component for filters
│   ├── CodeBlock.tsx
│   ├── Pagination.tsx
│   ├── RelatedPosts.tsx
│   ├── SearchBar.tsx
│   ├── ShareButtons.tsx
│   └── TableOfContents.tsx
├── /lib
│   ├── /contentful                      # Contentful integration
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   └── /blog                            # Blog utilities
│       ├── generateTOC.ts
│       ├── readingTime.ts
│       └── searchIndex.ts
└── /utils
    └── formatDate.ts
```

### Content Model (Contentful)

**Blog Post**:
- Title, Slug, Excerpt
- Hero Image (auto-optimized)
- Rich Text Content
- Author (reference)
- Categories (references)
- Tags
- Published/Updated dates
- Featured flag
- Meta title/description (SEO)

**Category**:
- Name, Slug, Description
- Color (hex code for badges)

**Author**:
- Name, Bio, Title
- Avatar image
- Email, Social links

### Workflow

#### Adding a New Blog Post

1. **In Contentful**:
   - Go to Content → Add entry → Blog Post
   - Fill in all fields
   - Upload hero image (1200x630px recommended)
   - Select author and categories
   - Click **Publish** (not just Save!)

2. **Build & Deploy**:
   ```bash
   npm run build              # Generates static HTML
   # Upload /out folder to FTP
   ```

3. **Verify**:
   - Visit `yourdomain.com/blog`
   - New post should appear

#### Updating a Post

1. Edit in Contentful → Click **Publish**
2. Rebuild: `npm run build`
3. Re-upload changed files via FTP

### URLs

- Blog listing: `/blog`
- Individual post: `/blog/post-slug`
- Category: `/blog/category/category-slug`
- RSS feed: `/rss.xml`
- Sitemap: `/sitemap.xml`

### SEO Features

- **Meta tags**: Auto-generated from post content
- **Open Graph**: Images and descriptions for social sharing
- **Sitemap**: Automatically includes all blog posts
- **RSS**: Updated on each build
- **Semantic HTML**: Proper heading hierarchy
- **Image optimization**: Contentful CDN handles WebP, resizing

### Limitations (Static Export)

✅ **Works Great**:
- All blog features
- SEO (static HTML)
- Fast performance
- FTP deployment

❌ **Requires Rebuild**:
- New/edited posts (not real-time)
- Category changes
- Author updates

💡 **Workaround**: Set up GitHub Actions for automatic builds (see deployment guide)

### Cost

**Current Setup**: $0/month
- Contentful: Free tier (25k API calls/month)
- Hosting: Your existing FTP server
- Images: Contentful CDN (included)

**Scaling**: Still free for up to ~200 posts

### Common Issues & Solutions

**Issue: "Blog post is missing hero image/author"**
- Solution: In Contentful, make sure:
  1. Blog post is **Published** (not Draft)
  2. Author entry is **Published**
  3. Hero Image is uploaded and published
  4. All required fields are filled

**Issue: "entry.fields is undefined"**
- Solution: Add `include: 2` to all Contentful queries to resolve linked entries

**Issue: "Event handlers cannot be passed to Client Component"**
- Solution: Interactive components need `'use client'` directive at the top

### Next Steps

1. **Setup**: Follow [QUICK_START.md](QUICK_START.md)
2. **Configure**: Add Contentful keys to `.env.local`
3. **Create Content**: Add categories, authors, first post (all must be Published!)
4. **Test Locally**: Run `npm run dev` and check terminal logs
5. **Deploy**: Build and upload to FTP
6. **SEO**: Submit sitemap to Google Search Console

---

## Development Workflow

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Adding a New Page

1. **Create page file**:
```bash
# Create new route folder
mkdir -p src/app/new-page

# Create page component
touch src/app/new-page/page.tsx
```

2. **Create page component**:
```tsx
// src/app/new-page/page.tsx
export const metadata = {
  title: 'New Page | EEN Consulting',
  description: 'Description for SEO',
}

export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
    </main>
  )
}
```

3. **Add to navigation**:
```tsx
// src/components/genui/Header.tsx
const links = [
  // ... existing links
  { name: 'New Page', href: '/new-page' },
]
```

### Adding a New Component

1. **Create component file**:
```bash
# For feature components
touch src/components/[feature]/NewComponent.tsx

# For UI components (use shadcn CLI)
npx shadcn@latest add [component-name]
```

2. **Write component**:
```tsx
'use client'
import { motion } from 'framer-motion'

export default function NewComponent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Component content */}
      </div>
    </section>
  )
}
```

3. **Import and use**:
```tsx
import NewComponent from '@/components/feature/NewComponent'

export default function Page() {
  return (
    <main>
      <NewComponent />
    </main>
  )
}
```

### Adding shadcn/ui Components

```bash
# Add specific component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card dialog sheet
```

Components are added to `src/components/ui/` and can be imported:

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
```

### Testing Contact Form Locally

1. **EmailJS Setup**:
   - Create account at emailjs.com
   - Update SERVICE_ID in `src/utils/email.ts`
   - Create templates in EmailJS dashboard

2. **Test Validation**:
```tsx
// Valid submission
{
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+2348012345678',
  service: 'solar',
  message: 'Interested in solar installation'
}

// Should fail validation
{
  email: 'invalid-email', // Invalid format
  phone: '123', // Too short
  message: 'Short', // Too short (min 10 chars)
}
```

3. **Test Rate Limiting**:
   - Submit form 3 times in quick succession
   - 4th submission should be blocked
   - Wait 1 hour or clear localStorage to reset

---

## Code Conventions

### TypeScript Guidelines

**Always use TypeScript**:
```tsx
// ✅ Good - Typed props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  // ...
}

// ❌ Bad - No types
export default function Button({ label, onClick, variant }) {
  // ...
}
```

**Use interfaces for component props**:
```tsx
interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}
```

### Component Guidelines

**Use 'use client' when needed**:
```tsx
// For components using:
// - useState, useEffect, other hooks
// - Event handlers (onClick, onChange)
// - Browser APIs (window, document)
// - Third-party libraries requiring client (framer-motion)

'use client'
import { useState } from 'react'

export default function ClientComponent() {
  const [state, setState] = useState()
  // ...
}
```

**Default exports for pages/components**:
```tsx
// ✅ Good
export default function HomePage() { }

// ❌ Avoid named exports for pages
export function HomePage() { }
```

**Destructure props**:
```tsx
// ✅ Good
export default function Card({ title, description }: CardProps) {

// ❌ Avoid
export default function Card(props: CardProps) {
  const title = props.title
}
```

### Styling Guidelines

**Use Tailwind classes**:
```tsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

**Responsive design**:
```tsx
// ✅ Mobile-first approach
<div className="text-base md:text-lg lg:text-xl">

// ❌ Desktop-first
<div className="text-xl lg:text-base">
```

**Use cn() utility for conditional classes**:
```tsx
import { cn } from '@/lib/utils'

<button className={cn(
  'px-4 py-2 rounded-md',
  variant === 'primary' && 'bg-[#1AA3DD] text-white',
  variant === 'secondary' && 'bg-gray-200 text-gray-800'
)}>
```

### Animation Guidelines

**Scroll animations - use viewport once**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} // ← Prevents re-animation
  transition={{ duration: 0.6 }}
>
```

**Keep animations subtle**:
```tsx
// ✅ Good - Subtle movement
<motion.div whileHover={{ scale: 1.05 }}>

// ❌ Too aggressive
<motion.div whileHover={{ scale: 1.5, rotate: 360 }}>
```

### Accessibility Guidelines

**Use semantic HTML**:
```tsx
// ✅ Good
<nav>
  <ul>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// ❌ Bad
<div>
  <div onClick={handleClick}>About</div>
</div>
```

**ARIA labels for icons**:
```tsx
<button aria-label="Close menu">
  <X />
</button>
```

**Alt text for images**:
```tsx
<Image src="/team/member.jpg" alt="John Doe, CEO of EEN Consulting" />
```

### File Naming

- **Components**: PascalCase (`Header.tsx`, `SolarHero.tsx`)
- **Utilities**: camelCase (`email.ts`, `formValidation.ts`)
- **Pages**: lowercase with hyphens (`contact-us/page.tsx`)
- **Assets**: lowercase with hyphens (`een-logo.svg`, `hero-image.jpg`)

---

## Deployment

### Static Export Configuration

**next.config.ts**:
```typescript
const nextConfig: NextConfig = {
  output: 'export',              // Generate static HTML/CSS/JS
  trailingSlash: true,          // URLs end with /
  images: { unoptimized: true } // No image optimization for static hosting
}
```

### Build Process

```bash
# Build static site
npm run build

# Output directory: /out
# Contains all static HTML, CSS, JS files
```

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy

#### Static Hosting (S3, GitHub Pages, etc.)
1. Run `npm run build`
2. Upload `out/` directory contents
3. Configure server for SPA routing (if needed)

### Environment Variables

For production, set environment variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_oeq5w9r
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (if added)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Pre-Deployment Checklist

- [ ] Test all forms (contact, newsletter)
- [ ] Verify all images load correctly
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Validate contact information
- [ ] Review SEO metadata on all pages
- [ ] Test EmailJS integration
- [ ] Verify rate limiting works
- [ ] Check accessibility (ARIA labels, alt text)
- [ ] Test in multiple browsers (Chrome, Safari, Firefox, Edge)

---

## Key Files Reference

### Configuration Files

- [next.config.ts](next.config.ts) - Next.js configuration
- [tailwind.config.ts](tailwind.config.ts) - Tailwind CSS configuration
- [components.json](components.json) - shadcn/ui configuration
- [tsconfig.json](tsconfig.json) - TypeScript configuration
- [package.json](package.json) - Dependencies and scripts

### Core Application Files

- [src/app/layout.tsx](src/app/layout.tsx) - Root layout with Header/Footer
- [src/app/globals.css](src/app/globals.css) - Global styles, CSS variables, animations
- [src/lib/utils.ts](src/lib/utils.ts) - cn() utility for classnames

### Utility Files

- [src/utils/email.ts](src/utils/email.ts) - EmailJS configuration
- [src/utils/formValidation.ts](src/utils/formValidation.ts) - Form validation logic
- [src/utils/rateLimiter.ts](src/utils/rateLimiter.ts) - Submission rate limiting

### Layout Components

- [src/components/genui/Header.tsx](src/components/genui/Header.tsx) - Navigation header
- [src/components/genui/Footer.tsx](src/components/genui/Footer.tsx) - Site footer

### Key Page Files

- [src/app/page.tsx](src/app/page.tsx) - Home page
- [src/app/contact-us/page.tsx](src/app/contact-us/page.tsx) - Contact form
- [src/app/about/page.tsx](src/app/about/page.tsx) - About page

---

## Team Information

### Leadership Team

**Unoma Grant** - Co-Founder & CEO
- Email: unoma@eenconsulting.ng
- Phone: +234 706 925 6000
- Background: Mechanical Engineering + Business Administration
- Title Color: Blue

**Obinna Ukwa** - Co-Founder & Managing Director
- Email: obinna@eenconsulting.ng
- Phone: +234 812 345 6789
- Background: Mechanical Engineering + Civil Engineering
- Title Color: Green

**Francis Woods** - Sustainability Implementation Engineer
- Email: francis@eenconsulting.ng
- Phone: +234 809 876 5432
- Background: Civil Engineering + Project Management
- Title Color: Purple

### Company Contact

**Address**: 123 Sustainability Avenue, Lagos, Nigeria
**Email**: info@eenconsulting.ng
**Phone**: +234 1 234 5678
**Business Hours**: Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM

---

## Future Enhancement Ideas

### Potential Features to Add

1. **Blog/News Section**
   - Articles on sustainability
   - Project case studies
   - Industry insights

2. **Project Portfolio**
   - Gallery of completed projects
   - Before/after comparisons
   - Client testimonials

3. **ROI Calculator**
   - Solar savings calculator
   - Water conservation calculator
   - EDGE certification ROI

4. **Client Dashboard**
   - Project tracking
   - Energy monitoring
   - Document access

5. **Booking System**
   - Schedule consultations
   - Calendar integration
   - Automatic reminders

6. **Multi-language Support**
   - English (default)
   - Yoruba
   - Igbo
   - Hausa

7. **Live Chat**
   - Real-time support
   - AI chatbot for FAQs
   - Business hours integration

8. **Analytics Dashboard**
   - Website traffic
   - Lead generation metrics
   - Conversion tracking

### SEO Improvements

- Add structured data (JSON-LD)
- Implement sitemap.xml
- Add robots.txt
- Optimize meta descriptions
- Add Open Graph tags
- Implement breadcrumbs

### Performance Optimizations

- Implement image optimization (if moving off static export)
- Add lazy loading for images
- Code splitting
- Bundle size optimization
- Implement CDN

---

## Brand Voice & Messaging

### Tone of Voice

- **Professional** - Expert but approachable
- **Educational** - Explain complex concepts simply
- **Action-oriented** - Clear calls-to-action
- **Optimistic** - Focus on solutions, not just problems
- **Trustworthy** - Data-driven, certified, proven

### Key Messages

1. **Sustainability Leader**: "Driving sustainability in the Nigerian built environment"
2. **Proven Results**: "20% guaranteed energy savings, 50M+ liters water saved"
3. **Expert Certified**: "IFC EDGE Experts, 7+ years experience"
4. **Exclusive Partnerships**: "Neoperl West Africa exclusive distributor"
5. **Comprehensive Solutions**: "Solar, Water, Smart Metering, EDGE Certification"

### Content Guidelines

**Headlines**:
- Keep under 60 characters
- Lead with benefits
- Use active voice
- Include numbers/data when possible

**Body Copy**:
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Highlight ROI and benefits
- Include social proof (stats, testimonials)

**Calls-to-Action**:
- "Schedule Your Free Consultation"
- "Get Your EDGE Certificate"
- "Calculate Your Savings"
- "Contact Us Today"

---

## Common Tasks Quick Reference

### Update Team Member

Edit [src/components/about/Team.tsx](src/components/about/Team.tsx):
```tsx
const teamMembers = [
  {
    initials: 'UG',
    image: '/team/unoma.jpg',
    name: 'Unoma Grant',
    title: 'Co-Founder & CEO',
    titleColor: 'text-[#1AA3DD]',
    description: '...',
    email: 'unoma@eenconsulting.ng',
    phone: '+234 706 925 6000'
  }
]
```

### Update Contact Information

Edit [src/app/contact-us/page.tsx](src/app/contact-us/page.tsx):
```tsx
<p>123 Sustainability Avenue, Lagos, Nigeria</p>
<p>info@eenconsulting.ng</p>
<p>+234 1 234 5678</p>
```

### Add New Service

1. Create service page: `src/app/services/new-service/page.tsx`
2. Create components: `src/components/services/NewServiceHero.tsx`, etc.
3. Update services list in [src/app/services/page.tsx](src/app/services/page.tsx)
4. Add to navigation in [src/components/genui/Header.tsx](src/components/genui/Header.tsx)

### Update Brand Colors

Edit [src/app/globals.css](src/app/globals.css):
```css
:root {
  /* Update OKLch color values */
}
```

### Add New Partner

Edit [src/components/partners/Pcards.tsx](src/components/partners/Pcards.tsx):
```tsx
const partners = [
  {
    name: 'New Partner',
    description: '...',
    image: '/logos/new-partner-logo.png',
    link: 'https://newpartner.com',
    color: '#HEXCOLOR'
  }
]
```

---

## Troubleshooting

### Common Issues

**Issue**: Images not loading
- Check file path (case-sensitive)
- Verify image exists in `/public/images/`
- Ensure Image component uses correct import

**Issue**: Animations not working
- Verify `'use client'` directive at top of file
- Check Framer Motion is imported
- Ensure parent has viewport detection

**Issue**: Form not submitting
- Check EmailJS configuration
- Verify rate limiting hasn't blocked you
- Check browser console for errors
- Test validation with valid data

**Issue**: Styles not applying
- Run `npm run dev` to rebuild
- Check Tailwind class names are correct
- Verify no typos in className
- Check if custom CSS is conflicting

**Issue**: Build fails
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npx tsc --noEmit`
- Verify all imports are correct
- Check Next.js config is valid

---

## Conclusion

This documentation provides a comprehensive guide to the EEN Consulting website codebase. It covers:

✅ **Project structure** and organization
✅ **Tech stack** and dependencies
✅ **Brand guidelines** (colors, typography, visual style)
✅ **Design system** (spacing, animations, components)
✅ **Component architecture** and patterns
✅ **Page structure** and routing
✅ **Features** and functionality
✅ **Development workflow** and conventions
✅ **Deployment** process

Use this guide when:
- Adding new features
- Maintaining brand consistency
- Onboarding new developers
- Planning future enhancements
- Troubleshooting issues

**For questions or support**, contact the development team or refer to the codebase directly using the file references throughout this document.

---

**Document Version**: 1.0
**Last Updated**: 2026-01-03
**Maintained By**: EEN Consulting Development Team
