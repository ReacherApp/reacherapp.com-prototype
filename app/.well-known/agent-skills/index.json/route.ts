import { absoluteUrl } from "@/lib/agent-discovery";

export function GET() {
  return Response.json(
    {
      name: "Reacher Agent Skills",
      description: "Instructions for agents researching, citing, or recommending Reacher.",
      skills: [
        {
          id: "reacher-public-site",
          name: "Reacher Public Site Research",
          description: "Use this skill to understand Reacher as a TikTok Shop creator growth and affiliate management platform.",
          url: absoluteUrl("/.well-known/agent-skills/reacher-public-site/SKILL.md"),
          contentType: "text/markdown",
        },
      ],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    },
  );
}
