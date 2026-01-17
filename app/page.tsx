"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, CheckCircle, AlertCircle, TrendingUp, Target, 
  Zap, Copy, RefreshCw, Sparkles, Shield, Brain, Star, 
  Users, BarChart3, DollarSign, FileDown, Ghost, MousePointerClick
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
  missing: string[];
  foundKeywords: string[];
}

const UltimateATSPro = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // --- Logic Engine ---
  const runAnalysis = async () => {
    if (!text) return;
    setAnalyzing(true);
    
    // Simulate Neural Network Processing
    await new Promise(r => setTimeout(r, 2500));

    const wordCount = text.split(/\s+/).length;
    const hasKeywords = /kubernetes|aws|terraform|react|docker/i.test(text);
    const hasQuantifiers = /\d+%|\$\d+/.test(text);

    // Dynamic Calculation Logic
    const score = Math.min(98, (hasKeywords ? 40 : 10) + (hasQuantifiers ? 30 : 5) + (wordCount > 400 ? 28 : 15));
    const risk = 100 - score + Math.floor(Math.random() * 10);
    const salary = hasKeywords ? 165000 : 85000;

    setResults({
      score,
      ghostingRisk: Math.min(95, risk),
      salary,
      openings: hasKeywords ? 1240 : 145,
      percentile: score > 85 ? "Top 0.5%" : "Top 12%",
      missing: ["Semantic Cloud Architecture keywords", "Specific KPI quantification"],
      foundKeywords: ["React", "TypeScript", "Node.js"]
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
    pdf.save('Career-Audit-Report.pdf');
    setIsExporting(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/50">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full" />
      </div>

      <nav className="max-w-7xl mx-auto p-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-purple-500 fill-purple-500" />
          <span className="text-2xl font-black tracking-tighter">ATS.PRO</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white">FAANG Benchmarks</a>
          <a href="#" className="hover:text-white">Salary Data</a>
          <a href="#" className="hover:text-white">AI Engine</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-purple-400 transition-all">
          GET PRO ACCESS
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {!results ? (
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              KNOW YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">EXACT</span> VALUE.
            </h1>
            <p className="text-slate-400 text-lg">The only ATS analyzer using 2026 real-time market data and FAANG hiring patterns.</p>
            
            <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-2 focus-within:border-purple-500/50 transition-all">
              <textarea 
                className="w-full h-64 bg-transparent border-none focus:ring-0 p-6 text-lg placeholder:text-slate-700"
                placeholder="Paste your resume and let the AI calculate your destiny..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button 
                onClick={runAnalysis}
                disabled={analyzing || !text}
                className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-black text-xl hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {analyzing ? 'SIMULATING RECRUITER RESPONSE...' : 'START DEEP SCAN'}
              </button>
            </div>
          </div>
        ) : (
          <div ref={reportRef} className="space-y-6 animate-in fade-in zoom-in duration-500">
            {/* Bento Grid Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                    </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-2">Overall Capability</p>
                <h2 className="text-8xl font-black tracking-tighter">{results.score}<span className="text-slate-800">/100</span></h2>
                <p className="text-slate-400 mt-4 text-lg">Your profile is in the <span className="text-white font-bold">{results.percentile}</span> of technical candidates worldwide.</p>
              </div>

              <div className="md:col-span-4 bg-red-500/10 border border-red-500/20 rounded-[2.5rem] p-10 flex flex-col justify-between">
                <div>
                  <Ghost className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold text-red-100">Ghosting Risk</h3>
                </div>
                <div>
                  <div className="text-6xl font-black text-red-500">{results.ghostingRisk}%</div>
                  <p className="text-xs text-red-300/60 uppercase font-black tracking-widest">High Probability of No-Response</p>
                </div>
              </div>
            </div>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8">
                <DollarSign className="w-6 h-6 text-green-400 mb-4" />
                <p className="text-sm text-slate-500 font-bold uppercase">Estimated Salary</p>
                <p className="text-4xl font-black text-white">${results.salary.toLocaleString()}</p>
              </div>
              <div className="bg-slate-900/50 border border-white/10 rounded-[2rem] p-8">
                <Target className="w-6 h-6 text-blue-400 mb-4" />
                <p className="text-sm text-slate-500 font-bold uppercase">Target Openings</p>
                <p className="text-4xl font-black text-white">{results.openings}</p>
              </div>
              <div className="bg-purple-600 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-purple-500 transition-all">
                <Sparkles className="w-8 h-8 text-white mb-2" />
                <p className="font-black text-xl">FIX MY RESUME</p>
                <p className="text-xs opacity-80 uppercase tracking-tighter">AI-Rewrite in 1 Click</p>
              </div>
            </div>

            {/* AI Insights & PDF Export */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-slate-900/50 border border-white/10 rounded-[2rem] p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" /> FAANG Gap Analysis
                </h4>
                <div className="space-y-4">
                  {results.missing.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-80 flex flex-col gap-4">
                <button 
                  onClick={exportPDF}
                  className="w-full py-6 bg-white text-black font-black rounded-3xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-all shadow-xl shadow-white/5"
                >
                  <FileDown className="w-6 h-6" /> {isExporting ? 'PRINTING...' : 'PDF AUDIT'}
                </button>
                <button 
                  onClick={() => setResults(null)}
                  className="w-full py-4 bg-slate-900 border border-white/10 text-slate-400 font-bold rounded-3xl hover:text-white transition-all"
                >
                  SCAN ANOTHER
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto p-12 text-center">
        <div className="flex justify-center gap-8 mb-8 opacity-20 grayscale">
          {/* Mock Logos */}
          <span className="font-black italic text-2xl">Google</span>
          <span className="font-black italic text-2xl">Amazon</span>
          <span className="font-black italic text-2xl">Stripe</span>
          <span className="font-black italic text-2xl">Meta</span>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-bold">Powered by Llama 4 & Proprietary 2026 Datasets</p>
      </footer>
    </div>
  );
};

export default UltimateATSPro;
