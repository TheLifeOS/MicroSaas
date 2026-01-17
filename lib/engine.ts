// lib/engine.ts

export function runNeuralScan(text: string) {
  const content = text.toLowerCase();
  
  const matchedKeywords = ENGINE_2026_RULES.criticalKeywords.filter(k => 
    content.includes(k.toLowerCase())
  );
  
  const foundVerbs = ENGINE_2026_RULES.actionVerbs.filter(v => 
    content.includes(v.toLowerCase())
  );

  // 1. Legacy ATS Logic (Keyword matching only)
  const legacyScore = Math.round((matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 100);

  // 2. Neural/LLM Logic (Context, Verbs, and Density)
  const keywordWeight = (matchedKeywords.length / ENGINE_2026_RULES.criticalKeywords.length) * 50;
  const verbWeight = (foundVerbs.length / ENGINE_2026_RULES.actionVerbs.length) * 30;
  const neuralScore = Math.min(100, Math.round(keywordWeight + verbWeight + 20));

  return {
    score: neuralScore, // Overall average
    legacyScore,        // Old school "Taleo/Workday" style
    neuralScore,        // GPT-4 / Modern AI style
    matched: matchedKeywords,
    missing: ENGINE_2026_RULES.criticalKeywords.filter(k => !matchedKeywords.includes(k)),
    verbs: foundVerbs,
    version: ENGINE_2026_RULES.lastUpdated
  };
}
