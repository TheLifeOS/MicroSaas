import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://micro-saas-ten-xi.vercel.app"),
  title: {
    default: "ATS.PRO | Human-Grade Talent Intelligence",
    template: "%s | ATS.PRO"
  },
  description: "Bypass 2026 recruitment algorithms with neural match auditing. Designed by humans for elite professionals.",
  keywords: ["ATS Scanner", "Resume AI 2026", "FAANG Resume Audit", "Salary Prediction"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://micro-saas-ten-xi.vercel.app",
    title: "ATS.PRO | Verified Neural Audit",
    description: "Beat the 2026 hiring algorithms. Private. Precise. Powerful.",
    siteName: "ATS.PRO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS.PRO | Master the Algorithm",
    description: "Eliminate ghosting risk with 2026 Neural technology.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ATS.PRO",
    "url": "https://micro-saas-ten-xi.vercel.app",
    "applicationCategory": "CareerService",
    "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
    "author": { "@type": "Organization", "name": "ATS.PRO Design Team" }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#050505] text-white selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
