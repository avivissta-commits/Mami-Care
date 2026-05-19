// Content Layers - Separation of Concerns

// LAYER 1: Chemistry Logic (Source of Truth)
const CHEMISTRY_RULES = {
  retinol: {
    avoidWith: ["retinol", "retinal", "aha", "bha", "vitaminC"],
    requiresSPF: true,
    frequencyStart: "2-3x_week",
    timeOfUse: ["night"],
    buildUpPeriod: "4-6_weeks"
  },
  
  aha_bha: {
    avoidWith: ["retinol", "retinal", "aha", "bha", "vitaminC"],
    requiresSPF: true,
    exfoliationLevel: "chemical",
    timeOfUse: ["evening", "night"]
  },
  
  vitaminC: {
    avoidWith: ["retinol", "aha", "bha"],
    requiresSPF: true,
    oxidationRisk: true,
    timeOfUse: ["morning", "evening"]
  },
  
  niacinamide: {
    compatibleWith: "most",
    multiUse: true,
    concentration: "2-10%"
  },
  
  ceramides: {
    compatibleWith: "everything",
    supportsBarrier: true,
    enhancesActives: true
  }
};

// LAYER 2: UX Copy (User-Facing)
const UX_MESSAGES = {
  retinol_warning: {
    he: "רטינול דורש SPF ביום למחרת",
    en: "Retinol requires SPF the next day"
  },
  
  retinol_frequency: {
    he: "מומלץ להתחיל 2-3 פעמים בשבוע",
    en: "Start with 2-3 times per week"
  },
  
  acid_conflict: {
    he: "לא לשלב עם רטינול או חומצות אחרות באותו ערב",
    en: "Don't combine with retinol or other acids in the same routine"
  },
  
  spf_required: {
    he: "חובה קרם הגנה ביום למחרת",
    en: "SPF required the next day"
  }
};

// LAYER 3: Marketing Copy (NOT for logic)
const MARKETING_COPY = {
  gentle_description: "עדין ומתאים לכל סוגי העור",
  powerful_description: "פעיל וחזק לתוצאות מהירות",
  everyday_description: "מתאים לשימוש יומיומי"
};

// FUNCTION: Get message based on chemistry
function getMessageForChemistry(chemistry, messageType) {
  const rule = CHEMISTRY_RULES[chemistry];
  if (!rule) return null;
  
  // Map chemistry rules to UX messages
  if (messageType === "spf" && rule.requiresSPF) {
    return UX_MESSAGES.spf_required;
  }
  
  if (messageType === "frequency" && rule.frequencyStart) {
    return UX_MESSAGES.retinol_frequency;
  }
  
  if (messageType === "conflict" && rule.avoidWith) {
    return UX_MESSAGES.acid_conflict;
  }
  
  return null;
}

// CRITICAL: Never derive chemistry logic from marketing text
// CRITICAL: Never use simpleDesc for conflict detection
// CRITICAL: Only use structured data for rules

module.exports = {
  CHEMISTRY_RULES,
  UX_MESSAGES,
  MARKETING_COPY,
  getMessageForChemistry
};
