import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  FunctionSquare,
  Grid3x3,
  HelpCircle,
  Lightbulb,
  MessageCircle,
  Shapes,
  Sigma,
  Star,
} from "lucide-react";
import type { CSSProperties } from "react";
import { site } from "./site";
import { Reveal } from "./Reveal";
import { TestimonialWall } from "./TestimonialWall";
import { allVideos, allFeedback } from "./testimonials";

const stats = [
  ["+2", "Average grade jump"],
  ["95%", "Reach a 6 or 7"],
  ["25+", "Countries taught"],
  ["1-on-1", "Every lesson"],
];

const differentiators = [
  {
    icon: BadgeCheck,
    title: "Taught the way the IB marks",
    text: "Lessons are built around command terms, the assessment criteria, and real mark schemes, so students earn the marks examiners actually award.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: Compass,
    title: "One plan per student",
    text: "We start with a diagnostic, find the real gaps, and shape every session around the student's syllabus, school deadlines, and grade target.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: BookOpenCheck,
    title: "MYP to DP, fully covered",
    text: "From MYP investigations to AA HL proof and the Internal Assessment, one tutor carries the student through every stage of IB Maths.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=70",
  },
];

const assessmentPoints = [
  "Command-term coaching so students know what state, justify, and evaluate require.",
  "Criterion B and D structure for investigations, modelling, and reflection.",
  "Sample papers opened beside their mark schemes, the way examiners read them.",
  "Parent updates that show topic gaps and assessment readiness, not just attendance.",
];

const courses = [
  { name: "IB MYP Maths", level: "Grades 6 to 10", link: "/ib-myp-maths/", icon: Shapes, fg: "#0f5b78", tile: "#e2eff3", desc: "Criteria A to D, command terms, investigations, and Standard or Extended pathway planning." },
  { name: "Math AA SL", level: "DP Standard", link: "/ib-math-aa-sl/", icon: FunctionSquare, fg: "#4a4b9c", tile: "#e8e9f8", desc: "Functions, algebra, trigonometry, calculus, and clean written exam technique." },
  { name: "Math AA HL", level: "DP Higher", link: "/ib-math-aa-hl/", icon: Sigma, fg: "#4a4b9c", tile: "#e8e9f8", desc: "Proof, series, complex numbers, advanced calculus, and top-band Paper 3 strategy." },
  { name: "Math AI SL", level: "DP Standard", link: "/ib-math-ai-sl/", icon: BarChart3, fg: "#b96a2e", tile: "#f7e8db", desc: "Applications, statistics, modelling, finance, and technology-led problem solving." },
  { name: "Math AI HL", level: "DP Higher", link: "/ib-math-ai-hl/", icon: Grid3x3, fg: "#b96a2e", tile: "#f7e8db", desc: "Advanced statistics, matrices, calculus, and structured Higher Level practice." },
  { name: "Internal Assessment", level: "All DP", link: "/ib-math-ia/", icon: Lightbulb, fg: "#9a7619", tile: "#f5ecca", desc: "Topic choice, exploration structure, criteria mastery, and final polish for the 20% IA." },
];

const steps = [
  { icon: CalendarCheck, title: "Book a free trial", text: "Share the student's grade, course, and upcoming assessment." },
  { icon: FileText, title: "Get a tailored plan", text: "We diagnose the gaps and map a clear route to the target grade." },
  { icon: BookOpenCheck, title: "Weekly 1-on-1 coaching", text: "Method, notation, communication, and exam technique, every week." },
  { icon: BarChart3, title: "Track the results", text: "Parents get progress updates tied to real school assessments." },
];

const faqs = [
  {
    question: "Which IB Maths courses do you teach?",
    answer:
      "All of them. MYP Maths from Grade 6 to Grade 10 (Standard and Extended), and every DP pathway: Analysis and Approaches SL and HL, Applications and Interpretation SL and HL, plus full Internal Assessment support.",
  },
  {
    question: "Are lessons one-on-one?",
    answer:
      "Yes. Every session is individual and built around the student. We work from their current topics, school tasks, and grade target rather than a fixed script.",
  },
  {
    question: "Can we start with a free trial?",
    answer:
      "Yes. Begin with a free trial lesson. Share the student's course and current challenges, and you will receive a recommended plan before committing to anything.",
  },
  {
    question: "Do you really teach the way IB examiners mark?",
    answer:
      "That is the core of our coaching. Students learn what command terms like state, justify, and evaluate require, how the criteria and mark bands work, and how to pick up method marks from official mark schemes.",
  },
  {
    question: "How do you help with the Internal Assessment?",
    answer:
      "We guide the full exploration: choosing a personal, high-scoring topic, structuring the write-up, matching the mathematics to the course level, and avoiding the criteria mistakes that cost marks on the 20% IA.",
  },
  {
    question: "What if my child is behind or anxious about Maths?",
    answer:
      "We start by rebuilding the foundations the current grade is hiding, then add exam habits and calm routines. The plan moves at the student's pace so confidence returns before the high-stakes years.",
  },
  {
    question: "Do you tutor students in my country and time zone?",
    answer:
      "Yes. Lessons are online and scheduled around local school calendars and assessment windows, so we work with IB families across time zones worldwide.",
  },
  {
    question: "How are lessons delivered and progress shared?",
    answer:
      "Sessions run online with shared notes and resources. Parents receive updates on current topic gaps, assessment readiness, and the next steps after each block of lessons.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f7f4ee] text-[#172033]">
      <section className="relative overflow-hidden bg-[#111827]">
        <img
          src="/images/ib-maths-tutoring-hero.png"
          alt="Online IB mathematics tutoring workspace with laptop, tablet, and notes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.78)_45%,rgba(15,23,42,0.35)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-white md:pb-32 md:pt-24">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
              Specialist IB Maths tuition
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              IB Maths tutoring that teaches the rubric, not just the topic.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Clear one-on-one lessons for MYP, AA, AI, and the Internal Assessment, focused on command terms, method,
              and the exam habits that move grades.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.bookingHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b84b] px-6 py-3.5 text-sm font-extrabold text-[#172033] transition hover:bg-[#e7a936] active:translate-y-px"
              >
                Book a free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 active:translate-y-px"
              >
                Explore courses
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#e8e1d6] bg-white py-10">
        <Reveal className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#5d6673]">
            <span className="flex text-[#d99021]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            Trusted by IB students and parents across 25+ countries
          </div>
          <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e8e1d6] bg-[#e8e1d6] sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-white px-6 py-7 text-center">
                <div className="text-3xl font-extrabold text-[#0f5b78]">{value}</div>
                <div className="mt-1 text-sm font-semibold text-[#5d6673]">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Why IB Learners Academy</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Most tutoring just adds worksheets. We coach how the IB actually marks.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90} className="h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e0d7ca] bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,17,17,0.3)]">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt="IB Maths tutoring"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-5 grid h-11 w-11 place-items-center rounded-xl bg-[#0f5b78] text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-6 md:p-7">
                      <h3 className="text-lg font-extrabold">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-7 text-[#5d6673]">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#172033] py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1100&q=70"
              alt="Student studying mathematics with a laptop and notes"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 md:h-[420px]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Built for IB assessment</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              The marks come from communication, not just the right answer.
            </h2>
            <div className="mt-7 space-y-4">
              {assessmentPoints.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-7 text-slate-200">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#f5b84b]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="courses" className="bg-[#efe8dd] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight md:text-5xl">Choose your IB Maths pathway</h2>
              <p className="max-w-md text-sm leading-7 text-[#5d6673]">
                Every course page covers the syllabus, sample papers with mark schemes, and location-specific support.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Reveal key={course.name} delay={index * 70} className="h-full">
                  <a
                    href={course.link}
                    style={{ "--ac": course.fg, "--tl": course.tile } as CSSProperties}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#ded2c3] bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[var(--ac)] hover:shadow-[0_24px_48px_-28px_rgba(17,17,17,0.3)]"
                  >
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--ac)] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--tl)] text-[var(--ac)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-[var(--tl)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ac)]">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold text-[#172033]">{course.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-[#5d6673]">{course.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--ac)]">
                      View course
                      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight md:text-5xl">How a student gets started</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-[#e0d7ca] bg-white p-6 transition hover:-translate-y-1">
                    <span className="text-sm font-extrabold text-[#c9a36a]">{String(index + 1).padStart(2, "0")}</span>
                    <div className="mt-3 grid h-11 w-11 place-items-center rounded-xl bg-[#172033] text-[#f5b84b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-extrabold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5d6673]">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#172033] py-20 text-white md:py-24">
        <Reveal className="mx-auto mb-10 max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Student and parent results, shown directly.
            </h2>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Real video testimonials and WhatsApp feedback from MYP and DP families. Tap any clip to play it full size.
            </p>
          </div>
        </Reveal>
        <TestimonialWall videos={allVideos} feedback={allFeedback} layout="marquee" />
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Questions families ask first</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-[#ded2c3] bg-[#fbf8f2] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                  {item.question}
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-[#0f5b78] transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#5d6673]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#0f5b78] py-20 text-white md:py-24">
        <img
          src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1600&q=70"
          alt="Mathematics equations on a chalkboard"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,91,120,0.78),rgba(12,58,77,0.88))]" />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Start with one focused trial class.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-cyan-50">
            Share the student's grade, syllabus, and next assessment. We will recommend the tutor, the pacing, and a
            first practice plan.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={site.bookingHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f5b84b] px-6 py-3.5 text-sm font-extrabold text-[#172033] transition hover:bg-[#e7a936] active:translate-y-px"
            >
              Book a free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 active:translate-y-px"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
