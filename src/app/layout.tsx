import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mail, Phone } from "lucide-react";
import "./globals.css";
import { BrandLogo } from "./BrandLogo";
import { site } from "./site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axis IB | MYP, AI SL/HL, AA SL/HL | #1 Rated IB Math Tuition",
  description:
    "Top-rated IB Maths tutor offering expert online tuition for MYP Maths, AI SL/HL, AA SL/HL and IA guidance.",
  icons: {
    icon: "/favicon.svg",
  },
};

const navItems = [
  { href: "/ib-myp-maths/", label: "MYP" },
  { href: "/ib-math-ai-sl/", label: "AI SL" },
  { href: "/ib-math-ai-hl/", label: "AI HL" },
  { href: "/ib-math-aa-sl/", label: "AA SL" },
  { href: "/ib-math-aa-hl/", label: "AA HL" },
  { href: "/ib-math-ia/", label: "IA Guidance" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#f7f4ee] text-[#172033]`}>
        <header className="sticky top-0 z-50 border-b border-[#e8e1d6] bg-white/92 backdrop-blur">
          <div className="container mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4">
            <BrandLogo />

            <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-[#3b4657] transition-colors hover:text-[#0f5b78]">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-4 text-xs font-semibold text-[#3b4657] xl:flex">
              <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-[#0f5b78]">
                <Phone className="h-3.5 w-3.5" />
                {site.phoneLabel}
              </a>
              <a href={site.emailHref} className="flex items-center gap-1.5 transition-colors hover:text-[#0f5b78]">
                <Mail className="h-3.5 w-3.5" />
                {site.email}
              </a>
            </div>

            <a
              href={site.bookingHref}
              className="rounded-lg bg-[#0f5b78] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0b4358]"
            >
              Free Trial
            </a>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-[#203044] bg-[#111827] py-14 text-slate-300">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
            <div>
              <div className="mb-4">
                <BrandLogo tone="dark" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Specialist IB Maths tuition for MYP, AI, AA, and Internal Assessment support across global time zones.
              </p>
            </div>

            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Syllabus Pillars</div>
              <ul className="space-y-3 text-sm">
                <li><a href="/ib-myp-maths/" className="hover:text-white">IB MYP Maths</a></li>
                <li><a href="/ib-math-ai-sl/" className="hover:text-white">IB Math AISL</a></li>
                <li><a href="/ib-math-ai-hl/" className="hover:text-white">IB Math AIHL</a></li>
                <li><a href="/ib-math-aa-sl/" className="hover:text-white">IB Math AASL</a></li>
                <li><a href="/ib-math-aa-hl/" className="hover:text-white">IB Math AAHL</a></li>
              </ul>
            </div>

            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Top Tutor Regions</div>
              <ul className="space-y-3 text-sm">
                <li><a href="/ib-myp-maths-tutor-india/" className="hover:text-white">India</a></li>
                <li><a href="/ib-myp-maths-tutor-dubai/" className="hover:text-white">Dubai, UAE</a></li>
                <li><a href="/ib-myp-maths-tutor-singapore-city/" className="hover:text-white">Singapore City</a></li>
                <li><a href="/ib-myp-maths-tutor-london/" className="hover:text-white">London, UK</a></li>
                <li><a href="/ib-myp-maths-tutor-new-york/" className="hover:text-white">New York, US</a></li>
              </ul>
            </div>

            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</div>
              <ul className="space-y-3 text-sm">
                <li><a href={site.phoneHref} className="hover:text-white">{site.phoneLabel}</a></li>
                <li><a href={site.emailHref} className="hover:text-white">{site.email}</a></li>
                <li><a href={site.bookingHref} className="hover:text-white">Book a free trial session</a></li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-slate-500">
            (c) {new Date().getFullYear()} {site.brandName}. All rights reserved. We are not officially affiliated with
            the International Baccalaureate Organization.
          </div>
        </footer>
      </body>
    </html>
  );
}
