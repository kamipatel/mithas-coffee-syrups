/* ════════════════════════════════════════════
   MITHAS COFFEE SYRUPS — Constants & Data
   Single source of truth for all product/color data
   ════════════════════════════════════════════ */

export const COLORS = {
  cream: "#F6F1E9",
  parchment: "#EDE7DB",
  linen: "#E8E0D0",
  espresso: "#2A1810",
  brown: "#3D2518",
  walnut: "#5C3A28",
  caramel: "#9B7340",
  gold: "#C4973B",
  brightGold: "#D4A843",
  roseGold: "#C9A87C",
  rose: "#C4727F",
  fig: "#7B4B3A",
  date: "#8B6914",
  carrot: "#D4802A",
  white: "#FFFDF9",
};

export const syrups = [
  {
    id: "gulab",
    name: "Gulabi Aankein",
    subtitle: "Gulab Jamun Syrup",
    price: 1500,
    displayPrice: 15,
    color: "#C4727F",
    gradient: "from-[#F5E0E4] via-[#EECDD4] to-[#E8B8C2]",
    bg: "linear-gradient(145deg, #F5E0E4 0%, #EECDD4 50%, #E8B8C2 100%)",
    description:
      "Rose-scented sweetness inspired by the beloved gulab jamun. Transforms your latte into a floral, nostalgic dream.",
    recipe: "Add 1\u20132 tbsp to steamed milk. Top with dried rose petals.",
    tag: "Bestseller",
    icon: "flower2",
  },
  {
    id: "anjeer",
    name: "Anjeer Halwa",
    subtitle: "Fig & Walnut Syrup",
    price: 1500,
    displayPrice: 15,
    color: "#7B4B3A",
    gradient: "from-[#F0E4D8] via-[#E5D5C4] to-[#D9C7B2]",
    bg: "linear-gradient(145deg, #F0E4D8 0%, #E5D5C4 50%, #D9C7B2 100%)",
    description:
      "Rich fig and walnut flavors drawn from the classic anjeer halwa. Earthy, nutty, and deeply comforting.",
    recipe: "Stir into cold brew or espresso. Pairs beautifully with oat milk.",
    tag: "Rich & Nutty",
    icon: "leaf",
  },
  {
    id: "date",
    name: "Salted Date",
    subtitle: "Salted Date Syrup",
    price: 1500,
    displayPrice: 15,
    color: "#8B6914",
    gradient: "from-[#F2EADB] via-[#E8DCC6] to-[#DDD0B6]",
    bg: "linear-gradient(145deg, #F2EADB 0%, #E8DCC6 50%, #DDD0B6 100%)",
    description:
      "Caramel-like sweetness of dates with a hint of salt. The perfect balance for your morning coffee ritual.",
    recipe: "Perfect in a hot latte or iced matcha. A Ramadan essential.",
    tag: "Ramadan Special",
    icon: "tree-palm",
  },
  {
    id: "chikki",
    name: "Peanut Chikki",
    subtitle: "Roasted Peanuts & Jaggery",
    price: 1500,
    displayPrice: 15,
    color: "#9B7340",
    gradient: "from-[#F4EDE0] via-[#EBE0CE] to-[#E0D3BD]",
    bg: "linear-gradient(145deg, #F4EDE0 0%, #EBE0CE 50%, #E0D3BD 100%)",
    description:
      "Crunchy peanut chikki reimagined as a syrup. Jaggery sweetness meets roasted nuttiness in every sip.",
    recipe: "Drizzle into a banana smoothie or warm chai latte.",
    tag: "Crunchy Vibes",
    icon: "cookie",
  },
  {
    id: "gajar",
    name: "Gajar-e-Ishq",
    subtitle: "Gajar ka Halwa Syrup",
    price: 1500,
    displayPrice: 15,
    color: "#D4802A",
    gradient: "from-[#FFF0DB] via-[#F5E2C4] to-[#EBD4AE]",
    bg: "linear-gradient(145deg, #FFF0DB 0%, #F5E2C4 50%, #EBD4AE 100%)",
    description:
      "Winter\u2019s favorite dessert in a bottle. Warm carrot halwa spices that make any drink feel like a hug.",
    recipe:
      "Incredible in matcha. Add a pinch of cardamom for the full experience.",
    tag: "Winter Favorite",
    icon: "flame",
  },
];

export const samplerPack = {
  id: "sampler",
  name: "Mithai ka Dabba",
  subtitle: "Sampler Pack",
  price: 1200,
  displayPrice: 12,
  description:
    "Can\u2019t pick just one? Three mini bottles in a beautiful gift box \u2014 perfect for gifting or discovering your new favorite.",
  tag: "Best Value",
  icon: "gift",
};

export const allProducts = [...syrups, samplerPack];

export const testimonials = [
  {
    text: "I put the Gulab Jamun syrup in my matcha and I literally can\u2019t go back to regular lattes.",
    name: "Priya S.",
    detail: "UT Austin \u201926",
  },
  {
    text: "Bought the sampler pack as a gift and ended up keeping it for myself. The Salted Date is unreal.",
    name: "Amir K.",
    detail: "Ramadan 2026",
  },
  {
    text: "Finally, coffee syrups that actually taste like the real thing. Not just \u2018inspired by\u2019 \u2014 these ARE the flavors.",
    name: "Neha R.",
    detail: "Pop-Up Caf\u00e9 regular",
  },
];

export const recipes = [
  {
    title: "The Classic Latte",
    steps:
      "Steam your milk. Pull a shot. Add 1\u20132 tbsp of any Mithas syrup. Stir gently. Garnish with a sprinkle of cardamom or rose petals.",
    time: "3 min",
    icon: "coffee",
    color: "#7B4B3A",
  },
  {
    title: "Iced Matcha Mithas",
    steps:
      "Whisk matcha with a splash of hot water. Add syrup (Gajar-e-Ishq is incredible). Pour over ice and oat milk. Watch the magic.",
    time: "2 min",
    icon: "glass-water",
    color: "#5B8C5A",
  },
  {
    title: "The Gift Box Moment",
    steps:
      "Order the Mithai ka Dabba. Pair with a bag of someone\u2019s favorite coffee beans. Wrap it up. The most thoughtful desi gift under $20.",
    time: "Perfect gift",
    icon: "gift",
    color: "#C4973B",
  },
];

export const navLinks = [
  { label: "Story", id: "story" },
  { label: "Syrups", id: "syrups" },
  { label: "Recipes", id: "recipes" },
  { label: "Order", id: "order" },
];

export const navIds = ["story", "syrups", "recipes", "order", "popups"];

export const popupFeatures = [
  {
    icon: "coffee",
    title: "Specialty Lattes",
    desc: "Handcrafted drinks made with Mithas syrups \u2014 flavors you can\u2019t get anywhere else.",
  },
  {
    icon: "shopping-bag",
    title: "Shop Bottles",
    desc: "Full-size bottles and sampler packs available at every pop-up event.",
  },
  {
    icon: "gift",
    title: "Exclusive Drops",
    desc: "Limited seasonal flavors and collaborations only available at our events.",
  },
  {
    icon: "users",
    title: "Community",
    desc: "Meet the maker. Taste test. Connect with Austin\u2019s desi food community.",
  },
];

export const INSTAGRAM_URL =
  "https://www.instagram.com/mithas.coffeesyrups/";

