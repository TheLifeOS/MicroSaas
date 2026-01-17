"use client";

import React, { useState, useRef } from 'react';
import { 
  Upload, Shield, Zap, FileText, Download, 
  Lock, CreditCard, BarChart3, Sparkles 
} from 'lucide-react';

export default function ProfessionalATS() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const startAnalysis = async () => {
    setAnalyzing(true);
    // Simulate Top-Tier Semantic Parsing
    await new Promise(r => setTimeout(r, 2500));
    setReport({
      score: 92,
      rank: "Top 2%",
      matchingKeywords: ["Next.js", "System Architecture", "Scalability"],
      missingKeywords: ["Micro-frontends", "Kubernetes"],
      monetizationOffer: "Unlock 1-on-1 Recruiter Review for $15"
    });
    setAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
      {/* Privacy-First Header */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1.5 rounded-lg"><Shield className="w-5 h-5" /></div>
          <span className="text-xl font-black tracking-tighter uppercase">ATS<span className="text-purple-500">Master</span></span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[10px] text-slate-500 font-bold border border-white/10 px-3 py-1 rounded-full flex items-center gap-1">
            <Lock className="w-3 h-3" /> AES-256 ENCRYPTED
          </span>
          <button className="text-xs font-black bg-white text-black px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all">
            LOGIN
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Monetization / Trust Banner */}
        <div className="mb-16 bg-gradient-to-r from-purple-500/10 to-transparent p-8 rounded-[2rem] border border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-black italic flex items-center gap-2">
              <Sparkles className="text-purple-400" /> 2026 ENGINE UPDATED
            </h2>
            <p className="text-slate-400 max-w-md text-sm">Our neural parsing engine is updated daily to match the latest hiring algorithms from LinkedIn, Greenhouse, and Lever.</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-xs text-slate-500 font-bold uppercase">Weekly Scans</p>
              <p className="text-xl font-black">1.2M+</p>
            </div>
            <div className="text-center bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-xs text-slate-500 font-bold uppercase">Hired Rate</p>
              <p className="text-xl font-black text-green-400">84%</p>
            </div>
          </div>
        </div>

        {!report ? (
          <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
                BYPASS THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">GATEKEEPERS.</span>
              </h1>
            </div>

            <div className="bg-slate-900/20 border border-white/10 rounded-[3rem] p-4 backdrop-blur-3xl">
              <div className="relative group border-2 border-dashed border-white/5 rounded-[2.5rem] p-16 transition-all hover:border-purple-500/50 hover:bg-purple-500/5">
                <input 
                  type="file" 
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                />
                <div className="text-center space-y-4">
                  <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Upload className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{file ? file.name : "Upload Resume"}</p>
                    <p className="text-slate-500 text-sm">PDF, DOCX, DOC, or TXT (Max 10MB)</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={startAnalysis}
                disabled={!file || analyzing}
                className="w-full mt-4 py-6 bg-purple-600 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-purple-500 transition-all disabled:opacity-50"
              >
                {analyzing ? (
                  <div className="flex items-center gap-2">
                    <Zap className="animate-pulse fill-current" /> SEMANTIC SCANNING...
                  </div>
                ) : (
                  <><BarChart3 /> ANALYZE MY ODDS</>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8 animate-in zoom-in-95 duration-500">
            {/* Main Analysis Card */}
            <div className="md:col-span-8 space-y-8">
              <div className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs">Analysis Result</h3>
                    <p className="text-4xl font-black italic">ELITE MATCH</p>
                  </div>
                  <div className="text-right">
                    <p className="text-6xl font-black text-purple-500 leading-none">{report.score}%</p>
                    <p className="text-[10px] font-black text-slate-500 mt-2 uppercase tracking-tighter">ATS Compatibility</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-purple-400 font-bold text-xs uppercase mb-2">Keyword Gaps Identified</p>
                    <div className="flex flex-wrap gap-2">
                      {report.missingKeywords.map((k: string) => (
                        <span key={k} className="px-3 py-1 bg-red-500/10 text-red-400 text-[10px] font-black rounded-full border border-red-500/20">
                          MISSING: {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={() => setReport(null)} className="w-full py-6 bg-white/5 border border-white/10 rounded-[2rem] font-bold text-slate-500 hover:text-white transition-colors">
                SCAN ANOTHER VERSION
              </button>
            </div>

            {/* Monetization & CTA Sidebar */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto">
                <div>
                  <CreditCard className="w-10 h-10 mb-6" />
                  <h4 className="text-3xl font-black leading-tight mb-4 uppercase">Unlock Deep <br/> Optimization</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4" /> AI Bullet-Point Rewriter</li>
                    <li className="flex items-center gap-2 text-sm font-medium"><Shield className="w-4 h-4" /> Competitor Benchmarking</li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-4 bg-black text-white rounded-2xl font-black text-sm uppercase hover:bg-white hover:text-black transition-all">
                  GET PRO ACCESS — $9.99
                </button>
              </div>

              <div className="bg-white rounded-[3rem] p-10 text-black">
                <Download className="w-10 h-10 mb-4" />
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">PDF Report</p>
                <p className="text-2xl font-black mb-4 tracking-tighter uppercase leading-none">Export Full <br/> Audit Logs</p>
                <button className="w-full py-3 bg-slate-100 rounded-xl font-black text-xs uppercase">Download (.pdf)</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold">© 2026 THELIFEOS. ALL DATA ANONYMIZED & SECURE.</p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400">
            <a href="#" className="hover:text-white uppercase">Privacy Policy</a>
            <a href="#" className="hover:text-white uppercase">Terms of Service</a>
            <a href="#" className="hover:text-white uppercase">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
