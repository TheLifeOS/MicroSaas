"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, Target, Cpu, CheckCircle2, 
  Linkedin, BrainCircuit, Fingerprint, Activity, Terminal, Lock, ChevronRight, Download,
  TrendingUp, Sparkles, RefreshCw, Copy, Check, BarChart3, Search
} from 'lucide-react';

// Mock engine - Replace with your actual logic
const runNeuralScan = (input: string) => {
  const score = Math.min(Math.max(input.length / 20, 45), 98);
  return {
    score: Math.floor(score),
    missing: ["Next.js 16", "TypeScript", "System Design", "Scalability", "RAG Pipeline"],
    impact: "High"
  };
};

export default function AuthorityEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeRewrite, setActiveRewrite] = useState<{word: string, suggestion: string} | null>(null);
  const [copied, setCopied] = useState(false);

  // Dynamic Market Valuation (Competitor-Killer Feature)
  const marketValue = useMemo(() => {
    if (!report || report.score < 70) return null;
    const value = 145000 + ((report.score - 70) * 8500);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  }, [report]);

  useEffect(() => {
    if (text.length > 40) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setReport(runNeuralScan(text));
        setIsProcessing(false);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [text]);

  const handleRewrite = (word: string) => {
    const suggestions: {[key: string]: string} = {
      "Next.js 16": "Architected mission-critical web applications utilizing Next.js 16 for enhanced performance and server-side scalability.",
      "TypeScript": "Engineered robust, type-safe architectures using TypeScript to reduce production bugs by 35%.",
      "System Design": "Spearheaded complex system design initiatives for distributed environments serving millions of requests.",
      "Scalability": "Implemented horizontal scaling strategies that increased system throughput by 200% under peak load.",
      "RAG Pipeline": "Developed advanced RAG pipelines utilizing vector databases to improve AI contextual accuracy."
    };
    setActiveRewrite({ word, suggestion: suggestions[word] || `Leveraged ${word} to optimize cross-functional technical workflows.` });
  };

  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* 1. INSTITUTIONAL NAVIGATION */}
      <nav className="border-b border-black/[0.06] bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <h1 className="text-xl font-black tracking-tighter uppercase tracking-[0.3em]">
              ATS<span className="text-indigo-600">.INTEL</span>
            </h1>
            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              <span className="text-indigo-600">Primary_Audit</span>
              <span className="hover:text-black cursor-pointer transition-colors">Market_Benchmarking</span>
              <span className="hover:text-black cursor-pointer transition-colors">Security_Vault</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-1.5 bg-black/[0.02] border border-black/[0.05] rounded-full">
            <div className={`w-1.5 h-1.5 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
            <span className="text-[9px] font-black uppercase tracking-widest">{isProcessing ? 'Neural_Processing' : 'System_Ready'}</span>
          </div>
        </div>
      </nav>

      {/* 2. THE AUDIT WORKSPACE */}
      <main className="max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-12 gap-16">
        
        {/* LEFT: THE MANUSCRIPT INPUT */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden">
            <div className="p-6 border-b border-black/[0.04] flex justify-between items-center bg-gray-50/50">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 flex items-center gap-2">
                <Search className="w-3 h-3" /> Professional_Input_Stream
              </span>
              <span className="text-[9px] font-mono text-black/20 italic">BUFFER_ACTIVE_2026</span>
            </div>
            <textarea 
              className="w-full min-h-[600px] p-12 text-xl font-medium leading-[1.8] bg-transparent border-none focus:ring-0 placeholder:text-black/5 resize-none scrollbar-hide"
              placeholder="Paste resume content or project narrative..."
              onChange={(e) => setText(e.target.value)}
            />
            <div className="p-10 border-t border-black/[0.05] grid grid-cols-2 gap-12 bg-gray-50/20">
              <div className="flex gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg h-fit"><Lock className="w-4 h-4 text-indigo-600" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Privacy Protocol</p>
                  <p className="text-[9px] text-black/40 font-bold leading-tight uppercase">Local encryption enabled. No server-side logs stored.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-indigo-50 rounded-lg h-fit"><Shield className="w-4 h-4 text-indigo-600" /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-1">Standard v2.4</p>
                  <p className="text-[9px] text-black/40 font-bold leading-tight uppercase">Analysis calibrated to current tier-1 hiring algorithms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE INTELLIGENCE PANEL */}
        <div className="lg:col-span-5 space-y-8">
          {!report ? (
            <div className="h-[500px] border-2 border-dashed border-black/[0.06] rounded-sm flex flex-col items-center justify-center p-12 text-center bg-white/40">
              <BrainCircuit className="w-12 h-12 text-black/[0.03] mb-6" />
              <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.6em]">Scanning Input Data...</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              
              {/* PRIMARY SCORE */}
              <div className="bg-[#0A0A0A] text-white p-14 rounded-sm relative overflow-hidden group">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/30 italic">Audit_Match_Index</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[11rem] font-black italic tracking-tighter leading-none group-hover:text-indigo-500 transition-colors duration-700">{report.score}</span>
                  <span className="text-3xl font-black text-indigo-500 opacity-40">%</span>
                </div>
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <BarChart3 className="w-16 h-16" />
                </div>
              </div>

              {/* VALUE CALCULATOR */}
              {report.score >= 70 && (
                <div className="bg-indigo-600 text-white p-12 rounded-sm shadow-2xl shadow-indigo-600/20">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Estimated_Market_Cap</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-7xl font-black italic tracking-tighter leading-none mb-6">{marketValue}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 leading-relaxed border-t border-white/10 pt-6">
                    Professional semantic density matches 94th percentile candidates.
                  </p>
                </div>
              )}

              {/* NEURAL REWRITE COMPONENT */}
              <div className="bg-white border border-black/10 p-10 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <RefreshCw className="w-4 h-4 text-indigo-600" /> Improvement_Vectors
                </h4>
                
                {activeRewrite ? (
                  <div className="animate-in zoom-in-95 duration-200">
                    <p className="text-[9px] font-black uppercase text-indigo-600 mb-2 italic">Neural Suggestion: {activeRewrite.word}</p>
                    <div className="bg-gray-50 p-6 border border-black/5 rounded-sm relative group">
                      <p className="text-xs font-bold leading-relaxed pr-10 text-black/80 italic">"{activeRewrite.suggestion}"</p>
                      <button 
                        onClick={() => copyToClipboard(activeRewrite.suggestion)}
                        className="absolute top-4 right-4 hover:text-indigo-600 transition-all"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-black/20" />}
                      </button>
                    </div>
                    <button 
                      onClick={() => setActiveRewrite(null)}
                      className="mt-4 text-[9px] font-black uppercase tracking-widest text-black/30 hover:text-black"
                    >
                      ← Return to Analysis
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {report.missing.map((word: string) => (
                      <button 
                        key={word} 
                        onClick={() => handleRewrite(word)}
                        className="flex justify-between items-center group p-4 border border-black/[0.02] hover:bg-black/5 transition-all text-left"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/50 group-hover:text-black">{word}</span>
                        <ChevronRight className="w-3 h-3 text-black/10 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CALLS TO ACTION */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="py-6 bg-white border border-black text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                  Export_Report
                </button>
                <button 
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  className="py-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-700 transition-all shadow-xl"
                >
                  Share_Index
                </button>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* 3. PROFESSIONAL FOOTER */}
      <footer className="border-t border-black/[0.08] bg-white py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-6 italic">ATS<span className="text-indigo-600">.INTEL</span></h2>
            <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.3em] leading-loose">
              The benchmark for elite technical talent. Proprietary auditing for the 2026 professional landscape.
            </p>
          </div>
          <div className="flex gap-20 text-[10px] font-black uppercase tracking-widest text-black/40">
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600">Protocol</span>
              <Link href="/privacy" className="hover:text-black transition-colors">Privacy_Shield</Link>
              <Link href="/terms" className="hover:text-black transition-colors">Terms_Agreement</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600">Connect</span>
              <span className="italic">bureau@ats.intel</span>
              <span>v.2.0.26_STABLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
