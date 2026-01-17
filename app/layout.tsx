import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://micro-saas-ten-xi.vercel.app"),
  title: {
    default: "ATS.PRO | Free, Private Resume Scanner",
    template: "%s | ATS.PRO"
  },
  description: "Beat 2026 recruitment algorithms without compromising your data. Your resume never leaves your device. Free, private, FAANG-grade audit.",
  keywords: ["Free Resume Scanner", "Private ATS Checker", "Secure Resume Audit", "Local Resume AI", "Beat ATS 2026"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://micro-saas-ten-xi.vercel.app",
    title: "ATS.PRO | Free, Private Resume Scanner",
    description: "Beat applicant tracking systems without compromising your data. No sign-up required.",
    siteName: "ATS.PRO",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ATS.PRO Secure Scanner Preview",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free & Private Resume Scanner | ATS.PRO",
    description: "Your resume never leaves your device. Audit your career for 2026.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ATS.PRO",
    "alternateName": "Secure Resume Scanner",
    "url": "https://micro-saas-ten-xi.vercel.app",
    "applicationCategory": "CareerService",
    "description": "Free, private resume scanner that stays 100% on your device.",
    "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" },
    "author": { "@type": "Organization", "name": "ATS.PRO Intelligence Team" }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#FDFDFD] text-[#111]`}>
        {children}
      </body>
    </html>
  );
}
