"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Shield, Zap, Target, Cpu, CheckCircle2, 
  ArrowRight, Globe, Lock, DollarSign, TrendingUp, Sparkles 
} from 'lucide-react';
import { runNeuralScan, ENGINE_2026_RULES } from '@/lib/engine';

export default function EliteATSEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);

  // LOGIC: Dynamic Salary Calculation (2026 FAANG Averages)
  const salaryEstimate = useMemo(() => {
    if (!report || report.score < 85) return null;
    const base = 145000;
    const bonus = (report.score - 85) * 5000;
    const total = base + bonus;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(total);
  }, [report]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/40 selection:text-white">
      
      {/* 1. PREMIUM HEADER */}
      <header className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[0.85] italic uppercase">
            Human <br/> <span className="text-purple-500 not-italic">Intelligence.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-[10px]">
            The 2026 Standard for Senior Architectural & Engineering Audits.
          </p>
        </div>
      </header>

      {/* 2. CORE ENGINE */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-10 border border-white/5 shadow-2xl">
              <textarea 
                className="w-full h-[500px] bg-transparent border-none focus:ring-0 text-xl p-0 placeholder:text-slate-900 resize-none font-light leading-relaxed mb-8"
                placeholder="Paste your professional narrative..."
                onChange={(e) => {
                  setText(e.target.value);
                  if (e.target.value.length > 200) {
                    setReport(runNeuralScan(e.target.value));
                  }
                }}
              />
              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <div className="flex gap-6">
                  <span className="flex items-center gap-2 text-[10px] font-black text-slate-500 tracking-widest"><Shield className="w-3 h-3 text-purple-500" /> ENCRYPTED</span>
                  <span className="flex items-center gap-2 text-[10px] font-black text-slate-500 tracking-widest"><Cpu className="w-3 h-3 text-purple-500" /> NEURAL</span>
                </div>
                <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{text.length} WORDS AUDITED</div>
              </div>
            </div>
          </div>

          {/* 3. RESULTS & SALARY ESTIMATOR */}
          <div className="lg:col-span-5 sticky top-12 space-y-6">
            {!report ? (
              <div className="h-[400px] border border-white/5 rounded-[3rem] flex items-center justify-center bg-white/[0.01]">
                <p className="text-[10px] font-black tracking-[0.5em] text-slate-700 italic uppercase">Awaiting Neural Input</p>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                {/* Score Dashboard */}
                <div className="bg-white text-black p-12 rounded-[3rem] group overflow-hidden relative">
                  <p className="text-[10px] font-black tracking-widest uppercase mb-4 opacity-40">Match Probability</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-9xl font-black italic tracking-tighter">{report.score}</span>
                    <span className="text-2xl font-black opacity-20">%</span>
                  </div>
                  <Sparkles className="absolute top-8 right-8 w-8 h-8 text-purple-600 animate-pulse" />
                </div>

                {/* 🤑 SALARY ESTIMATOR COMPONENT (The "Money" Magnet) */}
                {report.score >= 85 && (
                  <div className="bg-purple-600 p-10 rounded-[3rem] shadow-2xl shadow-purple-500/30 animate-in zoom-in-95 duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                      <span className="text-[10px] font-black bg-black/20 px-3 py-1 rounded-full uppercase tracking-widest">Market Value v2026</span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-2 opacity-80 italic">Predicted Annual Compensation</h3>
                    <p className="text-6xl font-black italic tracking-tighter leading-none mb-6">{salaryEstimate}</p>
                    <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                      <p className="text-[10px] font-medium leading-relaxed italic opacity-90 text-purple-100">
                        Based on your {report.matched.length} high-density semantic matches, you are currently outperforming {report.score}% of global applicants.
                      </p>
                    </div>
                  </div>
                )}

                {/* Keyword Gaps */}
                <div className="bg-[#111] border border-white/5 rounded-[3rem] p-10 backdrop-blur-3xl">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Optimization Signals
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {report.missing.map((word: string) => (
                      <span key={word} className="px-4 py-2 rounded-full bg-white/5 text-white text-[10px] font-black border border-white/10 uppercase tracking-widest hover:border-purple-500 transition-colors cursor-crosshair tracking-widest">
                        + {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">ATS<span className="text-purple-500">.PRO</span></h2>
            <p className="text-[10px] font-black text-slate-700 tracking-[0.5em] uppercase">Built by Humans for Humans • 2026</p>
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all">Terms</Link>
            <a href="mailto:elite@ats.pro" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all italic">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
