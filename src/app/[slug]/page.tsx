import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { Award, BookOpen, Clock, CheckCircle, Star, ArrowRight, Phone, ShieldCheck, Mail, MapPin } from 'lucide-react';

const dataPath = path.join(process.cwd(), 'data', 'seo_pages.json');

interface PageData {
  type: string;
  course_id: string;
  slug: string;
  title: string;
  h1: string;
  meta_desc: string;
  country?: string;
  state?: string;
  city?: string;
  course: {
    id: string;
    slug: string;
    name: string;
    level: string;
  };
}

export async function generateStaticParams() {
  if (!fs.existsSync(dataPath)) return [];
  const pages: PageData[] = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  return pages.map((page) => ({
    slug: page.slug.replace(/^\/|\/$/g, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pages: PageData[] = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath, 'utf8')) : [];
  const page = pages.find((p) => p.slug.replace(/^\/|\/$/g, '') === params.slug);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: page.title,
    description: page.meta_desc,
    alternates: {
      canonical: `https://ibmathmaster.com${page.slug}`,
    }
  };
}

export default function DynamicSeoPage({ params }: { params: { slug: string } }) {
  const pages: PageData[] = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath, 'utf8')) : [];
  const page = pages.find((p) => p.slug.replace(/^\/|\/$/g, '') === params.slug);

  if (!page) {
    return (
      <div className="bg-[#0B132B] min-h-screen text-slate-100 flex flex-col justify-center items-center p-6">
        <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
        <p className="text-slate-400">The requested programmatic SEO route is not loaded.</p>
        <a href="/" className="mt-6 px-6 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 transition font-semibold text-sm">
          Return Home
        </a>
      </div>
    );
  }

  // Partner Network
  const serviceLinks = [
    { name: "IB Math Master", url: "https://ibmathmaster.com", desc: "Global Course Hub" },
    { name: "Yogesh Prabhu", url: "https://yogeshprabhu.com/online-tuitions-ibdp/", desc: "IBDP Tuition" },
    { name: "IB Elite Tutor", url: "https://ibelitetutor.com/ib-home-tutors/", desc: "Home Tutor Matching" },
    { name: "Ascend Now", url: "https://ascendnow.org/private-online-tutoring-services/ib-tuition/ib-math-tuition/", desc: "Private Coaching" }
  ];

  return (
    <div className="bg-[#0B132B] text-slate-100 min-h-screen font-sans antialiased pb-20">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 right-1/4 w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Award className="w-4 h-4" /> IB Specialist Examiners
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-400 leading-tight">
            {page.h1}
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {page.meta_desc}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact-form" className="px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-sm font-bold text-white hover:scale-[1.02] transition shadow-lg shadow-blue-500/15">
              Book a Free Trial Session
            </a>
          </div>
        </div>
      </header>

      {/* Dynamic Content Grid */}
      <div className="container mx-auto max-w-6xl px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Core Content */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              Why Students in {page.city || page.state || page.country || 'IB Courses'} Choose Us
            </h2>
            <div className="text-slate-300 space-y-4 leading-relaxed text-sm md:text-base">
              <p>
                Our specialized instruction for <strong className="text-blue-400">{page.course.name}</strong> has a proven track record. 
                We combine official IB examiner insights with a tailored diagnostic approach to create a customizable tutoring program that exactly aligns with your study schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Diagnostic syllabus assessment",
                  "Step-by-step scoring strategies",
                  "Dedicated IB examiner oversight",
                  "Flexible schedule configurations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section className="bg-[#1C2541]/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl" />
            <h2 className="text-2xl font-extrabold text-white mb-4">
              {page.course.name} Course & Exam Prep
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Every dynamic session covers core and optional syllabus aspects. Whether you are focusing on standard algebraic applications or complex calculus equations at the Higher Level, we provide complete, step-by-step guidance.
            </p>
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-xs md:text-sm font-medium">Includes deep-dives into GDC calculator use and past paper modeling.</span>
            </div>
          </section>

          {/* Localized Testimonials */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
              What Students & Parents Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  text: `The expert tuition for ${page.course.name} completely changed my understanding. The examiner tips were extremely useful.`,
                  author: `Student in ${page.city || page.state || page.country || 'IB'}`,
                  rating: 5
                },
                {
                  text: "Highest quality IB coaching. The structured study plan helped my son gain confidence and jump 2 grades.",
                  author: "Parent Review",
                  rating: 5
                }
              ].map((test, i) => (
                <div key={i} className="p-6 bg-[#1C2541]/30 border border-white/5 rounded-2xl relative shadow-md">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-sm leading-relaxed mb-4">"{test.text}"</p>
                  <div className="text-blue-400 font-bold text-xs">— {test.author}</div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Dynamic Sidebar */}
        <div className="space-y-8">
          
          {/* Schools & Local Trust */}
          {(page.city || page.country || page.state) && (
            <div className="bg-[#1C2541]/40 border border-white/5 rounded-3xl p-6 shadow-sm">
              <h3 className="font-extrabold text-white text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" /> Support in {page.city || page.state || page.country}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mb-4 leading-relaxed">
                We tutor candidates from top international schools and local communities within {page.city || page.state || page.country}.
              </p>
              <div className="space-y-2">
                <div className="text-xs font-semibold px-3 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Aligning with local academic calendars
                </div>
                <div className="text-xs font-semibold px-3 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Specialized timezone scheduling
                </div>
              </div>
            </div>
          )}

          {/* Partners Ecosystem */}
          <div className="bg-[#1C2541]/40 border border-white/5 rounded-3xl p-6">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Verified IB Partner Network</h3>
            <div className="space-y-3">
              {serviceLinks.map((link, i) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={i} className="group block p-3 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/30 hover:bg-white/10 transition-all">
                  <div className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center justify-between">
                    {link.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">{link.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Lead capture Form */}
          <div id="contact-form" className="bg-gradient-to-tr from-[#1C2541] to-[#1C2541]/40 border border-white/5 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <h3 className="font-extrabold text-white text-lg mb-2">Book a Trial Lesson</h3>
            <p className="text-slate-400 text-xs mb-6">Receive a custom dynamic plan for {page.course.name}.</p>
            <form className="space-y-4 text-xs">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <button type="submit" className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 transition font-bold rounded-xl text-white shadow-md shadow-blue-500/10">
                Submit Request
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
