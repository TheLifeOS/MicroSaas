"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Shield, BrainCircuit, Activity, Terminal, Lock, ChevronRight, 
  TrendingUp, RefreshCw, Copy, Check, BarChart3, Upload, FileText, AlertCircle
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function ProfessionalAuditEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeRewrite, setActiveRewrite] = useState<{word: string, suggestion: string} | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulation for file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsProcessing(true);
    setTimeout(() => {
      setText("Simulated extracted text from document... [Next.js, TypeScript, Scalability, System Design]");
      setIsProcessing(false);
    }, 1500);
  };

  useEffect(() => {
    if (text.length > 50) {
      setIsProcessing(true);
      const timer = setTimeout(() => {
        setReport(runNeuralScan(text));
        setIsProcessing(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [text]);

  const copyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111] font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* 1. INSTITUTIONAL NAV */}
      <nav className="border-b border-black/[0.05] bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tighter uppercase tracking-[0.3em]">
            ATS<span className="text-indigo-600">.PRO</span>
          </h1>
          <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-black/[0.02] border border-black/[0.05] rounded-full">
                <div className={`w-1 h-1 rounded-full ${isProcessing ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                <span className="text-[8px] font-black uppercase tracking-widest">Neural_Security_Active</span>
             </div>
          </div>
        </div>
      </nav>

      {/* 2. THE VALUE PROPOSITION (SEO HERO) */}
      <header className="max-w-5xl mx-auto px-8 pt-24 pb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
          Free, Private <span className="text-indigo-600 not-italic">Resume Scanner</span>
        </h2>
        <p className="max-w-3xl mx-auto text-xl font-medium text-black/50 leading-relaxed uppercase tracking-tighter mb-12">
          Your resume never leaves your device. <br className="hidden md:block" />
          Beat applicant tracking systems without <span className="text-black font-black">compromising your data.</span>
        </p>
        
        {/* PRIMARY CTA AREA */}
        <div className="flex flex-col items-center gap-4">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
            accept=".pdf,.docx"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex items-center gap-4 bg-indigo-600 text-white px-10 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all shadow-[20px_20px_60px_-15px_rgba(79,70,229,0.4)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <Upload className="w-5 h-5 group-hover:animate-bounce" />
            Upload Resume - No Signup Required
          </button>
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest">
              Supported: PDF, DOCX (max 5MB)
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-indigo-600/60 italic">
              <span>✓ Local processing</span>
              <span>✓ Instant results</span>
              <span>✓ No data stored</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. WORKSPACE CONTAINER */}
      <main className="max-w-7xl mx-auto px-8 pb-32 grid lg:grid-cols-12 gap-16 mt-12">
        
        {/* LEFT: THE INPUT TERMINAL */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 shadow-[40px_40px_0px_0px_rgba(0,0,0,0.02)] rounded-sm overflow-hidden">
            <div className="p-6 border-b border-black/[0.05] flex justify-between items-center bg-gray-50/50">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 flex items-center gap-2 italic">
                <Terminal className="w-3 h-3" /> Data_Buffer
              </span>
              <div className="flex items-center gap-2 text-[9px] font-bold text-black/20 uppercase tracking-widest">
                <Lock className="w-2.5 h-2.5" /> Client_Side_Only
              </div>
            </div>
            <textarea 
              className="w-full min-h-[500px] p-12 text-lg font-medium leading-[1.8] bg-transparent border-none focus:ring-0 placeholder:text-black/5 resize-none scrollbar-hide"
              placeholder="Or paste your professional narrative here for immediate audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT: THE INTELLIGENCE PANEL */}
        <div className="lg:col-span-5 space-y-8">
          {!report ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-black/[0.05] rounded-sm flex flex-col items-center justify-center p-12 text-center bg-white/50">
              <Activity className="w-12 h-12 text-black/[0.02] mb-6 animate-pulse" />
              <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.6em]">System Listening...</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              
              {/* AUTHORITY SCORE */}
              <div className="bg-[#0A0A0A] text-white p-14 rounded-sm relative group overflow-hidden shadow-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 text-white/30 italic text-center md:text-left">Neural_Match_Benchmark</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-[10rem] font-black italic tracking-tighter leading-none">{report.score}</span>
                  <span className="text-3xl font-black text-indigo-500 opacity-50">%</span>
                </div>
                <BarChart3 className="absolute bottom-10 right-10 w-12 h-12 text-white/5" />
              </div>

              {/* NEURAL REWRITER MODULE */}
              <div className="bg-white border border-black/10 p-10 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic">
                  <RefreshCw className="w-4 h-4 text-indigo-600" /> Improvement_Vectors
                </h4>
                
                <div className="grid gap-3">
                  {report.missing.slice(0, 4).map((word: string) => (
                    <button 
                      key={word} 
                      className="flex justify-between items-center group p-4 border border-black/[0.02] hover:bg-black/5 transition-all text-left"
                      onClick={() => {
                        const suggestion = `Architected mission-critical solutions using ${word} standards to enhance system reliability.`;
                        setActiveRewrite({ word, suggestion });
                      }}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/50 group-hover:text-black">{word}</span>
                      <ChevronRight className="w-3 h-3 text-black/10 group-hover:text-indigo-600 transition-all" />
                    </button>
                  ))}
                </div>

                {activeRewrite && (
                  <div className="mt-8 pt-8 border-t border-black/5 animate-in zoom-in-95">
                    <p className="text-[9px] font-black uppercase text-indigo-600 mb-2 italic underline underline-offset-4">Suggested Rewrite:</p>
                    <div className="bg-gray-50 p-6 border border-black/5 rounded-sm relative">
                      <p className="text-xs font-bold leading-relaxed text-black/70 pr-10 italic">"{activeRewrite.suggestion}"</p>
                      <button 
                        onClick={() => copyToClipboard(activeRewrite.suggestion)}
                        className="absolute top-4 right-4 hover:text-indigo-600 transition-all"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-black/20" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* FINAL ACTIONS */}
              <div className="grid grid-cols-2 gap-4">
                <button className="py-6 bg-white border border-black text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-sm">
                  Export_Audit
                </button>
                <button 
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  className="py-6 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-indigo-700 transition-all shadow-xl"
                >
                  Share_Score
                </button>
              </div>

            </div>
          )}
        </div>
      </main>

      {/* 4. INSTITUTIONAL FOOTER */}
      <footer className="border-t border-black/[0.08] bg-white py-24 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-sm">
            <h2 className="text-2xl font-black tracking-tighter uppercase mb-6 italic">ATS<span className="text-indigo-600">.PRO</span></h2>
            <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.4em] leading-loose">
              100% Client-Side Auditing. <br />
              No Data Harvested. No Signup Required. <br />
              Restoring power to the professional in 2026.
            </p>
          </div>
          <div className="flex gap-20 text-[10px] font-black uppercase tracking-widest text-black/40 italic">
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600 not-italic">Security</span>
              <Link href="/privacy" className="hover:text-black transition-all">Privacy_Protocol</Link>
              <Link href="/terms" className="hover:text-black transition-all">Terms_Standard</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600 not-italic">Connection</span>
              <span>v2.2.26_STABLE</span>
              <span className="text-[8px] opacity-50 not-italic uppercase tracking-[0.5em]">MMXXVI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
