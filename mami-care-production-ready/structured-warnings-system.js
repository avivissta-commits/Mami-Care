// Structured Warnings System - No text parsing

const WARNING_TYPES = {
  spf_required: {
    type: "spf_required",
    severity: "high",
    icon: "☀️",
    message: {
      he: "חובה קרם הגנה ביום למחרת",
      en: "SPF required the next day"
    },
    triggers: {
      requiresSPFNextDay: true
    },
    minConfidence: 0.9
  },
  
  frequency_limit: {
    type: "frequency_limit",
    severity: "medium",
    icon: "📅",
    message: {
      he: "מומלץ להתחיל 2-3 פעמים בשבוע",
      en: "Start with 2-3 times per week"
    },
    triggers: {
      frequencyLimit: "2-3x_week"
    },
    minConfidence: 0.85
  },
  
  build_up_required: {
    type: "build_up_required",
    severity: "medium",
    icon: "⏳",
    message: {
      he: "לבנות שימוש בהדרגה - להתחיל פעם אחת בשבוע",
      en: "Build up gradually - start once per week"
    },
    triggers: {
      buildUpRequired: true
    },
    minConfidence: 0.85
  },
  
  sensitive_area: {
    type: "sensitive_area",
    severity: "low",
    icon: "👁️",
    message: {
      he: "אזור עיניים רגיש - להשתמש בעדינות",
      en: "Sensitive eye area - use gently"
    },
    triggers: {
      sensitiveArea: true
    },
    minConfidence: 0.8
  },
  
  oxidation_sensitive: {
    type: "oxidation_sensitive",
    severity: "low",
    icon: "⚗️",
    message: {
      he: "רגיש לחמצון - לשמור במקום חשוך",
      en: "Oxidation sensitive - store in dark place"
    },
    triggers: {
      oxidationSensitive: true
    },
    minConfidence: 0.8
  },
  
  rinse_required: {
    type: "rinse_required",
    severity: "high",
    icon: "💧",
    message: {
      he: "לשטוף אחרי {minutes} דקות",
      en: "Rinse after {minutes} minutes"
    },
    triggers: {
      requiresRinse: true
    },
    minConfidence: 0.95
  },
  
  avoid_conflict: {
    type: "avoid_conflict",
    severity: "high",
    icon: "🚫",
    message: {
      he: "לא לשלב עם {conflictType} באותו ערב",
      en: "Don't combine with {conflictType} in same routine"
    },
    triggers: {
      hasConflicts: true
    },
    minConfidence: 0.9
  },
  
  morning_advanced_only: {
    type: "morning_advanced_only",
    severity: "medium",
    icon: "🌅",
    message: {
      he: "שימוש בבוקר רק למתקדמות + SPF חובה",
      en: "Morning use for advanced users only + SPF required"
    },
    triggers: {
      timeOfUse: "morning_advanced"
    },
    minConfidence: 0.85
  }
};

function getWarningsForProduct(product, metadata, userProfile = {}) {
  if (!metadata || metadata.confidence < 0.7) {
    return []; // Not confident enough
  }
  
  const warnings = [];
  
  Object.values(WARNING_TYPES).forEach(warningType => {
    const shouldShow = checkTriggers(warningType.triggers, metadata, product);
    
    if (shouldShow && metadata.confidence >= warningType.minConfidence) {
      warnings.push({
        type: warningType.type,
        severity: warningType.severity,
        icon: warningType.icon,
        message: formatMessage(warningType.message, metadata, product),
        confidence: metadata.confidence,
        sourceChemistry: metadata.chemistry,
        userLevel: userProfile.level || "beginner"
      });
    }
  });
  
  return warnings.filter(w => shouldShowToUser(w, userProfile));
}

function checkTriggers(triggers, metadata, product) {
  return Object.entries(triggers).every(([key, value]) => {
    if (key === "requiresSPFNextDay") {
      return metadata.requiresSPFNextDay === value;
    }
    if (key === "frequencyLimit") {
      return metadata.frequencyLimit === value;
    }
    if (key === "buildUpRequired") {
      return metadata.buildUpRequired === value;
    }
    if (key === "sensitiveArea") {
      return metadata.sensitiveArea === value;
    }
    if (key === "oxidationSensitive") {
      return metadata.oxidationSensitive === value;
    }
    if (key === "requiresRinse") {
      return metadata.requiresRinse === value;
    }
    if (key === "hasConflicts") {
      return (metadata.avoidSameRoutineTags || []).length > 0;
    }
    if (key === "timeOfUse") {
      return (metadata.timeOfUse || []).includes(value);
    }
    return false;
  });
}

function formatMessage(message, metadata, product) {
  let text = message.he; // Default to Hebrew
  
  // Replace placeholders
  if (text.includes("{minutes}") && metadata.rinseAfterMinutes) {
    text = text.replace("{minutes}", metadata.rinseAfterMinutes);
  }
  
  if (text.includes("{conflictType}")) {
    const conflicts = (metadata.avoidSameRoutineTags || []).join(', ');
    text = text.replace("{conflictType}", conflicts);
  }
  
  return text;
}

function shouldShowToUser(warning, userProfile) {
  const userLevel = userProfile.level || "beginner";
  
  // Always show high severity
  if (warning.severity === "high") {
    return true;
  }
  
  // Show medium severity to beginners and intermediate
  if (warning.severity === "medium" && ["beginner", "intermediate"].includes(userLevel)) {
    return true;
  }
  
  // Show low severity only to beginners
  if (warning.severity === "low" && userLevel === "beginner") {
    return true;
  }
  
  return false;
}

function getWarningsByType(warnings, type) {
  return warnings.filter(w => w.type === type);
}

function getHighestSeverityWarning(warnings) {
  const severityOrder = ["high", "medium", "low"];
  for (const severity of severityOrder) {
    const warning = warnings.find(w => w.severity === severity);
    if (warning) return warning;
  }
  return null;
}

module.exports = {
  WARNING_TYPES,
  getWarningsForProduct,
  getWarningsByType,
  getHighestSeverityWarning
};
