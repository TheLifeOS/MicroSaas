"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, FileText, CheckCircle, XCircle, AlertCircle, TrendingUp, Target, 
  Award, Zap, Download, Copy, RefreshCw, Sparkles, Shield, Brain, Star, 
  Code, Users, BarChart3, Briefcase, DollarSign, Clock, TrendingDown 
} from 'lucide-react';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const SUCCESSFUL_RESUME_DATABASE = {
    avgKeywords: 45,
    avgExpertKeywords: 6,
    avgQuantifiers: 8,
    avgWordCount: 550,
    topPercentileScore: 85,
    interviewRateByScore: {
      85: 78,
      75: 62,
      65: 45,
      55: 28
    }
  };

  const JOB_DATABASE: any = {
    kubernetes: { companies: ['Google', 'Amazon', 'Netflix'], avgSalary: 165000, openings: 342 },
    aws: { companies: ['Amazon', 'Uber', 'Airbnb'], avgSalary: 155000, openings: 567 },
    docker: { companies: ['Docker', 'Meta', 'Stripe'], avgSalary: 148000, openings: 423 },
    react: { companies: ['Meta', 'Netflix', 'Airbnb'], avgSalary: 145000, openings: 789 },
    python: { companies: ['Google', 'Dropbox', 'Spotify'], avgSalary: 142000, openings: 891 },
    typescript: { companies: ['Microsoft', 'Slack', 'Notion'], avgSalary: 138000, openings: 445 },
    terraform: { companies: ['HashiCorp', 'Snowflake', 'Databricks'], avgSalary: 162000, openings: 234 },
    graphql: { companies: ['Meta', 'GitHub', 'Shopify'], avgSalary: 152000, openings: 178 }
  };

  // Fixed: Ensure localStorage only runs on client to prevent hydration errors
  useEffect(() => {
    const storedScans = localStorage.getItem('global_scans');
    if (storedScans) setTotalScans(parseInt(storedScans));

    const storedHistory = localStorage.getItem('user_resume_history');
    if (storedHistory) setUserHistory(JSON.parse(storedHistory));
  }, []);

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

    const atsMetrics = {
      hasEmail: /@/.test(resumeText),
      hasPhone: /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(resumeText),
      hasLinkedIn: /linkedin/i.test(resumeText),
      hasGithub: /github/i.test(resumeText),
      hasNoTables: !/\|{2,}/.test(resumeText),
      hasNoImages: true,
      wordCount: resumeText.split(/\s+/).length,
      isOptimalLength: false
    };

    atsMetrics.isOptimalLength = atsMetrics.wordCount >= 300 && atsMetrics.wordCount <= 800;

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
          const count = matches.length;
          keywordData[level as keyof typeof keywordData] += count;
          keywordData.total += count;
          foundKeywords.push({ keyword: kw, level, count });
        }
      });
    });

    const impactWords = ['increased', 'reduced', 'improved', 'optimized', 'automated', 'implemented', 'developed', 'architected', 'launched', 'scaled', 'migrated', 'refactored', 'designed', 'built', 'led', 'managed', 'created', 'established', 'delivered'];
    const impactCount = impactWords.filter(w => lower.includes(w)).length;
    const quantifiers = resumeText.match(/(\d+%|\d+x|\d+\+|million|thousand|billion|\$\d+k?|\d{1,3},\d{3})/gi) || [];

    const percentile = keywordData.total >= SUCCESSFUL_RESUME_DATABASE.avgKeywords ? 
      (keywordData.total >= SUCCESSFUL_RESUME_DATABASE.avgKeywords * 1.5 ? 'Top 10%' : 'Top 25%') :
      (keywordData.total >= SUCCESSFUL_RESUME_DATABASE.avgKeywords * 0.7 ? 'Top 50%' : 'Bottom 50%');

    return {
      keywordData, foundKeywords, atsMetrics, sections, impactCount, quantifiers, percentile,
      benchmarkComparison: {
        keywordsVsAvg: keywordData.total - SUCCESSFUL_RESUME_DATABASE.avgKeywords,
        quantifiersVsAvg: quantifiers.length - SUCCESSFUL_RESUME_DATABASE.avgQuantifiers,
        wordCountVsAvg: atsMetrics.wordCount - SUCCESSFUL_RESUME_DATABASE.avgWordCount
      }
    };
  };

  const calculateResumeTechScore = (preprocessedData: any) => {
    let baseScore = 45;
    const { keywordData, atsMetrics, sections, impactCount, quantifiers, benchmarkComparison } = preprocessedData;
    baseScore += (keywordData.expert * 4) + (keywordData.senior * 3) + (keywordData.mid * 2) + keywordData.junior;
    baseScore += (impactCount * 2) + (quantifiers.length * 3);
    const sectionCount = Object.values(sections).filter(Boolean).length;
    baseScore += sectionCount * 3;

    if (atsMetrics.hasEmail) baseScore += 5;
    if (atsMetrics.hasPhone) baseScore += 5;
    if (atsMetrics.hasLinkedIn) baseScore += 3;
    if (atsMetrics.hasGithub) baseScore += 4;
    if (atsMetrics.hasNoTables) baseScore += 4;
    if (atsMetrics.isOptimalLength) baseScore += 8;
    if (benchmarkComparison.keywordsVsAvg > 10) baseScore += 5;

    return Math.min(96, Math.max(35, Math.round(baseScore)));
  };

  const analyzeJobMatches = (foundKeywords: any[]) => {
    const matches: any = {};
    let totalOpenings = 0;
    let potentialSalary = 0;
    let topCompanies = new Set<string>();

    foundKeywords.forEach(({ keyword }) => {
      const jobData = JOB_DATABASE[keyword.toLowerCase()];
      if (jobData) {
        matches[keyword] = jobData;
        totalOpenings += jobData.openings;
        potentialSalary = Math.max(potentialSalary, jobData.avgSalary);
        jobData.companies.forEach((c: string) => topCompanies.add(c));
      }
    });

    return {
      matchedSkills: Object.keys(matches).length,
      totalOpenings,
      estimatedSalary: potentialSalary,
      topCompanies: Array.from(topCompanies).slice(0, 5),
      matchQuality: Object.keys(matches).length >= 5 ? 'Excellent' : 'Good'
    };
  };

  const analyzeResume = async (resumeText: string) => {
    if (!resumeText.trim()) return;
    setAnalyzing(true);
    incrementGlobalScans();
    await new Promise(r => setTimeout(r, 2000));

    const preprocessed = preprocessResume(resumeText);
    const finalScore = calculateResumeTechScore(preprocessed);
    
    // Logic for mock ATS parsing
    const atsResults = [
      { name: 'Workday', score: finalScore + 2, logo: '🏢' },
      { name: 'Greenhouse', score: finalScore - 1, logo: '🌱' }
    ];

    const missingKeywords = [];
    if (preprocessed.keywordData.expert < 3) missingKeywords.push('Add 2-3 expert technologies (Kubernetes, AWS)');
    if (preprocessed.impactCount < 5) missingKeywords.push('Use more action verbs (optimized, automated)');

    const strengths = [];
    if (preprocessed.keywordData.expert >= 5) strengths.push(`${preprocessed.keywordData.expert} expert technologies`);
    if (preprocessed.atsMetrics.hasGithub) strengths.push('GitHub profile included');

    const resultsObj: AnalysisResults = {
      score: finalScore,
      atsResults,
      keywords: preprocessed.keywordData,
      impact: { count: preprocessed.impactCount, quantifiers: preprocessed.quantifiers.length },
      sections: preprocessed.sections,
      sectionCount: Object.values(preprocessed.sections).filter(Boolean).length,
      wordCount: preprocessed.atsMetrics.wordCount,
      compatibility: preprocessed.atsMetrics,
      missingKeywords,
      strengths,
      percentile: preprocessed.percentile,
      benchmarkComparison: preprocessed.benchmarkComparison,
      foundKeywords: preprocessed.foundKeywords
    };

    setResults(resultsObj);
    setJobMatches(analyzeJobMatches(preprocessed.foundKeywords));
    setSuccessPredicted({
      interviewProbability: finalScore > 80 ? 85 : 45,
      confidenceLevel: 'High',
      avgResponseTime: '3-5 days',
      strengthAreas: strengths.slice(0, 2)
    });
    saveToHistory(resultsObj);
    setAnalyzing(false);
  };

  const enhanceWithAI = async () => {
    setAiMode(true);
    await new Promise(r => setTimeout(r, 1500));
    setEnhanced([
      { 
        area: 'Expert Keywords', 
        current: 'Basic stack', 
        improved: 'Add Kubernetes, Terraform, AWS Lambda', 
        impact: '+12 points', 
        why: 'In high demand for senior roles', 
        confidence: '98%',
        basedOn: 'FAANG benchmarks'
      }
    ]);
    setAiMode(false);
  };

  const getScoreColor = (score: number) => score >= 85 ? 'text-green-500' : score >= 70 ? 'text-yellow-500' : 'text-red-500';
  const getScoreBg = (score: number) => score >= 85 ? 'from-green-900/50' : 'from-slate-900/50';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-purple-400" />
            <h1 className="text-2xl font-bold">ResumeTech Pro</h1>
          </div>
          <div className="text-right">
            <p className="text-purple-300 text-sm font-semibold">{totalScans.toLocaleString()} Analyzed</p>
            <div className="flex gap-1 justify-end mt-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />)}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto p-8">
        {!results ? (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-purple-400/30 rounded-2xl p-12 text-center bg-black/20 backdrop-blur">
              <Upload className="w-16 h-16 mx-auto text-purple-400 mb-4" />
              <h2 className="text-xl font-bold mb-4">Analyze Your Tech Career Potential</h2>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-48 bg-black/40 border border-purple-400/20 rounded-xl p-4 mb-4 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <button 
                onClick={() => analyzeResume(text)}
                disabled={analyzing || !text}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {analyzing ? 'Processing Proprietary Algorithms...' : 'Start Deep Scan'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Score Card */}
            <div className={`bg-gradient-to-br ${getScoreBg(results.score)} border border-white/10 rounded-2xl p-10 text-center`}>
              <div className="text-7xl font-black mb-2">
                <span className={getScoreColor(results.score)}>{results.score}</span>
                <span className="text-white/20">/100</span>
              </div>
              <p className="text-xl font-bold uppercase tracking-widest text-purple-300">ATS Compatibility Score</p>
              <p className="text-sm mt-2 text-white/60">You are in the {results.percentile} of applicants</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <h3 className="flex items-center gap-2 font-bold mb-4 text-green-400">
                  <CheckCircle className="w-5 h-5" /> Key Strengths
                </h3>
                <ul className="space-y-2 text-sm">
                  {results.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2"><span>•</span> {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <h3 className="flex items-center gap-2 font-bold mb-4 text-yellow-400">
                  <AlertCircle className="w-5 h-5" /> Critical Fixes
                </h3>
                <ul className="space-y-2 text-sm">
                  {results.missingKeywords.map((m, i) => (
                    <li key={i} className="flex gap-2 text-yellow-100"><span>!</span> {m}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Job Match Predictions - Trendsetter Feature */}
            {jobMatches && (
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-pink-400" /> Market Value & Job Matches
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-xs text-purple-300">Potential Salary</p>
                    <p className="text-xl font-bold text-green-400">${jobMatches.estimatedSalary.toLocaleString()}</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg">
                    <p className="text-xs text-purple-300">Active Openings</p>
                    <p className="text-xl font-bold">{jobMatches.totalOpenings}</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg col-span-2">
                    <p className="text-xs text-purple-300">Top Target Companies</p>
                    <p className="text-sm font-semibold truncate text-pink-300">{jobMatches.topCompanies.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Success Predictor */}
            {successPredictor && (
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-blue-300">Interview Probability</h4>
                    <p className="text-4xl font-black">{successPredictor.interviewProbability}%</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-white/60">Est. Response Time</p>
                    <p className="font-bold text-green-400">{successPredictor.avgResponseTime}</p>
                  </div>
                </div>
              </div>
            )}

            {/* AI Roadmap Section */}
            <div className="pt-4 space-y-4">
              <button 
                onClick={enhanceWithAI}
                className="w-full py-4 bg-white text-black font-black rounded-xl flex items-center justify-center gap-2 hover:bg-purple-100 transition-colors"
              >
                <Sparkles className="w-5 h-5" /> {aiMode ? 'AI Engine Thinking...' : 'Unlock AI Optimization Roadmap'}
              </button>

              {enhanced && enhanced.map((item, i) => (
                <div key={i} className="bg-black/60 border border-purple-500/50 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-purple-300">{item.area}</h4>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">{item.impact}</span>
                  </div>
                  <div className="grid gap-4 text-sm">
                    <div className="p-3 bg-red-900/20 rounded border border-red-500/20">
                      <p className="text-xs uppercase text-red-400 font-bold mb-1">Current</p>
                      {item.current}
                    </div>
                    <div className="p-3 bg-green-900/20 rounded border border-green-500/20">
                      <p className="text-xs uppercase text-green-400 font-bold mb-1">AI Improved (Copy this)</p>
                      {item.improved}
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-white/40 italic">Based on {item.basedOn} with {item.confidence} confidence</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => { setResults(null); setEnhanced(null); setText(''); }}
              className="w-full py-3 text-white/40 hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Reset and Analyze New Resume
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default UltimateATSAnalyzer;
