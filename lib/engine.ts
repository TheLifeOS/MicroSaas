// lib/engine.ts

export const ENGINE_2026_RULES = {
  lastUpdated: "2026-01-17",
  targetScore: 85,
  criticalKeywords: [
    "Next.js 16", "React 19", "TypeScript", "LLM Integration", "RAG", 
    "System Design", "Scalability", "CI/CD", "AWS", "Microservices",
    "Vector Databases", "Prompt Engineering", "Full-Stack"
  ],
  actionVerbs: [
    "Architected", "Spearheaded", "Engineered", "Optimized", 
    "Quantified", "Orchestrated", "Transformed", "Pioneered",
    "Accelerated", "Automated", "Delivered"
  ]
};

export function runNeuralScan(text: string) {
  const content = text.toLowerCase();
  
  const matchedKeywords = ENGINE_2026_RULES.criticalKeywords.filter(k => 
    content.includes(k.toLowerCase())
  );
  
  const foundVerbs = ENGINE_2026_RULES.actionVerbs.filter(v => 
    content.includes(v.toLowerCase())
  );

  // 1. Legacy ATS Logic (Strict Keyword matching)
  const legacyScore = Math.round((matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 100);

  // 2. Neural/LLM Logic (Contextual weights + Base value)
  const keywordWeight = (matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 50;
  const verbWeight = (foundVerbs.length / ENGINE_2026_RULES.actionVerbs.length) * 30;
  const neuralScore = Math.min(100, Math.round(keywordWeight + verbWeight + 20));

  return {
    score: neuralScore,
    legacyScore,
    neuralScore,
    matched: matchedKeywords,
    missing: ENGINE_2026_RULES.criticalKeywords.filter(k => !matchedKeywords.includes(k)),
    verbs: foundVerbs,
    version: ENGINE_2026_RULES.lastUpdated
  };
}
