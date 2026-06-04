import {
  Search,
  Send,
  HeartHandshake,
  TrendingUp,
  ChartPie,
  Clapperboard,
  Users,
  ShoppingBag,
  Rocket,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  name: string;
  blurb: string;
  /** Bare anchor id of the closest section on the homepage. */
  anchor: string;
  Icon: LucideIcon;
};

export type FeatureGroup = {
  label: string;
  items: readonly FeatureItem[];
};

export const featureGroups: readonly FeatureGroup[] = [
  {
    label: "Find & reach creators",
    items: [
      {
        name: "AI Creator Search",
        blurb: "Describe your ideal creator — AI matches by real video content.",
        anchor: "creator-discovery",
        Icon: Search,
      },
      {
        name: "Outreach Automations",
        blurb: "DMs, collab invites, email, re-engage & AI chatbot at scale.",
        anchor: "automated-outreach",
        Icon: Send,
      },
      {
        name: "Creator Community",
        blurb: "Run campaigns, payments & content with your own community.",
        anchor: "campaigns",
        Icon: HeartHandshake,
      },
    ],
  },
  {
    label: "Intelligence & content",
    items: [
      {
        name: "Social Intelligence",
        blurb: "Track top brands, products & videos — benchmark competitors.",
        anchor: "social-intelligence",
        Icon: TrendingUp,
      },
      {
        name: "Halo Effect",
        blurb: "Measure the organic sales lift driven by creator content.",
        anchor: "social-intelligence",
        Icon: ChartPie,
      },
      {
        name: "Content & Creative Agent",
        blurb: "Manage videos & lives; auto-generate ready-to-share briefs.",
        anchor: "creative-agent",
        Icon: Clapperboard,
      },
    ],
  },
  {
    label: "Manage & grow",
    items: [
      {
        name: "Creator CRM",
        blurb: "Every creator's status, messages, samples & GMV in one place.",
        anchor: "crm",
        Icon: Users,
      },
      {
        name: "Buyer Engagement",
        blurb: "Re-engage buyers with order-based outreach & automations.",
        anchor: "automated-outreach",
        Icon: ShoppingBag,
      },
      {
        name: "GMV Max",
        blurb: "Automate spark codes & ad budget to maximize GMV.",
        anchor: "campaigns",
        Icon: Rocket,
      },
      {
        name: "Analytics Dashboard",
        blurb: "All your affiliate metrics, halo effect & GMV in one view.",
        anchor: "social-intelligence",
        Icon: LayoutDashboard,
      },
    ],
  },
];

export const featureItems: readonly FeatureItem[] = featureGroups.flatMap((group) => group.items);
