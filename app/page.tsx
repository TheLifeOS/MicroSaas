"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, Zap, Target, Cpu, CheckCircle2, 
  ArrowRight, Globe, Lock, DollarSign, TrendingUp, Sparkles,
  Share2, Linkedin, BrainCircuit, Fingerprint, Activity, Terminal
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function NeuralAuditor2126() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  // 2126 Salary Algorythm (Adjusted for 100-year inflation/market shift)
  const salaryEstimate = useMemo(() => {
    if (!report || report.score < 85) return null;
    const value = 285000 + ((report.score - 85) * 12000);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }, [report]);

  // Simulate Neural Synthesis
  useEffect(() => {
    if (text.length > 100) {
      setIsScanning(true);
      const timer = setTimeout(() => {
        setReport(runNeuralScan(text));
        setIsScanning(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div className="min-h-screen bg-[#020202] text-[#e5e5e5] font-mono selection:bg-purple-900/50 overflow-x-hidden">
      
      {/* 2126 TOP NAV: HUD STYLE */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none group cursor-none">
            ATS<span className="text-purple-600">.PRO</span>
            <span className="block text-[8px] tracking-[0.8em] font-normal opacity-40 group-hover:opacity-100 transition-opacity">NEURAL_OS_v9.0</span>
          </h1>
        </div>
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-3xl">
            <Activity className="w-3 h-3 text-purple-500 animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-purple-400">System Stable</span>
          </div>
          <p className="text-[8px] text-slate-600 uppercase tracking-tighter italic">Last_Sync: 2126-01-17_21:26</p>
        </div>
      </nav>

      {/* BACKGROUND KINETIC GRID */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <main className="relative z-10 pt-40 px-6 max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 pb-32">
        
        {/* LEFT: THE NEURAL FEED (INPUT) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="relative group">
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500/50 group-hover:border-purple-500 transition-all" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500/50 group-hover:border-purple-500 transition-all" />
            
            <div className="bg-white/[0.02] border border-white/5 p-1 transition-all group-focus-within:border-purple-500/30">
              <textarea 
                className="w-full h-[65vh] bg-[#050505] p-12 text-2xl font-light tracking-tight focus:ring-0 border-none resize-none placeholder:text-slate-900 scrollbar-hide leading-relaxed"
                placeholder="// FEED_NEURAL_DATA_HERE..."
                spellCheck="false"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.4em] text-slate-600 uppercase">
             <div className="flex gap-8">
                <span className="flex items-center gap-2 hover:text-purple-500 transition-colors cursor-help"><Fingerprint className="w-3 h-3" /> Bio-Signature_Locked</span>
                <span className="flex items-center gap-2"><Terminal className="w-3 h-3" /> End_to_End_Client_Encryption</span>
             </div>
             <div className="italic">Length: {text.length}</div>
          </div>
        </div>

        {/* RIGHT: THE INTELLIGENCE HUB (OUTPUT) */}
        <div className="lg:col-span-4 sticky top-40 h-fit space-y-6">
          {!report ? (
            <div className="h-[400px] border border-white/5 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-800 italic">Listening_to_Frequency</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-bottom-10 fade-in duration-1000">
              
              {/* SCORE NODE */}
              <div className="bg-purple-600 p-12 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-white/60 mb-8 italic">Synthesized_Match_Index</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10rem] font-black italic tracking-tighter leading-none">{report.score}</span>
                    <span className="text-2xl font-black opacity-40 italic">/100</span>
                  </div>
                </div>
                {/* Visual Glitch Decor */}
                <div className="absolute top-0 right-0 w-32 h-full bg-white/5 -skew-x-12 translate-x-16 group-hover:translate-x-0 transition-transform duration-700" />
              </div>

              {/* MARKET VALUE (Dynamic appearance) */}
              {report.score >= 85 && (
                <div className="bg-white text-black p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Market_Weight_2126</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-6xl font-black italic tracking-tighter leading-none mb-4">{salaryEstimate}</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest leading-relaxed">
                    Based on local cluster analysis, your professional density exceeds {report.score}% of global nodes.
                  </p>
                </div>
              )}

              {/* SEMANTIC GAP MODULE */}
              <div className="p-8 border border-white/5 bg-white/[0.01]">
                <h4 className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600 mb-8 italic flex items-center gap-2">
                  <Target className="w-3 h-3 text-purple-500" /> Required_Optimization
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {report.missing.map((word: string) => (
                    <div key={word} className="p-3 bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all cursor-none group">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-purple-400">+{word}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION: GLOBAL BROADCAST */}
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`, '_blank')}
                className="w-full bg-transparent border border-purple-500/50 py-6 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-4 italic"
              >
                Broadcast_Result <Share2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER: MINIMALIST HUB */}
      <footer className="p-20 border-t border-white/5 flex flex-col items-center gap-10">
        <div className="flex gap-20">
          <Link href="/privacy" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-white transition-all italic underline decoration-purple-600/30 underline-offset-8">Privacy_Protocol</Link>
          <Link href="/terms" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-white transition-all italic">Legal_Manifesto</Link>
        </div>
        <p className="text-[8px] font-bold text-slate-800 uppercase tracking-[1em]">The Future of Talent is Decentralized • MMXXVI-MCXXVI</p>
      </footer>
    </div>
  );
}
