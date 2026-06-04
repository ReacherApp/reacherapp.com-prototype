import Link from "next/link";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[23px] w-[23px] fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.96 6.817H1.688l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.266 2.371 4.266 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.558V9h3.556v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.93-1.955 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[23px] w-[23px] fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .593.045.878.134V9.383A6.34 6.34 0 0 0 9.48 9.32a6.38 6.38 0 1 0 6.38 6.38V8.84a8.16 8.16 0 0 0 4.77 1.52V6.91a4.9 4.9 0 0 1-1.04-.22Z" />
    </svg>
  );
}

export function SocialIconLinks() {
  const links = [
    { href: "https://twitter.com/ReacherApp/", label: "Twitter/X", icon: <XIcon /> },
    { href: "https://www.linkedin.com/company/reacherapp", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://www.facebook.com/reacherapp", label: "Facebook", icon: <FacebookIcon /> },
    { href: "https://seller-us.tiktok.com/appstore/us/7382298357580007211", label: "TikTok App", icon: <TikTokIcon /> },
  ];

  return (
    <div className="flex items-center gap-6 text-[#d5e2ff]">
      {links.map((link) => (
        <Link key={link.label} href={link.href} className="flex h-6 w-6 items-center justify-center leading-none transition hover:text-white" aria-label={link.label}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
