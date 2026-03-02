# Budget Tracker - Waitlist Landing Page

An ultra-minimalist SaaS landing page for a multi-currency AI expense tracker, built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Features

- **Ultra-minimalistic design** inspired by Notion, Raycast, and early Stripe
- **Monochromatic color scheme** with refined off-white/charcoal palette
- **Smooth scroll animations** powered by Framer Motion
- **Responsive design** that looks great on all devices
- **Waitlist functionality** with Next.js Server Actions
- **Toast notifications** for form feedback
- **Accessibility-focused** with proper labels and keyboard navigation

## Tech Stack

- **Next.js 14+** with App Router
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hot Toast** for notifications
- **TypeScript** for type safety

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/           # Landing page sections
│   ├── HeroSection.tsx
│   ├── PainPointsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── FeaturesSection.tsx
│   ├── TimelineSection.tsx
│   ├── BuilderSection.tsx
│   ├── WaitlistSection.tsx
│   └── index.ts
├── actions/
│   └── waitlist.ts      # Server action for form submission
├── globals.css          # Global styles and design tokens
├── layout.tsx           # Root layout with Geist fonts
└── page.tsx            # Main landing page
```

## Design System

- **Typography:** Geist Sans for clean, modern text
- **Colors:** Monochromatic palette with CSS custom properties
- **Spacing:** Generous whitespace for clean, breathable design
- **Animation:** Subtle, smooth transitions and scroll effects
- **Components:** Minimal borders, soft shadows, rounded corners

## Customization

### Colors
Update the color palette in `app/globals.css`:
```css
:root {
  --background: #FAFAFA;
  --foreground: #111111;
  --border: #E5E5E5;
  --muted: #666666;
  --accent: #111111;
}
```

### Form Submission
The waitlist form uses a Next.js Server Action in `app/actions/waitlist.ts`. 
Update this file to integrate with your preferred email service or database.

## Telegram Notifications

The waitlist form sends notifications to Telegram when users sign up. To set up:

1. **Create a Telegram bot:**
   - Message [@BotFather](https://t.me/botfather) in Telegram
   - Use `/newbot` command and follow instructions
   - Save the Bot Token

2. **Get your Chat ID:**
   - Message [@userinfobot](https://t.me/userinfobot) 
   - Use `/start` command to get your Chat ID

3. **Configure environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your credentials:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

4. **Restart the development server:**
   ```bash
   npm run dev
   ```

See [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) for detailed instructions.

## Customization

MIT License - feel free to use this as a template for your own SaaS landing pages.
