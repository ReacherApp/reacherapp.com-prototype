export type ResultMetric = { value: string; label: string };
export type Solution = { label: string; title: string; body: string };
export type StoryNumber = { label: string; before: string; after: string };

export type CustomerStory = {
  /** subheadline under the title */
  summary: string;
  /** e.g. "Joined Reacher February 2026" */
  joined: string;
  /** company description */
  about: string;
  /** "Results at a glance" cards */
  results: ResultMetric[];
  challenge: { title: string; points: string[] };
  solutions: Solution[];
  numbers?: StoryNumber[];
  externalHref?: string;
};

export type Customer = {
  slug: string;
  brand: string;
  /** category pill text */
  category: string;
  /** filter-tab group */
  group: "Beauty" | "Supplements" | "Health & Wellness" | "Food & Pantry";
  /** card headline */
  headline: string;
  /** outline stat chips on the card */
  tags: string[];
  /** card image (local, cropped) */
  image: string;
  accent?: string;
  story: CustomerStory;
};

export const customers: Customer[] = [
  {
    slug: "colourpop",
    brand: "ColourPop",
    category: "Beauty & Cosmetics",
    group: "Beauty",
    headline: "How ColourPop scaled sample approvals 5× in 30 days",
    tags: ["163× Creators Reached", "6.5× Sample Requests", "5× Sample Approvals"],
    image: "/reacher-assets/customers/colourpop.png",
    accent: "#c77dff",
    story: {
      summary: "How ColourPop unblocked a stuck creator pipeline and scaled sample approvals 5× in 30 days.",
      joined: "Joined Reacher February 2026",
      about:
        "ColourPop is a direct-to-consumer color cosmetics brand for eye, lip, and shadow, led by Shadow Stix on TikTok Shop.",
      results: [
        { value: "163×", label: "Creators reached" },
        { value: "6.5×", label: "Sample requests" },
        { value: "5×", label: "Sample approvals" },
      ],
      challenge: {
        title: "The creator pipeline was stuck.",
        points: ["Throughput below target", "No real-time visibility", "Tier activation lag"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Hero product targeting",
          body: "Pointed consistent outreach at hero product IDs like Shadow Stix, then expanded into L3-plus creators.",
        },
        {
          label: "Solution 02",
          title: "Real-time transparency",
          body: "Outreach, sample requests, and approvals land in Reacher as they happen — a live view of the whole funnel.",
        },
        {
          label: "Solution 03",
          title: "Custom campaign",
          body: "A custom calendar, messaging strategy, and video incentives ran against weekly video goals — 50, then 120, 310, and 500+ videos across four weeks.",
        },
        {
          label: "Solution 04",
          title: "Reporting and pivots",
          body: "TikTok Shop, Shopify, and sample data flow into one view, with outreach extending across creator tiers as reach grows.",
        },
      ],
      externalHref: "https://reacher-colourpop-external.vercel.app",
    },
  },
  {
    slug: "watch-and-sea",
    brand: "Watch and Sea Beauty",
    category: "Beauty",
    group: "Beauty",
    headline: "How Watch & Sea built an affiliate engine from zero",
    tags: ["692% GMV Lift", "189% Videos Posted", "Built From Zero"],
    image: "/reacher-assets/customers/watch-and-sea.png",
    accent: "#4cc9f0",
    story: {
      summary: "How Watch and Sea built an affiliate engine from zero and ran its growth channel through TikTok Shop creators.",
      joined: "Joined Reacher February 2026",
      about:
        "Watch and Sea is a hair care brand built for curls and texture, running its growth channel through creators on TikTok Shop.",
      results: [
        { value: "692%", label: "Affiliate GMV lift" },
        { value: "8.5×", label: "Samples approved" },
        { value: "17×", label: "New creators posting" },
        { value: "6×", label: "Videos posted" },
      ],
      challenge: {
        title: "The affiliate program had yet to be built.",
        points: ["Missing affiliate engine", "Missing community layer", "Unfocused targeting"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "End-to-end setup",
          body: "Built outreach, nurturing, reactivation, and a creator community from scratch — all four engines live.",
        },
        {
          label: "Solution 02",
          title: "Hero product focus",
          body: "Shifted attention from subsidiary SKUs to three hero SKUs already driving revenue.",
        },
        {
          label: "Solution 03",
          title: "Competitor outreach",
          body: "Targeted creators already active with competing brands in the category, then vetted each one.",
        },
        {
          label: "Solution 04",
          title: "Content bonus campaign",
          body: "Paid creators cash bonuses for each piece of content posted against weekly goals.",
        },
      ],
      numbers: [
        { label: "New creators posting", before: "Baseline", after: "17× MoM" },
        { label: "Videos posted", before: "Baseline", after: "6× MoM" },
        { label: "Samples approved", before: "Baseline", after: "8.5× MoM" },
      ],
      externalHref: "https://reacher-watch-and-sea-external.vercel.app",
    },
  },
  {
    slug: "free-soul",
    brand: "Free Soul",
    category: "Health & Wellness",
    group: "Health & Wellness",
    headline: "How Free Soul unlocked a record month on TikTok Shop",
    tags: ["Record GMV Month", "6.5× Sample Requests", "L3+ Activation"],
    image: "/reacher-assets/customers/free-soul.png",
    accent: "#f4a3c1",
    story: {
      summary: "How Free Soul rebuilt its nurturing layer and unlocked an all-time record month on TikTok Shop.",
      joined: "Working with Reacher since January 2025",
      about:
        "Free Soul is a UK health and wellness brand, running a mature creator program across multiple product lines on TikTok Shop.",
      results: [
        { value: "Record", label: "All-time GMV month" },
        { value: "6.5×", label: "Sample requests" },
        { value: "L3+", label: "Creator activation" },
      ],
      challenge: {
        title: "The nurturing layer was missing.",
        points: ["Flat nurturing flow", "Stalled creators", "No event playbook"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Nurturing flow rebuild",
          body: "Custom segments built for every main product line, tailored to each creator's funnel stage.",
        },
        {
          label: "Solution 02",
          title: "Stage-based reactivation",
          body: "Each funnel stage now triggers catered messaging, bonuses, and content to keep creators posting — from welcome to win-back.",
        },
        {
          label: "Solution 03",
          title: "Event campaign sequence",
          body: "A seven-message sequence across seven days, launching two weeks ahead of the event — awareness to urgency to activation.",
        },
        {
          label: "Solution 04",
          title: "Reusable campaign framework",
          body: "The same seven-day structure is rebuilt around each new promotional moment, launch, or sale.",
        },
      ],
      externalHref: "https://reacher-freesoul-external.vercel.app",
    },
  },
  {
    slug: "earth-elixir",
    brand: "Earth Elixir",
    category: "Supplements",
    group: "Supplements",
    headline: "How Earth Elixir scaled samples approved 6.4× in one quarter",
    tags: ["Volume to Strategy", "ROI-First Approach", "Competitor Targeting"],
    image: "/reacher-assets/customers/earth-elixir.png",
    accent: "#d4a017",
    story: {
      summary: "How Earth Elixir added a targeting layer and scaled samples approved 6.4× in one quarter.",
      joined: "Joined Reacher Plus February 2026",
      about:
        "Earth Elixir is a men's-health supplement brand on TikTok Shop, scaling a multi-SKU creator program with Tongkat Ali as the hero.",
      results: [
        { value: "6.4×", label: "Samples approved" },
        { value: "2×", label: "Active creators" },
        { value: "3×", label: "TC acceptance rate" },
      ],
      challenge: {
        title: "The program needed a targeting layer.",
        points: ["No targeting layer", "Loose approvals", "No retention motion"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Niche filtered outreach",
          body: "Weekly Target Collabs filtered by Health category, a $500 GMV floor, and a 75% post-rate threshold — reaching 38K creators in March.",
        },
        {
          label: "Solution 02",
          title: "Competitor targeting",
          body: "Outreach to creators already promoting adjacent brands lifted acceptance 3× in three months.",
        },
        {
          label: "Solution 03",
          title: "Picky sample approvals",
          body: "Requests grew 4× while approvals held flat, tightening the approval rate from 24% to 9%.",
        },
        {
          label: "Solution 04",
          title: "Retainer and reactivation",
          body: "A TC + Retainer test approved at 30% — roughly 3× the broader Health Creator automation — with win-back motions for the strongest creators.",
        },
      ],
      numbers: [
        { label: "Samples approved", before: "7", after: "45" },
        { label: "Active creators", before: "42", after: "83" },
        { label: "TC acceptance rate", before: "0.5%", after: "1.5%" },
      ],
      externalHref: "https://reacher-earth-elixir-internal.vercel.app",
    },
  },
  {
    slug: "clean-nutra",
    brand: "Clean Nutra",
    category: "Supplements",
    group: "Supplements",
    headline: "How Clean Nutra rebuilt a stalled affiliate engine in 60 days",
    tags: ["2× Sample Requests", "Fully Automated Flows", "BOGO Outreach"],
    image: "/reacher-assets/customers/clean-nutra.png",
    accent: "#2a9d8f",
    story: {
      summary: "How Clean Nutra restarted outreach from zero and rebuilt a stalled affiliate engine in 60 days.",
      joined: "Joined Reacher Plus March 2026",
      about:
        "Clean Nutra is a supplement brand with a broad TikTok Shop catalog of Berberine, Ashwagandha, and BOGO bundles.",
      results: [
        { value: "10×", label: "Sample approval rate" },
        { value: "32×", label: "Target Collabs accepted" },
        { value: "2×", label: "Creators reached" },
      ],
      challenge: {
        title: "The affiliate engine had stalled.",
        points: ["Outreach had stalled", "Manual nurturing only", "Retainer spend untested"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Outreach engine restarted",
          body: "Consistent TC invites with BOGO-led messaging reactivated outreach from zero, reopening the funnel from requests to approved samples.",
        },
        {
          label: "Solution 02",
          title: "Automated nurturing flows",
          body: "A custom three-week content flow replaces manual follow-up for every new sample.",
        },
        {
          label: "Solution 03",
          title: "BOGO-led messaging",
          body: "Hero BOGO SKUs became the #2 product at $90.4K April GMV, driven by consistent creator messaging.",
        },
        {
          label: "Solution 04",
          title: "Retainer restructure",
          body: "Testing mid-tier creators against explicit performance goals alongside top-tier partnerships — a new L6 creator drove $53.4K April affiliate GMV.",
        },
      ],
      numbers: [
        { label: "Sample approval rate", before: "6.9%", after: "70.0%" },
        { label: "Target Collabs accepted", before: "31", after: "1,007" },
        { label: "Creators reached", before: "123K", after: "246K" },
      ],
      externalHref: "https://reacher-clean-nutra-internal.vercel.app",
    },
  },
  {
    slug: "infuse",
    brand: "Infuse",
    category: "Beauty · In partnership with Darl",
    group: "Beauty",
    headline: "How Darl scaled Infuse's creator outreach 791× in one month",
    tags: ["12× Active Creators", "10× Videos Posted", "Built From Cold Start"],
    image: "/reacher-assets/customers/infuse.png",
    accent: "#9c6644",
    story: {
      summary: "How agency Darl scaled creator outreach 791× in one month across Infuse and Emberela from a cold start.",
      joined: "Managed service since March 2026",
      about:
        "Darl is a two-brand agency running TikTok Shop creator affiliate programs for Infuse (skincare) and Emberela (home and lifestyle).",
      results: [
        { value: "791×", label: "Creators reached" },
        { value: "750×", label: "Target Collab activations" },
        { value: "14×", label: "Active creators" },
        { value: "8.6×", label: "Samples approved" },
      ],
      challenge: {
        title: "Two brands, launching from a cold start.",
        points: ["No outreach infrastructure", "Catalog sync blocking fulfillment", "No persona targeting"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Persona-based TC outreach",
          body: "Rebuilt targeted collaboration campaigns per brand persona, scaling activations from 1 to 750.",
        },
        {
          label: "Solution 02",
          title: "End-to-end execution",
          body: "Managed sample approvals, vetting, and activation directly — Infuse approving at 52.8% and Emberela at 61.8%.",
        },
        {
          label: "Solution 03",
          title: "Shopify to TikTok mapping",
          body: "Resolved the catalog sync blocking fulfillment; both brands now active on three tracked products.",
        },
        {
          label: "Solution 04",
          title: "Outreach volume rebuild",
          body: "Scaled the direct-messaging infrastructure to 12.61K monthly messages across 283 creators.",
        },
      ],
      numbers: [
        { label: "Creators reached", before: "28", after: "22,148" },
        { label: "Target Collab activations", before: "1", after: "750" },
        { label: "Active creators", before: "10", after: "144" },
        { label: "Samples approved", before: "17", after: "146" },
      ],
      externalHref: "https://reacher-darl-internal.vercel.app",
    },
  },
  {
    slug: "momofuku",
    brand: "Momofuku Goods",
    category: "Food & Pantry",
    group: "Food & Pantry",
    headline: "How Momofuku grew creator reach 8.2× in one month",
    tags: ["2.4× Sample Requests", "2× Videos Posted", "EMV-First Strategy"],
    image: "/reacher-assets/customers/momofuku.png",
    accent: "#e9b949",
    story: {
      summary: "How Momofuku grew creator reach 8.2× in one month with a program built around earned media, not just GMV.",
      joined: "Joined Reacher January 2026",
      about:
        "Momofuku is a food and pantry brand known for noodles, chili crunch, and soy-based staples, built for modern Asian home cooking.",
      results: [
        { value: "8.2×", label: "Creators reached" },
        { value: "2.4×", label: "Sample requests" },
        { value: "2.1×", label: "Videos posted" },
      ],
      challenge: {
        title: "Built for views, not sales.",
        points: ["Reach without a sales motion", "No creator outreach engine", "Flat sample strategy"],
      },
      solutions: [
        {
          label: "Solution 01",
          title: "Outreach at scale",
          body: "Outreach throughput scaled month over month — creators reached from 8,476 to 69,802, with new creators posting up 5.8×.",
        },
        {
          label: "Solution 02",
          title: "Built for reach",
          body: "Outreach prioritizes high-follower, high-view, and recipe-first creators who drive brand reach, not just list size.",
        },
        {
          label: "Solution 03",
          title: "Sample strategy",
          body: "Shifted 150 samples into chili crunch ahead of April's viral recipe challenge, based on performance signals.",
        },
        {
          label: "Solution 04",
          title: "Custom reach reports",
          body: "Monthly reports track returning creators, videos posted, and brand reach compounding over time.",
        },
      ],
      numbers: [
        { label: "Creators reached", before: "8,476", after: "69,802" },
        { label: "Sample requests", before: "458", after: "1,107" },
        { label: "Videos posted", before: "270", after: "564" },
      ],
      externalHref: "https://reacher-momofuku-internal.vercel.app",
    },
  },
];

export const customerGroups = ["Beauty", "Supplements", "Health & Wellness", "Food & Pantry"] as const;
