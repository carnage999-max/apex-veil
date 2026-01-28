
# Apex Veil® - Defense Grade Drone Technology

## Overview
This is a secure, single-page Next.js application representing Apex Veil's drone technology stack. It is engineered for defense-grade aesthetics, performance, and security.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (Custom Design System: Matte Black, Radar Green, Electric Blue)
- **Languages**: TypeScript
- **Visuals**: Three.js / React Three Fiber (Lazy Loaded Drone Swarm)
- **State/Animation**: Framer Motion
- **Database**: PostgreSQL (Prisma)
- **Forms**: React Hook Form + Zod + ReCAPTCHA
- **Email**: Resend API

## Implementation Details

### Architecture
- **Single Page Scroll**: The entire site lives on `/` with sections anchored by ID.
- **Lazy Loading**: Heavy assets (Three.js canvas) are dynamic imports to ensure high lighthouse scores.
- **Security**: 
  - Server-side validation via Zod.
  - Rate limiting (in-memory per IP).
  - Google ReCAPTCHA verification on the backend.
  - AES-256 encryption mention (simulated in UI context).

### Setup & Development

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Environment Configuration**
   Copy `env-example.txt` contents to `.env.local` and fill in secrets:
   ```bash
   DATABASE_URL="postgresql://..."
   RESEND_API_KEY="re_..."
   RECAPTCHA_SECRET_KEY="..."
   ```

3. **Database**
   ```bash
   npx prisma generate
   ```

4. **Run Locally**
   ```bash
   pnpm dev
   ```

5. **Build for Production**
   ```bash
   pnpm build
   pnpm start
   ```

## Deployment
This application is ready for AWS (EC2/Lightsail) or Vercel. 
Ensure environment variables are securely injected in the deployment pipeline.

## License
Classified / Proprietary - Apex Veil Inc.
