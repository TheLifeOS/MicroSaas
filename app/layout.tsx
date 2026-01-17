import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResumeATS Pro - AI-Powered Resume Optimizer",
  description: "Beat ATS systems. Get 67% more interviews with AI-powered resume optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
