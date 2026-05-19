// Smart Similarity System - Beyond just tags/ingredients

function calculateSmartSimilarity(product1, product2, metadata1, metadata2) {
  let score = 0;
  const weights = {
    routineRole: 0.25,        // Same purpose in routine
    skinGoals: 0.20,          // Same skin concerns
    activeLevel: 0.15,        // Similar intensity
    chemistry: 0.15,          // Similar chemical profile
    timeOfUse: 0.10,          // Same usage time
    category: 0.10,           // Same category
    type: 0.05                // Same type (serum/cream/etc)
  };
  
  // 1. Routine Role (highest weight)
  if (metadata1.routineRole === metadata2.routineRole) {
    score += weights.routineRole;
  } else if (areRelatedRoles(metadata1.routineRole, metadata2.routineRole)) {
    score += weights.routineRole * 0.5;
  }
  
  // 2. Skin Goals overlap
  const goals1 = new Set(metadata1.skinGoals || []);
  const goals2 = metadata2.skinGoals || [];
  const sharedGoals = goals2.filter(g => goals1.has(g)).length;
  if (sharedGoals >= 2) {
    score += weights.skinGoals;
  } else if (sharedGoals === 1) {
    score += weights.skinGoals * 0.5;
  }
  
  // 3. Active Level similarity
  if (metadata1.activeLevel === metadata2.activeLevel) {
    score += weights.activeLevel;
  } else if (areSimilarLevels(metadata1.activeLevel, metadata2.activeLevel)) {
    score += weights.activeLevel * 0.5;
  }
  
  // 4. Chemistry similarity
  if (metadata1.chemistry === metadata2.chemistry) {
    score += weights.chemistry;
  } else if (areRelatedChemistry(metadata1.chemistry, metadata2.chemistry)) {
    score += weights.chemistry * 0.5;
  }
  
  // 5. Time of Use overlap
  const times1 = new Set(metadata1.timeOfUse || []);
  const times2 = metadata2.timeOfUse || [];
  const sharedTimes = times2.filter(t => times1.has(t)).length;
  if (sharedTimes > 0) {
    score += weights.timeOfUse * (sharedTimes / Math.max(times1.size, times2.length));
  }
  
  // 6. Same category
  if (metadata1.category === metadata2.category) {
    score += weights.category;
  }
  
  // 7. Same type
  if (product1.type === product2.type) {
    score += weights.type;
  }
  
  return score;
}

function areRelatedRoles(role1, role2) {
  const relatedGroups = [
    ["hydration_base", "hydration_boost", "hydration_repair", "hydration_mixer"],
    ["barrier_support", "barrier_repair", "barrier_moisturize"],
    ["exfoliation", "exfoliation_acne", "acne_treatment", "acne_soothing"],
    ["active_antiaging", "antiaging_support", "antiaging_moisturize"],
    ["brightening_active", "spot_corrector"],
    ["eye_care", "eye_antiaging", "eye_brightening"],
    ["spot_treatment", "blemish_control", "acne_control"]
  ];
  
  return relatedGroups.some(group => 
    group.includes(role1) && group.includes(role2)
  );
}

function areSimilarLevels(level1, level2) {
  const levelMap = {
    "none": 0,
    "low": 1,
    "medium": 2,
    "medium-high": 2.5,
    "high": 3
  };
  
  const diff = Math.abs(levelMap[level1] - levelMap[level2]);
  return diff <= 1;
}

function areRelatedChemistry(chem1, chem2) {
  const relatedGroups = [
    ["retinol", "retinal", "vitamin_a_derivatives"],
    ["aha_bha", "aha_bha_pha", "aha_bha_pha_mild", "therapeutic_acids"],
    ["ceramides_lipids", "ceramides_centella", "snail_ceramides", "barrier_complex"],
    ["hyaluronic_centella", "snail_mucin", "peptides_hydration"],
    ["niacinamide", "niacinamide_brighteners"],
    ["collagen_peptides", "peptides_collagen", "pdrn_peptides"]
  ];
  
  return relatedGroups.some(group => 
    group.includes(chem1) && group.includes(chem2)
  );
}

function getSimilarProducts(product, allProducts, allMetadata, minConfidence = 0.7) {
  const metadata = allMetadata[product.id];
  if (!metadata || metadata.confidence < 0.8) {
    return []; // Not confident enough in source product
  }
  
  const similarities = allProducts
    .filter(p => p.id !== product.id)
    .map(other => {
      const otherMeta = allMetadata[other.id];
      if (!otherMeta || otherMeta.confidence < 0.8) {
        return null; // Not confident enough in target product
      }
      
      const score = calculateSmartSimilarity(product, other, metadata, otherMeta);
      
      return {
        product: other,
        score: score,
        confidence: Math.min(metadata.confidence, otherMeta.confidence),
        reasons: generateReasons(product, other, metadata, otherMeta)
      };
    })
    .filter(item => item !== null && item.score >= minConfidence)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  
  return similarities;
}

function generateReasons(product1, product2, meta1, meta2) {
  const reasons = [];
  
  if (meta1.routineRole === meta2.routineRole) {
    reasons.push(`שניהם ${getRoleDescription(meta1.routineRole)}`);
  }
  
  const sharedGoals = (meta1.skinGoals || []).filter(g => 
    (meta2.skinGoals || []).includes(g)
  );
  if (sharedGoals.length > 0) {
    reasons.push(`מטפלים ב: ${sharedGoals.slice(0, 2).join(', ')}`);
  }
  
  if (meta1.activeLevel === meta2.activeLevel) {
    reasons.push(`אותה עוצמה (${meta1.activeLevel})`);
  }
  
  if (product1.type === product2.type) {
    reasons.push(`שניהם ${product1.type}`);
  }
  
  return reasons;
}

function getRoleDescription(role) {
  const descriptions = {
    "hydration_base": "לחות בסיסית",
    "hydration_boost": "חיזוק לחות",
    "exfoliation": "פילינג",
    "active_antiaging": "אנטי אייג'ינג פעיל",
    "barrier_support": "תמיכה במחסום",
    "brightening_active": "הבהרה פעילה",
    "spot_treatment": "טיפול נקודתי"
  };
  return descriptions[role] || role;
}

module.exports = {
  calculateSmartSimilarity,
  getSimilarProducts
};
