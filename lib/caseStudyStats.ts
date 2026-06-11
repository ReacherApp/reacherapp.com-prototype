import type { CustomerStory } from "@/lib/customers";

export type Stat = { value: string; label: string };

/** Build a richer stat grid from results + the leading numbers in wins. */
export function deriveStats(story: CustomerStory, max = 6): Stat[] {
  const out: Stat[] = story.results.map((r) => ({ value: r.value, label: r.label }));
  const lead = /^([£$]?[\d.,]+\s?[KMB%×xX+]*)\s+(.+)$/;
  for (const w of story.wins) {
    const m = w.stat.match(lead);
    if (m) out.push({ value: m[1].trim(), label: m[2].trim() });
  }
  const seen = new Set<string>();
  return out
    .filter((s) => {
      const k = s.value.replace(/\s/g, "").toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, max);
}

/** First sentence of a paragraph (decimal-safe), for terse slide copy. */
export function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s+[A-Z"$(]|$)/);
  return (m ? m[0] : text).trim();
}

/** Product strip image paths for a slug, when the story has them. */
export function productImages(slug: string, story: CustomerStory): string[] {
  if (story.noProductStrip) return [];
  return [1, 2, 3].map((n) => `/reacher-assets/customers/products/${slug}-${n}.jpg`);
}
