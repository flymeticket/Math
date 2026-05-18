import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IB Math Master | MYP, AI SL/HL, AA SL/HL | #1 Rated IB Math Tuition",
  description: "Top-rated IB Math tutor offering expert online tuition for MYP Maths, AI SL/HL, AA SL/HL & IA guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#0B132B] text-slate-100`}>
        {/* Glassmorphic Sticky Header */}
        <header className="border-b border-white/5 backdrop-blur-md bg-[#0B132B]/85 sticky top-0 z-50 transition-all duration-300">
          <div className="container mx-auto flex justify-between items-center max-w-6xl px-6 py-4">
            <a href="/" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              IB Math Master
            </a>
            <nav className="hidden md:flex space-x-8 text-sm font-semibold">
              <a href="/ib-myp-maths/" className="text-slate-300 hover:text-blue-400 transition-colors">MYP</a>
              <a href="/ib-math-ai-sl/" className="text-slate-300 hover:text-blue-400 transition-colors">AI SL</a>
              <a href="/ib-math-ai-hl/" className="text-slate-300 hover:text-blue-400 transition-colors">AI HL</a>
              <a href="/ib-math-aa-sl/" className="text-slate-300 hover:text-blue-400 transition-colors">AA SL</a>
              <a href="/ib-math-aa-hl/" className="text-slate-300 hover:text-blue-400 transition-colors">AA HL</a>
              <a href="/ib-math-ia/" className="text-slate-300 hover:text-blue-400 transition-colors">IA Guidance</a>
            </nav>
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/20 px-5 py-2.5 rounded-full font-bold transition-all text-xs text-white">
              Free Trial
            </a>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* Premium Footer */}
        <footer className="bg-[#090F22] border-t border-white/5 text-slate-400 py-16">
          <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="font-extrabold text-white text-lg mb-4">IB Math Master</div>
              <p className="text-xs leading-relaxed">
                Global leaders in programmatic IB Mathematics tutoring. Serving students in 25+ countries to secure top scores.
              </p>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Syllabus Pillars</div>
              <ul className="space-y-3 text-xs">
                <li><a href="/ib-myp-maths/" className="hover:text-blue-400 transition-colors">IB MYP Maths</a></li>
                <li><a href="/ib-math-aa-sl/" className="hover:text-blue-400 transition-colors">IB Math AA SL</a></li>
                <li><a href="/ib-math-ai-hl/" className="hover:text-blue-400 transition-colors">IB Math AI HL</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Top Tutors Regions</div>
              <ul className="space-y-3 text-xs">
                <li><a href="/ib-math-aa-hl-tutor-london/" className="hover:text-blue-400 transition-colors">London, UK</a></li>
                <li><a href="/ib-math-ai-sl-tutor-dubai/" className="hover:text-blue-400 transition-colors">Dubai, UAE</a></li>
                <li><a href="/ib-math-aa-sl-tutor-singapore-city/" className="hover:text-blue-400 transition-colors">Singapore City</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Academic Ecosystem</div>
              <p className="text-xs leading-relaxed">
                Specialized in examiner grading rubrics, timezone mapping, and personalized 1-on-1 performance strategies.
              </p>
            </div>
          </div>
          <div className="container mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-slate-600">
            © {new Date().getFullYear()} IB Math Master. All rights reserved. We are not officially affiliated with the International Baccalaureate Organization.
          </div>
        </footer>
      </body>
    </html>
  );
}
