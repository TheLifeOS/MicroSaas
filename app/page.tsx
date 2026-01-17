"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Lock, Upload, FileText, CheckCircle2, 
  BrainCircuit, RefreshCw, ChevronRight, BarChart3, 
  Zap, Database, EyeOff, ShieldAlert, Users, Globe, LockKeyhole
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function SEOAuthorityEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setTimeout(() => {
        setText("Experience: Lead Software Engineer. Skills: Next.js, Cloud Architecture, Privacy Engineering...");
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
      
      {/* 1. INSTITUTIONAL NAV */}
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ATS<span className="text-indigo-600">PRO</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
            <a href="#comparison" className="hover:text-indigo-600 transition-colors">VS Competitors</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy Guide</a>
            <span className="text-indigo-600 border-l pl-6 border-slate-200">Zero-Knowledge Architecture</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO: THE SINGLE CLEAR MESSAGE */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
          <LockKeyhole className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Private Resume Scanner — 2026 Standard</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          The only ATS checker that keeps <br className="hidden md:block" />
          <span className="text-indigo-600 italic">your resume private.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed mb-12 font-medium uppercase tracking-tight">
          Beat applicant tracking systems without compromising your data. <br />
          Your resume <span className="text-slate-900 font-black underline decoration-indigo-500 decoration-4">never leaves your device.</span>
        </p>

        {/* PROMINENT CTA AREA (Requested) */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".pdf,.docx" />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="group flex items-center gap-4 bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-indigo-200"
          >
            <Upload className="w-6 h-6" />
            Upload Resume — No Signup Required
          </button>
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-bold text-slate-400">Supported: PDF, DOCX (max 5MB)</p>
            <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest text-indigo-600">
              <span className="flex items-center gap-2">✓ Local processing</span>
              <span className="flex items-center gap-2">✓ Instant results</span>
              <span className="flex items-center gap-2">✓ No data stored</span>
            </div>
          </div>
        </div>

        {/* TRUST SIGNALS (Requested) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-100 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-full"><ShieldCheck className="w-6 h-6 text-green-600" /></div>
            <p className="text-sm font-bold text-slate-800">Zero-Knowledge Architecture</p>
            <p className="text-xs text-slate-400">Encryption happens in-browser</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-full"><Users className="w-6 h-6 text-indigo-600" /></div>
            <p className="text-sm font-bold text-slate-800">Loved by 1,000+ Developers</p>
            <p className="text-xs text-slate-400">The preferred tool for tech talent</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-50 p-3 rounded-full"><Globe className="w-6 h-6 text-slate-600" /></div>
            <p className="text-sm font-bold text-slate-800">FAANG-Grade Calibration</p>
            <p className="text-xs text-slate-400">Matches 2026 hiring algorithms</p>
          </div>
        </div>
      </header>

      {/* 3. WORKSPACE (INPUT/OUTPUT) */}
      <main className="max-w-7xl mx-auto px-6 pb-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Privacy Buffer Active</span>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black text-indigo-600">
                <Lock className="w-3 h-3" /> Client_Side_Only
              </div>
            </div>
            <textarea 
              className="w-full min-h-[500px] p-10 text-xl font-medium leading-relaxed text-slate-700 bg-transparent border-none focus:ring-0 placeholder:text-slate-300 resize-none"
              placeholder="Or paste your resume here for a private audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* REPORT SIDEBAR */}
        <div className="lg:col-span-5 space-y-6">
          {!report ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-12 text-center bg-slate-50/20">
              <BrainCircuit className="w-12 h-12 text-slate-100 mb-6 animate-pulse" />
              <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Waiting for Input Data</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in slide-in-from-right-8 duration-700">
              <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-12 text-slate-400">Neural_Match_Index</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-9xl font-black italic tracking-tighter leading-none">{report.score}</span>
                  <span className="text-2xl font-bold text-indigo-400 opacity-60">%</span>
                </div>
                <BarChart3 className="absolute bottom-10 right-10 w-12 h-12 text-white/5" />
              </div>

              <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-8 flex items-center gap-2 italic">
                  <Zap className="w-4 h-4" /> Optimization Nodes
                </h4>
                <div className="grid gap-3">
                  {report.missing.map((word: string) => (
                    <div key={word} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl group cursor-default">
                      <span className="text-sm font-bold text-slate-600">{word}</span>
                      <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-indigo-600 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 4. SEO & COMPARISON SECTION (To Surpass MyPerfectResume) */}
      <section id="comparison" className="bg-slate-50 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">Built for privacy, not for data harvesting.</h2>
            <p className="text-slate-500 text-lg font-medium">Why developers and executives choose ATS.PRO over MyPerfectResume.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-500" /> ATS.PRO (Local)
              </h3>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li className="flex gap-3">✓ Your resume never leaves your computer.</li>
                <li className="flex gap-3">✓ No account required for full analysis.</li>
                <li className="flex gap-3">✓ No "Fix My Resume" paywalls.</li>
                <li className="flex gap-3">✓ 100% Free full keyword report.</li>
              </ul>
            </div>
            <div className="bg-slate-100/50 p-10 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-400">
                Competitors (Cloud)
              </h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li className="flex gap-3">✕ Data stored on central servers.</li>
                <li className="flex gap-3">✕ Must sign up to see results.</li>
                <li className="flex gap-3">✕ Aggressive subscription upselling.</li>
                <li className="flex gap-3">✕ Basic features hidden behind paywalls.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER: CONTENT BLOCKS FOR SEO */}
      <footer className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold tracking-tight">ATS<span className="text-indigo-600">PRO</span></span>
            </div>
            <p className="text-sm font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
              The Privacy-First ATS Checker. <br />
              Free Resume Scanner No Signup. <br />
              Local Resume Analysis for 2026.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            <div className="flex flex-col gap-4">
              <span className="text-slate-900 not-italic">Resources</span>
              <a href="#" className="hover:text-indigo-600">How to beat ATS</a>
              <a href="#" className="hover:text-indigo-600">Privacy Concerns</a>
              <a href="#" className="hover:text-indigo-600">Technical Optimization</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-slate-900 not-italic">Authority</span>
              <span>v2.4.26_STABLE</span>
              <span>GDPR_READY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
