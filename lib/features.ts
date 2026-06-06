import {
  Search,
  TrendingUp,
  Send,
  Radar,
  Sparkles,
  Building2,
  Users,
  Package,
  RefreshCw,
  MessageCircle,
  HeartHandshake,
  Rocket,
  LayoutDashboard,
  Receipt,
  Bot,
  Plug,
  Code,
  Target,
  Radio,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Feature = {
  slug: string;
  name: string;
  Icon: LucideIcon;
  navBlurb: string;
  positioning: string;
  oneLiner: string;
  primaryQuery: string;
  whoFor: string;
  value: string;
  capabilities: string[];
  /** product screenshot, e.g. /reacher-assets/features/<slug>.png */
  image?: string;
  /** optional second showcase image with its own heading (no steps) */
  showcase?: { heading: string; image: string };
  /** optional CTA shown under the hero image (e.g. open a connector) */
  heroCta?: { label: string; href: string };
};

export type NavGroup = { label: string; slugs: string[] };

/** Mega-menu structure (a feature can appear in more than one group). */
export const featureNavGroups: NavGroup[] = [
  { label: "Find & Reach", slugs: ["creator-discovery", "social-intelligence", "automated-outreach"] },
  { label: "Intelligence & Content", slugs: ["halo-effect", "creative-intelligence", "brand-intelligence"] },
  { label: "Manage & Grow", slugs: ["creator-crm", "sample-management", "re-engage"] },
  { label: "Scale & Activation", slugs: ["creator-community", "gmv-max", "ai-chatbot"] },
  { label: "Analysis & Reporting", slugs: ["dashboard", "pnl"] },
  { label: "AI & Automation", slugs: ["reacher-agent", "mcp", "api"] },
];

export const features: Feature[] = [
  {
    slug: "creator-discovery",
    name: "AI Creator Search",
    Icon: Search,
    navBlurb: "Describe a creator; AI ranks the database.",
    positioning: "AI Creator Search for TikTok Shop Brands",
    oneLiner: "Describe your ideal creator and let AI rank the database.",
    primaryQuery: "tiktok shop creator discovery",
    image: "/reacher-assets/features/creator-discovery.png",
    whoFor: "Brand and agency teams who need to source the right TikTok Shop creators fast.",
    value:
      "Describe the creator you want in plain English, and Reacher ranks the whole database by GMV, engagement, and post rate — then saves your shortlist into outreach.",
    capabilities: [
      "Natural-language search across a multi-million creator database",
      "Ranks creators by GMV, engagement, and post rate",
      "Filter by category, GMV, post rate, and demographics",
      "Save results to lists that feed outreach automations",
    ],
  },
  {
    slug: "social-intelligence",
    name: "Social Intelligence",
    Icon: TrendingUp,
    navBlurb: "Benchmark brands, creators & videos by GMV.",
    positioning: "TikTok Shop Social Intelligence for Affiliate Growth",
    oneLiner: "Benchmark every brand, creator, and video on TikTok Shop by GMV.",
    primaryQuery: "tiktok shop competitor intelligence",
    image: "/reacher-assets/features/social-intelligence.png",
    whoFor: "Brands that want to benchmark competitors and find high-GMV creators and content.",
    value:
      "Search, filter, and benchmark every brand, creator, and video on TikTok Shop by all-time and 28-day GMV — then save targets and launch automations from the results.",
    capabilities: [
      "All-time and 28-day GMV per brand, creator, and video",
      "AI search across the brand and creator universe",
      "Save targets and create automations from results",
      "Surfaces what makes top videos convert",
    ],
  },
  {
    slug: "automated-outreach",
    name: "Outreach Automation",
    Icon: Send,
    navBlurb: "DMs, Target Collab, email & follow-ups.",
    positioning: "TikTok Shop Affiliate Outreach Automation",
    oneLiner: "Recruit thousands of creators a day across DM, collab, and email.",
    primaryQuery: "tiktok shop affiliate outreach",
    image: "/reacher-assets/features/automated-outreach.png",
    whoFor: "Brands running affiliate recruitment at scale.",
    value:
      "Recruit across DM, Target Collab, and email with personalized sequences and smart follow-ups that only chase non-responders — all auto-throttled to platform limits.",
    capabilities: [
      "Native Target Collab, Open Collab, and DM sequences",
      "Email automations backed by a creator-email database",
      "High-volume sending auto-throttled to platform limits",
      "Personalized sequences with names, images, and bonuses",
      "Follow-ups that only re-contact non-responders",
    ],
  },
  {
    slug: "halo-effect",
    name: "Halo Effect",
    Icon: Radar,
    navBlurb: "Measure organic sales lift from creators.",
    positioning: "TikTok Shop Halo Effect & Cross-Channel Attribution",
    oneLiner: "Measure how TikTok content lifts Amazon, Shopify & retail sales.",
    primaryQuery: "tiktok shop halo effect",
    image: "/reacher-assets/features/halo-effect.png",
    whoFor: "Brand leaders who need to prove the full impact of TikTok content beyond in-app GMV.",
    value:
      "Correlate TikTok views with sales on Amazon, Shopify, and retail, with a configurable lag for delayed conversions — so cross-channel ROI is finally provable.",
    capabilities: [
      "TikTok views vs Amazon, Shopify, and retail sales",
      "Configurable lag adjustment for delayed sales",
      "Base sales and incremental revenue",
      "Relationship-strength metrics",
      "Cross-channel performance reporting",
    ],
  },
  {
    slug: "creative-intelligence",
    name: "Creative Intelligence",
    Icon: Sparkles,
    navBlurb: "AI creative briefs from top videos.",
    positioning: "AI Creative Intelligence for TikTok Shop Creators",
    oneLiner: "Turn your top videos into ready-to-share creative briefs.",
    primaryQuery: "tiktok shop creative briefs",
    image: "/reacher-assets/features/creative-intelligence.png",
    whoFor: "Brand teams who want to turn winning content into repeatable creator briefs.",
    value:
      "Reacher studies your top affiliate videos and extracts the selling points, angle, audience, shot styles, and techniques — then pushes briefs to creators weekly.",
    capabilities: [
      "Identifies what the top ~10% of affiliates do",
      "Extracts selling points, angle, and audience",
      "Breaks down shot styles, lighting, and techniques",
      "Push weekly creative breakdowns via Discord",
    ],
  },
  {
    slug: "brand-intelligence",
    name: "Brand Intelligence",
    Icon: Building2,
    navBlurb: "Profile competitor brands & their creators.",
    positioning: "TikTok Shop Brand Intelligence & Competitor Tracking",
    oneLiner: "Profile any brand's GMV, top products, and creators.",
    primaryQuery: "tiktok shop brand intelligence",
    image: "/reacher-assets/features/brand-intelligence-dashboard.png",
    whoFor: "Brands that want to track competitors and recruit their best-performing creators.",
    value:
      "Build a full profile of any brand on TikTok Shop — GMV trends, top products, and the creators behind their growth — then one-click target those creators.",
    capabilities: [
      "Full brand profiles with GMV trends",
      "Top products and best-selling videos per brand",
      "See which creators drive a competitor's GMV",
      "One-click target competitor creators",
      "Save brands and creators to lists",
    ],
  },
  {
    slug: "creator-crm",
    name: "Creator CRM",
    Icon: Users,
    navBlurb: "Statuses, messages, samples & GMV in one place.",
    positioning: "Creator CRM for TikTok Shop Affiliate Teams",
    oneLiner: "Track every creator's status, samples, and GMV in one CRM.",
    primaryQuery: "tiktok shop creator crm",
    image: "/reacher-assets/features/creator-crm.png",
    whoFor: "Affiliate operations teams managing large creator rosters.",
    value:
      "Track every creator's status, products, tags, samples, and GMV in one CRM, with a unified inbox that spans all handles and lets you send briefs inline.",
    capabilities: [
      "Every creator with handle, products, status, tags, and GMV",
      "Filters, columns, and bulk CSV for ops teams",
      "Unified Creator Messages inbox across handles",
      "Filter by Unread, Unreplied, tags, products, GMV",
      "Send briefs and retrieve Spark Codes inline",
    ],
  },
  {
    slug: "sample-management",
    name: "Sample Request",
    Icon: Package,
    navBlurb: "One queue for sample approvals & shipping.",
    positioning: "TikTok Shop Sample Management for Creator Outreach",
    oneLiner: "Run sample requests as one queue, from pending to posted.",
    primaryQuery: "tiktok shop sample tracking",
    image: "/reacher-assets/features/sample-management.png",
    whoFor: "Ops teams processing high volumes of creator sample requests.",
    value:
      "Run every sample request as one queue, with completion and expiring-soon flags, and auto-approval agents that clear low-risk requests by profile, post rate, and GMV.",
    capabilities: [
      "One queue across every sample stage",
      "Auto-approval by Ideal Creator Profile, post rate, and GMV",
      "Content completion and expiring-soon flags",
      "Tracks every approval, ship, and post",
      "Funnels into CRM and re-engage automations",
    ],
  },
  {
    slug: "re-engage",
    name: "Re-engage",
    Icon: RefreshCw,
    navBlurb: "Win back creators who stalled.",
    positioning: "TikTok Shop Creator Re-engagement Automation",
    oneLiner: "Automatically win back creators who stalled or never replied.",
    primaryQuery: "tiktok shop re-engage creators",
    image: "/reacher-assets/features/re-engage.png",
    whoFor: "Brands that want to recover dormant creators without manual chasing.",
    value:
      "Automatically win back creators who stalled — non-responders, lapsed posters, and unaccepted invites. Set the triggers and Reacher handles the follow-up nudges.",
    capabilities: [
      "Target lapsed posters and non-responders",
      "Automated, sequenced follow-up nudges",
      "Trigger on funnel stage and activity",
      "Reuse CRM tags and segments",
      "Live status on every re-engage run",
    ],
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot",
    Icon: MessageCircle,
    navBlurb: "Auto-reply to creators in your brand voice.",
    positioning: "AI Chatbot for TikTok Shop Affiliate Messages",
    oneLiner: "Auto-reply to inbound creator messages in your brand voice.",
    primaryQuery: "tiktok shop ai chatbot",
    image: "/reacher-assets/features/ai-chatbot.png",
    whoFor: "Brands whose inbound creator volume is too high to answer by hand.",
    value:
      "Answer inbound creator messages — sample requests, questions, negotiations — in a voice you configure to your brand, around the clock, so creators never wait.",
    capabilities: [
      "Auto-responds to inbound creator messages",
      "Configurable to your brand voice and rules",
      "Handles sample requests and common questions",
      "Works 24/7 across your handles",
      "Hands off to a human when needed",
    ],
  },
  {
    slug: "creator-community",
    name: "Creator Community",
    Icon: HeartHandshake,
    navBlurb: "Run your community via Discord.",
    positioning: "Creator Community for TikTok Shop Affiliate Programs",
    oneLiner: "Run your creator community natively through Discord.",
    primaryQuery: "tiktok shop creator community",
    image: "/reacher-assets/features/creator-community.png",
    whoFor: "Brands that manage their creator community and want to operate it from one place.",
    value:
      "Run your creator community through Discord: message creators from the portal, send to channels, auto-invite top performers, and trigger payouts on GMV thresholds.",
    capabilities: [
      "Message creators directly from the portal",
      "Link your own Discord server and channels",
      "Auto-invite top creators to your community",
      "Push notifications and creative analysis to Discord",
      "Automated campaign payouts on GMV thresholds",
    ],
  },
  {
    slug: "gmv-max",
    name: "GMV Max",
    Icon: Rocket,
    navBlurb: "Automate spark codes & ad budget.",
    positioning: "GMV Max for TikTok Shop Affiliate Ads",
    oneLiner: "Automate Spark Codes and ad budget for your best content.",
    primaryQuery: "tiktok shop gmv max",
    image: "/reacher-assets/features/gmv-max.png",
    whoFor: "Brands that want to amplify winning creator content with paid budget.",
    value:
      "Automatically retrieve Spark Codes and allocate ad budget so your highest-performing affiliate videos get amplified. Set the rules and scale what's working.",
    capabilities: [
      "Automated Spark Code retrieval",
      "Ad-budget automation for top content",
      "Amplify highest-GMV affiliate videos",
      "Rule-based scaling",
      "Tracks GMV lift from paid amplification",
    ],
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    Icon: LayoutDashboard,
    navBlurb: "All affiliate metrics & GMV in one view.",
    positioning: "TikTok Shop Affiliate Analytics Dashboard",
    oneLiner: "Every affiliate metric, GMV, and top creator on one screen.",
    primaryQuery: "tiktok shop affiliate analytics",
    image: "/reacher-assets/features/dashboard.png",
    whoFor: "Brand leaders and analysts who need a single source of truth for affiliate performance.",
    value:
      "Roll up affiliate GMV, views, per-video and per-sample efficiency, active creators, and top content on one screen — with goals and scheduled reports.",
    capabilities: [
      "Total GMV, views, GMV per video and per sample",
      "Top creators, videos, and products — exportable",
      "Active creators and videos posted with sparklines",
      "Full-funnel counts synced regularly",
      "Goals and daily, weekly, or monthly reports",
    ],
  },
  {
    slug: "pnl",
    name: "P&L",
    Icon: Receipt,
    navBlurb: "See true affiliate program profitability.",
    positioning: "TikTok Shop Affiliate P&L and Profitability",
    oneLiner: "See true affiliate profit — GMV against every cost.",
    primaryQuery: "tiktok shop affiliate profitability",
    image: "/reacher-assets/features/pnl.png",
    whoFor: "Finance and growth leads who need program-level P&L, not just GMV.",
    value:
      "Net affiliate GMV against commissions, sample costs, and ad spend to see real margin, not just top-line — broken down by creator, campaign, and product.",
    capabilities: [
      "GMV netted against commissions, samples, and ad spend",
      "Profit and margin by creator, campaign, and product",
      "Cost-per-sample and cost-per-acquisition views",
      "Spot unprofitable creators and campaigns",
      "Export P&L for finance",
    ],
  },
  {
    slug: "reacher-agent",
    name: "Reacher Agent",
    Icon: Bot,
    navBlurb: "Ask anything about your program.",
    positioning: "Reacher AI Agent for Affiliate Operations",
    oneLiner: "Ask anything about your creators, competitors, and GMV.",
    primaryQuery: "reacher ai agent",
    image: "/reacher-assets/features/reacher-agent.png",
    showcase: { heading: "From one prompt to a full report", image: "/reacher-assets/features/reacher-agent-report.png" },
    whoFor: "Teams that want answers and actions in natural language instead of clicking through dashboards.",
    value:
      "Ask performance questions in plain English, get tables you can save, and let the agent take action across your program. Your affiliate data, as a conversation.",
    capabilities: [
      "Ask performance questions in natural language",
      "Generates and saves data tables",
      "Surfaces creators, competitors, and GMV insights",
      "Takes actions across your program",
      "Always-on AI copilot for affiliate ops",
    ],
  },
  {
    slug: "mcp",
    name: "MCP",
    Icon: Plug,
    navBlurb: "Connect Reacher to your AI tools.",
    positioning: "Reacher MCP Server for AI Workflows",
    oneLiner: "Connect Reacher to Claude, Cursor, and any MCP client.",
    primaryQuery: "reacher mcp server",
    image: "/reacher-assets/features/mcp.png",
    heroCta: { label: "Open Claude.ai Connectors", href: "https://claude.ai/settings/connectors" },
    whoFor: "Technical teams that want their AI tools to read and act on Reacher data.",
    value:
      "Expose your creators, GMV, and automations to any MCP client, so AI tools like Claude and Cursor can query and act on your program directly — with scoped access.",
    capabilities: [
      "Model Context Protocol (MCP) server",
      "Works with Claude, Cursor, and MCP clients",
      "Query creators, GMV, and automations",
      "Let AI tools take actions in Reacher",
      "Secure, scoped access",
    ],
  },
  {
    slug: "api",
    name: "API",
    Icon: Code,
    navBlurb: "Build on Reacher's affiliate data.",
    positioning: "Reacher API for TikTok Shop Affiliate Data",
    oneLiner: "Build on Reacher's creator and GMV data via API.",
    primaryQuery: "reacher api",
    image: "/reacher-assets/features/api.png",
    whoFor: "Engineering teams integrating Reacher into their own stack.",
    value:
      "Give your engineers programmatic access to creators, GMV, samples, and automations — so you can sync data and trigger workflows from your own systems.",
    capabilities: [
      "Programmatic access to creators and GMV",
      "Trigger and manage automations via API",
      "Sync data to your warehouse or BI",
      "Webhooks for real-time events",
      "Documented, developer-friendly endpoints",
    ],
  },
];

export type Step = { title: string; desc: string; image?: string; points?: string[]; label?: string };

export const featureSteps: Record<string, Step[]> = {
  "creator-discovery": [
    {
      title: "Search any way you want",
      desc: "By profile, transcript, video, or lookalike — describe creators however you think.",
      image: "/reacher-assets/features/creator-discovery-lookalike.png",
      points: ["Natural-language search across a multi-million creator database"],
    },
    {
      title: "Filter on what matters",
      desc: "Narrow by GMV, category, performance, audience, and more.",
      image: "/reacher-assets/features/creator-discovery-filters.png",
      points: ["Filter by category, GMV, post rate, and demographics"],
    },
    {
      title: "Browse ranked results",
      desc: "Every creator scored by GMV, engagement, and post rate.",
      image: "/reacher-assets/features/creator-discovery-list.png",
      points: ["Ranks creators by GMV, engagement, and post rate", "Save results to lists that feed outreach automations"],
    },
  ],
  "social-intelligence": [
    { title: "Benchmark by GMV", desc: "Rank every brand and product by all-time and 28-day GMV.", image: "/reacher-assets/features/social-intelligence-products.png" },
    { title: "Find a brand's creators", desc: "Open any brand to see the creators driving its GMV.", image: "/reacher-assets/features/social-intelligence-brand-creators.png" },
    { title: "Decode viral videos", desc: "See the hooks, selling points, and content angle behind top videos.", image: "/reacher-assets/features/social-intelligence-trending.png" },
  ],
  "automated-outreach": [
    { title: "Build your list", desc: "Add creators three ways — filter the database, pick a CRM group, or upload a saved list.", image: "/reacher-assets/features/automated-outreach-list.png" },
    { title: "Personalize the message", desc: "AI-tuned DMs and collab invites with product cards, bonuses & dynamic fields — previewed in the creator's inbox.", image: "/reacher-assets/features/automated-outreach-sequence.png" },
    { title: "Track every send", desc: "Reacher sends at scale and follows up automatically — watch status, GMV, and post rate per creator in the live tracker.", image: "/reacher-assets/features/automated-outreach-step3.png" },
  ],
  "creative-intelligence": [
    { title: "Scan top videos", desc: "Reacher analyzes every video from your creator collabs, ranked by GMV and engagement.", image: "/reacher-assets/features/creative-intelligence-content.png" },
    { title: "Extract the formula", desc: "Get the hook type, selling points, shot styles, and lighting behind each winner.", image: "/reacher-assets/features/creative-intelligence-video.png" },
    { title: "Turn it into a brief", desc: "Generate polished image briefs — hooks, selling points, and content ideas — ready to share with creators.", image: "/reacher-assets/features/creative-intelligence-brief.png" },
  ],
  "brand-intelligence": [
    { label: "Dashboard", title: "Explore it yourself", desc: "A self-serve dashboard: how your roster is sourced across AI Creator Search and Social Intelligence, commission-rate distribution, and pre-scoped recommended lists.", image: "/reacher-assets/features/brand-intelligence-sourcing.png", points: [] },
    { label: "AI Agent", title: "Or ask the AI agent", desc: "An agent profiles competitors, finds the creators driving their GMV, and drafts outreach — automatically.", image: "/reacher-assets/features/brand-intelligence-agent.png", points: [] },
  ],
  "creator-crm": [
    { title: "Sync your roster", desc: "Every creator, status, sample, and GMV in one place." },
    { title: "Segment & tag", desc: "Filter by activity, products, and performance." },
    { title: "Act from the inbox", desc: "Reply to every creator's DMs in one inbox — unread, unreplied, filtered by tag, product, and GMV — without leaving Reacher.", image: "/reacher-assets/features/creator-crm-inbox.png" },
  ],
  "sample-management": [
    { title: "Set quotas & ideal profiles", desc: "Cap monthly samples per product and save reusable Ideal Creator Profiles to filter the queue.", image: "/reacher-assets/features/sample-management-config.png" },
    { title: "Auto-approve or deny by rule", desc: "Set min GMV, engagement, followers, and post rate — or always approve from your lists and CSVs.", image: "/reacher-assets/features/sample-management-autoapprove.png" },
    { title: "Track to content", desc: "Follow each sample from shipped to posted." },
  ],
  "re-engage": [
    { title: "Spot the drop-off", desc: "Find lapsed posters and non-responders." },
    { title: "Build groups by funnel stage", desc: "Group creators by status — sample requested, content pending, posted — with templates and conditions, so each segment gets the right nudge.", image: "/reacher-assets/features/re-engage-group.png" },
    { title: "Win them back", desc: "Automated nudges move them back into action." },
  ],
  "creator-community": [
    { label: "Tracking", title: "Track every campaign in real time", desc: "ROCS, GMV generated, payouts, and a live creator leaderboard — approve payouts and ping creators on Discord without leaving Reacher.", image: "/reacher-assets/features/creator-community-tracking.png", points: [] },
  ],
  "gmv-max": [
    { title: "Spot winning content", desc: "Find your highest-GMV affiliate videos." },
    { title: "Pull Spark Codes", desc: "Reacher retrieves codes automatically." },
    { title: "Scale with budget", desc: "Automate ad spend to amplify what works." },
  ],
};

export type FeatureCard = { title: string; desc: string; stat?: string; image?: string; icon?: LucideIcon; example?: string };

/** 3-card grid (used instead of the alternating steps for some features). */
export const featureCards: Record<string, FeatureCard[]> = {
  "halo-effect": [
    { title: "Amazon", desc: "See how TikTok views translate into Amazon orders, with a configurable attribution lag.", stat: "+14%", image: "/reacher-assets/features/logos/amazon.png" },
    { title: "Shopify", desc: "Correlate TikTok content with Shopify revenue and measure incremental sales.", stat: "+9%", image: "/reacher-assets/features/logos/shopify.png" },
  ],
  "creator-community": [
    { icon: RefreshCw, title: "Retainer", desc: "Fixed pay per creator with optional GMV bonus tiers — consistent, quality content on a schedule.", example: "20 posts for $1,000/mo + $250 bonus at $5K GMV" },
    { icon: Target, title: "Challenge", desc: "Tier-based payouts when creators hit GMV, views, or video-count milestones.", example: "$10K+ GMV → $100 · $20K+ → $200" },
    { icon: Radio, title: "LIVE Challenge", desc: "Reward GMV generated during TikTok LIVE streams with tiered live milestones.", example: "$10K+ live GMV → $250 · $20K+ → $500" },
    { icon: Trophy, title: "Leaderboard", desc: "Competitive campaigns where top creators win ranked prizes by GMV, views, or videos.", example: "1st $500 · 2nd $300 · 3rd $100" },
  ],
};

export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}

export function groupLabelForSlug(slug: string): string | undefined {
  return featureNavGroups.find((g) => g.slugs.includes(slug))?.label;
}

export function relatedFeatures(slug: string): Feature[] {
  const group = featureNavGroups.find((g) => g.slugs.includes(slug));
  if (!group) return [];
  return group.slugs
    .filter((s) => s !== slug)
    .map((s) => getFeature(s))
    .filter((f): f is Feature => Boolean(f));
}
