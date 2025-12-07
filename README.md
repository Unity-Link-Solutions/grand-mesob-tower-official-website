# Grand Mesob Tower Official Website

A premium, architectural website for Grand Mesob Tower—a visionary 100+ floor mixed-use landmark tower in Addis Ababa, Ethiopia.

## 🏗️ Project Overview

Grand Mesob Tower is a vertical city celebrating Ethiopian culture, business innovation, and world-class hospitality. This website presents the tower's vision with a modern, parallax-driven experience that reflects the seriousness and cultural significance of this national-level project.

## ✨ Design Philosophy

- **Primary Palette**: Black/dark grey and white/off-white for a clean, architectural feel
- **Accent Colors**: Muted gold/amber, deep green, and muted red used sparingly
- **Ethiopian Patterns**: Transparent/translucent geometric overlays for cultural identity
- **Typography**: Editorial/architectural style with Playfair Display for headings and Inter for body text
- **Parallax Effects**: Smooth, premium motion effects—never gimmicky
- **Mobile-First**: Fully responsive design maintaining premium feel across all devices

## 🌟 Key Features

### Pages
- **Home** (`/`): Parallax hero, vision pillars, tower overview, investor section, timeline
- **The Tower** (`/tower`): Architectural concept, mesob inspiration, floor clusters, key features
- **Experiences** (`/experiences`): Observation decks, dining, hotels, events, museum
- **Business** (`/business`): Investment opportunities, office spaces, partnership models
- **Culture & Heritage** (`/culture`): Mesob story, heritage museum, regional galleries, coffee culture
- **Contact** (`/contact`): General and business inquiry forms with validation

### Components
- **Header**: Sticky navigation with scroll-based transparency effects
- **Footer**: Comprehensive site links and contact information
- **Ethiopian Patterns**: SVG-based geometric patterns (mesob, cross, diamond, triangle, stripe)
- **Parallax Sections**: Smooth parallax scrolling for depth and premium feel

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Grand-Mesob-Tower-Official-Website.git
cd Grand-Mesob-Tower-Official-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display (headings), Inter (body)
- **Deployment**: Vercel-ready (or any Node.js hosting)

## 📁 Project Structure

```
Grand-Mesob-Tower-Official-Website/
├── app/
│   ├── components/
│   │   ├── Header.tsx              # Site navigation
│   │   ├── Footer.tsx              # Site footer
│   │   ├── EthiopianPatterns.tsx   # SVG pattern components
│   │   └── ParallaxSection.tsx     # Parallax utility
│   ├── business/                   # Business & investment page
│   ├── contact/                    # Contact forms page
│   ├── culture/                    # Culture & heritage page
│   ├── experiences/                # Experiences page
│   ├── tower/                      # The tower page
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Homepage
│   └── globals.css                 # Global styles
├── public/                         # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🎨 Design Guidelines

When adding new content or components:

1. **Colors**: Maintain black/white primary palette. Use accent colors (gold, green, red) very sparingly—only for highlights.

2. **Patterns**: Ethiopian patterns should be transparent overlays (opacity 0.05-0.1), never solid blocks.

3. **Typography**: 
   - Headings: `font-playfair` (light weight: 300-400)
   - Body: `font-sans` (Inter)
   - Use fluid typography with `clamp()`

4. **Spacing**: Follow the architectural precision spacing system defined in `globals.css`

5. **Motion**: Keep animations smooth and subtle. Use `transition-all duration-300` or custom cubic-bezier timing.

6. **No Template Vibes**: Every element should feel custom, premium, and intentional.

## 📝 Content Guidelines

- **Tone**: Professional, aspirational, culturally respectful
- **Voice**: Confident but not boastful; visionary but grounded
- **Audience**: Government officials, investors, business leaders, media, general public
- **Language**: Clear, concise, accessible English with cultural references explained

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/news/`)
2. Add a `page.tsx` file
3. Follow the existing page structure and design patterns
4. Add navigation links in `Header.tsx` and `Footer.tsx`

### Modifying Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-gold: #c8a882;
  --color-amber: #d4a574;
  --color-deep-green: #2d5a3d;
  --color-muted-red: #8b3a3a;
}
```

### Adding New Patterns

Create new pattern components in `app/components/EthiopianPatterns.tsx` following the existing SVG pattern structure.

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (automatic)

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder or run `npm start` on your server.

## 📄 License

Copyright © 2024 Grand Mesob Tower. All rights reserved.

## 🤝 Contributing

This is a private project for Grand Mesob Tower. For inquiries, please contact: [info@grandmesobtower.com](mailto:info@grandmesobtower.com)

## 📧 Contact

- **General Inquiries**: info@grandmesobtower.com
- **Investment**: invest@grandmesobtower.com
- **Website**: [www.grandmesobtower.com](#) (coming soon)

---

Built with precision and pride for Ethiopia 🇪🇹
