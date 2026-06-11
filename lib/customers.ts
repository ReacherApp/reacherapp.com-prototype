export type ResultMetric = { value: string; label: string };
export type Solution = { title: string; body: string };
export type StoryNumber = { label: string; before: string; after: string; multiplier?: string };
export type Win = { stat: string; note: string };

export type Chart =
  | { type: "bar"; title: string; badge?: string; bars: { label: string; value: number; display: string; highlight?: boolean }[] }
  | { type: "line"; title: string; badge?: string; points: { x: string; y: number }[]; baseline?: number; baselineLabel?: string }
  | { type: "coverage"; title: string; badge?: string; note?: string; before: number; after: number; total: number }
  | { type: "timeline"; title: string; badge?: string; steps: { day: string; label: string }[] }
  | { type: "comparison"; title: string; badge?: string; gateLabel?: string; retiredLabel: string; retired: string[]; activeLabel: string; active: string[]; footer?: string }
  | { type: "motions"; title: string; badge?: string; cards: { title: string; body: string; status: string; tag: string }[]; footer?: string }
  | { type: "brands"; title: string; badge?: string; items: { name: string; gmv: string; image?: string }[] };

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
  /** when true, hide the 3-up product photo strip in About (for data-driven stories without product shots) */
  noProductStrip?: boolean;
  /** chart cards rendered in the result section (replaces the simple bars when present) */
  charts?: Chart[];
  closingQuote?: string;
  externalHref?: string;
};

export type Customer = {
  slug: string;
  brand: string;
  category: string;
  group: "Beauty" | "Supplements" | "Health & Wellness" | "Food & Pantry" | "Agencies";
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
    image: "/reacher-assets/customers/colourpop.png?v=2",
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
      charts: [
        {
          type: "line",
          title: "From zero to 305K creators",
          badge: "+163× in two months",
          points: [
            { x: "Jan", y: 2 },
            { x: "Feb", y: 100 },
            { x: "Mar", y: 305 },
          ],
        },
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
    image: "/reacher-assets/customers/watch-and-sea.png?v=2",
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
    headline: "How Free Soul achieved their biggest month ever with $1.08M in GMV",
    tags: ["$1.08M GMV", "Biggest Month Yet", "8/8 Product Lines"],
    image: "/reacher-assets/customers/free-soul.png?v=2",
    accent: "#f4a3c1",
    story: {
      subtitle:
        "Brand recognition, but a broken funnel. Reacher Plus rebuilt every layer and turned it into Free Soul's biggest month yet — $1.08M in affiliate GMV.",
      joined: "Working with Reacher Plus since 2025",
      industry: "Health & Wellness",
      productCategory: "Protein blends, greens powders, and supplements for women",
      results: [
        { value: "$1.08M", label: "Affiliate GMV" },
        { value: "8/8", label: "Product lines covered" },
        { value: "4×", label: "GMV vs. prior months" },
      ],
      aboutTitle: "The home of women's wellbeing",
      about: [
        "Free Soul is a women-first wellness brand selling nutritionist-formulated protein blends, greens powders, and supplements designed for women. They're one of the top-performing brands on TikTok Shop and a household name in UK wellness.",
        "They came to Reacher Plus with brand recognition but a broken funnel. Creators were coming in and disappearing with no messaging to bring them back.",
      ],
      challengeTitle: "Six SKUs in the dark",
      challengeParagraphs: [
        "Free Soul was running eight products at a time on TikTok Shop, but affiliate messaging only reached two of them. The other six had zero nurturing going to creators, no bonuses, no reactivation pushes, nothing to keep them motivated.",
        "The reengagement side of the funnel was effectively broken. Creators signed up, promoted once, and then went dark with no system to bring them back.",
      ],
      challengeQuote:
        "6 of 8 SKUs running dark. No stage-based messaging, no bonuses, no reactivation. Creators came in and disappeared.",
      solutionIntro:
        "Reacher revamped the entire nurturing infrastructure, then layered on a custom Super Brand Day sequence that turned a broken funnel into their biggest month on TikTok Shop.",
      solutions: [
        { title: "Full funnel rebuild", body: "Reacher rebuilt the evergreen nurturing flow from top to bottom, mapping every funnel stage to tailored messaging, bonuses, and reactivation pushes designed to keep creators posting." },
        { title: "Per-product segments", body: "Custom segments for every main product line so each affiliate now gets messaging tuned to the specific SKU they're promoting. The infrastructure scales with every new launch." },
        { title: "Super Brand Day sequence", body: "A seven-message, seven-day activation sequence hitting the full affiliate base, launched two weeks before Super Brand Day so creators had runway to plan, shoot, and post in time." },
        { title: "Reusable playbook", body: "The Super Brand Day sequence became a repeatable framework. Reacher now rebuilds and adapts it around every major sale, launch, and campaign Free Soul runs." },
      ],
      solutionQuote:
        "Seven messages, seven days, one record. The Super Brand Day sequence hit every creator in the base with a specific purpose at each stage.",
      resultParagraphs: [
        "The record didn't come from a single campaign. It came from a rebuilt funnel where every creator, every product, and every funnel stage finally had messaging pointed at it. The Super Brand Day sequence amplified that foundation, and it became their biggest month on the platform.",
      ],
      wins: [
        { stat: "$1.08M in affiliate-driven GMV", note: "during their Super Brand Day period" },
        { stat: "Biggest month yet", note: "on TikTok Shop for Free Soul" },
        { stat: "8 of 8 product lines covered", note: "by custom affiliate messaging, up from 2 of 8" },
        { stat: "Reusable Super Brand Day framework", note: "now deployed for every major campaign" },
      ],
      charts: [
        {
          type: "bar",
          title: "$1.08M — biggest month yet",
          bars: [
            { label: "Oct", value: 310, display: "$310K" },
            { label: "Nov", value: 380, display: "$380K" },
            { label: "Dec", value: 460, display: "$460K" },
            { label: "Jan", value: 620, display: "$620K" },
            { label: "Super Brand", value: 1080, display: "$1.08M", highlight: true },
          ],
        },
        {
          type: "coverage",
          title: "+6 product lines",
          badge: "↑ 4×",
          note: "Every Free Soul product line now backed by custom affiliate messaging.",
          before: 2,
          after: 8,
          total: 8,
        },
      ],
      closingQuote:
        "$1.08M. Their biggest month. Free Soul's record GMV month, built on a fully rebuilt affiliate funnel.",
      externalHref: "https://reacher-freesoul-external.vercel.app",
    },
  },
  {
    slug: "earth-elixir",
    brand: "Earth Elixir",
    category: "Supplements",
    group: "Supplements",
    headline: "How Earth Elixir ditched volume-first sampling and rebuilt for profit",
    tags: ["Volume to Strategy", "ROI-First Approach", "Competitor Targeting"],
    image: "/reacher-assets/customers/earth-elixir.png?v=2",
    accent: "#d4a017",
    story: {
      subtitle:
        "Their previous agency blasted samples at anyone. Reacher Plus turned sampling into a ROI-first operation.",
      joined: "Joined Reacher Plus 2026",
      industry: "Supplements",
      productCategory: "US-made herbal supplements for performance, vitality, and recovery",
      results: [
        { value: "15 SKUs", label: "Full catalog reach, every product now segmented" },
        { value: "4×", label: "New playbooks deployed, none existed before" },
        { value: "100%", label: "Deliberate sample approvals, every send calculated for ROI" },
      ],
      aboutTitle: "Premium supplements, backed by science",
      about: [
        "Earth Elixir is a US-made supplement brand selling science-backed workout and wellness formulas. GMP-certified, clean-ingredient, with premium sourcing across turkesterone, tongkat ali, shilajit, and more.",
        "They came to Reacher Plus after a previous agency called Orca burned through sample inventory chasing volume with no return.",
      ],
      challengeTitle: "Volume without vetting",
      challengeParagraphs: [
        "Earth Elixir's previous agency ran one strategy: blast as many samples as possible to as many creators as possible. There was no vetting, no fit check, no approval logic.",
        "The result was product flowing out the door to creators who weren't right for the brand, content that didn't convert, and spend that didn't come back as GMV.",
      ],
      challengeQuote:
        "Sample blasts. No vetting. Product flowed out faster than GMV came in, and there was no playbook to change it.",
      solutionIntro:
        "Given a blank check by the Earth Elixir founder, Reacher Plus rebuilt the entire sampling strategy around ROI, not volume.",
      solutions: [
        { title: "Niche targeting", body: "Broad blasts swapped for tight, intentional outreach. Every creator is picked for fit, audience overlap, and conversion likelihood before a sample ever ships." },
        { title: "Competitor targeting", body: "Reacher goes directly after creators already promoting adjacent supplement brands, so outreach lands with audiences primed to convert and creators already inside the category." },
        { title: "Selective approvals", body: "Every sample approval is deliberate. Reacher is picky and choosy, so product only flows to creators with a credible shot at driving GMV. Spend shrinks, return climbs." },
        { title: "Activation playbooks", body: "Retainers for top affiliates, extra earning opportunities per stage, and reactivation pushes to win back creators who drifted. Capital-friendly by design, ROI-first by default." },
      ],
      solutionQuote:
        "One lever to four. Orca ran volume. Reacher layered in targeting, approvals, activation, and reactivation.",
      resultParagraphs: [
        "Earth Elixir's creator program is still evolving. Reacher is actively testing retainers, new earning opportunities, and reactivation tactics that Orca never tried. The foundation has shifted from volume-first to strategy-first, and every new test gets measured against GMV, not sample count.",
      ],
      wins: [
        { stat: "Every sample approval now deliberate", note: "calculated for ROI before product ships" },
        { stat: "Competitor-first targeting", note: "pulling proven creators from adjacent supplement brands" },
        { stat: "New activation playbooks running", note: "retainers, extra earning tiers, reactivation pushes" },
        { stat: "Founder confirmed the approach is working", note: "with ongoing testing against GMV metrics" },
      ],
      charts: [
        {
          type: "comparison",
          title: "From volume hope to ROI math",
          badge: "+4 new gates",
          gateLabel: "ROI GATE",
          retiredLabel: "Retired",
          retired: ["Sample count", "Gross approvals", "Opportunistic outreach", "Volume milestones"],
          activeLabel: "ROI-First",
          active: ["GMV projection per sample", "Creator-to-product fit", "Competitor overlap score", "Playbook match"],
          footer: "Intentional spend. Every approval scored against GMV — not sample count — before product ships.",
        },
        {
          type: "motions",
          title: "3 motions running",
          badge: "Live · testing vs. GMV",
          cards: [
            { title: "Retainers", body: "Lock in top affiliates with guaranteed, recurring pay — stabilizing the creators driving consistent GMV.", status: "Running", tag: "Top-tier cohort" },
            { title: "Per-stage earnings", body: "Bonuses at each funnel step — keeping creators active from post to purchase and beyond.", status: "Running", tag: "4 milestones" },
            { title: "Reactivation", body: "Win-back pushes to pull drifted creators back into posting with reset incentives.", status: "Running", tag: "Cohort-based" },
          ],
          footer: "Profitable returns. All three motions measured against GMV, not sample count. Founder-confirmed working.",
        },
      ],
      closingQuote:
        "Intentional spend. Profitable returns. Earth Elixir's creator program is now built on ROI math, not volume hope.",
      externalHref: "https://reacher-earth-elixir-internal.vercel.app",
    },
  },
  {
    slug: "clean-nutra",
    brand: "Clean Nutra",
    category: "Supplements",
    group: "Supplements",
    headline: "How Clean Nutra doubled sample requests in one week",
    tags: ["2× Sample Requests", "Fully Automated Flows", "BOGO Outreach"],
    image: "/reacher-assets/customers/clean-nutra.png?v=2",
    accent: "#2a9d8f",
    story: {
      subtitle:
        "Outreach was stagnant. Flows were manual. Reacher Plus stood up an automated creator funnel and doubled sample requests in the first week.",
      joined: "Joined Reacher Plus 2026",
      industry: "Supplements",
      productCategory: "Clean-label supplements, herbal formulas, and wellness drops",
      results: [
        { value: "1.86×", label: "Sample requests in week one" },
        { value: "520", label: "Sample requests sent, up from 280 baseline" },
        { value: "100%", label: "Campaign outreach automated, from fully manual" },
      ],
      aboutTitle: "Clean-label supplements, built for TikTok Shop",
      about: [
        "Clean Nutra (also known as Clean Nutraceuticals) is a supplement brand selling clean-label capsules, liquid drops, and targeted wellness formulas across TikTok Shop and Amazon. Their catalog spans creatine, cortisol support, berberine drops, detox formulas, and more.",
        "They came to Reacher Plus with a stagnant affiliate program. Outreach was inconsistent, TC invites weren't going out, and their GMV had flattened.",
      ],
      challengeTitle: "A stagnant funnel, manual outreach",
      challengeParagraphs: [
        "Clean Nutra wasn't leaning into target collaborations. TC invites weren't going out at any real volume. Content was unfulfilled. From inside the Reacher platform, the account looked stagnant, and their GMV was flat.",
        "What outreach did exist was manual. Every campaign call-out, every new launch announcement, was being sent one at a time, which meant outreach volume was capped by whoever had time that week.",
      ],
      challengeQuote:
        "Stagnant account. Flat GMV. TC invites weren't going out, campaign messaging was manual, and content fulfillment was lagging.",
      solutionIntro:
        "Reacher Plus took over outreach from day one, built automated nurturing flows, and started scaling sample request volume week over week.",
      solutions: [
        { title: "Consistent outreach", body: "Reacher ramped TC outreach immediately, built BOGO messaging into the sequence, and scaled sample request volume week over week." },
        { title: "Automated campaigns", body: "Every sample creator now auto-receives campaign messaging on entry. New campaigns get blasted to existing creators first, then drop into evergreen flows for any new creator arriving." },
        { title: "Custom nurturing flows", body: "Reacher built out a three-week content fulfillment timestamp, custom to Clean Nutra's needs, with monthly campaign collab updates and automated messaging at every funnel stage." },
        { title: "Retainer restructure", body: "Instead of one $26K payout to a single top creator, Reacher is testing mid-tier creator retainers with specific performance goals, testing whether the mid-tier beats the top on ROI." },
      ],
      solutionQuote:
        "280 to 520 in week one. Consistent outreach replaced stagnation before any of the deeper flows compounded.",
      resultParagraphs: [
        "Two weeks into the engagement, Clean Nutra has a working creator funnel instead of a stagnant one. Sample requests doubled in the first week, campaign messaging runs itself, and the retainer strategy is being restructured to stop overspending on a handful of top creators.",
      ],
      wins: [
        { stat: "2× sample requests", note: "in the first week, 280 to 520" },
        { stat: "Fully automated campaign outreach", note: "previously all manual" },
        { stat: "Custom nurturing flows", note: "with a 3-week content fulfillment timestamp" },
        { stat: "Retainer restructure in test", note: "targeting better ROI from mid-tier creators" },
      ],
      charts: [
        {
          type: "line",
          title: "Doubled in one week",
          badge: "+2× · +240 requests",
          points: [
            { x: "Day 1", y: 50 },
            { x: "Day 2", y: 110 },
            { x: "Day 3", y: 175 },
            { x: "Day 4", y: 280 },
            { x: "Day 5", y: 360 },
            { x: "Day 6", y: 440 },
            { x: "Day 7", y: 520 },
          ],
          baseline: 280,
          baselineLabel: "Prior week · 280 total",
        },
        {
          type: "timeline",
          title: "Campaign runs itself",
          badge: "6 touchpoints",
          steps: [
            { day: "D1", label: "Sample auto-ships" },
            { day: "D3", label: "Arrival DM" },
            { day: "D7", label: "Content draft reminder" },
            { day: "D14", label: "Post checkpoint" },
            { day: "D17", label: "GMV review pull" },
            { day: "D21", label: "Fulfillment deadline" },
          ],
        },
      ],
      closingQuote:
        "Two weeks. One real funnel. Automated outreach, consistent messaging, and measurable sample-request growth from day one.",
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
    image: "/reacher-assets/customers/infuse.png?v=2",
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
    headline: "How Momofuku runs a creator program built around earned media, not just GMV",
    tags: ["2.4× Sample Requests", "2× Videos Posted", "EMV-First Strategy"],
    image: "/reacher-assets/customers/momofuku.png?v=2",
    accent: "#e9b949",
    story: {
      subtitle:
        "Momofuku measures success in impressions and video views per sample, not GMV. Reacher Plus customized outreach, reporting, and cohort analysis around their CPM-based goals.",
      joined: "Joined Reacher January 2026",
      industry: "Food & Pantry",
      productCategory: "Chili oils, seasoned salts, air-dried noodles, pantry staples from chef David Chang",
      results: [
        { value: "2.4×", label: "Sample requests month over month (458 to 1,100)" },
        { value: "2×", label: "Videos posted month over month" },
        { value: "EMV", label: "Custom reporting impressions and CPM" },
      ],
      aboutTitle: "Chef David Chang's pantry, in your kitchen",
      about: [
        "Momofuku Goods is the pantry arm of chef David Chang's restaurant group, selling chili oils, seasoned salts, and air-dried noodles built with the same ingredients used in Momofuku restaurants. Featured in The New York Times, The TODAY Show, Hypebeast, and across Chang's Netflix work.",
        "Momofuku came to Reacher Plus running a lean internal team. They wanted to manage their affiliate program themselves but quickly hit capacity limits on building automations and handling day-to-day outreach.",
      ],
      challengeTitle: "A lean team and a KPI that doesn't fit templates",
      challengeParagraphs: [
        "Momofuku runs a small team with a lot of agency relationships. They wanted to manage their affiliate program internally, but quickly hit capacity limits on building automations, structuring outreach, and handling the day-to-day work of keeping creators active.",
        "On top of the bandwidth gap, Momofuku's success metrics aren't GMV. They measure earned media value and cost-per-mille, looking at impressions and video views per sample sent. A standard affiliate playbook optimized for GMV wouldn't have worked for them.",
      ],
      challengeQuote:
        "GMV isn't the goal. Momofuku measures earned media value and CPM per sample. The program had to be built around that.",
      solutionIntro:
        "Reacher Plus took over affiliate outreach from day one, then customized every part of the program around Momofuku's earned media value focus, from creator targeting to reporting format.",
      solutions: [
        { title: "High-reach targeting", body: "Custom outreach targeting high-follower and high-video-view creators specifically, because earned media value scales with impressions. The goal isn't just GMV conversion, it's reach per sample." },
        { title: "Custom EMV reporting", body: "Purpose-built reporting around impressions, video views, and CPM per sample sent. Momofuku sees exactly what earned media value they're getting for every piece of product shipped." },
        { title: "Cohort analysis", body: "Monthly cohort reports breaking down every creator activated, videos posted, and views generated. Lets Momofuku see if reactivation efforts are actually improving performance within cohorts over time." },
        { title: "Campaign-driven allocation", body: "Strategy pivots based on upcoming campaigns. For the April viral recipe challenge, Reacher shifted 150 samples into Chili Crunch because it consistently outperforms, instead of splitting evenly across products." },
      ],
      solutionQuote:
        "150 samples reallocated to Chili Crunch. Strategy pivots based on campaigns, product performance, and earned media goals, not fixed splits.",
      resultParagraphs: [
        "Reacher Plus took Momofuku's creator program from a capacity-limited internal build to a tailored operation that measures what Momofuku actually cares about: earned media value, impressions, and CPM per sample. Sample request volume more than doubled in the first full month, video output doubled, and the targeting logic shifted to prioritize high-reach creators who drive EMV, not just GMV conversion.",
      ],
      wins: [
        { stat: "2.4× sample requests month over month", note: "458 in February to 1,100 in March" },
        { stat: "100% more videos posted", note: "in March vs. prior month" },
        { stat: "Custom EMV and CPM reporting", note: "built around Momofuku's specific KPIs" },
        { stat: "Monthly cohort analysis", note: "creator activation, videos, view generation over time" },
        { stat: "150 samples reallocated to Chili Crunch", note: "ahead of April viral recipe campaign" },
      ],
      charts: [
        {
          type: "comparison",
          title: "First full month under Reacher Plus",
          badge: "+1,274 samples · 2× videos",
          retiredLabel: "Sample requests · February",
          retired: ["458 sample requests", "Flat, even product splits", "Generic GMV dashboard"],
          activeLabel: "Sample requests · March",
          active: ["1,100 sample requests (2.4×)", "Targeting shifted to EMV-driving creators", "Video output doubled (2×)"],
          gateLabel: "EMV-first",
          footer: "First full month. Targeting shifted to EMV-driving creators — volume AND reach both up.",
        },
        {
          type: "motions",
          title: "Custom reporting · Momofuku-specific KPIs",
          badge: "EMV-first, not GMV",
          cards: [
            { title: "$284K EMV", body: "Total brand value generated across the active creator roster. 3.2× vs. February.", status: "March", tag: "↑ 3.2× vs Feb" },
            { title: "$12.40 CPM", body: "Cost per mille per sample, down 18% — lower cost for every thousand impressions earned.", status: "Per sample", tag: "↓ 18% lower cost" },
            { title: "47.2M impressions", body: "Total impressions across posted videos, up 214% month over month. 640K reach per creator on average.", status: "March", tag: "↑ +214% MoM" },
          ],
          footer: "Custom strategy, custom metrics. Reporting built around what Momofuku actually measures — not a generic GMV dashboard.",
        },
      ],
      closingQuote:
        "Custom strategy, custom metrics. Everything from outreach targeting to reporting format is built around Momofuku's EMV-first KPIs, not a generic playbook.",
      externalHref: "https://reacher-momofuku-internal.vercel.app",
    },
  },
  {
    slug: "medicube",
    brand: "Medicube",
    category: "Enterprise Beauty",
    group: "Beauty",
    headline: "How Medicube ran a 4,436-video campaign in 28 days",
    tags: ["75.3% Shipped-to-Posted", "4,436 Videos / 28 Days", "$57.47M Program GMV"],
    image: "/reacher-assets/customers/medicube.png?v=2",
    accent: "#ff5a7a",
    story: {
      subtitle:
        "An enterprise beauty brand needed to process a campaign-scale surge of creator demand — and prove every sample shipped turned into posted content. Reacher became the operating layer from request to attribution.",
      joined: "Joined Reacher 2025",
      industry: "Beauty (enterprise)",
      productCategory: "Skincare and beauty devices",
      results: [
        { value: "75.3%", label: "Shipped-to-posted rate" },
        { value: "4,436", label: "Videos posted in 28 days" },
        { value: "$57.47M", label: "Total program GMV" },
      ],
      aboutTitle: "A campaign moment at enterprise scale",
      about: [
        "Medicube is an enterprise beauty brand running one of the largest creator programs on TikTok Shop, spanning the US and UK. Its program has driven $57.47M in total GMV — $42.64M in the US and $14.83M in the UK — across 134,038 live sessions and 2.30M items sold.",
        "When Medicube launched a campaign moment, it created a surge of creator demand that had to be processed fast — every approval, shipment, and posted video tracked end to end.",
      ],
      challengeTitle: "Massive demand, measured to the post",
      challengeParagraphs: [
        "A campaign surge generated 43,373 sample requests in a single window. Medicube needed to approve qualified creators, ship to them, and then prove that the samples actually converted into posted content — not just sit in inboxes.",
        "At enterprise volume, the hard part isn't generating interest. It's operating the request-to-post pipeline cleanly enough that you can attribute content back to the samples that earned it.",
      ],
      challengeQuote:
        "75.3% shipped-to-posted is the operational metric TikTok Shop teams actually watch — proof that supply turned into content, not waste.",
      solutionIntro:
        "Reacher became the operating layer for the campaign: approving creators, triggering shipments, and matching every posted video back to the sample that drove it.",
      solutions: [
        { title: "Sample request queue", body: "Qualified creators approved through Reacher's request queue at campaign speed, filtering 43,373 requests down to the 5,888 highest-intent creators worth shipping to." },
        { title: "Shipment triggering", body: "Approved creators moved straight to fulfilment, so the gap between approval and product-in-hand stayed short during the 28-day surge." },
        { title: "Posted-video matching", body: "Every posted video matched back to its shipped sample, producing a 75.3% shipped-to-posted rate — the operational signal that supply converted into content." },
        { title: "GMV attribution", body: "Content connected to GMV across the US and UK programs, tying the campaign's 4,436 videos to revenue rather than leaving it as unattributed reach." },
      ],
      resultParagraphs: [
        "In 28 days, Medicube turned a campaign surge into 4,436 posted videos at a 75.3% shipped-to-posted rate, generating $202K in campaign GMV on top of a $57.47M program. Reacher gave the team a single operating layer to process demand, ship at scale, and prove content was earned — the kind of operational visibility enterprise TikTok Shop programs are built on.",
      ],
      wins: [
        { stat: "75.3% shipped-to-posted rate", note: "the metric enterprise TikTok Shop teams watch" },
        { stat: "4,436 videos in 28 days", note: "from 5,888 shipped samples" },
        { stat: "$57.47M total program GMV", note: "$42.64M US · $14.83M UK" },
        { stat: "2.30M items sold", note: "across 134,038 live sessions" },
      ],
      charts: [
        {
          type: "bar",
          title: "Request → ship → post",
          badge: "75.3% shipped-to-posted",
          bars: [
            { label: "Requests", value: 43373, display: "43,373" },
            { label: "Shipped", value: 5888, display: "5,888" },
            { label: "Posted", value: 4436, display: "4,436", highlight: true },
          ],
        },
        {
          type: "bar",
          title: "Program GMV by market",
          badge: "$57.47M total",
          bars: [
            { label: "US", value: 42.64, display: "$42.64M", highlight: true },
            { label: "UK", value: 14.83, display: "$14.83M" },
          ],
        },
      ],
      closingQuote:
        "One operating layer took a campaign moment from 43,373 requests to 4,436 attributed videos in under a month.",
      externalHref: "https://gtm46casestudiesvercel.vercel.app",
    },
  },
  {
    slug: "social-commerce-club",
    brand: "Social Commerce Club",
    category: "Agency · Featuring Portland Leather Goods",
    group: "Agencies",
    headline: "How Social Commerce Club found a small-to-scale story inside an 84-shop portfolio",
    tags: ["$2.3K → $1.76M GMV", "84 Connected Shops", "$178 GMV / Sample"],
    image: "/reacher-assets/customers/social-commerce-club.png?v=2",
    accent: "#d98a3d",
    story: {
      subtitle:
        "When you run 84 shops, the wins are real but hard to tell. Reacher let Social Commerce Club pull one brand's growth story out of the portfolio and make it portable proof for every prospect.",
      joined: "Joined Reacher 2025",
      industry: "Agency · multi-brand (apparel, accessories, beauty)",
      productCategory: "84-shop TikTok Shop portfolio",
      results: [
        { value: "$1.76M", label: "Peak monthly GMV (from $2.3K)" },
        { value: "84", label: "Connected shops" },
        { value: "$178", label: "GMV per shipped sample" },
      ],
      aboutTitle: "Eighty-four shops, one story to tell",
      about: [
        "Social Commerce Club is an agency operator running an 84-shop TikTok Shop portfolio — from HEYDUDE ($40.68M GMV) and Hanes ($9.67M) to Portland Leather Goods and Shapermint. Its top shop alone has driven $60.95M in GMV across 456,312 videos.",
        "The challenge with portfolio scale isn't performance — it's communication. Aggregate numbers are impressive but abstract. Prospects want to see a single brand's journey, start to finish.",
      ],
      challengeTitle: "Portfolio wins that prospects could believe",
      challengeParagraphs: [
        "Managing 84 brands made the agency's wins hard to communicate. A new prospect can't relate to a blended portfolio number — they want to see a brand that started small and scaled, with the sample-and-creator mechanics laid bare.",
        "Social Commerce Club needed portable proof: one brand's growth narrative, fully attributed, that could travel into every sales conversation.",
      ],
      challengeQuote:
        "One brand makes the whole portfolio believable — a small-to-scale story prospects can actually picture themselves in.",
      solutionIntro:
        "Reacher tied the agency's shops into a single connected account set, then surfaced Portland Leather Goods as the proof brand — attaching every creator, sample, video, and view to its growth curve.",
      solutions: [
        { title: "Connected account set", body: "All 84 shops tied to the agency in one view, so portfolio-level and brand-level performance live in the same place instead of scattered across logins." },
        { title: "Proof-brand surfacing", body: "Portland Leather Goods surfaced as the small-to-scale story: $2,292 in monthly GMV in November 2025 climbing to a $1,757,334 peak." },
        { title: "Full attribution stack", body: "Creator, sample, video, and view data attached to the growth curve — 6,435 creators, 25,381 sample requests, 10,818 shipped, 33,150 videos, 77,491 live sessions." },
        { title: "Portable growth story", body: "A clean, attributed narrative the agency can drop into any prospect conversation — $1.92M sample-attributed GMV at $178 per shipped sample." },
      ],
      resultParagraphs: [
        "Portland Leather Goods grew from $2,292 to a $1.76M monthly-GMV peak, generating $1.92M in sample-attributed GMV at $178 per shipped sample and a 42.6% ship rate. Reacher turned that into portable proof — a single brand's journey, fully attributed, that makes the entire 84-shop portfolio believable to the next prospect.",
      ],
      wins: [
        { stat: "$2.3K → $1.76M monthly GMV", note: "Portland Leather Goods, from Nov 2025" },
        { stat: "$1.92M sample-attributed GMV", note: "at $178 per shipped sample" },
        { stat: "42.6% ship rate", note: "10,818 shipped of 25,381 requests" },
        { stat: "84 connected shops", note: "top shop at $60.95M GMV" },
      ],
      charts: [
        {
          type: "line",
          title: "Portland Leather Goods monthly GMV",
          badge: "$2.3K → $1.76M",
          points: [
            { x: "Nov", y: 0.002 },
            { x: "Dec", y: 0.4 },
            { x: "Jan", y: 0.95 },
            { x: "Feb", y: 1.76 },
          ],
        },
        {
          type: "bar",
          title: "Portfolio brands by GMV",
          badge: "84 shops connected",
          bars: [
            { label: "HEYDUDE", value: 40.68, display: "$40.68M", highlight: true },
            { label: "Hanes", value: 9.67, display: "$9.67M" },
            { label: "Portland", value: 4.24, display: "$4.24M" },
            { label: "Shapermint", value: 2.34, display: "$2.34M" },
          ],
        },
      ],
      closingQuote:
        "The portfolio was always winning. Reacher made one brand's story portable enough to prove it.",
      externalHref: "https://gtm46casestudiesvercel.vercel.app",
    },
  },
  {
    slug: "favored",
    brand: "Favored",
    category: "Agency · Portfolio Scale",
    group: "Agencies",
    headline: "How Favored turned 47 shops into a ranked operating view",
    tags: ["$76.36M Portfolio GMV", "47 Connected Shops", "810,993 Videos"],
    image: "/reacher-assets/customers/favored.png?v=3",
    accent: "#8b6bff",
    story: {
      subtitle:
        "At portfolio scale, the question isn't how each brand is doing — it's which lever each brand needs next. Reacher ranked 47 shops into one operating view so Favored could pull the right lever, brand by brand.",
      joined: "Joined Reacher 2025",
      industry: "Agency · multi-category (beauty, apparel)",
      productCategory: "47-shop TikTok Shop portfolio",
      noProductStrip: true,
      results: [
        { value: "$76.36M", label: "Summed portfolio GMV" },
        { value: "47", label: "Connected shops" },
        { value: "$5.29M", label: "Sample-attributed GMV" },
      ],
      aboutTitle: "A portfolio that needed a control panel",
      about: [
        "Favored is a multi-category agency running 47 connected TikTok Shops spanning beauty and apparel — Phlur ($14.53M GMV), Maybelline ($12.49M), L'Oréal Paris USA ($8.96M), GAP ($8.44M), and Elf ($7.89M) among them. Together the portfolio has driven $76.36M in GMV, 810,993 videos, 1.36M live sessions, and 4.52M items sold.",
        "At that scale, every brand is a different machine. Some win on revenue efficiency, others on content volume. Running them all the same way leaves performance on the table.",
      ],
      challengeTitle: "Which brand needs which lever?",
      challengeParagraphs: [
        "With 47 shops, Favored needed visibility into which operational lever each brand actually required — more creator volume, more samples, or a sharper live-commerce focus. Without a ranked view, every brand gets the same generic playbook.",
        "The brands prove the point: GAP turned samples into $1.76M of attributed GMV (revenue-efficient), while Elf ran 202,934 videos (content-volume). Same portfolio, opposite motions.",
      ],
      challengeQuote:
        "Different brands need different playbooks — the job is seeing, at a glance, which lever moves which brand.",
      solutionIntro:
        "Reacher ranked every brand across the metrics that matter, separating the revenue-efficient brands from the content-volume brands so Favored could choose the right lever for each.",
      solutions: [
        { title: "Ranked portfolio view", body: "Each of the 47 brands ranked by GMV, videos, live sessions, shipped samples, and sample-attributed revenue — one operating view instead of 47 dashboards." },
        { title: "Playbook separation", body: "Revenue-efficient brands (GAP: $1.76M sample-attributed GMV) cleanly separated from content-volume brands (Elf: 202,934 videos), so the right motion is obvious per brand." },
        { title: "Lever selection", body: "With brands ranked side by side, Favored can decide where to push volume, where to push samples, and where to lean into live commerce — brand by brand." },
        { title: "Client reporting & retention", body: "The ranked view doubles as client-facing proof, turning operational clarity into retention with every brand in the portfolio." },
      ],
      resultParagraphs: [
        "Favored turned a 47-shop portfolio into a single ranked operating view across $76.36M in GMV and $5.29M in sample-attributed revenue. Instead of one generic playbook, the agency can now see which brand needs volume, which needs samples, and which needs live-commerce focus — and prove it to clients in the same view.",
      ],
      wins: [
        { stat: "$76.36M summed portfolio GMV", note: "across 47 connected shops" },
        { stat: "$5.29M sample-attributed GMV", note: "GAP alone at $1.76M" },
        { stat: "810,993 videos", note: "Elf leading at 202,934" },
        { stat: "4.52M items sold", note: "across 1.36M live sessions" },
      ],
      charts: [
        {
          type: "brands",
          title: "Portfolio proof by recognizable brands",
          badge: "Top portfolio shops",
          items: [
            { name: "Phlur", gmv: "$14.53M GMV", image: "/reacher-assets/customers/portfolio/phlur.jpg" },
            { name: "Maybelline", gmv: "$12.49M GMV", image: "/reacher-assets/customers/portfolio/maybelline.jpg" },
            { name: "L'Oreal Paris USA", gmv: "$8.96M GMV", image: "/reacher-assets/customers/portfolio/loreal.jpg" },
            { name: "GAP", gmv: "$8.44M GMV", image: "/reacher-assets/customers/portfolio/gap.jpg" },
            { name: "Elf", gmv: "$7.89M GMV", image: "/reacher-assets/customers/portfolio/elf.jpg" },
            { name: "NYX Cosmetics", gmv: "$6.52M GMV", image: "/reacher-assets/customers/portfolio/nyx.jpg" },
            { name: "Bio Ionic", gmv: "$3.79M GMV", image: "/reacher-assets/customers/portfolio/bio-ionic.jpg" },
            { name: "Persona", gmv: "$3.53M GMV" },
            { name: "Kopari", gmv: "$2.85M GMV" },
          ],
        },
        {
          type: "motions",
          title: "Different brands, different levers",
          badge: "Ranked per brand",
          cards: [
            { title: "Revenue-efficient", body: "GAP converts samples into revenue — $1.76M sample-attributed GMV from just 39,230 videos. The lever here is samples, not volume.", status: "GAP", tag: "$1.76M sample GMV" },
            { title: "Content-volume", body: "Elf wins on sheer output — 202,934 videos driving $7.89M GMV. The lever here is creator volume and always-on reach.", status: "Elf", tag: "202,934 videos" },
            { title: "Live-commerce focus", body: "Maybelline pairs scale with live — 162,520 videos and $12.49M GMV. The lever here is leaning into live sessions.", status: "Maybelline", tag: "$12.49M GMV" },
          ],
          footer: "Different brands need different playbooks. The ranked view makes the right motion obvious per brand.",
        },
      ],
      closingQuote:
        "47 shops, one ranked view — so every brand gets the lever it actually needs, not a generic playbook.",
      externalHref: "https://gtm46casestudiesvercel.vercel.app",
    },
  },
];

export const customerGroups = ["Beauty", "Supplements", "Health & Wellness", "Food & Pantry", "Agencies"] as const;
