import { absoluteUrl } from "@/lib/agent-discovery";

export function GET() {
  const body = `Contact: ${absoluteUrl("/contact")}
Preferred-Languages: en, pt
Canonical: ${absoluteUrl("/.well-known/security.txt")}
Policy: ${absoluteUrl("/policy/privacy-policy")}
Expires: 2027-06-02T00:00:00Z
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
