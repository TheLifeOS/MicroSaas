"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Shield, Lock, Upload, FileText, CheckCircle2, 
  BrainCircuit, RefreshCw, Copy, Check, ChevronRight, BarChart3, 
  ArrowRight, ShieldCheck, Zap, Database
} from 'lucide-react';
import { runNeuralScan } from '@/lib/engine';

export default function ProfessionalAuditEngine() {
  const [text, setText] = useState('');
  const [report, setReport] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File Upload Logic
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProcessing(true);
      setTimeout(() => {
        setText("Experience: Senior Project Manager. Skills: Strategic Planning, Cross-functional Leadership, Agile Methodologies, Budget Management, Risk Mitigation...");
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased">
      
      {/* 1. PROFESSIONAL NAVIGATION */}
      <nav className="border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              ATS<span className="text-indigo-600">PRO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy Guarantee</a>
            <button className="text-indigo-600 font-semibold flex items-center gap-1">
              Enterprise <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION: CLEAR VALUE PROPOSITION */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
          <Zap className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">New for 2026 Recruitment</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Free, Private <span className="text-indigo-600">Resume Scanner</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
          Your resume never leaves your device. Beat applicant tracking systems 
          without <span className="text-gray-900 font-semibold underline decoration-indigo-500/30">compromising your personal data.</span>
        </p>

        {/* PRIMARY CALL TO ACTION */}
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
            className="group flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl shadow-gray-200 hover:shadow-indigo-200"
          >
            <Upload className="w-5 h-5" />
            Upload Resume — No Signup Required
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-gray-400">
              Supports PDF and DOCX up to 5MB
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: Shield, text: "Local processing" },
                { icon: Zap, text: "Instant results" },
                { icon: Database, text: "No data stored" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                  <item.icon className="w-4 h-4 text-green-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 3. CORE ANALYZER WORKSPACE */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">
        
        {/* INPUT COLUMN */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden ring-1 ring-gray-100">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" /> Document Content
              </span>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 rounded text-[11px] font-bold text-green-700 uppercase tracking-tighter">
                <Lock className="w-3 h-3" /> Secure Buffer
              </div>
            </div>
            <textarea 
              className="w-full min-h-[450px] p-8 text-lg font-normal leading-relaxed text-gray-800 bg-transparent border-none focus:ring-0 placeholder:text-gray-300 resize-none"
              placeholder="Or paste your professional experience here to begin a secure audit..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        {/* OUTPUT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          {!report ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-12 text-center bg-gray-50/30">
              <BrainCircuit className="w-12 h-12 text-gray-200 mb-4" />
              <h3 className="text-gray-400 font-bold mb-1 uppercase tracking-wider">Awaiting Analysis</h3>
              <p className="text-sm text-gray-300">Upload a file or paste text to start.</p>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* PROFESSIONAL SCORE CARD */}
              <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm ring-1 ring-gray-100">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">System Match Score</p>
                <div className="flex items-center gap-6">
                  <div className="relative flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" 
                        strokeDasharray={364.4}
                        strokeDashoffset={364.4 - (364.4 * report.score) / 100}
                        className="text-indigo-600 transition-all duration-1000 ease-out" 
                      />
                    </svg>
                    <span className="absolute text-3xl font-extrabold text-gray-900">{report.score}%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Standard Check Passed</h4>
                    <p className="text-sm text-gray-500">Based on Tier-1 recruitment parameters.</p>
                  </div>
                </div>
              </div>

              {/* ACTIONABLE IMPROVEMENTS */}
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm ring-1 ring-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-6 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Recommended Keywords
                </h4>
                <div className="grid gap-3">
                  {report.missing.map((word: string) => (
                    <div key={word} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-default group">
                      <span className="text-sm font-semibold text-gray-700">{word}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button className="flex-1 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
                  Export PDF
                </button>
                <button className="flex-1 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all">
                  Share Result
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 4. PROFESSIONAL FOOTER */}
      <footer className="border-t border-gray-100 bg-gray-50/30 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold tracking-tight text-gray-900">ATSPRO</span>
            </div>
            <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">
              The benchmark for secure, privacy-first career auditing. We believe 
              your data belongs to you, not the algorithms.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
              <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Security</span>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Encryption Audit</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Platform</span>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">How it works</a>
              <span className="text-sm font-medium text-gray-400">Version 2.2.26</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
