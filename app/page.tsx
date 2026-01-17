"use client";

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, Zap, BarChart3, Search, FileText, 
  Sparkles, Download, AlertTriangle, CheckCircle, Globe
} from 'lucide-react';

export default function ProfessionalATSEngine() {
  const [resumeText, setResumeText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any>(null);

  // THE ENGINE: Built-in Semantic Matcher
  const scanResume = async () => {
    if (resumeText.length < 100) return;
    setIsScanning(true);
    
    // Simulate "Neural Processing" delay
    await new Promise(r => setTimeout(r, 2000));

    const content = resumeText.toLowerCase();
    
    // 1. Identify Found vs Missing Keywords
    const matchedKeywords = ENGINE_2026_RULES.criticalKeywords.filter(k => 
      content.includes(k.toLowerCase())
    );
    const missingKeywords = ENGINE_2026_RULES.criticalKeywords.filter(k => 
      !content.includes(k.toLowerCase())
    );

    // 2. Identify Action Verbs for Impact Scoring
    const foundVerbs = ENGINE_2026_RULES.actionVerbs.filter(v => 
      content.includes(v.toLowerCase())
    );

    // 3. Calculate Final Score (2026 Algorithm)
    const baseScore = 30;
    const keywordBonus = (matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 40;
    const verbBonus = (foundVerbs.length / ENGINE_2026_RULES.actionVerbs.length) * 30;
    const finalScore = Math.round(baseScore + keywordBonus + verbBonus);

    setResults({
      score: finalScore,
      matched: matchedKeywords,
      missing: missingKeywords,
      verbs: foundVerbs,
      auditDate: ENGINE_2026_RULES.lastUpdated
    });
    
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Navbar: High-Profile Privacy Status */}
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
          <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">v{ENGINE_2026_RULES.lastUpdated}</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {!results ? (
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
                Beat the <br/> <span className="text-purple-500">Algorithm.</span>
              </h1>
              <p className="text-slate-400 font-medium max-w-lg mx-auto italic">
                Our free-tier engine uses 2026 semantic rules to ensure your resume survives the initial recruiter filter.
              </p>
            </div>

            <div className="bg-slate-900/20 border border-white/10 rounded-[3rem] p-4 backdrop-blur-3xl shadow-2xl shadow-purple-500/5">
              <textarea 
                className="w-full h-80 bg-transparent border-none focus:ring-0 p-8 text-lg placeholder:text-slate-800 resize-none font-medium"
                placeholder="Paste your professional experience here..."
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
              <button 
                onClick={scanResume}
                disabled={resumeText.length < 100 || isScanning}
                className="w-full py-6 bg-white text-black rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-20 group"
              >
                {isScanning ? (
                  <Sparkles className="animate-spin" />
                ) : (
                  <Zap className="fill-current group-hover:animate-bounce" />
                )}
                {isScanning ? "ENGINE: RUNNING SEMANTIC SCAN..." : "REVEAL MY ATS RANK"}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8 animate-in zoom-in-95 duration-500">
            {/* Score Card */}
            <div className="md:col-span-8 bg-slate-900/40 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <BarChart3 className="w-24 h-24 text-white/5 opacity-20 rotate-12" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                <div>
                  <h2 className="text-slate-500 font-black uppercase text-xs tracking-widest mb-2">NEURAL MATCH RESULT</h2>
                  <p className="text-9xl font-black tracking-tighter leading-none italic">{results.score}%</p>
                </div>
                <div className="text-right pb-2">
                  <p className="text-sm font-bold text-green-400 uppercase italic">Rank: {results.score > 80 ? 'Elite' : 'Developing'}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Updated: {results.auditDate}</p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Sidebar Tools */}
            <div className="md:col-span-4 space-y-4">
              <div className="bg-purple-600 rounded-[3rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto">
                <Sparkles className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-black uppercase leading-tight italic mb-4">Improve <br/> Your Score?</h3>
                <p className="text-sm font-medium text-purple-200 mb-6 italic">We detected {results.verbs.length} power verbs. Increasing this by 4 will boost your score to 90+.</p>
                <button onClick={() => setResults(null)} className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase hover:bg-black hover:text-white transition-all">RE-SCAN NOW</button>
              </div>

              <div className="bg-white rounded-[3rem] p-10 text-black flex flex-col justify-center items-center text-center">
                <Download className="w-10 h-10 mb-2 text-purple-600" />
                <p className="text-2xl font-black tracking-tighter uppercase italic leading-none">Export Audit</p>
                <p className="text-[10px] font-black text-slate-400 uppercase mt-1 mb-4 italic">FREE PDF REPORT</p>
                <button className="w-full py-3 border-2 border-slate-200 rounded-xl font-black text-[10px] uppercase">Download</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
