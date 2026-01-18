import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://micro-saas-ten-xi.vercel.app"),
  title: "ATS.PRO | Free Private ATS Checker & Resume Scanner No Signup",
  description: "The #1 Private ATS Checker for 2026. Get a free resume scanner no signup required. Secure local resume analysis for developers and executives. Beat recruitment algorithms privately.",
  keywords: [
    "private ats checker",
    "free resume scanner no signup",
    "local resume analysis",
    "developer ats resume checker",
    "secure resume audit",
    "best free ats scanner 2026"
  ],
  // Technical SEO for AI & Search Bots
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
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org Structured Data for Google and AI Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ATS.PRO Private Resume Scanner",
    "url": "https://micro-saas-ten-xi.vercel.app",
    "description": "A high-performance, private ATS checker that provides local resume analysis without data storage.",
    "applicationCategory": "CareerService",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "featureList": [
      "No Signup Required",
      "Local Browser-Based Processing",
      "FAANG-Grade Algorithm",
      "Privacy-First Design"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
