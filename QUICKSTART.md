# Quick Start Guide

## Get Up and Running in 5 Minutes

### Step 1: Install Dependencies (1 minute)

```bash
cd dental-biotech
npm install
```

### Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

### Step 3: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

That's it! The website is now running locally.

## What's Included

✅ **7 Main Pages**:
- Home (Hero slider, services, statistics, recent activities)
- About (Company story, mission, team profiles)
- Products (Dental implants, bone grafts, product gallery)
- Services (Mobile dental clinic, outreach programs)
- Training (Workshop details, registration forms)
- Contact (Multi-channel contact, Google Maps)
- Gallery (Product, photo, and event galleries)

✅ **Key Features**:
- Sticky navigation header
- Mobile-responsive design
- WhatsApp chat widget
- Live chat integration (Tawk.to)
- Contact forms with validation
- Image optimization
- SEO-friendly pages
- Smooth animations

✅ **Modern Tech Stack**:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Lucide Icons
- Framer Motion

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

## Project Structure

```
dental-biotech/
├── app/                    # Pages and routes
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── training/          # Training page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSlider.tsx     # Homepage hero
│   └── ...
├── public/                # Static assets
│   └── assets/            # Images, docs, fonts
└── styles/                # Global styles
```

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#2563eb',    // Change primary color
  secondary: '#10b981',  // Change secondary color
  accent: '#f59e0b',     // Change accent color
}
```

### Update Contact Info

Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Add New Pages

```bash
# Create new page
mkdir app/new-page
touch app/new-page/page.tsx
```

### Modify Navigation

Edit `components/Header.tsx`:

```typescript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'New Page', href: '/new-page' },
  // Add more items...
]
```

## Need Help?

- 📖 [Full README](./README.md)
- 🚀 [Deployment Guide](./DEPLOYMENT.md)
- 📧 Email: kindwaybiorezens@gmail.com
- 📱 WhatsApp: +91-9198846529

## Next Steps

1. ✅ Review the website locally
2. ✅ Customize content and images
3. ✅ Update contact information
4. ✅ Configure environment variables
5. ✅ Deploy to production

Happy coding! 🎉
