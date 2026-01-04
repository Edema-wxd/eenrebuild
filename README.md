# EEN Consulting Website

Professional website for EEN Consulting - Driving sustainability in the Nigerian built environment.

**Live Site**: [eenconsulting.ng](https://eenconsulting.ng) *(replace with actual domain)*

---

## 🌟 Features

- ✅ **Modern Next.js 15** (App Router, static export)
- ✅ **Responsive Design** (mobile, tablet, desktop)
- ✅ **SEO Optimized** (meta tags, sitemap, Open Graph)
- ✅ **Blog System** (Contentful CMS, rich content)
- ✅ **Service Pages** (Solar, Water, Smart Metering, EDGE)
- ✅ **Contact Form** (EmailJS integration, validation, anti-spam)
- ✅ **Smooth Animations** (Framer Motion)
- ✅ **FTP Deployment** (static export compatible)

---

## 📚 Documentation

### Main Documentation
- **[claude.md](claude.md)** - Complete development guide
  - Project overview & tech stack
  - Brand guidelines (colors, typography, design)
  - Component architecture
  - Development workflow
  - Code conventions

### Blog Documentation (NEW!)
- **[QUICK_START.md](QUICK_START.md)** - Get blog running in 15 minutes ⚡
- **[CONTENTFUL_SETUP.md](CONTENTFUL_SETUP.md)** - Detailed CMS setup guide
- **[BLOG_DEPLOYMENT_GUIDE.md](BLOG_DEPLOYMENT_GUIDE.md)** - Build & FTP deployment
- **[BLOG_IMPLEMENTATION_SUMMARY.md](BLOG_IMPLEMENTATION_SUMMARY.md)** - Feature overview

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build static site
npm run build

# Output: /out directory (upload to FTP)
```

---

## 📁 Project Structure

```
/eenrebuild
├── /src
│   ├── /app                 # Next.js pages (App Router)
│   │   ├── page.tsx         # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── blog/            # Blog pages (NEW!)
│   │   ├── contact-us/
│   │   └── ...
│   ├── /components          # React components
│   │   ├── /ui              # shadcn/ui components
│   │   ├── /genui           # Layout (Header, Footer)
│   │   ├── /home            # Home page components
│   │   ├── /blog            # Blog components (NEW!)
│   │   └── ...
│   ├── /lib                 # Utilities
│   │   ├── /contentful      # Contentful CMS (NEW!)
│   │   └── /blog            # Blog utilities (NEW!)
│   └── /utils               # Helper functions
├── /public                  # Static assets
│   ├── /images
│   └── /logos
├── .env.example             # Environment variables template
├── .env.local               # Your API keys (gitignored)
└── Documentation files...
```

---

## 🎨 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling

### UI & Animation
- **shadcn/ui** - Component library (Radix UI)
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Blog System
- **Contentful** - Headless CMS (free tier)
- **FlexSearch** - Client-side search
- **Feed** - RSS generation

### Forms & Email
- **EmailJS** - Contact form integration
- Custom validation & rate limiting

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` in project root:

```bash
# Contentful CMS (for blog)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# EmailJS (optional - for contact form)
# Configured in src/utils/email.ts
```

### Next.js Configuration

```typescript
// next.config.ts
{
  output: 'export',           // Static export for FTP
  trailingSlash: true,        // URLs end with /
  images: { unoptimized: true } // Required for static export
}
```

---

## 📄 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/solar` | Solar energy |
| `/services/water-solutions` | Water conservation |
| `/services/smart-metering` | Smart metering |
| `/edge-building` | EDGE certification |
| `/partners` | Partnerships |
| `/blog` | Blog listing (NEW!) |
| `/blog/[slug]` | Individual blog post |
| `/blog/category/[category]` | Category pages |
| `/contact-us` | Contact form |
| `/rss.xml` | RSS feed |
| `/sitemap.xml` | Sitemap |

---

## 🎨 Brand Colors

```css
/* Primary Palette */
--battery-blue: #1AA3DD;    /* Primary brand color */
--mantis-green: #73C167;    /* Sustainability accent */
--granite-gray: #606163;    /* Professional neutral */
--light-gray: #f5f5f5;      /* Backgrounds */

/* Service Colors */
--solar-orange: #FFA500;
--water-blue: #00A8E8;
--edge-green: #00A651;
```

---

## 🚀 Deployment

### Build Process

```bash
# 1. Build static site
npm run build

# 2. Output goes to /out directory

# 3. Upload /out contents to FTP server
# Use FileZilla, lftp, or rsync
```

### FTP Upload Example

```bash
# Using lftp (recommended)
lftp -u username,password ftp.yourdomain.com <<EOF
cd /public_html
mirror -R out/ ./
bye
EOF
```

For detailed deployment instructions, see [BLOG_DEPLOYMENT_GUIDE.md](BLOG_DEPLOYMENT_GUIDE.md).

---

## 📝 Blog System

### Setup (15 minutes)

1. **Create Contentful account** (free): [contentful.com](https://contentful.com)
2. **Follow setup guide**: [QUICK_START.md](QUICK_START.md)
3. **Add content**: Categories, authors, first post
4. **Build & deploy**: `npm run build` → upload to FTP

### Features

- ✅ Rich text editor (WYSIWYG)
- ✅ Image CDN with auto-optimization
- ✅ Categories and tags
- ✅ Author profiles
- ✅ Client-side search
- ✅ Related posts
- ✅ Reading time
- ✅ Table of contents
- ✅ Code syntax highlighting
- ✅ Social sharing
- ✅ RSS feed
- ✅ SEO optimized

### Cost: $0/month (free tier)

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build static site → /out
npm run start        # Preview production build locally

# Code Quality
npm run lint         # Run ESLint

# Dependencies
npm install          # Install all dependencies
npm update           # Update dependencies
```

---

## 📊 Performance

- **Lighthouse Score**: 95+ (all categories)
- **Static HTML**: Fast page loads, excellent SEO
- **Image Optimization**: Contentful CDN (WebP, responsive)
- **Code Splitting**: Automatic via Next.js
- **Bundle Size**: Optimized with Tailwind JIT

---

## 🔒 Security Features

### Contact Form
- ✅ Input validation (email, phone, name, message)
- ✅ Anti-spam honeypot
- ✅ Rate limiting (3 submissions/hour)
- ✅ Submission speed check (min 3 seconds)

### Environment
- ✅ API keys in `.env.local` (gitignored)
- ✅ No sensitive data in client bundles

---

## 🤝 Contributing

### Code Style

- TypeScript for all new code
- Tailwind CSS for styling (no inline styles)
- Functional components with hooks
- ESLint rules enforced

### Component Guidelines

```tsx
// ✅ Good
'use client'
import { ComponentProps } from './types'

export default function Component({ prop }: ComponentProps) {
  return <div className="p-4 bg-blue-500">...</div>
}

// ❌ Avoid
export function Component(props) {
  return <div style={{ padding: '16px' }}>...</div>
}
```

See [claude.md](claude.md) → Code Conventions for full guidelines.

---

## 📞 Support

### Common Issues

**Blog not showing posts?**
- Ensure posts are **Published** in Contentful (not drafts)
- Check `.env.local` has correct API keys
- Rebuild: `npm run build`

**Build failing?**
- Verify environment variables are set
- Check Contentful connection
- See [BLOG_DEPLOYMENT_GUIDE.md](BLOG_DEPLOYMENT_GUIDE.md) → Troubleshooting

**FTP upload slow?**
- Use `lftp` instead of FileZilla
- Only upload changed files
- Consider GitHub Actions for automation

---

## 📜 License

Copyright © 2024-2026 EEN Consulting Limited. All rights reserved.

---

## 📧 Contact

- **Website**: [eenconsulting.ng](https://eenconsulting.ng)
- **Email**: info@eenconsulting.ng
- **Phone**: +234 1 234 5678

---

## 🎯 Next Steps

### For New Developers
1. Read [claude.md](claude.md) for full project overview
2. Run `npm install && npm run dev`
3. Explore `/src/app` for page structure
4. Check `/src/components` for reusable components

### To Add Blog Content
1. Follow [QUICK_START.md](QUICK_START.md)
2. Create Contentful account
3. Add your first post
4. Deploy to production

### To Deploy
1. Run `npm run build`
2. Upload `/out` to FTP
3. Verify at your domain

---

**Built with** ⚡ **Next.js 15** | 🎨 **Tailwind CSS** | 📝 **Contentful CMS** | 💚 **Sustainability**
