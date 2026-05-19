// Confidence System - Don't show if not confident

const CONFIDENCE_THRESHOLDS = {
  similarProducts: 0.7,      // Only show if 70%+ confident
  compatibleWith: 0.8,       // Only show if 80%+ confident
  warnings: 0.9,             // Only show if 90%+ confident
  routineOrder: 0.85,        // Only show if 85%+ confident
  workflow: 0.8              // Only use workflow if 80%+ confident
};

function shouldShow(feature, confidence) {
  const threshold = CONFIDENCE_THRESHOLDS[feature];
  if (!threshold) return true; // If no threshold, default to show
  return confidence >= threshold;
}

function calculateSimilarityConfidence(product1, product2, sharedTags, sharedIngredients) {
  let confidence = 0;
  
  // Same type = high confidence
  if (product1.type === product2.type) {
    confidence += 0.4;
  }
  
  // Shared tags
  if (sharedTags >= 4) confidence += 0.3;
  else if (sharedTags >= 3) confidence += 0.2;
  else if (sharedTags >= 2) confidence += 0.1;
  
  // Shared ingredients
  if (sharedIngredients >= 3) confidence += 0.2;
  else if (sharedIngredients >= 2) confidence += 0.1;
  
  // Same goodFor
  const product1Issues = new Set(product1.goodFor || []);
  const sharedIssues = (product2.goodFor || []).filter(x => product1Issues.has(x)).length;
  if (sharedIssues >= 2) confidence += 0.1;
  
  return Math.min(confidence, 1.0);
}

function calculateCompatibilityConfidence(product1, product2, metadata) {
  // If we have explicit workflow metadata with high confidence
  const meta1 = metadata[product1.id];
  const meta2 = metadata[product2.id];
  
  if (meta1 && meta2 && meta1.confidence >= 0.9 && meta2.confidence >= 0.9) {
    // We have high-confidence metadata for both
    return 0.95;
  }
  
  // If one has metadata but not the other
  if ((meta1 && meta1.confidence >= 0.8) || (meta2 && meta2.confidence >= 0.8)) {
    return 0.7;
  }
  
  // Fallback - low confidence
  return 0.5;
}

function shouldShowWarning(warning, productMetadata) {
  // Only show SPF warnings if we're 90%+ confident the product requires it
  if (warning.includes("SPF") || warning.includes("הגנה")) {
    return productMetadata?.confidence >= 0.9 && productMetadata?.requiresSPFNextDay === true;
  }
  
  // Only show frequency warnings if we're 85%+ confident
  if (warning.includes("פעמים בשבוע") || warning.includes("2-3")) {
    return productMetadata?.confidence >= 0.85 && productMetadata?.frequencyLimit;
  }
  
  // General warnings - 80%+ confidence
  return productMetadata?.confidence >= 0.8;
}

module.exports = {
  CONFIDENCE_THRESHOLDS,
  shouldShow,
  calculateSimilarityConfidence,
  calculateCompatibilityConfidence,
  shouldShowWarning
};
