export type Customer = {
  slug: string;
  brand: string;
  /** category pill text, e.g. "Beauty & Cosmetics", "Supplements" */
  category: string;
  /** "How X did Y" card headline */
  headline: string;
  /** outline stat chips shown on the card */
  tags: string[];
  /** card image (local, cropped) */
  image: string;
  /** external case-study page this card links to */
  href: string;
  /** brand-initial fallback color for the avatar */
  accent?: string;
};

/** Case studies — "Brands Winning with Reacher Plus". Cards link to the standalone case-study sites. */
export const customers: Customer[] = [
  {
    slug: "colourpop",
    brand: "ColourPop",
    category: "Beauty & Cosmetics",
    headline: "How ColourPop lifted sample requests 6.5x in 30 days",
    tags: ["163× Creators Reached", "6.5× Sample Requests", "5× Sample Approvals"],
    image: "/reacher-assets/customers/colourpop.png",
    href: "https://reacher-colourpop-external.vercel.app",
    accent: "#c77dff",
  },
  {
    slug: "watch-and-sea",
    brand: "Watch and Sea Beauty",
    category: "Beauty",
    headline: "How Watch & Sea lifted affiliate GMV 692% from zero",
    tags: ["692% GMV Lift", "189% Videos Posted", "Built From Zero"],
    image: "/reacher-assets/customers/watch-and-sea.png",
    href: "https://reacher-watch-and-sea-external.vercel.app",
    accent: "#4cc9f0",
  },
  {
    slug: "free-soul",
    brand: "Free Soul",
    category: "Beauty",
    headline: "How Free Soul reached 463K creators in under 3 months with Reacher Plus",
    tags: ["5× Sample Approvals", "6.5× Sample Requests", "L3+ Activation"],
    image: "/reacher-assets/customers/free-soul.png",
    href: "https://reacher-freesoul-external.vercel.app",
    accent: "#f4a3c1",
  },
  {
    slug: "earth-elixir",
    brand: "Earth Elixir",
    category: "Supplements",
    headline: "How Earth Elixir ditched volume-first sampling and rebuilt for profit",
    tags: ["Volume to Strategy", "ROI-First Approach", "Competitor Targeting"],
    image: "/reacher-assets/customers/earth-elixir.png",
    href: "https://reacher-earth-elixir-internal.vercel.app",
    accent: "#d4a017",
  },
  {
    slug: "clean-nutra",
    brand: "Clean Nutra",
    category: "Supplements",
    headline: "How Clean Nutra doubled sample requests in one week",
    tags: ["2× Sample Requests", "Fully Automated Flows", "BOGO Outreach"],
    image: "/reacher-assets/customers/clean-nutra.png",
    href: "https://reacher-clean-nutra-internal.vercel.app",
    accent: "#2a9d8f",
  },
  {
    slug: "infuse",
    brand: "Infuse",
    category: "Beauty · In partnership with The Darl…",
    headline: "How Infuse launched a creator program from a cold start in two months",
    tags: ["12× Active Creators", "10× Videos Posted", "Built From Cold Start"],
    image: "/reacher-assets/customers/infuse.png",
    href: "https://reacher-darl-internal.vercel.app",
    accent: "#9c6644",
  },
  {
    slug: "momofuku",
    brand: "Momofuku Goods",
    category: "Food & Pantry",
    headline: "How Momofuku runs a creator program built around earned media, not just GMV",
    tags: ["2.4× Sample Requests", "2× Videos Posted", "EMV-First Strategy"],
    image: "/reacher-assets/customers/momofuku.png",
    href: "https://reacher-momofuku-internal.vercel.app",
    accent: "#e9b949",
  },
];
