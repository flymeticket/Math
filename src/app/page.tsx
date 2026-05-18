import React from 'react';
import { Award, BookOpen, Globe, CheckCircle2, ChevronRight, Star, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Home() {
  const serviceLinks = [
    { name: "IB Math Master", url: "https://ibmathmaster.com", desc: "Primary Brand & Global Course Hub" },
    { name: "Yogesh Prabhu Online", url: "https://yogeshprabhu.com/online-tuitions-ibdp/", desc: "IBDP Premium Tuition Landing" },
    { name: "IB Elite Tutor", url: "https://ibelitetutor.com/ib-home-tutors/", desc: "Expert Home Tutor Matching" },
    { name: "Ascend Now Private Tutoring", url: "https://ascendnow.org/private-online-tutoring-services/ib-tuition/ib-math-tuition/", desc: "1-on-1 Personalized Coaching" }
  ];

  return (
    <div className="bg-[#0B132B] text-slate-100 min-h-screen font-sans antialiased overflow-x-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#0B132B] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#38bdf8]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Award className="w-4 h-4" /> #1 Rated Global IB Mathematics Tuition
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-400 leading-tight">
            Expert IB Math Tutoring <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">MYP to DP, Worldwide</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Get personalized online tuition aligned perfectly with the IB curriculum. Master all core concepts, excel in Internal Assessments, and guarantee score improvements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 text-white">
              Book a Free Trial Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#courses" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
              Explore IB Courses
            </a>
          </div>
        </div>
      </section>

      {/* Course Selection Grid */}
      <section id="courses" className="py-24 bg-[#0B132B] relative">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Focused IB Programs
            </h2>
            <p className="text-slate-400">
              Select your specific IB syllabus to access tailored study guides, exam strategies, and specialized tutors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "IB MYP Maths", level: "Ages 11-16", link: "/ib-myp-maths/", desc: "Build strong foundational mathematics skills preparing for the rigorous DP curriculum.", color: "from-cyan-500 to-blue-600" },
              { name: "IB Math AI SL", level: "DP Standard", link: "/ib-math-ai-sl/", desc: "Practical application focused course covering statistics, modeling, and financial calculus.", color: "from-blue-500 to-indigo-600" },
              { name: "IB Math AI HL", level: "DP Higher", link: "/ib-math-ai-hl/", desc: "Advanced applications with rigorous matrices, differential equations, and complex statistics.", color: "from-indigo-500 to-purple-600" },
              { name: "IB Math AA SL", level: "DP Standard", link: "/ib-math-aa-sl/", desc: "Pure mathematics focus with a strong emphasis on functions, calculus, and algebra.", color: "from-cyan-500 to-teal-600" },
              { name: "IB Math AA HL", level: "DP Higher", link: "/ib-math-aa-hl/", desc: "Elite mathematical proofs, complex numbers, series, and advanced calculus.", color: "from-purple-500 to-pink-600" },
              { name: "IB Math IA Guidance", level: "All DP Levels", link: "/ib-math-ia/", desc: "Step-by-step Internal Assessment support to secure the maximum 20/20 mark.", color: "from-amber-500 to-orange-600" }
            ].map((course, idx) => (
              <div key={idx} className="group relative bg-[#1C2541]/40 border border-white/5 rounded-3xl p-8 hover:border-blue-500/40 hover:bg-[#1C2541]/70 transition-all duration-300 shadow-md">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center font-bold text-white mb-6 shadow-md`}>
                  0{idx + 1}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{course.name}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">{course.level}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {course.desc}
                </p>
                <a href={course.link} className="inline-flex items-center gap-1.5 text-blue-400 font-bold group-hover:text-blue-300 transition-colors text-sm">
                  View Syllabus & Tutors
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Brand Partnerships & Service Integration */}
      <section className="py-20 bg-[#1C2541]/20 border-y border-white/5">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Our Verified Brand Ecosystem</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">Integrating Industry-Leading IB Tutoring Portals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceLinks.map((link, i) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" key={i} className="group flex flex-col justify-between p-6 bg-[#1C2541]/50 border border-white/5 rounded-2xl hover:border-blue-500/30 hover:bg-[#1C2541]/80 transition-all duration-300 shadow-sm">
                <div>
                  <div className="text-white font-bold group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    {link.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{link.desc}</p>
                </div>
                <div className="text-[10px] text-blue-500 font-semibold tracking-wider uppercase mt-4">Partner Network</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Results Indicators */}
      <section className="py-24 bg-[#0B132B]">
        <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">High Performance Guaranteed</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6 leading-tight">
              We Don't Just Teach. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">We Architect Success.</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              With curriculum specialists stationed globally, our program adapts seamlessly to individual learning styles. We align classes with school assessments to assure optimized exam scores.
            </p>
            <div className="space-y-4">
              {[
                "100% of our tutors are certified IB DP Specialists & Examiners",
                "Personalized learning dashboard and dynamic exam prep resources",
                "Comprehensive monthly tracking reporting for parents"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-tr from-[#1C2541] to-[#1C2541]/40 border border-white/5 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "95%", label: "Score 6 or 7" },
                { val: "500+", label: "Target Pages" },
                { val: "25+", label: "Countries Covered" },
                { val: "100+", label: "Cities Serviced" }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="text-4xl font-extrabold text-blue-400">{stat.val}</div>
                  <div className="text-slate-400 text-sm mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
