import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Mail, MessageCircle, Phone } from "lucide-react";
import "./globals.css";
import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { getFooterLocations } from "./footer-locations";
import { site } from "./site";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  title: "IB Learners Academy | MYP, AA & AI Maths | Expert IB Tuition",
  description:
    "Top-rated IB Maths tutor offering expert online tuition for MYP Maths, AI SL/HL, AA SL/HL and IA guidance.",
  icons: {
    icon: "/favicon.svg",
  },
};

const mypMenuItems = [
  { href: "/ib-myp-maths/", label: "IB MYP Maths" },
  { href: "/myp-1-3/", label: "MYP 1-3, Grades 6 to 8" },
  { href: "/myp-4-5/", label: "MYP 4-5, Grades 9 to 10" },
  { href: "/myp-enrichment/", label: "MYP Enrichment Tier" },
];

const navItems = [
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
  const footerLocations = getFooterLocations();
  return (
    <html lang="en" className={`theme-v2 scroll-smooth ${outfit.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#f7f4ee] text-[#172033]`}>
        <header className="sticky top-0 z-50 border-b border-[#e8e1d6] bg-white/95 backdrop-blur">
          <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
            <BrandLogo />

            <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex">
              <NavDropdown label="MYP" items={mypMenuItems} />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[#3b4657] transition-colors hover:text-[#0f5b78]"
                >
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

            <div className="flex items-center gap-3">
              <a
                href={site.bookingHref}
                className="rounded-lg bg-[#0f5b78] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#0b4358] sm:px-5"
              >
                Free Trial
              </a>
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with IB Learners Academy on WhatsApp"
          className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_32px_-14px_rgba(18,140,126,0.85)] transition duration-200 hover:w-[178px] hover:justify-start hover:gap-2 hover:px-5 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 md:bottom-7 md:right-7"
        >
          <MessageCircle className="h-6 w-6 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-extrabold opacity-0 transition-all duration-200 group-hover:max-w-[120px] group-hover:opacity-100">
            WhatsApp us
          </span>
        </a>

        <footer className="border-t border-[#203044] bg-[#111827] py-14 text-slate-300">
          <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
            <div>
              <div className="mb-4">
                <BrandLogo tone="dark" />
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Dedicated IB Mathematics Educators providing direct, expert tuition for MYP, AI, AA, and Internal
                Assessments across global time zones. No agencies, just elite tutors.
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

          {footerLocations.length > 0 && (
            <div className="container mx-auto mt-12 max-w-6xl border-t border-white/10 px-6 pt-10">
              <div className="mb-6 text-sm font-bold uppercase tracking-[0.16em] text-white">
                IB Maths tutors by location
              </div>
              <div className="columns-2 gap-x-6 text-xs sm:columns-3 lg:columns-4">
                {footerLocations.map((group) => (
                  <div key={group.country} className="mb-7 break-inside-avoid">
                    {group.countrySlug ? (
                      <a href={group.countrySlug} className="font-bold text-slate-200 hover:text-white">
                        {group.country}
                      </a>
                    ) : (
                      <span className="font-bold text-slate-200">{group.country}</span>
                    )}
                    {group.cities.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {group.cities.map((location) => (
                          <li key={location.slug}>
                            <a href={location.slug} className="text-slate-400 hover:text-white">
                              {location.city}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="container mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-center text-xs text-slate-500">
            (c) {new Date().getFullYear()} {site.brandName}. All rights reserved. We are not officially affiliated with
            the International Baccalaureate Organization.
          </div>
        </footer>
      </body>
    </html>
  );
}
