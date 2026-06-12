import { Metadata } from "next";
import fs from "fs";
import path from "path";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  ImageIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  Star,
} from "lucide-react";
import { site } from "../site";

const dataPath = path.join(process.cwd(), "data", "seo_pages.json");

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

interface UploadFile {
  name: string;
  label: string;
  href: string;
  poster?: string;
}

const commandTerms = [
  ["State", "Give a specific answer without extended working."],
  ["Calculate", "Show enough working to support a numerical answer."],
  ["Verify", "Confirm a result using substitution, evidence, or a second method."],
  ["Justify", "Give mathematical reasons for each important decision."],
  ["Explain", "Connect the mathematics to clear written reasoning."],
  ["Evaluate", "Judge the strengths, limits, and accuracy of a method or model."],
];

const criteriaRows = [
  [
    "Criterion A: Knowing & Understanding",
    "Traditional math skills, formulas, and classroom tests.",
    "Mental math, algebraic manipulation, calculator fluency, and time management.",
  ],
  [
    "Criterion B: Investigating Patterns",
    "Finding predictable patterns or rules from data.",
    "Step-by-step logic for spotting, generalizing, and verifying formulas.",
  ],
  [
    "Criterion C: Communicating",
    "Using correct vocabulary, notation, forms, and diagrams.",
    "Written-work review so students do not lose marks for unclear notation or missing units.",
  ],
  [
    "Criterion D: Applying Mathematics",
    "Building mathematical models for real-life contexts.",
    "Guidance on interpreting results and checking if answers make sense in context.",
  ],
];

const defaultMypResources = [
  {
    title: "MYP Command Terms",
    desc: "A student-friendly guide to command terms used in MYP Maths questions and rubrics.",
    href: "/resources/myp-command-terms.html",
  },
  {
    title: "Criterion A & C Sample Page",
    desc: "A worked assessment-style sample showing mathematical understanding and communication.",
    href: "/resources/myp-criterion-a-c-sample.html",
  },
  {
    title: "Criterion B & C Investigation Guide",
    desc: "The Secret to Cracking Criterion B: A Step-by-Step Guide to MYP Math Investigations.",
    href: "/resources/myp-criterion-b-c-investigation-guide.html",
  },
  {
    title: "Criterion D & C Sample Page",
    desc: "A real-life modeling sample with communication checkpoints and reflection prompts.",
    href: "/resources/myp-criterion-d-c-sample.html",
  },
];

const mypTestimonials = [
  {
    text: "The MYP command-term coaching made school tasks much easier. I finally understood what justify and verify were asking me to do.",
    author: "MYP 3 Student",
  },
  {
    text: "My daughter moved from a 4 to a 6 after the tutor broke down Criteria B and C into a repeatable report-writing structure.",
    author: "Parent of MYP 4 Student",
  },
  {
    text: "The investigation framework helped me organize patterns, tables, formulas, and reflections without feeling lost.",
    author: "MYP 5 Extended Maths Student",
  },
];

const mypSyllabus = [
  {
    title: "MYP 1 / Grade 6",
    topics: [
      "Fractions, decimals, percentages, negative numbers, factors, multiples, and prime factorization.",
      "Algebraic expressions, substitution, simplifying terms, and one-step linear equations.",
      "2D shapes, perimeter, area, and the Cartesian coordinate grid.",
      "Frequency tables, bar charts, pictograms, and basic probability language.",
    ],
  },
  {
    title: "MYP 2 / Grade 7",
    topics: [
      "Directed numbers, ratios, rates, exponents, and square roots.",
      "Like terms, expanding brackets, two-step linear equations, and linear sequences.",
      "Angles, transformations, areas, and volume of simple prisms.",
      "Mean, median, mode, range, comparative displays, and experimental probability.",
    ],
  },
  {
    title: "MYP 3 / Grade 8",
    topics: [
      "Standard form, percentage change, simple interest, and direct proportion.",
      "Multi-step equations, inequalities, coordinate geometry, slope, and simultaneous equations.",
      "Pythagoras, rotations, enlargements, surface area, and compound volume.",
      "Grouped data, histograms, Venn diagrams, and independent-event probability.",
    ],
  },
];

const advancedSyllabus = [
  {
    area: "Number and Algebra",
    standard: "Inequalities, exponents, standard form, proportion, simultaneous equations, factoring, and quadratics.",
    extended: "Number sets, recurring decimals, absolute value, error bounds, and advanced algebraic reasoning.",
  },
  {
    area: "Functions and Modeling",
    standard: "Quadratic, exponential, and transformation work using multiple representations.",
    extended: "Domain and range restrictions, rational functions, asymptotes, networks, and optimization.",
  },
  {
    area: "Geometry and Trigonometry",
    standard: "3D solids, coordinate geometry, similarity, bearings, Pythagoras, and right-triangle trigonometry.",
    extended: "Circle theorems, perpendicular gradients, rational enlargements, sine rule, and cosine rule.",
  },
  {
    area: "Statistics and Probability",
    standard: "Sampling, data integrity, scatter plots, quartiles, set notation, and combined events.",
    extended: "Histograms, standard deviation, correlation coefficients, tree diagrams, and conditional probability.",
  },
];

function getPages(): PageData[] {
  return fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath, "utf8")) : [];
}

function cleanText(value: string) {
  return value
    .replace(/\u00e2\u20ac\u201d/g, "-")
    .replace(/\u00e2\u20ac\u201c/g, "-")
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00c2\u00a0/g, " ");
}

function formatAssetLabel(name: string) {
  return path
    .basename(name, path.extname(name))
    .replace(/[-_]+/g, " ")
    .replace(/\b(aahl|aasl|aihl|aisl|ibmyp)\b/gi, (token) => token.toUpperCase())
    .replace(/\bIBMYP\b/g, "IB MYP")
    .replace(/\bmarkscheme\b/gi, "Mark Scheme")
    .replace(/\bquestion paper\b/gi, "Question Paper")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getPublicUploadFiles(relativePath: string, extensions: string[]): UploadFile[] {
  const dir = path.join(process.cwd(), "public", ...relativePath.split("/"));
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((name) => extensions.includes(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      label: formatAssetLabel(name),
      href: `/${relativePath}/${encodeURIComponent(name)}`,
      poster: relativePath === "uploads/testimonials/videos" ? getTestimonialVideoPoster(name) : undefined,
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

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slug.replace(/^\/|\/$/g, ""),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getPages().find((p) => p.slug.replace(/^\/|\/$/g, "") === params.slug);

  if (!page) return { title: "Page Not Found" };

  return {
    title: cleanText(page.title),
    description: cleanText(page.meta_desc),
    alternates: {
      canonical: `https://ibmathmaster.com${page.slug}`,
    },
  };
}

export default function DynamicSeoPage({ params }: { params: { slug: string } }) {
  const page = getPages().find((p) => p.slug.replace(/^\/|\/$/g, "") === params.slug);

  if (!page) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4ee] p-6 text-center text-[#172033]">
        <h1 className="text-4xl font-extrabold">404 - Page Not Found</h1>
        <p className="mt-3 text-[#5d6673]">The requested programmatic SEO route is not loaded.</p>
        <a href="/" className="mt-6 rounded-lg bg-[#0f5b78] px-6 py-3 text-sm font-bold text-white">
          Return Home
        </a>
      </div>
    );
  }

  const locationLabel = page.city || page.state || page.country || "IB Courses";
  const isMypCourse = page.course.id === "myp" || page.course.slug === "ib-myp-maths";
  const courseResourceFiles = getPublicUploadFiles(`uploads/resources/pdfs/${page.course.id}`, [".pdf"]);
  const uploadedPhotos = isMypCourse
    ? getPublicUploadFiles("uploads/testimonials/photos", [".jpg", ".jpeg", ".png", ".webp"])
    : [];
  const uploadedVideos = isMypCourse
    ? getPublicUploadFiles("uploads/testimonials/videos", [".mp4", ".webm", ".mov"])
    : [];

  const testimonials = isMypCourse
    ? mypTestimonials
    : [
        {
          text: `The tutoring for ${page.course.name} made the course feel structured. The lesson notes and exam strategy were easy to follow.`,
          author: `Student in ${locationLabel}`,
        },
        {
          text: "The study plan helped my son gain confidence and improve by two grades.",
          author: "Parent Review",
        },
      ];

  return (
    <div className="bg-[#f7f4ee] text-[#172033]">
      <section className="relative overflow-hidden bg-[#111827]">
        <img
          src="/images/ib-maths-tutoring-hero.png"
          alt="Online IB Maths tutoring workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.92),rgba(15,23,42,0.7),rgba(15,23,42,0.2))]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-white md:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
              {page.course.name} tutoring
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">{cleanText(page.h1)}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">{cleanText(page.meta_desc)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.bookingHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f5b84b] px-6 py-3.5 text-sm font-extrabold text-[#172033]"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white"
              >
                WhatsApp Us
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_320px] lg:py-20">
        <main className="space-y-10">
          <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Tutoring approach</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Why students in {locationLabel} choose us
            </h2>
            <p className="mt-5 leading-8 text-[#465160]">
              Our instruction for <strong>{page.course.name}</strong> is built around current school work, assessment
              dates, and the way IB marking rewards communication. Students get topic clarity and a repeatable way to
              show their thinking.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Diagnostic syllabus assessment",
                "Step-by-step scoring strategies",
                "Criterion and rubric feedback",
                "Flexible time-zone scheduling",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4 text-sm font-semibold">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Course prep</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{page.course.name} Course & Exam Prep</h2>
            <p className="mt-5 leading-8 text-[#465160]">
              Sessions cover topic understanding, written method, calculator habits, assessment timing, and review of
              current school tasks. The plan adapts around the student's syllabus and grade target.
            </p>
          </section>

          {isMypCourse && (
            <>
              <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">MYP foundations</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                  Laying the Foundations: MYP 1-3 Mathematics
                </h2>
                <p className="mt-5 leading-8 text-[#465160]">
                  The transition from primary school math to the IB Middle Years Programme can be jarring. Students are
                  expected to investigate patterns, explain real-world scenarios, and write structured mathematical
                  reports. We build the foundations and confidence needed for MYP 4 and 5.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    ["Form", "Understanding what a mathematical object is, from geometry to algebraic structure."],
                    ["Logic", "Developing step-by-step reasoning used to solve problems and prove rules."],
                    ["Relationships", "Exploring how quantities, shapes, and concepts interact."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5d6673]">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Assessment criteria</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Mastering the 4 MYP Math Criteria</h2>
                <div className="mt-7 overflow-hidden rounded-lg border border-[#ded2c3]">
                  {criteriaRows.map(([criterion, meaning, support]) => (
                    <div key={criterion} className="grid border-b border-[#ded2c3] last:border-b-0 md:grid-cols-[1fr_1fr_1.2fr]">
                      <div className="bg-[#f7f4ee] p-4 font-extrabold">{criterion}</div>
                      <div className="p-4 text-sm leading-7 text-[#465160]">{meaning}</div>
                      <div className="p-4 text-sm leading-7 text-[#5d6673]">{support}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Command terms</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">MYP Command Term Mastery</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {commandTerms.map(([term, meaning]) => (
                    <div key={term} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                      <h3 className="font-extrabold">{term}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5d6673]">{meaning}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Syllabus</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">MYP 1-3 and MYP 4-5 pathways</h2>
                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {mypSyllabus.map((year) => (
                    <div key={year.title} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                      <h3 className="font-extrabold">{year.title}</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#5d6673]">
                        {year.topics.map((topic) => (
                          <li key={topic} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0f5b78]" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  {advancedSyllabus.map((area) => (
                    <div key={area.area} className="rounded-lg border border-[#e8e1d6] p-5">
                      <h3 className="font-extrabold">{area.area}</h3>
                      <div className="mt-3 grid gap-3 text-sm leading-7 text-[#5d6673] md:grid-cols-2">
                        <p><strong className="text-[#172033]">Standard:</strong> {area.standard}</p>
                        <p><strong className="text-[#172033]">Extended:</strong> {area.extended}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">View and download</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">MYP Sample Pages</h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {defaultMypResources.map((resource) => (
                    <div key={resource.title} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                      <FileText className="h-6 w-6 text-[#0f5b78]" />
                      <h3 className="mt-4 font-extrabold">{resource.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5d6673]">{resource.desc}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a href={resource.href} className="rounded-lg bg-[#0f5b78] px-4 py-2 text-xs font-bold text-white">
                          View
                        </a>
                        <a
                          href={resource.href}
                          download
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#d8ccbc] px-4 py-2 text-xs font-bold"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {courseResourceFiles.length > 0 && (
                  <div className="mt-8 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                    <h3 className="font-extrabold">Uploaded PDF Resources</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {courseResourceFiles.map((file) => (
                        <a
                          key={file.href}
                          href={file.href}
                          className="flex items-center justify-between gap-3 rounded-lg bg-white p-4 text-sm font-semibold"
                        >
                          <span>{file.label}</span>
                          <Download className="h-4 w-4 text-[#0f5b78]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </>
          )}

          {!isMypCourse && courseResourceFiles.length > 0 && (
            <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Practice papers</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{page.course.name} downloadable resources</h2>
              <p className="mt-4 leading-8 text-[#465160]">
                Use these sorted paper resources for targeted practice before lessons, revision sessions, and mock exam
                review.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {courseResourceFiles.map((file) => (
                  <a
                    key={file.href}
                    href={file.href}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4 text-sm font-semibold"
                  >
                    <span>{file.label}</span>
                    <Download className="h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                  </a>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Results</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              {isMypCourse ? "MYP Student Success Stories" : "What Students and Parents Say"}
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {testimonials.map((test) => (
                <div key={test.author} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                  <div className="mb-4 flex gap-1 text-[#d99021]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-[#465160]">"{test.text}"</p>
                  <div className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">
                    {test.author}
                  </div>
                </div>
              ))}
            </div>

            {isMypCourse && (uploadedPhotos.length > 0 || uploadedVideos.length > 0) && (
              <div className="mt-8 space-y-8">
                {uploadedPhotos.length > 0 && (
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 font-extrabold">
                      <ImageIcon className="h-5 w-5 text-[#0f5b78]" />
                      WhatsApp and Result Photos
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {uploadedPhotos.map((file) => (
                        <a key={file.href} href={file.href} className="block overflow-hidden rounded-lg border border-[#e8e1d6]">
                          <img src={file.href} alt={file.label} className="h-56 w-full object-cover" />
                          <div className="bg-[#fbf8f2] p-3 text-xs font-semibold">{file.label}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {uploadedVideos.length > 0 && (
                  <div>
                    <h3 className="mb-4 flex items-center gap-2 font-extrabold">
                      <PlayCircle className="h-5 w-5 text-[#0f5b78]" />
                      Testimonial Videos
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {uploadedVideos.map((file) => (
                        <div key={file.href} className="overflow-hidden rounded-lg border border-[#e8e1d6] bg-[#fbf8f2]">
                          <video
                            src={file.href}
                            poster={file.poster}
                            controls
                            preload="metadata"
                            className="aspect-video w-full bg-black"
                          />
                          <div className="p-3 text-xs font-semibold">{file.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          {(page.city || page.country || page.state) && (
            <div className="rounded-lg border border-[#ded2c3] bg-white p-5">
              <h3 className="flex items-center gap-2 font-extrabold">
                <MapPin className="h-5 w-5 text-[#0f5b78]" />
                Support in {locationLabel}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5d6673]">
                Online lessons are scheduled around local school calendars, assessment windows, and time zones.
              </p>
            </div>
          )}

          <div className="rounded-lg border border-[#ded2c3] bg-white p-5">
            <h3 className="font-extrabold">Book a trial lesson</h3>
            <p className="mt-2 text-sm leading-7 text-[#5d6673]">Receive a focused plan for {page.course.name}.</p>
            <form action={site.emailHref} method="post" encType="text/plain" className="mt-5 space-y-3">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 text-sm outline-none focus:border-[#0f5b78]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 text-sm outline-none focus:border-[#0f5b78]"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] px-4 py-3 text-sm outline-none focus:border-[#0f5b78]"
              />
              <button type="submit" className="w-full rounded-lg bg-[#0f5b78] px-4 py-3 text-sm font-extrabold text-white">
                Submit Request
              </button>
            </form>
          </div>

          <div className="rounded-lg border border-[#ded2c3] bg-[#172033] p-5 text-white">
            <h3 className="font-extrabold">Direct contact</h3>
            <div className="mt-4 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold">
                <Phone className="h-4 w-4 text-[#f5b84b]" />
                {site.phoneLabel}
              </a>
              <a href={site.emailHref} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold">
                <Mail className="h-4 w-4 text-[#f5b84b]" />
                {site.email}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-[#f5b84b] px-4 py-3 text-sm font-extrabold text-[#172033]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp for trial
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
