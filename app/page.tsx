"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Shield, Zap, Target, Cpu, CheckCircle2, 
  ArrowRight, Globe, Lock, DollarSign, TrendingUp, Sparkles,
  BarChart, Layers, BrainCircuit
} from 'lucide-react';
import { runNeuralScan, ENGINE_2026_RULES } from '@/lib/engine';

export default function EliteATSEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Dynamic Salary Calculation
  const salaryEstimate = useMemo(() => {
    if (!report || report.score < 85) return null;
    const base = 145000;
    const bonus = (report.score - 85) * 5000;
    const total = base + bonus;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(total);
  }, [report]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/40">
      
      {/* 1. HEADER */}
      <header className="relative pt-24 pb-12 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[0.85] italic uppercase">
            Neural <br/> <span className="text-purple-500 not-italic">Audit.</span>
          </h1>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-8">Professional Grade Benchmark v2026.1</p>
        </div>
      </header>

      {/* 2. MAIN INTERFACE */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Input Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] rounded-[3rem] p-10 border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10">
              <textarea 
                className="w-full h-[550px] bg-transparent border-none focus:ring-0 text-xl p-0 placeholder:text-slate-900 resize-none font-light leading-relaxed mb-8 scrollbar-hide"
                placeholder="Paste your professional narrative or resume content here..."
                onChange={(e) => {
                  setText(e.target.value);
                  if (e.target.value.length > 100) {
                    setReport(runNeuralScan(e.target.value));
                  }
                }}
              />
              <div className="flex justify-between items-center pt-8 border-t border-white/5 text-slate-500">
                <div className="flex gap-6 items-center">
                  <span className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase italic"><Lock className="w-3 h-3 text-green-500" /> Client-Side Only</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] italic">{text.length} Characters Analyzed</div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 sticky top-8 space-y-6">
            {!report ? (
              <div className="h-[400px] border border-white/5 rounded-[3rem] flex flex-col items-center justify-center bg-white/[0.01] text-center p-12">
                <BrainCircuit className="w-12 h-12 text-slate-900 mb-6" />
                <p className="text-[10px] font-black tracking-[0.4em] text-slate-700 uppercase italic">Awaiting Semantic Signals</p>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                
                {/* 📊 COMPARISON MODE TOGGLE */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-2 flex gap-1">
                  <button 
                    onClick={() => setShowComparison(false)}
                    className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!showComparison ? 'bg-white text-black' : 'text-slate-500 hover:text-white'}`}
                  >
                    Neural Score
                  </button>
                  <button 
                    onClick={() => setShowComparison(true)}
                    className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${showComparison ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                  >
                    AI Comparison
                  </button>
                </div>

                {showComparison ? (
                  /* COMPARISON VIEW */
                  <div className="grid grid-cols-2 gap-4 animate-in zoom-in-95 duration-500">
                    <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 text-center">
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-4">Legacy ATS</p>
                      <span className="text-6xl font-black italic text-slate-200">{report.legacyScore}%</span>
                      <p className="text-[8px] font-bold text-slate-600 mt-4 uppercase tracking-tighter italic">Keyword matching only</p>
                    </div>
                    <div className="bg-purple-600/20 p-8 rounded-[2.5rem] border border-purple-500/30 text-center">
                      <p className="text-[10px] font-black uppercase text-purple-400 mb-4">GPT-4 / Neural</p>
                      <span className="text-6xl font-black italic text-white">{report.neuralScore}%</span>
                      <p className="text-[8px] font-bold text-purple-300 mt-4 uppercase tracking-tighter italic">Semantic & Verb Impact</p>
                    </div>
                  </div>
                ) : (
                  /* SINGLE SCORE VIEW */
                  <div className="bg-white text-black p-12 rounded-[3rem] relative overflow-hidden group">
                    <p className="text-[10px] font-black tracking-widest uppercase mb-4 opacity-40 italic">Final Match Authority</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-9xl font-black italic tracking-tighter">{report.score}</span>
                      <span className="text-2xl font-black opacity-20">%</span>
                    </div>
                    <Sparkles className="absolute top-10 right-10 w-8 h-8 text-purple-600 animate-pulse" />
                  </div>
                )}

                {/* 💰 SALARY ESTIMATOR */}
                {report.score >= 85 && (
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-10 rounded-[3rem] shadow-2xl shadow-purple-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <DollarSign className="w-8 h-8 text-white" />
                      <span className="text-[10px] font-black bg-black/20 px-3 py-1 rounded-full uppercase tracking-widest italic">2026 Salary Index</span>
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Market Valuation</h3>
                    <p className="text-6xl font-black italic tracking-tighter leading-none mb-4">{salaryEstimate}</p>
                    <p className="text-[10px] font-medium leading-relaxed italic text-purple-100 opacity-80">
                      Top-tier ranking. This score reflects an elite combination of system design and LLM integration expertise.
                    </p>
                  </div>
                )}

                {/* OPTIMIZATION SIGNALS */}
                <div className="bg-[#111] border border-white/5 rounded-[3rem] p-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 mb-8 flex items-center gap-2 italic">
                    <Target className="w-4 h-4 text-purple-500" /> Optimization Required
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {report.missing.map((word: string) => (
                      <span key={word} className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-[10px] font-black border border-white/10 uppercase tracking-widest hover:border-purple-500 transition-all cursor-crosshair">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">ATS<span className="text-purple-500">.PRO</span></h2>
            <p className="text-[10px] font-black text-slate-700 tracking-[0.5em] uppercase">Human-Centric Talent Intelligence • 2026</p>
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all italic underline decoration-purple-500/50 underline-offset-8">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all italic">Terms</Link>
            <a href="mailto:elite@ats.pro" className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-all italic">Audit Hub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
