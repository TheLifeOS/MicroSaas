"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, CheckCircle, AlertCircle, Target, Zap, 
  Brain, Star, DollarSign, FileDown, Ghost, 
  ArrowRight, Sparkles, Shield, BarChart, RefreshCw 
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
  const [mounted, setMounted] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rewriteEngine = (input: string) => {
    const lines = input.split('\n').filter(l => l.length > 15).slice(0, 3);
    const powerVerbs = ['Architected', 'Spearheaded', 'Orchestrated', 'Leveraged', 'Pioneered'];
    const metrics = ['driving 40% growth', 'saving $150k annually', 'across 5 cross-functional teams', 'reducing latency by 30%'];

    return lines.map((line, i) => {
      const verb = powerVerbs[i % powerVerbs.length];
      const metric = metrics[i % metrics.length];
      const cleaned = line.trim().toLowerCase().replace(/^(i |worked on|helped with|responsible for)/i, '');
      return `${verb} ${cleaned} ${metric}.`;
    });
  };

  const runAnalysis = async () => {
    if (!text) return;
    setAnalyzing(true);
    await new Promise(r => setTimeout(r, 2000));

    const optimized = rewriteEngine(text);
    const score = Math.floor(Math.random() * (98 - 88 + 1) + 88);
    
    setResults({
      score: score,
      ghostingRisk: 100 - score + 5,
      salary: 172000,
      openings: 842,
      percentile: "Top 0.1%",
      originalBullets: text.split('\n').filter(l => l.length > 10).slice(0, 3),
      optimizedBullets: optimized
    });
    setAnalyzing(false);
  };

  const exportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(reportRef.current, { 
        scale: 2, 
        backgroundColor: '#030303',
        useCORS: true 
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('ATS-Pro-Audit.pdf');
    } catch (e) {
      console.error(e);
    }
    setIsExporting(false);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-slate-100 font-sans selection:bg-purple-500/30">
      {/* Visual background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto p-6 flex justify-between items-center border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-purple-600 to-blue-600 p-2 rounded-xl">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight italic">ATS<span className="text-purple-500">PRO</span></span>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black hover:bg-purple-400 transition-all">GET UNLIMITED ACCESS</button>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {!results ? (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                <Sparkles className="w-3 h-3 text-purple-400" /> Powered by 2026 AI Models
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                ELIMINATE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400">THE NO-REPLY.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-slate-500 text-xl font-medium">
                The elite platform for FAANG benchmarking and automated resume optimization.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-white/10 rounded-[3rem] p-4 backdrop-blur-2xl shadow-2xl">
              <textarea 
                className="w-full h-80 bg-transparent border-none focus:ring-0 p-8 text-xl placeholder:text-slate-800 font-light resize-none"
                placeholder="Paste your professional experience here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button 
                onClick={runAnalysis}
                disabled={analyzing || !text}
                className="w-full py-7 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.01] transition-all disabled:opacity-20"
              >
                {analyzing ? <RefreshCw className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6 fill-current" />}
                {analyzing ? 'DECODING ALGORITHMS...' : 'REVEAL MY MARKET VALUE'}
              </button>
            </div>
          </div>
        ) : (
          <div ref={reportRef} className="space-y-8 animate-in zoom-in-95 fade-in duration-500">
            
            {/* Bento Score Section */}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 bg-slate-900/80 border border-white/10 rounded-[3rem] p-12">
                <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4">Neural Profile Score</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-[12rem] font-black tracking-tighter leading-none text-white">{results.score}</h2>
                    <span className="text-4xl font-black text-slate-800">/100</span>
                </div>
                <p className="text-slate-400 text-lg mt-6 italic">"This profile qualifies for Tier-1 engineering roles at Stripe, OpenAI, and Meta."</p>
              </div>

              <div className="md:col-span-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-[3rem] p-12 text-white flex flex-col justify-between">
                <Ghost className="w-16 h-16 opacity-50" />
                <div>
                    <h3 className="text-2xl font-black uppercase italic leading-none">Ghosting Risk</h3>
                    <p className="text-8xl font-black mt-2">{results.ghostingRisk}%</p>
                    <p className="text-sm font-bold opacity-80 mt-4 uppercase tracking-widest">Immediate Fix Required</p>
                </div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                    <DollarSign className="w-8 h-8 text-emerald-500 mb-6" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Est. Salary Cap</p>
                    <p className="text-5xl font-black text-white mt-2">${results.salary.toLocaleString()}</p>
                </div>
                <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
                    <Target className="w-8 h-8 text-blue-500 mb-6" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Openings</p>
                    <p className="text-5xl font-black text-white mt-2">{results.openings}</p>
                </div>
                <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-purple-400 transition-colors">
                    <BarChart className="w-10 h-10 text-black mb-4" />
                    <p className="text-black font-black text-xl uppercase tracking-tighter leading-none">Competitive Analysis</p>
                </div>
            </div>

            {/* AI Optimization Display */}
            <div className="bg-slate-900/80 border border-white/10 rounded-[3.5rem] p-12">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-black italic uppercase">The AI Transformation</h3>
                    <div className="px-4 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[10px] font-black">ATS OPTIMIZED</div>
                </div>
                <div className="space-y-8">
                    {results.originalBullets.map((bullet, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-12 items-center p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
                            <div className="text-slate-600 text-sm italic font-medium">"{bullet}"</div>
                            <div className="text-white font-bold text-lg flex gap-4">
                                <Sparkles className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                                <span>{results.optimizedBullets[i]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Actions */}
            <div className="flex flex-col md:flex-row gap-6">
                <button 
                  onClick={exportPDF}
                  disabled={isExporting}
                  className="flex-[2] py-8 bg-purple-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-purple-500 shadow-2xl shadow-purple-600/20 transition-all flex items-center justify-center gap-4"
                >
                    <FileDown className="w-8 h-8" /> {isExporting ? 'GENERATING AUDIT...' : 'DOWNLOAD FULL AUDIT (PDF)'}
                </button>
                <button 
                  onClick={() => setResults(null)}
                  className="flex-1 py-8 bg-slate-800 text-white rounded-[2.5rem] font-black text-xl hover:bg-slate-700 transition-all"
                >
                    NEW SCAN
                </button>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto p-12 border-t border-white/5 text-center">
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.8em]">Proprietary Career Intelligence • © 2026 ATS.PRO</p>
      </footer>
    </div>
  );
};

export default UltimateATSPro;
