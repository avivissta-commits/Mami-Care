# mami care - הוראות התקנה

## קבצים בפרויקט

```
mami-care/
├── index.html          # דף HTML ראשי
├── app.js             # קובץ JavaScript מעודכן עם התיקונים
├── styles.css         # עיצוב
├── server.mjs         # שרת Node.js לפיתוח
├── CHANGES.md         # תיעוד השינויים
└── README_INSTALL.md  # הקובץ הזה
```

## התקנה והרצה

### 1. הכנת הקבצים

העתק את כל הקבצים לתיקיית הפרויקט שלך:
```bash
mkdir mami-care
cd mami-care
# העתק את index.html, app.js, styles.css, server.mjs לתיקייה
```

### 2. הוספת תמונות ואסטים

צור תיקיית assets:
```bash
mkdir -p assets/brand
mkdir -p assets/products
mkdir -p assets/characters
```

העתק את כל התמונות שלך:
- **assets/brand/** - לוגו, couple-care.png, routine-loading-heart.gif
- **assets/products/** - product-01.png עד product-32.png
- **assets/characters/** - character-morning.png, character-evening.png, וכו'

### 3. הרצת השרת

התקן Node.js אם אין לך (מ-nodejs.org)

הרץ את השרת:
```bash
node server.mjs
```

פתח בדפדפן:
```
http://127.0.0.1:4173
```

## מבנה תיקיות מלא

```
mami-care/
├── index.html
├── app.js
├── styles.css
├── server.mjs
├── assets/
│   ├── brand/
│   │   ├── mami-care.png
│   │   ├── couple-care.png
│   │   └── routine-loading-heart.gif
│   ├── products/
│   │   ├── product-01.png
│   │   ├── product-02.png
│   │   ├── ...
│   │   └── product-32.png
│   └── characters/
│       ├── character-morning.png
│       ├── character-noon.png
│       ├── character-evening.png
│       └── character-night.png
├── CHANGES.md
└── README_INSTALL.md
```

## שימוש באפליקציה

### מסך הבית:
1. **כפתור ראשי** - לשגרה מהירה לפי זמן היום (עם סליידרים!)
2. **"איך העור מרגיש"** - לשגרה לפי מצב עור (עם סליידרים!)
3. **"בנה שגרה"** - דרך השאלון המלא

### סליידרים בשגרה:
- **כמות מוצרים**: 2 למינימליסטית, 5+ למלאה
- **קליל ← עשיר**: קלילה/מאוזנת/עשירה

## Deployment לפרודקשן

### אפשרות 1: Vercel
```bash
npm install -g vercel
vercel
```

### אפשרות 2: Netlify
1. גרור את התיקייה ל-Netlify Drop
2. או התחבר עם Git

### אפשרות 3: GitHub Pages
1. העלה לריפו ב-GitHub
2. הפעל GitHub Pages ב-Settings

## שאלות נפוצות

**ש: האפליקציה לא טוענת תמונות?**
ת: וודא שמבנה התיקיות נכון וש-assets/ נמצא באותה תיקייה כמו index.html

**ש: הסליידרים לא מופיעים?**
ת: וודא שהשתמשת ב-app.js המעודכן (עם התיקונים)

**ש: איך אני מוסיף מוצרים?**
ת: ערוך את מערך `products` ב-app.js ב-line ~1

---

אם יש בעיות או שאלות - פנה למפתח! 💜
