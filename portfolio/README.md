# Marya Getu Portfolio (Next.js)

A modern, responsive portfolio website for Marya Getu, a Frontend & Full-Stack Developer and Amharic voice narrator. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Warm off-white background with forest green dark section and amber accents
- **Responsive Layout**: Optimized for mobile (375px), tablet (768px), and desktop (1280px)
- **Dark Mode**: Fully functional light/dark theme toggle
- **Audio Player**: Custom Amharic voice narration player with progress bar
- **Contact Form**: Integrated with Web3Forms for message handling
- **SEO Optimized**: Open Graph tags, meta descriptions, and semantic HTML
- **Accessible**: WCAG compliant with proper contrast ratios and focus states

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`
   - Get a free Web3Forms API key at https://web3forms.com
   - Add the key to `.env.local`:
     ```
     NEXT_PUBLIC_WEB3FORMS_KEY=your_api_key_here
     ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Editing Content

All editable content is centralized in `lib/data.ts`:

- **Profile**: Name, headline, intro, about text, quote, contact info, availability status, and stats
- **Skills**: Grouped skill categories with individual items
- **Projects**: Project cards with title, tag, description, tech stack, and GitHub repo URLs
- **Experience**: Work history with dates, titles, organizations, and descriptions
- **Certificates**: Certification details with thumbnails and PDF links
- **Voices**: Amharic audio narration tracks with titles

To update images, replace files in the `public/` directory:
- `public/marya.jpg` - Profile photo
- `public/audio/*.mp3` - Voice narration files
- `public/certs/*` - Certificate thumbnails
- `public/docs/*` - Resume and certificate PDFs

## Deployment on Vercel

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable in Vercel project settings
4. Deploy

## Design System

The color scheme is defined in `app/globals.css` using CSS variables:

- **Background**: Warm off-white (`#F7F4EE`)
- **Cards**: White with soft border
- **Dark Section**: Forest green (`#0F2E24`)
- **Accent**: Warm amber (`#F59E0B`)
- **Text**: Near-black green for headings, muted grey-green for secondary text

Typography:
- **Headings**: Fraunces (serif)
- **Body**: Figtree (sans-serif)
- **Amharic**: Noto Sans Ethiopic

## Performance & Accessibility

- Lazy-loaded images below the fold
- Audio files set to `preload="metadata"`
- Semantic HTML structure
- Proper ARIA labels and roles
- Visible focus states
- Contrast ratio of 4.5:1 or higher
- Respects `prefers-reduced-motion`

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS v3
- Web3Forms (contact form)

## License

© 2026 Marya Getu
