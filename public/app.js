const products = [
  product("1", "COSRX", "AHA/BHA Clarifying Treatment Toner", "Toner", ["בוקר", "ערב"], "טיפול אינטנסיבי", ["AHA", "BHA", "מי ערבה/תפוח"], ["אקנה", "נקבוביות", "החלקת טקסטורה"], "טונר חומצות עדין לניקוי נקבוביות והחלקת מרקם. מאמי, זה מוצר פעיל ולכן לא מערבבים אותו עם רטינול או עוד חומצות באותה שגרה.", ["חומצות = חובה קרם הגנה ביום."], ["acid", "exfoliant", "pore", "acne", "texture", "oily", "strong", "spfRequired"], ["3", "13", "14", "16", "18", "19", "30", "31"], ["7", "11", "12", "15", "20", "21", "22", "25", "27", "28", "29", "32"], {
    workflowType: "active",
    routinePosition: "toner",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("2", "COSRX", "The 6 Peptide Skin Booster", "Essence", ["בוקר", "ערב"], "טיפול קליל", ["פפטידים", "חומצה היאלורונית", "NAG"], ["אנטי אייג׳ינג", "חיזוק מחסום עור", "לחות"], "בוסטר פפטידים שנותן בסיס נעים, לחות ותחושת עור יותר מלא. מתאים כמעט לכל שגרה.", [], ["peptides", "hydration", "barrier", "antiaging", "glow", "light"], ["9", "25", "18", "13", "12"], []),
  product("3", "Pyunkang Yul", "Essence Toner", "Toner", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["Astragalus Root Extract"], ["עור רגיש", "הרגעה", "לחות"], "טונר לחות מרגיע. מצוין כשצריך להכין את העור לפני פעילים או להוריד אדמומיות.", [], ["hydration", "soothing", "barrier", "sensitive", "redness", "light"], ["18", "16", "31", "30", "14"], []),
  product("4", "Advanced Clinicals", "Collagen Instant Plumping Serum", "Serum", ["בוקר", "ערב"], "טיפול קליל", ["Collagen", "Aloe Vera", "Soy Extract"], ["מראה מלא", "לחות", "קמטוטים"], "סרום קולגן לפלאמפ, לחות ומראה עור רך יותר. בחירה נעימה לשגרה מזינה.", [], ["collagen", "peptides", "hydration", "plump", "antiaging", "glow", "light"], ["2", "9", "18", "31", "30"], []),
  product("5", "Cetaphil", "Hydrating Eye Gel-Cream", "Eye Cream", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["חומצה היאלורונית", "ויטמינים"], ["עור רגיש", "לחות לעיניים", "יובש"], "קרם-ג׳ל עיניים עדין ומלחח. מתאים כמעט תמיד, במיוחד כשאזור העיניים רגיש.", [], ["eye", "hydration", "soothing", "sensitive", "light"], ["7", "6", "8", "16"], []),
  product("6", "Advanced Clinicals", "Complete 5-in-1 Eye Serum", "Eye Cream", ["בוקר", "ערב"], "טיפול קליל", ["לחויות", "רכיבי אנטי אייג׳ינג"], ["קמטוטים", "נפיחות", "עייפות"], "סרום עיניים לעייפות, נפיחות וקמטוטים עדינים.", [], ["eye", "hydration", "puffiness", "antiaging", "light"], ["5", "8", "18"], ["7"]),
  product("7", "Beauty of Joseon", "Revive Eye Serum (Ginseng + Retinal)", "Eye Cream", ["בוקר", "לילה"], "טיפול אינטנסיבי", ["Retinal", "Ginseng"], ["קמטוטים", "אנטי אייג׳ינג", "עיניים"], "סרום עיניים עם רטינל. מומלץ בלילה, אפשר גם בבוקר למתקדמות.", ["רטינל = חובה קרם הגנה ביום.", "מומלץ להתחיל בלילה 2-3 פעמים בשבוע."], ["eye", "retinoid", "antiaging", "texture", "strong", "spfRequired"], ["3", "5", "16", "18", "31"], ["1", "6", "8", "11", "12", "15", "19", "20", "21", "22", "27", "28", "29", "32"], {
    workflowType: "active",
    routinePosition: "eye",
    frequencyLimit: "2-3x_week",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("8", "Advanced Clinicals", "Dark Circle Eye Serum", "Eye Cream", ["בוקר", "ערב"], "טיפול קליל", ["Vitamin C", "Caffeine", "Vitamin E"], ["כהויות", "עייפות", "הבהרה"], "סרום עיניים לכהויות ולמראה עירני יותר.", [], ["eye", "vitaminC", "brightening", "puffiness", "light"], ["5", "6", "3"], ["7"]),
  product("9", "Advanced Clinicals", "Niacinamide Serum", "Serum", ["בוקר", "ערב"], "טיפול קליל", ["Niacinamide", "Ferulic Acid", "Hyaluronic Acid"], ["נקבוביות", "שומניות", "הבהרה"], "סרום ניאצינמיד לאיזון שומניות, נקבוביות ואדמומיות.", [], ["niacinamide", "pore", "oily", "brightening", "barrier", "light"], ["2", "18", "25", "13", "4"], []),
  product("10", "medicube", "PDRN Pink Peptide Serum", "Serum", ["בוקר", "ערב"], "טיפול קליל", ["PDRN/Peptides", "רכיבי לחות"], ["זוהר", "שיקום", "אנטי אייג׳ינג עדין"], "סרום ורוד לזוהר, לחות ושיקום עדין. טוב כשבא לך גלואו בלי להעמיס.", [], ["peptides", "glow", "hydration", "barrier", "antiaging", "light"], ["18", "2", "25", "31", "13"], []),
  product("11", "RS", "Retinol 2.5 Serum", "Serum", ["לילה"], "טיפול אינטנסיבי", ["Retinol", "Hyaluronic Acid", "Vitamin E"], ["אנטי אייג׳ינג", "פצעונים", "טקסטורה"], "סרום רטינול חזק. מאמי, זה מוצר לילה שמצריך שגרה נקייה ועדינה מסביב.", ["רטינול = חובה קרם הגנה ביום.", "להתחיל 2-3 פעמים בשבוע."], ["retinoid", "antiaging", "acne", "texture", "strong", "spfRequired"], ["3", "12", "13", "14", "16", "18", "30", "31"], ["1", "7", "8", "15", "19", "20", "21", "22", "27", "28", "29", "32"], {
    workflowType: "active",
    routinePosition: "serum",
    frequencyLimit: "2-3x_week",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("12", "Advanced Clinicals", "Retinol Serum", "Serum", ["לילה"], "טיפול אינטנסיבי", ["Retinol", "Aloe Vera", "Green Tea"], ["קמטוטים", "טקסטורה", "אנטי אייג׳ינג"], "סרום רטינול עדין יותר, אבל עדיין פעיל. מתאים ללילה עם לחות ושיקום.", ["רטינול = חובה קרם הגנה ביום."], ["retinoid", "antiaging", "texture", "strong", "spfRequired"], ["2", "3", "11", "13", "14", "16", "18", "26"], ["1", "7", "8", "15", "19", "20", "21", "22", "27", "32"], {
    workflowType: "active",
    routinePosition: "serum",
    frequencyLimit: "2-3x_week",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("13", "Beauty of Joseon", "Dynasty Cream", "Cream", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["Rice", "Ginseng", "Squalane"], ["לחות", "זוהר", "עור יבש"], "קרם לחות עשיר וזוהר, סוגר יפה שגרות בוקר וערב.", [], ["cream", "hydration", "barrier", "glow", "rich", "light"], ["18", "25", "15", "11", "1"], []),
  product("14", "COSRX", "Advanced Snail 92 All in One Cream", "Cream", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["Snail Mucin 92%"], ["שיקום מחסום עור", "לחות", "עור מגורה"], "קרם חלזון משקם. מצוין אחרי פעילים, אדמומיות או יובש.", [], ["cream", "snail", "hydration", "barrier", "redness", "soothing", "light"], ["11", "1", "18", "16", "27"], []),
  product("15", "Advanced Clinicals", "Vitamin C Serum", "Serum", ["בוקר", "ערב"], "טיפול קליל", ["Vitamin C", "Ferulic Acid", "לחויות"], ["כתמים", "זוהר", "אנטי אייג׳ינג"], "סרום ויטמין C להבהרה וגלואו. אפשר בוקר או ערב, חובה SPF למחרת.", ["ויטמין C + חובה קרם הגנה ביום."], ["vitaminC", "brightening", "spots", "glow", "antiaging", "spfRequired", "light"], ["4", "9", "13", "18", "25", "26", "31"], ["1", "7", "11", "12", "19", "20", "21", "22", "27", "32"], {
    workflowType: "active",
    routinePosition: "serum",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid"]
  }),
  product("16", "Kamedis", "Bio Balance Barrier Protect Serum", "Serum", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["רכיבי הרגעה", "לחויות"], ["עור רגיש", "שיקום", "אדמומיות"], "סרום מחסום עור מרגיע. טוב כמעט עם הכל, במיוחד ליד רטינול וחומצות.", [], ["barrier", "soothing", "hydration", "sensitive", "redness", "light"], ["11", "1", "18", "31", "30"], []),
  product("17", "Jason", "Vitamin E Skin Oil", "Oil", ["ערב", "לילה"], "טיפול מזין", ["Vitamin E", "שמנים מזינים"], ["יובש קיצוני", "הזנה", "קילופים"], "שמן ויטמין E מזין. מתאים כשיבש מאוד, פחות כשיש נטייה לפצעונים.", [], ["oil", "vitaminE", "dry", "nourishing", "rich"], ["31", "30", "13", "26"], []),
  product("18", "COSRX", "Advanced Snail 96 Mucin Power Essence", "Essence", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["Snail Mucin 96%"], ["שיקום עור", "לחות מוגברת", "אדמומיות"], "אסנס חלזון משקם ומלחח. אחד המוצרים הכי גמישים בארון שלך.", [], ["essence", "snail", "hydration", "barrier", "redness", "soothing", "light"], ["1", "12", "25", "10", "13"], []),
  product("19", "SOME BY MI", "AHA BHA PHA Miracle Toner", "Toner", ["ערב", "לילה"], "טיפול אינטנסיבי", ["AHA", "BHA", "PHA"], ["אקנה", "נקבוביות", "החלקת עור"], "טונר חומצות מסדרת Miracle. בוחרים אותו במקום חומצות אחרות או רטינול.", ["חומצות = חובה קרם הגנה ביום."], ["acid", "exfoliant", "acne", "pore", "texture", "miracle", "strong", "spfRequired"], ["1", "3", "14", "16", "18", "31"], ["7", "11", "12", "15", "20", "21", "22", "27", "29", "32"], {
    workflowType: "active",
    routinePosition: "toner",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("20", "SOME BY MI", "Miracle Serum", "Serum", ["ערב", "לילה"], "טיפול אינטנסיבי", ["AHA/BHA/PHA", "Tea Tree"], ["אקנה", "נקבוביות", "שומניות"], "סרום חומצות טיפולי לפצעונים ושומניות. לא לערבב עם רטינול או חומצות נוספות.", ["חובה קרם הגנה."], ["acid", "exfoliant", "acne", "oily", "texture", "miracle", "teaTree", "strong", "spfRequired"], ["14", "16", "18", "31"], ["1", "7", "11", "12", "15", "19", "21", "22", "27", "32"], {
    workflowType: "active",
    routinePosition: "serum",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("21", "SOME BY MI", "Miracle Cream", "Cream", ["ערב", "לילה"], "טיפול אינטנסיבי", ["AHA/BHA/PHA", "Centella", "Tea Tree"], ["פצעונים", "אדמומיות", "טקסטורה"], "קרם טיפולי מסדרת Miracle. מתאים כשבונים ערב אקנה בלי רטינול.", ["חובה קרם הגנה."], ["acid", "cream", "acne", "redness", "texture", "miracle", "centella", "strong", "spfRequired"], ["16", "18", "31"], ["1", "7", "11", "12", "15", "19", "20", "22", "27", "32"], {
    workflowType: "active",
    routinePosition: "moisturizer",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid", "vitaminC"]
  }),
  product("22", "SOME BY MI", "Miracle Spot Treatment", "Spot Treatment", ["ערב", "לילה"], "טיפול אינטנסיבי", ["AHA/BHA/PHA", "Tea Tree"], ["פצעון נקודתי", "אקנה", "אדמומיות"], "טיפול נקודתי לפצעון. רק על האזור, לא על כל הפנים.", ["חובה קרם הגנה."], ["acid", "spot", "acne", "redness", "miracle", "teaTree", "strong", "spfRequired"], ["16", "18", "31"], ["1", "7", "11", "12", "15", "19", "20", "21", "27", "32"], {
    workflowType: "active",
    routinePosition: "spot",
    frequencyLimit: "daily_or_spot",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid"]
  }),
  product("23", "Biodance", "Collagen Real Deep Mask", "Mask", ["ערב", "לילה"], "טיפול מזין", ["Collagen", "רכיבי לחות"], ["לחות מוגברת", "זוהר", "עור עייף"], "מסכת קולגן להזנה ולחות. מתאימה לערב רגוע, וגם אחרי פעיל אם העור לא מגורה.", [], ["mask", "collagen", "hydration", "glow", "plump", "nourishing"], ["4", "18", "25", "31"], [], {
    workflowType: "overnight_mask",
    routinePosition: "last",
    requiresRinse: false,
    endsRoutine: true,
    canReplaceMoisturizer: true
  }),
  product("24", "NOW Foods", "Vegetable Glycerin", "Mixer", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["Glycerin"], ["לחות", "יובש", "חיזוק קרם"], "גליצרין צמחי ללחות. מערבבים טיפה עם קרם/מים/סרום, לא משתמשים נקי בכמות גדולה.", ["לא להשתמש נקי בכמות גדולה."], ["hydration", "mixer", "glycerin", "humectant", "barrier", "light"], ["31", "30", "13", "26"], []),
  product("25", "AXIS-Y", "Dark Spot Correcting Glow Serum", "Serum", ["בוקר", "ערב"], "טיפול קליל", ["Niacinamide 5%", "Squalane", "רכיבי הרגעה צמחיים"], ["כתמי פוסט אקנה", "הבהרה", "עור רגיש"], "סרום להבהרת כתמים והרגעת העור. טוב לזוהר בלי ללכת על חומצות חזקות.", [], ["niacinamide", "squalane", "brightening", "spots", "sensitive", "redness", "glow", "light"], ["18", "2", "13", "16", "31"], ["1"]),
  product("26", "Advanced Clinicals", "Collagen Skin Rescue Cream", "Cream", ["בוקר", "ערב", "לילה"], "טיפול מזין", ["Collagen", "Aloe Vera", "Green Tea"], ["לחות מוגברת", "מיצוק", "יובש"], "קרם קולגן גדול ללחות ומיצוק. מתאים כסגירה עשירה לשגרה.", [], ["cream", "collagen", "hydration", "firming", "dry", "rich"], ["4", "12", "15", "9", "31"], []),
  product("27", "CeraVe", "Blemish Control Gel", "Spot Treatment", ["ערב", "לילה"], "טיפול אינטנסיבי", ["AHA", "BHA/Salicylic Acid", "Ceramides"], ["אקנה", "שחורים", "נקבוביות"], "ג׳ל טיפולי לפצעונים, שחורים וטקסטורה. להשתמש כמו פעיל חומצות.", ["חובה קרם הגנה.", "לא לשלב עם רטינול או חומצות אחרות."], ["acid", "acne", "pore", "texture", "ceramides", "strong", "spfRequired"], ["14", "16", "18", "30", "31", "32"], ["1", "7", "11", "12", "15"], {
    workflowType: "active",
    routinePosition: "spot",
    frequencyLimit: "daily_or_spot",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid"]
  }),
  product("28", "Beauty of Joseon", "Red Bean Refreshing Pore Mask", "Mask", ["ערב", "לילה"], "טיפול קליל", ["Red Bean", "Kaolin Clay"], ["נקבוביות", "שומניות", "ניקוי עדין"], "מסכת נקבוביות וניקוי עדין. טובה לעור שומני כשלא רוצים חומצות חזקות.", [], ["mask", "clay", "pore", "oily", "soothing", "light"], ["13", "16", "18", "29", "31"], [], {
    workflowType: "wash_off_mask",
    routinePosition: "after_cleanser",
    requiresRinse: true,
    rinseAfterMinutes: 10,
    endsRoutine: false
  }),
  product("29", "L’Oréal", "Pure Clay Detox Mask", "Mask", ["ערב", "לילה"], "טיפול אינטנסיבי", ["Clay", "Charcoal"], ["ניקוי עמוק", "שומניות", "שחורים"], "מסכת חימר לניקוי עמוק. מאמי, לא לערבב עם ערב רטינול/חומצות אם העור רגיש.", [], ["mask", "clay", "charcoal", "oily", "pore", "strong"], ["18", "31", "30", "16"], ["11", "1", "19"]),
  product("30", "Eucerin", "Face Daily Care", "Cream", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["רכיבי לחות עדינים"], ["עור רגיש", "לחות", "מחסום עור"], "קרם פנים עדין. עובד כמעט עם הכל וסוגר שגרות פעילות בצורה רגועה.", [], ["cream", "hydration", "barrier", "sensitive", "light"], ["11", "1", "16", "18", "9"], []),
  product("31", "Idealove", "Super Supple Moisturizing Cream", "Cream", ["בוקר", "ערב", "לילה"], "טיפול קליל", ["רכיבי לחות ושיקום"], ["עור רגיש", "שיקום", "לחות בסיסית"], "קרם לחות בסיסי ומרגיע. מושלם כשצריך משהו פשוט שעושה עבודה.", [], ["cream", "hydration", "barrier", "sensitive", "soothing", "light"], ["11", "1", "16", "18", "25"], []),
  product("32", "Dermalosophy", "ACN.E Bio Triple Gel", "Spot Treatment", ["ערב", "לילה"], "טיפול אינטנסיבי", ["חומצות טיפוליות", "רכיבים אנטי בקטריאליים"], ["אקנה פעיל", "טיפול נקודתי", "שומניות"], "טיפול אקנה ממוקד וחזק. לבחור אותו במקום רטינול או חומצות אחרות.", ["חובה קרם הגנה."], ["acid", "acne", "spot", "oily", "strong", "spfRequired"], ["16", "18", "27", "30", "31"], ["7", "11", "12", "15", "19", "20", "21"], {
    workflowType: "active",
    routinePosition: "spot",
    frequencyLimit: "daily_or_spot",
    requiresSPFNextDay: true,
    avoidSameRoutineTags: ["retinoid", "acid"]
  }),
];

const tips = [
  "💧 להתחיל תמיד ממרקם קליל למרקם עשיר — טונר, סרום, קרם ואז שמן אם צריך. העור אוהב סדר ✨",
  "☀️ מקדם הגנה זה לא רק לקיץ — גם בחורף, בבית וליד חלון. SPF הוא החבר הכי טוב של העור שלך 🤍",
  "💤 שינה טובה = עור שמח יותר. 7-9 שעות שינה יכולות לעשות יותר מכל סרום יקר 😴",
  "🚰 לשתות מספיק מים במהלך היום עוזר לעור להיראות חיוני, רגוע וזוהר ✨",
  "🫶 לא צריך 10 חומצות ביחד כדי שהעור יעבוד — לפעמים דווקא שגרה פשוטה ועדינה עושה קסמים.",
  "🧴 כשמורחים סרום או קרם — לא לשפשף חזק. ללחוץ בעדינות על העור כאילו אתה מפנק אותו 💕",
  "🧼 לנקות פנים בעדינות — עור נקי זה חשוב, אבל נקי מדי יכול לגרות ולייבש.",
  "🌙 רטינול וחומצות אוהבים את הלילה. השמש פחות אוהבת אותם 😌",
  "🍓 תזונה טובה משפיעה גם על העור — ירקות, פירות וחלבון יכולים לעזור לזוהר טבעי מבפנים.",
  "🛏️ להחליף ציפית לפחות פעם בשבוע. העור שלך יודה לך על זה 🫧",
  "✨ אם מוצר חדש עושה גירוי — לעצור, להרגיע ולתת לעור לנוח. לא חייבים לסבול בשביל היופי.",
  "🧖 מסכות זה לא מבחן סיבולת — בדרך כלל 10-15 דקות מספיקות, אלא אם כתוב אחרת 😴",
  "🤍 שגרת טיפוח טובה היא עקבית, לא אגרסיבית. עדיף קצת כל יום מאשר להגזים פעם בשבוע.",
  "🫧 עור יבש לא תמיד צריך עוד חומצות — לפעמים הוא פשוט מבקש יותר לחות והרגעה.",
  "☕ פחות סטרס, יותר טיפוח עצמי. גם 10 דקות שקט עם שגרה נעימה יכולות לעשות פלאים לעור ולמצב רוח 💆",
];

const feelings = [
  { id: "red", icon: "🔴", label: "אדמומי", desc: "שגרה מרגיעה בלי עומס פעילים.", prefer: ["redness", "soothing", "hydration", "barrier", "sensitive"], avoid: ["retinoid", "acid", "strong"] },
  { id: "breakouts", icon: "🫧", label: "יש לי פצעונים", desc: "ניקוי עדין, איזון ותמיכה.", prefer: ["acne", "spot", "niacinamide", "pore", "barrier"], avoid: ["retinoid"] },
  { id: "spot-treatment", icon: "🎯", label: "חצ'קון", desc: "טיפול נקודתי לפצעון פעיל.", prefer: ["spot", "acne"], avoid: ["retinoid"], preferredProductId: "32" },
  { id: "spots", icon: "🟤", label: "כתמים", desc: "הבהרה עדינה וזוהר.", prefer: ["brightening", "spots", "vitaminC", "niacinamide"], avoid: ["retinoid"] },
  { id: "dry", icon: "🍂", label: "יבש ומתוח", desc: "לחות, קרם ושיקום מחסום עור.", prefer: ["hydration", "barrier", "collagen", "cream", "snail"], avoid: ["acid", "retinoid", "strong"] },
  { id: "sensitive", icon: "🪶", label: "רגיש", desc: "מינימום גירוי, מקסימום רוגע.", prefer: ["sensitive", "soothing", "barrier", "hydration"], avoid: ["acid", "retinoid", "strong", "clay"] },
  { id: "oily", icon: "💧", label: "שומני / נקבוביות", desc: "איזון בלי לייבש.", prefer: ["pore", "oily", "niacinamide", "clay"], avoid: ["oil", "rich"] },
  { id: "glow", icon: "🌟", label: "רוצה זוהר", desc: "גלואו, קולגן ופפטידים.", prefer: ["glow", "collagen", "peptides", "brightening"], avoid: [] },
  { id: "antiaging", icon: "♻️", label: "אנטי אייג׳ינג", desc: "פפטידים או רטינול כשזה מתאים.", prefer: ["antiaging", "retinoid", "peptides", "collagen"], avoid: [] },
];

const routineSlots = [
  { id: "בוקר", icon: "☀️", action: "שגרת טיפוח לבוקר", alternative: "אני מעדיף שגרת בוקר" },
  { id: "צהריים", icon: "🌞", action: "שגרת טיפוח לצהריים", alternative: "אני מעדיף שגרה לצהריים" },
  { id: "ערב", icon: "✨", action: "שגרת טיפוח לערב", alternative: "אני מעדיף שגרה לערב" },
  { id: "לילה", icon: "🌙", action: "שגרת טיפוח לפני השינה", alternative: "אני מעדיף שגרת לילה" },
];

const typeLabels = {
  Toner: "טונר",
  Essence: "אסנס",
  Serum: "סרום",
  "Eye Cream": "קרם עיניים",
  Cream: "קרם פנים",
  Oil: "שמן",
  Mask: "מסיכה",
  "Spot Treatment": "טיפול נקודתי",
  Mixer: "תוסף לחות",
  SPF: "מקדם הגנה",
};

const filterTags = [
  ["acid", "חומצות"],
  ["retinoid", "רטינול"],
  ["vitaminC", "ויטמין C"],
  ["niacinamide", "ניאצינמיד"],
  ["hydration", "לחות"],
  ["barrier", "שיקום"],
  ["acne", "אקנה"],
  ["brightening", "כתמים"],
  ["sensitive", "עור רגיש"],
  ["mask", "מסיכות"],
];

const completionMessages = [
  "מאמי…איזה גלואו!",
  "זהו מאמי, העור שלך אומר תודה!",
  "זהו מאמי 😌 העור שלך מסודר",
  "הפנים שלך עכשיו אחרי ספא קטן 😌",
  "שגרה הסתיימה. רמת חתיך עלתה ⬆️",
  "יפה לך לדאוג לעצמך, מאמי"
];

// הצעות רומנטיות למצב זוגי - עם אימוג'ים
const coupleSuggestions = [
  { emoji: "💆‍♂️", text: "המשיכו פינוק של דודו או מסאג׳" },
  { emoji: "💕", text: "ספרו אחד לשני 5 דברים שאתם אוהבים במאמי" },
  { emoji: "👀", text: "החזיקו ידיים והסתכלו אחד לשני בעיניים" },
  { emoji: "🤗", text: "חיבוק ארוך בלי לדבר" },
  { emoji: "✨", text: "כל אחד נותן מחמאה שלא אמר אף פעם" },
  { emoji: "💋", text: "נשיקה על כל אצבע" },
  { emoji: "💭", text: "כל אחד אומר זיכרון קטן שהוא אוהב מהקשר" },
  { emoji: "☕", text: "להכין אחד לשני תה" },
  { emoji: "📝", text: "כל אחד כותב פתק קטן עם \"דייט שהייתי רוצה\" לשבוע הקרוב" },
  { emoji: "🌟", text: "תספרו על רגע קטן שעשה לכם טוב השבוע" },
  { emoji: "💬", text: "ספרו אחד לשני משהו שלא אמרתם מספיק" },
  { emoji: "🙏", text: "תגידו תודה על משהו קטן שהשני עושה" },
  { emoji: "🏠", text: "תגידו מה גורם לבית להרגיש בית" },
  { emoji: "☀️", text: "כל אחד אומר משהו קטן שהוא אוהב בשגרה שלכם" },
  { emoji: "💇", text: "לטפו אחד לשני את השיער בזמן שיר רגוע" },
  { emoji: "❤️", text: "כל אחד אומר מה הוא הכי מעריך בקשר" },
  { emoji: "😊", text: "ספרו אחד לשני למה הוא חמוד" },
  { emoji: "💝", text: "תגידו מחמאה למאמי שלכם" },
  { emoji: "📸", text: "תעשו סלפי עם המסיכה. גם אם זה מביך." }
];

const photoProductIds = new Set(products.map((item) => item.id));

const state = {
  showSplash: true,
  view: "home",
  favoritesTab: "routines",  // "routines" | "products"
  timeOfDay: getInitialTimeOfDay(),
  feeling: "glow",
  feelingExplicitlySelected: false,
  includeMask: false,
  coupleMode: false,
  requestedSteps: 4,
  routineType: "balanced",
  routinePace: 2,
  routineRoute: "regular",
  routineFlow: "wizard",
  routineTimeLocked: false,
  preferredProductId: null,
  selectedFavoriteProductId: null,  // מוצר שנבחר מהמועדפים
  wizardStep: 0,
  routineLoading: false,
  showRoutineChoices: false,
  selectedProductId: null,
  searchQuery: "",
  showFilters: false,
  filterTypes: [],
  filterTags: [],
  filterBrands: [],
  tipIndex: Math.floor(Math.random() * tips.length),
  favorites: loadFavorites(),
  savedRoutines: loadSavedRoutines(),  // שגרות טיפוח שמורות
  favoritePulseId: null,
  quietRender: false,
  completedSteps: new Set(),
  routineNonce: Date.now(),
  showWeatherPopover: false,
  coupleStep: 0,
  showCompletionModal: false,
  completionMessage: "",
  showProductReplacement: false,
  productToReplace: null,
  selectedReplacement: null,
  replacementMessage: null,
  paceChangeMessage: null,
  routineOverrides: {},  // { oldProductId: newProductId }
  couplePlan: null,
  coupleTimerActive: false,
  coupleTimerSeconds: 0,
  coupleTimerInterval: null,
  coupleSelectedTimerMinutes: null,  // הזמן שנבחר בפועל
  coupleSuggestionIndex: 0,
  coupleSuggestionsShown: [],  // רשימת משימות שכבר הוצגו בסבב הנוכחי
  coupleProductReplacement: null,
  weather: {
    temp: 27,
    location: "אזור המרכז",
    uv: 6,
    uvTomorrow: 6,
    description: "נעים ובהיר",
  },
  clock: "",
};

let searchRenderTimer = null;
let routineLoadingTimer = null;

function product(id, brand, name, type, time, intensity, ingredients, goodFor, simpleDesc, warnings, tags, goodIds = [], badIds = [], workflow = {}) {
  return { 
    id, brand, name, type, time, intensity, ingredients, goodFor, simpleDesc, warnings, tags, goodIds, badIds,
    workflow: {
      workflowType: workflow.workflowType || "leave_on",
      routinePosition: workflow.routinePosition || getDefaultPosition(type),
      requiresRinse: workflow.requiresRinse || false,
      rinseAfterMinutes: workflow.rinseAfterMinutes || null,
      endsRoutine: workflow.endsRoutine || false,
      canReplaceMoisturizer: workflow.canReplaceMoisturizer || false,
      frequencyLimit: workflow.frequencyLimit || null,
      requiresSPFNextDay: workflow.requiresSPFNextDay || tags.includes("spfRequired"),
      avoidSameRoutineTags: workflow.avoidSameRoutineTags || []
    }
  };
}

function getDefaultPosition(type) {
  const positionMap = {
    "Cleanser": "after_cleanser",
    "Toner": "toner",
    "Essence": "essence",
    "Serum": "serum",
    "Eye Cream": "eye",
    "Cream": "moisturizer",
    "Mask": "last",
    "SPF": "last",
    "Spot Treatment": "spot",
    "Oil": "last",
    "Mixer": "mixed_into_product"
  };
  return positionMap[type] || "serum";
}

function getInitialTimeOfDay() {
  return getClockPeriod();
}

function getCurrentRoutineTimeOfDay() {
  return getInitialTimeOfDay();
}

function getClockPeriod() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "בוקר";
  if (hour >= 12 && hour < 18) return "צהריים";
  if (hour >= 18 && hour < 22) return "ערב";
  return "לילה";
}

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem("mami-care-favorites-v3") || "[]");
    return stored.filter((id) => products.some((product) => product.id === id));
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem("mami-care-favorites-v3", JSON.stringify(state.favorites));
}

function loadSavedRoutines() {
  try {
    const stored = JSON.parse(localStorage.getItem("mami-care-saved-routines-v1") || "[]");
    return stored;
  } catch {
    return [];
  }
}

function saveSavedRoutines() {
  localStorage.setItem("mami-care-saved-routines-v1", JSON.stringify(state.savedRoutines));
}

function getProduct(id) {
  return products.find((product) => product.id === String(id));
}

function tagsFor(product) {
  return product?.tags || [];
}

function hasTag(product, tag) {
  return tagsFor(product).includes(tag);
}

function isDayRoutine(timeOfDay = state.timeOfDay) {
  return timeOfDay === "בוקר" || timeOfDay === "צהריים";
}

function productMatchesTime(product, timeOfDay) {
  if (!product) return false;
  if (product.time.includes(timeOfDay)) return true;
  
  // ✅ בוקר ↔ צהריים: צהריים מקבל מוצרי בוקר (ללא retinol/mask)
  if (timeOfDay === "צהריים") {
    return product.time.includes("בוקר") && 
           !hasTag(product, "retinoid") && 
           product.type !== "Mask";
  }
  
  // ✅ ערב ↔ לילה: אותה משפחת מוצרים (bidirectional)
  if (timeOfDay === "ערב") {
    return product.time.includes("לילה");
  }
  if (timeOfDay === "לילה") {
    return product.time.includes("ערב");
  }
  
  return false;
}

function getGreeting() {
  const period = getClockPeriod();
  if (period === "בוקר") return "היי מאמי, בוקר טוב";
  if (period === "צהריים") return "היי מאמי, צהריים טובים";
  if (period === "ערב") return "היי מאמי, ערב טוב";
  return "היי מאמי, לילה טוב";
}

function getGreetingLines() {
  const period = getClockPeriod();
  const secondLine = period === "אחה״צ" || period === "צהריים" ? `${period} טובים` : `${period} טוב`;
  return ["היי מאמי,", secondLine];
}

function getHomeCharacter() {
  const period = getClockPeriod();
  const characters = {
    "בוקר": "./assets/brand/character-morning.png",
    "צהריים": "./assets/brand/character-noon.png",
    "ערב": "./assets/brand/character-evening.png",
    "לילה": "./assets/brand/character-night.png",
  };
  return characters[period] || characters["ערב"];
}

function getRoutineSlot(timeOfDay = state.timeOfDay) {
  return routineSlots.find((slot) => slot.id === timeOfDay) || routineSlots[0];
}

function getFutureRoutineSlots(timeOfDay = state.timeOfDay) {
  const currentIndex = routineSlots.findIndex((slot) => slot.id === timeOfDay);
  return currentIndex < 0 ? routineSlots.slice(1) : routineSlots.slice(currentIndex + 1);
}

function getFeeling(id = state.feeling) {
  return feelings.find((feeling) => feeling.id === id) || feelings[0];
}

function friendlyType(type) {
  return typeLabels[type] || type;
}

function productImagePath(product) {
  if (product.id === "spf") return "./assets/products/spf.svg";
  if (photoProductIds.has(product.id)) return `./assets/products/product-${String(product.id).padStart(2, "0")}.png`;
  return `./assets/products/product-${String(product.id).padStart(2, "0")}.svg`;
}

function renderProductImage(product, className = "product-thumb") {
  const isLarge = className.includes("product-thumb-large");
  return el("div", { 
    className,
    style: isLarge ? "width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; margin: 0 auto;" : ""
  }, [
    el("img", { 
      src: productImagePath(product), 
      alt: `${product.brand} ${product.name}`, 
      loading: "lazy",
      style: isLarge ? "max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" : ""
    }),
  ]);
}

function highlightedTags(product) {
  const tags = product.goodFor?.length ? product.goodFor : [friendlyType(product.type)];
  return tags.slice(0, 3);
}

function isStrongAcid(product) {
  return hasTag(product, "acid") && hasTag(product, "strong");
}

function detectConflict(a, b, feelingId = state.feeling) {
  if (!a || !b || a.id === b.id) return "";
  const aTags = tagsFor(a);
  const bTags = tagsFor(b);
  const feeling = getFeeling(feelingId);

  // קונפליקטים קיימים
  if (aTags.includes("retinoid") && bTags.includes("retinoid")) return "לא משלבים כמה מוצרי רטינול/רטינל באותה שגרה.";
  if ((aTags.includes("retinoid") && bTags.includes("acid")) || (aTags.includes("acid") && bTags.includes("retinoid"))) return "רטינול וחומצות לא נכנסים יחד באותה שגרה.";
  if (isStrongAcid(a) && isStrongAcid(b)) return "מספיק מוצר חומצות חזק אחד בשגרה.";
  if ((aTags.includes("retinoid") && bTags.includes("vitaminC")) || (aTags.includes("vitaminC") && bTags.includes("retinoid"))) return "ויטמין C חזק ורטינול עדיף להפריד.";
  if ((aTags.includes("spot") && bTags.includes("acid")) || (aTags.includes("acid") && bTags.includes("spot"))) return "טיפול אקנה פעיל עם עוד חומצות עלול להיות יותר מדי.";
  if (feeling.id === "sensitive" && ((aTags.includes("clay") && (bTags.includes("acid") || bTags.includes("retinoid"))) || (bTags.includes("clay") && (aTags.includes("acid") || aTags.includes("retinoid"))))) return "לעור רגיש לא משלבים מסכת חימר עם רטינול/חומצות.";
  
  // קונפליקטים חדשים - חשובים!
  
  // מספר exfoliants ביחד
  if (aTags.includes("acid") && bTags.includes("acid") && a.type !== b.type) return "מספיק מוצר חומצות אחד בשגרה.";
  
  // מספר מוצרי אקנה פעילים
  if (aTags.includes("spot") && bTags.includes("spot")) return "מוצר אקנה אחד מספיק לשגרה.";
  
  // יותר מדי מוצרי עיניים
  if (a.type === "Eye Cream" && b.type === "Eye Cream") return "מוצר עיניים אחד מספיק.";
  
  // מסכת חימר + עור יבש
  if (feeling.id === "dry" && (aTags.includes("clay") || bTags.includes("clay"))) return "מסכות חימר עלולות לייבש עור יבש.";
  
  return "";
}

function isSafeAddition(product, selected, feelingId = state.feeling, context = null) {
  // ✅ CRITICAL: מניעת כפילות של אותו מוצר (לפי ID)
  // אותו product.id לא יכול להופיע פעמיים!
  if (selected.some(item => item.id === product.id)) {
    return false;  // המוצר כבר קיים בשגרה
  }
  
  // ✅ מניעת כפילויות של slots בסיסיים
  // מוצרים אלו מייצגים slots פיזיים בשגרה - רק אחד מכל סוג
  const singleSlotTypes = ["Toner", "Cream", "Essence", "Eye Cream", "Cleanser"];
  if (singleSlotTypes.includes(product.type)) {
    const hasSameType = selected.some(item => item.type === product.type);
    if (hasSameType) {
      return false;  // כבר יש מוצר מסוג זה בשגרה
    }
  }
  
  // בדיקת conflicts רגילים
  if (!selected.every((item) => !detectConflict(item, product, feelingId))) {
    return false;
  }
  
  // ✅ בדיקת active overload ב-"טיפול ממוקד"
  if (context && context.isTargetedRoutine && context.hasStrongActive) {
    const productTags = new Set(tagsFor(product));
    const isProductActive = productTags.has("retinoid") || 
                           (productTags.has("acid") && productTags.has("strong")) ||
                           productTags.has("vitaminC") || 
                           product.type === "Spot Treatment";
    
    // אם זה טיפול ממוקד ויש כבר active חזק, לא להוסיף עוד active
    if (isProductActive) {
      return false;
    }
  }
  
  return true;
}

function scoreProduct(product, context) {
  const tags = tagsFor(product);
  const feeling = getFeeling(context.feeling);
  let score = 0;

  if (productMatchesTime(product, context.timeOfDay)) score += 8;
  if (state.favorites.includes(product.id)) score += 2;
  if (context.preferredProductId === product.id) score += 18;
  
  // ✅ בונוס למוצרים מאותה סדרה כמו המוצר המרכזי
  if (context.preferredProductId) {
    const preferredProduct = getProduct(context.preferredProductId);
    if (preferredProduct && areProductFamily(product, preferredProduct)) {
      score += 12;  // העדפה חזקה למוצרים מאותה סדרה
    }
  }
  
  // ✅ בונוס למוצרים מאותה סדרה כמו המועדף שנבחר
  if (context.selectedFavoriteProductId) {
    const favoriteProduct = getProduct(context.selectedFavoriteProductId);
    if (favoriteProduct && areProductFamily(product, favoriteProduct)) {
      score += 10;  // העדפה למוצרים מאותה סדרה
    }
  }
  
  if (context.includeMask && product.type === "Mask") score += 9;
  if (context.coupleMode && product.type === "Mask") score += 10;
  if (context.coupleMode && (tags.includes("retinoid") || tags.includes("acid") || tags.includes("spot"))) score -= 40;
  if (context.routineType === "nourishing" && (tags.includes("hydration") || tags.includes("collagen") || tags.includes("cream") || tags.includes("barrier"))) score += 4;
  if (context.routineType === "targeted" && (tags.includes("acid") || tags.includes("retinoid") || tags.includes("spot") || tags.includes("vitaminC"))) score += 3;
  if (context.routineType === "targeted" && tags.includes("rich")) score -= 3;

  // מהיר ↔ מפנק - משפיע על סוג המוצרים (לא כמות!)
  if (context.routinePace === 1) {  // מהיר - מעדיף מוצרים בסיסיים
    if (["Eye Cream", "Mask", "Oil", "Mixer"].includes(product.type)) score -= 15;  // הוגבר מ-8
    if (["Toner", "Serum", "Cream"].includes(product.type)) score += 8;  // הוגבר מ-4
  }
  if (context.routinePace === 3) {  // מפנק - מעדיף מוצרים מיוחדים
    if (["Eye Cream", "Essence", "Mask"].includes(product.type)) score += 15;  // הוגבר מ-8
    if (["Oil", "Mixer"].includes(product.type)) score += 10;  // הוגבר מ-5
    if (["Toner", "Serum", "Cream"].includes(product.type)) score += 2;  // הוגבר מ-1
  }

  feeling.prefer.forEach((tag) => {
    if (tags.includes(tag)) score += 5;
  });
  feeling.avoid.forEach((tag) => {
    if (tags.includes(tag)) score -= 12;
  });
  
  // ✅ Skin Concern Scoring - בונוס למוצרים שמתאימים למצב עור
  if (context.feeling === "red") {  // אדמומי
    if (tags.includes("calming") || tags.includes("soothing")) score += 8;
    if (tags.includes("barrier") || tags.includes("ceramide")) score += 7;
    if (tags.includes("centella") || tags.includes("panthenol")) score += 6;
    if (tags.includes("snail") || tags.includes("hydration")) score += 5;
  }
  if (context.feeling === "breakouts") {  // פצעונים
    if (tags.includes("acne") || tags.includes("balancing")) score += 8;
    if (tags.includes("niacinamide") || tags.includes("pore")) score += 7;
    if (tags.includes("salicylic") || tags.includes("lightweight")) score += 6;
  }
  if (context.feeling === "spot-treatment") {  // חצ'קון
    if (tags.includes("calming") || tags.includes("balancing")) score += 7;
    if (tags.includes("lightweight") || tags.includes("hydration")) score += 5;
  }
  if (context.feeling === "pigmentation") {  // כתמים
    if (tags.includes("vitaminC") || tags.includes("brightening")) score += 8;
    if (tags.includes("niacinamide") || tags.includes("glow")) score += 7;
  }
  if (context.feeling === "dry") {  // יבש ומתוח
    if (tags.includes("ceramide") || tags.includes("peptide")) score += 8;
    if (tags.includes("collagen") || tags.includes("snail")) score += 7;
    if (tags.includes("rich") || tags.includes("nourishing")) score += 6;
    if (tags.includes("barrier") || tags.includes("hydration")) score += 5;
  }
  if (context.feeling === "sensitive") {  // רגיש
    if (tags.includes("calming") || tags.includes("soothing")) score += 8;
    if (tags.includes("barrier") || tags.includes("gentle")) score += 7;
    if (tags.includes("hydration") || tags.includes("minimal")) score += 5;
  }
  if (context.feeling === "oily") {  // שומני
    if (tags.includes("balancing") || tags.includes("pore")) score += 8;
    if (tags.includes("lightweight") || tags.includes("gel")) score += 7;
    if (tags.includes("niacinamide") || tags.includes("salicylic")) score += 6;
  }
  if (context.feeling === "glow") {  // רוצה זוהר
    if (tags.includes("peptide") || tags.includes("collagen")) score += 8;
    if (tags.includes("glow") || tags.includes("radiance")) score += 7;
    if (tags.includes("vitaminC") || tags.includes("hydration")) score += 6;
  }
  if (context.feeling === "aging") {  // אנטי אייג'ינג
    if (tags.includes("peptide") || tags.includes("collagen")) score += 8;
    // ✅ רטינול בלילה - בונוס גדול יותר כדי שיופיע לפעמים
    if (tags.includes("retinoid") && !isDayRoutine(context.timeOfDay)) score += 10;
    if (tags.includes("nourishing") || tags.includes("texture")) score += 6;
  }

  // מניעת רטינול בבוקר/צהריים - קריטי!
  if (isDayRoutine(context.timeOfDay) && tags.includes("retinoid")) score -= 100;
  
  // ✅ מניעת Spot Treatment ללא context מפורש
  // Spot Treatment מותר רק עם:
  // 1. feeling מפורש של breakouts/spot-treatment
  // 2. או כמוצר מועדף שנבחר
  if (product.type === "Spot Treatment") {
    const allowSpotTreatment = 
      (context.feelingExplicitlySelected && 
       (context.feeling === "breakouts" || context.feeling === "spot-treatment")) ||
      context.preferredProductId === product.id ||
      context.selectedFavoriteProductId === product.id;
    
    if (!allowSpotTreatment) {
      score -= 100;  // חסימה קשיחה
    }
  }
  
  // צהריים - העדפה למוצרים קלילים במיוחד
  if (context.timeOfDay === "צהריים") {
    if (tags.includes("light") || tags.includes("gel")) score += 6;
    if (tags.includes("rich") || tags.includes("oil") || product.type === "Mask") score -= 10;
    if (product.type === "Eye Cream" || product.type === "Mixer") score -= 5;
    // צהריים - העדפה להזנה מינימלית
    if (tags.includes("hydration") && tags.includes("light")) score += 3;
  }
  
  // ✅ Time-based scoring
  if (isDayRoutine(context.timeOfDay) && tags.includes("vitaminC")) score += 4;
  if (isDayRoutine(context.timeOfDay) && tags.includes("spfRequired")) score -= 6;
  
  // ✅ Penalty חזק מאוד לacid/exfoliating בבוקר - כמעט אף פעם לא בבוקר
  // גם במצב "מפנק" - בבוקר מפנק = hydration/glow, לא exfoliation
  if (isDayRoutine(context.timeOfDay)) {
    if (tags.includes("acid")) score -= 15;
    if (tags.includes("exfoliating")) score -= 15;
  }
  
  if (!isDayRoutine(context.timeOfDay) && tags.includes("oil") && context.feeling === "dry") score += 4;
  if (tags.includes("light")) score += 1;
  
  // ✅ Smart scoring ל-Oils (Jason Vitamin E) - final nourishing step
  if (product.type === "Oil" && !isDayRoutine(context.timeOfDay)) {
    // בונוס בסיסי לערב/לילה
    score += 5;  // הועלה מ-3
    
    // בונוס גדול מאוד למפנק - כדי להגיע ל-70% סבירות
    if (context.routinePace === 3) score += 15;  // הועלה מ-8
    
    // בונוס למצבי עור מתאימים
    if (context.feeling === "dry") score += 10;  // הועלה מ-7
    if (context.feeling === "glow") score += 8;  // הועלה מ-6
    if (context.feeling === "aging") score += 7;  // הועלה מ-5
    if (context.feeling === "red") score += 6;  // הועלה מ-4
    if (context.feeling === "sensitive") score += 5;  // הועלה מ-3
    
    // קנס למצבים לא מתאימים
    if (context.feeling === "oily") score -= 12;  // הועלה מ-8
    if (context.feeling === "breakouts") score -= 15;  // הועלה מ-10
    if (context.feeling === "spot-treatment") score -= 15;  // הועלה מ-10
  }

  return score + rotationNoise(product.id, context.routineNonce);
}

function rotationNoise(id, seed) {
  let value = 0;
  const input = `${id}-${seed}-${new Date().toDateString()}`;
  for (let i = 0; i < input.length; i += 1) value = (value * 31 + input.charCodeAt(i)) % 997;
  // ✅ הגדלה מ-1.7 ל-5 כדי לתת variety יותר גדול
  return (value % 50) / 10;  // 0-5 points
}

function isDominantProduct(product) {
  if (!product) return false;
  const tags = tagsFor(product);
  
  // מסכות hydrogel/overnight - דומיננטיות מאוד
  if (product.type === "Mask" && (tags.includes("hydrogel") || tags.includes("overnight"))) {
    return { level: "high", reason: "מסכת הידרוג'ל/לילה מספקת לחות עמוקה ומחליפה סרומים רבים" };
  }
  
  // רטינול - טיפול דומיננטי
  if (tags.includes("retinoid") && tags.includes("strong")) {
    return { level: "medium", reason: "רטינול חזק מספיק כטיפול מרכזי" };
  }
  
  // חומצות חזקות
  if (isStrongAcid(product)) {
    return { level: "medium", reason: "חומצות חזקות כטיפול מרכזי" };
  }
  
  // שמנים עשירים
  if (product.type === "Oil" && tags.includes("rich")) {
    return { level: "low", reason: "שמן עשיר מספק הזנה עמוקה" };
  }
  
  // קרמים אוקלוסיביים כבדים
  if (product.type === "Cream" && tags.includes("rich") && tags.includes("barrier")) {
    return { level: "low", reason: "קרם עשיר וחסם" };
  }
  
  return false;
}

function adjustTargetForDominantProducts(baseTarget, selectedProducts) {
  // Don't reduce target - user should get the count they requested
  // Dominant products affect WARNINGS, not count
  return baseTarget;
}

function candidatesFor(context, type = null) {
  return products
    .filter((product) => !type || product.type === type)
    .filter((product) => productMatchesTime(product, context.timeOfDay))
    // ✅ סינון קשיח: אסור acid/exfoliating/retinoid בבוקר/צהריים
    .filter((product) => {
      if (isDayRoutine(context.timeOfDay)) {
        const tags = new Set(tagsFor(product));
        // אסור acid, exfoliating, או retinoid בבוקר!
        if (tags.has("acid") || tags.has("exfoliating") || tags.has("retinoid")) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => scoreProduct(b, context) - scoreProduct(a, context));
}

function addProduct(selected, warnings, product, reason, context) {
  // ✅ בדיקת duplicate משודרגת - גם לפי id וגם לפי brand+name
  if (!product || isProductAlreadySelected(product, selected)) return false;
  
  const conflict = selected.map((item) => detectConflict(item, product, context.feeling)).find(Boolean);
  if (conflict) {
    warnings.push(`דילגתי על ${product.name}: ${conflict}`);
    return false;
  }
  selected.push({ ...product, reason });
  
  // ✅ עדכון context.hasStrongActive אחרי הוספת מוצר
  if (context && context.isTargetedRoutine) {
    const tags = new Set(tagsFor(product));
    if (tags.has("retinoid") || (tags.has("acid") && tags.has("strong")) || 
        tags.has("vitaminC") || product.type === "Spot Treatment") {
      context.hasStrongActive = true;
    }
  }
  
  return true;
}

function pickByType(type, selected, context) {
  const allCandidates = candidatesFor(context, type);
  const suitable = allCandidates.filter((product) => 
    isSafeAddition(product, selected, context.feeling, context)
  );
  
  if (suitable.length === 0) return null;
  if (suitable.length === 1) return suitable[0];
  
  // ✅ Smart variation: בחר מתוך 5 הראשונים (הורחב מ-3)
  const seed = context.routineNonce || Date.now();
  const index = Math.abs(seed) % Math.min(5, suitable.length);
  
  return suitable[index];
}

function getDailyRoutineNonce(context = {}) {
  // ✅ Daily Rotation: seed משתנה רק פעם ביום + לפי context
  // זה מבטיח עקבות באותו יום, variation בימים שונים
  
  // תאריך היום (ללא שעה)
  const today = new Date();
  const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // context ייחודי לשגרה
  const routineKey = [
    dayKey,
    context.timeOfDay || state.timeOfDay || 'default',
    context.routineRoute || state.routineRoute || 'regular',
    context.feeling || state.feeling || 'glow',
    context.preferredProductId || state.preferredProductId || 'none'
  ].join('_');
  
  // hash פשוט מה-string
  let hash = 0;
  for (let i = 0; i < routineKey.length; i++) {
    const char = routineKey.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash);
}

function realTargetCount() {
  // ✅ שאלון "בנה שגרה": מינימום 3, מקסימום 6
  if (state.routineRoute === "regular" && state.routineFlow === "wizard") {
    if (state.requestedSteps <= 2) return 3;
    if (state.requestedSteps >= 5) return 6;
    return Math.max(3, state.requestedSteps);
  }
  
  // ✅ שגרות רגילות: להחזיר בדיוק מה שהמשתמש בחר
  // מהיר (1) → 3
  // מאוזן (2) → 4
  // מפנק (3) → 5-7 (מוגבל ב-buildRoutine)
  return state.requestedSteps;  // מחזיר בדיוק: 3, 4, 5, 6, או 7
}

// ✅ פונקציה לזהות מוצר לפי brand + name (למנוע duplicates)
function getProductIdentity(product) {
  if (!product) return null;
  // נרמול: הסרת רווחים מיותרים, lowercase, הסרת תווים מיוחדים
  const normalize = (str) => {
    if (!str) return "";
    return str.toLowerCase()
      .replace(/\s+/g, " ")  // רווחים מרובים → רווח אחד
      .replace(/[^\w\s-]/g, "")  // הסרת תווים מיוחדים
      .trim();
  };
  
  const brand = normalize(product.brand || "");
  const name = normalize(product.name || "");
  
  return `${brand}_${name}`;
}

// ✅ בדיקה אם מוצר כבר קיים ב-selected (לפי id או brand+name)
function isProductAlreadySelected(product, selected) {
  if (!product) return true;
  
  // בדיקה 1: לפי ID
  if (selected.some(s => s.id === product.id)) {
    return true;
  }
  
  // בדיקה 2: לפי brand + name
  const productKey = getProductIdentity(product);
  if (selected.some(s => getProductIdentity(s) === productKey)) {
    console.log('🚫 DUPLICATE BLOCKED (by brand+name):', {
      candidate: { id: product.id, name: product.name, brand: product.brand },
      key: productKey,
      existing: selected.filter(s => getProductIdentity(s) === productKey)
        .map(s => ({ id: s.id, name: s.name, brand: s.brand }))
    });
    return true;
  }
  
  return false;
}

// ✅ פונקציה ליצירת benefit text ספציפי למוצר
function getProductBenefit(product) {
  if (!product) return "מוצר טיפוח איכותי.";
  
  const tags = new Set(tagsFor(product));
  const type = product.type;
  
  // מסיכות
  if (type === "Mask") {
    if (tags.has("collagen") || tags.has("hydration")) return "מעניק לחות עמוקה ומראה מוטן וזוהר.";
    if (tags.has("clay") || tags.has("pore")) return "מנקה עומק, מטשטש נקבוביות ומאזן שומניות.";
    if (tags.has("calming") || tags.has("soothing")) return "מרגיע אדמומיות וחיזוק מחסום העור.";
    if (tags.has("brightening")) return "מבהיר כתמים ומעניק מראה אחיד וזוהר.";
    return "טיפול מעמיק ומפנק לעור.";
  }
  
  // סרומים
  if (type === "Serum") {
    if (tags.has("vitaminC")) return "מבהיר, מעניק זוהר ומגן מנזקים סביבתיים.";
    if (tags.has("niacinamide")) return "מסייע באיזון שומניות, טשטוש נקבוביות ואחידות גוון.";
    if (tags.has("peptide")) return "מחזק את העור, משפר גמישות ומעניק מראה צעיר.";
    if (tags.has("retinoid")) return "מסייע בהחלקת קמטים, שיפור מרקם ואחידות גוון.";
    if (tags.has("collagen")) return "מעניק לחות עמוקה, מוטנות ומראה זוהר.";
    if (tags.has("acid")) return "מסייע בהבהרה עדינה, החלקת מרקם ואחידות גוון.";
    if (tags.has("hydration")) return "מעניק לחות עמוקה ומראה זוהר ובריא.";
    if (tags.has("calming")) return "מרגיע אדמומיות וחיזוק מחסום העור.";
    return "טיפול ממוקד לשיפור מראה העור.";
  }
  
  // טונרים
  if (type === "Toner") {
    if (tags.has("acid")) return "מכין את העור, מסייע בהבהרה ואיזון pH.";
    if (tags.has("hydration")) return "מכין את העור וממלא לחות לפני השלבים הבאים.";
    if (tags.has("calming")) return "מרגיע ומאזן את העור לפני השלבים הבאים.";
    return "מכין את העור לקליטה אופטימלית של המוצרים הבאים.";
  }
  
  // אסנסים
  if (type === "Essence") {
    if (tags.has("hydration")) return "מעניק לחות עמוקה וממלא את העור.";
    if (tags.has("glow")) return "מעניק זוהר ומראה בריא לעור.";
    if (tags.has("nourishing")) return "מזין ומחזק את מחסום העור.";
    return "מעניק לחות והזנה עמוקה.";
  }
  
  // קרמים
  if (type === "Cream") {
    if (tags.has("ceramide") || tags.has("barrier")) return "חותם לחות, מחזק מחסום עור ומגן מפני יובש.";
    if (tags.has("peptide")) return "מזין, מחזק ומשפר את גמישות העור.";
    if (tags.has("nourishing") || tags.has("rich")) return "מזין עמוק וסוגר את השגרה בלחות עשירה.";
    if (tags.has("gel") || tags.has("lightweight")) return "חותם לחות בטקסטורה קלילה ונעימה.";
    return "חותם לחות וסוגר את השגרה.";
  }
  
  // קרם עיניים
  if (type === "Eye Cream") {
    if (tags.has("peptide")) return "מחזק, מפחית קמטוטים ונפיחות באזור העיניים.";
    if (tags.has("caffeine")) return "מפחית נפיחות וכהויות באזור העיניים.";
    return "טיפול עדין ומזין לאזור העיניים הרגיש.";
  }
  
  // טיפול נקודתי
  if (type === "Spot Treatment") {
    return "טיפול ממוקד בפגמים ואדמומיות.";
  }
  
  // שמנים
  if (type === "Oil") {
    return "מזין עמוק, חותם לחות ומעניק זוהר.";
  }
  
  // ברירת מחדל
  return "מוצר טיפוח איכותי למראה עור בריא.";
}

// ========================================================================
// 🎯 מערכת חכמה לסינון מועדפים לפי תשובות השאלון
// ========================================================================

/**
 * סינון חכם של מוצרים מועדפים לפי כל התשובות בשאלון
 */
function getSmartFilteredFavorites(favoriteProducts, context) {
  const feelingObj = getFeeling(context.feeling);
  
  return favoriteProducts
    .map(product => ({
      product,
      score: calculateFavoriteScore(product, context, feelingObj)
    }))
    .filter(item => item.score > 0)  // רק מוצרים שמתאימים
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
}

/**
 * חישוב ציון התאמה למוצר מועדף
 */
function calculateFavoriteScore(product, context, feelingObj) {
  let score = 100;
  const tags = new Set(tagsFor(product));
  const feeling = context.feeling;
  
  // רטינול בבוקר = אסור
  if (isDayRoutine(context.timeOfDay) && tags.has("retinoid")) {
    return 0;
  }
  
  // בדיקת זמן שימוש
  if (product.usage && Array.isArray(product.usage)) {
    const timeMap = {
      "בוקר": ["בוקר", "בוקר/ערב"],
      "צהריים": ["בוקר", "ערב", "בוקר/ערב"],
      "ערב": ["ערב", "לילה", "בוקר/ערב"],
      "לילה": ["לילה", "ערב"]
    };
    
    const validTimes = timeMap[context.timeOfDay] || [];
    const hasValidTime = product.usage.some(time => 
      validTimes.some(valid => time.includes(valid))
    );
    
    if (!hasValidTime) score -= 50;
  }
  
  // מצב עור: רגיש/אדמומי
  if (feeling === "sensitive" || feeling === "redness") {
    if (tags.has("soothing") || tags.has("barrier") || tags.has("sensitive")) score += 20;
    if (tags.has("ceramides") || tags.has("calming")) score += 15;
    if (tags.has("strong")) score -= 30;
    if (tags.has("acid")) score -= 25;
    if (tags.has("retinoid")) score -= 20;
    if (tags.has("exfoliant")) score -= 20;
  }
  
  // מצב עור: פצעונים
  if (feeling === "breakouts" || feeling === "spot-treatment") {
    if (tags.has("acne") || tags.has("spot")) score += 25;
    if (tags.has("salicylic") || tags.has("bha")) score += 20;
    if (tags.has("niacinamide")) score += 15;
    if (tags.has("light") || tags.has("gel")) score += 10;
    if (tags.has("rich") || tags.has("heavy")) score -= 20;
  }
  
  // מצב עור: כתמים
  if (feeling === "hyperpigmentation") {
    if (tags.has("vitaminC") || tags.has("brightening")) score += 25;
    if (tags.has("niacinamide")) score += 20;
    if (tags.has("glow")) score += 15;
    if (tags.has("strong") && tags.has("acid")) score -= 15;
  }
  
  // מצב עור: יבש
  if (feeling === "dry") {
    if (tags.has("hydration") || tags.has("moisturizing")) score += 25;
    if (tags.has("ceramides") || tags.has("peptides")) score += 20;
    if (tags.has("snail")) score += 15;
    if (tags.has("barrier")) score += 15;
    if (tags.has("rich")) score += 10;
    if (tags.has("acid") && tags.has("strong")) score -= 20;
    if (tags.has("exfoliant")) score -= 15;
    if (product.type === "Mask" && tags.has("clay")) score -= 25;
  }
  
  // מצב עור: שומני
  if (feeling === "oily") {
    if (tags.has("light") || tags.has("gel")) score += 20;
    if (tags.has("pore") || tags.has("balancing")) score += 20;
    if (tags.has("heavy") || tags.has("rich")) score -= 25;
    if (product.type === "Oil") score -= 30;
  }
  
  // מצב עור: זוהר
  if (feeling === "glow") {
    if (tags.has("glow") || tags.has("brightening")) score += 25;
    if (tags.has("peptides") || tags.has("collagen")) score += 20;
    if (tags.has("vitaminC")) score += 20;
    if (tags.has("hydration")) score += 15;
  }
  
  // מצב עור: אנטי אייג'ינג
  if (feeling === "antiaging") {
    if (tags.has("peptides") || tags.has("collagen")) score += 25;
    if (tags.has("antiaging")) score += 20;
    if (tags.has("retinoid") && !isDayRoutine(context.timeOfDay)) score += 25;
  }
  
  // לוגיקת מסיכות
  if (product.type === "Mask") {
    if (!context.includeMask) {
      score -= 40;
    } else {
      if (isDayRoutine(context.timeOfDay)) {
        if (tags.has("calming") || tags.has("hydration")) score += 15;
        if (tags.has("exfoliant") || tags.has("clay") || tags.has("peel")) score -= 30;
      } else {
        if (tags.has("overnight")) score += 20;
        if (tags.has("clay") || tags.has("exfoliant")) score += 10;
      }
    }
  }
  
  // רמת אגרסיביות
  if (context.routinePace === 1) {
    if (tags.has("basic") || tags.has("simple")) score += 10;
    if (tags.has("special") || tags.has("treatment")) score -= 10;
  } else if (context.routinePace === 3) {
    if (tags.has("special") || tags.has("treatment")) score += 10;
    if (tags.has("luxury")) score += 15;
  }
  
  // בדיקת conflicts
  if (context.preferredProductId) {
    const preferredProduct = getProduct(context.preferredProductId);
    if (preferredProduct && detectConflict(product, preferredProduct, feeling)) {
      return 0;
    }
  }
  
  // Spot treatments - רק אם מתאים
  if (product.type === "Spot Treatment") {
    if (feeling !== "breakouts" && feeling !== "spot-treatment") {
      score -= 20;
    }
  }
  
  // בונוס כללי
  if (tags.has("snail")) score += 10;
  if (tags.has("barrier")) score += 10;
  
  // SPF - רק בבוקר/צהריים
  if (product.type === "SPF") {
    if (isDayRoutine(context.timeOfDay)) {
      score += 30;
    } else {
      score -= 50;
    }
  }
  
  return Math.max(0, score);
}

// ========================================================================
// 🚨 Active Overload Prevention - מניעת עומס actives
// ========================================================================

/**
 * בדיקה אם יש active overload בשגרה
 */
function hasActiveOverload(products) {
  const actives = {
    retinol: false,
    strongAcids: false,
    vitaminC: false,
    spot: false
  };
  
  products.forEach(product => {
    const tags = new Set(tagsFor(product));
    if (tags.has("retinoid")) actives.retinol = true;
    if (tags.has("acid") && tags.has("strong")) actives.strongAcids = true;
    if (tags.has("vitaminC")) actives.vitaminC = true;
    if (product.type === "Spot Treatment") actives.spot = true;
  });
  
  // ספירת actives חזקים
  const strongCount = [actives.retinol, actives.strongAcids, actives.vitaminC, actives.spot]
    .filter(Boolean).length;
  
  return strongCount >= 2;  // 2+ actives = overload
}

/**
 * בדיקה אם מוצר יוצר overload עם שגרה קיימת
 */
function wouldCreateOverload(product, existingProducts) {
  return hasActiveOverload([...existingProducts, product]);
}

function buildRoutine() {
  const context = {
    timeOfDay: state.timeOfDay,
    feeling: state.feeling,
    includeMask: state.includeMask,
    coupleMode: state.coupleMode,
    preferredProductId: state.preferredProductId,
    selectedFavoriteProductId: state.selectedFavoriteProductId,  // הוספת מוצר מועדף
    requestedSteps: realTargetCount(),
    routineType: state.routineType,
    routinePace: state.routinePace,
    routineRoute: state.routineRoute,
    routineNonce: state.routineNonce,
  };
  
  // ✅ CRITICAL: אם יש displayedRoutine - התחל ממנו!
  // זה שומר על כל ההחלפות ("החלף מוצר", "שנה שגרה")
  if (state.displayedRoutine && state.displayedRoutine.steps && state.displayedRoutine.steps.length > 0) {
    console.log('🔄 buildRoutine: Starting from displayedRoutine (preserving replacements)');
    console.log('  displayedRoutine:', state.displayedRoutine.steps.map(p => p.name));
    
    // התחל מ-displayedRoutine במקום לבנות מאפס
    const selected = [...state.displayedRoutine.steps];
    const warnings = state.displayedRoutine.warnings || [];
    
    // target מחושב לפי pace
    let target = context.requestedSteps;
    
    // במצב מפנק, מגביל ל-5-6
    if (context.routinePace === 3) {
      target = Math.random() < 0.6 ? 6 : 5;
    }
    if (context.routinePace === 3 && target > 6) {
      target = 6;
    }
    
    // הרחב או צמצם את השגרה אם צריך
    const currentCount = selected.length;
    console.log(`  Current: ${currentCount}, Target: ${target}`);
    
    if (target < currentCount) {
      console.log(`  Shrinking from ${currentCount} to ${target}...`);
      
      // ✅ צמצום: הסר מוצרים מהסוף (לפי priority)
      // שמור מוצרים מועדפים ומרכזיים
      const priority = selected.map(p => {
        let score = 0;
        if (p.id === context.preferredProductId) score += 100;
        if (p.id === context.selectedFavoriteProductId) score += 90;
        if (p.type === "Toner") score += 50;
        if (p.type === "Cream") score += 40;
        if (p.type === "Serum") score += 30;
        if (p.type === "Essence") score += 20;
        return { product: p, score };
      });
      
      priority.sort((a, b) => b.score - a.score);
      selected.length = 0;
      selected.push(...priority.slice(0, target).map(item => item.product));
      
      console.log('  After shrinking:', selected.map(p => p.name));
    }
    
    if (target > currentCount) {
      console.log(`  Expanding from ${currentCount} to ${target}...`);
      
      // הוסף מוצרים בטוחים
      const expansionCandidates = candidatesFor(context)
        .filter(p => !isProductAlreadySelected(p, selected))  // ✅ בדיקה משודרגת
        .filter(p => isSafeAddition(p, selected, context.feeling, context));
      
      while (selected.length < target && expansionCandidates.length > 0) {
        const next = expansionCandidates.shift();
        // ✅ בדיקה כפולה משודרגת נגד duplicates!
        if (next && 
            !isProductAlreadySelected(next, selected) &&  // ✅ בדיקה משודרגת
            isSafeAddition(next, selected, context.feeling, context)) {
          console.log(`    Adding: ${next.name}`);
          selected.push(next);
        }
      }
    }
    
    // מיין לפי סדר
    let routine = selected.sort((a, b) => routineOrderScore(a) - routineOrderScore(b));
    
    // ✅ CRITICAL: Final dedupe check - מסיר duplicates לפי brand+name
    const seen = new Set();
    routine = routine.filter(product => {
      const key = getProductIdentity(product);
      if (seen.has(key)) {
        console.warn('⚠️ DUPLICATE FOUND IN FINAL ROUTINE:', product.name, product.brand);
        warnings.push(`הוסר duplicate: ${product.name}`);
        return false;
      }
      seen.add(key);
      return true;
    });
    
    console.log('  Final routine:', routine.map(p => p.name));
    
    return { steps: routine, warnings };
  }
  
  console.log('🔄 buildRoutine: Building from scratch (no displayedRoutine)');
  
  const selected = [];
  const warnings = [];
  
  // target מחושב לפי pace
  let target = context.requestedSteps;
  
  // ✅ במצב מפנק (pace=3), מגביל ל-5-6 מוצרים (לא 7!)
  // 60% סיכוי ל-6, 40% ל-5
  // המערכת תעצור כשהשגרה מרגישה מלאה, גם אם לא הגיעה ל-target
  if (context.routinePace === 3) {
    target = Math.random() < 0.6 ? 6 : 5;
  }
  
  // ✅ הגבלה קשיחה: לעולם לא יותר מ-6 מוצרים במפנק
  if (context.routinePace === 3 && target > 6) {
    target = 6;
  }
  
  let maxTarget = target;
  if (target >= 5) {
    maxTarget = Math.min(7, target + 1);  // יכול להגיע עד 7 במקסימום
  }
  
  const preferred = getProduct(context.preferredProductId);
  const favoriteProduct = getProduct(context.selectedFavoriteProductId);

  // הוספת מוצר מועדף אם נבחר ועדיין לא בשגרה
  if (favoriteProduct && !selected.find(s => s.product.id === favoriteProduct.id)) {
    addProduct(selected, warnings, favoriteProduct, getProductBenefit(favoriteProduct), context);
  }
  
  // ✅ "טיפול ממוקד" - active אחד מרכזי בלבד, ללא overload
  const isTargetedRoutine = context.routineType === "targeted";
  const hasStrongActive = selected.some(s => {
    const tags = new Set(tagsFor(s.product));
    return tags.has("retinoid") || (tags.has("acid") && tags.has("strong")) || 
           tags.has("vitaminC") || s.product.type === "Spot Treatment";
  });
  
  // עדכון context עם מידע על actives קיימים
  context.hasStrongActive = hasStrongActive;
  context.isTargetedRoutine = isTargetedRoutine;

  if (preferred) {
    // יצירת benefit למוצר המרכזי
    const anchorMessage = getProductBenefit(preferred);
    addProduct(selected, warnings, preferred, anchorMessage, context);
    // בדיקה אם המוצר המועדף דומיננטי
    const dominance = isDominantProduct(preferred);
    if (dominance && dominance.level === "high") {
      warnings.push(dominance.reason + " - שים לב לא לשלב עם מוצרים נוספים בעוצמה דומה.");
    }
  }

  if (!preferred) {
    const centralPool = context.coupleMode
      ? candidatesFor(context).filter((product) => ["Mask", "Serum", "Cream"].includes(product.type) && !hasTag(product, "strong"))
      : candidatesFor(context).filter((product) => ["Serum", "Toner", "Spot Treatment", "Mask"].includes(product.type));
    
    // ✅ Time-aware main active selection
    let central;
    
    if (context.includeMask) {
      // מסכה תמיד עדיפה אם כלולה
      central = centralPool.find((product) => product.type === "Mask") || centralPool[0];
    } else if (context.feeling === "breakouts") {
      // פצעונים - Spot Treatment או acne
      central = centralPool.find((product) => product.type === "Spot Treatment") || 
                centralPool.find((product) => hasTag(product, "acne") || hasTag(product, "spot")) || 
                centralPool[0];
    } else {
      // ✅ בחירה לפי זמן שגרה
      if (isDayRoutine(context.timeOfDay)) {
        // בוקר/צהריים: עדיף vitaminC > brightening > niacinamide
        central = centralPool.find((product) => hasTag(product, "vitaminC")) ||
                  centralPool.find((product) => hasTag(product, "brightening") && !hasTag(product, "retinoid")) ||
                  centralPool.find((product) => hasTag(product, "niacinamide")) ||
                  centralPool[0];
      } else {
        // ערב/לילה: עדיף retinoid > acids > recovery
        central = centralPool.find((product) => hasTag(product, "retinoid")) ||
                  centralPool.find((product) => hasTag(product, "acid")) ||
                  centralPool.find((product) => hasTag(product, "recovery")) ||
                  centralPool[0];
      }
    }
    
    addProduct(selected, warnings, central, context.coupleMode ? "פתיחה זוגית עדינה וכיפית." : getProductBenefit(central), context);
    
    // בדיקה אם המוצר המרכזי דומיננטי
    const dominance = isDominantProduct(central);
    if (dominance && dominance.level === "high") {
      warnings.push(dominance.reason + " - שים לב לא לשלב עם מוצרים נוספים בעוצמה דומה.");
    }
  }

  // ✅ CRITICAL: החל routineOverrides כאן - לפני הוספת מוצרים נוספים!
  // זה מבטיח שכל הבדיקות (isSafeAddition, conflicts) רואות את המוצרים האמיתיים
  if (state.routineOverrides && Object.keys(state.routineOverrides).length > 0) {
    console.log('🔄 Applying routineOverrides to selected (BEFORE expansion):', state.routineOverrides);
    console.log('  Before:', selected.map(p => `${p.name} (${p.id})`));
    
    selected.forEach((step, index) => {
      const overrideId = state.routineOverrides[step.id];
      if (overrideId) {
        const replacement = getProduct(overrideId);
        if (replacement) {
          console.log(`  ✓ Replacing ${step.name} → ${replacement.name}`);
          selected[index] = { ...replacement, reason: step.reason };
        }
      }
    });
    
    console.log('  After:', selected.map(p => `${p.name} (${p.id})`));
  }

  const centralProduct = selected[0];
  const needsPrep = target >= 3 || (centralProduct && routineOrderScore(centralProduct) >= 40);
  
  // ✅ Duplicate Prevention - בדיקה כוללת
  const hasTonerSlot = favoriteProduct?.type === "Toner" || 
                       preferred?.type === "Toner" ||
                       selected.some(p => p.type === "Toner");
  const hasEssenceSlot = favoriteProduct?.type === "Essence" || 
                         preferred?.type === "Essence" ||
                         selected.some(p => p.type === "Essence");
  const hasSerumSlot = favoriteProduct?.type === "Serum" || 
                       preferred?.type === "Serum" ||
                       selected.some(p => p.type === "Serum");
  const hasCreamSlot = favoriteProduct?.type === "Cream" || 
                       preferred?.type === "Cream" ||
                       selected.some(p => p.type === "Cream");
  const hasEyeSlot = (favoriteProduct?.type === "Eye Cream" || favoriteProduct?.type === "Eye Serum") ||
                     (preferred?.type === "Eye Cream" || preferred?.type === "Eye Serum") ||
                     selected.some(p => p.type === "Eye Cream" || p.type === "Eye Serum");
  const hasMaskSlot = favoriteProduct?.type === "Mask" || 
                      preferred?.type === "Mask" ||
                      selected.some(p => p.type === "Mask");
  const hasSpotSlot = favoriteProduct?.type === "Spot Treatment" || 
                      preferred?.type === "Spot Treatment" ||
                      selected.some(p => p.type === "Spot Treatment");
  
  if (needsPrep && !hasTonerSlot) {
    addProduct(selected, warnings, pickByType("Toner", selected, context), "הכנת העור לפני הטיפול.", context);
  }
  
  if ((target >= 4 || ["red", "dry", "sensitive"].includes(context.feeling)) && !hasEssenceSlot) {
    addProduct(selected, warnings, pickByType("Essence", selected, context), "שכבת שיקום ולחות לפני הסרומים.", context);
  }

  if (target >= 5 && !selected.some((product) => product.type === "Serum") && !hasSerumSlot) {
    addProduct(selected, warnings, pickByType("Serum", selected, context), "סרום תומך שמתאים למצב העור.", context);
  }
  
  if (target === 4 && !selected.some((product) => product.type === "Serum") && !hasSerumSlot) {
    addProduct(selected, warnings, pickByType("Serum", selected, context), "סרום תומך שמתאים למצב העור.", context);
  }
  
  // ✅ Soothing/Barrier slot - מאזן actives חזקים
  // אם יש active חזק (retinol, acid, vitaminC) ו-target מספיק גדול
  const hasActiveInRoutine = selected.some(p => 
    hasTag(p, "retinoid") || 
    hasTag(p, "acid") || 
    hasTag(p, "vitaminC")
  );
  
  if (hasActiveInRoutine && target >= 4 && !context.coupleMode) {
    // חפש soothing/barrier/calming product שלא בשגרה
    const soothingCandidates = candidatesFor(context)
      .filter(p => 
        (hasTag(p, "soothing") || hasTag(p, "barrier") || hasTag(p, "calming") || hasTag(p, "panthenol")) &&
        !selected.some(s => s.id === p.id) &&
        isSafeAddition(p, selected, context.feeling, context)
      );
    
    if (soothingCandidates.length > 0) {
      addProduct(selected, warnings, soothingCandidates[0], "מרגיע ומאזן את האקטיבים החזקים.", context);
    }
  }

  if (context.includeMask || context.coupleMode) {
    if (!hasMaskSlot) {
      addProduct(selected, warnings, pickByType("Mask", selected, { ...context, timeOfDay: "לילה" }), context.coupleMode ? "מסיכה זוגית לרגע ספא ביתי." : "מסיכה שמתאימה לבחירה שלך.", context);
    }
  }

  if (target >= 5) {
    if (!hasEyeSlot) {
      addProduct(selected, warnings, pickByType("Eye Cream", selected, context), "טיפול עדין לאזור העיניים.", context);
    }
  }

  if (!selected.some((product) => product.type === "Cream") && !hasCreamSlot) {
    addProduct(selected, warnings, pickByType("Cream", selected, context), "קרם לחות שסוגר את השגרה.", context);
  }

  // ✅ Oil - final nourishing step (Jason Vitamin E)
  // מתאים למפנק + dry/glow/aging + ערב/לילה
  // מופיע לפעמים (לא תמיד) במפנק
  const isOilSuitable = !isDayRoutine(context.timeOfDay) && 
                        (context.routinePace === 3 || 
                         context.feeling === "dry" || 
                         context.feeling === "glow" || 
                         context.feeling === "aging" ||
                         target >= 6);
  
  // ✅ במפנק: 70% סיכוי לשמן (היה 50%)
  // ב-dry/glow/aging: תמיד
  const shouldAddOil = isOilSuitable && 
                       context.feeling !== "oily" && 
                       context.feeling !== "breakouts" &&
                       (context.routinePace !== 3 || Math.random() < 0.7);
  
  if (shouldAddOil) {
    addProduct(selected, warnings, pickByType("Oil", selected, context), "שכבת הזנה וזוהר סופית.", context);
  }

  if (target >= 3 && (context.feeling === "breakouts" || context.feeling === "spot-treatment")) {
    if (!hasSpotSlot) {
      addProduct(selected, warnings, pickByType("Spot Treatment", selected, context), "טיפול נקודתי ישירות על פצעון פעיל. למרוח רק על האזור הבעייתי, לא על כל הפנים.", context);
    }
  }

  if (target >= 5 && !selected.some((product) => product.type === "Mixer")) {
    addProduct(selected, warnings, getProduct("24"), "טיפה קטנה בתוך הקרם לבוסט לחות.", context);
  }

  let routine = selected
    .filter((product) => productMatchesTime(product, context.timeOfDay) || product.type === "Mask")
    .sort((a, b) => routineOrderScore(a) - routineOrderScore(b));

  const realProducts = selectRoutineProducts(routine, target, maxTarget, preferred, centralProduct, context);
  const mustKeep = [preferred, context.includeMask ? routine.find((product) => product.type === "Mask") : null].filter(Boolean);
  mustKeep.forEach((product) => {
    if (!realProducts.some((item) => item.id === product.id)) {
      realProducts.splice(Math.max(0, realProducts.length - 1), 1, product);
    }
  });

  routine = [...new Map(realProducts.sort((a, b) => routineOrderScore(a) - routineOrderScore(b)).map((item) => [item.id, item])).values()];

  if (isDayRoutine(context.timeOfDay)) {
    routine.push({
      id: "spf",
      brand: "המלצת SPF",
      name: "קרם הגנה רחב טווח SPF 30-50",
      type: "SPF",
      time: ["בוקר", "צהריים"],
      intensity: "חובה יומית",
      ingredients: ["SPF"],
      goodFor: ["הגנה", "שמירה על תוצאות"],
      simpleDesc: getSpfAdvice(),
      tags: ["spf"],
      warnings: [],
      reason: "יש לשים קרם הגנה ביום מאחר והשתמשנו ברכיבים פעילים. שתי אצבעות לפנים ולצוואר, לחדש כל שעתיים אם אתה בחוץ.",
    });
  }

  // אזהרות משופרות וספציפיות - רק context-aware!
  const hasRetinol = routine.some((product) => hasTag(product, "retinoid"));
  const hasAcids = routine.some((product) => hasTag(product, "acid"));
  const hasVitaminC = routine.some((product) => hasTag(product, "vitaminC"));
  const hasSpotTreatment = routine.some((product) => hasTag(product, "spot"));
  
  // ✅ FIX: הערת רטינול עברה ל-product step, כאן רק SPF כללי
  // רטינול בלבד - רק הערה על SPF
  if (hasRetinol && !hasAcids) {
    warnings.push("יש לשים קרם הגנה ביום מאחר והשתמשנו ברכיבים פעילים. שתי אצבעות לפנים ולצוואר, לחדש כל שעתיים אם אתה בחוץ.");
  }
  
  // חומצות בלבד (ללא רטינול)
  if (hasAcids && !hasRetinol) {
    warnings.push("קרם הגנה חובה ביום שאחרי. אם העור מגיב - הפחת תדירות.");
  }
  
  // רטינול וחומצות יחד (שילוב)
  if (hasRetinol && hasAcids) {
    warnings.push("רטינול וחומצות בשגרה אחת - התחל בזהירות. קרם הגנה חובה למחרת. אם העור מגיב - שלב אותם בימים שונים.");
  }
  
  // ויטמין C ביום
  if (hasVitaminC && isDayRoutine(context.timeOfDay)) {
    warnings.push("קרם הגנה חובה עם ויטמין C. עוזר להגן מנזקי סביבה ומזהום.");
  }

  // החלפת מוצרים לפי routineOverrides
  if (state.routineOverrides && Object.keys(state.routineOverrides).length > 0) {
    try {
      console.log('📝 Applying overrides:', JSON.stringify(state.routineOverrides));
      
      routine = routine.map(step => {
        const replacementId = state.routineOverrides[step.id];
        if (replacementId) {
          const replacement = getProduct(replacementId);
          if (replacement) {
            console.log(`  Replacing ${step.id} → ${replacementId}`);
            // שמור את ה-reason המקורי
            return { ...replacement, reason: step.reason };
          } else {
            console.warn(`  ⚠️ Product ${replacementId} not found!`);
          }
        }
        return step;
      });
      
      console.log('  Routine after map:', routine.map(s => s.id + ':' + s.name).join(', '));
      
      // מיין מחדש אחרי החלפה
      const sortedSteps = routine
        .filter(s => s.type !== "SPF")
        .sort((a, b) => routineOrderScore(a) - routineOrderScore(b));
      
      const spfStep = routine.find(s => s.type === "SPF");
      routine = spfStep ? [...sortedSteps, spfStep] : sortedSteps;
      
      console.log('  Routine after sort:', routine.map(s => s.id + ':' + s.name).join(', '));
      
      // בנה warnings מחדש - context-aware!
      const hasRetinolNew = routine.some(s => hasTag(s, "retinoid"));
      const hasAcidsNew = routine.some(s => hasTag(s, "acid"));
      const hasVitaminCNew = routine.some(s => hasTag(s, "vitaminC"));
      
      warnings = [];
      
      // ✅ FIX: הערת רטינול עברה ל-product step, כאן רק SPF כללי
      // רטינול בלבד - רק הערה על SPF
      if (hasRetinolNew && !hasAcidsNew) {
        warnings.push("יש לשים קרם הגנה ביום מאחר והשתמשנו ברכיבים פעילים. שתי אצבעות לפנים ולצוואר, לחדש כל שעתיים אם אתה בחוץ.");
      }
      
      // חומצות בלבד (ללא רטינול)
      if (hasAcidsNew && !hasRetinolNew) {
        warnings.push("קרם הגנה חובה ביום שאחרי. אם העור מגיב - הפחת תדירות.");
      }
      
      // רטינול וחומצות יחד (שילוב)
      if (hasRetinolNew && hasAcidsNew) {
        warnings.push("רטינול וחומצות בשגרה אחת - התחל בזהירות. קרם הגנה חובה למחרת. אם העור מגיב - שלב אותם בימים שונים.");
      }
      
      // ויטמין C ביום
      if (hasVitaminCNew && isDayRoutine(context.timeOfDay)) {
        warnings.push("קרם הגנה חובה עם ויטמין C. עוזר להגן מנזקי סביבה ומזהום.");
      }
      
      console.log('  ✅ Overrides applied successfully');
    } catch (error) {
      console.error('❌ ERROR applying overrides:', error);
      console.error('Stack trace:', error.stack);
      // המשך בלי overrides
    }
  }

  // ✅ FIX: Deduplicate warnings - אחד הערות כפולות
  function deduplicateWarnings(warnings) {
    const seen = new Map();
    
    warnings.forEach(warning => {
      // קטגוריזציה לפי נושא
      let category = "other";
      
      if (warning.includes("קרם הגנה") || warning.includes("SPF")) {
        category = "spf";
      } else if (warning.includes("גירוי") || warning.includes("תגובה") || warning.includes("העור מגיב")) {
        category = "irritation";
      } else if (warning.includes("רטינול וחומצות")) {
        category = "retinol_acids_combo";
      } else if (warning.includes("ויטמין C")) {
        category = "vitamin_c";
      }
      
      // שמור רק אחד מכל קטגוריה
      if (!seen.has(category)) {
        seen.set(category, warning);
      } else {
        // אם כבר יש warning בקטגוריה, השתמש בארוך/מפורט יותר
        const existing = seen.get(category);
        if (warning.length > existing.length) {
          seen.set(category, warning);
        }
      }
    });
    
    return Array.from(seen.values());
  }

  // ✅ וידוא שאין nulls/undefineds ב-routine
  routine = routine.filter(step => step && step.id && step.name);
  
  // ✅ CRITICAL: Final dedupe check - מסיר duplicates לפי brand+name
  const seenProducts = new Set();
  routine = routine.filter(product => {
    const key = getProductIdentity(product);
    if (seenProducts.has(key)) {
      console.warn('⚠️ DUPLICATE FOUND IN FINAL ROUTINE:', product.name, product.brand);
      warnings.push(`הוסר duplicate: ${product.name}`);
      return false;
    }
    seenProducts.add(key);
    return true;
  });
  
  return { steps: routine, warnings: deduplicateWarnings(warnings) };
}

function selectRoutineProducts(routine, target, maxTarget, preferred, centralProduct, context) {
  const picked = [];
  const main = routine.find((product) => product.id === preferred?.id) || routine.find((product) => product.id === centralProduct?.id) || routine[0];
  const prep = routine.find((product) => product.type === "Toner") || routine.find((product) => product.type === "Essence");
  const essence = routine.find((product) => product.type === "Essence");
  const cream = routine.find((product) => product.type === "Cream");
  const mask = routine.find((product) => product.type === "Mask");
  const eye = routine.find((product) => product.type === "Eye Cream");

  const add = (product) => {
    if (product && !picked.some((item) => item.id === product.id) && picked.length < maxTarget) picked.push(product);
  };

  if (target <= 2) {
    add(main);
    add(cream || prep || essence);
  } else if (target === 3) {
    add(prep);
    add(main);
    add(cream);
  } else {
    add(prep);
    add(essence);
    add(main);
    if (context.includeMask || context.coupleMode) add(mask);
    if (target >= 5 || (context.routineRoute === "product" && context.routinePace >= 3 && target >= 4)) add(eye);
    add(cream);
  }

  routine.forEach(add);
  
  // CRITICAL: Ensure we have at least target products
  // If not enough, add remaining products from routine
  while (picked.length < target && picked.length < maxTarget) {
    const remaining = routine.find(p => !picked.some(item => item.id === p.id));
    if (remaining) {
      picked.push(remaining);
    } else {
      break;  // No more products available
    }
  }
  
  return picked.sort((a, b) => routineOrderScore(a) - routineOrderScore(b)).slice(0, Math.max(target, Math.min(picked.length, maxTarget)));
}

function routineOrderScore(product) {
  if (product.type === "Mask") {
    const score = maskOrderScore(product);
    console.log(`routineOrderScore: ${product.name} (Mask) → ${score}`);
    return score;
  }
  const order = { Cleanser: 10, Toner: 20, Essence: 30, Serum: 40, "Spot Treatment": 45, "Eye Cream": 60, Mixer: 68, Cream: 70, Oil: 80, SPF: 90 };
  const score = order[product.type] || 50;
  console.log(`routineOrderScore: ${product.name} (${product.type}) → ${score}`);
  return score;
}

function maskOrderScore(product) {
  const usage = getMaskUsage(product);
  
  // ✅ מסיכות wash-off (חימר, ניקוי) - מוקדם בשגרה
  if (usage?.flow === "wash-off") {
    console.log(`  Mask ${product.name}: wash-off → score 15`);
    return 15;  // אחרי Cleanser (10), לפני Toner (20)
  }
  
  // ✅ מסיכות hydrating/collagen/sheet - בסוף השגרה
  // אחרי סרומים (40) ו-Eye Cream (60), לפני/במקום Cream (70)
  console.log(`  Mask ${product.name}: hydrating → score 65`);
  return 65;
}

function getMaskUsage(product) {
  if (!product || product.type !== "Mask") return null;

  if (product.id === "23") {
    // Collagen Real Deep Mask
    return {
      flow: "hydrating",
      kind: "מסיכת קולגן / לחות",
      when: "מסיכת sheet mask שנועדת להישאר זמן רב.",
      order: ["ניקוי פנים", "טונר / אסנס קליל", "מסיכת קולגן", "סרום עדין אם צריך", "קרם לחות"],
      wait: "שעתיים או אפילו לילה שלם (מומלץ). לפחות 40-60 דקות (גם טוב). להשאיר עד שהיא נהיית כמעט שקופה/מתייבשת.",
      how: "להניח את המסיכה על הפנים ולהדק בעדינות.",
      finish: "להסיר בעדינות מהפנים. לטפוח את שארית החומר עד ספיגה. לא לשטוף אחרי.",
      compact: "להניח את המסיכה על הפנים בצורה צמודה ל־3–4 שעות או ללילה. לזמן קצר יותר: 40–60 דקות. להסיר ולטפוח את שאריות החומר עד ספיגה.",
      tip: "טיפ מאמי: אחרי מקלחת חמימה זה מרגיש פי 10 יותר מפנק כי העור כבר רך ומוכן ללחות.",
    };
  }

  if (product.id === "28") {
    // Red Bean Refreshing Pore Mask
    return {
      flow: "wash-off",
      kind: "מסיכת שטיפה / נקבוביות",
      when: "מסיכת wash-off שמורידים לפני שממשיכים טיפוח.",
      order: ["ניקוי פנים", "מסיכת Red Bean", "שטיפה עדינה", "טונר מרגיע", "סרום", "קרם לחות"],
      wait: "10-15 דקות (מומלץ). 5-7 דקות (גם טוב). לא לתת למסיכה להתייבש לגמרי.",
      how: "על פנים נקיות ויבשות. למרוח שכבה אחידה, במיוחד באזורי נקבוביות ושומן (אף, מצח, סנטר).",
      finish: "להרטיב מעט עם מים פושרים. לעסות בעדינות בתנועות מעגליות. לשטוף היטב.",
      compact: "למרוח שכבה אחידה על הפנים ל־10–15 דקות, או 5–7 דקות בקיצור. להסיר עם מים פושרים ועיסוי עדין.",
      tip: "מושלמת לימים של נקבוביות ושומניות בלי לייבש מדי.",
    };
  }

  if (product.id === "29") {
    // Pure Clay Detox Mask
    return {
      flow: "wash-off",
      kind: "מסיכת חימר / פחם",
      when: "מסיכת שטיפה שבאה מוקדם בשגרה.",
      order: ["ניקוי פנים", "מסכת חימר", "שטיפה", "טונר מרגיע", "סרום לחות", "קרם לחות"],
      wait: "10-15 דקות (מומלץ). 5-8 דקות (גם טוב). לחכות עד שהמסיכה מתייבשת חלקית.",
      how: "למרוח שכבה דקה ואחידה על פנים נקיות. להימנע מאזור העיניים והשפתיים.",
      finish: "לשטוף עם מים פושרים. לעסות בעדינות תוך כדי השטיפה. אחר כך לשים קרם לחות - כי מסיכות חימר יכולות לייבש.",
      compact: "למרוח שכבה דקה ואחידה על הפנים ל־10–15 דקות, או 5–8 דקות בקיצור. לשטוף עם מים פושרים תוך עיסוי עדין.",
      tip: "היא כבר עושה ניקוי עמוק, אז אין צורך להוסיף עוד פעילים חזקים מעל.",
    };
  }

  return {
    flow: "hydrating",
    kind: "מסיכה",
    when: "אחרי ניקוי ולפני הקרם, לפי הוראות המוצר.",
    order: ["ניקוי פנים", "מסיכה", "טונר / סרום אם מתאים", "קרם לחות"],
    wait: "לעקוב אחרי זמן ההמתנה שעל האריזה.",
    finish: "לסיים בקרם לחות כדי לנעול את ההרגשה הטובה.",
    tip: "מסיכה טובה היא רגע פינוק, לא מבחן סיבולת.",
  };
}

function getSpfAdvice() {
  const uv = Number(state.weather.uv || 0);
  if (uv >= 7) return "הקרינה גבוהה, מאמי. <strong style='color: #9075D7;'>SPF 50</strong> וחידוש כל שעתיים אם אתה בחוץ.";
  if (uv >= 4) return "<strong style='color: #9075D7;'>SPF 30-50</strong> מומלץ היום. במיוחד אם היו חומצות או רטינול.";
  return "גם ביום רגוע <strong style='color: #9075D7;'>SPF</strong> שומר על כל העבודה היפה שעשית.";
}

function getWeatherMood() {
  const temp = Math.round(state.weather.temp);
  if (temp >= 30) return "חמים ולח";
  if (temp <= 18) return "קריר ועדין";
  return state.weather.description || "נעים בחוץ";
}

function getWeatherIcon() {
  const description = String(state.weather.description || "");
  const temp = Math.round(Number(state.weather.temp || 0));
  if (/גשם|ממטרים/.test(description)) return "☔";
  if (/מעונן|עננים|ערפילי/.test(description)) return "☁️";
  if (temp >= 30) return "☀️";
  if (!isDayRoutine()) return "🌙";
  return "🌤️";
}

function getWeatherCopy() {
  const uv = Math.round(Number(state.weather.uv || 0));
  if (isDayRoutine()) return `UV ${uv}/11 · ${getSpfAdvice()}`;
  const tomorrowUv = Math.round(Number(state.weather.uvTomorrow ?? state.weather.uv ?? 0));
  return `למחר בבוקר: אם היה רטינול או חומצות הערב, <strong style='color: #9075D7;'>SPF</strong> יהיה חובה. UV צפוי סביב ${tomorrowUv}/11.`;
}

function pickSeeded(items, seed, offset = 0) {
  if (!items.length) return null;
  return items[Math.abs(Number(seed || 0) + offset) % items.length];
}

function buildCouplePlan(seed = Date.now()) {
  const plans = [
    { id: "glow", label: "פינוק לחות וזוהר", fits: ["dry", "glow", "antiaging"], mask: "23", hydrator: "18", serum: "10", cream: "13", text: "היום הולכים על עור רך, רגוע וזוהר. בלי דרמות, רק פינוק.", priority: 10 },
    { id: "pores", label: "נקבוביות וניקוי עדין", fits: ["oily", "breakouts"], mask: "28", hydrator: "3", serum: "25", cream: "31", text: "ניקוי קטן, לחות טובה, וזוגיות עם נקבוביות רגועות יותר.", priority: 5 },
    { id: "detox", label: "דיטוקס ושיקום", fits: ["oily"], mask: "29", hydrator: "18", serum: "16", cream: "30", text: "מנקים בעדינות ואז מחזירים לעור מלא רוגע. כמו ריסטארט קטן לפנים.", priority: 3 },
    { id: "sensitive", label: "עור רגיש ומאמי במיוחד", fits: ["sensitive", "red", "dry"], mask: "23", hydrator: "3", serum: "16", cream: "14", text: "שגרה עדינה, מרגיעה, ומלאה בלא להלחיץ את העור.", priority: 10 },
    { id: "spots", label: "זוהר וכתמים עדין", fits: ["spots", "glow"], mask: "23", hydrator: "2", serum: "25", cream: "13", text: "קצת זוהר, קצת אחידות, והרבה מאמי אתה נראה טוב היום.", priority: 10 },
    { id: "eyes", label: "עיניים עייפות + לחות", fits: ["dry", "glow"], mask: "23", hydrator: "18", eye: "5", cream: "31", text: "לחות לפנים, רוגע לעיניים, ורגע זוגי בלי למהר לשום מקום.", priority: 10 },
  ];
  const feeling = getFeeling().id;
  const eligible = plans.filter((plan) => plan.fits.includes(feeling) || !["sensitive", "red"].includes(feeling) || plan.id !== "detox");
  
  // מיון לפי priority (גבוה יותר = עדיפות גבוהה יותר)
  const sorted = eligible.length ? eligible.sort((a, b) => b.priority - a.priority) : plans;
  const plan = sorted[0] || plans[0];
  
  return {
    ...plan,
    seed,
    maskProduct: getProduct(plan.mask),
    hydratorProduct: getProduct(plan.hydrator),
    serumProduct: getProduct(plan.serum) || getProduct("16"),
    eyeProduct: getProduct(plan.eye) || pickSeeded(["5", "6", "8"].map(getProduct).filter(Boolean), seed, 6),
    creamProduct: getProduct(plan.cream),
  };
}

function getCouplePlan() {
  if (!state.couplePlan) state.couplePlan = buildCouplePlan(state.routineNonce);
  return state.couplePlan;
}

// ✅ קבלת labels דינמיים לפי ה-flow הפעיל
function getCoupleStepLabels(plan) {
  const maskTags = plan.maskProduct ? new Set(tagsFor(plan.maskProduct)) : new Set();
  const isHydratingMask = maskTags.has("collagen") || maskTags.has("hydrating") || 
                          maskTags.has("repair") || maskTags.has("sheet");
  
  // Labels משותפים - opening
  const openingLabels = ["פתיחה", "הכנה", "מגבת", "ניקוי", "פינוק", "מסיכה"];
  
  // Labels לפי סוג מסיכה
  if (isHydratingMask) {
    // Biodance: opening → skincare → mask wait → cream → finish
    return [
      ...openingLabels,      // 0-5
      "לחות",                // 6: hydrator
      "סרום",                // 7: serum
      "עיניים",              // 8: eye cream
      "טיימר",               // 9: mask wait
      "קרם",                 // 10: cream
      "סיום"                 // 11: closing
    ];
  } else {
    // Clay: opening → mask wait → skincare → cream → finish
    return [
      ...openingLabels,      // 0-5
      "טיימר",               // 6: mask wait
      "לחות",                // 7: hydrator
      "סרום",                // 8: serum
      "עיניים",              // 9: eye cream
      "קרם",                 // 10: cream
      "סיום"                 // 11: closing
    ];
  }
}

function coupleRandomText(items, offset = 0) {
  return pickSeeded(items, getCouplePlan().seed, offset);
}

function renderCoupleScreen() {
  const plan = getCouplePlan();
  const total = 12;
  const step = Math.max(0, Math.min(total - 1, state.coupleStep));
  const scene = renderCoupleScene(step, plan);
  const stepLabels = getCoupleStepLabels(plan);  // ✅ labels דינמיים!

  return el("section", { className: "screen active couple-screen" }, [
    el("div", { className: "card couple-screen-card" }, [
      el("div", { className: "card-inner" }, [
        step > 0 ? el("button", { className: "back-link inline-back", text: "חזור", onClick: goBack }) : null,
        // ✅ Stepper עם sliding window - מציג רק 7 שלבים במובייל
        el("div", { 
          className: "couple-stepper",
          style: "display: flex; align-items: flex-start; justify-content: space-between; margin: 1.5rem 0 2rem; padding: 0 0.5rem; width: 100%; max-width: 100%; overflow: hidden;"
        }, (() => {
          // חשב איזה שלבים להציג (sliding window)
          const maxVisible = window.innerWidth < 600 ? 7 : stepLabels.length;
          const totalSteps = stepLabels.length;
          
          let start = 0;
          let end = totalSteps;
          
          if (totalSteps > maxVisible) {
            // מרכז את השלב הנוכחי בwindow
            start = Math.max(0, step - Math.floor(maxVisible / 2));
            end = start + maxVisible;
            
            // אם הגענו לסוף, תזיז אחורה
            if (end > totalSteps) {
              end = totalSteps;
              start = end - maxVisible;
            }
          }
          
          const visibleLabels = stepLabels.slice(start, end);
          
          return visibleLabels.flatMap((label, visibleIndex) => {
            const actualIndex = start + visibleIndex;
            const items = [
              // Step item עם עיגול וכותרת
              el("div", {
                key: `step-${actualIndex}`,
                className: "step-item",
                style: "display: flex; flex-direction: column; align-items: center; gap: 0.25rem; flex-shrink: 1; min-width: 0;"
              }, [
                // עיגול השלב - responsive
                el("div", {
                  className: `step-circle ${actualIndex === step ? "active" : ""} ${actualIndex < step ? "done" : ""}`,
                  style: `
                    width: clamp(28px, 6vw, 36px);
                    height: clamp(28px, 6vw, 36px);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: clamp(12px, 3vw, 0.9rem);
                    font-weight: 600;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                    ${actualIndex < step ? 
                      "background: #9075D7; color: white; border: 2px solid #9075D7;" : 
                      actualIndex === step ? 
                        "background: white; color: #9075D7; border: 2px solid #9075D7; box-shadow: 0 0 0 4px rgba(144, 117, 215, 0.1);" :
                        "background: white; color: #9CA3AF; border: 2px solid #E5E7EB;"
                    }
                  `,
                  text: actualIndex < step ? "✓" : (actualIndex + 1).toString()
                }),
                // כותרת השלב - responsive
                el("span", {
                  style: `
                    font-size: clamp(10px, 2.2vw, 0.75rem);
                    text-align: center;
                    color: ${actualIndex === step ? "#9075D7" : actualIndex < step ? "#6B7280" : "#9CA3AF"};
                    font-weight: ${actualIndex === step ? "600" : "400"};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100%;
                  `,
                  text: label
                })
              ])
            ];
            
            // הוסף קו מחבר אחרי העיגול (אם לא השלב האחרון בwindow)
            if (visibleIndex < visibleLabels.length - 1) {
              items.push(
                el("div", {
                  key: `connector-${actualIndex}`,
                  className: "step-connector",
                  style: `
                    flex: 1;
                    height: 2px;
                    background: ${actualIndex < step ? "#9075D7" : "#E5E7EB"};
                    align-self: flex-start;
                    margin-top: clamp(14px, 3vw, 18px);
                    min-width: 8px;
                    max-width: 64px;
                  `
                })
              );
            }
            
            return items;
          });
        })()),
        scene,
        renderCoupleNav(step, total, plan),  // ← העברת plan
      ]),
    ]),
    // Modal להחלפת מוצרים
    state.coupleProductReplacement ? renderCoupleReplacementModal() : null,
  ]);
}

function renderCoupleReplacementModal() {
  const { type, current } = state.coupleProductReplacement;
  const replacements = getCoupleReplacementOptions(type, current);
  
  const typeLabels = {
    mask: "מסיכה",
    hydrator: "לחות בסיסית",
    serum: "סרום",
    eye: "קרם עיניים",
    cream: "קרם לחות"
  };
  
  return el("div", { 
    className: "replacement-overlay", 
    onClick: (e) => { 
      if (e.target.classList.contains("replacement-overlay")) {
        closeCoupleProductReplacement();
      }
    } 
  }, [
    el("div", { className: "replacement-modal" }, [
      el("button", { 
        className: "replacement-close", 
        text: "×",
        onClick: closeCoupleProductReplacement
      }),
      el("h3", { className: "replacement-title", text: `החלף ${typeLabels[type] || 'מוצר'}` }),
      
      // המוצר הנוכחי
      current ? el("div", { className: "current-product-section" }, [
        el("p", { className: "section-label", text: "מוצר נוכחי:" }),
        el("div", { className: "current-product-card" }, [
          renderProductImage(current, "replacement-product-image"),
          el("div", { className: "replacement-product-info" }, [
            el("p", { className: "replacement-product-name", text: current.name }),
            el("p", { className: "replacement-product-meta", text: `${current.brand} · ${friendlyType(current.type)}` }),
          ]),
        ]),
      ]) : null,
      
      // מוצרים חלופיים
      replacements.length > 0
        ? el("div", { className: "replacements-section" }, [
            el("p", { className: "section-label", text: "בחר מוצר חלופי:" }),
            el("div", { className: "replacements-grid" }, 
              replacements.map((product) =>
                el("button", {
                  className: "replacement-option",
                  onClick: () => replaceCoupleProduct(product)
                }, [
                  renderProductImage(product, "replacement-option-image"),
                  el("div", { className: "replacement-option-info" }, [
                    el("p", { className: "replacement-option-name", text: product.name }),
                    el("p", { className: "replacement-option-brand", text: product.brand }),
                  ]),
                ])
              )
            ),
          ])
        : el("p", { className: "no-replacements", text: "לא נמצאו מוצרים חלופיים מתאימים" }),
    ])
  ]);
}

function renderCoupleScene(step, plan) {
  const preTasks = [
    "תגיד למאמי משהו אחד שאתה אוהב בו.",
    "כל אחד אומר לשני מחמאה אחת — בלי להתחמק.",
    "תבחרו שיר אחד שיהיה שיר הספא שלכם.",
    "תעשו סלפי לפני המסיכה. כן, גם אם זה מביך.",
    "כל אחד נותן לשני שם ספא מפונפן ל-10 דקות הקרובות.",
  ];
  const waitTasks = [
    "כל אחד מספר לשני רגע קטן מהיום שלו.",
    "תגיד לו משהו שהוא עושה שמרגיע אותך.",
    "בחרו יעד חלומי לספא זוגי.",
    "תעשו פרצוף מסיכה הכי דרמטי שיש.",
    "כל אחד אומר לשני: מאמי, אתה זוהר. חובה ברצינות מוגזמת.",
  ];
  
  const finishTexts = [
    "מאמי, אתם נראים כמו פרסומת ללחות.",
    "זוג זוהר, עור רגוע, לב שמח.",
    "עכשיו חובה לשתות מים ולהגיד אחד לשני: איזה חתיך אתה.",
    "טיפוח זוגי הושלם בהצלחה. נשיקות לא כלולות, אבל מומלצות.",
  ];
  
  // ✅ זיהוי סוג מסיכה
  const maskTags = plan.maskProduct ? new Set(tagsFor(plan.maskProduct)) : new Set();
  const isClayMask = maskTags.has("clay") || maskTags.has("detox") || maskTags.has("pore");
  const isHydratingMask = maskTags.has("collagen") || maskTags.has("hydrating") || 
                          maskTags.has("repair") || maskTags.has("sheet");

  // שלבים משותפים - תחילה
  const openingScenes = [
    () => el("div", { className: "couple-scene opening" }, [
      el("img", { className: "couple-hero-asset", src: "./assets/brand/couple-care.png", alt: "זמן טיפוח זוגי" }),
      el("p", { className: "eyebrow", text: "חוויה זוגית" }),
      el("h2", { text: "זמן טיפוח זוגי 💕" }),
      el("p", { text: "מאמי, זה הזמן שלכם לעצור רגע, לשים את העולם על שקט, ולהפוך את הבית לספא קטן וחמוד רק לשניכם." }),
    ]),
    
    () => renderCoupleTextScene(
      "מכינים את האווירה", 
      "תביאו מגבת קטנה לכל אחד, כוס מים. זה הזמן להכנס לאווירת ספא בבית. הפעילו מוזיקה נעימה ומרגיעה, והדליקו נרות.", 
      ["להכין מגבות", "לשטוף ידיים", "לבחור מקום נוח"],
      { spotifyButton: true }
    ),
    
    () => renderCoupleTextScene(
      "מגבת חמימה, כי מגיע לכם", 
      "הרטיבו מגבת קטנה במים חמימים, סחטו בעדינות והניחו על הפנים לכמה שניות. זה מרכך את העור ופותח את הרגע בטוב.", 
      ["מאמי, לא מים רותחים. אנחנו עושים ספא, לא מרק."]
    ),
    
    () => renderCoupleTextScene(
      "ניקוי עדין", 
      "שטפו פנים בעדינות. בלי לשפשף חזק — העור שלכם רוצה אהבה, לא קרצוף של סיר.", 
      ["אהבה גם לעור הפנים"]
    ),
    
    () => renderCoupleTextScene(
      "רגע של פינוק", 
      "עשו אחד לשני דודו או מסאג׳ מפנק למשך 10 דקות.", 
      [],
      { timer: { minutes: 10, label: "10 דקות" } }
    ),
    
    // ✅ המסיכה - תמיד מוצגת פה (לפני branching)
    () => renderCoupleProductScene(
      "המסיכה שלכם להיום 🎭", 
      plan.maskProduct, 
      getCoupleMaskText(plan.maskProduct), 
      [plan.text, getMaskUsage(plan.maskProduct)?.when].filter(Boolean),
      { replaceButton: true, productType: 'mask' }
    ),
  ];
  
  // שלבי טיפוח לפני מסיכה (Biodance)
  const skincareBeforeMask = [
    () => renderCoupleProductScene(
      "רגע של לחות והרגעה", 
      plan.hydratorProduct, 
      "עכשיו מחזירים לעור לחות ורוגע. כמה טפיחות עדינות, בלי למהר. אפשר שכל אחד יטפיח לשני בעדינות — הכי מאמי שיש.", 
      [],
      { replaceButton: true, productType: 'hydrator' }
    ),
    
    () => renderCoupleProductScene(
      "בוחרים בוסט קטן לעור", 
      plan.serumProduct, 
      "זה שלב הבוסט. כמה טיפות, מריחה עדינה, ולתת לעור לשתות את זה בכיף.", 
      ["מאמי, תמרח לו בעדינות כאילו אתה מטפל ביצירת אמנות קטנה. כי אתה כן."],
      { replaceButton: true, productType: 'serum' }
    ),
    
    () => renderCoupleProductScene(
      "קצת אהבה לעיניים", 
      plan.eyeProduct, 
      "טיפה קטנה סביב העיניים, בטפיחות עדינות. לא למשוך, לא לשפשף, רק פינוק קטן.", 
      ["זה שלב אופציונלי. אם לא בא לכם, מדלגים וממשיכים."],
      { replaceButton: true, productType: 'eye' }
    ),
  ];
  
  // שלב המסיכה + המתנה
  const maskWaitScene = [
    () => renderCoupleMaskTimerScene(plan.maskProduct),
  ];
  
  // שלבי טיפוח אחרי מסיכה (Clay)
  const skincareAfterMask = [
    () => renderCoupleProductScene(
      "רגע של לחות והרגעה", 
      plan.hydratorProduct, 
      "עכשיו מחזירים לעור לחות ורוגע. כמה טפיחות עדינות, בלי למהר. אפשר שכל אחד יטפיח לשני בעדינות — הכי מאמי שיש.", 
      ["אחרי מסיכת חימר/שטיפה עדיף משהו מרגיע כמו Pyunkang Yul או Snail 96."],
      { replaceButton: true, productType: 'hydrator' }
    ),
    
    () => renderCoupleProductScene(
      "בוחרים בוסט קטן לעור", 
      plan.serumProduct, 
      "זה שלב הבוסט. כמה טיפות, מריחה עדינה, ולתת לעור לשתות את זה בכיף.", 
      ["מאמי, תמרח לו בעדינות כאילו אתה מטפל ביצירת אמנות קטנה. כי אתה כן."],
      { replaceButton: true, productType: 'serum' }
    ),
    
    () => renderCoupleProductScene(
      "קצת אהבה לעיניים", 
      plan.eyeProduct, 
      "טיפה קטנה סביב העיניים, בטפיחות עדינות. לא למשוך, לא לשפשף, רק פינוק קטן.", 
      ["זה שלב אופציונלי. אם לא בא לכם, מדלגים וממשיכים לקרם לחות."],
      { replaceButton: true, productType: 'eye' }
    ),
  ];
  
  // קרם פנים (תמיד אחרון)
  const creamScene = [
    () => renderCoupleProductScene(
      "נועלים את כל הטוב", 
      plan.creamProduct, 
      "עכשיו סוגרים את השגרה עם קרם לחות. זה השלב שאומר לעור: שמרתי לך את כל הטוב בפנים.", 
      ["אפשר שכל אחד ימרח לשני על הלחיים בעדינות. אם מישהו מגזים בכמות — הוא רשמית מאמי קרם."],
      { replaceButton: true, productType: 'cream' }
    ),
  ];
  
  // שלב סיום
  const closingScene = [
    () => el("div", { className: "couple-scene" }, [
      el("p", { className: "eyebrow", text: "הושלם" }),
      el("h2", { text: "זהו, אתם זוהרים 💕" }),
      el("p", { text: "סיימתם את זמן הטיפוח הזוגי שלכם. העור קיבל אהבה, אתם קיבלתם רגע ביחד, וזה לגמרי נחשב דייט קטן בבית." }),
      el("div", { className: "success-note", text: coupleRandomText(finishTexts, 9) }),
      // ✅ תמונה של זוגיות
      el("img", {
        src: "./assets/brand/shine-together.png",
        alt: "זוג זוהר ביחד",
        style: "width: min(78vw, 320px); height: auto; display: block; margin: 24px auto; object-fit: contain; mix-blend-mode: screen; opacity: 0.95;"
      }),
    ]),
  ];
  
  // ✅ בניית הסדר לפי סוג מסיכה
  let scenes;
  
  if (isHydratingMask) {
    // Biodance: פתיחה + מסך מסיכה → skincare → מסיכה+טיימר → cream → סיום
    scenes = [
      ...openingScenes,          // כולל "המסיכה שלכם להיום"
      ...skincareBeforeMask,     // Hydrator, Serum, Eye
      ...maskWaitScene,          // "רגע של פינוק והמתנה" + טיימר
      ...creamScene,             // Cream
      ...closingScene
    ];
  } else {
    // Clay: פתיחה + מסך מסיכה → מסיכה+טיימר → skincare → cream → סיום
    scenes = [
      ...openingScenes,          // כולל "המסיכה שלכם להיום"
      ...maskWaitScene,          // "רגע של פינוק והמתנה" + טיימר
      ...skincareAfterMask,      // Hydrator, Serum, Eye
      ...creamScene,             // Cream
      ...closingScene
    ];
  }

  return scenes[step]();
}

function renderCoupleTextScene(title, text, actions = [], options = {}) {
  const { spotifyButton, timer, suggestions } = options;
  
  return el("div", { className: "couple-scene" }, [
    el("p", { className: "eyebrow", text: "שלב טיפוח זוגי" }),
    el("h2", { text: title }),
    el("p", { text }),
    
    // כפתור Spotify
    spotifyButton ? el("a", {
      href: "https://open.spotify.com/playlist/5EsjbD20Kzq8ONeJyHJoW9?si=O2KzZgd-SfeaOHCbbJ4kQQ&pi=qm9A4PZWStCrc&nd=1&dlsi=e683ba474bb74774",
      target: "_blank",
      className: "button primary",
      style: "margin: 1rem 0; display: inline-block; text-decoration: none; text-align: center; background: #D4CAEF; color: #9075D7; border: 2px solid #9075D7;"
    }, [document.createTextNode("🎵 מוזיקת ספא")]) : null,
    
    // טיימר
    timer ? renderCoupleTimer(timer) : null,
    
    // הצעות רומנטיות
    suggestions ? renderCoupleSuggestions() : null,
    
    // פעולות רגילות
    actions.length ? el("div", { className: "couple-action-list" }, actions.map((action) => el("span", { text: action }))) : null,
  ]);
}

function renderCoupleTimer(timerConfig) {
  const { minutes, label } = timerConfig;
  const isActive = state.coupleTimerSeconds > 0;
  const isRunning = state.coupleTimerInterval !== null;
  
  // חישוב אחוז התקדמות - מתחיל מריק ומתמלא
  const totalSeconds = minutes * 60;
  const progress = isActive ? (state.coupleTimerSeconds / totalSeconds) : 1;
  
  // SVG circle parameters
  const radius = 80;
  const strokeWidth = 5;  // מסגרת דקה יותר
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * progress;  // התקדמות - מתמלא ככל שהזמן עובר
  
  return el("div", { 
    className: "couple-timer-container", 
    style: "margin: 1.5rem 0; padding: 1.5rem; background: var(--color-surface); border-radius: 12px; text-align: center;" 
  }, [
    // תצוגת טיימר עגול
    isActive ? el("div", {
      style: "position: relative; width: 200px; height: 200px; margin: 0 auto 1.5rem;"
    }, [
      // SVG עיגול מתקדם
      (() => {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "200");
        svg.setAttribute("height", "200");
        svg.setAttribute("viewBox", "0 0 200 200");
        svg.style.transform = "rotate(-90deg)";
        
        // עיגול רקע (בהיר דק)
        const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bgCircle.setAttribute("cx", "100");
        bgCircle.setAttribute("cy", "100");
        bgCircle.setAttribute("r", radius.toString());
        bgCircle.setAttribute("fill", "none");
        bgCircle.setAttribute("stroke", "#D4CAEF");
        bgCircle.setAttribute("stroke-width", strokeWidth.toString());
        
        // עיגול מתקדם - צבע אחיד סגול
        const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        progressCircle.setAttribute("cx", "100");
        progressCircle.setAttribute("cy", "100");
        progressCircle.setAttribute("r", radius.toString());
        progressCircle.setAttribute("fill", "none");
        progressCircle.setAttribute("stroke", "#9075D7");
        progressCircle.setAttribute("stroke-width", strokeWidth.toString());
        progressCircle.setAttribute("stroke-linecap", "round");
        progressCircle.setAttribute("stroke-dasharray", circumference.toString());
        progressCircle.setAttribute("stroke-dashoffset", strokeDashoffset.toString());
        progressCircle.setAttribute("class", "couple-timer-circle");
        progressCircle.style.transition = "stroke-dashoffset 0.3s ease-out";
        
        svg.appendChild(bgCircle);
        svg.appendChild(progressCircle);
        
        return svg;
      })(),
      
      // הזמן במרכז העיגול
      el("div", {
        className: "couple-timer-text",
        style: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; font-weight: bold; color: var(--color-text);"
      }, [
        document.createTextNode(formatTime(state.coupleTimerSeconds))
      ])
    ]) : null,
    
    // כפתורים
    el("div", { className: "timer-controls", style: "display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;" }, [
      !isActive ? 
        el("button", {
          className: "button primary",
          text: `הפעל טיימר ${label || minutes + ' דקות'}`,
          onClick: () => startCoupleTimer(minutes)
        }) : null,
      
      isActive && isRunning ?
        el("button", {
          className: "button",
          text: "השהה",
          onClick: toggleCoupleTimer
        }) : null,
      
      isActive && !isRunning ?
        el("button", {
          className: "button primary",
          text: "המשך",
          onClick: toggleCoupleTimer
        }) : null,
      
      isActive ?
        el("button", {
          className: "button secondary",
          text: "התחל מחדש",
          onClick: () => resetCoupleTimer(minutes)
        }) : null,
    ])
  ]);
}

function renderCoupleSuggestions() {
  const currentSuggestion = coupleSuggestions[state.coupleSuggestionIndex];
  
  return el("div", { 
    className: "couple-suggestions-card",
    style: "margin: 1.5rem 0; padding: 1.5rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; color: white;"
  }, [
    el("h3", { 
      style: "margin: 0 0 1rem 0; font-size: 1.1rem; text-align: center; color: white;",
      text: "דברים שאפשר לעשות בזמן הזה"
    }),
    el("div", {
      style: "text-align: center; margin: 1rem 0;"
    }, [
      el("div", { 
        style: "font-size: 30px; margin-bottom: 0.5rem;",
        text: currentSuggestion.emoji
      }),
      el("p", { 
        style: "font-size: 1.1rem; margin: 0; color: white; line-height: 1.5;",
        text: currentSuggestion.text
      })
    ]),
    el("button", {
      className: "button",
      style: "background: white; color: #f5576c; border: none; width: 100%; margin-top: 0.5rem;",
      text: "עוד משהו חמוד 💕",
      onClick: getRandomSuggestion
    })
  ]);
}

function renderCoupleMaskTimerScene(maskProduct) {
  const timerOptions = getMaskTimerOptions(maskProduct);
  const isActive = state.coupleTimerSeconds > 0;
  const isRunning = state.coupleTimerInterval !== null;
  const maskUsage = getMaskUsage(maskProduct);
  
  // חישוב אחוז התקדמות - מתחיל מריק ומתמלא
  const firstOption = timerOptions.find(o => o.recommended) || timerOptions[0];
  const selectedMinutes = state.coupleSelectedTimerMinutes || firstOption.minutes;  // ← הזמן שנבחר!
  const totalSeconds = selectedMinutes * 60;
  const progress = isActive ? (state.coupleTimerSeconds / totalSeconds) : 1;
  const radius = 80;
  const strokeWidth = 5;  // מסגרת דקה
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * progress;  // מתמלא ככל שהזמן עובר
  
  return el("div", { className: "couple-scene" }, [
    el("p", { className: "eyebrow", text: "זמן מסיכה" }),
    el("h2", { text: "רגע של פינוק והמתנה 💕" }),
    
    // הוראות למסיכה - כרטיסים בשורה
    maskUsage ? el("div", { 
      className: "mask-instructions-cards",
      style: "display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap; justify-content: space-between;"
    }, [
      // כרטיס "איך לשים"
      el("div", {
        style: "flex: 1; min-width: 250px; background: #F6F5FA; border: 1px solid #8D77AC; border-radius: 12px; padding: 1.25rem; text-align: center;"
      }, [
        el("div", { 
          style: "font-size: 1.75rem; margin-bottom: 0.5rem;",
          text: "💡"
        }),
        el("h3", { 
          style: "color: #9575DD; margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 600;",
          text: "איך לשים את המסיכה"
        }),
        el("p", { 
          style: "margin: 0; line-height: 1.6; color: #374151; font-size: 0.95rem;",
          text: maskUsage.how || maskUsage.when
        })
      ]),
      
      // כרטיס "כמה זמן"
      el("div", {
        style: "flex: 1; min-width: 250px; background: #F6F5FA; border: 1px solid #8D77AC; border-radius: 12px; padding: 1.25rem; text-align: center;"
      }, [
        el("div", { 
          style: "font-size: 1.75rem; margin-bottom: 0.5rem;",
          text: "⏳"
        }),
        el("h3", { 
          style: "color: #9575DD; margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 600;",
          text: "כמה זמן להשאיר"
        }),
        el("p", { 
          style: "margin: 0; line-height: 1.6; color: #374151; font-size: 0.95rem;",
          html: maskUsage.wait.replace(/(\d+-\d+)/g, '<span style="color: #9575DD; font-weight: bold;">$1</span>')
        })
      ]),
      
      // כרטיס "איך להוריד"
      el("div", {
        style: "flex: 1; min-width: 250px; background: #F6F5FA; border: 1px solid #8D77AC; border-radius: 12px; padding: 1.25rem; text-align: center;"
      }, [
        el("div", { 
          style: "font-size: 1.75rem; margin-bottom: 0.5rem;",
          text: "✖️"
        }),
        el("h3", { 
          style: "color: #9575DD; margin: 0 0 0.75rem 0; font-size: 1rem; font-weight: 600;",
          text: "איך להוריד"
        }),
        el("p", { 
          style: "margin: 0; line-height: 1.6; color: #374151; font-size: 0.95rem;",
          text: maskUsage.finish
        })
      ])
    ]) : el("p", { text: "בחרו את משך הזמן המתאים למסיכה שלכם:" }),
    
    // כפתורי טיימר
    !isActive ? el("div", { 
      className: "mask-timer-options",
      style: "display: flex; gap: 1rem; justify-content: center; margin: 1.5rem 0; flex-wrap: wrap;"
    }, timerOptions.map(option => 
      el("button", {
        className: option.recommended ? "button primary" : "button",
        style: option.recommended ? "font-weight: bold;" : "",
        text: `${option.label} ${option.note || ''}`,
        onClick: () => startCoupleTimer(option.minutes)
      })
    )) : null,
    
    // תצוגת טיימר פעיל עם עיגול
    isActive ? el("div", { 
      className: "couple-timer-container", 
      style: "margin: 1.5rem 0; padding: 1.5rem; background: var(--color-surface); border-radius: 12px; text-align: center;" 
    }, [
      // טיימר עגול
      el("div", {
        style: "position: relative; width: 200px; height: 200px; margin: 0 auto 1.5rem;"
      }, [
        // SVG עיגול מתקדם
        (() => {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("width", "200");
          svg.setAttribute("height", "200");
          svg.setAttribute("viewBox", "0 0 200 200");
          svg.style.transform = "rotate(-90deg)";
          
          // עיגול רקע - צבע מותג
          const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          bgCircle.setAttribute("cx", "100");
          bgCircle.setAttribute("cy", "100");
          bgCircle.setAttribute("r", radius.toString());
          bgCircle.setAttribute("fill", "none");
          bgCircle.setAttribute("stroke", "#D4CAEF");  // ← צבע מותג בהיר
          bgCircle.setAttribute("stroke-width", strokeWidth.toString());
          
          // עיגול מתקדם - צבע סגול אחיד (ללא גרדיאנט)
          const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          progressCircle.setAttribute("cx", "100");
          progressCircle.setAttribute("cy", "100");
          progressCircle.setAttribute("r", radius.toString());
          progressCircle.setAttribute("fill", "none");
          progressCircle.setAttribute("stroke", "#9075D7");  // ← צבע סגול מותג
          progressCircle.setAttribute("stroke-width", strokeWidth.toString());
          progressCircle.setAttribute("stroke-linecap", "round");
          progressCircle.setAttribute("stroke-dasharray", circumference.toString());
          progressCircle.setAttribute("stroke-dashoffset", strokeDashoffset.toString());
          progressCircle.setAttribute("class", "couple-timer-circle");
          progressCircle.style.transition = "stroke-dashoffset 0.3s ease-out";
          
          svg.appendChild(bgCircle);
          svg.appendChild(progressCircle);
          
          return svg;
        })(),
        
        // הזמן במרכז
        el("div", {
          className: "couple-timer-text",
          style: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; font-weight: bold; color: var(--color-text);"
        }, [
          document.createTextNode(formatTime(state.coupleTimerSeconds))
        ])
      ]),
      
      // כפתורים
      el("div", { className: "timer-controls", style: "display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;" }, [
        isRunning ?
          el("button", {
            className: "button",
            text: "השהה",
            onClick: toggleCoupleTimer
          }) :
          el("button", {
            className: "button primary",
            text: "המשך",
            onClick: toggleCoupleTimer
          }),
        
        el("button", {
          className: "button secondary",
          text: "התחל מחדש",
          onClick: () => resetCoupleTimer(state.coupleSelectedTimerMinutes || firstOption.minutes)  // ← הזמן שנבחר!
        }),
        
        el("button", {
          className: "button secondary",
          text: "החלף טיימר",
          onClick: () => {
            if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
            setState({
              coupleTimerActive: false,
              coupleTimerSeconds: 0,
              coupleTimerInterval: null
            });
          }
        })
      ])
    ]) : null,
    
    // הצעות רומנטיות
    renderCoupleSuggestions()
  ]);
}

function renderCoupleProductScene(title, product, text, notes = [], options = {}) {
  const { replaceButton, productType } = options;
  
  return el("div", { className: "couple-scene" }, [
    el("p", { className: "eyebrow", text: "מוצר מהמלאי" }),
    el("h2", { text: title }),
    renderCoupleProductCard(product, replaceButton, productType),
    el("p", { text }),
    notes.length ? el("div", { className: "couple-action-list" }, notes.map((note) => el("span", { text: note }))) : null,
  ]);
}

function renderCoupleProductCard(product, showReplaceButton = false, productType = null) {
  if (!product) return el("div", { className: "empty", text: "לא מצאתי מוצר מתאים במלאי, אז ממשיכים כהנחיה כללית ועדינה." });
  
  return el("div", {}, [
    el("article", { className: "couple-product-card" }, [
      renderProductImage(product, "couple-product-image"),
      el("div", {}, [
        el("strong", { text: product.name }),
        el("span", { text: `${product.brand} · ${friendlyType(product.type)}` }),
        renderTagPills(product),
      ]),
    ]),
    
    // כפתור החלף מוצר
    showReplaceButton ? el("button", {
      className: "button secondary",
      style: "margin-top: 1rem;",
      text: "החלף מוצר",
      onClick: () => openCoupleProductReplacement(productType, product)
    }) : null
  ]);
}

function getCoupleMaskText(product) {
  if (!product) return "היום הולכים על מסיכה עדינה, בלי פעילים חזקים.";
  if (product.id === "23") return "היום הולכים על וייב זוהר ומפנק. מסיכת קולגן, קצת שקט, וקצת להיראות כאילו ישנתם 9 שעות.";
  if (product.id === "28") return "היום מנקים נקבוביות בסטייל. תמרחו שכבה עדינה, ותשתדלו לא לצחוק יותר מדי אחד על השני.";
  if (product.id === "29") return "היום זה דיטוקס קטן לפנים. לא להשאיר יותר מדי זמן — אנחנו רוצים עור נקי, לא מדבר סהרה.";
  return product.simpleDesc;
}

// פונקציות החלפת מוצרים למצב זוגי
function openCoupleProductReplacement(productType, currentProduct) {
  setState({
    coupleProductReplacement: { type: productType, current: currentProduct }
  });
}

function closeCoupleProductReplacement() {
  setState({ coupleProductReplacement: null });
}

function replaceCoupleProduct(newProduct) {
  const { type } = state.coupleProductReplacement;
  const plan = state.couplePlan;
  
  // עדכון התכנית עם המוצר החדש
  const newPlan = { ...plan };
  
  if (type === 'mask') newPlan.maskProduct = newProduct;
  else if (type === 'hydrator') newPlan.hydratorProduct = newProduct;
  else if (type === 'serum') newPlan.serumProduct = newProduct;
  else if (type === 'eye') newPlan.eyeProduct = newProduct;
  else if (type === 'cream') newPlan.creamProduct = newProduct;
  
  setState({
    couplePlan: newPlan,
    coupleProductReplacement: null
  });
}

function getCoupleReplacementOptions(productType, currentProduct) {
  const context = {
    timeOfDay: "לילה",
    feeling: state.feeling,
    coupleMode: true,
    includeMask: true
  };
  
  let candidates = [];
  
  if (productType === 'mask') {
    candidates = products.filter(p => 
      p.type === "Mask" && 
      p.id !== currentProduct?.id &&
      isSafeAddition(p, [], context.feeling)
    );
  } else if (productType === 'hydrator') {
    candidates = products.filter(p => 
      (p.type === "Toner" || p.type === "Essence") &&
      p.id !== currentProduct?.id &&
      productMatchesTime(p, context.timeOfDay)
    );
  } else if (productType === 'serum') {
    candidates = products.filter(p => 
      p.type === "Serum" &&
      p.id !== currentProduct?.id &&
      productMatchesTime(p, context.timeOfDay) &&
      !hasTag(p, "retinoid") &&
      !hasTag(p, "acid") &&
      !hasTag(p, "spot")
    );
  } else if (productType === 'eye') {
    candidates = products.filter(p => 
      p.type === "Eye Cream" &&
      p.id !== currentProduct?.id &&
      !hasTag(p, "retinoid")
    );
  } else if (productType === 'cream') {
    candidates = products.filter(p => 
      p.type === "Cream" &&
      p.id !== currentProduct?.id &&
      productMatchesTime(p, context.timeOfDay)
    );
  }
  
  // מיון לפי ציון
  return candidates
    .map(p => ({ product: p, score: scoreProduct(p, context) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.product);
}

// פונקציות טיימר למצב זוגי
function startCoupleTimer(minutes) {
  if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
  
  setState({
    coupleTimerActive: true,
    coupleTimerSeconds: minutes * 60,
    coupleSelectedTimerMinutes: minutes,  // ← שמירת הזמן שנבחר!
    coupleTimerInterval: setInterval(() => {
      if (state.coupleTimerSeconds > 0) {
        state.coupleTimerSeconds = state.coupleTimerSeconds - 1;
        
        // עדכון ישיר של ה-DOM ללא render מלא
        const timerDisplays = document.querySelectorAll('.couple-timer-text');
        timerDisplays.forEach(display => {
          if (display) display.textContent = formatTime(state.coupleTimerSeconds);
        });
        
        // עדכון העיגול - מתמלא ככל שהזמן עובר
        const totalSeconds = minutes * 60;
        const progress = state.coupleTimerSeconds / totalSeconds;
        const radius = 80;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference * progress;
        
        const progressCircles = document.querySelectorAll('.couple-timer-circle');
        progressCircles.forEach(circle => {
          if (circle) circle.setAttribute('stroke-dashoffset', strokeDashoffset.toString());
        });
      } else {
        clearInterval(state.coupleTimerInterval);
        setState({ coupleTimerActive: false, coupleTimerInterval: null });
      }
    }, 1000)
  });
}

function toggleCoupleTimer() {
  if (state.coupleTimerInterval) {
    clearInterval(state.coupleTimerInterval);
    setState({ coupleTimerInterval: null });
  } else if (state.coupleTimerSeconds > 0) {
    const totalMinutes = Math.ceil(state.coupleTimerSeconds / 60);
    setState({
      coupleTimerInterval: setInterval(() => {
        if (state.coupleTimerSeconds > 0) {
          state.coupleTimerSeconds = state.coupleTimerSeconds - 1;
          
          // עדכון ישיר של ה-DOM
          const timerDisplays = document.querySelectorAll('.couple-timer-text');
          timerDisplays.forEach(display => {
            if (display) display.textContent = formatTime(state.coupleTimerSeconds);
          });
          
          // עדכון העיגול - מתמלא ככל שהזמן עובר
          const totalSeconds = totalMinutes * 60;
          const progress = state.coupleTimerSeconds / totalSeconds;
          const radius = 80;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference * progress;
          
          const progressCircles = document.querySelectorAll('.couple-timer-circle');
          progressCircles.forEach(circle => {
            if (circle) circle.setAttribute('stroke-dashoffset', strokeDashoffset.toString());
          });
        } else {
          clearInterval(state.coupleTimerInterval);
          setState({ coupleTimerActive: false, coupleTimerInterval: null });
        }
      }, 1000)
    });
  }
}

function resetCoupleTimer(minutes) {
  if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
  setState({
    coupleTimerActive: false,
    coupleTimerSeconds: 0,
    coupleTimerInterval: null
  });
  setTimeout(() => startCoupleTimer(minutes), 100);
}

function formatTime(seconds) {
  // אם זה יותר משעה - מציג שעות:דקות (ללא שניות)
  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
  
  // אחרת - דקות:שניות
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// פונקציה להצעה אקראית חדשה עם bias למשימת סלפי
function getRandomSuggestion() {
  const selfieIndex = 8; // אינדקס של משימת הסלפי
  
  // רשימת משימות שכבר הוצגו בסבב הנוכחי
  const shownIndexes = state.coupleSuggestionsShown || [];
  
  // יצירת רשימה של אינדקסים שעדיין לא הוצגו
  const availableIndexes = coupleSuggestions
    .map((_, i) => i)
    .filter(i => !shownIndexes.includes(i));
  
  // אם עברנו על כל המשימות, מתחילים סבב חדש
  if (availableIndexes.length === 0) {
    // shuffle חדש - מתחילים מהתחלה
    const firstIndex = Math.floor(Math.random() * coupleSuggestions.length);
    setState({ 
      coupleSuggestionIndex: firstIndex,
      coupleSuggestionsShown: [firstIndex]  // מתחילים סבב חדש
    });
    return;
  }
  
  // אם זה אחד מ-5 הראשונות ומשימת הסלפי עדיין זמינה - bias גבוה
  const isSelfieAvailable = availableIndexes.includes(selfieIndex);
  
  if (shownIndexes.length < 5 && isSelfieAvailable && Math.random() < 0.6) {
    // 60% סיכוי למשימת סלפי בתוך 5 הראשונות
    setState({ 
      coupleSuggestionIndex: selfieIndex,
      coupleSuggestionsShown: [...shownIndexes, selfieIndex]
    });
  } else {
    // בחירה רנדומלית ממשימות שעדיין לא הוצגו
    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    setState({ 
      coupleSuggestionIndex: randomIndex,
      coupleSuggestionsShown: [...shownIndexes, randomIndex]
    });
  }
}

// זמני מסיכות לפי מוצר
function getMaskTimerOptions(product) {
  if (!product) return [{ minutes: 15, label: "15 דקות", recommended: true }];
  
  if (product.id === "23") {
    // Collagen Mask - sleeping sheet mask
    return [
      { minutes: 120, label: "2 שעות", recommended: true, note: "(מומלץ!)" },
      { minutes: 60, label: "שעה", recommended: false, note: "(גם טוב)" },
      { minutes: 40, label: "40 דקות", recommended: false, note: "(מינימום)" }
    ];
  }
  
  if (product.id === "28") {
    // Red Bean Mask
    return [
      { minutes: 15, label: "15 דקות", recommended: true, note: "(מומלץ!)" },
      { minutes: 10, label: "10 דקות", recommended: false, note: "(גם טוב)" },
      { minutes: 7, label: "7 דקות", recommended: false, note: "(קצר)" }
    ];
  }
  
  if (product.id === "29") {
    // Clay Detox Mask
    return [
      { minutes: 15, label: "15 דקות", recommended: true, note: "(מומלץ!)" },
      { minutes: 10, label: "10 דקות", recommended: false, note: "(גם טוב)" },
      { minutes: 8, label: "8 דקות", recommended: false, note: "(קצר)" }
    ];
  }
  
  // ברירת מחדל
  return [
    { minutes: 15, label: "15 דקות", recommended: true, note: "(מומלץ!)" },
    { minutes: 10, label: "10 דקות", recommended: false, note: "(גם טוב)" }
  ];
}

function renderCoupleNav(step, total, plan) {
  // פונקציה לעצירת טיימר לפני מעבר לשלב הבא
  const stopTimerAndAdvance = (nextStep) => {
    if (state.coupleTimerInterval) {
      clearInterval(state.coupleTimerInterval);
    }
    setState({ 
      coupleStep: nextStep,
      coupleTimerActive: false,
      coupleTimerSeconds: 0,
      coupleTimerInterval: null
    });
  };
  
  // ✅ זיהוי סוג מסיכה וחישוב step של Eye ו-Mask
  const maskTags = plan.maskProduct ? new Set(tagsFor(plan.maskProduct)) : new Set();
  const isHydratingMask = maskTags.has("collagen") || maskTags.has("hydrating") || 
                          maskTags.has("repair") || maskTags.has("sheet");
  
  // חישוב steps
  // openingScenes: 6 items (0-5)
  // Biodance: skincare (6-8) → mask (9) → cream (10) → closing (11)
  // Clay: mask (6) → skincare (7-9) → cream (10) → closing (11)
  const eyeStep = isHydratingMask ? 8 : 9;
  const maskStep = isHydratingMask ? 9 : 6;  // ← step של מסיכה
  
  if (step === 0) {
    return el("div", { className: "row-actions couple-actions" }, [
      el("button", { className: "button primary-hero", text: "מתחילים ✨", onClick: () => stopTimerAndAdvance(1) }),
      el("button", { className: "button secondary", text: "חזרה לבית", onClick: () => {
        if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
        navigate("home");
      } }),
    ]);
  }
  if (step === total - 1) {
    return el("div", { className: "row-actions couple-actions" }, [
      el("button", { className: "button", text: "סיימנו 💕", onClick: () => {
        if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
        navigate("home");
      } }),
      el("button", { className: "button secondary", text: "בנה לנו שגרה זוגית חדשה", onClick: () => startCoupleFlow(true) }),
      el("button", { className: "button secondary", text: "חזרה לבית", onClick: () => {
        if (state.coupleTimerInterval) clearInterval(state.coupleTimerInterval);
        navigate("home");
      } }),
    ]);
  }
  return el("div", { className: "row-actions couple-actions", style: "display: flex; flex-direction: column; gap: 0.5rem; align-items: stretch;" }, [
    el("button", { 
      className: "button", 
      style: "width: 100%;",
      // ✅ טקסט מסיכה גם ל-Biodance (step 9) וגם ל-Clay (step 6)
      text: step === maskStep ? "המסיכה ירדה, ממשיכים ✨" : "המשך", 
      onClick: () => stopTimerAndAdvance(Math.min(total - 1, step + 1)) 
    }),
    // ✅ כפתור "דלג" ב-Eye + רגע של פינוק (step 4)
    (step === eyeStep || step === 4) ? el("button", { 
      className: "button secondary", 
      style: "width: 100%;",
      text: "דלג", 
      onClick: () => stopTimerAndAdvance(Math.min(total - 1, step + 1)) 
    }) : null,
  ].filter(Boolean));
}

// קטגוריות מוצרים לפי Type
const PRODUCT_CATEGORIES = {
  "Toner": "toner",
  "Essence": "essence",
  "Serum": "serum",
  "Eye Cream": "eye",
  "Cream": "moisturizer",
  "Oil": "oil",
  "Mask": "mask",
  "Spot Treatment": "spot",
  "Mixer": "mixer",
  "SPF": "spf"
};

// פונקציה משודרגת - Works Well Together בלבד
function worksWellTogether(product) {
  try {
    const productCategory = PRODUCT_CATEGORIES[product.type];
    
    const candidates = products
      .filter((candidate) => {
        if (!candidate || candidate.id === product.id) return false;
        
        // ✅ חריג: Product Family - types שונים מותרים!
        if (areProductFamily(product, candidate)) {
          return true;  // מוצרים מאותה סדרה = Works Well Together
        }
        
        // ❌ לא אותו Type - רק משלימים!
        if (candidate.type === product.type) return false;
        
        // ❌ לא duplicate steps
        const candidateCategory = PRODUCT_CATEGORIES[candidate.type];
        if (isDuplicateStep(productCategory, candidateCategory)) return false;
        
        // ✅ בדיקת conflict
        try {
          if (detectConflict(product, candidate)) return false;
        } catch {
          return false;
        }
        
        return true;
      })
      .map((candidate) => ({
        product: candidate,
        score: calculateComplementaryScore(product, candidate)
      }))
      .filter((item) => item.score >= 3)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    
    return candidates.map(item => item.product);
  } catch (error) {
    console.error("Error in worksWellTogether:", error);
    return [];
  }
}

function isDuplicateStep(category1, category2) {
  // מוצרים מאותה קטגוריה פונקציונלית
  const duplicates = [
    ["toner", "essence"],  // שניהם בסיס לחות
    ["moisturizer", "oil"],  // שניהם סגירה
    ["eye", "eye"],  // מוצרי עיניים
    ["spot", "spot"],  // טיפולים נקודתיים
    ["mask", "mask"]  // מסכות
  ];
  
  return duplicates.some(pair => 
    (pair[0] === category1 && pair[1] === category2) ||
    (pair[0] === category2 && pair[1] === category1)
  );
}

function calculateComplementaryScore(product, candidate) {
  try {
    let score = 0;
    const productTags = new Set(tagsFor(product));
    const candidateTags = new Set(tagsFor(candidate));
    
    // ✅ בונוס גדול למוצרים מאותה סדרה!
    if (areProductFamily(product, candidate)) {
      score += 15;  // coordinated product line
    }
    
    // 1. מוצרי תמיכה כלליים (טובים עם הכל)
    const supportiveTags = ["hydration", "barrier", "soothing", "sensitive"];
    if (supportiveTags.some(tag => candidateTags.has(tag))) {
      score += 4;
    }
    
    // 2. Snail products - משלימים כמעט הכל
    if (candidateTags.has("snail")) {
      score += 5;
    }
    
    // 3. השלמה פונקציונלית
    // אם המוצר שלי פעיל - מחפש תמיכה
    if (productTags.has("retinoid") || productTags.has("acid") || productTags.has("vitaminC")) {
      if (candidateTags.has("barrier") || candidateTags.has("hydration") || candidateTags.has("soothing")) {
        score += 6;
      }
    }
    
    // 4. לפי סדר בשגרה
    const routineOrder = ["toner", "essence", "serum", "eye", "moisturizer", "oil", "spf"];
    const productPos = routineOrder.indexOf(PRODUCT_CATEGORIES[product.type]);
    const candidatePos = routineOrder.indexOf(PRODUCT_CATEGORIES[candidate.type]);
    
    // מעדיף מוצרים שבאים אחרי או לפני בסדר הטבעי
    if (Math.abs(productPos - candidatePos) <= 2 && productPos !== candidatePos) {
      score += 3;
    }
    
    // 5. אותה מטרה טיפולית (אבל type שונה)
    if (product.goodFor && candidate.goodFor) {
      const sharedGoals = product.goodFor.filter(goal => candidate.goodFor.includes(goal)).length;
      if (sharedGoals >= 2) {
        score += 3;
      } else if (sharedGoals === 1) {
        score += 1;
      }
    }
    
    // 6. קרמים ומוצרי סגירה - תמיד טובים בסוף
    if (candidate.type === "Cream" || candidate.type === "Oil") {
      score += 2;
    }
    
    return score;
  } catch (error) {
    console.error("Error in calculateComplementaryScore:", error);
    return 0;
  }
}

// פונקציה חדשה - Avoid Combining (conflicts חזקים בלבד)
// ========================================================================
// 🔗 Product Family Detection - סדרות מוצרים שנועדו לעבוד יחד
// ========================================================================

/**
 * בדיקה אם שני מוצרים שייכים לאותה סדרה/family
 * סדרה = אותו brand + shared keywords + types שונים
 */
function areProductFamily(productA, productB) {
  // חייב להיות types שונים (לא substitutes)
  if (productA.type === productB.type) return false;
  
  // חייב להיות אותו brand
  if (productA.brand !== productB.brand) return false;
  
  const tagsA = new Set(tagsFor(productA));
  const tagsB = new Set(tagsFor(productB));
  
  // זיהוי סדרות ידועות לפי tag מיוחד
  // SOME BY MI Miracle: tag "miracle"
  if (tagsA.has("miracle") && tagsB.has("miracle")) return true;
  
  // ניתן להוסיף סדרות נוספות בעתיד
  // Dynasty line, COSRX line, וכו'
  
  return false;
}

function avoidCombining(product) {
  try {
    const conflicts = products
      .filter((candidate) => {
        if (!candidate || candidate.id === product.id) return false;
        
        // ✅ כלל קריטי: Similar Products ו-Avoid Combining הם mutually exclusive
        // אם אותו Type (ולא Serum) - זה Similar, לא Conflict!
        if (candidate.type === product.type) {
          // Toner↔Toner, Eye Cream↔Eye Cream, Cream↔Cream, Mask↔Mask = Similar
          // אלה תחליפים, לא conflicts
          if (product.type !== "Serum") {
            return false;  // ❌ לא conflict - זה Similar
          }
          
          // Serum↔Serum - בודקים אם יש conflict אמיתי
          // רק אם יש chemistry בעייתי (retinol+acid, retinol+vitC)
          const productTags = new Set(tagsFor(product));
          const candidateTags = new Set(tagsFor(candidate));
          
          // אם שניהם אותו סוג סרום (שני רטינולים, שתי חומצות) - Similar, לא Conflict
          if (productTags.has("retinoid") && candidateTags.has("retinoid")) {
            return false;  // שני רטינולים = Similar
          }
          if (productTags.has("acid") && candidateTags.has("acid") && 
              !productTags.has("retinoid") && !candidateTags.has("retinoid")) {
            return false;  // שתי חומצות (בלי רטינול) = Similar
          }
          // אחרת, ממשיכים לבדוק conflict (retinol vs acid, וכו')
        }
        
        // ✅ כלל חדש: Product Family - לא conflict
        // אם מאותה סדרה (brand + keywords + types שונים) = Works Well Together
        if (areProductFamily(product, candidate)) {
          return false;  // ❌ לא conflict - זו coordinated product line
        }
        
        // בדיקת conflict
        try {
          const conflict = detectConflict(product, candidate);
          if (!conflict) return false;
          
          // בדיקה אם זה conflict חזק
          return isStrongConflict(product, candidate, conflict);
        } catch {
          return false;
        }
      })
      .map((candidate) => ({
        product: candidate,
        severity: getConflictSeverity(product, candidate)
      }))
      .filter((item) => item.severity >= 3)  // רק conflicts חזקים
      .sort((a, b) => b.severity - a.severity)
      .slice(0, 5);
    
    return conflicts.map(item => item.product);
  } catch (error) {
    console.error("Error in avoidCombining:", error);
    return [];
  }
}

function isStrongConflict(product, candidate, conflictMessage) {
  const productTags = new Set(tagsFor(product));
  const candidateTags = new Set(tagsFor(candidate));
  
  // Conflicts חזקים בלבד:
  
  // 1. רטינול + חומצות
  if ((productTags.has("retinoid") && candidateTags.has("acid")) ||
      (productTags.has("acid") && candidateTags.has("retinoid"))) {
    return true;
  }
  
  // 2. רטינול + Vitamin C
  if ((productTags.has("retinoid") && candidateTags.has("vitaminC")) ||
      (productTags.has("vitaminC") && candidateTags.has("retinoid"))) {
    return true;
  }
  
  // 3. מספר חומצות חזקות
  if (productTags.has("strong") && candidateTags.has("strong") &&
      productTags.has("acid") && candidateTags.has("acid")) {
    return true;
  }
  
  // 4. מספר רטינולים
  if (productTags.has("retinoid") && candidateTags.has("retinoid")) {
    return true;
  }
  
  // 5. חומצות + Vitamin C
  if ((productTags.has("acid") && candidateTags.has("vitaminC")) ||
      (productTags.has("vitaminC") && candidateTags.has("acid"))) {
    return true;
  }
  
  return false;
}

function getConflictSeverity(product, candidate) {
  const productTags = new Set(tagsFor(product));
  const candidateTags = new Set(tagsFor(candidate));
  
  let severity = 0;
  
  // רטינול + חומצות - חומרה גבוהה מאוד
  if ((productTags.has("retinoid") && candidateTags.has("acid")) ||
      (productTags.has("acid") && candidateTags.has("retinoid"))) {
    severity += 5;
  }
  
  // מספר פעילים חזקים
  if (productTags.has("strong") && candidateTags.has("strong")) {
    severity += 4;
  }
  
  // רטינול + Vitamin C
  if ((productTags.has("retinoid") && candidateTags.has("vitaminC")) ||
      (productTags.has("vitaminC") && candidateTags.has("retinoid"))) {
    severity += 4;
  }
  
  // מספר רטינולים
  if (productTags.has("retinoid") && candidateTags.has("retinoid")) {
    severity += 3;
  }
  
  return severity;
}

// תאימות לאחור - שומרת על הממשק הישן
function relationProducts(product, kind) {
  if (kind === "good") {
    return worksWellTogether(product);
  } else {
    return avoidCombining(product);
  }
}

function similarProducts(product) {
  try {
    // 1️⃣ התחל עם המוצרים הדומים המפורשים מ-goodIds (אותו Type)
    const explicitSimilar = (product.goodIds || [])
      .map(id => getProduct(id))
      .filter(p => p && p.type === product.type);  // רק אותו Type
    
    // 2️⃣ מצא עוד מוצרים דומים לפי similarity score
    const autoSimilar = products
      .filter((candidate) => {
        if (!candidate || candidate.id === product.id) return false;
        
        // אם כבר ב-explicit, לא לכלול פעמיים
        if (explicitSimilar.some(p => p.id === candidate.id)) return false;
        
        // ✅ כלל קריטי: אותו Type בלבד
        if (candidate.type !== product.type) return false;
        
        // ✅ בדיקת conflict
        try {
          if (detectConflict(product, candidate)) return false;
        } catch {
          return false;
        }
        
        return true;
      })
      .map((candidate) => ({
        product: candidate,
        score: calculateSimilarityScore(product, candidate)
      }))
      .filter((item) => item.score >= 5)  // ✅ סף נמוך יותר (5 במקום 8)
      .sort((a, b) => b.score - a.score)
      .map(item => item.product);
    
    // 3️⃣ שלב: explicit קודם, אז auto
    const combined = [...explicitSimilar, ...autoSimilar].slice(0, 6);
    
    return combined;
  } catch (error) {
    console.error("Error in similarProducts:", error);
    return [];
  }
}

function calculateSimilarityScore(product, candidate) {
  try {
    let score = 0;
    
    // 1. אותו Type - חובה (כבר מסונן, אבל נותן בונוס)
    if (candidate.type === product.type) {
      score += 10;  // בונוס גבוה
    }
    
    // 2. תגיות משותפות - חשוב מאוד
    const sharedTags = sharedTagCount(product, candidate);
    if (sharedTags >= 4) {
      score += 5;
    } else if (sharedTags === 3) {
      score += 3;
    } else if (sharedTags === 2) {
      score += 1;
    }
    
    // 3. בעיות עור משותפות
    if (product.goodFor && candidate.goodFor && Array.isArray(product.goodFor) && Array.isArray(candidate.goodFor)) {
      const productIssues = new Set(product.goodFor);
      const sharedIssues = candidate.goodFor.filter(issue => productIssues.has(issue)).length;
      if (sharedIssues >= 3) {
        score += 4;
      } else if (sharedIssues === 2) {
        score += 2;
      } else if (sharedIssues === 1) {
        score += 1;
      }
    }
    
    // 4. אותה רמת עוצמה
    if (product.intensity === candidate.intensity) {
      score += 2;
    }
    
    // 5. רכיבים דומים (בדיקה פשוטה)
    if (product.ingredients && candidate.ingredients && Array.isArray(product.ingredients) && Array.isArray(candidate.ingredients)) {
      const productIngredients = product.ingredients.map(i => i.toLowerCase());
      const candidateIngredients = candidate.ingredients.map(i => i.toLowerCase());
      const sharedIngredients = productIngredients.filter(ing => 
        candidateIngredients.some(cand => cand.includes(ing) || ing.includes(cand))
      ).length;
      if (sharedIngredients >= 2) {
        score += 3;
      } else if (sharedIngredients === 1) {
        score += 1;
      }
    }
    
    return score;
  } catch (error) {
    console.error("Error in calculateSimilarityScore:", error);
    return 0;
  }
}

function sharedTagCount(a, b) {
  const aTags = new Set(tagsFor(a));
  return tagsFor(b).filter((tag) => aTags.has(tag)).length;
}

function toggleFavorite(id, trigger = null) {
  id = String(id);
  const wasFavorite = state.favorites.includes(id);
  const isFavorite = !wasFavorite;
  state.favorites = wasFavorite ? state.favorites.filter((item) => item !== id) : [id, ...state.favorites];
  
  // עדכון הלב ישירות ללא render מלא
  if (trigger) {
    trigger.classList.toggle("active", isFavorite);
    trigger.classList.add("pulse");
    trigger.textContent = isFavorite ? "♥" : "♡";
    trigger.setAttribute("aria-pressed", String(isFavorite));
    
    // הסרת pulse אחרי אנימציה
    window.setTimeout(() => {
      trigger.classList.remove("pulse");
    }, 420);
  }
  
  saveFavorites();
  
  // רק בעמוד מועדפים - רענון כדי שהמוצר יעלם
  if (state.view === "favorites" && wasFavorite) {
    window.setTimeout(() => {
      render();
    }, 450);
  }
}

function toggleSavedRoutine(routineDataOrSaved, trigger = null) {
  console.log('💾 toggleSavedRoutine called with:', {
    hasId: !!(routineDataOrSaved.id),
    hasRoutine: !!(routineDataOrSaved.routine),
    isObject: typeof routineDataOrSaved === 'object',
    steps: routineDataOrSaved.steps?.map(s => s.name) || routineDataOrSaved.routine?.steps.map(s => s.name)
  });
  
  // ✅ תמיכה ב-saved object (מכרטיסייה) או routine data (מכפתור שמירה)
  let routineData, routineId, wasSaved;
  
  if (routineDataOrSaved.id && routineDataOrSaved.routine) {
    // זה saved object מכרטיסייה
    routineData = routineDataOrSaved.routine;
    routineId = routineDataOrSaved.id;
    wasSaved = true;  // ✓ תמיד true כי זה בא מכרטיסייה קיימת
  } else {
    // זה routine data מכפתור שמירה
    routineData = routineDataOrSaved;
    
    // בדיקת תקינות
    if (!routineData || !routineData.steps || !Array.isArray(routineData.steps)) {
      console.error('Invalid routine data for saving');
      return;
    }
    
    // יצירת ID ייחודי לכל שמירה - עם timestamp!
    routineId = JSON.stringify({
      steps: routineData.steps.map(s => s.id),
      timeOfDay: routineData.context?.timeOfDay,
      feeling: routineData.context?.feeling,
      routineType: routineData.context?.routineType,
      timestamp: Date.now()
    });
    
    wasSaved = state.savedRoutines.some(r => r.id === routineId);
  }
  
  const isSaved = !wasSaved;
  
  if (isSaved) {
    // חישוב כמות מוצרים בפועל - אותו חישוב כמו getRoutineIntro
    const actualCount = routineData.steps.filter(s => s.type !== "SPF").length;
    
    // ✅ שמירת snapshot עמוק - structuredClone למניעת references!
    const savedRoutine = {
      id: routineId,
      routine: structuredClone(routineData),  // ✅ deep copy!
      context: structuredClone(routineData.context || {}),  // ✅ deep copy!
      productCount: actualCount,
      createdAt: Date.now(),
      name: getRoutineIntro(routineData)
    };
    state.savedRoutines = [savedRoutine, ...state.savedRoutines];
    
    console.log('💾 SAVED ROUTINE SNAPSHOT:', {
      id: routineId.substring(0, 50) + '...',
      savedAt: savedRoutine.createdAt,
      productCount: actualCount,
      products: savedRoutine.routine.steps.map(p => ({ id: p.id, name: p.name }))
    });
  } else {
    // הסרת שגרה
    console.log('🗑️ REMOVING SAVED ROUTINE:', {
      routineId: routineId.substring(0, 50) + '...',
      beforeCount: state.savedRoutines.length
    });
    state.savedRoutines = state.savedRoutines.filter(r => r.id !== routineId);
    console.log('✅ REMOVED! After count:', state.savedRoutines.length);
  }
  
  // ✅ עדכון הלב עם אנימציה - בדיוק כמו toggleFavorite!
  if (trigger) {
    trigger.classList.toggle("active", isSaved);
    trigger.setAttribute("aria-pressed", String(isSaved));
    
    // בדוק אם יש span לב (כפתור שמירה בשגרה) או לב ישיר (כרטיסייה)
    const heartSpan = trigger.querySelector('.save-routine-heart');
    if (heartSpan) {
      // יש span - עדכן את ה-span
      heartSpan.textContent = isSaved ? "♥" : "♡";
      heartSpan.classList.add("pulse");
      window.setTimeout(() => {
        heartSpan.classList.remove("pulse");
      }, 420);
      
      // ✅ עדכן גם את הטקסט!
      const textSpan = trigger.querySelector('.save-routine-text');
      if (textSpan) {
        // בדיקה: האם זה saved route (נכנסו משגרות שמורות)?
        const isSavedRoute = state.routineRoute === "saved";
        textSpan.textContent = isSavedRoute 
          ? "הסר שגרה"  // שגרה ממועדפים
          : isSaved 
            ? "שגרה נשמרה"  // שגרה רגילה ששמורה
            : "שמור שגרה";  // שגרה רגילה לא שמורה
      }
    } else {
      // אין span - עדכן את הכפתור ישירות (כרטיסייה)
      trigger.textContent = isSaved ? "♥" : "♡";
      trigger.classList.add("pulse");
      window.setTimeout(() => {
        trigger.classList.remove("pulse");
      }, 420);
    }
  }
  
  saveSavedRoutines();
  
  // ✅ רענון אם במועדפים והוסרה - בדיוק כמו toggleFavorite!
  if (state.view === "favorites" && wasSaved) {
    window.setTimeout(() => {
      render();  // ✅ הכרטיסייה נעלמת!
    }, 450);
  }
}

function isRoutineSaved(routineData) {
  if (!routineData || !routineData.steps || !Array.isArray(routineData.steps)) return false;
  
  // בדיקה שכל ה-steps תקינים
  if (routineData.steps.some(s => !s || !s.id)) return false;
  
  const routineId = JSON.stringify({
    steps: routineData.steps.map(s => s.id),  // ← תיקון: s.id לא s.product.id
    timeOfDay: routineData.context?.timeOfDay,
    feeling: routineData.context?.feeling,
    routineType: routineData.context?.routineType
  });
  
  return state.savedRoutines.some(r => r.id === routineId);
}

// ✅ Helper: קבל את השגרה המוצגת כרגע (refreshed > displayed > build)
function getCurrentDisplayedRoutine() {
  if (state.refreshedRoutine && state.refreshedRoutine.steps) {
    return {
      steps: state.refreshedRoutine.steps,
      warnings: state.refreshedRoutine.warnings || [],
      context: {
        timeOfDay: state.timeOfDay,
        feeling: state.feeling,
        includeMask: state.includeMask,
        routineType: state.routineType,
        routinePace: state.routinePace,
        preferredProductId: state.preferredProductId,
        selectedFavoriteProductId: state.selectedFavoriteProductId
      }
    };
  } else if (state.displayedRoutine && state.displayedRoutine.steps) {
    return {
      steps: state.displayedRoutine.steps,
      warnings: state.displayedRoutine.warnings || [],
      context: state.displayedRoutine.context || {
        timeOfDay: state.timeOfDay,
        feeling: state.feeling,
        includeMask: state.includeMask,
        routineType: state.routineType,
        routinePace: state.routinePace,
        preferredProductId: state.preferredProductId,
        selectedFavoriteProductId: state.selectedFavoriteProductId
      }
    };
  } else {
    return buildRoutine();
  }
}

function getRandomCompletionMessage() {
  return completionMessages[Math.floor(Math.random() * completionMessages.length)];
}

function checkRoutineCompletion(routine) {
  // ספירת שלבים בפועל (ללא SPF)
  const actualSteps = routine.steps.filter(step => step.type !== "SPF");
  const completedCount = actualSteps.filter(step => state.completedSteps.has(step.id)).length;
  
  // אם כל השלבים מסומנים - להציג מסך סיום
  if (completedCount === actualSteps.length && actualSteps.length > 0) {
    state.showCompletionModal = true;
    state.completionMessage = getRandomCompletionMessage();
    render();
  }
}

function closeCompletionModal() {
  state.showCompletionModal = false;
  navigate("home");
}

function chooseRoutineTimeForProduct(product) {
  if (product.type === "Mask" || hasTag(product, "retinoid")) return "לילה";
  if (hasTag(product, "acid") || product.type === "Spot Treatment") return "ערב";
  if (product.time.includes(state.timeOfDay) || productMatchesTime(product, state.timeOfDay)) return state.timeOfDay;
  if (product.time.includes("בוקר")) return isDayRoutine() ? state.timeOfDay : "בוקר";
  if (product.time.includes("ערב")) return "ערב";
  return product.time[0] || state.timeOfDay;
}

function startRoutine({ timeOfDay = null, product = null, feeling = null, coupleMode = false, direct = false, includeMask = null, route = null, flow = null } = {}) {
  const selected = product || null;
  const routineRoute = route || (selected ? "product" : direct ? "rubric" : "regular");
  const routineFlow = flow || (routineRoute === "regular" ? "wizard" : "direct");
  const usesQuestionFlow = routineRoute === "regular" && routineFlow === "wizard" && !coupleMode;
  const shouldShowLoading = Boolean(!usesQuestionFlow || coupleMode);
  const initialTimeOfDay = selected ? chooseRoutineTimeForProduct(selected) : timeOfDay || getCurrentRoutineTimeOfDay();
  const isDirectRegularRoutine = routineRoute === "regular" && routineFlow === "direct";
  const isRubricRoute = routineRoute === "rubric";
  const feelingExplicitlySelected = isRubricRoute;
  
  // ✅ אפס feeling בdirect time routines (כמו "שגרת ערב")
  // רק rubric route (קרוסלת מצב עור) שומר את feeling
  const defaultFeeling = isDirectRegularRoutine 
    ? "glow"  // נייטרלי - לא spot/breakouts
    : (feeling || state.feeling || "glow");
  
  // Get preferredProductId from feeling if rubric route
  const feelingObj = getFeeling(defaultFeeling);
  const feelingPreferredProductId = isRubricRoute && feelingObj?.preferredProductId ? feelingObj.preferredProductId : null;
  
  // עדכון state קודם
  Object.assign(state, {
    view: "routine",
    timeOfDay: initialTimeOfDay,
    feeling: defaultFeeling,
    feelingExplicitlySelected,
    coupleMode,
    routineRoute,
    routineFlow,  // עדכון זה קודם!
    routineTimeLocked: !usesQuestionFlow,
    preferredProductId: selected?.id || feelingPreferredProductId || null,
    selectedProductId: selected?.id || state.selectedProductId,
    includeMask: includeMask ?? Boolean(coupleMode || selected?.type === "Mask"),
    requestedSteps: coupleMode ? Math.max(state.requestedSteps, 4) : 4,  // תמיד מתחילים עם 4 (מאוזן)
    routineType: routineRoute === "product" ? "balanced" : "balanced",  // תמיד מאוזן
    routinePace: 2,  // ✅ תמיד מתחילים עם מאוזן (2) בשגרה חדשה
    showRoutineChoices: false,
    showWeatherPopover: false,
    completedSteps: new Set(),
    routineOverrides: {},
    refreshedRoutine: null,  // ✅ אפס refreshed routine בשגרה חדשה
    displayedRoutine: null,  // ✅ אפס displayed routine בשגרה חדשה
    routineNonce: usesQuestionFlow 
      ? Date.now()  // ✅ שאלון: nonce חדש כל פעם (לא daily)
      : getDailyRoutineNonce({
          timeOfDay: initialTimeOfDay,
          routineRoute,
          feeling: defaultFeeling,
          preferredProductId: selected?.id || feelingPreferredProductId || null
        }),  // ✅ שאר השגרות: daily nonce
  });
  
  console.log('🔄 NEW ROUTINE RESET:', {
    source: routineRoute + '/' + routineFlow,
    routinePace: state.routinePace,
    requestedSteps: state.requestedSteps,
    refreshedRoutine: state.refreshedRoutine,
    displayedRoutine: state.displayedRoutine
  });
  
  // עכשיו חישוב wizardStep אחרי שה-state מעודכן
  state.wizardStep = usesQuestionFlow ? 0 : getRoutineStepIndex("result", routineRoute);
  state.routineLoading = shouldShowLoading;
  
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (shouldShowLoading) queueRoutineLoadingDone();
}

function queueRoutineLoadingDone() {
  window.clearTimeout(routineLoadingTimer);
  routineLoadingTimer = window.setTimeout(() => {
    if (state.view === "routine" && state.routineLoading) {
      state.routineLoading = false;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 3000);
}

function finishRoutineWizard(partial = {}) {
  const routineRoute = "regular";
  
  // בדיקה אם יש שלב מועדפים
  const steps = getRoutineWizardSteps(routineRoute);
  const hasFavoritesStep = steps.some(step => step.id === "favorites");
  const nextStepId = hasFavoritesStep ? "favorites" : "result";
  
  Object.assign(state, partial, {
    view: "routine",
    routineRoute,
    routineFlow: "wizard",
    routineTimeLocked: true,
    wizardStep: getRoutineStepIndex(nextStepId, routineRoute),
    routineLoading: nextStepId === "result",  // רק אם קופצים ישר לתוצאה
    completedSteps: new Set(),
    routineNonce: Date.now(),
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  // טעינה רק אם קופצים ישר לתוצאה
  if (nextStepId === "result") {
    queueRoutineLoadingDone();
  }
}

function startCoupleFlow(resetPlan = true) {
  // שאפל ראשוני למשימות
  const firstSuggestionIndex = Math.floor(Math.random() * coupleSuggestions.length);
  
  Object.assign(state, {
    view: "couple",
    timeOfDay: "לילה",
    feeling: state.feeling || "sensitive",
    includeMask: true,
    coupleMode: false,
    coupleStep: 0,
    couplePlan: resetPlan ? buildCouplePlan(Date.now()) : state.couplePlan,
    coupleSuggestionIndex: firstSuggestionIndex,  // ← התחלה רנדומלית!
    coupleSuggestionsShown: [firstSuggestionIndex],  // ← מעקב מתחיל
    routineLoading: false,
    showRoutineChoices: false,
    showWeatherPopover: false,
    routineNonce: Date.now(),
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(view) {
  // ✅ שמור את המסך הקודם
  const previousView = state.view;
  const previousScreen = state.screen;
  
  Object.assign(state, {
    view,
    previousView,  // ✅ חדש
    previousScreen,  // ✅ חדש
    timeOfDay: view === "home" ? getCurrentRoutineTimeOfDay() : state.timeOfDay,
    showRoutineChoices: false,
    showWeatherPopover: false,
    routineLoading: false,
    selectedProductId: view === "product" ? state.selectedProductId : state.selectedProductId,
    completedSteps: new Set(),
    showCompletionModal: false,
    // ✅ Reset recommendations view tracking when leaving home
    homeRecommendationsView: view === "home" ? null : state.homeRecommendationsView,
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setState(partial) {
  Object.assign(state, partial);
  render();
}

function renderQuietly() {
  const activeSearch = document.activeElement?.matches?.(".search-box input") ? document.activeElement : null;
  const caret = activeSearch ? activeSearch.selectionStart : null;
  state.quietRender = true;
  render();
  state.quietRender = false;
  if (activeSearch) {
    const nextSearch = document.querySelector(".search-box input");
    nextSearch?.focus({ preventScroll: true });
    if (typeof caret === "number") nextSearch?.setSelectionRange(caret, caret);
  }
}

function handleProductSearchInput(event) {
  state.searchQuery = event.target.value;
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = window.setTimeout(renderQuietly, 80);
}

function goBack() {
  console.log('🔙 goBack called:', {
    view: state.view,
    routineFlow: state.routineFlow,
    wizardStep: state.wizardStep,
    routineRoute: state.routineRoute,
    previousView: state.previousView
  });
  
  // ✅ Couple flow - back logic
  if (state.view === "couple" && state.coupleStep > 0) {
    // עצירת טיימר לפני חזרה אחורה
    if (state.coupleTimerInterval) {
      clearInterval(state.coupleTimerInterval);
      setState({ 
        coupleStep: state.coupleStep - 1, 
        showWeatherPopover: false,
        coupleTimerActive: false,
        coupleTimerSeconds: 0,
        coupleTimerInterval: null
      });
    } else {
      setState({ coupleStep: state.coupleStep - 1, showWeatherPopover: false });
    }
    console.log('→ Couple step back');
    return;
  }
  
  // ✅ Wizard flow - back logic
  // רק אם זה באמת wizard (לא direct flow!)
  const isWizardFlow = state.view === "routine" && 
                       state.routineFlow === "wizard" && 
                       state.wizardStep > 0;
  
  if (isWizardFlow) {
    console.log('→ Wizard step back to', state.wizardStep - 1);
    return setState({ wizardStep: state.wizardStep - 1 });
  }
  
  // ✅ Direct flow (home → routine) - חזרה ל-home!
  if (state.view === "routine" && state.routineFlow === "direct") {
    console.log('→ Direct flow: navigate to home');
    return navigate("home");
  }
  
  // ✅ Product page - back to products list
  if (state.view === "product") {
    console.log('→ Product page: navigate to products');
    return navigate("products");
  }
  
  // ✅ Default - use navigation history
  if (state.previousView && state.previousView !== state.view) {
    console.log('→ Previous view:', state.previousView);
    return navigate(state.previousView);
  }
  
  // ✅ Fallback - home
  console.log('→ Fallback: navigate to home');
  return navigate("home");
}

function el(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "className") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "html") node.innerHTML = value;
    else if (key === "value") node.value = value;
    else if (key === "checked") node.checked = Boolean(value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
    else if (value !== undefined && value !== null && value !== false) node.setAttribute(key, value);
  });
  children.forEach((child) => {
    if (child === null || child === undefined) return;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  });
  return node;
}

function icon(name) {
  const icons = { home: "⌂", routine: "✦", products: "☰", heart: "♥", filter: "≡", back: "<", moon: "☾", sun: "☼", water: "≋", warn: "!", search: "⌕" };
  return icons[name] || name;
}

function render() {
  const root = document.querySelector("#app");
  document.body.classList.toggle("quiet-render", Boolean(state.quietRender));
  
  // ✅ Partial render for carousel - just replace recommendations section
  if (state.partialRender === 'carousel' && state.view === 'home') {
    const recommendationsCard = document.querySelector('.recommendations-section');
    if (recommendationsCard) {
      const newSection = renderRecommendationsSection();
      recommendationsCard.replaceWith(newSection);
      return;  // Skip full render
    }
  }
  
  root.innerHTML = "";
  if (state.showSplash) {
    root.append(renderSplash());
    return;
  }

  root.append(
    el("main", { className: "app-shell" }, [
      el("div", { className: "app-content" }, [renderTopbar(), renderScreen()]),
      renderNav(),
    ]),
  );
  
  // הוספת מסך סיום אם צריך
  if (state.showCompletionModal) {
    root.append(renderCompletionModal());
  }
  
  // הוספת overlay החלפת מוצר
  if (state.showProductReplacement) {
    root.append(renderProductReplacementOverlay());
  }
  
  if (state.quietRender) window.requestAnimationFrame(() => document.body.classList.remove("quiet-render"));
}

function renderSplash() {
  return el("section", { className: "splash-screen" }, [
    el("div", { className: "splash-halo" }),
    el("img", { className: "splash-logo", src: "./assets/brand/mami-care.png", alt: "Mami Care" }),
  ]);
}

function renderTopbar() {
  const uv = Math.max(0, Math.min(11, Math.round(Number(state.weather.uv || 0))));
  return el("div", { className: "topbar-shell" }, [
    el("header", { className: "topbar" }, [
      el("div", { className: "top-left-cluster" }, [
        el("button", { className: "icon-button favorite-top", "aria-label": "מועדפים", onClick: () => navigate("favorites"), text: icon("heart") }),
        el("button", { className: "top-weather-trigger", "aria-label": "שעה ומזג אוויר", onClick: () => {
          state.showWeatherPopover = !state.showWeatherPopover;
          // Toggle visibility with CSS only, no render
          const popover = document.querySelector('.weather-popover');
          if (popover) {
            popover.style.display = state.showWeatherPopover ? '' : 'none';
            if (state.showWeatherPopover) {
              popover.classList.add('visible');
              popover.classList.remove('hidden');
            } else {
              popover.classList.remove('visible');
              popover.classList.add('hidden');
            }
          }
        } }, [
          el("span", { className: "top-time", text: state.clock || "--:--" }),
          el("span", { className: "top-weather-divider", "aria-hidden": "true" }),
          el("span", { className: "top-uv", text: `UV ${uv}` }),
        ]),
      ]),
      el("div", { className: "top-spacer" }),
      el("button", { className: "top-logo-wrap", "aria-label": "בית", onClick: () => navigate("home") }, [
        el("img", { className: "top-logo", src: "./assets/brand/mami-care.png", alt: "Mami Care" }),
      ]),
    ]),
    // ✅ Always render popover, show/hide with CSS
    el("div", { 
      className: `weather-popover ${state.showWeatherPopover ? "visible" : "hidden"}`,
      style: state.showWeatherPopover ? "" : "display: none;"
    }, [renderWeatherCard("weather-card-popover")]),
  ]);
}

function renderScreen() {
  if (state.view === "routine") return renderRoutineScreen();
  if (state.view === "products") return renderProductsScreen(false);
  if (state.view === "favorites") return renderProductsScreen(true);
  if (state.view === "product") return renderProductPage();
  if (state.view === "couple") return renderCoupleScreen();
  return renderHomeScreen();
}

function renderHomeScreen() {
  const tip = tips[state.tipIndex % tips.length];
  const greeting = getGreetingLines();
  const homeTimeOfDay = getCurrentRoutineTimeOfDay();
  const homeSlot = getRoutineSlot(homeTimeOfDay);
  return el("section", { className: "screen active" }, [
    el("div", { className: "hero-card home-focus" }, [
      el("div", { className: "hero-inner" }, [
        el("h2", { className: "hero-title split-greeting" }, [
          el("span", { text: greeting[0] }),
          el("span", { text: greeting[1] }),
        ]),
        el("img", { className: "home-character", src: getHomeCharacter(), alt: "מאמי טיפוח" }),
        el("div", { className: "hero-actions" }, [
          el("button", { className: "button primary-hero", html: `<span>${homeSlot.icon}</span>${homeSlot.action}`, onClick: () => startRoutine({ timeOfDay: homeTimeOfDay, route: "regular", flow: "direct" }) }),
          el("button", { className: "button secondary", text: state.showRoutineChoices ? "סגור אפשרויות" : "אני מעדיף שגרה אחרת", onClick: () => setState({ showRoutineChoices: !state.showRoutineChoices }) }),
        ]),
        state.showRoutineChoices ? renderHomeRoutineChoices(homeTimeOfDay) : null,
      ]),
    ]),
    renderSkincareStepsSection(),
    renderRecommendationsSection(),
    renderCoupleHomeCard(),
    renderTipCard(tip),
    renderFeelingSection(),
    renderWeatherCard("home-weather-last"),
  ]);
}

function renderSkincareStepsSection() {
  return el("div", { className: "card skincare-steps-card" }, [
    el("div", { className: "card-inner" }, [
      el("img", { 
        className: "skincare-steps-image", 
        src: "assets/brand/skincare-steps.png", 
        alt: "שלבי טיפוח נכונים"
      }),
    ]),
  ]);
}

function renderRecommendationsSection() {
  // קבלת שעה נוכחית
  const hour = new Date().getHours();
  
  // סינון מוצרים לפי זמן ביום
  let recommendedProducts;
  let benefitText = "";
  
  if (hour >= 6 && hour < 12) {
    // בוקר: מוצרים קלילים ומהירים
    recommendedProducts = products.filter(p => 
      (p.type === "Serum" && (p.tags.includes("brightening") || p.tags.includes("vitamin-c"))) ||
      (p.type === "Cream" && p.tags.includes("light")) ||
      (p.type === "Toner" && p.tags.includes("hydration")) ||
      (p.type === "SPF")
    );
    benefitText = "מעניק לחות קלילה בלי להכביד — מתאים לבוקר מהיר.";
  } else if (hour >= 12 && hour < 18) {
    // צהריים: רענון ותחזוקה
    recommendedProducts = products.filter(p => 
      (p.type === "Cream" && p.tags.includes("light")) ||
      (p.type === "Toner" && p.tags.includes("hydration")) ||
      (p.type === "SPF") ||
      (p.type === "Serum" && p.tags.includes("hydration"))
    );
    benefitText = "עוזר לרענן ולשמור על העור גם באמצע היום.";
  } else {
    // ערב/לילה: טיפול עמוק ומפנק
    recommendedProducts = products.filter(p => 
      p.type === "Mask" ||
      (p.type === "Serum" && (p.tags.includes("repair") || p.tags.includes("antiaging"))) ||
      (p.type === "Cream" && (p.tags.includes("rich") || p.tags.includes("antiaging"))) ||
      (p.type === "Eye Cream") ||
      (p.type === "Toner" && p.tags.includes("repair"))
    );
    benefitText = "מתאים לערב רגוע כשהעור צריך פינוק וטיפול עמוק.";
  }
  
  // fallback אם אין מוצרים מתאימים
  if (recommendedProducts.length === 0) {
    recommendedProducts = products.filter(p => 
      p.type === "Serum" || p.type === "Cream" || p.type === "Mask"
    );
    benefitText = "מוצר איכותי שמתאים לשגרת טיפוח.";
  }
  
  // ✅ Smart filtering by time of day with metadata
  const currentTime = getCurrentRoutineTimeOfDay();
  const isDayTime = currentTime === "בוקר" || currentTime === "צהריים";
  const isNight = currentTime === "לילה";
  const isEvening = currentTime === "ערב";
  
  // ✅ Persistent recommendations - only refresh when coming back to home or time changed
  const needsRefresh = !state.homeRecommendations || 
                       state.homeRecommendationsTime !== currentTime ||
                       state.homeRecommendationsView !== 'home';
  
  let recommendations = [];
  
  if (needsRefresh) {
    // Score and filter products by time appropriateness
    const scoredProducts = recommendedProducts.map(p => {
      const tags = tagsFor(p);
      let score = 0;
      let suitable = true;
      
      // Check timeOfUse metadata if available
      const timeOfUse = p.timeOfUse || [];
      const activeLevel = p.activeLevel || 0;
      const requiresSPF = p.requiresSPFNextDay || false;
      
      if (isDayTime) {
        // Morning/Noon: prefer light, safe products
        
        // Exclude products that are night-only or require SPF next day
        if (timeOfUse.includes("night-only") || requiresSPF) {
          suitable = false;
        }
        
        // Exclude retinoids and strong actives
        if (tags.includes("retinoid") || activeLevel >= 3) {
          suitable = false;
        }
        
        // Exclude heavy masks (light masks OK)
        if (tags.includes("mask") && !tags.includes("light")) {
          suitable = false;
        }
        
        // Prefer light, hydrating, protective products
        if (tags.includes("light")) score += 3;
        if (tags.includes("hydration")) score += 2;
        if (tags.includes("vitaminC")) score += 2;
        if (tags.includes("niacinamide")) score += 2;
        if (tags.includes("barrier") || tags.includes("soothing")) score += 2;
        if (tags.includes("spf")) score += 3;
        if (p.category === "essence" || p.category === "toner") score += 1;
        
      } else {
        // Evening/Night: prefer treatment, nourishing products
        
        // Prefer masks in evening/night (but not always)
        if (tags.includes("mask")) {
          score += isNight ? 3 : 2;
        }
        
        // Prefer actives and treatment products
        if (tags.includes("retinoid") && activeLevel <= 2) score += 3;
        if (tags.includes("acid") && activeLevel <= 2) score += 2;
        if (tags.includes("antiaging")) score += 2;
        if (tags.includes("peptides")) score += 2;
        if (tags.includes("recovery") || tags.includes("repair")) score += 2;
        
        // Night-specific preferences
        if (isNight) {
          if (tags.includes("rich") || tags.includes("nourishing")) score += 2;
          if (p.category === "night-cream" || p.category === "sleeping-mask") score += 3;
        }
        
        // Still prefer some hydration
        if (tags.includes("hydration")) score += 1;
        if (tags.includes("barrier")) score += 1;
      }
      
      return { product: p, score, suitable };
    }).filter(item => item.suitable && item.score > 0);
    
    // Sort by score and add some randomness
    scoredProducts.sort((a, b) => {
      // Higher score = better, but add some randomness within score groups
      const scoreDiff = b.score - a.score;
      if (scoreDiff === 0) return Math.random() - 0.5;
      return scoreDiff;
    });
    
    // Pick top 6 candidates and shuffle them for variety
    const topCandidates = scoredProducts.slice(0, 6);
    const shuffled = [...topCandidates].sort(() => Math.random() - 0.5);
    recommendations = shuffled.slice(0, 3).map(item => item.product);
    
    // Fallback if not enough products
    if (recommendations.length === 0) {
      const fallback = recommendedProducts.slice(0, 3);
      recommendations = fallback;
    }
    
    // ✅ Save to state for persistence
    state.homeRecommendations = recommendations;
    state.homeRecommendationsTime = currentTime;
    state.homeRecommendationsView = 'home';
  } else {
    // ✅ Use saved recommendations
    recommendations = state.homeRecommendations;
  }
  
  // Current recommendation index
  if (state.recommendationIndex === undefined) state.recommendationIndex = 0;
  const currentIndex = state.recommendationIndex % recommendations.length;
  const currentRecommendation = recommendations[currentIndex] || products[0];
  const isRecommendedFavorite = state.favorites.includes(currentRecommendation.id);
  
  // Navigation functions - partial render for smooth UX
  const nextRecommendation = () => {
    state.recommendationIndex = (state.recommendationIndex + 1) % recommendations.length;
    state.carouselDirection = 'left';
    state.partialRender = 'carousel';  // Only update carousel
    render();
    state.partialRender = null;
  };
  
  const prevRecommendation = () => {
    state.recommendationIndex = (state.recommendationIndex - 1 + recommendations.length) % recommendations.length;
    state.carouselDirection = 'right';
    state.partialRender = 'carousel';  // Only update carousel
    render();
    state.partialRender = null;
  };
  
  const goToRecommendation = (index) => {
    state.recommendationIndex = index;
    state.carouselDirection = index > state.recommendationIndex ? 'left' : 'right';
    state.partialRender = 'carousel';  // Only update carousel
    render();
    state.partialRender = null;
  };
  
  return el("div", { className: "card recommendations-section" }, [
    el("div", { className: "card-inner", style: "padding-top: 0.75rem; padding-right: 1rem;" }, [
      // ✅ Header with title and favorite button in same row
      el("div", { className: "recommendation-header-row", style: "display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0; gap: 12px;" }, [
        el("h3", { text: "המלצות עבורך", style: "margin: 0; line-height: 1.15;" }),
        // Favorite button with proper styling and animation
        el("button", {
          className: `favorite-button ${isRecommendedFavorite ? "active" : ""} ${state.favoritePulseId === currentRecommendation.id ? "pulse" : ""}`,
          "aria-label": isRecommendedFavorite ? "הסר מהמועדפים" : "הוסף למועדפים",
          "aria-pressed": String(isRecommendedFavorite),
          text: isRecommendedFavorite ? "♥" : "♡",
          style: "flex-shrink: 0;",
          onClick: (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            toggleFavorite(currentRecommendation.id, event.currentTarget);
          }
        }),
      ]),
      el("p", { className: "section-desc", style: "color: #9075D7; margin: -2px 0 0.5rem 0; line-height: 1.25;", text: `מוצר מומלץ ל${currentTime}` }),
      
      // Carousel container with direction for animations
      el("div", { 
        className: "recommendation-carousel",
        "data-direction": state.carouselDirection || 'left',
        key: currentIndex  // Force re-render for animation
      }, [
        // Previous button
        el("button", {
          className: "carousel-arrow carousel-arrow-prev",
          "aria-label": "המלצה קודמת",
          text: "‹",
          onClick: (e) => {
            e.stopPropagation();
            prevRecommendation();
          }
        }),
        
        // Product card (larger image) with scoped styling
        renderProductCard(currentRecommendation, { 
          hideBorder: true, 
          benefitText, 
          hideFavorite: true,
          largerImage: true,
          compactSpacing: true  // ✅ חדש: הפעל spacing צמוד
        }),
        
        // Next button
        el("button", {
          className: "carousel-arrow carousel-arrow-next",
          "aria-label": "המלצה הבאה",
          text: "›",
          onClick: (e) => {
            e.stopPropagation();
            nextRecommendation();
          }
        }),
      ]),
      
      // Dots indicator
      el("div", { className: "carousel-dots" }, 
        recommendations.map((_, index) => 
          el("button", {
            className: `carousel-dot ${index === currentIndex ? "active" : ""}`,
            "aria-label": `עבור להמלצה ${index + 1}`,
            onClick: () => goToRecommendation(index)
          })
        )
      ),
    ]),
  ]);
}

function renderCoupleHomeCard() {
  return el("article", { className: "card couple-home-card" }, [
    el("div", { className: "card-inner couple-home-inner" }, [
      el("div", {}, [
        el("p", { className: "eyebrow", style: "color: #9075D7;", text: "ספא קטן לשניים" }),
        el("h2", { text: "זמן טיפוח זוגי 💕" }),
        el("p", { text: "הפכו את הבית לספא הפרטי שלכם, ותנו לעצמכם רגע להתנתק, להירגע ולהתפנק יחד." }),
        // ✅ Tags with proper styling like product tags
        el("div", { className: "tag-pills" }, [
          el("span", { text: "✨ רומנטי" }),
          el("span", { text: "🫶 מקרב" }),
          el("span", { text: "🧖 מפנק" }),
        ]),
      ]),
      el("button", { className: "button primary-hero", text: "יאללה, מתחילים ✨", onClick: () => startCoupleFlow(true) }),
    ]),
  ]);
}

function renderHomeRoutineChoices(timeOfDay = getCurrentRoutineTimeOfDay()) {
  const futureSlots = getFutureRoutineSlots(timeOfDay);
  return el("div", { className: "alternative-panel" }, [
    futureSlots.length ? el("div", { className: "alternative-grid" }, futureSlots.map((slot) =>
      el("button", { className: "choice-card compact", text: `${slot.icon} ${slot.alternative}`, onClick: () => startRoutine({ timeOfDay: slot.id, route: "regular", flow: "direct" }) }),
    )) : el("div", { className: "empty", text: "זה כבר לילה, מאמי. מכאן נשאר לבחור מוצר או לעשות טיפוח זוגי." }),
    el("button", { className: "choice-card selected compact", text: "שגרה לפי מוצר", onClick: () => setState({ view: "products", showRoutineChoices: false }) }),
  ]);
}

function renderWeatherCard(extraClass = "") {
  const uv = Math.max(0, Math.min(11, Number(state.weather.uv || 0)));
  return el("aside", { className: `weather-card ${extraClass}`.trim() }, [
    el("div", { className: "weather-top" }, [
      el("div", {}, [el("p", { className: "eyebrow", text: state.weather.location }), el("strong", { className: "weather-temp", text: `${Math.round(state.weather.temp)}°` })]),
      el("span", { className: "status-pill", text: getWeatherMood() }),
    ]),
    el("div", {}, [
      el("p", { className: "eyebrow", style: "color: #9075D7;", text: `UV משוער ${uv}/11` }),
      el("div", { className: "meter" }, [el("div", { className: "meter-fill", style: `width:${Math.max(8, (uv / 11) * 100)}%` })]),
    ]),
    el("p", { html: getWeatherCopy() }),
  ]);
}

function renderTipCard(tip) {
  return el("article", { className: "card tip-card" }, [
    el("div", { className: "card-inner" }, [el("p", { className: "eyebrow", style: "color: #9075D7;", text: "טיפ קטן למאמי" }), el("p", { text: tip })]),
  ]);
}

function renderFeelingSection() {
  const homeTimeOfDay = getCurrentRoutineTimeOfDay();
  return el("section", {}, [
    el("div", { className: "section-title" }, [el("div", {}, [el("h2", { text: "איך העור שלך מרגיש היום?" }), el("p", { text: "לחיצה תפתח שגרה מותאמת, בלי עוד שאלות." })])]),
    el("div", { 
      className: "feeling-carousel",
      style: "scrollbar-width: none; -ms-overflow-style: none;"
    }, feelings.map((feeling) =>
      el("button", { className: "choice-card feeling-card", onClick: () => startRoutine({ feeling: feeling.id, timeOfDay: homeTimeOfDay, direct: true, route: "rubric" }) }, [
        el("span", { className: "choice-title", text: `${feeling.icon} ${feeling.label}` }),
        el("span", { className: "choice-copy", text: feeling.desc }),
      ]),
    )),
  ]);
}

function renderRoutineScreen() {
  if (state.routineLoading) return renderRoutineLoadingScreen();

  const steps = getRoutineWizardSteps();
  const current = steps[state.wizardStep] || steps[0];
  const isRegularRoute = state.routineRoute === "regular";
  const isProductRoute = state.routineRoute === "product";
  const isRubricRoute = state.routineRoute === "rubric";
  const isSavedRoute = state.routineRoute === "saved";  // ← שגרה שמורה
  const isWizardFlow = isRegularRoute && state.routineFlow === "wizard";
  const isDirectRegularRoutine = isRegularRoute && state.routineFlow === "direct";
  const hideWizardChrome = !isWizardFlow; // פסים רק ב-wizard!
  const selectedProduct = isProductRoute ? getProduct(state.preferredProductId) : null;
  const showSliders = !isSavedRoute && (isProductRoute || isDirectRegularRoutine || isRubricRoute);  // ← לא בשגרה שמורה!

  return el("section", { className: "screen active" }, [
    el("div", { className: "card routine-builder" }, [
      el("div", { className: "card-inner", style: "overflow: visible;" }, [
        // Top bar נקי - padding מינימלי
        el("div", { 
          className: "routine-top-bar",
          style: "display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 100%; box-sizing: border-box; padding: 0 1.5rem 1rem 0.5rem; gap: 1rem; flex-wrap: nowrap;"
        }, [
          // כפתור חזור - ימין (או placeholder)
          state.routineRoute === "saved"
            ? el("button", { 
                className: "back-link inline-back", 
                style: "flex-shrink: 0;",
                text: `חזור`, 
                onClick: () => navigate("favorites") 
              })
            : isProductRoute 
            ? el("button", { 
                className: "back-link inline-back", 
                style: "flex-shrink: 0;",
                text: `חזור`, 
                onClick: () => navigate(state.selectedProductId ? "product" : "products") 
              }) 
            : state.wizardStep > 0 && current.id !== "result"  // ✅ לא במסך תוצאה!
              ? el("button", { 
                  className: "back-link inline-back", 
                  style: "flex-shrink: 0;",
                  text: `חזור`, 
                  onClick: goBack 
                }) 
              : el("div", { style: "flex-shrink: 0; visibility: hidden; width: 60px;" }),
          
          // כפתור שמור/הסר שגרה - שמאל (רק בשלב result) - pill button אחיד
          current.id === "result" ? el("button", { 
            className: "save-routine-btn",
            "aria-label": isSavedRoute ? "הסר שגרה" : "שמור שגרה",
            "aria-pressed": String(isSavedRoute || isRoutineSaved(buildRoutine())),
            style: "display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1rem; margin-left: -1rem; background: #F3EEFF; border: 1.5px solid #9075D7; border-radius: 999px; cursor: pointer; white-space: nowrap; flex-shrink: 0; max-width: fit-content; overflow: visible; transition: all 0.2s ease; box-shadow: none;",
            onClick: (event) => { 
              event.preventDefault(); 
              event.stopPropagation(); 
              
              // ✅ אנימציית לב!
              const heartEl = event.currentTarget.querySelector('.save-routine-heart');
              if (heartEl) {
                heartEl.classList.add('heart-bounce');
                setTimeout(() => heartEl.classList.remove('heart-bounce'), 600);
              }
              
              // ✅ שגרה שמורה - הסרה והחזרה למועדפים!
              if (isSavedRoute && state.loadedSavedRoutine) {
                console.log('🗑️ REMOVING SAVED ROUTINE from saved route');
                toggleSavedRoutine(state.loadedSavedRoutine, event.currentTarget);
                // חזרה למועדפים אחרי הסרה
                window.setTimeout(() => {
                  navigate("favorites");
                }, 500);
                return;
              }
              
              // ✅ CRITICAL: לקחת snapshot של השגרה המוצגת כרגע!
              // עדיפות: refreshedRoutine (אחרי "שנה שגרה") > displayedRoutine > buildRoutine
              let routine;
              if (state.refreshedRoutine && state.refreshedRoutine.steps) {
                // יש refreshedRoutine - השתמש בו!
                routine = {
                  steps: structuredClone(state.refreshedRoutine.steps),  // ✅ deep copy!
                  warnings: state.refreshedRoutine.warnings || []
                };
                console.log('💾 SAVING ROUTINE FROM refreshedRoutine:', routine.steps.map(s => s.name));
              } else if (state.displayedRoutine && state.displayedRoutine.steps) {
                // יש displayedRoutine - השתמש בו!
                routine = {
                  steps: structuredClone(state.displayedRoutine.steps),  // ✅ deep copy!
                  warnings: state.displayedRoutine.warnings || []
                };
                console.log('💾 SAVING ROUTINE FROM displayedRoutine:', routine.steps.map(s => s.name));
              } else {
                // fallback - בנה מחדש
                routine = buildRoutine();
                console.log('💾 SAVING ROUTINE FROM buildRoutine:', routine.steps.map(s => s.name));
              }
              
              // הוסף context
              if (!routine.context) {
                routine.context = {
                  timeOfDay: state.timeOfDay,
                  feeling: state.feeling,
                  includeMask: state.includeMask,
                  routineType: state.routineType,
                  routinePace: state.routinePace,
                  preferredProductId: state.preferredProductId,
                  selectedFavoriteProductId: state.selectedFavoriteProductId
                };
              }
              
              console.log('💾 SAVE SNAPSHOT:', {
                saveId: Date.now(),
                source: state.refreshedRoutine ? 'refreshedRoutine' : state.displayedRoutine ? 'displayedRoutine' : 'buildRoutine',
                products: routine.steps.map(p => ({ id: p.id, name: p.name }))
              });
              
              toggleSavedRoutine(routine, event.currentTarget); 
            } 
          }, [
            el("span", { 
              className: "save-routine-heart",
              style: "font-size: 1.5rem; line-height: 1; flex-shrink: 0; display: inline-block; color: #9075D7; background: none; border: none; padding: 0; margin: 0; transition: transform 0.1s ease;",
              text: isSavedRoute || isRoutineSaved(buildRoutine()) ? "♥" : "♡"
            }),
            el("span", { 
              className: "save-routine-text",
              style: "font-size: 0.9rem; font-weight: 700; color: #9075D7; white-space: nowrap; flex-shrink: 0;", 
              text: isSavedRoute 
                ? "הסר שגרה"  // רק בשגרה ממועדפים
                : isRoutineSaved(buildRoutine()) 
                  ? "שגרה נשמרה"  // שגרה רגילה ששמורה
                  : "שמור שגרה"  // שגרה רגילה לא שמורה
            })
          ]) : el("div", { style: "flex-shrink: 0; visibility: hidden; width: 1px;" })
        ]),
        el("p", { className: "eyebrow", text: `${getRoutineSlot().icon} שגרת ${state.timeOfDay}` }),
        el("h2", { text: isProductRoute ? "שגרה סביב מוצר" : current.title }),
        isProductRoute ? renderProductRoutineHeader(selectedProduct) : null,
        showSliders ? renderProductRoutineControls() : null,
        hideWizardChrome ? null : isRegularRoute ? state.wizardStep > 0 ? renderLockedRoutineTime() : null : renderTimeSegmented(),
        hideWizardChrome ? null : el("div", { 
          className: "wizard-stepper",
          style: "display: flex; align-items: flex-start; justify-content: space-between; margin: 1.5rem 0 2rem; padding: 0 0.5rem; width: 100%; max-width: 100%; overflow: hidden;"
        }, getWizardStepLabels().flatMap((label, index) => {
          const items = [
            // Step item עם עיגול וכותרת - responsive
            el("div", {
              key: `step-${index}`,
              className: "step-item",
              style: "display: flex; flex-direction: column; align-items: center; gap: 0.25rem; flex-shrink: 1; min-width: 0;"
            }, [
              // עיגול השלב - responsive
              el("div", {
                className: `step-circle ${index === state.wizardStep ? "active" : ""} ${index < state.wizardStep ? "done" : ""}`,
                style: `
                  width: clamp(24px, 5vw, 32px);
                  height: clamp(24px, 5vw, 32px);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: clamp(11px, 2.5vw, 0.875rem);
                  font-weight: 600;
                  transition: all 0.3s ease;
                  flex-shrink: 0;
                  ${index < state.wizardStep ? 
                    "background: #9075D7; color: white; border: 2px solid #9075D7;" : 
                    index === state.wizardStep ? 
                      "background: white; color: #9075D7; border: 2px solid #9075D7; box-shadow: 0 0 0 4px rgba(144, 117, 215, 0.1);" :
                      "background: white; color: #9CA3AF; border: 2px solid #E5E7EB;"
                  }
                `,
                text: index < state.wizardStep ? "✓" : (index + 1).toString()
              }),
              // כותרת השלב - responsive
              el("span", {
                style: `
                  font-size: clamp(9px, 2vw, 0.75rem);
                  text-align: center;
                  color: ${index === state.wizardStep ? "#9075D7" : index < state.wizardStep ? "#6B7280" : "#9CA3AF"};
                  font-weight: ${index === state.wizardStep ? "600" : "400"};
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 100%;
                `,
                text: label
              })
            ])
          ];
          
          // הוסף קו מחבר אחרי העיגול (אם לא השלב האחרון) - responsive
          if (index < getWizardStepLabels().length - 1) {
            items.push(
              el("div", {
                key: `connector-${index}`,
                className: "step-connector",
                style: `
                  flex: 1;
                  height: 2px;
                  background: ${index < state.wizardStep ? "#9075D7" : "#E5E7EB"};
                  align-self: flex-start;
                  margin-top: clamp(12px, 2.5vw, 16px);
                  min-width: 4px;
                  max-width: 64px;
                `
              })
            );
          }
          
          return items;
        })),
        current.render(),
        hideWizardChrome ? null : renderWizardActions(steps.length),
      ]),
    ]),
  ]);
}

function renderProductRoutineHeader(product) {
  if (!product) return null;
  return el("section", { className: "product-routine-header" }, [
    renderProductImage(product, "product-routine-image"),
    el("div", { className: "product-routine-copy" }, [
      el("h3", { text: product.name }),
      el("p", { className: "eyebrow", text: `${product.brand} · ${friendlyType(product.type)}` }),
      el("p", { text: "המוצר שבחרת נשאר המרכז של השגרה, מאמי. הסליידרים רק משנים את התמיכה סביבו." }),
    ]),
  ]);
}

function renderProductRoutineControls() {
  const currentRoutine = buildRoutine();
  const currentStepCount = currentRoutine.steps.filter((step) => step.type !== "sunscreen").length;
  const isDirectRegularRoutine = state.routineRoute === "regular" && state.routineFlow === "direct";
  const headerText = isDirectRegularRoutine ? "התאם את השגרה לפי הצורך שלך" : "המוצר שבחרת נשאר המרכז של השגרה, מאמי. הסליידרים רק משנים את התמיכה סביבו.";
  
  return el("div", { className: "product-routine-controls" }, [
    isDirectRegularRoutine ? el("p", { className: "routine-controls-intro", text: headerText }) : null,
    renderRoutineControlSlider({
      label: "קליל / מהיר  →←  מפנק",
      value: state.routinePace,
      min: 1,
      max: 3,
      display: (value) => ["מהיר", "מאוזן", "מפנק"][value - 1] || "מאוזן",
      onValue: (value) => {
        const oldPace = state.routinePace;
        const newPace = Math.min(3, Math.max(1, value));
        
        // חישוב כמות מוצרים לפי pace
        const paceToSteps = {
          1: 3,      // מהיר: 3 מוצרים
          2: 4,      // מאוזן: 4 מוצרים
          3: Math.random() < 0.5 ? 5 : (Math.random() < 0.5 ? 6 : 7)  // מפנק: 5-7 מוצרים
        };
        
        const oldSteps = paceToSteps[oldPace] || 4;
        const newSteps = paceToSteps[newPace] || 4;
        const stepsDiff = newSteps - oldSteps;
        
        // עדכן pace וכמות
        state.routinePace = newPace;
        state.requestedSteps = newSteps;
        
        // הודעת משוב - כללית ללא מספרים מדויקים
        if (newPace === 1) {
          state.paceChangeMessage = "שגרה מהירה: מוצרים בסיסיים, פחות שלבים";
        } else if (newPace === 3) {
          state.paceChangeMessage = "שגרה מפנקת: נוספו מוצרים משלימים";
        } else {
          state.paceChangeMessage = "שגרת טיפוח מאוזנת";
        }
        
        // ✅ CRITICAL: לא לאפס refreshedRoutine!
        // במקום: לקחת את displayedRoutine ולבנות מחדש עם pace חדש
        console.log('🎚️ Pace slider changed:', oldPace, '→', newPace);
        console.log('  displayedRoutine exists:', !!state.displayedRoutine);
        
        if (state.displayedRoutine) {
          console.log('  Using displayedRoutine as base (preserving replacements)');
          console.log('  Current steps:', state.displayedRoutine.steps.map(p => p.name));
        }
        
        // רענון השגרה - buildRoutine() יראה את routinePace החדש
        // ויחיל את routineOverrides אוטומטית
        state.completedSteps = new Set();
        state.routineNonce = Date.now();
        state.refreshedRoutine = null;  // buildRoutine() יבנה עם pace חדש + overrides
        render();
        
        // הסר הודעה אחרי 5 שניות
        if (state.paceChangeMessage) {
          setTimeout(() => {
            state.paceChangeMessage = null;
            render();
          }, 5000);
        }
      },
    }),
  ]);
}

function renderRoutineControlSlider({ label, value, displayValue = value, min, max, display, hint, onValue }) {
  const numericValue = Math.min(max, Math.max(min, Number(value)));
  const progress = ((numericValue - min) / (max - min)) * 100;
  
  // ✅ טקסט מרכזי דינמי לפי ערך הסליידר
  const centerText = "טיפוח " + (display ? display(displayValue) : displayValue);
  
  // ✅ key ייחודי לכל ערך - גורם ל-element להתחלף ולהפעיל אנימציה
  const paceKey = `pace-${displayValue}`;
  
  return el("label", { className: "routine-control" }, [
    el("div", { className: "routine-control-header" }, [
      el("span", { className: "pace-label-side", text: "מהיר" }),
      el("strong", { 
        key: paceKey,
        className: "pace-label-center pace-label-animate", 
        text: centerText 
      }),
      el("span", { className: "pace-label-side", text: "מפנק" }),
    ]),
    el("input", {
      className: "amount-range product-routine-range",
      type: "range",
      min: String(min),
      max: String(max),
      step: "0.01",  // ✅ תנועה חלקה בזמן גרירה
      value: String(numericValue),
      style: `--amount-progress: ${progress}%`,
      onInput: (event) => {
        // בזמן גרירה - תנועה חלקה, לא עוגל
        const rawValue = Number(event.target.value);
        const progress = ((rawValue - min) / (max - min)) * 100;
        event.target.style.setProperty("--amount-progress", `${progress}%`);
      },
      onChange: (event) => {
        // בסוף הגרירה - עיגול לערך קרוב ✅
        const rawValue = Number(event.target.value);
        const rounded = Math.round(rawValue);
        onValue(rounded);
      },
    }),
    el("span", { className: "routine-control-hint", text: hint }),
  ]);
}

function getRoutineWizardSteps(route = state.routineRoute) {
  // בדיקה אם יש מועדפים זמינים
  const hasFavorites = state.favorites.length > 0 && 
    state.favorites.some(id => {
      const product = getProduct(id);
      return product && product.name;
    });
  
  const sharedSteps = [
    { id: "amount", title: "כמה מוצרים לשלב?", render: renderAmountStep },
    { id: "mask", title: "כולל מסיכה?", render: renderMaskStep },
    { id: "feeling", title: "איך העור מרגיש?", render: renderFeelingWizardStep },
    { id: "type", title: "איזו שגרה בא לך?", render: renderRoutineTypeStep },
  ];
  
  // הוספת שלב מועדפים רק אם יש מועדפים וזה wizard flow (לא direct)
  const isWizardFlow = state.routineFlow === "wizard";
  if (hasFavorites && isWizardFlow) {
    sharedSteps.push({ id: "favorites", title: "מוצר מהמועדפים?", render: renderFavoritesStep });
  }
  
  sharedSteps.push({ id: "result", title: "שגרת הטיפוח שלך", render: renderRoutineResultStep });
  
  // שגרה שמורה - רק result step!
  if (route === "saved") {
    return [{ id: "result", title: "שגרת הטיפוח שלך", render: renderRoutineResultStep }];
  }
  
  if (route !== "regular") return sharedSteps;
  return [
    { id: "time", title: "מתי בא לך לעשות את השגרה?", render: renderRoutineTimeStep },
    ...sharedSteps,
  ];
}

// ✅ קבלת labels קצרים לכל שלב wizard
function getWizardStepLabels() {
  const steps = getRoutineWizardSteps();
  const labelMap = {
    time: "זמן",
    amount: "כמות",
    mask: "מסיכה",
    feeling: "עור",
    type: "מטרה",
    favorites: "מועדף",
    result: "שגרה"
  };
  
  return steps.map(step => labelMap[step.id] || "שלב");
}

function getRoutineStepIndex(stepId, route = state.routineRoute) {
  const index = getRoutineWizardSteps(route).findIndex((step) => step.id === stepId);
  return index >= 0 ? index : 0;
}

function getCurrentRoutineStep() {
  return getRoutineWizardSteps()[state.wizardStep] || getRoutineWizardSteps()[0];
}

function renderRoutineLoadingScreen() {
  return el("section", { className: "screen active routine-loading-screen", "aria-live": "polite" }, [
    el("img", { className: "routine-loading-heart", src: "./assets/brand/routine-loading-heart.gif", alt: "טוען שגרת טיפוח" }),
  ]);
}

function renderTimeSegmented() {
  return el("div", { className: "segmented" }, routineSlots.map((slot) =>
    el("button", { className: state.timeOfDay === slot.id ? "active" : "", text: `${slot.icon} ${slot.id}`, onClick: () => setState({ timeOfDay: slot.id }) }),
  ));
}

function renderLockedRoutineTime() {
  const slot = getRoutineSlot();
  return el("div", { className: "success-note routine-time-locked", text: `${slot.icon} הזמן שבחרת: שגרת ${state.timeOfDay}` });
}

function renderRoutineTimeStep() {
  // ✅ בשאלון (wizard), הזמן לעולם לא נעול - המשתמש בוחר בחופשיות
  const isWizard = state.routineRoute === "regular" && state.routineFlow === "wizard";
  const locked = isWizard ? false : state.routineTimeLocked;
  
  const nextStep = getRoutineStepIndex("amount");
  return el("div", { className: "wizard-screen active" }, [
    el("p", { text: locked ? "הזמן כבר נבחר לשגרה הזאת, מאמי. ממשיכים עם אותה בחירה." : "בחר את הזמן שעליו נבנה את השגרה. אחרי ההמשך הבחירה ננעלת כדי שהמוצרים יישארו מדויקים." }),
    el("div", { className: "preference-grid time-choice-grid" }, routineSlots.map((slot) =>
      el("button", { className: `choice-card ${state.timeOfDay === slot.id ? "selected" : ""}`, disabled: locked, onClick: () => setState({ timeOfDay: slot.id, routineTimeLocked: true, wizardStep: nextStep, routineNonce: Date.now() }) }, [
        el("span", { className: "choice-title", text: `${slot.icon} ${slot.id}` }),
        el("span", { className: "choice-copy", text: slot.action }),
      ]),
    )),
  ]);
}

function renderAmountStep() {
  const label = state.requestedSteps >= 5 ? "5+" : String(state.requestedSteps);
  const rangeValue = Math.max(3, state.requestedSteps);
  const rangeProgress = ((rangeValue - 3) / 2) * 100;
  
  const syncAmountSmooth = (event) => {
    // ✅ בזמן גרירה - תנועה חלקה, עדכון ויזואלי בלבד
    const rawValue = Number(event.target.value);
    const progress = ((rawValue - 3) / 2) * 100;
    event.target.style.setProperty("--amount-progress", `${progress}%`);
    
    // עדכון תצוגה זמנית
    const display = event.target.closest(".amount-step")?.querySelector(".amount-display");
    if (display) {
      const rounded = Math.round(rawValue);
      display.textContent = rounded >= 5 ? "5+" : String(rounded);
    }
  };
  
  const syncAmountFinal = (event) => {
    // ✅ בסוף הגרירה - עיגול ועדכון state
    const rawValue = Number(event.target.value);
    const rounded = Math.max(3, Math.round(rawValue));
    state.requestedSteps = rounded;
    
    const progress = ((rounded - 3) / 2) * 100;
    event.target.style.setProperty("--amount-progress", `${progress}%`);
    
    const display = event.target.closest(".amount-step")?.querySelector(".amount-display");
    if (display) display.textContent = rounded >= 5 ? "5+" : String(rounded);
    
    state.quietRender = true;
    render();
  };
  
  return el("div", { className: "wizard-screen active amount-step" }, [
    el("div", { className: "amount-display", text: label }),
    el("input", { 
      className: "amount-range", 
      type: "range", 
      min: "3", 
      max: "5", 
      step: "0.01",  // ✅ תנועה חלקה
      value: String(rangeValue), 
      style: `--amount-progress: ${rangeProgress}%`, 
      onInput: syncAmountSmooth,  // בזמן גרירה
      onChange: syncAmountFinal   // בסוף גרירה
    }),
    el("p", { className: "step-meta", text: "3 אומר שגרה מינימלית וחכמה. 4 אומר שגרה מאוזנת. 5+ אומר שגרה עשירה יותר, רק אם יש התאמה אמיתית." }),
  ]);
}

function renderMaskStep() {
  const nextStep = getRoutineStepIndex("feeling");
  return el("div", { className: "wizard-screen active" }, [
    el("p", { text: "מסיכה נכנסת רק אם היא מתאימה לעור ולשאר המוצרים." }),
    el("div", { className: "preference-grid" }, [
      el("button", { className: `choice-card ${state.includeMask ? "selected" : ""}`, onClick: () => setState({ includeMask: true, wizardStep: nextStep }) }, [el("span", { className: "choice-title", text: "כן, בא לי מסיכה" })]),
      el("button", { className: `choice-card ${!state.includeMask ? "selected" : ""}`, onClick: () => setState({ includeMask: false, wizardStep: nextStep }) }, [el("span", { className: "choice-title", text: "לא הפעם" })]),
    ]),
  ]);
}

function renderFeelingWizardStep() {
  const nextStep = getRoutineStepIndex("type");
  return el("div", { className: "wizard-screen active" }, [
    el("div", { className: "feeling-grid" }, feelings.map((feeling) =>
      el("button", { className: `choice-card ${state.feeling === feeling.id ? "selected" : ""}`, onClick: () => setState({ feeling: feeling.id, wizardStep: nextStep }) }, [
        el("span", { className: "choice-title", text: `${feeling.icon} ${feeling.label}` }),
        el("span", { className: "choice-copy", text: feeling.desc }),
      ]),
    )),
  ]);
}

function renderRoutineTypeStep() {
  const types = [
    ["balanced", "מאוזנת", "שגרה רגועה וחכמה."],
    ["nourishing", "מזינה", "יותר לחות, שיקום וקולגן."],
    ["targeted", "טיפול ממוקד", "מוצר פעיל אחד, בלי ערבובים."],
  ];
  return el("div", { className: "wizard-screen active" }, [
    el("div", { className: "routine-type-grid" }, types.map(([id, label, desc]) =>
      el("button", { className: `choice-card ${state.routineType === id ? "selected" : ""}`, onClick: () => finishRoutineWizard({ routineType: id }) }, [el("span", { className: "choice-title", text: label }), el("span", { className: "choice-copy", text: desc })]),
    )),
  ]);
}

function renderFavoritesStep() {
  const nextStep = getRoutineStepIndex("result");
  
  // קבלת מועדפים זמינים
  const allFavorites = state.favorites
    .map(id => getProduct(id))
    .filter(product => product && product.name); // רק מוצרים תקינים
  
  // ✅ סינון חכם לפי כל התשובות בשאלון
  const context = {
    timeOfDay: state.timeOfDay,
    feeling: state.feeling,
    includeMask: state.includeMask,
    routineType: state.routineType,
    routinePace: state.routinePace,
    requestedSteps: state.requestedSteps,
    preferredProductId: state.preferredProductId
  };
  
  const favoriteProducts = getSmartFilteredFavorites(allFavorites, context);
  
  // אם אין מועדפים מתאימים - לדלג אוטומטית
  if (favoriteProducts.length === 0) {
    setState({ 
      selectedFavoriteProductId: null,
      wizardStep: nextStep,
      routineLoading: true
    });
    queueRoutineLoadingDone();
    return el("div");
  }
  
  const selectFavorite = (productId) => {
    setState({ 
      selectedFavoriteProductId: productId,
      wizardStep: nextStep,
      routineLoading: true
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    queueRoutineLoadingDone();
  };
  
  const skipFavorites = () => {
    setState({ 
      selectedFavoriteProductId: null,
      wizardStep: nextStep,
      routineLoading: true
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    queueRoutineLoadingDone();
  };
  
  // כותרת דינמית
  const title = favoriteProducts.length === allFavorites.length
    ? "רוצה לכלול מוצר מהמועדפים שלך בשגרה?"
    : `מצאתי ${favoriteProducts.length} מוצרים מהמועדפים שמתאימים לשגרה שלך:`;
  
  return el("div", { className: "wizard-screen active" }, [
    el("p", { 
      className: "step-meta", 
      text: title
    }),
    favoriteProducts.length < allFavorites.length ? 
      el("p", { 
        style: "font-size: 0.9rem; color: #6b7280; margin-bottom: 1rem;",
        text: `סיננתי רק מוצרים שמתאימים לזמן השימוש ולמצב העור שבחרת.`
      }) : null,
    el("div", { className: "favorites-grid", style: "display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; margin: 1.5rem 0;" }, 
      favoriteProducts.map(product => 
        el("button", { 
          className: `product-card-mini ${state.selectedFavoriteProductId === product.id ? "selected" : ""}`,
          style: "padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; text-align: center; cursor: pointer; background: white; transition: all 0.2s;",
          onClick: () => selectFavorite(product.id)
        }, [
          renderProductImage(product, "product-favorite-thumb"),
          el("div", { 
            style: "font-size: 0.85rem; font-weight: 500; color: #1f2937; margin-bottom: 0.25rem; margin-top: 0.5rem;",
            text: product.name
          }),
          el("div", { 
            style: "font-size: 0.75rem; color: #6b7280;",
            text: product.type
          })
        ])
      )
    ),
    el("button", { 
      className: "button secondary",
      style: "width: 100%; margin-top: 1rem;",
      text: "דלג על שלב זה",
      onClick: skipFavorites
    })
  ]);
}

function renderRoutineResultStep() {
  // ✅ בשגרה שמורה - השתמש ב-saved routine, לא buildRoutine!
  const isSavedRoute = state.routineRoute === "saved";
  
  let routine;
  if (isSavedRoute && state.loadedSavedRoutine && state.loadedSavedRoutine.routine) {
    // ✅ שגרה שמורה - טען את ה-snapshot!
    routine = state.loadedSavedRoutine.routine;
    console.log('📖 LOADING SAVED ROUTINE:', {
      id: state.loadedSavedRoutine.id?.substring(0, 50),
      count: routine.steps.length,
      products: routine.steps.map(s => s.name)
    });
  } else if (state.refreshedRoutine) {
    // יש refreshed routine - השתמש בו
    routine = state.refreshedRoutine;
    console.log('📖 LOADING REFRESHED ROUTINE:', routine.steps.map(s => s.name));
  } else {
    // fallback - build מחדש
    routine = buildRoutine();
    console.log('📖 LOADING BUILD ROUTINE:', routine.steps.map(s => s.name));
  }
  
  // ✅ שמור את השגרה המוצגת ב-state כדי ש-Replace Product יוכל להשתמש בה
  state.displayedRoutine = routine;
  
  // ✅ CRITICAL: Final dedupe BEFORE RENDER - זה הנקודה האחרונה לפני תצוגה!
  if (routine && routine.steps) {
    console.log('🔍 FINAL ROUTINE BEFORE DEDUPE:', routine.steps.map(p => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      key: getProductIdentity(p)
    })));
    
    const seenIds = new Set();
    const seenKeys = new Set();
    const originalLength = routine.steps.length;
    
    routine.steps = routine.steps.filter(product => {
      const id = product.id;
      const key = getProductIdentity(product);
      
      if (seenIds.has(id) || seenKeys.has(key)) {
        console.warn('⚠️⚠️⚠️ FINAL DEDUPE REMOVED DUPLICATE BEFORE RENDER:', {
          id,
          key,
          name: product.name,
          brand: product.brand,
          reason: product.reason
        });
        return false;
      }
      
      seenIds.add(id);
      seenKeys.add(key);
      return true;
    });
    
    if (routine.steps.length < originalLength) {
      console.warn(`⚠️ DEDUPE REMOVED ${originalLength - routine.steps.length} DUPLICATES`);
    }
    
    console.log('✅ FINAL ROUTINE AFTER DEDUPE:', routine.steps.map(p => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      key: getProductIdentity(p)
    })));
    
    // עדכן גם ב-displayedRoutine
    state.displayedRoutine = routine;
  }
  
  // Guard: אם אין routine תקין
  if (!routine || !routine.steps) {
    return el("div", { className: "wizard-screen active" }, [
      el("p", { text: "מצטערים, לא הצלחנו לבנות שגרה. נסו שוב." })
    ]);
  }
  
  const product = getProduct(state.preferredProductId);
  const isProductRoute = state.routineRoute === "product";
  
  // ✅ תמיד להשתמש ב-getRoutineIntro() - הוא כבר מטפל בכל הסוגים
  const intro = getRoutineIntro(routine);
  
  // הוספת הערה מיוחדת לשגרה סביב מוצר
  const productNote = isProductRoute && product
    ? `המוצר ${product.name} נשאר בפנים בכל שינוי, ושאר השלבים מתעדכנים לפי מה שבחרת.`
    : null;
  
  // הוספת context לשגרה לצורך שמירה (רק אם אין)
  if (!routine.context) {
    routine.context = {
      timeOfDay: state.timeOfDay,
      feeling: state.feeling,
      includeMask: state.includeMask,
      routineType: state.routineType,
      routinePace: state.routinePace,
      preferredProductId: state.preferredProductId,
      selectedFavoriteProductId: state.selectedFavoriteProductId
    };
  }
  
  const isSaved = isRoutineSaved(routine);

  return el("div", { className: isProductRoute ? "routine-result-content" : "wizard-screen active" }, [
    el("p", { html: intro }),
    productNote ? el("p", { className: "product-note", text: productNote, style: "font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem;" }) : null,
    state.paceChangeMessage 
      ? el("div", { className: "pace-change-notice", text: state.paceChangeMessage })
      : null,
    state.replacementMessage 
      ? el("div", { className: "replacement-notice", text: state.replacementMessage })
      : null,
    renderRoutinePreview(routine),
    (isProductRoute || state.routineRoute === "saved") ? null : renderNextProductSuggestion(routine),
    routine.warnings && routine.warnings.length ? renderWarnings(routine.warnings) : null,
    // ✅ כפתור "שנה שגרה" - רק בשגרות רגילות, לא בשגרות שמורות!
    state.routineRoute === "saved" ? null : el("button", { 
      className: "button", 
      style: "width: 100%; margin-top: 1.5rem; background: #9075D7; color: white; border: 2px solid #9075D7; font-size: 1rem; padding: 1rem;",
      text: "שנה שגרה ↻", 
      onClick: () => {
        // שמור את השגרה הנוכחית
        const currentRoutine = buildRoutine();
        if (!currentRoutine || !currentRoutine.steps || currentRoutine.steps.length === 0) return;
        
        console.log('🔄 Refreshing', currentRoutine.steps.length, 'steps');
        
        // שינוי seed
        const newSeed = Date.now() + Math.random();
        
        // בנה context
        const context = {
          timeOfDay: state.timeOfDay,
          feeling: state.feeling,
          routinePace: state.routinePace,
          routineType: state.routineType,
          includeMask: state.includeMask,
          preferredProductId: state.preferredProductId,
          selectedFavoriteProductId: state.selectedFavoriteProductId,
          routineNonce: newSeed,
          isTargetedRoutine: state.routineType === "targeted",
          hasStrongActive: false
        };
        
        console.log('⏰ Routine time:', state.timeOfDay, '→', isDayRoutine(state.timeOfDay) ? 'DAY' : 'NIGHT');
        
        // בנה שגרה מרעננת - עבור על כל step והחלף
        const refreshedSteps = currentRoutine.steps.map(step => {
          // שמור מוצרים מועדפים
          if (step.id === state.preferredProductId || 
              step.id === state.selectedFavoriteProductId) {
            console.log(`  Keeping preferred: ${step.name}`);
            return step;
          }
          
          try {
            // מצא מוצרים אחרים מאותו type
            const otherSteps = currentRoutine.steps.filter(s => s.id !== step.id);
            const allOfType = candidatesFor(context, step.type);
            
            console.log(`  ${step.type}: found ${allOfType.length} candidates`);
            if (allOfType.length > 0) {
              console.log(`    Top 3 scores:`, allOfType.slice(0, 3).map(p => 
                `${p.name.substring(0, 20)} (${scoreProduct(p, context).toFixed(1)})`
              ).join(', '));
            }
            
            // סנן: לא אותו מוצר + לא duplicate + בטוח להוסיף
            const alternatives = allOfType
              .filter(p => p.id !== step.id)
              .filter(p => !isProductAlreadySelected(p, otherSteps))  // ✅ מניעת duplicates!
              .filter(p => isSafeAddition(p, otherSteps, context.feeling, context));
            
            if (alternatives.length > 0) {
              // בחר אקראי מתוך 5 ראשונים
              const topFive = alternatives.slice(0, 5);
              const randomIndex = Math.floor(Math.random() * topFive.length);
              const newProduct = topFive[randomIndex];
              
              console.log(`  ${step.type}: ${step.name} → ${newProduct.name}`);
              return { ...newProduct, reason: step.reason };
            } else {
              console.log(`  ${step.type}: keeping ${step.name} (no alternatives)`);
              return step;
            }
          } catch (err) {
            console.error(`  Error with ${step.type}:`, err);
            return step;
          }
        });
        
        console.log('✅ Refreshed:', refreshedSteps.map(s => s.name).join(', '));
        
        // ✅ סדר מחדש לפי routineOrderScore
        refreshedSteps.sort((a, b) => routineOrderScore(a) - routineOrderScore(b));
        console.log('✅ Sorted:', refreshedSteps.map(s => s.name).join(', '));
        
        // שמור את השגרה המרעננת ב-state
        state.refreshedRoutine = {
          steps: refreshedSteps,
          warnings: currentRoutine.warnings || []
        };
        
        // נקה overrides (לא צריך יותר)
        state.routineOverrides = {};
        
        render();
      }
    })
  ]);
}

function renderCoupleIntro() {
  const tasks = [
    "תגיד לו משהו אחד שאתה אוהב בו.",
    "בחרו שיר שמתאים לרגע.",
    "סלפי מסיכות חובה, אבל בלי לחץ של דוגמנים.",
    "כל אחד עושה לשני מחמאה אחת.",
  ];
  const task = tasks[state.routineNonce % tasks.length];
  return el("div", { className: "couple-flow" }, [
    el("div", { className: "success-note", text: "מאמי, תביאו מגבות קטנות וכוס מים. יאללה מתחילים ספא ביתי." }),
    el("div", { className: "couple-mini-grid" }, [
      el("article", { className: "mini-note" }, [el("h3", { text: "רענון" }), el("p", { text: "כל אחד דואג לשני בעדינות. לא לשפשף כאילו מנקים סיר." })]),
      el("article", { className: "mini-note" }, [el("h3", { text: "בזמן המסיכה" }), el("p", { text: task })]),
      el("article", { className: "mini-note" }, [el("h3", { text: "סיום" }), el("p", { text: "זהו מאמי, אתם רשמית זוג זוהר יותר." })]),
    ]),
  ]);
}

function getRoutineIntro(routine) {
  const isWizard = state.routineRoute === "regular" && state.routineFlow === "wizard";
  const isDirectRegular = state.routineRoute === "regular" && state.routineFlow === "direct";
  const isRubric = state.routineRoute === "rubric";
  const isProduct = state.routineRoute === "product";
  
  const product = isProduct ? getProduct(state.preferredProductId) : null;
  const feeling = getFeeling();
  
  // ספירת מוצרים בפועל (ללא SPF)
  const actualCount = routine ? routine.steps.filter(s => s.type !== "SPF").length : state.requestedSteps;
  const stepCount = String(actualCount);  // תמיד מספר בפועל, לא "5+"
  
  // תיאורי קצב השגרה
  const paceLabels = {
    1: "מהירה",
    2: "מאוזנת", 
    3: "מפנקת"
  };
  const paceDesc = paceLabels[state.routinePace] || "מאוזנת";
  
  // תיאורי התועלת לפי קצב
  const paceBenefits = {
    1: "מינימליסטית ויעילה",
    2: "מאוזנת ומספקת",
    3: "מלאה ומפנקת"
  };
  const benefit = paceBenefits[state.routinePace] || "מאוזנת ומספקת";
  
  // תיאורי מצבי עור (בלשון נמוכה למשפט)
  const feelingDescriptions = {
    sensitive: "עור רגיש",
    red: "אדמומיות",
    dry: "יובש",
    breakouts: "פצעונים",
    oily: "שומניות",
    glow: "זוהר וחיוניות",
    antiaging: "אנטי אייג'ינג"
  };
  const feelingDesc = feelingDescriptions[feeling.id] || feeling.label;
  
  // פונקציית עזר להדגשת מספר המוצרים
  const highlightCount = (text) => {
    return text.replace(new RegExp(`${stepCount} מוצרים`), `<strong class="product-count-highlight">${stepCount}</strong> מוצרים`);
  };
  
  // 1. שגרה סביב מוצר
  if (isProduct && product) {
    return highlightCount(`הנה שגרת ${state.timeOfDay} ${paceDesc} עם ${stepCount} מוצרים סביב ${product.name}.`);
  }
  
  // 2. שאלון מלא - כל הפרטים
  if (isWizard) {
    return highlightCount(`הנה שגרת ${state.timeOfDay} ${paceDesc} שמתאימה ל${feelingDesc} וכוללת ${stepCount} מוצרים.`);
  }
  
  // 3. מכפתור מצב עור (rubric) - לא להזכיר זמן יום
  if (isRubric && state.feelingExplicitlySelected) {
    return highlightCount(`הנה שגרת טיפוח ${paceDesc} המטפלת ב${feelingDesc} בעזרת ${stepCount} מוצרים.`);
  }
  
  // 4. מכפתור ראשי (זמן יום) - דגש על זמן ועושר
  if (isDirectRegular) {
    return highlightCount(`הנה שגרת ${state.timeOfDay} ${paceDesc} עם ${stepCount} מוצרים, שתעניק לעור ${benefit}.`);
  }
  
  // ברירת מחדל (לא אמור להגיע לכאן)
  return highlightCount(`הנה שגרת הטיפוח שלך עם ${stepCount} מוצרים, עם סדר מריחה נכון.`);
}

function renderWizardActions(totalSteps) {
  const currentStep = getCurrentRoutineStep();
  if (["mask", "feeling", "type", "favorites"].includes(currentStep.id) || (currentStep.id === "time" && !state.routineTimeLocked)) return el("div");
  const advance = () => {
    if (state.wizardStep === totalSteps - 1) {
      setState({ wizardStep: 0, routineTimeLocked: state.routineRoute === "regular" ? false : state.routineTimeLocked, routineNonce: Date.now() });
      return;
    }
    setState({
      wizardStep: Math.min(totalSteps - 1, state.wizardStep + 1),
      routineTimeLocked: state.routineRoute === "regular" && currentStep.id === "time" ? true : state.routineTimeLocked,
      routineNonce: Date.now(),
    });
  };
  return el("div", { className: "row-actions" }, [
    state.wizardStep === 0 ? null : el("button", { className: "button secondary", text: "חזור", onClick: () => setState({ wizardStep: Math.max(0, state.wizardStep - 1) }) }),
    el("button", { className: "button", text: state.wizardStep === totalSteps - 1 ? "לבנות מחדש" : "המשך", onClick: advance }),
  ]);
}

function renderNextProductSuggestion(routine) {
  const pool = state.favorites.length
    ? state.favorites.map(getProduct).filter(Boolean)
    : products.filter((product) => ["Serum", "Cream", "Mask", "Toner", "Eye Cream"].includes(product.type));
  const candidate = pool
    .filter((product) => !routine.steps.some((step) => step.id === product.id))
    .filter((product) => productMatchesTime(product, state.timeOfDay) || product.type === "Mask")
    .filter((product) => isSafeAddition(product, routine.steps, state.feeling))
    .sort((a, b) => scoreProduct(b, { timeOfDay: state.timeOfDay, feeling: state.feeling, includeMask: state.includeMask, routineType: state.routineType, preferredProductId: null, routineNonce: state.routineNonce }) - scoreProduct(a, { timeOfDay: state.timeOfDay, feeling: state.feeling, includeMask: state.includeMask, routineType: state.routineType, preferredProductId: null, routineNonce: state.routineNonce }))[0];

  if (!candidate) return null;
  return el("article", { className: "suggestion-card" }, [
    renderProductImage(candidate, "suggestion-image"),
    el("div", {}, [
      el("p", { className: "eyebrow", text: state.favorites.length ? "אפשר לבנות גם סביב מועדף" : "אפשר לבנות גם סביב מוצר" }),
      el("strong", { text: candidate.name }),
      el("p", { text: `${candidate.brand} · ${friendlyType(candidate.type)}` }),
    ]),
    el("button", { className: "button small soft", text: "בנה שגרה חדשה", onClick: () => startRoutine({ product: candidate, route: "product" }) }),
  ]);
}

function renderRoutinePreview(routine) {
  const nonSPFSteps = routine.steps.filter(s => s.type !== "SPF");
  
  return el("div", { className: "routine-list" }, routine.steps.map((step, index) => {
    const isCompleted = state.completedSteps.has(step.id);
    const stepIndexInNonSPF = nonSPFSteps.findIndex(s => s.id === step.id);
    const canCheck = stepIndexInNonSPF === 0 || nonSPFSteps.slice(0, stepIndexInNonSPF).every(s => state.completedSteps.has(s.id));
    const isLastStep = stepIndexInNonSPF === nonSPFSteps.length - 1;
    
    // בדיקה אם ההערה מתייחסת לשלב הבא
    const note = getProductStepNote(step);
    const hasNextStepReference = note && (
      note.includes("לפני השלב הבא") || 
      note.includes("להמשיך לשלב הבא") || 
      note.includes("לפני מריחת קרם") ||
      note.includes("השלב הבא")
    );
    
    // אם זה השלב האחרון והיא מתייחסת לשלב הבא - לא להציג
    const shouldShowNote = !isLastStep || !hasNextStepReference;
    
    return step.type === "SPF" 
      ? el("article", { className: "routine-step spf-important-note" }, [
          el("div", { className: "spf-note-content" }, [
            el("h4", { className: "spf-note-title", text: "הערות חשובות" }),
            el("p", { className: "spf-note-text", text: step.reason || step.simpleDesc }),
          ]),
        ])
      : el("article", { className: `routine-step ${isCompleted ? "completed" : ""}` }, [
          el("div", { className: "routine-product-thumb" }, [renderProductImage(step, "routine-product-image"), el("span", { className: "step-number", text: String(index + 1) })]),
          el("div", { className: "routine-step-content" }, [
            el("p", { className: "product-title", text: step.name }),
            el("div", { className: "product-subtitle", text: `${step.brand} · ${friendlyType(step.type)}` }),
            el("p", { className: "step-meta", text: step.reason || step.simpleDesc }),
            renderMaskStepGuide(step),
            shouldShowNote ? renderProductStepNote(step) : null,
            el("button", {
              className: "replace-product-button",
              text: "החלף מוצר",
              onClick: () => {
                state.productToReplace = step;
                state.showProductReplacement = true;
                state.selectedReplacement = null;
                state.replacementMessage = null;
                render();
              }
            }),
          ]),
          el("button", { 
            className: `check-button ${isCompleted ? "done" : ""} ${!canCheck ? "disabled" : ""}`, 
            "aria-label": `סמן ${step.name}`,
            disabled: !canCheck,
            text: isCompleted ? "✓" : "", 
            onClick: () => { 
              if (!canCheck) return;
              if (state.completedSteps.has(step.id)) {
                state.completedSteps.delete(step.id);
              } else {
                state.completedSteps.add(step.id);
              }
              render();
              checkRoutineCompletion(routine);
            } 
          }),
        ]);
  }));
}

function renderCompletionModal() {
  if (!state.showCompletionModal) return null;
  
  return el("div", { className: "completion-overlay", onClick: (e) => { if (e.target.classList.contains("completion-overlay")) closeCompletionModal(); } }, [
    el("div", { className: "completion-modal" }, [
      el("img", { 
        className: "completion-character", 
        src: "assets/brand/app-character.png", 
        alt: "מאמי טיפוח"
      }),
      el("p", { className: "completion-message", text: state.completionMessage }),
      el("button", { 
        className: "button primary completion-button", 
        text: "סגור", 
        onClick: closeCompletionModal 
      })
    ])
  ]);
}

function renderProductReplacementOverlay() {
  if (!state.showProductReplacement || !state.productToReplace) return null;
  
  // ✅ חישוב candidates בנפרד - עם הגנה מפני errors
  let replacements = [];
  try {
    // ✅ השתמש בשגרה המוצגת, לא buildRoutine() מחדש!
    const routine = state.displayedRoutine || buildRoutine();
    const context = {
      timeOfDay: state.timeOfDay,
      feeling: state.feeling,
      routinePace: state.routinePace,
    };
    replacements = findReplacementProducts(state.productToReplace, routine, context) || [];
  } catch (error) {
    console.error("Error in findReplacementProducts:", error);
    replacements = [];
  }
  
  return el("div", { 
    className: "replacement-overlay", 
    onClick: (e) => { 
      if (e.target.classList.contains("replacement-overlay")) {
        state.showProductReplacement = false;
        state.productToReplace = null;
        state.selectedReplacement = null;
        render();
      }
    } 
  }, [
    el("div", { className: "replacement-modal" }, [
      el("button", { 
        className: "replacement-close", 
        text: "×",
        onClick: () => {
          state.showProductReplacement = false;
          state.productToReplace = null;
          state.selectedReplacement = null;
          render();
        }
      }),
      el("h3", { className: "replacement-title", text: "החלף מוצר" }),
      
      // המוצר הנוכחי
      el("div", { className: "current-product-section" }, [
        el("p", { className: "section-label", text: "מוצר נוכחי:" }),
        el("div", { className: "current-product-card" }, [
          renderProductImage(state.productToReplace, "replacement-product-image"),
          el("div", { className: "replacement-product-info" }, [
            el("p", { className: "replacement-product-name", text: state.productToReplace.name }),
            el("p", { className: "replacement-product-meta", text: `${state.productToReplace.brand} · ${friendlyType(state.productToReplace.type)}` }),
          ]),
        ]),
      ]),
      
      // מוצרים חלופיים
      replacements.length > 0
        ? el("div", { className: "replacements-section" }, [
            el("p", { className: "section-label", text: "בחרי מוצר חלופי:" }),
            el("div", { className: "replacements-list" }, replacements.map(product => 
              el("div", { 
                className: `replacement-option ${state.selectedReplacement?.id === product.id ? "selected" : ""}`,
                onClick: () => {
                  state.selectedReplacement = product;
                  render();
                }
              }, [
                renderProductImage(product, "replacement-option-image"),
                el("div", { className: "replacement-option-info" }, [
                  el("p", { className: "replacement-option-name", text: product.name }),
                  el("p", { className: "replacement-option-meta", text: `${product.brand} · ${friendlyType(product.type)}` }),
                  el("p", { className: "replacement-option-desc", text: product.simpleDesc }),
                ]),
                state.selectedReplacement?.id === product.id 
                  ? el("div", { className: "replacement-selected-icon", text: "✓" })
                  : null,
              ])
            )),
          ])
        : el("div", { className: "no-replacements" }, [
            el("p", { className: "no-replacements-emoji", text: "✨" }),
            el("p", { className: "no-replacements-text", text: "מאמי, לא מצאתי מוצר מתאים שיכול להחליף את זה בלי לפגוע בשגרה" }),
            el("p", { className: "no-replacements-hint", text: "המוצר הזה חשוב לשלב הנוכחי ואין כרגע מוצר דומה שמתאים לשאר הרכיבים בשגרה." }),
          ]),
      
      // כפתור החלפה
      replacements.length > 0
        ? el("button", {
            className: `button primary replacement-confirm ${!state.selectedReplacement ? "disabled" : ""}`,
            text: "החלף למוצר זה",
            disabled: !state.selectedReplacement,
            onClick: () => {
              if (!state.selectedReplacement) return;
              
              console.log('🔄 Starting replacement...');
              console.log('  From:', state.productToReplace?.id, state.productToReplace?.name);
              console.log('  To:', state.selectedReplacement?.id, state.selectedReplacement?.name);
              
              try {
                const productToReplaceId = state.productToReplace.id;
                const newProductId = state.selectedReplacement.id;
                
                console.log('  Finding original ID...');
                
                // מצא את ה-ID המקורי של המוצר
                // אם המוצר שאנחנו מחליפים הוא עצמו החלפה, נמצא את המקור
                let originalId = productToReplaceId;
                
                // חפש אם productToReplaceId הוא ערך ב-routineOverrides
                for (const [origId, replacedId] of Object.entries(state.routineOverrides || {})) {
                  if (replacedId === productToReplaceId) {
                    originalId = origId;
                    console.log(`    Found original: ${productToReplaceId} was replacement of ${origId}`);
                    break;
                  }
                }
                
                console.log(`  Original ID: ${originalId}`);
                console.log('  Saving override...');
                
                // עדכן את ה-override המקורי (לא ליצור חדש!)
                const newOverrides = { ...state.routineOverrides };
                
                // אם מחזירים למוצר המקורי - מוחקים את ה-override
                if (newProductId === originalId) {
                  console.log('  Returning to original product - removing override');
                  delete newOverrides[originalId];
                } else {
                  newOverrides[originalId] = newProductId;
                }
                
                state.routineOverrides = newOverrides;
                
                console.log('  Override saved:', JSON.stringify(state.routineOverrides));
                
                // ✅ עדכן את displayedRoutine ישירות
                if (state.displayedRoutine && state.displayedRoutine.steps) {
                  console.log('  Updating displayedRoutine...');
                  console.log('  Before replacement:', state.displayedRoutine.steps.map(s => s.name));
                  
                  state.displayedRoutine.steps = state.displayedRoutine.steps.map(step => {
                    if (step.id === productToReplaceId) {
                      console.log(`    Replacing ${step.name} with ${state.selectedReplacement.name}`);
                      return { ...state.selectedReplacement, reason: step.reason };
                    }
                    return step;
                  });
                  
                  console.log('  After replacement:', state.displayedRoutine.steps.map(s => s.name));
                  
                  // ✅ שמור את displayedRoutine ב-refreshedRoutine כדי שלא יקרא buildRoutine()
                  state.refreshedRoutine = state.displayedRoutine;
                }
                
                // הגדר הודעה
                state.replacementMessage = "המוצר הוחלף בהצלחה ✨";
                
                // ✅ לא לעדכן routineNonce - זה יגרום ל-buildRoutine להרוץ שוב!
                // ✅ לא לאפס completedSteps - השגרה לא השתנתה!
                
                console.log('  Closing overlay...');
                
                // סגור את ה-overlay
                state.showProductReplacement = false;
                state.productToReplace = null;
                state.selectedReplacement = null;
                
                console.log('  Calling render()...');
                render();
                console.log('  ✅ Render completed successfully');
                
                // הסר הודעה אחרי 5 שניות
                setTimeout(() => {
                  state.replacementMessage = null;
                  render();
                }, 5000);
              } catch (error) {
                console.error('❌ ERROR replacing product:', error);
                console.error('Stack trace:', error.stack);
                alert('שגיאה: ' + error.message + '\n\nפתח את הקונסול (F12) לפרטים נוספים');
                
                // נסה לסגור את ה-overlay בכל מקרה
                state.showProductReplacement = false;
                state.productToReplace = null;
                state.selectedReplacement = null;
                
                try {
                  render();
                } catch (renderError) {
                  console.error('❌ ERROR in render():', renderError);
                  console.error('Stack trace:', renderError.stack);
                  alert('שגיאה קריטית ב-render: ' + renderError.message);
                }
              }
            }
          })
        : null,
    ]),
  ]);
}

function renderCompletionModal_old() {
  if (!state.showCompletionModal) return null;
  
  return el("div", { className: "completion-overlay", onClick: (e) => { if (e.target.classList.contains("completion-overlay")) closeCompletionModal(); } }, [
    el("div", { className: "completion-modal" }, [
      el("img", { 
        className: "completion-character", 
        src: "assets/brand/app-character.png", 
        alt: "מאמי טיפוח"
      }),
      el("p", { className: "completion-message", text: state.completionMessage }),
      el("button", { 
        className: "button primary completion-button", 
        text: "סגור", 
        onClick: closeCompletionModal 
      })
    ])
  ]);
}

function renderMaskStepGuide(product) {
  const usage = getMaskUsage(product);
  if (!usage) return null;
  
  // שימוש באותו component כמו ההערות הרגילות
  const note = usage.compact || `${usage.how || usage.when} ${usage.wait} ${usage.finish}`;
  return el("p", { className: "step-note product-note", text: note });
}

function getProductStepNote(product) {
  // ✅ FIX: הערת רטינול ספציפית למוצר
  if (hasTag(product, "retinoid")) {
    return "! התחל 2-3 פעמים בשבוע בלילה. קרם הגנה חובה למחרת. אם יש גירוי - הפסק ל-2-3 ימים.";
  }
  
  // הערות מיוחדות למוצרים ספציפיים
  const productNotes = {
    "3": "למרוח שכבה דקה. להמתין 20-30 שניות לפני השלב הבא.",
    "7": "למרוח בתנועות עדינות. להמתין עד ספיגה מלאה לפני השלב הבא.",
    "14": "להמתין דקה עד שהנוזל נספג לפני מריחת קרם.",
    "18": "להמשיך לשלב הבא כשהחומר נספג חלקית והעור עדיין מעט לח.",
    "19": "להמתין כ-30 שניות לפני השלב הבא כדי לאפשר לחומר לחדור.",
    "22": "טיפול נקודתי ישירות על פצעון פעיל. למרוח רק על האזור הבעייתי, לא על כל הפנים.",
    "27": "למרוח רק על פצעונות פעילים. להימנע ממריחה על עור בריא.",
    "32": "למרוח רק על הפצעון עצמו, לא על כל הפנים.",
  };
  
  // אם יש הערה ספציפית למוצר - החזר אותה
  if (productNotes[product.id]) {
    return productNotes[product.id];
  }
  
  // בדיקה אם ה-reason הוא הערת שלב (ולא סיבה כללית)
  if (product.reason && isStepNote(product.reason)) {
    return product.reason;
  }
  
  return null;
}

function findReplacementProducts(productToReplace, routine, context) {
  // מוצאת מוצרים מתאימים להחלפה
  
  if (!productToReplace || !routine || !context) return [];
  
  console.log('🔄 Replace Product:', productToReplace.name);
  console.log('⏰ Routine time:', context.timeOfDay, '→', isDayRoutine(context.timeOfDay) ? 'DAY' : 'NIGHT');
  
  const routineProductIds = routine.steps.map(s => s.id);
  const otherProducts = routine.steps.filter(s => s.id !== productToReplace.id);
  
  console.log('📋 Current routine:', otherProducts.map(p => `${p.name} (${p.type})`).join(', '));
  
  // ✅ קבוצת טונרים - חלופות אחת לשנייה
  const TONER_ALTERNATIVES = ["3", "1", "19"];  // Essence Toner, COSRX, SOME BY MI
  
  // אם זה טונר מהקבוצה, להציע את הטונרים האחרים ישירות
  if (TONER_ALTERNATIVES.includes(productToReplace.id)) {
    console.log('🔄 Toner replacement - offering other toners');
    
    const tonerAlternatives = TONER_ALTERNATIVES
      .filter(id => id !== productToReplace.id)
      .map(getProduct)
      .filter(Boolean)
      .filter(p => {
        // בדיקת זמן
        if (!productMatchesTime(p, context.timeOfDay)) {
          console.log(`  ✗ ${p.name}: time mismatch`);
          return false;
        }
        
        // בבוקר: לא טונרי חומצות
        if (isDayRoutine(context.timeOfDay)) {
          const tags = new Set(tagsFor(p));
          if (tags.has("acid") || tags.has("exfoliating")) {
            console.log(`  ✗ ${p.name}: acid not allowed in day routine`);
            return false;
          }
        }
        
        // בדיקת conflict עם שאר השגרה (ללא הטונר הנוכחי!)
        const hasConflict = otherProducts.some(other => {
          const comp = checkProductCompatibility(p, other);
          if (!comp.compatible) {
            console.log(`  ✗ ${p.name}: conflict with ${other.name} - ${comp.reason}`);
            return true;
          }
          return false;
        });
        
        if (!hasConflict) {
          console.log(`  ✓ ${p.name}: valid alternative`);
        }
        
        return !hasConflict;
      });
    
    // ניקוד פשוט לפי feeling
    const scored = tonerAlternatives.map(product => ({
      product,
      score: scoreProduct(product, context)
    })).sort((a, b) => b.score - a.score);
    
    // ✅ החזר רק את ה-products, לא את האובייקטים עם score
    return scored.map(item => item.product);
  }
  
  // בדיקת actives קיימים בשגרה (ללא המוצר שמחליפים)
  const hasRetinol = otherProducts.some(p => hasTag(p, "retinoid"));
  const hasStrongAcids = otherProducts.some(p => hasTag(p, "acid") && hasTag(p, "strong"));
  const hasVitaminC = otherProducts.some(p => hasTag(p, "vitaminC"));
  const hasSpot = otherProducts.some(p => p.type === "Spot Treatment");
  
  console.log('🧪 Active check:', {
    hasRetinol,
    hasStrongAcids,
    hasVitaminC,
    hasSpot
  });
  
  // Track rejected products with reasons
  const rejected = [];
  
  // סנן מוצרים לפי סוג
  const candidates = products.filter(p => {
    // לא אותו מוצר
    if (p.id === productToReplace.id) {
      rejected.push({ product: p, reason: 'Same product' });
      return false;
    }
    
    // רק אותו סוג מוצר (או Eye Cream ↔ Eye Serum)
    const isSameType = p.type === productToReplace.type;
    const isEyeCompatible = (productToReplace.type === "Eye Cream" && p.type === "Eye Serum") ||
                            (productToReplace.type === "Eye Serum" && p.type === "Eye Cream");
    
    if (!isSameType && !isEyeCompatible) {
      rejected.push({ product: p, reason: `Wrong type: ${p.type} !== ${productToReplace.type}` });
      return false;
    }
    
    // לא מוצר שכבר בשגרה
    if (routineProductIds.includes(p.id)) {
      rejected.push({ product: p, reason: 'Already in routine' });
      return false;
    }
    
    // בדיקת התאמה לזמן
    if (!productMatchesTime(p, context.timeOfDay)) {
      rejected.push({ product: p, reason: `Time mismatch: ${p.time.join(', ')} doesn't match ${context.timeOfDay}` });
      return false;
    }
    
    const tags = new Set(tagsFor(p));
    
    // ✅ בוקר: לא רטינול, לא חומצות חזקות, לא overnight
    if (isDayRoutine(context.timeOfDay)) {
      if (tags.has("retinoid")) {
        rejected.push({ product: p, reason: 'Retinoid not allowed in day routine' });
        return false;
      }
      if (tags.has("strong") && tags.has("acid")) {
        rejected.push({ product: p, reason: 'Strong acid not allowed in day routine' });
        return false;
      }
      if (tags.has("overnight")) {
        rejected.push({ product: p, reason: 'Overnight not allowed in day routine' });
        return false;
      }
    }
    
    // ✅ עומס actives: לא להציע עוד actives חזקים
    if (tags.has("retinoid") && (hasStrongAcids || hasSpot)) {
      rejected.push({ product: p, reason: 'Retinoid would create overload (already has acids/spot)' });
      return false;
    }
    if (tags.has("acid") && tags.has("strong") && (hasRetinol || hasSpot)) {
      rejected.push({ product: p, reason: 'Acid would create overload (already has retinol/spot)' });
      return false;
    }
    
    // בדיקת תאימות עם שאר המוצרים (ללא המוצר שמחליפים)
    const isCompatible = otherProducts.every(other => {
      const compatibility = checkProductCompatibility(p, other);
      return compatibility.compatible;
    });
    
    if (!isCompatible) {
      const conflicts = otherProducts
        .map(other => {
          const comp = checkProductCompatibility(p, other);
          return comp.compatible ? null : `${other.name}: ${comp.reason}`;
        })
        .filter(Boolean);
      rejected.push({ product: p, reason: `Compatibility conflict: ${conflicts.join('; ')}` });
      return false;
    }
    
    return true;
  });
  
  console.log(`✅ Found ${candidates.length} candidates for ${productToReplace.type}`);
  if (candidates.length > 0 && candidates.length <= 5) {
    console.log('  ✓ Accepted:', candidates.map(p => p.name).join(', '));
  }
  
  // Show rejected toners specifically if replacing a toner
  if (productToReplace.type === "Toner") {
    const rejectedToners = rejected.filter(r => r.product.type === "Toner");
    if (rejectedToners.length > 0) {
      console.log(`  ✗ Rejected ${rejectedToners.length} toners:`);
      rejectedToners.forEach(r => {
        console.log(`    - ${r.product.name}: ${r.reason}`);
      });
    }
  }
  
  // ניקוד כל מוצר לפי התאמה
  const scored = candidates.map(product => {
    let score = 10; // ניקוד בסיס
    
    // בדיקת התאמה ל-feeling
    const feeling = getFeeling(context.feeling);
    const tags = product.tags || [];
    feeling.prefer.forEach(tag => {
      if (tags.includes(tag)) score += 5;
    });
    feeling.avoid.forEach(tag => {
      if (tags.includes(tag)) score -= 3;
    });
    
    // העדפה למועדפים
    if (state.favorites.includes(product.id)) score += 3;
    
    // בדיקת pace
    if (context.routinePace === 1) {  // מהיר
      if (["Eye Cream", "Mask", "Oil", "Mixer"].includes(product.type)) score -= 2;
      if (["Toner", "Serum", "Cream"].includes(product.type)) score += 2;
    }
    if (context.routinePace === 3) {  // מפנק
      if (["Eye Cream", "Mask", "Essence"].includes(product.type)) score += 3;
      if (product.type === "Oil" || product.type === "Mixer") score += 2;
    }
    
    return { product, score };
  });
  
  // מיין לפי ניקוד (כולם תואמים, רק נמיין לפי העדפה)
  scored.sort((a, b) => b.score - a.score);
  
  return scored.map(item => item.product);
}

function checkProductCompatibility(product1, product2) {
  // בודק תאימות בין שני מוצרים
  const tags1 = product1.tags || [];
  const tags2 = product2.tags || [];
  
  // רטינול + חומצות חזקות
  if (hasTag(product1, "retinoid") && hasTag(product2, "acid")) {
    return { compatible: false, reason: "רטינול וחומצות ביחד עלולים לגרות את העור" };
  }
  if (hasTag(product2, "retinoid") && hasTag(product1, "acid")) {
    return { compatible: false, reason: "רטינול וחומצות ביחד עלולים לגרות את העור" };
  }
  
  // ויטמין C + רטינול (לא ממש בעיה אבל מומלץ להפריד)
  if (hasTag(product1, "vitaminC") && hasTag(product2, "retinoid")) {
    return { compatible: true, reason: "מומלץ להשתמש בזמנים שונים" };
  }
  
  // ויטמין C + AHA/BHA
  if (hasTag(product1, "vitaminC") && hasTag(product2, "acid")) {
    return { compatible: true, reason: "שילוב עובד אבל עלול להיות מגרה" };
  }
  
  // כל השאר תואם
  return { compatible: true, reason: "" };
}

function replaceProductInRoutine(oldProduct, newProduct) {
  const currentRoutine = buildRoutine();
  
  // מצא את האינדקס של המוצר הישן
  const oldIndex = currentRoutine.steps.findIndex(s => s.id === oldProduct.id);
  if (oldIndex === -1) return null;
  
  // החלף את המוצר
  const newSteps = [...currentRoutine.steps];
  newSteps[oldIndex] = { ...newProduct, reason: oldProduct.reason };
  
  // מיין מחדש לפי routineOrderScore
  const sortedSteps = newSteps
    .filter(s => s.type !== "SPF")
    .sort((a, b) => routineOrderScore(a) - routineOrderScore(b));
  
  // הוסף SPF בסוף אם יש
  const spfStep = newSteps.find(s => s.type === "SPF");
  if (spfStep) sortedSteps.push(spfStep);
  
  // בדוק אם הסדר השתנה
  const orderChanged = sortedSteps.some((step, idx) => step.id !== currentRoutine.steps[idx]?.id);
  
  // בנה warnings מחדש
  const newWarnings = [];
  const hasRetinol = sortedSteps.some(s => hasTag(s, "retinoid"));
  const hasAcids = sortedSteps.some(s => hasTag(s, "acid"));
  const hasVitaminC = sortedSteps.some(s => hasTag(s, "vitaminC"));
  
  if (hasRetinol) {
    newWarnings.push("התחל 2-3 פעמים בשבוע בלילה. קרם הגנה חובה למחרת. אם יש גירוי - הפסק ל-2-3 ימים.");
  }
  if (hasAcids) {
    newWarnings.push("קרם הגנה חובה ביום שאחרי. אם העור מגיב - הפחת תדירות או דלג על הרטינול באותו ערב.");
  }
  if (hasRetinol && hasAcids) {
    newWarnings.push("השילוב בסדר רק אם העור שלך סובל את זה. אחרת - שלב אותם בימים שונים.");
  }
  if (hasVitaminC && isDayRoutine(state.timeOfDay)) {
    newWarnings.push("קרם הגנה חובה עם ויטמין C. עוזר להגן מנזקי סביבה ומזהום.");
  }
  
  // בנה הודעת מערכת
  let message = null;
  if (orderChanged) {
    message = "עדכנו את סדר השגרה כדי שהמוצרים יעבדו בצורה נכונה יחד.";
  } else if (newWarnings.length > currentRoutine.warnings.length) {
    message = "המוצר החדש דורש תשומת לב מיוחדת - ראי את ההערות בתחתית השגרה.";
  }
  
  return {
    steps: sortedSteps,
    warnings: newWarnings,
    orderChanged,
    message
  };
}

function isStepNote(text) {
  // הערת שלב מתחילה עם פעולה או הוראה ספציפית
  const stepNotePatterns = [
    /^למרוח/,
    /^להמתין/,
    /^טיפול נקודתי/,
    /^להשתמש/,
    /^לשים/,
    /למרוח רק/,
    /רק על/,
    /לא על כל/,
  ];
  
  return stepNotePatterns.some(pattern => pattern.test(text));
}

function renderProductStepNote(step) {
  const note = getProductStepNote(step);
  if (!note) return null;
  return el("p", { className: "step-note product-note", text: note });
}

function renderWarnings(warnings) {
  return el("div", { className: "warning-list" }, [...new Set(warnings)].map((warning) => el("div", { className: "warning", text: `${icon("warn")} ${warning}` })));
}

function renderProductsScreen(onlyFavorites) {
  const visibleProducts = getVisibleProducts(onlyFavorites);
  const hasSavedRoutines = onlyFavorites && state.savedRoutines && state.savedRoutines.length > 0;
  // הבטחת ערך תקין לטאב - תמיד "routines" או "products"
  const currentTab = (state.favoritesTab === "products") ? "products" : "routines";
  
  return el("section", { 
    className: "screen active",
    style: onlyFavorites ? "padding-top: 0.5rem;" : ""
  }, [
    onlyFavorites ? el("button", { 
      className: "back-link page-back", 
      style: "margin-bottom: 0.75rem;",
      text: `חזור`, 
      onClick: goBack 
    }) : null,
    
    el("div", { 
      className: "section-title", 
      style: onlyFavorites ? "margin-top: 0; margin-bottom: 0.5rem;" : ""
    }, [el("div", {}, [
      el("h2", { text: onlyFavorites ? "המועדפים שלי" : "ארון המוצרים" }), 
      el("p", { text: onlyFavorites ? "כל מה שסימנת בלב, מאמי." : "חפש, סנן, פתח מוצר או בנה סביבו שגרה." })
    ])]),
    
    // Tabs - רק במסך מועדפים
    onlyFavorites ? el("div", { 
      className: "favorites-tabs",
      style: "display: flex; gap: 0.5rem; margin-bottom: 1rem; background: #F6F5FA; border-radius: 12px; padding: 0.25rem;"
    }, [
      el("button", {
        className: currentTab === "routines" ? "tab-active" : "",
        style: `flex: 1; padding: 0.75rem 1rem; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; background: ${currentTab === "routines" ? "#FFFFFF" : "transparent"}; color: ${currentTab === "routines" ? "#9075D7" : "#6B7280"}; box-shadow: ${currentTab === "routines" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"};`,
        text: "שגרות טיפוח",
        onClick: () => setState({ favoritesTab: "routines" })
      }),
      el("button", {
        className: currentTab === "products" ? "tab-active" : "",
        style: `flex: 1; padding: 0.75rem 1rem; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; background: ${currentTab === "products" ? "#FFFFFF" : "transparent"}; color: ${currentTab === "products" ? "#9075D7" : "#6B7280"}; box-shadow: ${currentTab === "products" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"};`,
        text: "מוצרים",
        onClick: () => setState({ favoritesTab: "products" })
      })
    ]) : null,
    
    // תוכן טאב שגרות - רק במסך מועדפים וטאב שגרות
    (onlyFavorites && currentTab === "routines") ? el("div", { className: "tab-content" }, [
      hasSavedRoutines ? el("div", { className: "saved-routines-section" }, [
        el("div", { className: "product-grid" }, 
          state.savedRoutines.map(saved => renderSavedRoutineCard(saved))
        )
      ]) : el("div", { 
        className: "empty", 
        style: "text-align: center; padding: 3rem 1rem;",
        text: "אין שגרות שמורות כרגע. אפשר לשמור שגרות בלחיצה על ♡ במסך השגרה." 
      })
    ]) : null,
    
    // תוכן טאב מוצרים - רק במסך מועדפים וטאב מוצרים
    (onlyFavorites && currentTab === "products") ? el("div", { className: "tab-content" }, [
      renderSearchAndFilters(),
      visibleProducts.length ? el("div", { className: "product-grid" }, visibleProducts.map(renderProductCard)) : el("div", { 
        className: "empty", 
        text: "אין מוצרים מועדפים כרגע. אפשר להוסיף מוצרים בלחיצה על ♡" 
      })
    ]) : null,
    
    // מסך מוצרים רגיל (לא מועדפים)
    !onlyFavorites ? el("div", {}, [
      renderSearchAndFilters(),
      visibleProducts.length ? el("div", { className: "product-grid" }, visibleProducts.map(renderProductCard)) : el("div", { className: "empty", text: "לא מצאתי מוצרים שמתאימים לסינון הזה." })
    ]) : null
  ]);
}

function renderSavedRoutineCard(saved) {
  const routine = saved.routine;
  // שימוש בכמות שנשמרה - source of truth!
  const productCount = saved.productCount || routine.steps.filter(s => s.type !== "SPF").length;
  
  // יצירת תיאור שגרה - אותה לוגיקה כמו getRoutineIntro
  const paceLabels = {
    1: "מהירה",
    2: "מאוזנת", 
    3: "מפנקת"
  };
  const paceDesc = paceLabels[saved.context?.routinePace] || "מאוזנת";
  
  // סוג השגרה - אותו פורמט כמו במסך השגרה
  const timeOfDayLabels = {
    "morning": "בוקר",
    "בוקר": "בוקר",
    "evening": "ערב",
    "ערב": "ערב",
    "צהריים": "צהריים",
    "לילה": "לילה"
  };
  const timeOfDay = saved.context?.timeOfDay;
  const timeText = timeOfDayLabels[timeOfDay] || "טיפוח";
  
  const routineTitle = `שגרת ${timeText}`;  // ← אותו פורמט!
  
  const openSavedRoutine = () => {
    // שחזור ה-context
    if (saved.context) {
      setState({
        view: "routine",
        routineRoute: "saved",  // ← מסלול ייעודי לשגרה שמורה
        routineFlow: "direct",  // ← לא wizard flow
        timeOfDay: saved.context.timeOfDay || state.timeOfDay,
        feeling: saved.context.feeling || state.feeling,
        routineType: "balanced",  // ✅ FIX: תמיד balanced בהתחלה
        routinePace: 2,  // ✅ FIX: תמיד מאוזן (2) בהתחלה
        preferredProductId: saved.context.preferredProductId || null,
        selectedFavoriteProductId: saved.context.selectedFavoriteProductId || null,
        includeMask: saved.context.includeMask || false,
        requestedSteps: 4,  // ✅ FIX: תמיד 4 בהתחלה
        wizardStep: getRoutineStepIndex("result", "saved"),
        routineTimeLocked: true,  // ← זמן נעול
        routineNonce: Date.now(),
        loadedSavedRoutine: saved  // ✅ שמירת ה-saved object כדי להסיר אותו אחר כך!
      });
    }
  };
  
  return el("article", { className: "product-card", role: "button", tabindex: "0", onClick: openSavedRoutine, onKeydown: (event) => { if (event.key === "Enter") openSavedRoutine(); } }, [
    // כפתור לב למחיקה
    el("button", { 
      className: "favorite-button card-favorite active",
      "aria-label": "הסר שגרה",
      text: "♥",
      onClick: (event) => { 
        event.preventDefault(); 
        event.stopPropagation(); 
        event.stopImmediatePropagation();
        toggleSavedRoutine(saved, event.currentTarget);  // ✅ saved במקום routine!
      }
    }),
    // אין תמונה - ישר לתוכן
    el("div", { className: "product-card-main", style: "padding-top: 1.5rem;" }, [
      el("p", { className: "product-title", text: routineTitle }),
      el("div", { className: "product-subtitle", text: `${productCount} מוצרים · ${paceDesc}` }),
      // תצוגת מוצרים ראשונים
      el("div", { className: "tag-pills", style: "margin-top: 0.5rem;" }, 
        routine.steps.slice(0, 3).map(step => 
          el("span", { text: step.name && step.name.length > 12 ? step.name.substring(0, 12) + "..." : (step.name || "מוצר") })
        ).concat(
          routine.steps.length > 3 ? 
            [el("span", { text: `+${routine.steps.length - 3}` })] : 
            []
        )
      )
    ]),
    el("div", { className: "product-actions" }, [
      el("button", { className: "button small secondary", text: "צפייה", onClick: (event) => { event.stopPropagation(); openSavedRoutine(); } }),
    ]),
  ]);
}

function renderSearchAndFilters() {
  const typeOptions = [...new Set(products.map((product) => product.type))];
  const brandOptions = [...new Set(products.map((product) => product.brand))].sort();
  return el("div", { className: "products-toolbar" }, [
    el("label", { className: "search-box" }, [el("span", { text: icon("search") }), el("input", { type: "search", value: state.searchQuery, placeholder: "חפש מוצר, רכיב או מטרה", onInput: handleProductSearchInput })]),
    el("button", { className: "button secondary filter-toggle", text: `${icon("filter")} סינון`, onClick: () => setState({ showFilters: !state.showFilters }) }),
    state.showFilters ? el("div", { className: "filter-panel" }, [
      el("p", { className: "eyebrow", text: "מותג" }),
      el("div", { className: "chip-row" }, brandOptions.map((brand) => renderFilterChip(brand, brand, "brand"))),
      el("p", { className: "eyebrow", text: "סוג מוצר" }),
      el("div", { className: "chip-row" }, typeOptions.map((type) => renderFilterChip(type, friendlyType(type), "type"))),
      el("p", { className: "eyebrow", text: "רכיבים / מטרות" }),
      el("div", { className: "chip-row" }, filterTags.map(([tag, label]) => renderFilterChip(tag, label, "tag"))),
      el("button", { className: "button small secondary", text: "נקה סינון", onClick: () => setState({ filterTypes: [], filterTags: [], filterBrands: [], searchQuery: "" }) }),
    ]) : null,
  ]);
}

function renderFilterChip(value, label, kind) {
  const listName = kind === "type" ? "filterTypes" : kind === "brand" ? "filterBrands" : "filterTags";
  const active = state[listName].includes(value);
  return el("button", {
    className: `chip ${active ? "active" : ""}`,
    text: label,
    onClick: () => setState({ [listName]: active ? state[listName].filter((item) => item !== value) : [...state[listName], value] }),
  });
}

function getVisibleProducts(onlyFavorites) {
  const query = state.searchQuery.trim().toLowerCase();
  return products.filter((product) => {
    if (onlyFavorites && !state.favorites.includes(product.id)) return false;
    if (state.filterTypes.length && !state.filterTypes.includes(product.type)) return false;
    if (state.filterTags.length && !state.filterTags.every((tag) => tagsFor(product).includes(tag))) return false;
    if (state.filterBrands.length && !state.filterBrands.includes(product.brand)) return false;
    if (!query) return true;
    const haystack = [product.brand, product.name, product.type, ...product.ingredients, ...product.goodFor, ...tagsFor(product)].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function renderProductCard(product, options = {}) {
  const isFavorite = state.favorites.includes(product.id);
  const isFavoritePulsing = state.favoritePulseId === product.id;
  const { hideBorder = false, benefitText = null, hideFavorite = false, largerImage = false, compactSpacing = false } = options;
  
  // סגנון מותאם אם צריך להסיר border
  let cardStyle = hideBorder ? "border: none; box-shadow: none; background: transparent;" : "";
  
  // ✅ Override spacing ל-recommendations section
  if (compactSpacing) {
    cardStyle += " padding: 0.5rem 0 0 0; min-height: unset; gap: 0.75rem;";
  }
  
  return el("article", { 
    className: "product-card", 
    style: cardStyle,
    role: "button", 
    tabindex: "0", 
    onClick: () => openProduct(product.id), 
    onKeydown: (event) => { if (event.key === "Enter") openProduct(product.id); } 
  }, [
    // ✅ Only show favorite button if not hidden
    hideFavorite ? null : el("button", { className: `favorite-button card-favorite ${isFavorite ? "active" : ""} ${isFavoritePulsing ? "pulse" : ""}`, "aria-label": "מועדפים", "aria-pressed": String(isFavorite), text: isFavorite ? "♥" : "♡", onClick: (event) => { event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); toggleFavorite(product.id, event.currentTarget); } }),
    renderProductImage(product, largerImage ? "product-thumb product-thumb-large" : "product-thumb"),
    el("div", { className: "product-card-main" }, [
      el("p", { className: "product-title", text: product.name }),
      el("div", { className: "product-subtitle", text: `${product.brand} · ${friendlyType(product.type)}` }),
      renderTagPills(product),
      benefitText ? el("p", { 
        style: "font-size: 0.85rem; color: #6B7280; margin-top: 0.5rem; line-height: 1.4;", 
        text: benefitText 
      }) : null,
    ]),
    el("div", { className: "product-actions" }, [
      el("button", { className: "button small secondary", text: "צפייה", onClick: (event) => { event.stopPropagation(); openProduct(product.id); } }),
      el("button", { className: "button small", text: "בנה שגרה", onClick: (event) => { event.stopPropagation(); startRoutine({ product, route: "product" }); } }),
    ]),
  ]);
}

function renderTagPills(product) {
  return el("div", { className: "tag-pills" }, highlightedTags(product).map((tag) => el("span", { text: tag })));
}

function openProduct(id) {
  state.selectedProductId = id;
  navigate("product");
}

function getCompatibleIngredients(product) {
  // רכיבים שמשתלבים טוב לפי תגיות המוצר
  const tags = tagsFor(product);
  const compatible = [];
  
  if (tags.includes("hydration") || tags.includes("barrier")) {
    compatible.push("חומצה היאלורונית", "סרמידים", "ניאצינמיד");
  }
  if (tags.includes("retinoid")) {
    compatible.push("חומצה היאלורונית", "סרמידים", "פפטידים");
  }
  if (tags.includes("acid")) {
    compatible.push("חומצה היאלורונית", "ניאצינמיד");
  }
  if (tags.includes("vitaminC") || tags.includes("brightening")) {
    compatible.push("חומצה היאלורונית", "ניאצינמיד", "ויטמין E");
  }
  if (tags.includes("sensitive") || tags.includes("soothing")) {
    compatible.push("אלוורה", "סנטלה", "חמאת שיאה");
    // מוצרי barrier/soothing משתלבים טוב עם רטינול וחומצות
    if (tags.includes("barrier")) {
      compatible.push("רטינול", "חומצות (AHA/BHA)");
    }
  }
  if (tags.includes("antiaging") || tags.includes("peptides")) {
    compatible.push("פפטידים", "קולגן", "רטינול");
  }
  if (tags.includes("acne") || tags.includes("spot")) {
    compatible.push("ניאצינמיד", "חומצה סליצילית", "חומצה אזלאית");
  }
  
  // אם אין התאמות ספציפיות, רכיבים בסיסיים
  if (compatible.length === 0) {
    return ["חומצה היאלורונית", "ניאצינמיד", "סרמידים"];
  }
  
  // החזרת רכיבים ייחודיים
  return [...new Set(compatible)].slice(0, 4);
}

function renderProductPage() {
  const product = getProduct(state.selectedProductId) || products[0];
  const isFavorite = state.favorites.includes(product.id);
  const isFavoritePulsing = state.favoritePulseId === product.id;
  
  // ✅ סדר נכון: Similar → Complementary → Conflicts
  const similar = similarProducts(product);
  const complementary = worksWellTogether(product);
  const conflicts = avoidCombining(product);
  
  return el("section", { className: "screen active product-page" }, [
    el("button", { className: "back-link page-back", text: `חזור`, onClick: goBack }),
    el("div", { className: "card product-hero" }, [
      el("div", { className: "card-inner" }, [
        el("button", { 
          className: `favorite-button product-page-favorite ${isFavorite ? "active" : ""} ${isFavoritePulsing ? "pulse" : ""}`, 
          style: "margin-right: 8px;",
          "aria-label": "מועדפים", 
          "aria-pressed": String(isFavorite), 
          text: isFavorite ? "♥" : "♡", 
          onClick: (event) => { event.preventDefault(); event.stopPropagation(); toggleFavorite(product.id, event.currentTarget); } 
        }),
        renderProductImage(product, "product-hero-image"),
        el("p", { className: "eyebrow", text: `${product.brand} · ${friendlyType(product.type)}` }),
        el("h2", { text: product.name }),
        renderTagPills(product),
        el("p", { style: "margin-bottom: 1.25rem;", text: product.simpleDesc }),
        el("button", { className: "button primary-hero full-width", text: "בנה שגרה עם המוצר הזה", onClick: () => startRoutine({ product, route: "product" }) }),
      ]),
    ]),
    renderInfoBlock("מכיל", product.ingredients),
    renderInfoBlock("טוב ל", product.goodFor),
    renderMaskUsageCard(product),
    renderInfoBlock("משתלב טוב עם", getCompatibleIngredients(product)),
    product.warnings.length ? renderWarnings(product.warnings) : null,
    
    // ✅ סדר נכון של קרוסלות:
    // 1️⃣ Similar Products - תחליפים (אותו Type בלבד)
    similar.length ? renderProductCarousel("מוצרים דומים", similar, "similar") : null,
    
    // 2️⃣ Works Well Together - משלימים (types שונים)
    complementary.length ? renderProductCarousel("מוצרים משלימים", complementary, "good") : null,
    
    // 3️⃣ Avoid Combining - רק conflicts חזקים (אם יש)
    conflicts.length ? renderProductCarousel("לא מומלץ לשלב", conflicts, "bad") : null,
  ]);
}

function renderInfoBlock(title, items) {
  return el("div", { className: "card info-block" }, [el("div", { className: "card-inner" }, [el("h3", { text: title }), el("ul", { className: "mini-list" }, items.map((item) => el("li", { text: item })))])]);
}

function renderMaskUsageCard(product) {
  const usage = getMaskUsage(product);
  if (!usage) return null;
  return el("div", { className: "card info-block usage-card" }, [
    el("div", { className: "card-inner" }, [
      el("h3", { text: "איך לשים את המסיכה" }),
      el("p", { text: usage.when }),
      el("ol", { className: "usage-steps" }, usage.order.map((step) => el("li", { text: step }))),
      el("div", { className: "usage-note", text: usage.wait }),
      el("div", { className: "usage-note", text: usage.finish }),
      el("div", { className: "usage-tip", text: usage.tip }),
    ]),
  ]);
}

function renderProductCarousel(title, items, tone = "good") {
  if (!items.length) return null;
  
  // קביעת סגנון לפי סוג הקרוסלה
  let borderStyle = "";
  let className = `mini-carousel ${tone}`;
  
  // ✅ רק conflicts מקבלים border אדום
  if (tone === "bad") {
    borderStyle = "border: 2px solid #FF6060;";
  }
  // ✅ הסרנו את הבורדר הכחול - מוצרים דומים ללא מסגרת
  
  return el("section", { className: "carousel-section" }, [
    el("div", { className: "section-title" }, [el("h2", { text: title })]),
    el("div", { 
      className: className,
      style: "scrollbar-width: none; -ms-overflow-style: none;"
    }, items.map((product) =>
      el("button", { 
        className: `mini-product-card ${tone}`, 
        style: borderStyle,
        onClick: () => openProduct(product.id) 
      }, [
        renderProductImage(product, "mini-product-image"),
        el("strong", { text: product.name }),
        el("span", { text: friendlyType(product.type) }),
      ]),
    )),
  ]);
}

function renderNav() {
  const nav = [
    { id: "products", label: "מוצרים", icon: icon("products") },
    { id: "routine", label: "בנה שגרה", icon: icon("routine"), center: true },
    { id: "home", label: "בית", icon: icon("home") },
  ];
  return el("nav", { className: "bottom-nav", "aria-label": "ניווט ראשי" }, nav.map((item) =>
    el("button", { className: `nav-button ${item.center ? "center" : ""} ${state.view === item.id ? "active" : ""}`, onClick: () => item.id === "routine" ? startRoutine({ timeOfDay: getCurrentRoutineTimeOfDay(), route: "regular", flow: "wizard" }) : navigate(item.id) }, [
      el("span", { className: "nav-icon", text: item.icon }),
      el("span", { text: item.label }),
    ]),
  ));
}

function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  return hash;
}

function updateClock() {
  state.clock = new Date().toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });
  const currentTimeOfDay = getCurrentRoutineTimeOfDay();
  if (state.view === "home" && state.timeOfDay !== currentTimeOfDay) {
    state.timeOfDay = currentTimeOfDay;
    render();
    return;
  }
  const clockNode = document.querySelector(".top-time");
  if (clockNode) clockNode.textContent = state.clock;
}

async function loadWeather() {
  if (!("geolocation" in navigator)) return;
  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      const { latitude, longitude } = position.coords;
      const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
      endpoint.search = new URLSearchParams({ latitude: String(latitude), longitude: String(longitude), current: "temperature_2m,weather_code", daily: "uv_index_max", timezone: "auto" });
      const response = await fetch(endpoint);
      const data = await response.json();
      state.weather = {
        temp: data.current?.temperature_2m ?? state.weather.temp,
        location: "לפי המיקום שלך",
        uv: data.daily?.uv_index_max?.[0] ?? state.weather.uv,
        uvTomorrow: data.daily?.uv_index_max?.[1] ?? data.daily?.uv_index_max?.[0] ?? state.weather.uvTomorrow,
        description: describeWeatherCode(data.current?.weather_code),
      };
      render();
    } catch {
      render();
    }
  }, () => render(), { timeout: 4000, maximumAge: 900000 });
}

function describeWeatherCode(code) {
  const map = { 0: "בהיר", 1: "מעט עננים", 2: "מעונן חלקית", 3: "מעונן", 45: "ערפילי", 61: "גשם קל", 63: "גשם", 80: "ממטרים" };
  return map[code] || "נעים בחוץ";
}

// הזרקת CSS גלובלי להסתרת scrollbars מקרוסלות
(function injectCarouselStyles() {
  if (document.getElementById('carousel-styles')) return; // כבר קיים
  
  const style = document.createElement('style');
  style.id = 'carousel-styles';
  style.textContent = `
    /* הסתרת scrollbars מקרוסלות אופקיות */
    .feeling-carousel::-webkit-scrollbar,
    .mini-carousel::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    
    /* ✅ אנימציית לב לכפתור שמור שגרה */
    @keyframes heartBounce {
      0% { transform: scale(1); }
      25% { transform: scale(1.3); }
      50% { transform: scale(0.9); }
      75% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .save-routine-heart.heart-bounce {
      animation: heartBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `;
  document.head.appendChild(style);
})();

render();
updateClock();
setTimeout(() => {
  state.showSplash = false;
  render();
  loadWeather();
}, 5000);
setInterval(updateClock, 30000);
