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
        blurb: "AI matches creators by video content.",
        anchor: "creator-discovery",
        Icon: Search,
      },
      {
        name: "Outreach Automations",
        blurb: "DMs, invites, email & AI chatbot.",
        anchor: "automated-outreach",
        Icon: Send,
      },
      {
        name: "Creator Community",
        blurb: "Campaigns, payments & content in-house.",
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
        blurb: "Track top brands, products & videos.",
        anchor: "social-intelligence",
        Icon: TrendingUp,
      },
      {
        name: "Halo Effect",
        blurb: "Measure organic sales lift from content.",
        anchor: "social-intelligence",
        Icon: ChartPie,
      },
      {
        name: "Content & Creative Agent",
        blurb: "Manage content; auto-generate briefs.",
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
        blurb: "Status, samples & GMV in one place.",
        anchor: "crm",
        Icon: Users,
      },
      {
        name: "Buyer Engagement",
        blurb: "Re-engage buyers via order outreach.",
        anchor: "automated-outreach",
        Icon: ShoppingBag,
      },
      {
        name: "GMV Max",
        blurb: "Automate spark codes & ad budget.",
        anchor: "campaigns",
        Icon: Rocket,
      },
      {
        name: "Analytics Dashboard",
        blurb: "Metrics, halo & GMV in one view.",
        anchor: "social-intelligence",
        Icon: LayoutDashboard,
      },
    ],
  },
];

export const featureItems: readonly FeatureItem[] = featureGroups.flatMap((group) => group.items);
