'use client'

import React, { useState } from 'react';
import { Upload, Shield, Zap, CheckCircle, TrendingUp, FileText, Target, Award, ChevronRight, Sparkles } from 'lucide-react';

export default function ATSResumeOptimizer() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ResumeATS Pro
            </span>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Optimize Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="font-medium text-blue-300">AI-Powered • Privacy-First • Zero Tracking</span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4">
              Beat Every ATS.
            </h1>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Land Interviews.
              </span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            AI-powered resume optimization. Average <span className="text-blue-400 font-bold">67%</span> increase in ATS pass rate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg transition-all hover:scale-110 hover:shadow-2xl flex items-center gap-3">
              <Upload className="w-6 h-6" />
              Upload Resume
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Free scan • Instant results • No credit card</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            { icon: TrendingUp, value: '67%', label: 'Avg Increase', desc: 'In ATS pass rate' },
            { icon: Zap, value: '<1s', label: 'Analysis', desc: 'Lightning fast' },
            { icon: Award, value: '50K+', label: 'Resumes', desc: 'Optimized' }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 transition-all">
              <stat.icon className="w-10 h-10 text-blue-400 mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-200">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ResumeATS Pro</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Zero Logging',
              desc: 'AES-256 encryption, no data retention, GDPR/CCPA compliant.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Zap,
              title: 'Edge Fast',
              desc: 'Sub-second analysis on Vercel Edge functions.',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: CheckCircle,
              title: 'Proven Results',
              desc: 'Average 67% increase in ATS pass rate.',
              color: 'from-green-500 to-emerald-500'
            }
          ].map((feature, i) => (
            <div
              key={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/30 transition-all hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Suite */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-4">
          Complete <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Career Toolkit</span>
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16">More tools coming soon</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: FileText, name: 'ATS Resume Optimizer', status: 'Live', available: true },
            { icon: Target, name: 'Cover Letter Generator', status: 'Soon', available: false },
            { icon: Award, name: 'LinkedIn Optimizer', status: 'Soon', available: false },
            { icon: TrendingUp, name: 'Salary Guide', status: 'Soon', available: false }
          ].map((tool, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <tool.icon className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{tool.name}</h3>
              </div>
              <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${tool.available ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}`}>
                {tool.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <span className="font-semibold">ResumeATS Pro</span>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 ResumeATS Pro • <a href="#" className="text-blue-400 hover:text-blue-300">Privacy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
