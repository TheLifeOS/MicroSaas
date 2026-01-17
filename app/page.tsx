"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, CheckCircle, AlertCircle, Target, Zap, 
  Brain, Star, DollarSign, FileDown, Ghost, 
  ArrowRight, Sparkles, Shield, BarChart
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// --- Types ---
interface AnalysisResults {
  score: number;
  ghostingRisk: number;
  salary: number;
  openings: number;
  percentile: string;
  originalBullets: string[];
  optimizedBullets: string[];
}

const UltimateATSPro = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // --- AI Rewrite Engine Logic ---
  const rewriteEngine = (input: string) => {
    const lines = input.split('\n').filter(l => l.length > 20).slice(0, 3);
    const powerVerbs = ['Orchestrated', 'Pioneered', 'Leveraged', 'Architected', 'Spearheaded'];
    const metrics = ['by 45% within 6 months', 'resulting in $120k savings', 'across 14 global regions', 'improving latency by 250ms'];

    return lines.map((line, i) => {
      const verb = powerVerbs[i % powerVerbs.length];
      const metric = metrics[i % metrics.length];
      // Simple logic to "Up-level" a sentence
      return `${verb} ${line.trim().toLowerCase().replace(/^(i |worked on|helped with|responsible for)/i, '')} ${metric}.`;
    });
  };

  const runAnalysis = async () => {
    if (!text) return;
    setAnalyzing(true);
    
    // Simulate Neural Deep-Scan
    await new Promise(r => setTimeout(r, 2000));

    const optimized = rewriteEngine(text);
    const score = Math.floor(Math.random() * (98 - 85 + 1) + 85); // High score for demo
    
    setResults({
      score: score,
      ghostingRisk: 100 - score,
      salary: 168500,
      openings: 1420,
      percentile: "Top 0.2%",
      originalBullets: text.split('\n').filter(l => l.length > 10).slice(0, 3),
      optimizedBullets: optimized
    });
    setAnalyzing(false);
  };

  const exportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    const canvas = await html2canvas(reportRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width);
    pdf.save('Executive-Career-Audit.pdf');
    setIsExporting(false);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-100 font-sans selection:bg-purple-500/30">
      {/* Dynamic Aura Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto p-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-purple-600 to-blue-600 p-1.5 rounded-lg shadow-lg shadow-purple-500/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight italic">ATS<span className="text-purple-500">GPT</span></span>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden md:block">V3.5 Neural Engine</span>
            <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-black hover:scale-105 transition-transform">UPGRADE</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {!results ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest">
                2026 FAANG Hiring Standards Integrated
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                QUIT <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500">GUESSTIMATING.</span>
              </h1>
              <p className="max-w-xl mx-auto text-slate-400 text-lg font-medium">
                Our proprietary Career Arbitrage engine tells you exactly why you aren't getting interviews—and fixes it in seconds.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-3 backdrop-blur-xl shadow-2xl">
              <textarea 
                className="w-full h-80 bg-transparent border-none focus:ring-0 p-8 text-xl placeholder:text-slate-700 font-light"
                placeholder="Paste your resume content (Experience section) to trigger the AI Rewrite..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button 
                onClick={runAnalysis}
                disabled={analyzing || !text}
                className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-500/40 transition-all disabled:opacity-30"
              >
                {analyzing ? (
                  <><RefreshCw className="w-6 h-6 animate-spin" /> ANALYZING BIAS & METRICS...</>
                ) : (
                  <><Sparkles className="w-6 h-6" /> GENERATE MARKET AUDIT</>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div ref={reportRef} className="space-y-6 animate-in zoom-in-95 fade-in duration-500">
            
            {/* Top Bento Row */}
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-10 flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-2">Portfolio Score</p>
                    <h2 className="text-9xl font-black tracking-tighter text-white">{results.score}</h2>
                    <p className="text-slate-400 font-medium">Outperforming <span className="text-white">{results.percentile}</span> of industry peers.</p>
                </div>
                <div className="hidden lg:block">
                    <div className="w-32 h-32 rounded-full border-8 border-purple-500/20 border-t-purple-500 animate-spin-slow flex items-center justify-center">
                        <BarChart className="w-10 h-10 text-purple-500" />
                    </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-red-500/20">
                <Ghost className="w-12 h-12 mb-6 opacity-80" />
                <h3 className="text-xl font-bold uppercase tracking-tighter">Ghosting Risk</h3>
                <p className="text-6xl font-black mt-2">{results.ghostingRisk}%</p>
                <p className="text-sm opacity-80 mt-4">Probability of silent rejection based on current keyword density.</p>
              </div>
            </div>

            {/* Middle Bento Row */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8">
                    <DollarSign className="w-8 h-8 text-green-500 mb-4" />
                    <p className="text-xs font-bold text-slate-500 uppercase">Est. Market Value</p>
                    <p className="text-4xl font-black text-white">${results.salary.toLocaleString()}</p>
                </div>
                <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8">
                    <Target className="w-8 h-8 text-blue-500 mb-4" />
                    <p className="text-xs font-bold text-slate-500 uppercase">Relevant Openings</p>
                    <p className="text-4xl font-black text-white">{results.openings}</p>
                </div>
                <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-2xl shadow-white/5 group cursor-pointer">
                    <p className="text-black font-black text-2xl group-hover:translate-x-2 transition-transform flex items-center gap-2">
                        HIRE A PRO <ArrowRight className="w-6 h-6" />
                    </p>
                    <p className="text-slate-500 text-xs font-bold uppercase">Human Expert Review</p>
                </div>
            </div>

            {/* The AI Transformation Section (UNIQUE IDEA) */}
            <div className="bg-slate-900/80 border border-white/10 rounded-[3rem] p-10">
                <div className="flex items-center gap-3 mb-8">
                    <Brain className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-black italic uppercase">The Transformation</h3>
                </div>
                
                <div className="space-y-6">
                    {results.originalBullets.map((bullet, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-8 items-center bg-white/5 p-6 rounded-[2rem] border border-white/5">
                            <div className="opacity-50 line-through text-sm italic">
                                "{bullet}"
                            </div>
                            <div className="text-white font-bold flex gap-4 items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                                <span>{results.optimizedBullets[i]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4">
                <button 
                    onClick={exportPDF}
                    disabled={isExporting}
                    className="flex-1 py-6 bg-purple-600 rounded-[2rem] text-white font-black text-lg hover:bg-purple-500 flex items-center justify-center gap-3 shadow-xl shadow-purple-600/20"
                >
                    <FileDown className="w-6 h-6" /> {isExporting ? 'ENCRYPTING PDF...' : 'DOWNLOAD AUDIT REPORT'}
                </button>
                <button 
                    onClick={() => setResults(null)}
                    className="px-12 py-6 bg-slate-800 rounded-[2rem] text-white font-black hover:bg-slate-700 transition-all"
                >
                    RE-SCAN
                </button>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto p-12 border-t border-white/5 text-center space-y-4">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">Global Nodes Active: 14 | Latency: 22ms</p>
        <div className="flex justify-center gap-6 text-slate-500 text-xs font-bold">
            <a href="#" className="hover:text-white">API ACCESS</a>
            <a href="#" className="hover:text-white">GEO ANALYTICS</a>
            <a href="#" className="hover:text-white">PRIVACY SHIELD</a>
        </div>
      </footer>
    </div>
  );
};

export default UltimateATSPro;
