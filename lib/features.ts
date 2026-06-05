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
      "Reacher's AI Creator Search lets you describe the creator you want in plain English and ranks the database against GMV, engagement, and post-rate signals. Results save to lists that pipe straight into outreach automations.",
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
      "Social Intelligence lets you search, filter, and benchmark every brand on TikTok Shop by all-time and 28-day GMV, then save targets and launch automations directly from results. It also breaks down the techniques behind top-performing videos.",
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
      "Outreach Automation handles recruitment across DM, Target Collab, and email, with follow-ups that only chase non-responders and live status on every run. Sequences personalize names, images, and bonus structures automatically.",
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
    whoFor: "Brand leaders who need to prove the full impact of TikTok content beyond in-app GMV.",
    value:
      "The Halo Effect view correlates TikTok views with sales on Amazon, Shopify, and retail, using a configurable lag adjustment to attribute delayed conversions. See base sales, incremental revenue, and relationship strength so cross-channel ROI is provable.",
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
    whoFor: "Brand teams who want to turn winning content into repeatable creator briefs.",
    value:
      "Creative Intelligence recognizes what the top 10% of affiliates do and extracts the selling points, angle, audience, shot styles, lighting, and demonstration techniques behind it. Breakdowns push to creators weekly via Discord.",
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
    whoFor: "Brands that want to track competitors and recruit their best-performing creators.",
    value:
      "Brand Intelligence builds a full profile of any brand on TikTok Shop — GMV trends, top products, and the creators behind their growth. One-click target those creators with outreach automations.",
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
    whoFor: "Affiliate operations teams managing large creator rosters.",
    value:
      "The Creator CRM tracks every creator with handles, products, status, tags, and GMV, with bulk CSV and filters built for ops. A unified inbox spans all handles and lets you send briefs and pull Spark Codes inline.",
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
    whoFor: "Ops teams processing high volumes of creator sample requests.",
    value:
      "Sample Request consolidates every stage into one queue with content-completion and expiring-soon flags inline. Auto-approval agents clear low-risk requests by Ideal Creator Profile, post rate, and GMV.",
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
    whoFor: "Brands that want to recover dormant creators without manual chasing.",
    value:
      "Re-engage automations move creators through your funnel by following up with those who stalled — non-responders, lapsed posters, or unaccepted invites. Set the triggers and Reacher handles the nudges.",
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
    whoFor: "Brands whose inbound creator volume is too high to answer by hand.",
    value:
      "The AI Chatbot answers inbound affiliate messages — sample requests, questions, negotiations — in a voice you configure to your brand. It works around the clock so creators never wait.",
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
    whoFor: "Brands that manage their creator community and want to operate it from one place.",
    value:
      "Reacher runs your creator community through Discord: link your own server, message creators from the portal, send to channels, and auto-invite top performers. Campaign payouts auto-trigger on GMV thresholds.",
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
    whoFor: "Brands that want to amplify winning creator content with paid budget.",
    value:
      "GMV Max automates Spark Code retrieval and ad-budget allocation so your highest-performing affiliate videos get amplified automatically. Set the rules and let the system scale what's working.",
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
    whoFor: "Brand leaders and analysts who need a single source of truth for affiliate performance.",
    value:
      "The Dashboard rolls up affiliate GMV, views, GMV per video and per sample, active creators, and videos posted with sparklines and full-funnel counts. Set goals and export top creators, videos, and products.",
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
    whoFor: "Finance and growth leads who need program-level P&L, not just GMV.",
    value:
      "The P&L view nets affiliate GMV against commissions, sample costs, and ad spend so you see real margin, not just top-line GMV. Break profitability down by creator, campaign, and product.",
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
    whoFor: "Teams that want answers and actions in natural language instead of clicking through dashboards.",
    value:
      "The Reacher Agent answers performance questions in plain English, builds tables you can save, and can take actions across your program. It turns your affiliate data into a conversation.",
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
    whoFor: "Technical teams that want their AI tools to read and act on Reacher data.",
    value:
      "The Reacher MCP server exposes your creators, GMV, and automations to any Model Context Protocol client, so AI tools like Claude and Cursor can query and act on your program directly.",
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
    whoFor: "Engineering teams integrating Reacher into their own stack.",
    value:
      "The Reacher API gives your engineers programmatic access to creators, GMV, samples, and automations, so you can sync data and trigger workflows from your own systems.",
    capabilities: [
      "Programmatic access to creators and GMV",
      "Trigger and manage automations via API",
      "Sync data to your warehouse or BI",
      "Webhooks for real-time events",
      "Documented, developer-friendly endpoints",
    ],
  },
];

export type Step = { title: string; desc: string; image?: string; points?: string[] };

export const featureSteps: Record<string, [Step, Step, Step]> = {
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
    { title: "Build your list", desc: "Pull creators from search or your CRM." },
    { title: "Personalize the message", desc: "AI-tuned DMs and collab invites with product cards, bonuses & dynamic fields — previewed in the creator's inbox.", image: "/reacher-assets/features/automated-outreach-sequence.png" },
    { title: "Let it run", desc: "Reacher sends at scale and follows up automatically." },
  ],
  "halo-effect": [
    { title: "Connect your channels", desc: "Link Amazon, Shopify, and retail sales." },
    { title: "Set the lag window", desc: "Tune attribution for delayed conversions." },
    { title: "See the lift", desc: "Measure incremental revenue from TikTok content." },
  ],
  "creative-intelligence": [
    { title: "Scan top videos", desc: "Reacher analyzes your best-performing content." },
    { title: "Extract the formula", desc: "Get selling points, angles, and shot styles." },
    { title: "Brief your creators", desc: "Push ready-to-share briefs via Discord." },
  ],
  "brand-intelligence": [
    { title: "Pick a brand", desc: "Search any competitor on TikTok Shop." },
    { title: "See their engine", desc: "GMV trends, top products, and key creators." },
    { title: "Recruit their creators", desc: "One-click target them with outreach." },
  ],
  "creator-crm": [
    { title: "Sync your roster", desc: "Every creator, status, sample, and GMV in one place." },
    { title: "Segment & tag", desc: "Filter by activity, products, and performance." },
    { title: "Act from the inbox", desc: "Message, send briefs, and pull Spark Codes inline." },
  ],
  "sample-management": [
    { title: "Requests come in", desc: "Every sample request lands in one queue." },
    { title: "Auto-approve the rest", desc: "Agents clear low-risk requests by profile & GMV." },
    { title: "Track to content", desc: "Follow each sample from shipped to posted." },
  ],
  "re-engage": [
    { title: "Spot the drop-off", desc: "Find lapsed posters and non-responders." },
    { title: "Set the trigger", desc: "Choose funnel stage and inactivity rules." },
    { title: "Win them back", desc: "Automated nudges move them back into action." },
  ],
  "ai-chatbot": [
    { title: "Set your voice", desc: "Configure tone and rules for your brand." },
    { title: "Creators message you", desc: "Sample requests and questions roll in." },
    { title: "AI replies instantly", desc: "24/7 answers, with human handoff when needed." },
  ],
  "creator-community": [
    { title: "Link your Discord", desc: "Connect your server and channels." },
    { title: "Invite top creators", desc: "Auto-add your best performers." },
    { title: "Reward & retain", desc: "Run campaigns with automated payouts." },
  ],
  "gmv-max": [
    { title: "Spot winning content", desc: "Find your highest-GMV affiliate videos." },
    { title: "Pull Spark Codes", desc: "Reacher retrieves codes automatically." },
    { title: "Scale with budget", desc: "Automate ad spend to amplify what works." },
  ],
  dashboard: [
    { title: "Connect your shop", desc: "Reacher syncs affiliate performance." },
    { title: "See it on one screen", desc: "GMV, views, top creators, videos & products." },
    { title: "Set goals & report", desc: "Track targets with daily, weekly & monthly reports." },
  ],
  pnl: [
    { title: "Pull in the costs", desc: "Commissions, samples, and ad spend." },
    { title: "Net against GMV", desc: "See real margin, not just top-line." },
    { title: "Find what's profitable", desc: "Break P&L down by creator, campaign & product." },
  ],
  "reacher-agent": [
    { title: "Ask in plain English", desc: "Question your creators, competitors, and GMV." },
    { title: "Get answers & tables", desc: "The agent builds and saves data views." },
    { title: "Take action", desc: "Let it run tasks across your program." },
  ],
  mcp: [
    { title: "Connect your client", desc: "Point Claude, Cursor, or any MCP tool at Reacher." },
    { title: "Query your data", desc: "Read creators, GMV, and automations." },
    { title: "Let AI act", desc: "Trigger workflows with scoped, secure access." },
  ],
  api: [
    { title: "Get your keys", desc: "Authenticate with the Reacher API." },
    { title: "Pull the data", desc: "Access creators, GMV, samples & automations." },
    { title: "Build & automate", desc: "Sync to your stack and trigger workflows." },
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
