"use client";

import React from 'react';
import { ArrowLeft, BookOpen, Scale, Zap } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <nav className="p-8 flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-all">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-purple-500">Legal Framework 2026.A</span>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-7xl font-black tracking-tighter italic uppercase leading-none mb-8">
            The <span className="text-purple-500">Agreement.</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium italic leading-relaxed">
            We built ATS.PRO for humans, not bots. These terms are written to protect your talent and our technology.
          </p>
        </header>

        <section className="space-y-20">
          <div className="group border-l-2 border-white/5 pl-8 hover:border-purple-500 transition-colors">
            <h2 className="text-2xl font-black uppercase italic mb-4">01. Intellectual Property</h2>
            <p className="text-slate-500 leading-relaxed">
              Our Neural Engine (v2026.1) and its scoring weights are proprietary. You are free to use the output to land your dream job, but reverse-engineering our local-first logic for commercial gain is strictly prohibited.
            </p>
          </div>

          <div className="group border-l-2 border-white/5 pl-8 hover:border-purple-500 transition-colors">
            <h2 className="text-2xl font-black uppercase italic mb-4">02. No Warranty</h2>
            <p className="text-slate-500 leading-relaxed">
              While we benchmark against FAANG standards, hiring is subjective. We provide the map, but you must walk the path. We do not guarantee employment, but we significantly increase your probability of success.
            </p>
          </div>

          <div className="group border-l-2 border-white/5 pl-8 hover:border-purple-500 transition-colors">
            <h2 className="text-2xl font-black uppercase italic mb-4">03. Professional Conduct</h2>
            <p className="text-slate-500 leading-relaxed">
              Don't use our engine to flood job boards with low-quality, AI-generated spam. Use it to refine your authentic professional story.
            </p>
          </div>
        </section>

        <footer className="mt-40 opacity-20 text-[10px] font-black tracking-[1em] uppercase pb-20">
          Established MMXXVI • ATS.PRO
        </footer>
      </main>
    </div>
  );
}
