import { Search, Send, TrendingUp, Sparkles, Users, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  name: string;
  blurb: string;
  /** Bare anchor id of the section on the homepage. */
  anchor: string;
  Icon: LucideIcon;
};

export type FeatureGroup = {
  label: string;
  items: readonly FeatureItem[];
};

export const featureGroups: readonly FeatureGroup[] = [
  {
    label: "Find & activate",
    items: [
      {
        name: "AI Creator Discovery",
        blurb: "Describe your ideal creator — AI matches by real video content.",
        anchor: "creator-discovery",
        Icon: Search,
      },
      {
        name: "Automated Outreach",
        blurb: "DMs, collab invites, email & sample requests at scale.",
        anchor: "automated-outreach",
        Icon: Send,
      },
    ],
  },
  {
    label: "Turn data into action",
    items: [
      {
        name: "Social Intelligence",
        blurb: "Track top brands, products & videos — then target competitors.",
        anchor: "social-intelligence",
        Icon: TrendingUp,
      },
      {
        name: "Creative Agent",
        blurb: "Turn your best-performing videos into ready-to-share briefs.",
        anchor: "creative-agent",
        Icon: Sparkles,
      },
    ],
  },
  {
    label: "Manage & grow",
    items: [
      {
        name: "CRM",
        blurb: "Every creator's status, messages, samples & GMV in one place.",
        anchor: "crm",
        Icon: Users,
      },
      {
        name: "Campaigns",
        blurb: "Retainers, challenges & contests that keep creators posting.",
        anchor: "campaigns",
        Icon: Megaphone,
      },
    ],
  },
];

export const featureItems: readonly FeatureItem[] = featureGroups.flatMap((group) => group.items);
