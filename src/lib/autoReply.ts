// Shared chat auto-reply logic — used by both FloatingChat and ChatPage
// to guarantee identical responses across mobile, tablet, and desktop.

const PRIMARY_LOCATIONS = [
  "mumbai", "thane", "dombivli", "ambernath", "santacruz", "vashi", "navi mumbai",
];

// Nearby-area map → primary service hub. AI responds positively for these
// and mentions proximity to the nearest covered location.
const NEARBY_MAP: Record<string, string> = {
  // Thane belt
  mulund: "Thane",
  bhandup: "Thane",
  kalwa: "Thane",
  ghodbunder: "Thane",
  majiwada: "Thane",
  kalyan: "Dombivli",
  badlapur: "Ambernath",
  ulhasnagar: "Ambernath",
  // Mumbai belt
  bandra: "Santacruz",
  khar: "Santacruz",
  juhu: "Santacruz",
  andheri: "Santacruz",
  vileparle: "Santacruz",
  "vile parle": "Santacruz",
  powai: "Mumbai",
  chembur: "Mumbai",
  kurla: "Mumbai",
  worli: "Mumbai",
  dadar: "Mumbai",
  // Navi Mumbai belt
  nerul: "Vashi",
  belapur: "Vashi",
  kharghar: "Navi Mumbai",
  panvel: "Navi Mumbai",
  airoli: "Navi Mumbai",
  ghansoli: "Navi Mumbai",
  kopar: "Dombivli",
  diva: "Dombivli",
};

const titleCase = (s: string) =>
  s.replace(/\b\w/g, (c) => c.toUpperCase());

export const autoReply = (input: string): string => {
  const t = input.toLowerCase();

  // 1) Location intent
  if (/(serve|service|available|provide|cover|work in|operate|come to|visit|located|location|area|where|do you|near)/.test(t)) {
    // Primary location match
    const primary = PRIMARY_LOCATIONS.find((loc) => t.includes(loc));
    if (primary) {
      return `Yes — absolutely! We actively deliver projects across ${titleCase(primary)} and offer end-to-end interior design, 3D visualization, and on-site execution there. With strong vendor and contractor networks in the region, you can expect timely site visits, transparent updates, and refined craftsmanship throughout your project.`;
    }
    // Nearby-area match
    const nearby = Object.keys(NEARBY_MAP).find((loc) => t.includes(loc));
    if (nearby) {
      const hub = NEARBY_MAP[nearby];
      return `Yes — we serve ${titleCase(nearby)} as well! It's right next to ${hub}, one of our primary service areas, so our team can easily handle site visits, contractor coordination, and on-ground execution there. You'll receive the same standard of detail and quality our ${hub} clients enjoy.`;
    }
    // Generic city question — list service area
    if (/\b(in|at|to|near)\s+[a-z]/.test(t)) {
      return `We currently provide on-site services across Mumbai, Thane, Dombivli, Ambernath, Santacruz, Vashi, and Navi Mumbai (plus nearby areas like Mulund, Bhandup, Kharghar, Bandra, Andheri and more). For locations outside this region, we offer remote 3D visualization and complete design consultation packages worldwide — same quality, no travel.`;
    }
    return "Site execution: Mumbai, Thane, Dombivli, Ambernath, Santacruz, Vashi & Navi Mumbai — plus nearby areas like Mulund, Bhandup, Kharghar, Bandra and Andheri. Design & 3D visualization: globally, fully remote.";
  }

  if (/(price|cost|charge|fee|budget|rate)/.test(t)) {
    return "Our projects are scoped to your space and vision. Interior design starts from ₹150/sqft, and 3D visualization from ₹3,000 per render. Share your floor plan via the contact page for an exact quote!";
  }
  if (/(3d|render|visual)/.test(t)) {
    return "We create photorealistic 3D renders for clients worldwide — just send a floor plan and your preferences. Typical delivery: 5–10 days with unlimited revisions until you love it.";
  }
  if (/(book|consult|appoint|schedule|meet)/.test(t)) {
    return "Wonderful! Head to the Contact page to pick a date and time on the live calendar (Mon–Sat, 10am–7pm). We'll confirm via WhatsApp.";
  }
  if (/(time|how long|duration|deliver)/.test(t)) {
    return "A full residential project usually takes 45–90 days end-to-end. 3D visualization alone: 5–10 days.";
  }
  if (/(service|offer|what)/.test(t)) {
    return "Three core services: (1) Interior Design, (2) 3D Visualization, (3) Site Execution. Tap 'Services' in the menu to explore.";
  }
  if (/(hi|hello|hey|namaste)/.test(t)) {
    return "Hi there! Ask me about services, pricing, locations we serve, or how to book a consultation.";
  }
  return "Thanks for your message! For a detailed answer, please book a free consultation via the Contact page or WhatsApp us at +91 99879 67465.";
};
