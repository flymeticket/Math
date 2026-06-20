import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Book a Free IB Maths Trial Session | IB Learners Academy",
  description:
    "Book a free IB Maths trial session for MYP, AI SL, AI HL, AA SL, AA HL, or IA guidance.",
};

const courseOptions = ["IB MYP Maths", "IB Math AISL", "IB Math AIHL", "IB Math AASL", "IB Math AAHL", "IB Math IA"];

export default function BookSessionPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#172033]">
      <section className="relative overflow-hidden bg-[#111827]">
        <img
          src="/images/ib-maths-tutoring-hero.png"
          alt="Online IB Maths tutoring workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.9),rgba(15,23,42,0.62),rgba(15,23,42,0.18))]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-white md:py-32">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
              <CalendarCheck className="h-4 w-4" />
              Free trial session
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Book a focused IB Maths session
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">
              Send the student's grade, current course, and assessment goal. We will suggest the best first lesson and
              a practical study plan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-lg border border-[#ded2c3] bg-white p-6">
              <h2 className="text-xl font-extrabold">Direct contact</h2>
              <div className="mt-5 space-y-3">
                <a href={site.phoneHref} className="flex items-center gap-3 rounded-lg bg-[#f7f4ee] px-4 py-3 font-bold">
                  <Phone className="h-5 w-5 text-[#0f5b78]" />
                  {site.phoneLabel}
                </a>
                <a href={site.emailHref} className="flex items-center gap-3 rounded-lg bg-[#f7f4ee] px-4 py-3 font-bold">
                  <Mail className="h-5 w-5 text-[#0f5b78]" />
                  {site.email}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg bg-[#f5b84b] px-4 py-3 font-extrabold"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp now
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-[#ded2c3] bg-white p-6">
              <h2 className="text-xl font-extrabold">What happens next</h2>
              <div className="mt-5 space-y-4">
                {[
                  "We review the student's current syllabus, grade, and school assessment dates.",
                  "The trial class targets one high-impact topic or criterion.",
                  "You receive a recommended lesson plan and improvement path.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-[#465160]">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-lg border border-[#ded2c3] bg-white p-6 shadow-sm md:p-8">
            <div className="border-b border-[#e8e1d6] pb-6">
              <h2 className="text-2xl font-extrabold">Student details</h2>
              <p className="mt-2 text-sm leading-7 text-[#5d6673]">
                This uses your email app to send the enquiry. You can also use WhatsApp for a faster reply.
              </p>
            </div>

            <form action={site.emailHref} method="post" encType="text/plain" className="mt-8 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-bold">
                  Parent / Student Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                    placeholder="Full name"
                  />
                </label>
                <label className="space-y-2 text-sm font-bold">
                  Phone Number
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                    placeholder="+91..."
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm font-bold">
                Email Address
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                  placeholder="name@example.com"
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-bold">
                  Course
                  <select
                    name="course"
                    defaultValue="IB MYP Maths"
                    className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                  >
                    {courseOptions.map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </label>
                <label className="space-y-2 text-sm font-bold">
                  Grade / Year
                  <input
                    name="grade"
                    type="text"
                    className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                    placeholder="MYP 3, Grade 8..."
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm font-bold">
                What support does the student need?
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 outline-none focus:border-[#0f5b78]"
                  placeholder="Current topic, assessment date, target grade, or school feedback..."
                />
              </label>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f5b78] px-5 py-3.5 text-sm font-extrabold text-white hover:bg-[#0b4358]"
                >
                  Send Enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5b84b] px-5 py-3.5 text-sm font-extrabold text-[#172033]"
                >
                  WhatsApp Now
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
