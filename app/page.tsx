"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, Zap, BarChart3, Search, FileText, 
  Sparkles, Download, AlertTriangle, CheckCircle, Globe
} from 'lucide-react';

// CRITICAL FIX: Import the rules and scan function from your lib folder
import { ENGINE_2026_RULES, runNeuralScan } from '@/lib/engine';

export default function ProfessionalATSEngine() {
  const [resumeText, setResumeText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleScan = async () => {
    if (resumeText.length < 100) return;
    setIsScanning(true);
    
    // Artificial delay for UI "Neural Scan" feel
    await new Promise(r => setTimeout(r, 1500));

    const scanData = runNeuralScan(resumeText);
    setResults(scanData);
    
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <nav className="border-b border-white/5 p-6 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1.5 rounded-lg"><Globe className="w-5 h-5 text-white" /></div>
          <span className="text-xl font-black tracking-tighter italic">ATS<span className="text-purple-500">ENGINE</span></span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <span className="text-[10px] font-black text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-green-500" /> LOCAL DATA PRIVACY ACTIVE
          </span>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">
            v{ENGINE_2026_RULES.lastUpdated}
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {!results ? (
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
                Beat the <br/> <span className="text-purple-500">Algorithm.</span>
              </h1>
            </div>

            <div className="bg-slate-900/20 border border-white/10 rounded-[3rem] p-4 backdrop-blur-3xl">
              <textarea 
                className="w-full h-80 bg-transparent border-none focus:ring-0 p-8 text-lg placeholder:text-slate-800 resize-none font-medium"
                placeholder="Paste your resume content here to analyze..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
              <button 
                onClick={handleScan}
                disabled={resumeText.length < 100 || isScanning}
                className="w-full py-6 bg-white text-black rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-20"
              >
                {isScanning ? <Sparkles className="animate-spin" /> : <Zap className="fill-current" />}
                {isScanning ? "ENGINE: ANALYZING..." : "REVEAL MY ATS RANK"}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8 animate-in zoom-in-95 duration-500">
            <div className="md:col-span-8 bg-slate-900/40 border border-white/10 rounded-[3rem] p-12">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-slate-500 font-black uppercase text-xs tracking-widest mb-2">NEURAL MATCH RESULT</h2>
                  <p className="text-9xl font-black tracking-tighter leading-none italic">{results.score}%</p>
                </div>
                <div className="text-right">
                   <p className="text-[10px] text-slate-500 uppercase font-black">Algorithm: {results.version}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-purple-400 uppercase mb-4 flex items-center gap-2">
                    <CheckCircle className="w-3 h-3" /> Found Keywords
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {results.matched.map((k: string) => (
                      <span key={k} className="px-3 py-1 bg-purple-500/10 text-white text-[10px] font-bold rounded-lg border border-purple-500/20">{k}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-red-400 uppercase mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Missing Signals
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-60">
                    {results.missing.map((k: string) => (
                      <span key={k} className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold rounded-lg">{k}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <div className="bg-purple-600 rounded-[3rem] p-10">
                <h3 className="text-3xl font-black uppercase italic mb-4">Improve <br/> Score?</h3>
                <p className="text-sm font-medium text-purple-200 mb-6 italic">Our 2026 engine suggests adding more "Action Verbs" to your experience section.</p>
                <button onClick={() => setResults(null)} className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase">RE-SCAN</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
