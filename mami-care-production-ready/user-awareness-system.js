// User Awareness System - Personalized recommendations

const USER_PROFILES = {
  beginner: {
    level: "beginner",
    maxActiveLevel: "medium",
    showAllWarnings: true,
    avoidCombinations: ["retinoid_acid", "acid_acid", "retinoid_vitaminC"],
    startFrequency: "1-2x_week",
    patchTestRequired: true
  },
  
  intermediate: {
    level: "intermediate",
    maxActiveLevel: "high",
    showAllWarnings: false,
    avoidCombinations: ["retinoid_strong_acid", "retinoid_vitaminC"],
    startFrequency: "2-3x_week",
    patchTestRequired: false
  },
  
  advanced: {
    level: "advanced",
    maxActiveLevel: "high",
    showAllWarnings: false,
    avoidCombinations: ["retinoid_retinoid"],
    startFrequency: "daily_possible",
    patchTestRequired: false
  }
};

const SKIN_CONDITIONS = {
  sensitive: {
    condition: "sensitive",
    maxActiveLevel: "medium",
    avoidIngredients: ["strong_acids", "high_retinol"],
    requiresSoothing: true,
    spacingRequired: true
  },
  
  damaged_barrier: {
    condition: "damaged_barrier",
    maxActiveLevel: "low",
    avoidIngredients: ["acids", "retinoids", "exfoliants"],
    requiresBarrierSupport: true,
    healingPeriod: "2-4_weeks"
  },
  
  acne_prone: {
    condition: "acne_prone",
    maxActiveLevel: "high",
    preferIngredients: ["acids", "niacinamide", "tea_tree"],
    avoidIngredients: ["heavy_oils"],
    nonComedogenic: true
  },
  
  dry: {
    condition: "dry",
    maxActiveLevel: "medium",
    preferIngredients: ["hydration", "barrier", "oils"],
    requiresMoisture: true
  },
  
  oily: {
    condition: "oily",
    maxActiveLevel: "high",
    preferIngredients: ["acids", "niacinamide"],
    avoidIngredients: ["heavy_creams", "oils"],
    lightweight: true
  }
};

const AGE_GROUPS = {
  teen: {
    age: "teen",
    maxActiveLevel: "medium",
    focusGoals: ["acne", "oily", "pores"],
    avoidIngredients: ["strong_retinoids"],
    education: "high"
  },
  
  adult: {
    age: "adult",
    maxActiveLevel: "high",
    focusGoals: ["antiaging", "texture", "brightness"],
    allIngredientsAllowed: true
  },
  
  mature: {
    age: "mature",
    maxActiveLevel: "high",
    focusGoals: ["wrinkles", "firmness", "dry"],
    requiresRichMoisture: true
  }
};

function personalizeRecommendation(product, metadata, userProfile) {
  if (!userProfile) {
    return {
      suitable: true,
      confidence: 0.5,
      warnings: [],
      recommendations: []
    };
  }
  
  const profile = USER_PROFILES[userProfile.level] || USER_PROFILES.beginner;
  const skinCondition = userProfile.skinCondition ? SKIN_CONDITIONS[userProfile.skinCondition] : null;
  const ageGroup = userProfile.age ? AGE_GROUPS[userProfile.age] : null;
  
  let suitable = true;
  let confidence = metadata.confidence || 0.8;
  const warnings = [];
  const recommendations = [];
  
  // Check active level
  if (metadata.activeLevel === "high" && profile.maxActiveLevel !== "high") {
    suitable = false;
    warnings.push({
      type: "too_strong",
      message: `מוצר חזק מדי לרמה ${profile.level}`,
      severity: "high"
    });
  }
  
  // Check skin condition
  if (skinCondition) {
    if (metadata.activeLevel === "high" && skinCondition.maxActiveLevel !== "high") {
      suitable = false;
      warnings.push({
        type: "not_for_condition",
        message: `לא מתאים לעור ${skinCondition.condition}`,
        severity: "high"
      });
    }
    
    // Check if requires soothing
    if (skinCondition.requiresSoothing && !metadata.compatibleWith?.includes("soothing")) {
      recommendations.push({
        type: "add_soothing",
        message: "מומלץ להוסיף מוצר מרגיע",
        products: [] // Will be filled later
      });
    }
    
    // Check if requires barrier support
    if (skinCondition.requiresBarrierSupport && metadata.activeLevel !== "none") {
      recommendations.push({
        type: "add_barrier",
        message: "חובה להוסיף תמיכה במחסום",
        products: [] // Will be filled later
      });
    }
  }
  
  // Check age appropriateness
  if (ageGroup && ageGroup.age === "teen" && metadata.chemistry === "retinol") {
    warnings.push({
      type: "age_consideration",
      message: "רטינול לא תמיד מתאים לגיל נמוך - התייעץ עם רופא",
      severity: "medium"
    });
  }
  
  // Adjust confidence based on user profile
  if (!suitable) {
    confidence *= 0.5;
  }
  
  // Generate personalized frequency
  if (metadata.frequencyLimit && profile.startFrequency) {
    recommendations.push({
      type: "frequency",
      message: `בתור ${profile.level}, התחל עם ${profile.startFrequency}`,
      frequency: profile.startFrequency
    });
  }
  
  return {
    suitable,
    confidence,
    warnings,
    recommendations,
    userLevel: profile.level,
    skinCondition: skinCondition?.condition,
    ageGroup: ageGroup?.age
  };
}

function shouldShowProduct(product, metadata, userProfile) {
  if (!userProfile) return true;
  
  const result = personalizeRecommendation(product, metadata, userProfile);
  
  // Don't show if not suitable and confidence is low
  if (!result.suitable && result.confidence < 0.6) {
    return false;
  }
  
  return true;
}

function filterProductsByUser(products, metadata, userProfile) {
  return products.filter(product => {
    const meta = metadata[product.id];
    if (!meta) return false;
    return shouldShowProduct(product, meta, userProfile);
  });
}

module.exports = {
  USER_PROFILES,
  SKIN_CONDITIONS,
  AGE_GROUPS,
  personalizeRecommendation,
  shouldShowProduct,
  filterProductsByUser
};
