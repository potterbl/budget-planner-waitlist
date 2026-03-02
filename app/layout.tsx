import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpendWarden - The ruthless AI tracker that actually saves you money",
  description: "Your personal financial guard. Snap a receipt, text the bot, and let the Warden auto-convert and track every cent. The minimalist AI expense tracker for expats & freelancers.",
  keywords: "expense tracker, AI expense tracker, currency converter, receipt scanner, financial tracker, expense management, budget tracker, spending tracker, expat expenses, freelancer finances",
  authors: [{ name: "SpendWarden", url: "https://www.linkedin.com/in/potterbl/" }],
  creator: "SpendWarden",
  publisher: "SpendWarden",
  robots: "index, follow",
  openGraph: {
    title: "SpendWarden - The ruthless AI tracker that actually saves you money",
    description: "Your personal financial guard. Snap a receipt, text the bot, and let the Warden auto-convert and track every cent.",
    url: "https://spendwarden.co",
    siteName: "SpendWarden",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SpendWarden - AI Expense Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpendWarden - The ruthless AI tracker that actually saves you money",
    description: "Your personal financial guard. Snap a receipt, text the bot, and let the Warden auto-convert and track every cent.",
    images: ["/logo.png"],
  },
  other: {
    "linkedin:creator": "https://www.linkedin.com/in/potterbl/",
    "telegram:creator": "@potter_bl",
    "instagram:creator": "potter.bl",
  },
  alternates: {
    canonical: "https://spendwarden.co",
  },
  category: "Finance",
  classification: "Expense Tracking Software",
  applicationName: "SpendWarden",
  metadataBase: new URL("https://spendwarden.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpendWarden",
    "description": "The ruthless AI tracker that actually saves you money. Your personal financial guard for expense tracking.",
    "url": "https://spendwarden.co",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": ["iOS", "Android", "Web"],
    "offers": {
      "@type": "Offer",
      "price": "69",
      "priceCurrency": "USD",
      "description": "Lifetime Deal - Pay once, use forever"
    },
    "author": {
      "@type": "Person",
      "name": "SpendWarden Team",
      "url": "https://www.linkedin.com/in/potterbl/"
    },
    "sameAs": [
      "https://www.linkedin.com/in/potterbl/",
      "https://t.me/potter_bl",
      "https://instagram.com/potter.bl"
    ],
    "featureList": [
      "AI expense tracking",
      "Multi-currency conversion",
      "Receipt scanning",
      "Telegram bot integration",
      "PDF report generation"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--foreground)',
              color: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
            },
          }}
        />
      </body>
    </html>
  );
}
