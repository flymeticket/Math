import React from "react";
import fs from "fs";
import path from "path";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ImageIcon,
  Mail,
  MessageCircle,
  Phone,
  PlayCircle,
} from "lucide-react";
import { site } from "./site";

interface TestimonialAsset {
  href: string;
  label: string;
  poster?: string;
}

const courses = [
  {
    name: "IB MYP Maths",
    level: "Grades 6-10",
    link: "/ib-myp-maths/",
    desc: "Criterion A-D support, command terms, investigations, and Standard or Extended pathway planning.",
  },
  {
    name: "IB Math AISL",
    level: "DP Standard",
    link: "/ib-math-ai-sl/",
    desc: "Applications, statistics, modeling, finance, technology, and exam-ready problem solving.",
  },
  {
    name: "IB Math AIHL",
    level: "DP Higher",
    link: "/ib-math-ai-hl/",
    desc: "Advanced applications, calculus, statistics, matrices, and structured HL practice.",
  },
  {
    name: "IB Math AASL",
    level: "DP Standard",
    link: "/ib-math-aa-sl/",
    desc: "Functions, algebra, trigonometry, calculus, and clean written exam technique.",
  },
  {
    name: "IB Math AAHL",
    level: "DP Higher",
    link: "/ib-math-aa-hl/",
    desc: "Proof, series, complex numbers, advanced calculus, and top-band exam strategy.",
  },
  {
    name: "IB Math IA Guidance",
    level: "DP IA",
    link: "/ib-math-ia/",
    desc: "Topic refinement, exploration structure, modeling, communication, and final polish.",
  },
];

const faqs = [
  {
    question: "Do you teach IB MYP Maths from Grade 6 to Grade 10?",
    answer:
      "Yes. Lessons cover MYP 1 to MYP 5, including Standard and Extended pathways, Criterion A, B, C, and D support, and school-specific assessment preparation.",
  },
  {
    question: "Can students book only a free trial first?",
    answer:
      "Yes. Families can begin with a free trial session, share the student's current topics and assessment needs, and then receive a recommended study plan.",
  },
  {
    question: "Do you help with MYP investigations and reports?",
    answer:
      "Yes. Students get support with pattern investigations, notation, written communication, reflections, real-life modeling, and rubric alignment.",
  },
  {
    question: "Do you tutor AI SL, AI HL, AA SL, and AA HL?",
    answer:
      "Yes. The program supports MYP Maths and all major DP pathways, including Applications and Interpretation and Analysis and Approaches.",
  },
];

function formatAssetLabel(name: string) {
  return path
    .basename(name, path.extname(name))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getTestimonialFiles(folder: "photos" | "videos", extensions: string[]): TestimonialAsset[] {
  const relativePath = `uploads/testimonials/${folder}`;
  const dir = path.join(process.cwd(), "public", ...relativePath.split("/"));

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((name) => extensions.includes(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      href: `/${relativePath}/${encodeURIComponent(name)}`,
      label: formatAssetLabel(name),
      poster: folder === "videos" ? getTestimonialVideoPoster(name) : undefined,
    }));
}

function getTestimonialVideoPoster(videoName: string) {
  const thumbnailPath = "uploads/testimonials/thumbnails";
  const dir = path.join(process.cwd(), "public", ...thumbnailPath.split("/"));
  const stem = path.basename(videoName, path.extname(videoName));
  const posterName = [`${stem}-poster.jpg`, `${stem}-poster.jpeg`, `${stem}-poster.png`, `${stem}-poster.webp`].find(
    (name) => fs.existsSync(path.join(dir, name))
  );

  return posterName ? `/${thumbnailPath}/${encodeURIComponent(posterName)}` : undefined;
}

export default function Home() {
  const testimonialVideos = getTestimonialFiles("videos", [".mp4", ".webm", ".mov"]);
  const testimonialPhotos = getTestimonialFiles("photos", [".jpg", ".jpeg", ".png", ".webp"]);

  return (
    <div className="bg-[#f7f4ee] text-[#172033]">
      <section className="relative min-h-[690px] overflow-hidden bg-[#111827]">
        <img
          src="/images/ib-maths-tutoring-hero.png"
          alt="Online IB mathematics tutoring desk with laptop, tablet, and notes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92)_0%,rgba(15,23,42,0.72)_43%,rgba(15,23,42,0.2)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[690px] max-w-6xl items-center px-6 py-20">
          <div className="max-w-2xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
              IB Maths tutoring for MYP and DP
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              IB Maths tutoring that teaches the rubric, not just the topic.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Clear online lessons for MYP, AI, AA, and IA students. We focus on command terms, working style,
              communication, and the exact habits that move grades.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.bookingHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5b84b] px-6 py-3.5 text-sm font-extrabold text-[#172033] transition-colors hover:bg-[#e7a936]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/ib-myp-maths/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                See MYP Resources
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e1d6] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-x border-[#e8e1d6] bg-[#e8e1d6] md:grid-cols-4">
          {[
            ["+2", "Avg. IB grade improvement"],
            ["95%", "Score 6 or 7"],
            ["25+", "Countries"],
            ["100+", "Cities served"],
          ].map(([value, label]) => (
            <div key={label} className="bg-white px-6 py-7">
              <div className="text-3xl font-extrabold text-[#0f5b78]">{value}</div>
              <div className="mt-1 text-sm font-semibold text-[#5d6673]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Why it works</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Students need structure before speed.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#465160]">
              <p>
                A lot of IB Maths support looks like more worksheets. That is not enough. MYP students need to
                understand command terms and written criteria. DP students need clean methods, exam timing, and accurate
                communication.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Diagnose", "Find the gaps behind the current grade."],
                  ["Coach", "Teach method, notation, and explanation."],
                  ["Review", "Track school tasks and assessment readiness."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg border border-[#e0d7ca] bg-white p-5">
                    <h3 className="font-extrabold text-[#172033]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5d6673]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-[#efe8dd] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Programs</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Choose the right IB path</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#5d6673]">
              Every course page includes tutoring focus, assessment priorities, and location-specific support.
            </p>
          </div>

          <div className="divide-y divide-[#ded2c3] overflow-hidden rounded-lg border border-[#ded2c3] bg-white">
            {courses.map((course) => (
              <a
                key={course.name}
                href={course.link}
                className="grid gap-4 p-6 transition-colors hover:bg-[#fbf8f2] md:grid-cols-[1fr_140px_32px] md:items-center"
              >
                <div>
                  <h3 className="text-xl font-extrabold text-[#172033]">{course.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5d6673]">{course.desc}</p>
                </div>
                <span className="w-fit rounded-lg bg-[#edf6f8] px-3 py-2 text-xs font-bold text-[#0f5b78]">
                  {course.level}
                </span>
                <ChevronRight className="h-5 w-5 text-[#0f5b78]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg border border-[#ded2c3] bg-white">
            <img
              src="/images/ib-maths-tutoring-hero.png"
              alt="IB Maths online lesson materials"
              className="h-[420px] w-full object-cover object-right"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">MYP focus</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Built for the way IB schools assess maths.
            </h2>
            <div className="mt-7 space-y-4">
              {[
                "Command-term coaching so students know what state, verify, justify, and evaluate require.",
                "Criterion B and D investigation structure for reports, patterns, modeling, and reflection.",
                "Parent updates that show current topic gaps, school assessment readiness, and next steps.",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-[#465160]">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(testimonialVideos.length > 0 || testimonialPhotos.length > 0) && (
        <section className="bg-[#172033] py-20 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">
                  <PlayCircle className="h-4 w-4" />
                  Testimonials
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
                  Student and parent results, shown directly.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-300">
                Real WhatsApp feedback and video testimonials from families who worked through IB Maths with structured
                support.
              </p>
            </div>

            {testimonialVideos.length > 0 && (
              <div className="grid gap-5 lg:grid-cols-3">
                {testimonialVideos.map((video) => (
                  <div key={video.href} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]">
                    <video
                      src={video.href}
                      poster={video.poster}
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black"
                    />
                    <div className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-100">
                      <PlayCircle className="h-4 w-4 text-[#f5b84b]" />
                      Video testimonial
                    </div>
                  </div>
                ))}
              </div>
            )}

            {testimonialPhotos.length > 0 && (
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
                  <ImageIcon className="h-4 w-4 text-[#f5b84b]" />
                  WhatsApp feedback
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {testimonialPhotos.map((photo) => (
                    <a
                      key={photo.href}
                      href={photo.href}
                      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.06]"
                    >
                      <img
                        src={photo.href}
                        alt={photo.label}
                        loading="lazy"
                        className="h-64 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Questions families ask first</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-lg border border-[#ded2c3] bg-[#fbf8f2] p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold">
                  {item.question}
                  <ChevronRight className="h-5 w-5 text-[#0f5b78] transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#5d6673]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#172033] py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Book a session</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Start with one focused trial class.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Share the student's grade, syllabus, and upcoming assessment. We will recommend the tutor, pacing, and
              first practice plan.
            </p>
          </div>
          <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <a href={site.phoneHref} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 font-bold text-[#172033]">
              <Phone className="h-5 w-5 text-[#0f5b78]" />
              {site.phoneLabel}
            </a>
            <a href={site.emailHref} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 font-bold text-[#172033]">
              <Mail className="h-5 w-5 text-[#0f5b78]" />
              {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-[#f5b84b] px-4 py-3 font-extrabold text-[#172033]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp for a trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
