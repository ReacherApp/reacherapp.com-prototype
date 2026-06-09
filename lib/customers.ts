export type ResultMetric = { value: string; label: string };
export type Solution = { title: string; body: string };
export type StoryNumber = { label: string; before: string; after: string; multiplier?: string };
export type Win = { stat: string; note: string };

export type CustomerStory = {
  /** hero subtitle */
  subtitle: string;
  joined: string;
  industry: string;
  productCategory: string;
  /** "Results at a glance" numbers */
  results: ResultMetric[];
  aboutTitle: string;
  about: string[];
  challengeTitle: string;
  challengeParagraphs: string[];
  challengeQuote?: string;
  solutionIntro: string;
  solutions: Solution[];
  solutionQuote?: string;
  resultParagraphs: string[];
  wins: Win[];
  numbers?: StoryNumber[];
  closingQuote?: string;
  externalHref?: string;
};

export type Customer = {
  slug: string;
  brand: string;
  category: string;
  group: "Beauty" | "Supplements" | "Health & Wellness" | "Food & Pantry";
  headline: string;
  tags: string[];
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
    headline: "How ColourPop lifted sample requests 6.5x in 30 days",
    tags: ["163× Creators Reached", "6.5× Sample Requests", "5× Sample Approvals"],
    image: "/reacher-assets/customers/colourpop.png",
    accent: "#c77dff",
    story: {
      subtitle:
        "A high-volume affiliate program needed throughput and visibility to match its ambitions. Reacher Plus delivered transparent execution and the activation velocity to unlock it.",
      joined: "Joined Reacher February 2026",
      industry: "Beauty & Cosmetics",
      productCategory: "Affordable makeup, lip, and face products",
      results: [
        { value: "163×", label: "Creators Reached" },
        { value: "6.5×", label: "Sample Requests" },
        { value: "5×", label: "Sample Approvals" },
      ],
      aboutTitle: "Affordable beauty, amplified by creators",
      about: [
        "ColourPop is a direct-to-consumer cosmetics brand with a cult following in eye makeup, lip, and shadow. Its TikTok Shop program runs on high creator volume, with hero products like Shadow Stix anchoring a broad, always-on affiliate motion.",
        "The brand joined Reacher Plus in early 2026 to scale that motion with more throughput, tighter targeting, and real-time operational visibility.",
      ],
      challengeTitle: "Scaling approvals without visibility",
      challengeParagraphs: [
        "ColourPop's TikTok Shop program needed more throughput at the sample-request and approval stages to keep pace with its activation goals.",
        "Stronger tier activation, especially at the mid- and upper-tier creator levels, was lagging, and the team lacked real-time insight into what outreach was actually happening day to day. The result was a program that looked active on the surface but couldn't be steered or scaled with confidence.",
      ],
      challengeQuote:
        "When the team looked at the underlying activity, the volume reaching creators and moving through approvals didn't line up with the program's growth goals — and there wasn't a clean way to see it in real time.",
      solutionIntro:
        "Reacher Plus stepped in as an embedded extension of the ColourPop team, layering transparent execution on top of focused outreach, hero-product targeting, and campaign-grade strategy.",
      solutions: [
        {
          title: "Real-time transparency",
          body: "The brand's team can log directly into Reacher to see every piece of outreach as it happens, with the ability to message and redirect focus across product IDs on demand.",
        },
        {
          title: "Hero product targeting",
          body: "Consistent, sustained outreach anchored to ColourPop's hero product IDs kept top sellers front and center while pushing activation into stronger creator tiers.",
        },
        {
          title: "Custom campaign",
          body: "A custom campaign calendar built from past Super Brand Day insights, structured messaging per touchpoint, video incentives, and weekly tracking against specific creator video goals.",
        },
        {
          title: "Reporting and strategic pivots",
          body: "Consolidated reporting across TikTok Shop and Shopify affiliates, plus weekly tracking against video goals and proactive pivot recommendations whenever the program hit saturation or needed to shift focus.",
        },
      ],
      solutionQuote:
        "The working model is a single team, not an agency and a brand at arm's length — strategy, pivots, and ad hoc requests move back and forth in the moment, with the brand's team directing focus and Reacher Plus executing and flagging what to adjust next.",
      resultParagraphs: [
        "In one month on Reacher Plus, ColourPop's TikTok Shop program moved from a flat baseline to one of the highest-velocity creator operations. Outreach, approvals, and sample throughput all scaled in step, with paid amplification activated as a new layer on top. The partnership now runs as a fluid, collaborative cadence building toward Super Brand Day moments and steady activation goals month over month.",
      ],
      wins: [
        { stat: "163× creators reached", note: "a huge lift in outreach surface area" },
        { stat: "6.5× sample requests", note: "throughput scaled to match program ambitions" },
        { stat: "5× sample approvals", note: "activation pipeline consistently feeding content" },
        { stat: "L3+ activation", note: "now running consistently" },
      ],
      numbers: [
        { label: "Sample Approvals", before: "1,886", after: "9,343", multiplier: "+5×" },
        { label: "Sample Requests", before: "15,000", after: "98,280", multiplier: "+6.5×" },
        { label: "Creators Reached", before: "1,880", after: "305,555", multiplier: "+162×" },
      ],
      closingQuote:
        "Reacher Plus operates as an offshoot of the brand's team — shooting ideas back and forth, strategizing new launches together, and adjusting direction in real time to keep hitting activation goals.",
      externalHref: "https://reacher-colourpop-external.vercel.app",
    },
  },
  {
    slug: "watch-and-sea",
    brand: "Watch and Sea Beauty",
    category: "Beauty",
    group: "Beauty",
    headline: "How Watch & Sea lifted affiliate GMV 692% from zero",
    tags: ["692% GMV Lift", "189% Videos Posted", "Built From Zero"],
    image: "/reacher-assets/customers/watch-and-sea.png",
    accent: "#4cc9f0",
    story: {
      subtitle:
        "A hair-care brand with no affiliate program built an end-to-end creator engine from scratch — and lifted affiliate GMV 692% from zero.",
      joined: "Joined Reacher February 2026",
      industry: "Beauty",
      productCategory: "Hair care for curls and texture",
      results: [
        { value: "692%", label: "Affiliate GMV Lift" },
        { value: "8.5×", label: "Samples Approved" },
        { value: "17×", label: "New Creators Posting" },
        { value: "6×", label: "Videos Posted" },
      ],
      aboutTitle: "Hair care built for curls and texture",
      about: [
        "Watch and Sea is a hair care brand built for curls and texture, running its growth channel through creators on TikTok Shop.",
        "When it joined Reacher, the affiliate program had yet to be built — no engine, no community layer, and no focused targeting.",
      ],
      challengeTitle: "The affiliate program had yet to be built",
      challengeParagraphs: [
        "Watch and Sea had products and demand, but no affiliate engine, no community layer, and unfocused targeting across its catalog.",
        "Growth depended on building outreach, nurturing, reactivation, and a creator community from a standing start.",
      ],
      solutionIntro:
        "Reacher Plus built the entire affiliate motion from scratch and focused it on the SKUs and creators most likely to drive revenue.",
      solutions: [
        { title: "End-to-end setup", body: "Built outreach, nurturing, reactivation, and a creator community from scratch — all four engines live." },
        { title: "Hero product focus", body: "Shifted attention from subsidiary SKUs to three hero SKUs already driving revenue." },
        { title: "Competitor outreach", body: "Targeted creators already active with competing brands in the category, then vetted each one." },
        { title: "Content bonus campaign", body: "Paid creators cash bonuses for each piece of content posted against weekly goals." },
      ],
      resultParagraphs: [
        "From a standing start, Watch and Sea built a working affiliate engine that lifted affiliate GMV 692% and multiplied creator output month over month.",
      ],
      wins: [
        { stat: "692% affiliate GMV", note: "built from zero" },
        { stat: "17× new creators posting", note: "month over month" },
        { stat: "8.5× samples approved", note: "month over month" },
        { stat: "6× videos posted", note: "month over month" },
      ],
      numbers: [
        { label: "New creators posting", before: "Baseline", after: "17×", multiplier: "MoM" },
        { label: "Videos posted", before: "Baseline", after: "6×", multiplier: "MoM" },
        { label: "Samples approved", before: "Baseline", after: "8.5×", multiplier: "MoM" },
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
      subtitle:
        "A mature creator program was missing its nurturing layer. Reacher Plus rebuilt it stage by stage and unlocked an all-time record month.",
      joined: "Working with Reacher since January 2025",
      industry: "Health & Wellness",
      productCategory: "Functional wellness, made everyday",
      results: [
        { value: "Record", label: "All-time GMV Month" },
        { value: "6.5×", label: "Sample Requests" },
        { value: "L3+", label: "Creator Activation" },
      ],
      aboutTitle: "Functional wellness, made everyday",
      about: [
        "Free Soul is a UK health and wellness brand, running a mature creator program across multiple product lines on TikTok Shop.",
        "Despite scale, the nurturing layer was missing — flows were flat, creators stalled, and there was no event playbook.",
      ],
      challengeTitle: "The nurturing layer was missing",
      challengeParagraphs: [
        "Free Soul had a mature program but a flat nurturing flow, stalled creators, and no repeatable event playbook.",
        "Without stage-based messaging, creators dropped off after the first touch and big retail moments went under-leveraged.",
      ],
      solutionIntro:
        "Reacher Plus rebuilt the nurturing layer around funnel stage and product line, then turned it into a reusable campaign framework.",
      solutions: [
        { title: "Nurturing flow rebuild", body: "Custom segments built for every main product line, tailored to each creator's funnel stage." },
        { title: "Stage-based reactivation", body: "Each funnel stage triggers catered messaging, bonuses, and content to keep creators posting — from welcome to win-back." },
        { title: "Event campaign sequence", body: "A seven-message sequence across seven days, launching two weeks ahead of the event — awareness to urgency to activation." },
        { title: "Reusable campaign framework", body: "The same seven-day structure is rebuilt around each new promotional moment, launch, or sale." },
      ],
      resultParagraphs: [
        "With a rebuilt nurturing layer and a repeatable event playbook, Free Soul unlocked an all-time record GMV month on TikTok Shop.",
      ],
      wins: [
        { stat: "All-time record month", note: "affiliate GMV" },
        { stat: "6.5× sample requests", note: "throughput scaled" },
        { stat: "L3+ activation", note: "creators moving up the tiers" },
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
      subtitle:
        "A multi-SKU men's-health brand traded volume for strategy — adding a targeting layer that scaled samples approved 6.4× in a quarter.",
      joined: "Joined Reacher Plus February 2026",
      industry: "Supplements",
      productCategory: "Men's health supplements",
      results: [
        { value: "6.4×", label: "Samples Approved" },
        { value: "2×", label: "Active Creators" },
        { value: "3×", label: "TC Acceptance Rate" },
      ],
      aboutTitle: "Targeted men's health, built on fit",
      about: [
        "Earth Elixir is a men's-health supplement brand on TikTok Shop, scaling a multi-SKU creator program with Tongkat Ali as the hero.",
        "The program had volume but no targeting layer, loose approvals, and no retention motion.",
      ],
      challengeTitle: "The program needed a targeting layer",
      challengeParagraphs: [
        "Earth Elixir was reaching creators but without a targeting layer — approvals were loose and there was no retention motion to keep the best creators posting.",
        "Scaling profitably meant filtering outreach by fit and tightening approvals, not just adding volume.",
      ],
      solutionIntro:
        "Reacher Plus added a fit-first targeting layer, tightened approvals, and tested retainers against explicit performance goals.",
      solutions: [
        { title: "Niche filtered outreach", body: "Weekly Target Collabs filtered by Health category, a $500 GMV floor, and a 75% post-rate threshold — reaching 38K creators in March." },
        { title: "Competitor targeting", body: "Outreach to creators already promoting adjacent brands lifted acceptance 3× in three months." },
        { title: "Picky sample approvals", body: "Requests grew 4× while approvals held flat, tightening the approval rate from 24% to 9%." },
        { title: "Retainer and reactivation", body: "A TC + Retainer test approved at 30% — roughly 3× the broader Health Creator automation — with win-back motions for the strongest creators." },
      ],
      resultParagraphs: [
        "By trading raw volume for fit, Earth Elixir scaled samples approved 6.4× while tightening the approval bar — a more profitable, more durable program.",
      ],
      wins: [
        { stat: "6.4× samples approved", note: "in one quarter" },
        { stat: "2× active creators", note: "42 to 83" },
        { stat: "3× TC acceptance rate", note: "0.5% to 1.5%" },
      ],
      numbers: [
        { label: "Samples approved", before: "7", after: "45", multiplier: "+6.4×" },
        { label: "Active creators", before: "42", after: "83", multiplier: "+2×" },
        { label: "TC acceptance rate", before: "0.5%", after: "1.5%", multiplier: "+3×" },
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
      subtitle:
        "A stalled affiliate engine restarted from zero — consistent outreach, automated nurturing, and BOGO-led messaging rebuilt it in 60 days.",
      joined: "Joined Reacher Plus March 2026",
      industry: "Supplements",
      productCategory: "Clean, functional supplements",
      results: [
        { value: "10×", label: "Sample Approval Rate" },
        { value: "32×", label: "Target Collabs Accepted" },
        { value: "2×", label: "Creators Reached" },
      ],
      aboutTitle: "Clean, functional supplements",
      about: [
        "Clean Nutra is a supplement brand with a broad TikTok Shop catalog of Berberine, Ashwagandha, and BOGO bundles.",
        "The affiliate engine had stalled — outreach was dormant, nurturing was manual, and retainer spend was untested.",
      ],
      challengeTitle: "The affiliate engine had stalled",
      challengeParagraphs: [
        "Outreach had stopped, every follow-up was manual, and retainer spend was untested — the funnel had effectively gone quiet.",
        "Restarting meant reopening outreach, automating nurture, and proving where retainer dollars should go.",
      ],
      solutionIntro:
        "Reacher Plus restarted outreach from zero with BOGO-led messaging, automated the nurture, and restructured retainers around performance.",
      solutions: [
        { title: "Outreach engine restarted", body: "Consistent TC invites with BOGO-led messaging reactivated outreach from zero, reopening the funnel from requests to approved samples." },
        { title: "Automated nurturing flows", body: "A custom three-week content flow replaces manual follow-up for every new sample." },
        { title: "BOGO-led messaging", body: "Hero BOGO SKUs became the #2 product at $90.4K April GMV, driven by consistent creator messaging." },
        { title: "Retainer restructure", body: "Testing mid-tier creators against explicit performance goals alongside top-tier partnerships — a new L6 creator drove $53.4K April affiliate GMV." },
      ],
      resultParagraphs: [
        "In 60 days, Clean Nutra went from a stalled engine to a high-acceptance program — sample approval rate up 10× and Target Collabs accepted up 32×.",
      ],
      wins: [
        { stat: "10× sample approval rate", note: "6.9% to 70.0%" },
        { stat: "32× Target Collabs accepted", note: "31 to 1,007" },
        { stat: "2× creators reached", note: "123K to 246K" },
      ],
      numbers: [
        { label: "Sample approval rate", before: "6.9%", after: "70.0%", multiplier: "+10×" },
        { label: "Target Collabs accepted", before: "31", after: "1,007", multiplier: "+32×" },
        { label: "Creators reached", before: "123K", after: "246K", multiplier: "+2×" },
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
      subtitle:
        "An agency launched two brands from a cold start — rebuilding outreach infrastructure to scale creator reach 791× in a single month.",
      joined: "Managed service since March 2026",
      industry: "Beauty & Lifestyle (Agency)",
      productCategory: "Skincare (Infuse) and home & lifestyle (Emberela)",
      results: [
        { value: "791×", label: "Creators Reached" },
        { value: "750×", label: "Target Collab Activations" },
        { value: "14×", label: "Active Creators" },
        { value: "8.6×", label: "Samples Approved" },
      ],
      aboutTitle: "Two brands, one managed creator engine",
      about: [
        "Darl is a two-brand agency running TikTok Shop creator affiliate programs for Infuse (skincare) and Emberela (home and lifestyle).",
        "Both brands launched from a cold start with no outreach infrastructure, a catalog sync blocking fulfillment, and no persona targeting.",
      ],
      challengeTitle: "Two brands, launching from a cold start",
      challengeParagraphs: [
        "Neither brand had outreach infrastructure, and a Shopify-to-TikTok catalog mismatch was blocking fulfillment.",
        "Scaling meant rebuilding persona-based targeting and direct-messaging volume from scratch.",
      ],
      solutionIntro:
        "Darl ran end-to-end execution on Reacher, rebuilding persona-based outreach and the messaging infrastructure behind it.",
      solutions: [
        { title: "Persona-based TC outreach", body: "Rebuilt targeted collaboration campaigns per brand persona, scaling activations from 1 to 750." },
        { title: "End-to-end execution", body: "Managed sample approvals, vetting, and activation directly — Infuse approving at 52.8% and Emberela at 61.8%." },
        { title: "Shopify to TikTok mapping", body: "Resolved the catalog sync blocking fulfillment; both brands now active on three tracked products." },
        { title: "Outreach volume rebuild", body: "Scaled the direct-messaging infrastructure to 12.61K monthly messages across 283 creators." },
      ],
      resultParagraphs: [
        "From a cold start, Darl scaled creator reach 791× in one month across both brands, with active creators up 14× and samples approved up 8.6×.",
      ],
      wins: [
        { stat: "791× creators reached", note: "28 to 22,148" },
        { stat: "750× Target Collab activations", note: "1 to 750" },
        { stat: "14× active creators", note: "10 to 144" },
        { stat: "8.6× samples approved", note: "17 to 146" },
      ],
      numbers: [
        { label: "Creators reached", before: "28", after: "22,148", multiplier: "+791×" },
        { label: "Target Collab activations", before: "1", after: "750", multiplier: "+750×" },
        { label: "Active creators", before: "10", after: "144", multiplier: "+14×" },
        { label: "Samples approved", before: "17", after: "146", multiplier: "+8.6×" },
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
      subtitle:
        "A food brand built for views, not sales, added a creator outreach engine — and grew creator reach 8.2× in a single month.",
      joined: "Joined Reacher January 2026",
      industry: "Food & Pantry",
      productCategory: "Modern Asian pantry staples",
      results: [
        { value: "8.2×", label: "Creators Reached" },
        { value: "2.4×", label: "Sample Requests" },
        { value: "2.1×", label: "Videos Posted" },
      ],
      aboutTitle: "Modern Asian pantry staples",
      about: [
        "Momofuku is a food and pantry brand known for noodles, chili crunch, and soy-based staples, built for modern Asian home cooking.",
        "Its content was built for views, not sales — strong reach without an outreach engine or a sales-oriented sample strategy.",
      ],
      challengeTitle: "Built for views, not sales",
      challengeParagraphs: [
        "Momofuku had reach but no creator outreach engine and a flat sample strategy that didn't follow performance signals.",
        "Turning earned-media reach into a repeatable program meant scaling outreach and steering samples toward hero products.",
      ],
      solutionIntro:
        "Reacher Plus scaled reach-first outreach and pointed sample supply at the hero product ahead of a viral moment.",
      solutions: [
        { title: "Outreach at scale", body: "Outreach throughput scaled month over month — creators reached from 8,476 to 69,802, with new creators posting up 5.8×." },
        { title: "Built for reach", body: "Outreach prioritizes high-follower, high-view, and recipe-first creators who drive brand reach, not just list size." },
        { title: "Sample strategy", body: "Shifted 150 samples into chili crunch ahead of April's viral recipe challenge, based on performance signals." },
        { title: "Custom reach reports", body: "Monthly reports track returning creators, videos posted, and brand reach compounding over time." },
      ],
      resultParagraphs: [
        "By prioritizing reach and steering samples to the hero product, Momofuku grew creator reach 8.2× and more than doubled sample requests and videos posted in a single month.",
      ],
      wins: [
        { stat: "8.2× creators reached", note: "8,476 to 69,802" },
        { stat: "2.4× sample requests", note: "458 to 1,107" },
        { stat: "2.1× videos posted", note: "270 to 564" },
      ],
      numbers: [
        { label: "Creators reached", before: "8,476", after: "69,802", multiplier: "+8.2×" },
        { label: "Sample requests", before: "458", after: "1,107", multiplier: "+2.4×" },
        { label: "Videos posted", before: "270", after: "564", multiplier: "+2.1×" },
      ],
      externalHref: "https://reacher-momofuku-internal.vercel.app",
    },
  },
];

export const customerGroups = ["Beauty", "Supplements", "Health & Wellness", "Food & Pantry"] as const;
