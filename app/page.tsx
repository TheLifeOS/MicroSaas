"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Shield, Zap, Target, Cpu, CheckCircle2, 
  ArrowRight, Globe, Lock, DollarSign, TrendingUp, Sparkles,
  Share2, Linkedin, BrainCircuit
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function EliteATSEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [showComparison, setShowComparison] = useState(false);

  const salaryEstimate = useMemo(() => {
    if (!report || report.score < 85) return null;
    const total = 145000 + ((report.score - 85) * 5000);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(total);
  }, [report]);

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(window.location.origin);
    const title = encodeURIComponent(`I just scored ${report?.score}% on the ATS.PRO Neural Audit!`);
    const summary = encodeURIComponent("Verified 2026 Resume Benchmarking.");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* 1. COMPACT PREMIUM HEADER */}
      <header className="pt-20 pb-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent leading-[0.8] italic uppercase mb-4">
            ATS<span className="text-purple-600 not-italic">.PRO</span>
          </h1>
          <p className="text-[10px] font-black tracking-[0.6em] text-slate-600 uppercase">
            Crafted by the Intelligence Team • v2026.1
          </p>
        </div>
      </header>

      {/* 2. ENGINE INTERFACE */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-10">
        
        {/* Input: Clean, No unnecessary border-glows */}
        <div className="lg:col-span-7 bg-[#0A0A0A] rounded-[2rem] border border-white/5 flex flex-col overflow-hidden">
          <textarea 
            className="w-full h-[600px] bg-transparent border-none focus:ring-0 text-xl p-10 placeholder:text-slate-900 resize-none font-light leading-snug scrollbar-hide"
            placeholder="Paste your professional story..."
            onChange={(e) => {
              setText(e.target.value);
              if (e.target.value.length > 100) setReport(runNeuralScan(e.target.value));
            }}
          />
          <div className="p-6 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
             <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><Lock className="w-3 h-3 text-purple-600" /> Private</div>
                <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase"><Cpu className="w-3 h-3 text-purple-600" /> Neural</div>
             </div>
             <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest italic">{text.length} chars</div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-5 space-y-4">
          {!report ? (
            <div className="h-full min-h-[400px] rounded-[2rem] border border-dashed border-white/5 flex flex-col items-center justify-center text-slate-800">
              <BrainCircuit className="w-10 h-10 mb-4 opacity-20" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">Awaiting Input</p>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
              
              {/* Score Display */}
              <div className="bg-white text-black p-10 rounded-[2rem] flex justify-between items-end relative overflow-hidden">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2 italic">Neural Match</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-8xl font-black italic tracking-tighter">{report.score}</span>
                    <span className="text-xl font-black opacity-30">%</span>
                  </div>
                </div>
                <button 
                  onClick={shareToLinkedIn}
                  className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl active:scale-95"
                >
                  <Linkedin className="w-3 h-3" /> Share Result
                </button>
                <Sparkles className="absolute top-6 right-6 w-6 h-6 text-purple-600 animate-pulse" />
              </div>

              {/* Salary Estimator (Human Editorial Style) */}
              {report.score >= 85 && (
                <div className="bg-purple-600 p-10 rounded-[2rem] text-white">
                  <div className="flex justify-between items-center mb-6">
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-[9px] font-black border border-white/30 px-3 py-1 rounded-full uppercase italic">Market Authority 2026</span>
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">Estimated Comp</h3>
                  <p className="text-6xl font-black italic tracking-tighter leading-none mb-4">{salaryEstimate}</p>
                  <p className="text-[10px] font-medium leading-relaxed italic opacity-80">
                    Your profile matches the high-density requirements for Tier-1 Senior Architecture roles.
                  </p>
                </div>
              )}

              {/* Comparison Switcher */}
              <div className="bg-[#111] p-8 rounded-[2rem] border border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 italic">Audit Comparison</h4>
                  <div className="flex bg-black p-1 rounded-full border border-white/5">
                    <button onClick={() => setShowComparison(false)} className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${!showComparison ? 'bg-white text-black' : 'text-slate-600'}`}>Core</button>
                    <button onClick={() => setShowComparison(true)} className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${showComparison ? 'bg-purple-600 text-white' : 'text-slate-600'}`}>Comparison</button>
                  </div>
                </div>

                {showComparison ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-black rounded-2xl border border-white/5">
                      <p className="text-[8px] font-black uppercase text-slate-600 mb-2 tracking-tighter">Legacy ATS</p>
                      <span className="text-4xl font-black italic">{report.legacyScore}%</span>
                    </div>
                    <div className="text-center p-6 bg-black rounded-2xl border border-purple-500/20">
                      <p className="text-[8px] font-black uppercase text-purple-400 mb-2 tracking-tighter">AI/Neural</p>
                      <span className="text-4xl font-black italic text-purple-500">{report.neuralScore}%</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {report.missing.map((word: string) => (
                      <span key={word} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:border-purple-500 transition-colors cursor-crosshair">
                        {word}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 3. TIGHT FOOTER */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-1">ATS<span className="text-purple-600">.PRO</span></h2>
            <p className="text-[9px] font-black text-slate-700 tracking-[0.4em] uppercase">Built for Elite Professionals • 2026</p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all italic underline decoration-purple-600/30 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms" className="text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all italic">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
