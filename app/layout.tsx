import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATS.PRO | Free, Private Resume Scanner - No Signup Required",
  description: "Beat applicant tracking systems without compromising your data. Our FAANG-grade resume scanner runs 100% locally on your device. Supported: PDF, DOCX.",
  keywords: [
    "private ats checker", 
    "free resume scanner no signup", 
    "local resume analysis", 
    "developer ats resume checker",
    "secure resume audit"
  ],
  openGraph: {
    title: "ATS.PRO | Free, Private Resume Scanner",
    description: "The only ATS checker that keeps your resume private. Local processing, instant results.",
    type: "website",
    url: "https://micro-saas-ten-xi.vercel.app/",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FDFDFD] text-[#111]">
        {children}
      </body>
    </html>
  );
}
