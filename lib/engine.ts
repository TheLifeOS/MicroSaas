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

/**
 * High-Performance Client-Side ATS Parser
 */
export function runNeuralScan(text: string) {
  const content = text.toLowerCase();
  
  // Logic: Weighted Semantic Scoring
  const matchedKeywords = ENGINE_2026_RULES.criticalKeywords.filter(k => 
    content.includes(k.toLowerCase())
  );
  
  const foundVerbs = ENGINE_2026_RULES.actionVerbs.filter(v => 
    content.includes(v.toLowerCase())
  );

  const keywordScore = (matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 50;
  const verbScore = (foundVerbs.length / ENGINE_2026_RULES.actionVerbs.length) * 30;
  const readabilityScore = text.length > 1000 ? 20 : 10;

  return {
    score: Math.min(100, Math.round(keywordScore + verbScore + readabilityScore)),
    matched: matchedKeywords,
    missing: ENGINE_2026_RULES.criticalKeywords.filter(k => !matchedKeywords.includes(k)),
    verbs: foundVerbs,
    version: ENGINE_2026_RULES.lastUpdated
  };
}
