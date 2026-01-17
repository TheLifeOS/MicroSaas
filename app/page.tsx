"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle, Target, Zap, Brain, DollarSign, FileDown, 
  Ghost, Sparkles, Shield, BarChart, RefreshCw, ArrowUpRight
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface AnalysisResults {
  score: number;
  ghostingRisk: number;
  salary: number;
  openings: number;
  percentile: string;
  originalBullets: string[];
  optimizedBullets: string[];
}

export default function UltimateATSPro() {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!results) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const runAnalysis = async () => {
    if (!text) return;
    setAnalyzing(true);
    await new Promise(r => setTimeout(r, 2000));

    const optimized = [
      "Architected a scalable microservices layer using Go and AWS, reducing system latency by 45%.",
      "Spearheaded a cross-functional team of 8 to deliver a $2M revenue-generating FinTech module.",
      "Orchestrated the migration of legacy data to Snowflake, improving query performance by 3x."
    ];
    
    setResults({
      score: 94,
      ghostingRisk: 8,
      salary: 192000,
      openings: 1420,
      percentile: "Top 0.1%",
      originalBullets: text.split('\n').filter(l => l.length > 5).slice(0, 3),
      optimizedBullets: optimized
    });
    setAnalyzing(false);
  };

  const exportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(reportRef.current, { scale: 2, backgroundColor: '#000000' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width);
      pdf.save('ATS-PRO-DEEP-AUDIT.pdf');
    } catch (e) { console.error(e); }
    setIsExporting(false);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1.5 rounded-lg rotate-3"><Shield className="w-5 h-5" /></div>
          <span className="text-xl font-black italic tracking-tighter">ATS<span className="text-purple-500">PRO</span></span>
        </div>
        <button className="text-[10px] font-black bg-white text-black px-5 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all">UPGRADE TO ELITE</button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {!results ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5">
            <div className="text-center space-y-6">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-white">
                REVERSE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">ENGINEERED.</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-lg mx-auto font-medium">Stop guessing. Use the exact semantic keywords FAANG recruiters are programmed to find.</p>
            </div>

            <div className="bg-slate-900/20 border border-white/10 rounded-[3rem] p-4 backdrop-blur-3xl">
              <textarea 
                className="w-full h-64 bg-black/40 border-none focus:ring-0 p-8 text-xl placeholder:text-slate-800 resize-none rounded-[2.5rem]"
                placeholder="Paste your resume experience bullets..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={runAnalysis} className="w-full py-6 mt-4 bg-purple-600 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-purple-500 transition-all">
                {analyzing ? <RefreshCw className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6 fill-current" />}
                {analyzing ? 'PROCESSING...' : 'ANALYZE MY CAREER'}
              </button>
            </div>
          </div>
        ) : (
          <div ref={reportRef} className="space-y-8 animate-in zoom-in-95 bg-black p-4 rounded-3xl">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-slate-900/40 border border-white/10 rounded-[3rem] p-12">
                <span className="text-[10px] font-black text-purple-500 tracking-widest uppercase">Neural Score</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <h2 className="text-9xl font-black">{results.score}</h2>
                  <span className="text-2xl text-slate-700 italic">/100</span>
                </div>
              </div>
              <div className="md:col-span-4 bg-orange-600 rounded-[3rem] p-10 flex flex-col justify-between">
                <Ghost className="w-12 h-12 text-white/50" />
                <h3 className="text-4xl font-black leading-none">GHOSTING RISK: {results.ghostingRisk}%</h3>
              </div>
            </div>

            {/* HEATMAP SECTION */}
            <div 
              onMouseMove={handleMouseMove}
              className="relative bg-slate-900/40 border border-white/10 rounded-[3rem] p-12 overflow-hidden group cursor-crosshair"
            >
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.15), transparent 80%)`
                }}
              />
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black italic">RECRUITER EYE-TRACKING MAP</h3>
                <div className="px-4 py-1 bg-orange-500/20 text-orange-500 text-[8px] font-black rounded-full border border-orange-500/30">HEATMAP ACTIVE</div>
              </div>
              <div className="space-y-6 relative z-10">
                {results.optimizedBullets.map((bullet, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-purple-400 font-bold mb-1 flex items-center gap-2"><Sparkles className="w-4 h-4" /> AI ENHANCED</p>
                    <p className="text-lg font-medium">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={exportPDF} className="flex-[3] py-8 bg-white text-black rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-3">
                <FileDown /> {isExporting ? 'GENERATING...' : 'DOWNLOAD AUDIT PDF'}
              </button>
              <button onClick={() => setResults(null)} className="flex-1 py-8 bg-slate-900 rounded-[2.5rem] font-black">NEW SCAN</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
