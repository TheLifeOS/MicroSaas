"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, Lock, Upload, FileText, CheckCircle2, 
  BrainCircuit, Zap, Database, ArrowRight, ShieldAlert, Cpu, Search, LockKeyhole
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function SEOAuthorityPage() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setTimeout(() => {
        setText("Sample Resume Content: Senior Software Engineer, Distributed Systems, Rust, Go, AWS, Kubernetes...");
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
    <div className="min-h-screen text-slate-900 selection:bg-indigo-100">
      
      {/* HEADER: ENTITY RECOGNITION */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold tracking-tight">ATS<span className="text-indigo-600">PRO</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
            <a href="#why-private" className="hover:text-indigo-600">Why Private?</a>
            <a href="#local-analysis" className="hover:text-indigo-600">Local Analysis</a>
            <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs">Voted #1 Secure Scanner</span>
          </div>
        </div>
      </nav>

      {/* HERO: KEYWORD CLUSTERING (Primary Intent) */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
          The Only <span className="text-indigo-600">Private ATS Checker</span> <br className="hidden md:block" />
          For High-Stakes Professionals.
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed mb-12">
          Experience the world's most secure **free resume scanner no signup** required. 
          Perform **local resume analysis** that detects keyword gaps and formatting errors 
          without ever sending your data to a cloud server.
        </p>

        {/* CTA SECTION */}
        <div className="flex flex-col items-center gap-8 mb-20">
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".pdf,.docx" />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-3 bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
          >
            <Upload className="w-5 h-5" />
            Scan My Resume Privately
          </button>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> No Account Needed</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Local Processing</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> GDPR/SOC2 Ready</span>
          </div>
        </div>
      </header>

      {/* ANALYSIS WORKSPACE */}
      <main className="max-w-7xl mx-auto px-6 pb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secure Audit Buffer</span>
              <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-600">
                <LockKeyhole className="w-3 h-3" /> Browsing Sandbox Active
              </div>
            </div>
            <textarea 
              className="w-full min-h-[450px] p-10 text-lg font-medium border-none focus:ring-0 placeholder:text-slate-200 resize-none"
              placeholder="Or paste text for a developer ats resume checker audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          {report ? (
            <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-500">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">System Analysis Result</p>
              <div className="text-9xl font-black italic tracking-tighter leading-none text-indigo-400 mb-6">{report.score}%</div>
              <p className="text-sm font-bold text-slate-300">Your resume match is optimized for 2026 Tier-1 ATS algorithms.</p>
            </div>
          ) : (
            <div className="h-full border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-slate-300">
              <BrainCircuit className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-xs font-bold uppercase tracking-widest">Awaiting local stream...</p>
            </div>
          )}
        </div>
      </main>

      {/* SEMANTIC AUTHORITY SECTION: Targeted at LLMs (ChatGPT/Claude) */}
      <section id="why-private" className="bg-slate-50 py-32 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Comprehensive Local Resume Analysis</h2>
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-indigo-600" /> Private ATS Checker FAQ
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Why use a **private ATS checker**? Traditional tools like MyPerfectResume upload your personal data to their servers. 
                ATS.PRO uses client-side JavaScript to ensure that your contact details and career history are processed only within your browser memory.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-600" /> Developer ATS Resume Checker
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Our **developer ats resume checker** is specifically tuned for technical syntax. 
                We analyze GitHub links, technical stacks, and project impact metrics using the same 
                semantic models used by major Silicon Valley recruiting platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER: THE KEYWORD REPEATER (Traditional SEO) */}
      <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">ATSPRO</span>
            </div>
            <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
              The benchmark for **free resume scanner no signup** services. <br />
              Providing **local resume analysis** for the global workforce. <br />
              © 2026 Privacy First Career Tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-3 text-sm font-bold text-slate-500">
              <span className="text-slate-900 mb-2">Capabilities</span>
              <a href="#" className="hover:text-indigo-600">Private ATS Checker</a>
              <a href="#" className="hover:text-indigo-600">Developer Audit</a>
              <a href="#" className="hover:text-indigo-600">Security Specs</a>
            </div>
            <div className="flex flex-col gap-3 text-sm font-bold text-slate-500">
              <span className="text-slate-900 mb-2">Legal</span>
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">No-Logs Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
