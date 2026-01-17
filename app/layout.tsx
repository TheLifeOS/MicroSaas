// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. Enhanced Metadata for SEO & Social Discovery
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // CHANGE TO YOUR REAL DOMAIN
  title: {
    default: "ATS.PRO | #1 FAANG-Grade Resume Intelligence Engine",
    template: "%s | ATS.PRO"
  },
  description: "Calculate your market value and eliminate ghosting risk with 2026 Neural ATS technology. Free, private, and FAANG-benchmarked.",
  keywords: ["ATS Scanner", "Resume Checker 2026", "AI Resume Audit", "Beat the Algorithm", "FAANG Resume Tips"],
  authors: [{ name: "ATS.PRO Intelligence Team" }],
  creator: "ATS.PRO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "ATS.PRO | FAANG-Grade Resume Intelligence",
    description: "Beat 2026 recruitment algorithms with our local-first neural analysis engine.",
    siteName: "ATS.PRO",
    images: [{
      url: "/og-image.jpg", // Create this 1200x630 image in /public
      width: 1200,
      height: 630,
      alt: "ATS.PRO Neural Scan Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS.PRO | Master the Recruiter Algorithm",
    description: "Eliminate ghosting risk with 2026 AI technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6", // Purple theme color
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. AI-Engine Discovery Schema (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ATS.PRO",
    "alternateName": "ATS Pro Resume Scanner",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "operatingSystem": "All",
    "applicationCategory": "CareerService",
    "description": "Calculate your market value and eliminate ghosting risk with 2026 AI technology.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "featureList": [
      "FAANG Benchmarking",
      "Real-time Salary Prediction",
      "ATS Ghosting Probability",
      "AI Transformation Engine",
      "Privacy-First Neural Scanning"
    ],
    "author": {
      "@type": "Organization",
      "name": "ATS.PRO"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Verification for Search Engines */}
        <meta name="google-site-verification" content="YOUR_CODE_HERE" />
        
        {/* Structured Data for Google Rich Results & AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
