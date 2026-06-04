import type { LucideIcon } from "lucide-react";
import { features, featureNavGroups, getFeature } from "@/lib/features";

export type FeatureItem = {
  name: string;
  blurb: string;
  /** full path to the feature page */
  href: string;
  Icon: LucideIcon;
};

export type FeatureGroup = {
  label: string;
  items: readonly FeatureItem[];
};

const toItem = (slug: string): FeatureItem => {
  const f = getFeature(slug)!;
  return { name: f.name, blurb: f.navBlurb, href: `/features/${f.slug}`, Icon: f.Icon };
};

export const featureGroups: readonly FeatureGroup[] = featureNavGroups.map((group) => ({
  label: group.label,
  items: group.slugs.map(toItem),
}));

/** flat, de-duplicated list (each feature once) — used by the mobile menu */
export const featureItems: readonly FeatureItem[] = features.map((f) => toItem(f.slug));
