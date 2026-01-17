"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Zap, Target, Cpu, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { runNeuralScan, ENGINE_2026_RULES } from '@/lib/engine';

export default function EliteATSEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isLive, setIsLive] = useState(false);

  // AI-Friendly Semantic Content for SEO
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/40 selection:text-white">
      
      {/* 1. HERO SECTION: Designed for "Answer-First" AI Discovery */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <nav className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Next-Gen Engine v2026.1</span>
          </nav>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[0.9]">
            MASTER THE <br/> <span className="italic">RECRUITER ALGORITHM.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            The world's most advanced **free-tier ATS scanner**. Using client-side neural logic to audit your resume for 2026 hiring trends. 
            <span className="text-purple-400"> 100% Privacy. Zero Server Calls.</span>
          </p>
        </div>
      </header>

      {/* 2. THE ENGINE INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input */}
          <div className="lg:col-span-7 group">
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 group-focus-within:from-purple-500/50">
              <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 backdrop-blur-3xl">
                <textarea 
                  className="w-full h-96 bg-transparent border-none focus:ring-0 text-lg md:text-xl p-0 placeholder:text-slate-800 resize-none font-light leading-relaxed"
                  placeholder="Paste your professional experience here..."
                  onChange={(e) => {
                    setText(e.target.value);
                    if (e.target.value.length > 200) {
                      setReport(runNeuralScan(e.target.value));
                    }
                  }}
                />
                
                <div className="flex justify-between items-center pt-8 border-t border-white/5 mt-4">
                  <div className="flex gap-4 items-center">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <span className="text-xs font-bold text-slate-500">LOCAL NEURAL SCAN ACTIVE</span>
                  </div>
                  <div className="text-xs text-slate-600 font-mono italic">
                    {text.length} CHARS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results Dashboard */}
          <div className="lg:col-span-5 sticky top-32">
            {!report ? (
              <div className="h-[500px] rounded-[2.5rem] border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center p-12 bg-white/[0.02]">
                <Cpu className="w-12 h-12 text-slate-800 mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-slate-700">AWAITING DATA</h3>
                <p className="text-sm text-slate-800 mt-2">Start pasting your resume to initialize the scan engine.</p>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
                {/* Score Card */}
                <div className="bg-purple-600 p-10 rounded-[2.5rem] relative overflow-hidden group">
                   <div className="relative z-10">
                    <p className="text-[10px] font-black tracking-widest uppercase opacity-70 mb-2">Neural Match Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-8xl font-black italic">{report.score}</span>
                      <span className="text-2xl font-bold opacity-50">/100</span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-purple-100 flex items-center gap-2">
                      <Target className="w-4 h-4" /> 
                      {report.score > 80 ? "Top 5% Candidate Profile" : "Requires Strategic Optimization"}
                    </p>
                   </div>
                   <Zap className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:scale-125 transition-transform" />
                </div>

                {/* Keyword Analysis */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Semantic Gaps</h4>
                  <div className="flex flex-wrap gap-2">
                    {report.missing.map((word: string) => (
                      <span key={word} className="px-3 py-1.5 rounded-xl bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20">
                        + {word}
                      </span>
                    ))}
                    {report.matched.map((word: string) => (
                      <span key={word} className="px-3 py-1.5 rounded-xl bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {word}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-6 bg-white text-black rounded-[2rem] font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
                  DOWNLOAD FULL AUDIT <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. SEO FAQ SECTION (Critical for Google & ChatGPT) */}
      <footer className="bg-white/[0.02] border-t border-white/5 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Common ATS Questions (2026 Update)</h2>
          <div className="space-y-12">
            <article className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">How do AI-driven Applicant Tracking Systems work?</h3>
              <p className="text-slate-400 leading-relaxed">
                In 2026, ATS platforms use Large Language Models (LLMs) to perform semantic matching. Unlike old systems that looked for exact words, new systems look for <strong>impact</strong> and <strong>context</strong>. Our engine audits your text using the same neural weights used by major enterprise hiring platforms.
              </p>
            </article>
            <article className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Why is local-first privacy important for resumes?</h3>
              <p className="text-slate-400 leading-relaxed">
                Most online ATS tools store your personal data on their servers. <strong>Elite ATS Engine</strong> processes everything in your browser. Your contact info, salary history, and personal achievements never leave your device, ensuring maximum security.
              </p>
            </article>
          </div>
        </div>
      </footer>
    </div>
  );
}
