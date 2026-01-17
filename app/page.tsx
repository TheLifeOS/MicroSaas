"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, Target, Cpu, CheckCircle2, 
  Linkedin, BrainCircuit, Fingerprint, Activity, Terminal, Lock, ChevronRight, Download,
  TrendingUp, Sparkles, RefreshCw, Copy, Check
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function AuthorityEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeRewrite, setActiveRewrite] = useState<{word: string, suggestion: string} | null>(null);
  const [copied, setCopied] = useState(false);

  // Dynamic Market Valuation Logic
  const marketValue = useMemo(() => {
    if (!report || report.score < 80) return null;
    const value = 165000 + ((report.score - 80) * 9200);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }, [report]);

  // Debounced Scanning
  useEffect(() => {
    if (text.length > 50) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setReport(runNeuralScan(text));
        setIsProcessing(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [text]);

  // Neural Rewriter Logic
  const handleRewrite = (word: string) => {
    const suggestions: {[key: string]: string} = {
      "Next.js 16": "Architected high-performance interfaces utilizing Next.js 16 App Router for optimized server-side rendering.",
      "TypeScript": "Implemented strict TypeScript typings across microservices to eliminate runtime exceptions and enhance code maintainability.",
      "LLM Integration": "Spearheaded the integration of large language models (LLMs) to automate complex data extraction workflows.",
      "System Design": "Engineered resilient system designs capable of handling 100k+ concurrent requests with sub-100ms latency.",
      "Scalability": "Optimized cloud infrastructure for global scalability, reducing operational overhead by 40%.",
      "RAG": "Developed Retrieval-Augmented Generation (RAG) pipelines to improve AI response accuracy using vector embeddings."
    };
    
    setActiveRewrite({
      word,
      suggestion: suggestions[word] || `Expertly leveraged ${word} to drive strategic technical initiatives and cross-functional performance.`
    });
  };

  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A0A0A] font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL NAV */}
      <nav className="border-b border-black/[0.08] bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-black tracking-tighter uppercase tracking-[0.25em]">
              ATS<span className="text-indigo-600">.PRO</span>
            </h1>
            <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
              <span className="text-indigo-600 border-b border-indigo-600">Audit_Feed</span>
              <span className="hover:text-black transition-colors cursor-pointer">Market_Index</span>
              <span className="hover:text-black transition-colors cursor-pointer">Security_Protocol</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-1.5 bg-black/[0.03] border border-black/[0.05] rounded-full">
                <div className={`w-1.5 h-1.5 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                <span className="text-[9px] font-black uppercase tracking-widest">Neural Status: {isProcessing ? 'Processing' : 'Optimal'}</span>
             </div>
          </div>
        </div>
      </nav>

      {/* 2. CORE WORKSPACE */}
      <main className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-12 gap-16">
        
        {/* INPUT COLUMN */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 shadow-[30px_30px_0px_0px_rgba(0,0,0,0.02)] rounded-sm flex flex-col">
            <div className="p-6 border-b border-black/[0.05] flex justify-between items-center bg-gray-50/50">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 italic flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Raw_Data_Input
              </span>
              <span className="text-[9px] font-mono font-bold text-black/20 italic uppercase tracking-widest">v2026_Secure_Buffer</span>
            </div>
            <textarea 
              className="w-full min-h-[650px] p-12 text-xl font-medium leading-[1.7] bg-transparent border-none focus:ring-0 placeholder:text-black/5 resize-none scrollbar-hide"
              placeholder="Paste your professional narrative here..."
              onChange={(e) => setText(e.target.value)}
            />
            <div className="p-10 border-t border-black/[0.05] grid grid-cols-2 gap-12 bg-gray-50/30">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg"><Lock className="w-4 h-4 text-indigo-600" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Local Processing</p>
                  <p className="text-[9px] text-black/40 font-bold leading-relaxed uppercase">Neural weights are computed locally in-browser.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg"><Shield className="w-4 h-4 text-indigo-600" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">FAANG Integrity</p>
                  <p className="text-[9px] text-black/40 font-bold leading-relaxed uppercase">Scoring aligned with tier-1 engineering standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUTPUT COLUMN */}
        <div className="lg:col-span-5 space-y-8">
          {!report ? (
            <div className="h-[600px] border-2 border-dashed border-black/[0.05] rounded-sm flex flex-col items-center justify-center p-12 text-center bg-white/50">
              <BrainCircuit className="w-12 h-12 text-black/[0.03] mb-6 animate-pulse" />
              <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Listening for Neural Stream</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-10 duration-1000">
              
              {/* SCORE BOARD */}
              <div className="bg-black text-white p-14 rounded-sm relative group">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/30 italic">Match_Coefficient_Index</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[11rem] font-black italic tracking-tighter leading-none">{report.score}</span>
                  <span className="text-3xl font-black text-indigo-500 opacity-50">%</span>
                </div>
                <Sparkles className="absolute top-10 right-10 w-8 h-8 text-indigo-500/20" />
              </div>

              {/* DYNAMIC SALARY BOX */}
              {report.score >= 80 && (
                <div className="bg-indigo-600 text-white p-12 rounded-sm shadow-[20px_20px_60px_-15px_rgba(79,70,229,0.3)]">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Market_Valuation_2026</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-7xl font-black italic tracking-tighter leading-none mb-6">{marketValue}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-relaxed border-t border-white/10 pt-6">
                    Professional density optimized for Tier-1 leadership.
                  </p>
                </div>
              )}

              {/* NEURAL REWRITER MODULE */}
              <div className="bg-white border border-black/10 p-10 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3 italic">
                  <RefreshCw className="w-4 h-4 text-indigo-600" /> Optimization_Nodes
                </h4>
                
                {activeRewrite ? (
                  <div className="animate-in zoom-in-95 duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-black uppercase text-indigo-600 tracking-widest italic underline underline-offset-4">Suggested Rewrite for: {activeRewrite.word}</span>
                    </div>
                    <div className="bg-gray-50 p-6 border border-black/5 rounded-sm relative group">
                      <p className="text-xs font-bold leading-relaxed pr-8 text-black/70 italic">"{activeRewrite.suggestion}"</p>
                      <button 
                        onClick={() => copyToClipboard(activeRewrite.suggestion)}
                        className="absolute top-4 right-4 hover:text-indigo-600 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-black/20" />}
                      </button>
                    </div>
                    <button 
                      onClick={() => setActiveRewrite(null)}
                      className="mt-4 text-[9px] font-black uppercase tracking-widest text-black/30 hover:text-black transition-colors"
                    >
                      ← Back to Nodes
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {report.missing.slice(0, 5).map((word: string) => (
                      <button 
                        key={word} 
                        onClick={() => handleRewrite(word)}
                        className="flex justify-between items-center group p-4 border border-black/[0.03] hover:border-indigo-600/30 hover:bg-indigo-50/30 transition-all text-left"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/60 group-hover:text-black">{word}</span>
                        <ChevronRight className="w-3 h-3 text-black/10 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* PRIMARY CALLS TO ACTION */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-6 bg-white border border-black text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                  <Download className="w-4 h-4" /> Export_Audit
                </button>
                <button 
                   onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`, '_blank')}
                   className="flex items-center justify-center gap-3 py-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-700 transition-all shadow-xl"
                >
                  <Linkedin className="w-4 h-4" /> Share_Result
                </button>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* 3. EDITORIAL FOOTER */}
      <footer className="border-t border-black/[0.08] bg-white py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-6 italic">ATS<span className="text-indigo-600">.PRO</span></h2>
            <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest leading-loose">
              An independent intelligence standard for the 2026 professional landscape. Engineered by human architects to restore transparency to the recruitment cycle.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
            <div className="space-y-4 flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-indigo-600">Legal</span>
              <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">Privacy_Protocol</Link>
              <Link href="/terms" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-all">Terms_Agreement</Link>
            </div>
            <div className="space-y-4 flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-indigo-600">Sync</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 italic underline decoration-indigo-600/30">bureau@ats.pro</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">v.2.0.26_A</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-black/[0.05]">
          <p className="text-[8px] font-black text-black/20 uppercase tracking-[1em] text-center">MMXXVI • INTELLECTUAL PROPERTY OF ATS.PRO INTELLIGENCE TEAM</p>
        </div>
      </footer>
    </div>
  );
}
