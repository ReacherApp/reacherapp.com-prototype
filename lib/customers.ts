export type CustomerCategory = "Brands" | "Agencies" | "Communities";

export type StorySection = {
  title: string;
  body: string[];
  quote?: { text: string; name: string; role: string };
};

export type StoryNumber = { label: string; before: string; after: string };

export type CustomerStory = {
  /** hero subheadline under the title */
  summary: string;
  /** "Results at a glance" metric cards */
  results: { value: string; label: string }[];
  sections: StorySection[];
  /** optional before → after table */
  numbers?: StoryNumber[];
};

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
  story?: CustomerStory;
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
    story: {
      summary:
        "How Flywheel Digital brought TikTok Shop affiliate management in-house and scaled to serve a growing roster of clients — without growing the team.",
      results: [
        { value: "+200%", label: "Videos posted" },
        { value: "+340%", label: "Video views" },
        { value: "+120%", label: "Active affiliates" },
        { value: "1 team", label: "Across every client" },
      ],
      sections: [
        {
          title: "The challenge",
          body: [
            "As a performance agency, Flywheel managed TikTok Shop affiliate programs for a growing list of brands. Every new client meant more manual outreach, more spreadsheets, and more creators slipping through the cracks.",
            "Scaling the old way meant hiring an affiliate manager for every account — a cost that didn't make sense as the client base grew.",
          ],
          quote: {
            text: "We were spending more time chasing creators than actually growing programs. It didn't scale.",
            name: "Molly O'Bryen",
            role: "Senior Director, Flywheel Digital",
          },
        },
        {
          title: "A new way of working",
          body: [
            "With Reacher, Flywheel brought the entire affiliate workflow in-house — outreach, follow-up, sampling, and tracking — into one automated system that runs across every client account.",
            "Instead of one manager per brand, a single team now operates dozens of programs from one place, with Reacher handling the repetitive outreach at scale.",
          ],
        },
        {
          title: "The transformation",
          body: [
            "Output more than doubled, video views climbed 340%, and the active affiliate base grew 120% — all without adding headcount per client.",
          ],
          quote: {
            text: "Their collaborative approach and commitment to understanding our business makes them vital to our ongoing success.",
            name: "Molly O'Bryen",
            role: "Senior Director, Flywheel Digital",
          },
        },
      ],
      numbers: [
        { label: "Videos posted", before: "Baseline", after: "+200%" },
        { label: "Video views", before: "Baseline", after: "+340%" },
        { label: "Active affiliates", before: "Baseline", after: "+120%" },
      ],
    },
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
    story: {
      summary:
        "How Goli Nutrition ran a 24-hour creator sprint that reached 20,000+ creators at nearly 50 messages a minute — and turned it into lasting momentum.",
      results: [
        { value: "20K+", label: "Creators reached in 24h" },
        { value: "~50/min", label: "Messages sent" },
        { value: "300K+", label: "Videos posted" },
        { value: "100M+", label: "Video views" },
      ],
      sections: [
        {
          title: "The challenge",
          body: [
            "Goli wanted to create a moment — a concentrated burst of creator activity that would flood TikTok Shop with content in a single day. Doing that manually was impossible: no team can message tens of thousands of creators in 24 hours.",
          ],
          quote: {
            text: "We needed reach and speed at the same time. Manually, that just isn't achievable.",
            name: "Davy Sanchez",
            role: "Content Strategist, Goli Nutrition",
          },
        },
        {
          title: "A new way of working",
          body: [
            "Reacher powered the sprint end to end — sending personalized invites to over 20,000 creators at nearly 50 messages a minute, then automatically following up with everyone who engaged.",
            "The campaign ran flawlessly, with the system handling the volume that would have taken a human team weeks.",
          ],
        },
        {
          title: "The transformation",
          body: [
            "The sprint seeded 300K+ videos and over 100M views, building an affiliate base of 30,000+ creators that kept producing well after the 24-hour window closed.",
          ],
          quote: {
            text: "The execution was flawless, the momentum unmatched.",
            name: "Davy Sanchez",
            role: "Content Strategist, Goli Nutrition",
          },
        },
      ],
      numbers: [
        { label: "Creators reached", before: "Hundreds (manual)", after: "20,000+ in 24h" },
        { label: "Videos posted", before: "—", after: "300K+" },
        { label: "Video views", before: "—", after: "100M+" },
        { label: "Affiliates", before: "—", after: "30,000+" },
      ],
    },
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
    story: {
      summary:
        "How Social Commerce Club partnered with a fast-moving team to lift videos posted, views, and active affiliates across their client programs.",
      results: [
        { value: "+45%", label: "Videos posted" },
        { value: "+60%", label: "Video views" },
        { value: "+120%", label: "Active affiliates" },
      ],
      sections: [
        {
          title: "The challenge",
          body: [
            "Social Commerce Club needed an affiliate platform that could keep pace with a fast-evolving TikTok Shop landscape — and a partner willing to build for their specific workflow rather than force them into a generic tool.",
          ],
        },
        {
          title: "A new way of working",
          body: [
            "Reacher's team moved quickly, shipping exactly what the agency needed and adapting as the market shifted. That responsiveness let Social Commerce Club run programs at a higher level without re-architecting their process every quarter.",
          ],
          quote: {
            text: "They move fast, listen to the market, and build exactly what's needed — always at a top-tier level.",
            name: "Jordan West",
            role: "CEO, Social Commerce Club",
          },
        },
        {
          title: "The transformation",
          body: [
            "Across client programs, videos posted rose 45%, views grew 60%, and the active affiliate base more than doubled.",
          ],
        },
      ],
      numbers: [
        { label: "Videos posted", before: "Baseline", after: "+45%" },
        { label: "Video views", before: "Baseline", after: "+60%" },
        { label: "Active affiliates", before: "Baseline", after: "+120%" },
      ],
    },
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
    story: {
      summary:
        "Why Social Commerce Collective chose Reacher for its responsive team and a feature set they couldn't find anywhere else.",
      results: [
        { value: "Same-day", label: "Support responses" },
        { value: "1 platform", label: "End-to-end workflow" },
        { value: "Unique", label: "Tools vs. alternatives" },
      ],
      sections: [
        {
          title: "The challenge",
          body: [
            "As a creator community, the Collective needed more than a messaging tool — they needed a partner that would respond quickly, help proactively, and offer capabilities that off-the-shelf platforms simply didn't have.",
          ],
        },
        {
          title: "A new way of working",
          body: [
            "Reacher became that partner — responsive on every question, flexible enough to jump on a call when needed, and proactive when issues came up. On top of the service, the platform shipped tools the Collective hadn't seen anywhere else.",
          ],
          quote: {
            text: "The platform has features and tools I haven't seen anywhere else, which has been a huge plus for us.",
            name: "Alex Linebaugh",
            role: "CEO, Social Commerce Collective",
          },
        },
        {
          title: "The transformation",
          body: [
            "The combination of a great team and a differentiated product made Reacher a core part of how the Collective operates.",
          ],
          quote: {
            text: "Overall, great team and great product.",
            name: "Alex Linebaugh",
            role: "CEO, Social Commerce Collective",
          },
        },
      ],
    },
  },
];

export const customerCategories: CustomerCategory[] = ["Brands", "Agencies", "Communities"];
