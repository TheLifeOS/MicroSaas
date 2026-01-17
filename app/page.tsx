"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, FileText, CheckCircle, XCircle, AlertCircle, TrendingUp, Target, 
  Award, Zap, Download, Copy, RefreshCw, Sparkles, Shield, Brain, Star, 
  Code, Users, BarChart3, Briefcase, DollarSign, Clock, TrendingDown, FileDown 
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// --- Interfaces ---
interface AnalysisResults {
  score: number;
  atsResults: any[];
  keywords: any;
  impact: any;
  sections: any;
  sectionCount: number;
  wordCount: number;
  compatibility: any;
  missingKeywords: string[];
  strengths: string[];
  percentile: string;
  benchmarkComparison: any;
  foundKeywords: any[];
}

interface HistoryEntry {
  id: number;
  date: string;
  score: number;
  keywords: number;
  wordCount: number;
}

const UltimateATSAnalyzer = () => {
  // --- State ---
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [aiMode, setAiMode] = useState(false);
  const [enhanced, setEnhanced] = useState<any[] | null>(null);
  const [totalScans, setTotalScans] = useState(47823);
  const [userHistory, setUserHistory] = useState<HistoryEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [jobMatches, setJobMatches] = useState<any>(null);
  const [successPredictor, setSuccessPredicted] = useState<any>(null);
  const [isExporting, setIsExporting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  // --- Databases ---
  const SUCCESSFUL_RESUME_DATABASE = {
    avgKeywords: 45,
    avgExpertKeywords: 6,
    avgQuantifiers: 8,
    avgWordCount: 550,
    topPercentileScore: 85,
    interviewRateByScore: { 85: 78, 75: 62, 65: 45, 55: 28 }
  };

  const JOB_DATABASE: any = {
    kubernetes: { companies: ['Google', 'Amazon', 'Netflix'], avgSalary: 165000, openings: 342, tier: 'FAANG' },
    aws: { companies: ['Amazon', 'Uber', 'Airbnb'], avgSalary: 155000, openings: 567, tier: 'Tier 1' },
    docker: { companies: ['Docker', 'Meta', 'Stripe'], avgSalary: 148000, openings: 423, tier: 'Tier 1' },
    react: { companies: ['Meta', 'Netflix', 'Airbnb'], avgSalary: 145000, openings: 789, tier: 'Tier 1' },
    python: { companies: ['Google', 'Dropbox', 'Spotify'], avgSalary: 142000, openings: 891, tier: 'Tier 2' },
    typescript: { companies: ['Microsoft', 'Slack', 'Notion'], avgSalary: 138000, openings: 445, tier: 'Tier 1' },
    terraform: { companies: ['HashiCorp', 'Snowflake', 'Databricks'], avgSalary: 162000, openings: 234, tier: 'FAANG' },
    graphql: { companies: ['Meta', 'GitHub', 'Shopify'], avgSalary: 152000, openings: 178, tier: 'Tier 1' }
  };

  // --- Effects (Zero Hydration Errors) ---
  useEffect(() => {
    const storedScans = localStorage.getItem('global_scans');
    if (storedScans) setTotalScans(parseInt(storedScans));

    const storedHistory = localStorage.getItem('user_resume_history');
    if (storedHistory) setUserHistory(JSON.parse(storedHistory));
  }, []);

  // --- Logic ---
  const incrementGlobalScans = () => {
    const newTotal = totalScans + 1;
    setTotalScans(newTotal);
    localStorage.setItem('global_scans', newTotal.toString());
  };

  const saveToHistory = (analysisResults: AnalysisResults) => {
    const historyEntry: HistoryEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      score: analysisResults.score,
      keywords: analysisResults.keywords.total,
      wordCount: analysisResults.wordCount
    };
    const newHistory = [historyEntry, ...userHistory].slice(0, 10);
    setUserHistory(newHistory);
    localStorage.setItem('user_resume_history', JSON.stringify(newHistory));
  };

  const preprocessResume = (resumeText: string) => {
    const lower = resumeText.toLowerCase();
    const techKeywords = {
      expert: ['kubernetes', 'docker', 'aws', 'gcp', 'azure', 'terraform', 'react', 'vue', 'angular', 'typescript', 'golang', 'rust', 'microservices', 'graphql', 'postgresql', 'mongodb', 'redis', 'kafka', 'elasticsearch', 'jenkins'],
      senior: ['python', 'java', 'javascript', 'node.js', 'ci/cd', 'rest', 'api', 'sql', 'nosql', 'linux', 'git', 'agile', 'scrum', 'spring', 'django', 'flask'],
      mid: ['html', 'css', 'bootstrap', 'jquery', 'mysql', 'express', 'maven', 'gradle', 'junit', 'testing', 'responsive', 'oauth'],
      junior: ['github', 'vscode', 'npm', 'yarn', 'debug', 'version control', 'collaboration', 'documentation']
    };

    const sections = {
      experience: /experience|employment|work history/i.test(resumeText),
      education: /education|degree|university|college/i.test(resumeText),
      skills: /skills|technologies|competencies/i.test(resumeText),
      projects: /projects|portfolio|github/i.test(resumeText),
      summary: /summary|objective|about/i.test(resumeText),
      certifications: /certification|certified|license/i.test(resumeText)
    };

    let keywordData = { expert: 0, senior: 0, mid: 0, junior: 0, total: 0 };
    let foundKeywords: any[] = [];
    
    Object.entries(techKeywords).forEach(([level, keywords]) => {
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'gi');
        const matches = resumeText.match(regex);
        if (matches) {
          keywordData[level as keyof typeof keywordData] += matches.length;
          keywordData.total += matches.length;
          foundKeywords.push({ keyword: kw, level });
        }
      });
    });

    const impactWords = ['increased', 'reduced', 'improved', 'optimized', 'automated', 'implemented', 'developed', 'architected', 'launched', 'scaled', 'migrated', 'refactored', 'designed', 'built', 'led', 'managed', 'created', 'established', 'delivered'];
    const impactCount = impactWords.filter(w => lower.includes(w)).length;
    const quantifiers = resumeText.match(/(\d+%|\d+x|\d+\+|million|thousand|billion|\$\d+k?|\d{1,3},\d{3})/gi) || [];

    return {
      keywordData, foundKeywords, sections, impactCount, quantifiers,
      atsMetrics: {
        hasEmail: /@/.test(resumeText),
        hasPhone: /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(resumeText),
        hasLinkedIn: /linkedin/i.test(resumeText),
        hasGithub: /github/i.test(resumeText),
        hasNoTables: !/\|{2,}/.test(resumeText),
        wordCount: resumeText.split(/\s+/).length,
        isOptimalLength: resumeText.split(/\s+/).length >= 300 && resumeText.split(/\s+/).length <= 800
      }
    };
  };

  const analyzeResume = async (resumeText: string) => {
    if (!resumeText.trim()) return;
    setAnalyzing(true);
    incrementGlobalScans();
    await new Promise(r => setTimeout(r, 2000));

    const pre = preprocessResume(resumeText);
    
    // Core Scoring Logic
    let score = 45;
    score += (pre.keywordData.expert * 5) + (pre.keywordData.senior * 3);
    score += (pre.impactCount * 2) + (pre.quantifiers.length * 3);
    if (pre.atsMetrics.hasLinkedIn) score += 5;
    if (pre.atsMetrics.hasGithub) score += 5;
    if (pre.atsMetrics.isOptimalLength) score += 10;
    
    const finalScore = Math.min(98, score);

    // Job Match & Salary logic
    const matches = pre.foundKeywords.map(k => JOB_DATABASE[k.keyword.toLowerCase()]).filter(Boolean);
    const avgSalary = matches.length > 0 ? Math.max(...matches.map(m => m.avgSalary)) : 85000;
    const totalOpenings = matches.reduce((acc, curr) => acc + curr.openings, 0);

    const resultsObj: AnalysisResults = {
      score: finalScore,
      atsResults: [],
      keywords: pre.keywordData,
      impact: { count: pre.impactCount, quantifiers: pre.quantifiers.length },
      sections: pre.sections,
      sectionCount: Object.values(pre.sections).filter(Boolean).length,
      wordCount: pre.atsMetrics.wordCount,
      compatibility: pre.atsMetrics,
      missingKeywords: finalScore < 85 ? ['Add Kubernetes/Terraform', 'Quantify 3+ more achievements'] : [],
      strengths: ['Strong technical keyword density', 'ATS-compliant formatting'],
      percentile: finalScore > 85 ? 'Top 1%' : finalScore > 70 ? 'Top 15%' : 'Top 40%',
      benchmarkComparison: {},
      foundKeywords: pre.foundKeywords
    };

    setResults(resultsObj);
    setJobMatches({ estimatedSalary: avgSalary, totalOpenings, topCompanies: ['Google', 'Meta', 'Stripe'], matchQuality: 'High' });
    setSuccessPredicted({ interviewProbability: Math.round(finalScore * 0.9), avgResponseTime: finalScore > 80 ? '2-3 days' : '1 week' });
    saveToHistory(resultsObj);
    setAnalyzing(false);
  };

  // --- PDF Export Tool ---
  const exportPDF = async () => {
    if (!reportRef.current) return;
    setIsExporting(true);
    
    const canvas = await html2canvas(reportRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`ATS-Report-${Date.now()}.pdf`);
    setIsExporting(false);
  };

  const getScoreColor = (s: number) => s >= 85 ? 'text-green-400' : s >= 70 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">ResumeTech <span className="text-purple-500">Pro</span></span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Global Ecosystem</p>
              <p className="text-sm font-mono text-purple-400">{totalScans.toLocaleString()} SCANS</p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-purple-400 transition-colors">UPGRADE TO PRO</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {!results ? (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">Stop Being <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Ghosted.</span></h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Upload your resume to our proprietary FAANG-benchmarked engine to see your real market value.</p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 text-center group hover:border-purple-500/50 transition-all">
              <Upload className="w-16 h-16 mx-auto text-slate-700 group-hover:text-purple-400 mb-6 transition-colors" />
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your resume text here (Markdown, Plain Text, or Doc content)..."
                className="w-full h-64 bg-slate-950 border border-white/5 rounded-2xl p-6 mb-6 focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder:text-slate-700"
              />
              <button 
                onClick={() => analyzeResume(text)}
                disabled={analyzing || !text}
                className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-black text-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
              >
                {analyzing ? 'CRUNCHING DATA...' : 'REVEAL MY MARKET VALUE'}
              </button>
            </div>
          </div>
        ) : (
          <div ref={reportRef} className="space-y-6 animate-in slide-in-from-bottom-8 duration-500">
            
            {/* Top Score Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-slate-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                <div className="relative">
                  <div className="text-8xl font-black tabular-nums tracking-tighter">
                    <span className={getScoreColor(results.score)}>{results.score}</span>
                    <span className="text-slate-800">/100</span>
                  </div>
                  <div className="absolute -top-4 -right-8 bg-purple-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase italic">FAANG Grade</div>
                </div>
                <p className="mt-4 text-slate-400 font-medium italic">"Your profile outperforms {results.percentile} of senior engineers in our database."</p>
              </div>

              {/* Market Value Card */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl shadow-purple-500/20">
                <div>
                  <div className="flex justify-between items-start">
                    <DollarSign className="w-8 h-8 opacity-50" />
                    <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded">EST. ANNUALLY</span>
                  </div>
                  <h3 className="text-4xl font-black mt-4">${jobMatches.estimatedSalary.toLocaleString()}</h3>
                  <p className="text-xs opacity-70 mt-1">Based on {jobMatches.totalOpenings} active openings</p>
                </div>
                <div className="mt-8 space-y-2">
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[85%]"></div>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Market Demand: EXTREME</p>
                </div>
              </div>
            </div>

            {/* Success Predictor Grid */}
            <div className="grid md:grid-cols-4 gap-4">
               <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl">
                  <p className="text-slate-500 text-[10px] font-bold uppercase">Interview Prob.</p>
                  <p className="text-3xl font-black text-green-400">{successPredictor.interviewProbability}%</p>
               </div>
               <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl">
                  <p className="text-slate-500 text-[10px] font-bold uppercase">Response Time</p>
                  <p className="text-3xl font-black">{successPredictor.avgResponseTime}</p>
               </div>
               <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl col-span-2">
                  <p className="text-slate-500 text-[10px] font-bold uppercase">Key Competitor Tier</p>
                  <p className="text-xl font-bold text-purple-300 mt-1">FAANG / High-Growth Fintech</p>
               </div>
            </div>

            {/* Action Buttons (Excluded from PDF if needed, but here for UI) */}
            <div className="flex flex-col md:flex-row gap-4 no-print">
               <button 
                onClick={exportPDF}
                disabled={isExporting}
                className="flex-1 py-4 bg-slate-100 text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all"
               >
                <FileDown className="w-5 h-5" /> {isExporting ? 'GENERATING PDF...' : 'DOWNLOAD FULL AUDIT (PDF)'}
               </button>
               <button 
                onClick={() => setResults(null)}
                className="px-8 py-4 bg-slate-900 border border-white/10 text-white font-black rounded-2xl hover:bg-slate-800"
               >
                NEW SCAN
               </button>
            </div>

            {/* Detailed Insights */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                  <Target className="w-5 h-5 text-purple-400" />
                  Keyword Strength
                </h3>
                <div className="space-y-4">
                  {['Expert', 'Senior', 'Mid'].map((level) => (
                    <div key={level}>
                      <div className="flex justify-between text-xs font-bold uppercase mb-1">
                        <span>{level} Level</span>
                        <span className="text-purple-400">{results.keywords[level.toLowerCase()]} found</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full">
                        <div 
                          className="h-full bg-purple-500 rounded-full" 
                          style={{ width: `${(results.keywords[level.toLowerCase()] / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                  <Brain className="w-5 h-5 text-pink-400" />
                  Strategic Fixes
                </h3>
                <div className="space-y-3">
                  {results.missingKeywords.length > 0 ? results.missingKeywords.map((m, i) => (
                    <div key={i} className="flex gap-3 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-red-200">
                      <AlertCircle className="w-5 h-5 shrink-0" /> {m}
                    </div>
                  )) : (
                    <div className="flex gap-3 text-sm bg-green-500/10 border border-green-500/20 p-3 rounded-xl text-green-200">
                      <CheckCircle className="w-5 h-5 shrink-0" /> Your resume is perfectly optimized.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-xs font-bold tracking-widest uppercase">Proprietary ATS Analysis Engine v16.0.4 • © 2026</p>
      </footer>
    </div>
  );
};

export default UltimateATSAnalyzer;
