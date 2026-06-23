"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { site } from "./site";

const links = [
  { href: "/", label: "Home" },
  { href: "/ib-myp-maths/", label: "MYP Maths" },
  { href: "/myp-1-3/", label: "MYP 1-3, Grades 6 to 8", sub: true },
  { href: "/myp-4-5/", label: "MYP 4-5, Grades 9 to 10", sub: true },
  { href: "/myp-enrichment/", label: "MYP Enrichment Tier", sub: true },
  { href: "/ib-math-aa-sl/", label: "Math AA SL" },
  { href: "/ib-math-aa-hl/", label: "Math AA HL" },
  { href: "/ib-math-ai-sl/", label: "Math AI SL" },
  { href: "/ib-math-ai-hl/", label: "Math AI HL" },
  { href: "/ib-math-ia/", label: "IA Guidance" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-lg border border-[#d8ccbc] text-[#172033]"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] bg-black/40" onClick={() => setOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#a35c20]">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-lg border border-[#e8e1d6] text-[#172033]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-[#f0ece4] transition-colors hover:text-[#0f5b78] ${
                    link.sub
                      ? "py-2.5 pl-4 text-sm font-medium text-[#5d6673]"
                      : "py-3 text-base font-semibold text-[#172033]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={site.bookingHref}
              onClick={() => setOpen(false)}
              className="mt-6 rounded-xl bg-[#f5b84b] px-5 py-3 text-center text-sm font-extrabold text-[#172033]"
            >
              Book a free trial
            </a>

            <div className="mt-6 space-y-3 text-sm font-semibold text-[#465160]">
              <a href={site.phoneHref} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0f5b78]" />
                {site.phoneLabel}
              </a>
              <a href={site.emailHref} className="flex items-center gap-2 break-all">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
