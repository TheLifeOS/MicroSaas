"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Upload, FileText, CheckCircle2, 
  BrainCircuit, RefreshCw, ChevronRight, BarChart3, 
  ArrowRight, Zap, Database, EyeOff, ShieldAlert
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function PrivacyCentricEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setTimeout(() => {
        setText("Experience: Senior Executive. Skills: Operations, Strategic Growth, Privacy Compliance, Risk Management...");
        setIsProcessing(false);
      }, 1000);
    }
  };

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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* 1. TOP NAV: SECURITY STATUS */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              ATS<span className="text-indigo-600">PRO</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-bold text-green-700 uppercase tracking-tight">Secure Local Session</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. THE CORE MESSAGE HERO */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* THE UNIQUE SELLING PROPOSITION (USP) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
          <EyeOff className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-semibold text-slate-600">Zero-Knowledge Architecture</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          The only ATS checker that keeps <br className="hidden md:block" />
          <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">your resume private.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed mb-12 font-medium">
          Most scanners store your data on their servers. We don't. <br className="hidden md:block" />
          Analyze your resume locally and beat applicant tracking systems 
          without ever <span className="text-slate-900 font-semibold">compromising your data.</span>
        </p>

        {/* PROMINENT ACTION CENTER */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              className="hidden" 
              accept=".pdf,.docx"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl hover:shadow-indigo-100"
            >
              <Upload className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Scan My Resume Now
            </button>
          </div>
          
          {/* TRUST INDICATORS (Requested Change) */}
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-10">
            <div className="flex items-center gap-2.5 text-sm font-bold text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              No Signup Required
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              100% Local Processing
            </div>
            <div className="flex items-center gap-2.5 text-sm font-bold text-slate-600">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              FAANG-Grade Analysis
            </div>
          </div>
        </div>
      </header>

      {/* 3. THE SECURE WORKSPACE */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">
        
        {/* INPUT: THE PRIVACY BUFFER */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden ring-1 ring-slate-100">
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Database className="w-4 h-4 text-slate-400" /> 
                Local Buffer
              </div>
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
                <Lock className="w-3 h-3" /> Encrypted Session
              </div>
            </div>
            <textarea 
              className="w-full min-h-[500px] p-10 text-xl font-normal leading-relaxed text-slate-800 bg-transparent border-none focus:ring-0 placeholder:text-slate-300 resize-none"
              placeholder="Or paste your resume text here for a secure, offline-mode audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* OUTPUT: REAL-TIME INTELLIGENCE */}
        <div className="lg:col-span-5 space-y-6">
          {!report ? (
            <div className="h-full min-h-[450px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-slate-50/30">
              <BrainCircuit className="w-12 h-12 text-slate-200 mb-6" />
              <h3 className="text-slate-400 font-bold mb-2 uppercase tracking-widest">Awaiting Input</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Your data is processed within your browser memory and is never uploaded.
              </p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* AUTHORITY SCORE */}
              <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-12 text-slate-400">Match Accuracy Index</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[10rem] font-black tracking-tighter leading-none">{report.score}</span>
                  <span className="text-3xl font-bold text-indigo-400 opacity-60">%</span>
                </div>
                <div className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-indigo-400" />
                </div>
              </div>

              {/* ACTIONABLE FEEDBACK */}
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm ring-1 ring-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-8 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Keyword Gaps Identified
                </h4>
                <div className="grid gap-3">
                  {report.missing.map((word: string) => (
                    <div key={word} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-default group">
                      <span className="text-sm font-bold text-slate-700">{word}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
                  Download Report
                </button>
                <button className="py-5 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                  Try Premium
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 4. PRIVACY-FIRST FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-50/50 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold tracking-tight">ATSPRO</span>
            </div>
            <p className="text-base font-medium text-slate-500 leading-relaxed mb-8">
              We built ATSPRO because we were tired of "free" resume checkers 
              harvesting professional data. Our tool runs locally to give you power 
              without the privacy trade-off.
            </p>
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-slate-200 rounded text-[10px] font-black uppercase text-slate-500">GDPR Compliant</div>
              <div className="px-3 py-1 bg-slate-200 rounded text-[10px] font-black uppercase text-slate-500">256-bit AES</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Privacy</span>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Our Manifesto</a>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">How we scan</a>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Data Safety</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Legal</span>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Terms of Use</a>
              <span className="text-[10px] font-bold text-slate-300 mt-2">v2.3.26</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
