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
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${dark ? "ring-1 ring-white/15" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
        <rect x="2.5" y="2.5" width="43" height="43" rx="12" fill="#0f5b78" />
        <path d="M24 12 L41 19.5 L24 27 L7 19.5 Z" fill="#ffffff" />
        <path
          d="M14.5 22.2 L24 26.4 L33.5 22.2 V29 C33.5 31.7 29.2 33.4 24 33.4 C18.8 33.4 14.5 31.7 14.5 29 Z"
          fill="#9fd0de"
        />
        <circle cx="24" cy="19.6" r="1.5" fill="#0f5b78" />
        <path d="M41 19.5 V27" stroke="#f5b84b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="41" cy="29" r="2.3" fill="#f5b84b" />
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
      <span className="hidden whitespace-nowrap text-base font-extrabold tracking-tight sm:block">{site.brandName}</span>
    </a>
  );
}
