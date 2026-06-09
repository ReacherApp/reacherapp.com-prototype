export type CustomerCategory = "Brands" | "Agencies" | "Communities";

export type Customer = {
  slug: string;
  brand: string;
  category: CustomerCategory;
  /** punchy one-line summary shown on cards (Hightouch-style headline) */
  headline: string;
  quote: string;
  stats: string[];
  name: string;
  role: string;
  image: string;
};

/** Customer stories — shared by the homepage testimonial carousel and /customers. */
export const customers: Customer[] = [
  {
    slug: "flywheel-digital",
    brand: "Flywheel Digital",
    category: "Agencies",
    headline: "Brought TikTok Shop affiliate management fully in-house and scaled across a growing client base.",
    quote:
      "Jerry and Bora are outstanding partners—responsive, innovative, and genuinely invested in our success. With Reacher, we've brought our TikTok Shop affiliate workflow in-house, efficiently scaling to serve a growing client base. Their collaborative approach and commitment to understanding our business needs makes them vital to our ongoing success.",
    stats: ["+200% Videos Posted", "+340% Video Views", "+120% Affiliates"],
    name: "Molly O'Bryen",
    role: "Senior Director",
    image:
      "https://framerusercontent.com/images/jjDew1lvN2vR8K2ah7l8eoS6p0.jpeg?scale-down-to=512&width=2048&height=2048",
  },
  {
    slug: "goli-nutrition",
    brand: "Goli Nutrition",
    category: "Brands",
    headline: "Reached 20,000+ creators in a 24-hour sprint at nearly 50 messages a minute.",
    quote:
      "Reacher powered our 24-hour sprint campaign, reaching over 20,000 creators with nearly 50 messages a minute. The execution was flawless, the momentum unmatched.",
    stats: ["300K+ Videos Posted", "100M+ Video Views", "30,000+ Affiliates"],
    name: "Davy Sanchez",
    role: "Content Strategist",
    image:
      "https://framerusercontent.com/images/0P3F4FlF4dPiZlvHHv6uciDv6ac.jpg?scale-down-to=512&width=2560&height=2560",
  },
  {
    slug: "social-commerce-club",
    brand: "Social Commerce Club",
    category: "Agencies",
    headline: "A masterclass in execution — fast-moving partners who build exactly what's needed.",
    quote:
      "Jerry and Bora are first-class founders. They move fast, listen to the market, and have the ability to build exactly what’s needed—always at a top-tier level. Working with them is a masterclass in execution and adaptability.",
    stats: ["+45% Videos Posted", "+60% Video Views", "+120% Affiliates"],
    name: "Jordan West",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/CKLvUKswOu4xwI2SCDELOFvkPI.jpeg?width=1040&height=1322",
  },
  {
    slug: "social-commerce-collective",
    brand: "Social Commerce Collective",
    category: "Communities",
    headline: "Tools and features they hadn't seen anywhere else, backed by a responsive team.",
    quote:
      "Working with the Reacher team has honestly been amazing. They’re super responsive and get back very quickly anytime we have a question. They’re also really proactive about helping when something comes up and are always flexible about jumping on a call if needed. On top of that, the platform has features and tools I haven’t seen anywhere else, which has been a huge plus for us. Overall, great team and great product.",
    stats: [],
    name: "Alex Linebaugh",
    role: "CEO",
    image:
      "https://framerusercontent.com/images/zjp83fCoe8M0BySXxxg9ttl6s6c.jpeg?width=400&height=400",
  },
];

export const customerCategories: CustomerCategory[] = ["Brands", "Agencies", "Communities"];
