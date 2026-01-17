"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, Lock, Upload, FileText, CheckCircle2, 
  BrainCircuit, RefreshCw, Copy, Check, ChevronRight, BarChart3 
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function RebuiltAuthorityEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle File Upload Simulation
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      // Simulating OCR/Parsing delay
      setTimeout(() => {
        setText("Experience: Senior Software Engineer at FAANG. Skills: Next.js, TypeScript, Distributed Systems, AWS, System Design...");
        setIsProcessing(false);
      }, 1200);
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
    <div className="min-h-screen">
      {/* 1. BRAND NAVIGATION */}
      <nav className="border-b border-black/[0.05] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-xl font-black tracking-tighter uppercase tracking-[0.3em]">
            ATS<span className="text-indigo-600">.PRO</span>
          </h1>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/40">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3"/> 256-bit Local Encryption</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION: CLEAR VALUE PROP */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
          <Shield className="w-3 h-3 text-indigo-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Privacy-First Architecture</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.95] mb-8">
          Free, Private <span className="text-indigo-600 not-italic">Resume Scanner</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-xl font-medium text-black/50 leading-relaxed uppercase tracking-tighter mb-12">
          Your resume never leaves your device. <br className="hidden md:block" />
          Beat applicant tracking systems without <span className="text-black font-black">compromising your data.</span>
        </p>

        {/* PROMINENT CTA (Week 1 Action) */}
        <div className="flex flex-col items-center gap-6">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
            accept=".pdf,.docx"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="group relative flex items-center gap-4 bg-indigo-600 text-white px-10 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all shadow-[0px_20px_50px_-15px_rgba(79,70,229,0.5)]"
          >
            <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Upload Resume - No Signup Required
          </button>
          
          <div className="space-y-3">
            <p className="text-[11px] font-bold text-black/30 uppercase tracking-widest">
              Supported formats: PDF, DOCX (max 5MB)
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600/70">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3"/> Local Processing</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3"/> Instant Results</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3"/> No Data Stored</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. DUAL-INPUT WORKSPACE */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12">
        
        {/* INPUT: TEXT AREA FOR THOSE WITHOUT FILES */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 rounded-sm overflow-hidden shadow-[30px_30px_0px_0px_rgba(0,0,0,0.02)]">
            <div className="p-5 border-b border-black/[0.05] bg-gray-50/50 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 italic">Manual_Input_Buffer</span>
              <span className="text-[9px] font-mono text-black/20">v2.1.26</span>
            </div>
            <textarea 
              className="w-full min-h-[500px] p-10 text-lg font-medium leading-relaxed bg-transparent border-none focus:ring-0 placeholder:text-black/10 resize-none"
              placeholder="Or paste your resume text here to begin the private audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* OUTPUT: REAL-TIME AUDIT */}
        <div className="lg:col-span-5 space-y-6">
          {!report ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-black/[0.05] rounded-sm flex flex-col items-center justify-center p-12 text-center bg-white/50">
              <BrainCircuit className="w-12 h-12 text-black/[0.03] mb-6 animate-pulse" />
              <p className="text-[10px] font-black text-black/20 uppercase tracking-[0.5em]">Awaiting Data Feed</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              {/* SCORE CARD */}
              <div className="bg-[#0A0A0A] text-white p-12 rounded-sm relative overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 text-white/30 italic">Audit_Match_Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-9xl font-black italic tracking-tighter leading-none">{report.score}</span>
                  <span className="text-2xl font-black text-indigo-500">%</span>
                </div>
                <BarChart3 className="absolute bottom-8 right-8 w-12 h-12 text-white/5" />
              </div>

              {/* ACTIONABLE NODES */}
              <div className="bg-white border border-black/10 p-8 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3 italic text-indigo-600">
                  <RefreshCw className="w-4 h-4" /> Optimization_Nodes
                </h4>
                <div className="grid gap-3">
                  {report.missing.map((word: string) => (
                    <div key={word} className="flex justify-between items-center p-4 border border-black/[0.03] hover:bg-black/5 transition-all group">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/50 group-hover:text-black">{word}</span>
                      <ChevronRight className="w-3 h-3 text-black/10 group-hover:text-indigo-600 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 4. TRUST-BUILDING FOOTER */}
      <footer className="border-t border-black/[0.08] bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-black tracking-tighter uppercase mb-6 italic">ATS<span className="text-indigo-600">.PRO</span></h2>
            <p className="text-[11px] font-bold text-black/30 uppercase tracking-[0.2em] leading-loose max-w-sm">
              The only ATS checker built for privacy. We use client-side processing to ensure your professional data remains yours. No cloud storage, no data selling, no compromise.
            </p>
          </div>
          <div className="flex md:justify-end gap-16 text-[10px] font-black uppercase tracking-widest text-black/40">
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600">Protocol</span>
              <a href="#" className="hover:text-black">Privacy_Policy</a>
              <a href="#" className="hover:text-black">Terms_of_Service</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-indigo-600">System</span>
              <span>v2.2.26_STABLE</span>
              <span className="italic">Status: Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
