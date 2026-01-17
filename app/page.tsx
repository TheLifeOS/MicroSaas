"use client";

import React, { useState, useRef } from 'react';
import { Upload, FileText, Target, Zap, TrendingUp, Shield, CheckCircle, XCircle, AlertCircle, Sparkles, ArrowRight, Download, Copy, Check } from 'lucide-react';

export default function ResumeATSOptimizer() {
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setAnalyzing(true);

    // Simulate file reading
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      setResumeText(text);
      
      // Auto-analyze after 1 second
      setTimeout(() => {
        analyzeResume(text, jobDescription);
      }, 1000);
    };
    reader.readAsText(uploadedFile);
  };

  const analyzeResume = (resumeContent, jobDesc) => {
    setAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const analysis = generateAnalysis(resumeContent, jobDesc);
      setResults(analysis);
      setAnalyzing(false);
      setActiveTab('results');
    }, 2000);
  };

  const generateAnalysis = (resume, job) => {
    const words = resume.toLowerCase().split(/\s+/);
    const uniqueWords = new Set(words);
    
    // Simulate ATS scoring algorithm
    const baseScore = 45 + Math.floor(Math.random() * 30);
    const hasContact = resume.includes('@') || resume.includes('email');
    const hasExperience = resume.toLowerCase().includes('experience') || resume.toLowerCase().includes('worked');
    const hasSkills = resume.toLowerCase().includes('skill') || resume.toLowerCase().includes('python') || resume.toLowerCase().includes('java');
    const hasEducation = resume.toLowerCase().includes('university') || resume.toLowerCase().includes('degree');
    
    let score = baseScore;
    if (hasContact) score += 10;
    if (hasExperience) score += 15;
    if (hasSkills) score += 15;
    if (hasEducation) score += 10;
    
    score = Math.min(score, 98);

    // Extract potential keywords
    const commonKeywords = ['python', 'java', 'javascript', 'react', 'node', 'aws', 'docker', 'kubernetes', 'agile', 'scrum', 'git', 'sql', 'api', 'ci/cd', 'leadership', 'team', 'project'];
    const foundKeywords = commonKeywords.filter(kw => resume.toLowerCase().includes(kw));
    
    const jobKeywords = job ? job.toLowerCase().split(/\s+/).filter(w => w.length > 4) : [];
    const matchingKeywords = foundKeywords.filter(kw => jobKeywords.some(jk => jk.includes(kw)));

    return {
      score,
      breakdown: {
        formatting: Math.min(score + 5, 95),
        keywords: foundKeywords.length * 5,
        experience: hasExperience ? 85 : 45,
        education: hasEducation ? 90 : 50,
        contact: hasContact ? 100 : 20
      },
      keywords: foundKeywords.slice(0, 12),
      matchScore: job ? Math.min(matchingKeywords.length * 8 + 20, 95) : null,
      improvements: [
        {
          type: 'critical',
          title: 'Add quantifiable achievements',
          current: 'Managed team projects',
          suggested: 'Led 5-person engineering team, delivering 3 major features that increased user engagement by 40%',
          impact: '+12%'
        },
        {
          type: 'warning',
          title: 'Optimize keyword density',
          current: `${foundKeywords.length} relevant keywords detected`,
          suggested: 'Add: cloud architecture, microservices, DevOps pipeline',
          impact: '+8%'
        },
        {
          type: 'info',
          title: 'Improve action verbs',
          current: 'Responsible for developing features',
          suggested: 'Architected and deployed scalable features serving 100K+ users',
          impact: '+5%'
        }
      ],
      atsCompatibility: [
        { system: 'Workday', status: score > 70, confidence: score > 70 ? 94 : 65 },
        { system: 'Greenhouse', status: score > 65, confidence: score > 65 ? 91 : 58 },
        { system: 'Lever', status: score > 60, confidence: score > 60 ? 89 : 62 },
        { system: 'Taleo', status: score > 75, confidence: score > 75 ? 87 : 54 }
      ]
    };
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ScoreCircle = ({ score }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    
    return (
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="url(#scoreGradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-white">{score}</span>
          <span className="text-sm text-gray-400 mt-1">ATS Score</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#141937] to-[#0a0e27] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0e27]/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ResumeATS Pro
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">Zero Tracking</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'upload'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Upload Resume
          </button>
          <button
            onClick={() => setActiveTab('results')}
            disabled={!results}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'results' && results
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white disabled:opacity-50'
            }`}
          >
            Analysis Results
          </button>
        </div>

        {/* Upload Section */}
        {activeTab === 'upload' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* File Upload */}
            <div className="space-y-6">
              <div className="bg-white/5 border-2 border-dashed border-white/20 rounded-2xl p-12 text-center hover:border-indigo-500/50 transition-all cursor-pointer group"
                   onClick={() => fileInputRef.current?.click()}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-10 h-10 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Upload Your Resume</h3>
                <p className="text-gray-400 mb-4">PDF, DOC, DOCX or TXT • Max 5MB</p>
                {file && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-emerald-300">{file.name}</span>
                  </div>
                )}
              </div>

              {/* Job Description (Optional) */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Job Description (Optional - for better matching)
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here to get targeted optimization suggestions..."
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 resize-none"
                />
              </div>

              {analyzing && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
                  <p className="text-lg font-medium text-gray-300">Analyzing your resume...</p>
                  <p className="text-sm text-gray-500 mt-2">Testing against 50+ ATS systems</p>
                </div>
              )}
            </div>

            {/* Features Preview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
              
              {[
                { icon: <Target />, title: 'ATS Compatibility Score', desc: 'Real-time scoring against 50+ ATS systems', color: 'from-cyan-500 to-blue-600' },
                { icon: <Zap />, title: 'Keyword Optimization', desc: 'Density analysis & job-specific suggestions', color: 'from-purple-500 to-pink-600' },
                { icon: <Sparkles />, title: 'AI Rewrite Suggestions', desc: 'Context-aware improvements that sound human', color: 'from-orange-500 to-red-600' },
                { icon: <TrendingUp />, title: 'Impact Scoring', desc: 'See exactly how each change improves your score', color: 'from-emerald-500 to-teal-600' }
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(feature.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Section */}
        {activeTab === 'results' && results && (
          <div className="space-y-8">
            {/* Score Overview */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center">
                  <ScoreCircle score={results.score} />
                  <div className="mt-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">
                      {results.score >= 80 ? 'Excellent!' : results.score >= 60 ? 'Good Start' : 'Needs Work'}
                    </h3>
                    <p className="text-gray-400">
                      {results.score >= 80 
                        ? 'Your resume will pass most ATS systems' 
                        : results.score >= 60 
                        ? 'A few improvements will boost your score'
                        : 'Implement suggestions below to improve'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold mb-4">Score Breakdown</h4>
                  {Object.entries(results.breakdown).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-sm font-bold">{value}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Match Score */}
            {results.matchScore && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-400" />
                      Job Description Match
                    </h4>
                    <p className="text-gray-400">How well your resume aligns with the target role</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {results.matchScore}%
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Match Score</p>
                  </div>
                </div>
              </div>
            )}

            {/* Keywords Found */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Keywords Detected ({results.keywords.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {results.keywords.map((keyword, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-sm font-medium text-indigo-300">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Improvements */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                AI-Powered Suggestions
              </h4>
              <div className="space-y-4">
                {results.improvements.map((imp, i) => (
                  <div key={i} className={`p-6 rounded-xl border ${
                    imp.type === 'critical' ? 'bg-red-500/10 border-red-500/30' :
                    imp.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {imp.type === 'critical' ? <XCircle className="w-5 h-5 text-red-400" /> :
                         imp.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-400" /> :
                         <CheckCircle className="w-5 h-5 text-blue-400" />}
                        <h5 className="font-semibold">{imp.title}</h5>
                      </div>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-emerald-400">
                        {imp.impact} boost
                      </span>
                    </div>
                    
                    <div className="space-y-3 ml-8">
                      <div>
                        <p className="text-xs text-gray-400 uppercase mb-1">Current</p>
                        <p className="text-gray-300">{imp.current}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase mb-1">Suggested</p>
                        <div className="flex items-start gap-2">
                          <p className="flex-1 text-emerald-300 font-medium">{imp.suggested}</p>
                          <button
                            onClick={() => copyToClipboard(imp.suggested)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                          >
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ATS Compatibility */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                ATS System Compatibility
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {results.atsCompatibility.map((ats, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{ats.system}</span>
                      {ats.status ? 
                        <CheckCircle className="w-5 h-5 text-emerald-400" /> :
                        <XCircle className="w-5 h-5 text-red-400" />
                      }
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${ats.status ? 'bg-emerald-500' : 'bg-red-500'}`}
                          style={{ width: `${ats.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">{ats.confidence}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Full Report
              </button>
              <button 
                onClick={() => setActiveTab('upload')}
                className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Analyze Another Resume
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Badge */}
      <div className="fixed bottom-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm flex items-center gap-2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-gray-300">100% Private • Zero Logging</span>
      </div>
    </div>
  );
}
