"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, Target, Cpu, CheckCircle2, 
  Linkedin, BrainCircuit, Fingerprint, Activity, Terminal, Lock, ChevronRight, Download
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function AuthorityEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Dynamic Market Valuation Logic
  const marketValue = useMemo(() => {
    if (!report || report.score < 80) return null;
    const value = 165000 + ((report.score - 80) * 9200);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }, [report]);

  // Debounced Scanning
  useEffect(() => {
    if (text.length > 100) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setReport(runNeuralScan(text));
        setIsProcessing(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* 1. MINIMALIST TOP BAR */}
      <nav className="border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-black tracking-tighter uppercase tracking-[0.2em]">
              ATS<span className="text-indigo-600">.PRO</span>
            </h1>
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-black/40">
              <span className="text-indigo-600">Audit Engine</span>
              <span>Intelligence Bureau</span>
              <span>2026 Standard</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full">
              <div className={`w-1.5 h-1.5 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
              <span className="text-[9px] font-black uppercase tracking-tighter">System {isProcessing ? 'Busy' : 'Live'}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
        
        {/* INPUT: THE MANUSCRIPT */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.03)] rounded-sm flex flex-col min-h-[700px]">
            <div className="p-6 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Document_Primary_Feed</span>
              <span className="text-[10px] font-mono font-bold text-black/20">{text.length} CHARS</span>
            </div>
            <textarea 
              className="w-full flex-grow p-12 text-lg font-medium leading-relaxed bg-transparent border-none focus:ring-0 placeholder:text-black/10 resize-none scrollbar-hide"
              placeholder="Paste your professional narrative for neural auditing..."
              onChange={(e) => setText(e.target.value)}
            />
            <div className="p-8 border-t border-black/5 grid grid-cols-2 gap-8 bg-gray-50/50">
              <div className="flex items-start gap-4">
                <Lock className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase">Local-First Encryption</p>
                  <p className="text-[9px] text-black/40 leading-tight">Data remains in your browser's secure memory.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase">Institutional Grade</p>
                  <p className="text-[9px] text-black/40 leading-tight">Benchmarked against FAANG v2026 standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUTPUT: THE AUDIT REPORT */}
        <div className="lg:col-span-5 space-y-8">
          {!report ? (
            <div className="h-full border-2 border-dashed border-black/5 rounded-sm flex flex-col items-center justify-center p-12 text-center">
              <BrainCircuit className="w-12 h-12 text-black/5 mb-6" />
              <p className="text-xs font-bold text-black/20 uppercase tracking-[0.3em]">Awaiting Input Stream</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              
              {/* THE SCORE CARD */}
              <div className="bg-black text-white p-12 rounded-sm relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-white/40">Audit Match Authority</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-9xl font-black tracking-tighter italic leading-none">{report.score}</span>
                    <span className="text-2xl font-black text-indigo-500">%</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-8">
                  <Activity className="w-8 h-8 text-white/5" />
                </div>
              </div>

              {/* SALARY VALUATION */}
              {report.score >= 80 && (
                <div className="bg-indigo-600 text-white p-10 rounded-sm shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Market Value index</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-6xl font-black italic tracking-tighter leading-none mb-4">{marketValue}</p>
                  <p className="text-[10px] font-bold opacity-70 leading-relaxed uppercase">
                    Your semantic density suggests a 92nd percentile competitive advantage in the current market.
                  </p>
                </div>
              )}

              {/* SEMANTIC OPTIMIZATION */}
              <div className="bg-white border border-black/10 p-10 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 border-b border-black/5 pb-4">Required Optimization</h4>
                <div className="grid grid-cols-1 gap-3">
                  {report.missing.slice(0, 5).map((word: string) => (
                    <div key={word} className="flex justify-between items-center group cursor-pointer hover:bg-black/5 p-2 transition-all">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-black/60">{word}</span>
                      <ChevronRight className="w-3 h-3 text-black/20 group-hover:text-indigo-600" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-5 bg-white border border-black text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  <Download className="w-4 h-4" /> Export Audit
                </button>
                <button 
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  className="flex items-center justify-center gap-3 py-5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg"
                >
                  <Linkedin className="w-4 h-4" /> Share Score
                </button>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* 3. PROFESSIONAL FOOTER */}
      <footer className="border-t border-black/5 bg-white py-24 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">ATS<span className="text-indigo-600">.PRO</span></h2>
            <p className="text-[9px] font-bold text-black/30 uppercase tracking-[0.4em]">Proprietary Neural Standard • MMXXVI</p>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-black/40">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <span className="italic">Contact: bureau@ats.pro</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
