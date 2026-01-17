"use client";

import React from 'react';
import { ShieldCheck, Lock, EyeOff, ServerOff, ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Engine</span>
        </Link>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-500" />
          <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">Zero-Knowledge Protocol v2.0</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-6 leading-none">
            Privacy as a <br/> <span className="text-purple-500">Core Engine.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium">
            At ATS.PRO, we believe your professional history is yours alone. 
            We've engineered our platform so that we never see, store, or sell your data.
          </p>
        </header>

        {/* 2026 Privacy Architecture Visualization */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-4">
            <ServerOff className="w-8 h-8 text-purple-500" />
            <h3 className="font-black uppercase text-sm">No Database</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Your resume is processed in temporary RAM and destroyed the moment you close the tab.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-4">
            <EyeOff className="w-8 h-8 text-purple-500" />
            <h3 className="font-black uppercase text-sm">Client-Side Only</h3>
            <p className="text-xs text-slate-500 leading-relaxed">The Neural Engine (lib/engine.ts) downloads to your browser. The "work" happens on your CPU.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-4">
            <Globe className="w-8 h-8 text-purple-500" />
            <h3 className="font-black uppercase text-sm">GEO Optimized</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Our privacy standards meet the strictest 2026 AI-safety guidelines globally.</p>
          </div>
        </div>

        <section className="space-y-16 prose prose-invert max-w-none">
          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase italic">1. Data Collection</h2>
            <p className="text-slate-400">
              We do not collect PII (Personally Identifiable Information). When you paste text into our engine, it is analyzed using a local React hook. No network request containing your resume text is ever sent to our servers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase italic">2. Analytics & Monetization</h2>
            <p className="text-slate-400">
              We use anonymous, aggregate analytics to see how many people use the tool. If you choose to use our affiliate links for resume templates, the third-party provider may collect data according to their own policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black uppercase italic">3. AI Transparency</h2>
            <p className="text-slate-400">
              Our algorithm is open to audit. We use a transparent, weighted keyword and semantic analysis system (Engine v2026.1) to ensure bias-free scoring.
            </p>
          </div>
        </section>

        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em]">
            Verified Private 2026 • Secure by Design
          </p>
        </footer>
      </main>
    </div>
  );
}
