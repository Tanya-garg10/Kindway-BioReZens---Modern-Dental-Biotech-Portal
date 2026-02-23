# Deployment Guide - Kindway BioReZens Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)
- Vercel/Netlify account (for deployment)

## Local Development

### 1. Install Dependencies

```bash
cd dental-biotech
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update the values in `.env.local` with your actual configuration.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Test Production Build Locally

```bash
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Or Deploy via GitHub:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Click "Deploy"

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Or Deploy via GitHub:

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Add environment variables
8. Click "Deploy site"

### Option 3: AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Add environment variables
6. Click "Save and deploy"

### Option 4: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t kindway-biorezens .
docker run -p 3000:3000 kindway-biorezens
```

### Option 5: Traditional Hosting (cPanel, etc.)

For traditional hosting, you'll need to export the site as static HTML:

1. **Update `next.config.ts`**:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Upload**:
   Upload the contents of the `out` directory to your hosting provider.

## Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919198846529
NEXT_PUBLIC_PHONE_NUMBER=+919151161267
NEXT_PUBLIC_EMAIL=kindwaybiorezens@gmail.com
NEXT_PUBLIC_TAWK_ID=690dc56ca2e13a195dc64d8c
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Custom Domain Setup

### Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## SSL Certificate

Both Vercel and Netlify provide automatic SSL certificates via Let's Encrypt.

For other platforms, you may need to:
1. Obtain an SSL certificate (Let's Encrypt, Cloudflare, etc.)
2. Configure your web server to use HTTPS

## Performance Optimization

### 1. Image Optimization

Images are automatically optimized by Next.js Image component. Ensure all images use the `<Image>` component.

### 2. Caching

Configure caching headers in your hosting platform:

```
Cache-Control: public, max-age=31536000, immutable
```

### 3. CDN

Use a CDN for static assets:
- Vercel and Netlify include CDN by default
- For other platforms, consider Cloudflare or AWS CloudFront

### 4. Analytics

Add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking code to `app/layout.tsx`

## Monitoring

### 1. Vercel Analytics

Enable in Vercel dashboard → Analytics

### 2. Google Analytics

Already integrated via environment variables

### 3. Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay

## Backup Strategy

1. **Code**: Keep in Git repository (GitHub, GitLab, Bitbucket)
2. **Assets**: Backup `public/assets` folder regularly
3. **Database**: If you add a database later, set up automated backups

## Rollback Procedure

### Vercel:
1. Go to Deployments
2. Find previous successful deployment
3. Click "Promote to Production"

### Netlify:
1. Go to Deploys
2. Find previous deployment
3. Click "Publish deploy"

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Images Not Loading

1. Verify images exist in `public/assets`
2. Check image paths (should start with `/assets/`)
3. For external images, add domain to `next.config.ts`

### Environment Variables Not Working

1. Ensure variables start with `NEXT_PUBLIC_` for client-side access
2. Restart development server after changing `.env.local`
3. Rebuild for production: `npm run build`

## Support

For deployment issues:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/

For project-specific issues:
- Email: kindwaybiorezens@gmail.com
- Phone: +91-9151161267

---

**Last Updated**: February 2026
