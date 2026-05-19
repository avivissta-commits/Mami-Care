// Conflict Severity System

const CONFLICT_RULES = {
  retinoid_vs_strong_acid: {
    severity: "hard_conflict",
    message: "לא לשלב רטינול וחומצות חזקות באותו ערב",
    userLevel: "all",
    confidence: 0.95
  },
  
  retinoid_vs_retinoid: {
    severity: "hard_conflict",
    message: "לא לשלב שני רטינואידים באותו ערב",
    userLevel: "all",
    confidence: 1.0
  },
  
  retinoid_vs_vitaminC: {
    severity: "hard_conflict",
    message: "לא לשלב רטינול וויטמין C באותו ערב",
    userLevel: "all",
    confidence: 0.95
  },
  
  acid_vs_acid_strong: {
    severity: "hard_conflict",
    message: "לא לשלב שתי חומצות חזקות באותו ערב",
    userLevel: "all",
    confidence: 0.9
  },
  
  acid_vs_acid_mild: {
    severity: "caution",
    message: "שילוב חומצות - זהיר אם העור רגיש",
    userLevel: "beginner",
    confidence: 0.8
  },
  
  vitaminC_vs_niacinamide: {
    severity: "spacing_recommended",
    message: "מומלץ מרווח של שעה בין ויטמין C לניאצינמיד",
    userLevel: "beginner",
    confidence: 0.7
  },
  
  active_vs_mask_clay: {
    severity: "spacing_recommended",
    message: "מסיכת חימר + פעיל חזק - מומלץ לא באותו ערב אם העור רגיש",
    userLevel: "sensitive",
    confidence: 0.75
  },
  
  retinoid_morning_use: {
    severity: "beginner_warning",
    message: "רטינואידים בבוקר רק למתקדמות + SPF חובה",
    userLevel: "beginner",
    confidence: 0.9
  }
};

function checkConflict(product1, product2, meta1, meta2, userProfile = {}) {
  const chemistry1 = meta1.chemistry;
  const chemistry2 = meta2.chemistry;
  const userLevel = userProfile.level || "beginner";
  const hasSensitiveSkin = userProfile.sensitive || false;
  
  // Check retinoid vs retinoid
  if (isRetinoid(chemistry1) && isRetinoid(chemistry2)) {
    return buildConflict("retinoid_vs_retinoid", userLevel);
  }
  
  // Check retinoid vs strong acid
  if ((isRetinoid(chemistry1) && isStrongAcid(chemistry2)) ||
      (isStrongAcid(chemistry1) && isRetinoid(chemistry2))) {
    return buildConflict("retinoid_vs_strong_acid", userLevel);
  }
  
  // Check retinoid vs vitamin C
  if ((isRetinoid(chemistry1) && isVitaminC(chemistry2)) ||
      (isVitaminC(chemistry1) && isRetinoid(chemistry2))) {
    return buildConflict("retinoid_vs_vitaminC", userLevel);
  }
  
  // Check acid vs acid
  if (isStrongAcid(chemistry1) && isStrongAcid(chemistry2)) {
    return buildConflict("acid_vs_acid_strong", userLevel);
  }
  
  if (isAcid(chemistry1) && isAcid(chemistry2)) {
    if (userLevel === "beginner" || hasSensitiveSkin) {
      return buildConflict("acid_vs_acid_mild", userLevel);
    }
  }
  
  // Check vitamin C vs niacinamide (low severity)
  if ((isVitaminC(chemistry1) && isNiacinamide(chemistry2)) ||
      (isNiacinamide(chemistry1) && isVitaminC(chemistry2))) {
    if (userLevel === "beginner") {
      return buildConflict("vitaminC_vs_niacinamide", userLevel);
    }
  }
  
  // Check active vs clay mask
  if ((meta1.activeLevel === "high" && meta2.chemistry?.includes("clay")) ||
      (meta2.activeLevel === "high" && meta1.chemistry?.includes("clay"))) {
    if (hasSensitiveSkin) {
      return buildConflict("active_vs_mask_clay", userLevel);
    }
  }
  
  return null; // No conflict
}

function buildConflict(ruleKey, userLevel) {
  const rule = CONFLICT_RULES[ruleKey];
  if (!rule) return null;
  
  // Check if this conflict applies to user level
  if (rule.userLevel !== "all" && rule.userLevel !== userLevel) {
    return null;
  }
  
  return {
    severity: rule.severity,
    message: rule.message,
    confidence: rule.confidence,
    shouldShow: rule.confidence >= 0.7
  };
}

function isRetinoid(chemistry) {
  return ["retinol", "retinal", "vitamin_a_derivatives"].includes(chemistry);
}

function isVitaminC(chemistry) {
  return ["ascorbic_acid", "l_ascorbic_acid"].includes(chemistry);
}

function isStrongAcid(chemistry) {
  return ["aha_bha", "aha_bha_pha", "therapeutic_acids", "therapeutic_acids_antibacterial"].includes(chemistry);
}

function isAcid(chemistry) {
  return chemistry?.includes("aha") || chemistry?.includes("bha") || chemistry?.includes("acid");
}

function isNiacinamide(chemistry) {
  return chemistry?.includes("niacinamide");
}

function getSeverityColor(severity) {
  const colors = {
    "hard_conflict": "#FF4444",      // Red
    "caution": "#FFA500",            // Orange
    "spacing_recommended": "#FFD700", // Yellow
    "beginner_warning": "#87CEEB"    // Light Blue
  };
  return colors[severity] || "#999999";
}

function getSeverityIcon(severity) {
  const icons = {
    "hard_conflict": "🚫",
    "caution": "⚠️",
    "spacing_recommended": "⏰",
    "beginner_warning": "💡"
  };
  return icons[severity] || "ℹ️";
}

module.exports = {
  CONFLICT_RULES,
  checkConflict,
  getSeverityColor,
  getSeverityIcon
};
