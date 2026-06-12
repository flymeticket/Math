import { site } from "./site";

type BrandTone = "light" | "dark";

interface BrandLogoProps {
  tone?: BrandTone;
}

interface BrandMarkProps {
  tone?: BrandTone;
}

export function BrandMark({ tone = "light" }: BrandMarkProps) {
  const dark = tone === "dark";

  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg border ${
        dark ? "border-white/15 bg-white/[0.08]" : "border-[#d8ccbc] bg-[#f7f4ee]"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
        <rect x="5.5" y="5.5" width="37" height="37" rx="9" fill={dark ? "#f7f4ee" : "#ffffff"} />
        <path
          d="M13 16.6c5.2-.9 9 .3 11 3.4v14.1c-2.1-2.9-5.8-4.2-11-3.8V16.6Z"
          fill="#eaf4f6"
          stroke="#0f5b78"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M35 16.6c-5.2-.9-9 .3-11 3.4v14.1c2.1-2.9 5.8-4.2 11-3.8V16.6Z"
          fill="#fff7df"
          stroke="#0f5b78"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M24 19.7v14.2" stroke="#0f5b78" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M16.2 28.8c3.2-5.9 6.3-6.5 9.3-2 2.1 3 4.5 2.4 7.3-1.7"
          stroke="#f5b84b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M17 34.5h14" stroke="#172033" strokeWidth="2" strokeLinecap="round" opacity="0.86" />
        <circle cx="33" cy="25" r="1.6" fill="#172033" />
      </svg>
    </span>
  );
}

export function BrandLogo({ tone = "light" }: BrandLogoProps) {
  const dark = tone === "dark";

  return (
    <a
      href="/"
      className={`flex items-center gap-3 ${dark ? "text-white" : "text-[#172033]"}`}
      aria-label={`${site.brandName} home`}
    >
      <BrandMark tone={tone} />
      <span className="block whitespace-nowrap text-base font-extrabold tracking-tight">{site.brandName}</span>
    </a>
  );
}
