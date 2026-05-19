// Product Categories - Source of Truth

const PRODUCT_CATEGORIES = {
  retinoids: {
    products: ["7", "11", "12"],
    chemistry: "vitamin_a_derivatives",
    activeLevel: "high",
    requiresSPF: true,
    frequencyLimit: "2-3x_week",
    avoidWith: ["retinoids", "acids", "vitaminC"],
    timeOfUse: ["night"],
    buildUpRequired: true
  },
  
  vitaminC: {
    products: ["15"],
    chemistry: "l_ascorbic_acid",
    activeLevel: "medium",
    requiresSPF: true,
    avoidWith: ["retinoids", "acids"],
    timeOfUse: ["morning", "evening"],
    oxidationSensitive: true
  },
  
  acids_strong: {
    products: ["1", "19", "27", "32"],
    chemistry: "aha_bha_pha",
    activeLevel: "high",
    requiresSPF: true,
    avoidWith: ["retinoids", "acids", "vitaminC"],
    timeOfUse: ["evening", "night"],
    exfoliating: true
  },
  
  acids_gentle: {
    products: ["20", "21", "22"],
    chemistry: "aha_bha_pha_mild",
    activeLevel: "medium",
    requiresSPF: true,
    avoidWith: ["retinoids", "acids"],
    timeOfUse: ["evening", "night"]
  },
  
  hydration: {
    products: ["2", "3", "18", "24"],
    chemistry: "humectants",
    activeLevel: "none",
    compatibleWithEverything: true,
    timeOfUse: ["morning", "evening", "night"]
  },
  
  barrier: {
    products: ["13", "14", "16", "30", "31"],
    chemistry: "ceramides_lipids",
    activeLevel: "none",
    supportsActives: true,
    timeOfUse: ["morning", "evening", "night"]
  },
  
  antiaging_gentle: {
    products: ["4", "6", "10"],
    chemistry: "peptides_collagen",
    activeLevel: "low",
    timeOfUse: ["morning", "evening", "night"]
  },
  
  eye: {
    products: ["5", "8"],
    chemistry: "eye_specific",
    activeLevel: "low",
    sensitiveArea: true,
    timeOfUse: ["morning", "evening", "night"]
  },
  
  brightening: {
    products: ["9", "25"],
    chemistry: "niacinamide_brighteners",
    activeLevel: "medium",
    compatibleWithMost: true,
    timeOfUse: ["morning", "evening"]
  },
  
  oil: {
    products: ["17"],
    chemistry: "oils",
    activeLevel: "none",
    occlusiveLayer: true,
    timeOfUse: ["evening", "night"]
  },
  
  masks_washoff: {
    products: ["28", "29"],
    chemistry: "clay_based",
    activeLevel: "medium",
    requiresRinse: true,
    rinseAfterMinutes: 10,
    timeOfUse: ["evening"]
  },
  
  masks_overnight: {
    products: ["23"],
    chemistry: "hydrogel_hydration",
    activeLevel: "low",
    leavesOnSkin: true,
    replaceMoisturizer: true,
    timeOfUse: ["night"]
  }
};

// Product to Category Map
const PRODUCT_TO_CATEGORY = {};
Object.entries(PRODUCT_CATEGORIES).forEach(([category, data]) => {
  data.products.forEach(productId => {
    PRODUCT_TO_CATEGORY[productId] = category;
  });
});

module.exports = { PRODUCT_CATEGORIES, PRODUCT_TO_CATEGORY };
