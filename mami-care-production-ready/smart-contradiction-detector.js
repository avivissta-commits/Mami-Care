// Smart Contradiction Detector - מזהה סתירות אמיתיות בלבד

function analyzeMention(text, keyword) {
  const lower = text.toLowerCase();
  
  // Negative mentions - "לא לערבב", "להימנע"
  const negativePatterns = [
    `לא ל${keyword}`,
    `להימנע מ${keyword}`,
    `לא לשלב עם ${keyword}`,
    `לא מערבבים אותו עם ${keyword}`,
    `במקום ${keyword}`,
    `בלי ${keyword}`
  ];
  
  for (const pattern of negativePatterns) {
    if (lower.includes(pattern)) {
      return "negative";  // זו אזהרה, לא המלצה
    }
  }
  
  // Positive mentions - "טוב ליד", "מומלץ עם", "במיוחד ליד"
  const positivePatterns = [
    `טוב ל${keyword}`,
    `טוב עם ${keyword}`,
    `מומלץ עם ${keyword}`,
    `במיוחד ליד ${keyword}`,
    `טוב ליד ${keyword}`,
    `משתלב עם ${keyword}`
  ];
  
  for (const pattern of positivePatterns) {
    if (lower.includes(pattern)) {
      return "positive";  // זו המלצה אמיתית
    }
  }
  
  // Caution mentions - "זהיר", "בהדרגה"
  const cautionPatterns = [
    `זהיר עם ${keyword}`,
    `להתחיל עם ${keyword}`,
    `בהדרגה ${keyword}`
  ];
  
  for (const pattern of cautionPatterns) {
    if (lower.includes(pattern)) {
      return "caution";  // זו זהירות, לא סתירה
    }
  }
  
  return "neutral";
}

function smartCheckContradictions(product, compatibleIngredients) {
  const contradictions = [];
  const desc = (product.simpleDesc || "").toLowerCase();
  
  // בדיקת רטינול
  const retinolMention = analyzeMention(desc, "רטינול");
  if (retinolMention === "positive") {
    // רק אם זה mention חיובי וזה חסר - זו סתירה
    if (!compatibleIngredients.some(ing => ing.includes("רטינול"))) {
      contradictions.push({
        type: "missing_positive_ingredient",
        ingredient: "רטינול",
        issue: "תיאור ממליץ על רטינול אבל הוא לא ברשימת 'משתלב טוב עם'",
        description: product.simpleDesc,
        compatible: compatibleIngredients
      });
    }
  }
  // אם זה negative או caution - לא סתירה!
  
  // בדיקת חומצות
  const acidMention = analyzeMention(desc, "חומצ");
  if (acidMention === "positive") {
    if (!compatibleIngredients.some(ing => ing.includes("חומצ"))) {
      contradictions.push({
        type: "missing_positive_ingredient",
        ingredient: "חומצות",
        issue: "תיאור ממליץ על חומצות אבל הן לא ברשימת 'משתלב טוב עם'",
        description: product.simpleDesc,
        compatible: compatibleIngredients
      });
    }
  }
  
  return contradictions;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { analyzeMention, smartCheckContradictions };
}

// Test cases
console.log("Testing mention analyzer:");
console.log("1. 'טוב ליד רטינול' →", analyzeMention("טוב ליד רטינול", "רטינול"));
console.log("2. 'לא לערבב עם רטינול' →", analyzeMention("לא לערבב עם רטינול", "רטינול"));
console.log("3. 'במקום רטינול' →", analyzeMention("במקום רטינול", "רטינול"));
console.log("4. 'זהיר עם רטינול' →", analyzeMention("זהיר עם רטינול", "רטינול"));
console.log("✅ Smart detector ready!");
