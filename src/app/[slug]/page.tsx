import { Metadata } from "next";
import fs from "fs";
import path from "path";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Compass,
  DraftingCompass,
  ExternalLink,
  FileText,
  FunctionSquare,
  ImageIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  Star,
} from "lucide-react";
import { site } from "../site";
import { SiteNav } from "../SiteNav";
import { dpCourseInfo, dpSyllabus, dpHours } from "../dp-syllabus";
import { coursePapers, mypPapers, paperViewerHref } from "../papers";
import { TestimonialWall } from "../TestimonialWall";
import { mypVideos, dpVideos, mypFeedback, dpFeedback } from "../testimonials";

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

const commandTerms = [
  ["State", "Give a specific answer without extended working."],
  ["Calculate", "Show enough working to support a numerical answer."],
  ["Verify", "Confirm a result using substitution, evidence, or a second method."],
  ["Justify", "Give mathematical reasons for each important decision."],
  ["Explain", "Connect the mathematics to clear written reasoning."],
  ["Evaluate", "Judge the strengths, limits, and accuracy of a method or model."],
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

const mypFrameworkIntro = [
  "The IB Middle Years Programme (MYP) mathematics curriculum is not just about memorizing textbook formulas or passing rote classroom quizzes. The IB framework is designed to train students to think like mathematical researchers, learning how to solve complex abstract problems, analyze real-world data, and investigate unpredictable global patterns.",
  "Because every student learns at a different pace and enters high school with unique academic ambitions, a one-size-fits-all approach to teaching math simply does not work.",
  "Whether your child is looking to rebuild core confidence, dominate school-level exams, or future-proof their skills for the rigors of the IB Diploma Programme, my specialized coaching provides the exact scaffolding they need to thrive.",
];

const mypFrameworkCriteria = [
  {
    title: "Criterion A: Knowing and Understanding",
    focus: "Mathematical knowledge and application of concepts.",
    skills: [
      "Select appropriate mathematical concepts, facts, and techniques.",
      "Apply mathematical knowledge to solve problems.",
      "Demonstrate understanding through correct methods and solutions.",
    ],
    example: "Solving a quadratic equation using factorisation and explaining the steps.",
  },
  {
    title: "Criterion B: Investigating Patterns",
    focus: "Recognising patterns and developing mathematical generalisations.",
    skills: [
      "Identify patterns from examples or data.",
      "Describe patterns using mathematical relationships.",
      "Find rules, formulas, or generalisations.",
      "Justify and verify findings.",
    ],
    example: "Observing a sequence of shapes, finding the pattern, and creating a formula for the nth term.",
  },
  {
    title: "Criterion C: Communicating",
    focus: "Presenting mathematical thinking clearly.",
    skills: [
      "Use appropriate mathematical language, notation, symbols, and representations.",
      "Represent information in appropriate forms.",
      "Move between different forms of representation.",
      "Communicate conclusions effectively.",
      "Present logical and organised solutions.",
    ],
    example: "Showing calculations, graphs, diagrams, and explanations in a structured solution.",
  },
  {
    title: "Criterion D: Applying Mathematics in Real-Life Contexts",
    focus: "Using mathematics to solve problems in practical situations.",
    skills: [
      "Identify relevant information from a real-world situation.",
      "Apply appropriate mathematical strategies.",
      "Explain the degree of accuracy of the solution.",
      "Explain whether solutions make sense in real-life situations.",
    ],
    example:
      "Using quadratic functions to model the height of a ball or surface area and volume calculations for a storage tank.",
  },
];

const mypDpTransitionPoints = [
  "Students remain officially eligible for AA SL, AA HL, AI SL, and AI HL regardless of whether they followed a Standard or Extended MYP mathematics pathway.",
  "The academic jump from MYP Standard to a DP Higher Level course, especially Analysis and Approaches HL, is steep and should be prepared for early.",
  "My curriculum infuses advanced logic, mathematical modeling, and pre-calculus tracking into sessions so students can clear internal diagnostics and move into DP with confidence.",
];

const mypAcademicStages = [
  {
    slug: "myp-1-3",
    href: "/myp-1-3/",
    label: "MYP 1-3",
    eyebrow: "Grades 6-8",
    title: "Laying the Foundations: MYP 1-3 Mathematics (Grades 6-8)",
    summary:
      'Conquer the "IB Transition Shock." We eliminate math anxiety early by turning abstract concepts into student-friendly goals.',
    intro:
      "This stage builds fluid number sense, basic algebra, spatial reasoning, and the first habits of Criteria B and D mathematical report writing.",
    concepts: [
      ["Form", "Understand mathematical objects, representations, and geometric structure."],
      ["Logic", "Build clean step-by-step reasoning before high-school rigor arrives."],
      ["Relationships", "Connect numbers, patterns, shapes, variables, and real-world contexts."],
    ],
    objectives: [
      "Strengthen number fluency, fractions, decimals, percentages, ratios, and directed numbers.",
      "Turn early algebra, equations, coordinates, and transformations into clear written methods.",
      "Introduce investigation writing for Criterion B and real-life modeling for Criterion D.",
    ],
    syllabusGroups: mypSyllabus,
  },
  {
    slug: "myp-4-5",
    href: "/myp-4-5/",
    label: "MYP 4-5",
    eyebrow: "Grades 9-10",
    title: "Elevating the Rigor: MYP 4-5 Standard & Extended (Grades 9-10)",
    summary:
      "A deep dive into high school mathematics with side-by-side Standard and Extended track preparation.",
    intro:
      "This stage raises the technical ceiling with complex quadratic functions, logarithms, networks, advanced statistics, and probability while keeping assessment writing precise.",
    concepts: [
      ["Systems", "See how algebraic, geometric, statistical, and probabilistic ideas interact."],
      ["Change", "Model rates, functions, transformations, growth, decay, and optimization."],
      ["Representation", "Move confidently between equations, graphs, tables, diagrams, and written conclusions."],
    ],
    objectives: [
      "Prepare students for Standard or Extended internal pathway demands.",
      "Build exam-ready fluency across functions, trigonometry, geometry, statistics, and probability.",
      "Train clear Criteria A, B, C, and D execution under timed and investigation-style conditions.",
    ],
    syllabusGroups: advancedSyllabus.map((area) => ({
      title: area.area,
      topics: [`Standard: ${area.standard}`, `Extended: ${area.extended}`],
    })),
  },
  {
    slug: "myp-enrichment",
    href: "/myp-enrichment/",
    label: "Enrichment Tier",
    eyebrow: "Grade 7 and DP readiness",
    title: "The Elite Competitive Edge: The Enrichment Tier",
    summary:
      "My signature addition for ambitious students targeting a Grade 7 in MYP and a seamless transition to DP AA HL.",
    intro:
      "The enrichment tier stretches confident students beyond the school syllabus through advanced pre-university frameworks and AA HL-style thinking.",
    concepts: [
      ["Proof", "Explain why a result works, not only how to calculate it."],
      ["Abstraction", "Work with structures such as vectors, series, counting systems, and distributions."],
      ["Modeling", "Transfer unfamiliar ideas into solvable mathematical representations."],
    ],
    objectives: [
      "Develop mathematical maturity for competitive school diagnostics and future AA HL placement.",
      "Introduce polar coordinates, vector spaces, combinatorics, and infinite series without rushing foundations.",
      "Train students to write elegant solutions for unfamiliar extension problems.",
    ],
    syllabusGroups: [
      {
        title: "Advanced Coordinate and Algebraic Thinking",
        topics: [
          "Polar coordinates and parametric representations.",
          "Vector spaces, transformations, and geometric structure.",
          "Manual standard deviation derivations and distribution reasoning.",
        ],
      },
      {
        title: "Combinatorics and Probability Extensions",
        topics: [
          "Counting methods, arrangements, selections, and constraints.",
          "Conditional probability matrices and multi-stage events.",
          "Network mapping and optimization-style decision models.",
        ],
      },
      {
        title: "Pre-DP AA HL Readiness",
        topics: [
          "Infinite series intuition and convergence habits.",
          "Function behavior beyond routine textbook templates.",
          "Proof-minded explanations for advanced modeling tasks.",
        ],
      },
    ],
  },
];

const commandTermsPdfHref = "/papers/myp/MYP_Command_Terms.pdf";

const myp13KeyConcepts = [
  {
    title: "Form",
    text: "Understanding what a mathematical entity is, from the structural features of a geometric shape to the parts of an algebraic expression.",
  },
  {
    title: "Logic",
    text: "Developing the step-by-step mathematical reasoning used to solve complex problems and prove rules.",
  },
  {
    title: "Relationships",
    text: "Exploring how different mathematical quantities, shapes, and concepts interact with and depend on one another.",
  },
];

const myp13GlobalContextExamples = [
  "Use Identities and Relationships to analyze data trends in human health.",
  "Use Globalization and Sustainability to model environmental changes over time.",
  "Connect Measurement, Patterns, Space, Change, and Equivalence to authentic classroom tasks.",
];

const myp13CriteriaRows = [
  {
    criterion: "Criterion A: Knowing & Understanding",
    meaning: "Traditional math skills, formulas, and classroom tests.",
    support: "Mastering mental math, algebraic manipulation, and exam time management.",
  },
  {
    criterion: "Criterion B: Investigating Patterns",
    meaning: "Finding a predictable mathematical pattern or rule from a set of data.",
    support: "Teaching the step-by-step logic needed to find and verify a mathematical formula.",
  },
  {
    criterion: "Criterion C: Communicating",
    meaning: "Using correct math vocabulary, notation, forms, and labeled diagrams.",
    support: "Reviewing written work so students do not lose marks for sloppy notation or missing units.",
  },
  {
    criterion: "Criterion D: Applying Mathematics in real-life contexts",
    meaning: "Taking a real-world scenario, such as architecture or finance, and building a math model.",
    support: "Guiding students to reflect on whether their mathematical results make sense in real life.",
  },
];

const myp13Pillars = [
  {
    title: "Number",
    text: "Developing fluid number sense, fractions, ratios, and standard form.",
    icon: Calculator,
  },
  {
    title: "Algebra",
    text: "Moving from concrete numbers to abstract thinking through equations, sequences, and coordinates.",
    icon: FunctionSquare,
  },
  {
    title: "Geometry & Trigonometry",
    text: "Understanding spatial reasoning, angles, perimeter, area, and volume.",
    icon: DraftingCompass,
  },
  {
    title: "Statistics & Probability",
    text: "Learning how to collect, display, and analyze real-world data critically.",
    icon: BarChart3,
  },
];

const myp13InvestigationFramework = [
  "Recognizing patterns and turning them into generalized rules for Criterion B.",
  "Applying math to real-life situations, like budgeting a party or designing a park, for Criterion D.",
  "Documenting each step clearly using correct mathematical notation for Criterion C.",
];

const myp13AtlSkills = [
  "Organize written work so methods, diagrams, units, and conclusions are easy to follow.",
  "Think critically about mistakes instead of seeing errors as proof that they are bad at math.",
  "Build calm routines that reduce math anxiety before the high-stakes MYP 4 and 5 years.",
];

const myp13DetailedSyllabus = [
  {
    year: "MYP 1",
    grade: "Grade 6",
    strands: [
      {
        strand: "Number",
        icon: Calculator,
        detail:
          "Positive integers, operations with fractions, decimals, percentages, introduction to negative numbers, factors, multiples, and prime factorization (LCM/GCD).",
      },
      {
        strand: "Algebra",
        icon: FunctionSquare,
        detail:
          "Introduction to algebraic expressions, substitution, simplifying simple terms, and one-step linear equations.",
      },
      {
        strand: "Geometry & Trigonometry",
        icon: DraftingCompass,
        detail:
          "Properties of 2D shapes, perimeter and area of basic shapes (rectangles, triangles), and the Cartesian coordinate grid (first quadrant).",
      },
      {
        strand: "Statistics & Probability",
        icon: BarChart3,
        detail:
          "Data collection, frequency tables, bar charts, pictograms, and basic probability terminology (certain, likely, impossible).",
      },
    ],
  },
  {
    year: "MYP 2",
    grade: "Grade 7",
    strands: [
      {
        strand: "Number",
        icon: Calculator,
        detail: "Integers, operations with directed numbers (negatives), ratios, rates, basic exponents, and square roots.",
      },
      {
        strand: "Algebra",
        icon: FunctionSquare,
        detail:
          "Simplifying expressions (like terms), expanding single brackets, solving two-step linear equations, and linear sequences.",
      },
      {
        strand: "Geometry & Trigonometry",
        icon: DraftingCompass,
        detail:
          "Angles along lines and within triangles, basic geometric transformations (translations and reflections), area of parallelograms and trapezoids, and volume of simple prisms.",
      },
      {
        strand: "Statistics & Probability",
        icon: BarChart3,
        detail:
          "Calculating mean, median, mode, and range; comparative data displays, and theoretical vs. experimental probability.",
      },
    ],
  },
  {
    year: "MYP 3",
    grade: "Grade 8",
    strands: [
      {
        strand: "Number",
        icon: Calculator,
        detail: "Standard form (scientific notation), percentages (percentage change, simple interest), and direct proportion.",
      },
      {
        strand: "Algebra",
        icon: FunctionSquare,
        detail:
          "Solving multi-step equations, linear inequalities, coordinate geometry (finding slope/gradient, plotting y = mx + c), and introduction to simultaneous equations.",
      },
      {
        strand: "Geometry & Trigonometry",
        icon: DraftingCompass,
        detail:
          "Pythagoras' theorem, advanced transformations (rotation and enlargement), surface area and volume of cylinders and complex prisms.",
      },
      {
        strand: "Statistics & Probability",
        icon: BarChart3,
        detail: "Grouped data intervals, histograms, Venn diagrams, and the probability of independent events.",
      },
    ],
  },
];

const myp45Tracks = [
  {
    name: "Standard Mathematics",
    tag: "Mastery and confidence",
    icon: Compass,
    accent: "standard",
    body: "Standard mathematics aims to give all students a sound knowledge of mathematical principles while developing the skills needed to meet the objectives of MYP mathematics. For many students, mathematics can feel like an overwhelming maze of formulas to memorize. The MYP Standard track changes that narrative. Instead of pushing students into hyper-abstract, theoretical proofs before they are ready, this pathway focuses on absolute mastery of core principles, mathematical confidence, and practical application.",
  },
  {
    name: "Extended Mathematics",
    tag: "Pre-DP HL preparation",
    icon: Star,
    accent: "extended",
    body: "Includes every standard topic plus advanced topics such as complex geometry, advanced algebra, and pre-calculus concepts. It is built for students who plan to take Higher Level (HL) Math in the IB Diploma Programme and need the abstract reasoning that HL demands from day one.",
  },
];

const myp45Navigation = [
  {
    title: "Finding the Perfect Fit (Standard vs. Extended)",
    intro:
      "You don't have to guess which level is right for you. I use a personalized approach to help families make an informed, stress-free decision:",
    points: [
      ["Diagnostic Assessment", "I evaluate the student's current skill gaps, abstract reasoning capacity, and pacing."],
      [
        "DP Goal Alignment",
        "We look ahead. If a student wants DP Higher Level (HL) Math later, they need the foundations of MYP Extended today. If they plan to take Standard Level (SL), we focus on mastering MYP Standard to protect their GPA and build confidence.",
      ],
      [
        "Strategic Adjustments",
        "If a student is currently struggling in Extended, I help them pivot smoothly or build the bridge to catch up before it impacts their transcripts.",
      ],
    ],
  },
  {
    title: "Pushing for that Elusive Grade 7 in Extended Math",
    intro:
      "Scoring a 7 in Extended Math is notoriously difficult. Traditional math skills (Criterion A) will only get a student so far. To unlock a 7, students must master mathematical investigation and real-world modeling (Criteria B and D). My targeted coaching focuses on:",
    points: [
      [
        "Cracking the Rubrics",
        "I teach students exactly what IB examiners look for in written math reports, so they do not lose marks on communication or notation.",
      ],
      [
        "Advanced Problem Solving",
        "We dive deep into complex algebra, geometry, and pre-calculus concepts, moving past rote memorization to true conceptual understanding.",
      ],
      [
        "The DP HL Bridge",
        "A grade 7 in MYP Extended is not just a number on a report card. It is proof that a student has developed the critical thinking skills required to thrive in DP Higher Level Mathematics.",
      ],
    ],
  },
];

const myp45Syllabus = [
  {
    strand: "Number and Algebra",
    icon: Calculator,
    standard: [
      ["Number lines & inequalities", "Representing and solving linear inequalities, including compound and double inequalities."],
      ["Laws of exponents", "Complete mastery of exponents, including integer and negative exponents."],
      ["Standard form", "Writing, converting, and computing with scientific notation."],
      ["Proportional reasoning", "Analyzing and solving problems using direct and inverse proportion."],
      ["Simultaneous equations", "Solving systems of linear equations using both algebraic methods and graphical analysis."],
      ["Algebraic manipulation", "Expanding brackets, factoring algebraic expressions, and rearranging complex formulas."],
      ["Quadratic equations", "Solving quadratics using factorization, the quadratic formula, and graphing software."],
      ["Algorithms", "Analyzing and using well-defined, step-by-step procedures and flowcharts for solving complex problems."],
    ],
    extended: [
      [
        "Formal number systems",
        "Advanced notation mapping across the natural numbers (N), integers (Z), rational numbers (Q), irrational numbers (Q'), and real numbers (R).",
      ],
      ["Error bounds", "Calculating exact lower and upper bounds for measurements."],
      ["Advanced numbers", "Converting and executing calculations with recurring decimals and absolute values."],
    ],
  },
  {
    strand: "Functions and Mathematical Modeling",
    icon: FunctionSquare,
    standard: [
      [
        "Quadratic modeling",
        "Complete mastery of quadratic functions across three exam forms - standard form f(x) = ax² + bx + c, factored form f(x) = a(x - p)(x - q), and vertex form f(x) = a(x - h)² + k - while evaluating the significance of their parameters.",
      ],
      ["Quadratic transformations", "Applying translations, reflections, and dilations to quadratic graphs."],
      ["Exponential functions", "Understanding the representation, characteristic shape, and horizontal asymptotes of exponential graphs."],
    ],
    extended: [
      ["Functional analysis", "Evaluating advanced domain and range restrictions for complex inputs."],
      ["Rational functions", "Graphing, analyzing, and finding asymptotes for functions of the form f(x) = (ax + b) / (cx + d)."],
      [
        "Advanced asymptotes",
        "Mapping the graphic representations, shapes, and asymptotes of cubic, rational, trigonometric, and logarithmic functions.",
      ],
      ["Network optimization", "Mapping networks of vertices, edges, and paths, then calculating and optimizing weighted network pathways."],
    ],
  },
  {
    strand: "Geometry and Trigonometry",
    icon: DraftingCompass,
    standard: [
      ["Advanced 3D solids", "Calculating volume, surface area, and nets for pyramids, cones, and compound 3D shapes."],
      ["Fluid capacity", "Calculating real-world boundary capacity metrics."],
      ["Coordinate geometry", "A deep dive into gradients, intercepts, distance, midpoint, and gradient formulas."],
      ["Parallel lines", "Analyzing the geometric properties and gradients of parallel lines."],
      ["Similarity & congruence", "Applying formal criteria to construct proofs for similar and congruent triangles."],
      ["Geometric scaling", "Executing scaling operations via enlargement around a fixed point on a plane."],
      ["Navigation mechanics", "Using 3-figure bearings for spatial navigation and routing."],
      ["Right-angled trigonometry", "Computing side lengths and angles using trigonometric ratios (sin, cos, tan) and Pythagoras' theorem."],
    ],
    extended: [
      [
        "Circle theorems",
        "Comprehensive application of circle geometry laws, including angle, radius, diameter, arc, sector, chord, segment, and tangent properties.",
      ],
      ["Perpendicular systems", "Mathematically proving the gradient relationship between perpendicular lines."],
      ["Advanced transformations", "Enlarging shapes by a rational factor and tracking compound transformations on the coordinate plane."],
      [
        "Non-right trigonometry",
        "Proving results via the converse of Pythagoras' theorem and solving non-right triangles with the Sine Rule and Cosine Rule.",
      ],
    ],
  },
  {
    strand: "Statistics and Probability",
    icon: BarChart3,
    standard: [
      ["Sampling mechanics", "Implementing proper sampling techniques and monitoring survey response rates."],
      ["Data integrity", "Identifying data manipulation, tracking distortions, and preventing the misinterpretation of statistics."],
      ["Advanced graphing", "Plotting and reading bivariate data, scatter graphs, box-and-whisker plots, and cumulative frequency graphs."],
      ["Trend lines", "Drawing and analyzing lines of best fit to map data trajectories."],
      ["Data processing", "Computing mean, median, and mode for continuous datasets and locating exact quartiles and percentiles."],
      ["Spread metrics", "Analyzing dispersion, including the range and the Interquartile Range (IQR) and its relationship with the median."],
      ["Set theory", "Implementing mathematical set notation and operations across up to three distinct sets."],
      ["Probability frameworks", "Calculating probabilities of simple, combined, and mutually exclusive events using sample spaces."],
    ],
    extended: [
      ["Advanced data displays", "Constructing and interpreting histograms for continuous, fixed-interval data groups."],
      ["Standard deviation", "Using graphing technology to calculate standard deviation and interpreting its relationship with the mean."],
      [
        "Correlation analysis",
        "Describing correlation strength (positive, negative, none, strong, weak) and using technology to find the precise correlation value (r).",
      ],
      ["Complex probability", "Computing multi-stage probability using Venn diagrams, tree diagrams, and sample spaces."],
      [
        "Conditional probability",
        "Calculating probability for dependent and independent events with the multiplication and addition rules, with heavy emphasis on conditional probability such as P(A|B).",
      ],
    ],
  },
];

const myp45Pathways = [
  {
    name: "Standard Mathematics",
    subtitle: "Mastering Core Principles",
    cardClass: "border-[#ded2c3] bg-white",
    badgeClass: "bg-[#0f5b78]",
    titleClass: "text-[#0f5b78]",
    quoteClass: "border-[#0f5b78]",
    signature: false,
    href: "",
    definition:
      "Standard mathematics aims to give all students a sound knowledge of mathematical principles while allowing them to develop the skills needed to meet the objectives of MYP mathematics.",
    forWho:
      "Students looking to build bulletproof confidence, eliminate math anxiety, protect their school GPA, and prepare seamlessly for the DP Applications & Interpretation (AI) Standard Level track in high school.",
    approach:
      "We focus on absolute fluency in core principles, ensuring students never fall behind on foundational concepts.",
  },
  {
    name: "Extended Mathematics",
    subtitle: "Greater Breadth and Depth",
    cardClass: "border-[#e7d4ad] bg-[#fffaf0]",
    badgeClass: "bg-[#a35c20]",
    titleClass: "text-[#a35c20]",
    quoteClass: "border-[#a35c20]",
    signature: false,
    href: "",
    definition:
      "Extended mathematics consists of the standard mathematics framework supplemented by additional topics and skills, giving greater breadth and depth to the standard framework.",
    forWho:
      "Ambitious students targeting top marks (6s and 7s) in the MYP, and those who plan to tackle the rigorous DP Analysis & Approaches (AA) SL/HL or AI HL pathways.",
    approach:
      "We push past basic formulas into abstract logic, complex algebraic manipulation, and advanced multi-step problem-solving.",
  },
  {
    name: "Enrichment Track",
    subtitle: "Going a Step Further",
    cardClass: "border-[#cdd8e0] bg-white",
    badgeClass: "bg-[#172033]",
    titleClass: "text-[#172033]",
    quoteClass: "border-[#172033]",
    signature: true,
    href: "/myp-enrichment/",
    definition:
      "My signature enrichment track supplements the Extended framework with pre-university frameworks and AA HL-style thinking, stretching confident students well beyond the school syllabus.",
    forWho:
      "Students chasing a Grade 7 in Extended Mathematics and a seamless jump into DP Analysis & Approaches (AA) Higher Level.",
    approach:
      "We introduce proof-based reasoning, vectors, combinatorics, and infinite series early, training students to write elegant solutions to unfamiliar problems.",
  },
];

const enrFoundationPoints = [
  "Apply mathematics to authentic real-life situations (assessed under Criterion D).",
  "Perform investigations to discover mathematical patterns (assessed under Criterion B).",
];

const enrComparison = [
  {
    feature: "Objective",
    standard: "Sound knowledge of core mathematical principles.",
    extended: "Greater breadth and depth to build a foundation for DP Higher Level (HL).",
    enrichment: "Elite mathematical maturity, intuition, and competitive university prep.",
  },
  {
    feature: "Core Focus",
    standard: "Fluency, confidence, and foundational modeling.",
    extended: "Abstract theory, proof structures, and fast-paced problem-solving.",
    enrichment: "Advanced non-linear systems, logic, and pre-DP preparation.",
  },
  {
    feature: "DP Target Pathway",
    standard: "AI SL or AA SL",
    extended: "AA SL or AI HL",
    enrichment: "AA HL (Analysis & Approaches Higher Level)",
  },
];

const matrixTagStyles = [
  "bg-[#eef2f4] text-[#5d6673]",
  "bg-[#e0eef2] text-[#0f5b78]",
  "bg-[#f5e6c8] text-[#a35c20]",
  "bg-[#172033] text-[#f5b84b]",
];

const enrichmentMatrix = [
  {
    title: "Module 1: Number and Algebra",
    subtitle: "The Core Progressive Framework",
    desc: "Tracks how we build foundational arithmetic in early MYP, branch into the distinct Standard and Extended tracks in Grades 9 and 10, and ultimately scale into university prep via the Enrichment tier.",
    colA: "Number Syllabus Objectives",
    colB: "Algebra Syllabus Objectives",
    rows: [
      {
        stage: "MYP 1-3",
        tag: "Foundations",
        a: [
          "Core number operations.",
          "Forms of numbers (integers, fractions, decimals, percentages) and seamless transformations between them.",
          "Estimation metrics (appropriate rounding, decimal approximations, significant figures).",
          "Time zones, clocks, and timetables.",
          "Factors, prime numbers, Greatest Common Factor (GCF), and Least Common Multiple (LCM).",
          "Squares, square roots, and integer exponents.",
          "Ratios and number sequences (prediction and description).",
        ],
        b: [
          "Finding and verifying structural rules for sequences.",
          "Basic algebraic expressions: operations, expansion of brackets, and substitution.",
          "Forming, rearranging, and solving simple linear equations.",
          "Practical application of mathematical formulas.",
        ],
      },
      {
        stage: "MYP 4-5 Standard",
        tag: "Core Fluency",
        a: [
          "Number lines and standard inequalities.",
          "Advanced laws of exponents (including integer and negative exponents).",
          "Standard form / scientific notation.",
          "Direct and inverse proportion modeling.",
        ],
        b: [
          "Solving simultaneous equations both algebraically and graphically.",
          "Factoring advanced algebraic expressions.",
          "Dynamic rearranging of complex subject formulas.",
          "Designing and reading mathematical flowcharts and simple algorithms.",
        ],
      },
      {
        stage: "MYP 4-5 Extended",
        tag: "Advanced Rigor",
        a: [
          "Formal number systems and notation mapping: natural numbers (N), integers (Z), rational numbers (Q), irrational numbers (Q'), and real numbers (R).",
          "Lower and upper error bounds.",
          "Parsing recurring decimals.",
          "Absolute values |x|.",
        ],
        b: [],
      },
      {
        stage: "The Enrichment Tier",
        tag: "Elite Pre-DP Prep",
        a: [
          "Rationalizing the denominator (complex surd equations).",
          "Number bases (working outside base-10: binary, octal, and hexadecimal logic systems).",
        ],
        b: [
          "Solving complex exponential equations analytically.",
          "Using advanced sigma notation (Σ) and structural formulas for the summation of arithmetic and geometric series.",
          "Analyzing series convergence and divergence limits.",
        ],
      },
    ],
  },
  {
    title: "Module 2: Functions and Mathematical Modeling",
    subtitle: "From Linear Graphs to Network Systems",
    desc: "Functions form the backbone of calculus and data manipulation in the DP. This module traces the progression from basic straight-line mapping to advanced graphical transformations and complex network optimization.",
    colA: "Functions & Graphs Objectives",
    colB: "Modeling & Network Systems",
    rows: [
      {
        stage: "MYP 1-3",
        tag: "Foundations",
        a: [
          "Core concept of mathematical mapping.",
          "Mastering function notation.",
          "Graphing and analyzing linear functions of the form f(x) = mx + c.",
        ],
        b: [
          "Identifying, calculating, and proving the properties of parallel and perpendicular lines based on their gradients.",
        ],
      },
      {
        stage: "MYP 4-5 Standard",
        tag: "Core Fluency",
        a: [
          "Complete mastery of quadratic functions across three exam forms - standard form f(x) = ax² + bx + c, factored form f(x) = a(x - p)(x - q), and vertex form f(x) = a(x - h)² + k - and evaluating the significance of their parameters.",
          "Understanding the representation, shape, and horizontal asymptotes of exponential functions.",
        ],
        b: [
          "Solving systems of equations using both precise algebraic elimination and graphing calculator software.",
          "Analyzing and executing algorithms (well-defined procedures to crack multi-step problems).",
        ],
      },
      {
        stage: "MYP 4-5 Extended",
        tag: "Advanced Rigor",
        a: [
          "Advanced domain and range restriction analysis.",
          "Graphing rational functions of the form f(x) = (ax + b) / (cx + d).",
          "Transformations of quadratic functions, including translation, reflection, and dilation.",
          "Analyzing the shapes, behaviors, and asymptotes of cubic, rational, trigonometric, and logarithmic functions.",
        ],
        b: [
          "Executing linear programming matrices, including boundary mapping of systems of inequalities.",
          "Master-level study of network theory: mapping edges, arcs, nodes, vertices, and paths.",
          "Calculating complex network pathways and analyzing weighted networks for optimization.",
        ],
      },
      {
        stage: "The Enrichment Tier",
        tag: "Elite Pre-DP Prep",
        a: [
          "Deep dive into transcendental functions using Euler's number and the natural logarithm (ln).",
          "Advanced composite functions and calculating structural inverse functions.",
          "Executing multi-step transformations on cubic and trigonometric functions.",
        ],
        b: [
          "Using functions to mathematically model real-world optimization problems, preparing students for the DP Math Internal Assessment (IA).",
        ],
      },
    ],
  },
  {
    title: "Module 3: Geometry and Trigonometry",
    subtitle: "From Spatial Reasoning to Advanced Vector Spaces",
    desc: "Geometry and trigonometry progress from basic shape classification to complex spatial modeling, multi-dimensional coordinate tracking, and analytic trigonometry. This module builds structural visualization and algebraic fluency across all levels.",
    colA: "Geometry Syllabus Objectives",
    colB: "Trigonometry Syllabus Objectives",
    rows: [
      {
        stage: "MYP 1-3",
        tag: "Foundations",
        a: [
          "Classifying shapes and angles; executing metric conversions.",
          "Angle mechanics: calculations with angle properties, intersecting lines, and parallel lines.",
          "Perimeter, circumference, and area of plane figures (triangles, circles, quadrilaterals, and compound shapes).",
          "Volume, surface area, and nets of 3D solids (cubes, cuboids, cylinders, and prisms).",
          "Cartesian coordinates; working with y = mx + c, gradients, intercepts, distance, midpoint, and gradient formulas.",
          "Geometric transformations: symmetry, reflection, rotation, isometric transformations, and tessellations.",
        ],
        b: [
          "Analyzing geometric triangle properties.",
          "Mastery of Pythagoras' theorem.",
          "Calculating standard trigonometric ratios (sin, cos, tan) within right-angled triangles.",
        ],
      },
      {
        stage: "MYP 4-5 Standard",
        tag: "Core Fluency",
        a: [
          "Volume, surface area, and net tracking for advanced shapes (pyramids, cones, and compound 3D structures).",
          "Calculating boundary capacity and fluid metrics.",
          "Evaluating gradients of parallel lines.",
        ],
        b: [
          "Formal criteria for similarity and congruence (including geometric proofs for similar and congruent triangles).",
          "Performing scaling operations via enlargement around a fixed point.",
          "Navigating real-world routes using bearings (3-figure navigation systems).",
        ],
      },
      {
        stage: "MYP 4-5 Extended",
        tag: "Advanced Rigor",
        a: [
          "Absolute mastery of circle geometry and theorems (chords, tangents, secants, sectors, segments, and cyclic angles).",
          "Mathematically mapping the gradient relationship of perpendicular lines.",
          "Advanced transformations: scaling shapes by a rational factor and mapping compound transformations.",
        ],
        b: [
          "Proving geometric assumptions via the converse of Pythagoras' theorem.",
          "Applying non-right triangle frameworks: solving complex structural problems using the Sine Rule and Cosine Rule.",
        ],
      },
      {
        stage: "The Enrichment Tier",
        tag: "Elite Pre-DP Prep",
        a: [
          "Informal introduction to fractals and chaos geometry.",
          "High-level geometric dilations, alongside inscribing and circumscribing shapes within multi-variable frameworks.",
          "Introduction to polar coordinates as an alternative to Cartesian grids.",
          "Foundations of linear algebra: vector notation and conceptualizing multi-dimensional vector spaces.",
          "Navigating spatial structures via 3D coordinate geometry.",
        ],
        b: [
          "Computing advanced triangle areas via the Area of a Triangle Rule.",
          "Mastering radian measure, calculating precise arc length and sector area via radian formulas.",
          "Analyzing the unit circle, mapping the equation of a circle centered at the origin, and deriving fundamental trigonometric identities.",
        ],
      },
    ],
  },
  {
    title: "Module 4: Reasoning with Data",
    subtitle: "Statistics and Probability",
    desc: "Statistics and probability transition from basic graphs to managing large datasets, verifying statistical reliability, and computing advanced predictive models. This module builds analytical data literacy and probability modeling across all levels.",
    colA: "Statistics Syllabus Objectives",
    colB: "Probability Syllabus Objectives",
    rows: [
      {
        stage: "MYP 1-3",
        tag: "Foundations",
        a: [
          "Simple discrete data classification and generation (including surveys).",
          "Identifying constraints in statistical enquiry (data reliability, sampling bias, and estimation).",
          "Displaying data using charts (pie, bar, stem-and-leaf, pictograms, and infographics).",
          "Calculating measures of central tendency: mean, median, and mode for discrete and basic grouped data.",
          "Calculating dispersion via the range parameter.",
        ],
        b: [
          "Qualitative evaluation of probability and parsing values along the probability scale.",
          "Calculating theoretical vs. experimental probability and tracking relative frequency.",
          "Listing standard sample spaces for single events.",
        ],
      },
      {
        stage: "MYP 4-5 Standard",
        tag: "Core Fluency",
        a: [
          "Assessing sampling techniques and monitoring response rates.",
          "Identifying data manipulation, tracking distortions, and preventing misinterpretation.",
          "Plotting complex data: bivariate graphs, scatter plots, box-and-whisker plots, and cumulative frequency curves.",
          "Drawing lines of best fit to determine trend directions.",
          "Processing mean, median, and mode for continuous datasets, alongside calculating quartiles and percentiles.",
        ],
        b: [
          "Set theory fundamentals: implementing notation and operations across up to three distinct sets.",
          "Calculating the probability of simple and combined events.",
          "Tracking mutually exclusive events using sample spaces.",
        ],
      },
      {
        stage: "MYP 4-5 Extended",
        tag: "Advanced Rigor",
        a: [
          "Constructing complex histograms for continuous, fixed-interval groups.",
          "Calculating the Interquartile Range (IQR) and analyzing its relationship with the median.",
          "Using graphing technology to calculate and interpret standard deviation (SD) and its relationship with the mean.",
          "Formally describing correlation metrics (positive, negative, none, strong, weak) and using technology to calculate exact correlation values.",
        ],
        b: [
          "Mastering probability mechanics using Venn diagrams, tree diagrams, and sample spaces.",
          "Computing compound criteria for dependent and independent events via the explicit multiplication and addition rules.",
          "Calculating exact conditional probability.",
        ],
      },
      {
        stage: "The Enrichment Tier",
        tag: "Elite Pre-DP Prep",
        a: [
          "Moving past technology dependency: manual calculation of standard deviation and the Pearson correlation coefficient.",
          "Graphing advanced frequency polygons layered over variable histograms.",
          "Measuring data variance through covariance frameworks.",
          "Executing predictive data trends through linear interpolation and extrapolation calculations.",
          "Identifying advanced cognitive errors such as confirmation bias and statistical anomalies.",
          "Interpreting mathematical regression output variables.",
        ],
        b: [
          "Mastering advanced counting principles and combinatorics.",
          "Calculating discrete choices using permutations and factorials.",
          "Computing the geometric mean for multi-variable scaling data.",
          "Merging topological networks with probability frameworks and mapping pathways through Pascal's Triangle.",
        ],
      },
    ],
  },
];

const dpIntro = [
  "The transition into DP Mathematics is widely regarded as one of the steepest academic jumps a student will ever face. Whether moving from the MYP, IGCSE, or a national curriculum, the sheer volume of content, abstract thinking, and rigorous pacing can quickly become overwhelming.",
  "With the curriculum split into Analysis & Approaches (AA) and Applications & Interpretation (AI), succeeding in DP Math is no longer just about practicing formulas. It requires a strategic, tailored approach to problem-solving, technology, and mathematical inquiry.",
  "I provide elite, comprehensive coaching across all four DP Math pathways to help students stay ahead of the curve, protect their predicted grades, and secure university offers.",
];

const dpPathways = [
  {
    id: "aa-sl",
    track: "AA SL",
    full: "Analysis & Approaches",
    focus: "Algebraic fluency, analytical methods, and abstract problem-solving.",
    suited: "Medicine, Economics, Architecture, Chemistry, Business.",
    help: "Bridging the gap between algebra and calculus, turning abstract concepts into predictable, step-by-step solutions.",
  },
  {
    id: "aa-hl",
    track: "AA HL",
    full: "Analysis & Approaches",
    focus: "Advanced abstract mathematics, complex calculus, and rigorous mathematical proofs.",
    suited: "Engineering, Physics, Pure Mathematics, Computer Science.",
    help: "Demystifying high-level calculus, complex numbers, and vector spaces while building the stamina needed for the grueling Paper 3.",
  },
  {
    id: "ai-sl",
    track: "AI SL",
    full: "Applications & Interpretation",
    focus: "Practical real-world modeling, heavy data and statistical analysis, and technology integration.",
    suited: "Humanities, Psychology, Biology, Arts, Social Sciences.",
    help: "Teaching students how to interpret complex word problems and translate data into accurate mathematical models.",
  },
  {
    id: "ai-hl",
    track: "AI HL",
    full: "Applications & Interpretation",
    focus: "Advanced statistical analysis, matrices, differential equations, graph theory, and mathematical modeling.",
    suited: "Data Science, Finance, Economics, and Actuarial Science.",
    help: "Mastering university-level statistics, matrices, and linear algebra using advanced technology and simulation frameworks.",
  },
];

const dpPillars = [
  {
    title: "Number and Algebra",
    icon: Calculator,
    text: "Master sequences, series, logarithms, and binomial expansions. For HL students, we conquer complex numbers, matrices, and mathematical proof (including induction).",
  },
  {
    title: "Functions",
    icon: FunctionSquare,
    text: "Develop an intuitive understanding of transformations, composite functions, and graphing complex rational or reciprocal models.",
  },
  {
    title: "Geometry and Trigonometry",
    icon: DraftingCompass,
    text: "Navigate the unit circle, non-right-angled trigonometry, trigonometric identities, and 3D vector spaces.",
  },
  {
    title: "Statistics and Probability",
    icon: BarChart3,
    text: "From basic data metrics to complex distributions (Normal, Binomial, and Poisson) and advanced hypothesis testing (p-tests, t-tests, and non-linear regression analysis).",
  },
  {
    title: "Calculus",
    icon: Compass,
    text: "Master the mechanics of limits, derivatives, integration, and kinematic modeling. For HL tracks, we dive deep into volumes of revolution, Maclaurin series, and coupled differential equations.",
  },
];

const dpStrategy = [
  {
    title: "Elite Internal Assessment (IA) Guidance",
    icon: FileText,
    body: "The Mathematical Exploration (IA) is a 12-to-20-page independent research paper worth 20% of the final IB grade, and it is often a primary source of student anxiety. I guide students through the entire IA lifecycle: from selecting a unique, highly personal topic to structuring mathematical communication, avoiding fatal criteria errors, and ensuring the mathematics matches the expected rigor of their course level.",
  },
  {
    title: "Graphic Display Calculator (GDC) Fluency",
    icon: Calculator,
    body: "A student can understand the theory perfectly but still run out of time if they cannot wield their calculator efficiently. The IB permits advanced technology, and the AI track integrates it into nearly every question. I provide dedicated training for Texas Instruments (TI-84 / TI-Nspire) and Casio models, teaching advanced shortcuts, solver functions, and statistical graphing techniques to solve complex multi-mark questions in seconds under exam conditions.",
  },
  {
    title: "Dissecting Authentic IB Past Papers",
    icon: BookOpenCheck,
    body: "IB exam questions are notoriously convoluted and rarely look like standard textbook problems. We systematically break down past papers to train Command Term Recognition, knowing exactly what examiners expect from terms like hence, show that, or justify. We study official IB mark schemes so students learn how to pick up method marks even after an early calculation slip.",
  },
];

const iaFramework = [
  {
    title: "Weighting",
    text: "The IA is a mandatory component, accounting for exactly 20% of the overall grade across all DP Mathematics pathways.",
  },
  {
    title: "Course invariance",
    text: "The core framework and the first four criteria (A to D) are identical for both pathways: Analysis and Approaches (AA) and Applications and Interpretation (AI).",
  },
  {
    title: "Level adjustments",
    text: "SL and HL explorations share identical operational mandates but diverge under Criterion E (Use of Mathematics), which calibrates mathematical depth to each syllabus.",
  },
];

const iaRules = [
  {
    title: "Page count",
    icon: FileText,
    text: "The exploration must be between 12 and 20 pages, inclusive of all text, equations, charts, graphs, spreadsheets and imagery. Going over or under can cost presentation marks.",
  },
  {
    title: "Typography and layout",
    icon: BookOpenCheck,
    text: "Use double-line spacing throughout the main body so moderators can clearly read multi-line algebraic proofs and expressions.",
  },
  {
    title: "Academic honesty",
    icon: BadgeCheck,
    text: "Every concept, secondary dataset, external theorem and non-original diagram must be cited. Missing attribution risks disqualification for academic misconduct.",
  },
  {
    title: "Digital tools",
    icon: Calculator,
    text: "The IB expects you to use external software: graphing tools, spreadsheet engines, dynamic geometry software and advanced statistical packages.",
  },
];

const iaCriteria = [
  {
    letter: "A",
    name: "Presentation",
    marks: 4,
    mandate: "A cohesive structure: a clear introduction that contextualizes the problem, a logical body, and a formal conclusion.",
    rules: "Integrate tables, diagrams and graphs alongside the relevant text rather than dumping them into an unreferenced appendix.",
    sl: "",
    hl: "",
  },
  {
    letter: "B",
    name: "Mathematical Communication",
    marks: 4,
    mandate: "Accurate, consistent and professional use of mathematical symbols, terminology and notation throughout.",
    rules: "Raw calculator or spreadsheet readouts (such as 5.2E10 or asterisks for multiplication) are rejected. Convert them into formal notation, for example 5.2 x 10^10, and label every axis, line and variable.",
    sl: "",
    hl: "",
  },
  {
    letter: "C",
    name: "Personal Engagement",
    marks: 3,
    mandate: "Genuine curiosity, independent thought and creativity that show real ownership of the exploration.",
    rules: "Repeating a generic textbook or tutorial problem does not count. Show unique data collection, adapt standard models to unusual contexts, or view a familiar concept from a fresh perspective.",
    sl: "",
    hl: "",
  },
  {
    letter: "D",
    name: "Reflection",
    marks: 3,
    mandate: "Meaningful, continuous reflection throughout the paper, not just a summary paragraph at the end.",
    rules: "Evaluate the reliability of your data, point out the limitations of your models, explain what the results mean in a real-world context, and suggest how the study could be extended.",
    sl: "",
    hl: "",
  },
  {
    letter: "E",
    name: "Use of Mathematics",
    marks: 6,
    mandate: "Evaluates the accuracy, depth and appropriateness of the mathematics used. This is the only criterion that differs between SL and HL.",
    rules: "",
    sl: "The mathematics must match the depth and complexity of the SL syllabus, be completely correct, and show full understanding of the concepts used.",
    hl: "The exploration must use HL syllabus mathematics or significantly extend an SL concept, demonstrating sophistication, abstract logic, depth and rigorous precision.",
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
    .replace(/\u00c2\u00a0/g, " ")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2019/g, "'")
    .replace(/[\u201c\u201d]/g, '"');
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

  const normalizedSlug = page.slug.replace(/^\/|\/$/g, "");
  const mypStagePage = mypAcademicStages.find((stage) => stage.slug === normalizedSlug);
  const locationLabel = page.city || page.state || page.country || mypStagePage?.label || "IB Courses";
  const isMypCourse = page.course.id === "myp" || page.course.slug === "ib-myp-maths";
  const isDpCourse = ["aa-sl", "aa-hl", "ai-sl", "ai-hl"].includes(page.course.id);
  const dpFamily = page.course.id.startsWith("aa") ? "aa" : "ai";
  const dpShort = page.course.id.toUpperCase().replace("-", " ");
  const dpInfo = isDpCourse ? dpCourseInfo[page.course.id] : undefined;
  const dpHourRows = isDpCourse ? dpHours[page.course.id] : [];
  const dpTopics = isDpCourse
    ? dpSyllabus[dpFamily].map((topic) => ({
        name: topic.name,
        rows: page.course.id.endsWith("sl") ? topic.rows.filter((row) => row[0].startsWith("SL")) : topic.rows,
      }))
    : [];
  const isIaCourse = page.course.id === "ia";
  const coursePaperList = isDpCourse ? coursePapers[page.course.id] || [] : [];
  const courseVideos = isMypCourse ? mypVideos : isDpCourse || isIaCourse ? dpVideos : [];
  const courseFeedback = isMypCourse ? mypFeedback : isDpCourse || isIaCourse ? dpFeedback : [];
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
        <div className="relative mx-auto max-w-[1360px] px-6 py-24 text-white md:py-32">
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

      <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-start lg:gap-8">
        <SiteNav current={page.slug} />
        <div className="min-w-0 flex-1">

      {isMypCourse && !mypStagePage && (
        <section id="myp-framework" className="scroll-mt-24 border-b border-[#ded2c3] bg-[#efe8dd] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-3 lg:grid-cols-12">
              <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-6 lg:col-span-12">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">
                  MYP Mathematics Framework
                </p>
                <h2 className="mt-4 max-w-5xl text-2xl font-extrabold leading-snug md:text-3xl lg:text-[34px]">
                  The MYP Mathematics Framework: Building Confidence, Rigor & Elite Pre-DP Foundations
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  A clear map of how MYP students build confidence, communicate mathematics, and prepare for the DP jump.
                </p>
              </div>

              {mypFrameworkIntro.map((paragraph, index) => (
                <div
                  key={paragraph}
                  className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-5 lg:col-span-4"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">
                    {index === 0 ? "Research mindset" : index === 1 ? "Personal pacing" : "Pre-DP scaffolding"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#465160]">{paragraph}</p>
                </div>
              ))}

              <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6 lg:col-span-12">
                <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Core foundation</p>
                    <h3 className="mt-2 text-xl font-extrabold leading-tight md:text-2xl">
                      The 4 IB Math Assessment Criteria
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-[#465160]">
                    The official IB framework assesses every MYP student across four pillars. Coaching goes beyond
                    homework help and trains the exact execution, communication, and writing skills needed to perform
                    strongly in each criterion.
                  </p>
                </div>
              </div>

              {mypFrameworkCriteria.map((criterion, index) => (
                <article
                  key={criterion.title}
                  className={`rounded-lg border border-[#ded2c3] bg-[#fffaf0] p-5 ${
                    index === 2 ? "lg:col-span-7" : index === 3 ? "lg:col-span-5" : "lg:col-span-6"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base font-extrabold text-[#172033] md:text-lg">{criterion.title}</h4>
                    <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-xs font-extrabold text-white">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#0f5b78]">Focus: {criterion.focus}</p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#465160]">
                    {criterion.skills.map((skill) => (
                      <li key={skill} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-[#ded2c3] pt-3 text-sm leading-6 text-[#5d6673]">
                    <strong className="text-[#172033]">Example:</strong> {criterion.example}
                  </p>
                </article>
              ))}

              <div className="rounded-lg border border-[#d8ccbc] bg-white p-5 md:p-6 lg:col-span-12">
                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">DP transition</p>
                    <h3 className="mt-2 text-xl font-extrabold leading-tight md:text-2xl">
                      Dispelling the MYP-to-DP placement myth
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#465160]">
                      A student's middle-school pathway should guide preparation, not limit ambition.
                    </p>
                  </div>
                  <div className="grid gap-2.5">
                    {mypDpTransitionPoints.map((point) => (
                      <div key={point} className="flex gap-3 border-b border-[#e8e1d6] pb-2.5 text-sm font-semibold leading-6 text-[#465160] last:border-b-0 last:pb-0">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isMypCourse && !mypStagePage && (
        <section id="myp-academic-stage" className="scroll-mt-24 border-b border-[#ded2c3] bg-[#172033] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="rounded-lg border border-white/10 bg-[#101827] p-5 text-white md:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Academic pathway</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
                  Choose Your Child's Academic Stage
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                  Explore the specific, topic-by-topic frameworks we cover across the different stages of the Middle
                  Years Programme. Each page includes syllabus focus, key and related concept integrations, and tailored
                  learning objectives.
                </p>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {[
                    ["01", "Build confidence"],
                    ["02", "Raise rigor"],
                    ["03", "Prepare for AA HL"],
                  ].map(([step, label]) => (
                    <div key={step} className="flex items-center gap-4 py-3">
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-white/10 text-xs font-extrabold text-[#f5b84b]">
                        {step}
                      </span>
                      <span className="text-sm font-bold text-slate-200">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {mypAcademicStages.map((stage, index) => (
                  <details
                    key={stage.slug}
                    className="group overflow-hidden rounded-lg border border-white/10 bg-white"
                  >
                    <summary className="grid cursor-pointer list-none gap-4 p-4 marker:hidden md:grid-cols-[64px_1fr_42px] md:p-5 [&::-webkit-details-marker]:hidden">
                      <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#f5b84b] text-sm font-extrabold text-[#172033] md:h-14 md:w-14">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a35c20]">
                            {stage.eyebrow}
                          </p>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0f5b78]" aria-hidden="true" />
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f5b78]">
                            {stage.label}
                          </p>
                        </div>
                        <a
                          href={stage.href}
                          className="mt-2 block text-lg font-extrabold leading-snug text-[#172033] hover:text-[#0f5b78] md:text-xl"
                        >
                          {stage.title}
                        </a>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#465160]">{stage.summary}</p>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#d8ccbc] bg-[#fbf8f2] text-[#0f5b78] transition group-open:bg-[#0f5b78] group-open:text-white">
                        <ChevronRight className="h-5 w-5 transition group-open:rotate-90" />
                      </span>
                    </summary>
                    <div className="border-t border-[#e8e1d6] bg-[#fbf8f2] px-4 py-5 md:px-6">
                      <div className="grid gap-3 md:grid-cols-[150px_1fr] md:items-start">
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#a35c20]">
                          Stage focus
                        </p>
                        <p className="max-w-3xl text-base font-semibold leading-8 text-[#334155]">{stage.intro}</p>
                      </div>

                      <div className="mt-5 border-t border-[#e8e1d6] pt-5">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#a35c20]">
                            Key concept map
                          </p>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0f5b78]">
                            IB thinking habits
                          </p>
                        </div>
                        <div className="mt-4 divide-y divide-[#e8e1d6]">
                          {stage.concepts.map(([title, text], conceptIndex) => (
                            <div
                              key={title}
                              className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[44px_150px_1fr] sm:items-start"
                            >
                              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#172033] text-[11px] font-extrabold text-[#f5b84b]">
                                {String(conceptIndex + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-base font-extrabold leading-6 text-[#172033]">{title}</h3>
                              <p className="max-w-xl text-sm leading-6 text-[#5d6673]">{text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col gap-3 border-t border-[#e8e1d6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-lg text-sm font-semibold leading-6 text-[#5d6673]">
                          Open the full page for syllabus detail, learning objectives, and the coaching framework for this
                          stage.
                        </p>
                        <a
                          href={stage.href}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f5b78] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white"
                        >
                          View full stage page
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {mypStagePage && (
        <section className="border-b border-[#ded2c3] bg-[#efe8dd] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">{mypStagePage.eyebrow}</p>
                <h2 className="mt-4 max-w-5xl text-2xl font-extrabold leading-tight md:text-3xl">
                  {mypStagePage.title}
                </h2>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">{mypStagePage.intro}</p>
              </div>

              <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">What students build</p>
                <div className="mt-4 space-y-3">
                  {mypStagePage.objectives.map((objective) => (
                    <div key={objective} className="flex gap-3 text-sm leading-6 text-[#465160]">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {mypStagePage.concepts.map(([title, text], index) => (
                <div key={title} className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#f5b84b] text-xs font-extrabold text-[#172033]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-extrabold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#465160]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Topic framework</p>
                  <h3 className="mt-2 text-xl font-extrabold leading-tight">A cleaner map of what gets covered</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-[#5d6673]">
                  Each block keeps the syllabus scannable, so parents can see the academic progression without wading
                  through a long wall of text.
                </p>
              </div>
              <div className="mt-5 grid gap-3 lg:grid-cols-3 lg:items-start">
                {mypStagePage.syllabusGroups.map((group, index) => (
                  <div key={group.title} className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4 md:p-5">
                    <div className="flex items-start gap-3">
                      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-[#172033] text-xs font-extrabold text-[#f5b84b]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="pt-1 font-extrabold">{group.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-[#465160]">
                      {group.topics.map((topic) => (
                        <li key={topic} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0f5b78]" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {mypStagePage.slug === "myp-1-3" && (
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">MYP 1-3 support</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                    Laying the Foundations: MYP 1-3 Mathematics (Grades 6-8)
                  </h3>
                  <div className="mt-5 grid gap-5 text-sm leading-7 text-[#465160] md:grid-cols-2">
                    <p>
                      The transition from primary school math to the IB Middle Years Programme can be jarring. Suddenly,
                      math is not just about memorizing timetables or formulas. It is about investigating patterns,
                      explaining real-world scenarios, and writing structured math reports.
                    </p>
                    <p>
                      In MYP 1, 2, and 3, I focus on building the bulletproof foundations and confidence students need so
                      they not only survive math, but also set themselves up to enter the Extended Math track in Grade 9.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Conceptual learning</p>
                    <h3 className="mt-3 text-xl font-extrabold leading-tight">
                      Conquering the "IB Transition Shock"
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#465160]">
                      Many bright students experience a drop in grades when they enter MYP 1 because they do not yet
                      understand how they are assessed or how to connect abstract math to the wider world. I demystify
                      the system early by teaching students to look at math through IB Key and Related Concepts, driven
                      by real-world Global Contexts.
                    </p>
                    <div className="mt-5 grid gap-3">
                      {myp13KeyConcepts.map((concept) => (
                        <div key={concept.title} className="border-l border-[#0f5b78] pl-4">
                          <h4 className="font-extrabold">{concept.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-[#5d6673]">{concept.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#ded2c3] bg-[#172033] p-5 text-white md:p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">
                      Global contexts
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold leading-tight">
                      Making students ask: why am I learning this?
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      To excel in the IB, students must connect mathematics to authentic situations. We explore Related
                      Concepts like Measurement, Patterns, Space, Change, and Equivalence by linking them to MYP Global
                      Contexts.
                    </p>
                    <div className="mt-5 space-y-3">
                      {myp13GlobalContextExamples.map((example) => (
                        <div key={example} className="flex gap-3 border-t border-white/10 pt-3 text-sm leading-6 first:border-t-0 first:pt-0">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#f5b84b]" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">
                        Assessment criteria
                      </p>
                      <h3 className="mt-3 text-xl font-extrabold leading-tight">
                        Mastering the 4 Math Assessment Criteria
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#465160]">
                        I translate the official IB rubrics into student-friendly goals and coach Command Terms Mastery,
                        so students know exactly what an examiner wants when a question asks them to verify, justify, or
                        state.
                      </p>
                    </div>
                    <a
                      href={paperViewerHref("MYP Command Terms", commandTermsPdfHref)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f5b78] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Command Terms
                    </a>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-lg border border-[#e8e1d6]">
                    <div className="hidden grid-cols-[0.9fr_1fr_1.15fr] bg-[#fbf8f2] text-xs font-extrabold uppercase tracking-[0.12em] text-[#a35c20] md:grid">
                      <div className="border-r border-[#e8e1d6] p-4">Criterion</div>
                      <div className="border-r border-[#e8e1d6] p-4">What it means</div>
                      <div className="p-4">How I help students</div>
                    </div>
                    {myp13CriteriaRows.map((row) => (
                      <div
                        key={row.criterion}
                        className="grid border-t border-[#e8e1d6] text-sm leading-6 text-[#465160] first:border-t-0 md:grid-cols-[0.9fr_1fr_1.15fr]"
                      >
                        <div className="border-b border-[#e8e1d6] p-4 font-extrabold text-[#172033] md:border-b-0 md:border-r">
                          {row.criterion}
                        </div>
                        <div className="border-b border-[#e8e1d6] p-4 md:border-b-0 md:border-r">{row.meaning}</div>
                        <div className="p-4">{row.support}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Mathematical pillars</p>
                    <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                      <div>
                        <h3 className="text-xl font-extrabold leading-tight">
                          Mastering the Four Mathematical Pillars
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#465160]">
                          We dive deep into the core conceptual frameworks required by the IB, ensuring there are no
                          hidden gaps in the student's knowledge.
                        </p>
                      </div>
                      <div className="hidden items-center gap-2 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0f5b78] md:flex">
                        <BadgeCheck className="h-4 w-4" />
                        Core skills
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
                      {myp13Pillars.map((pillar) => {
                        const PillarIcon = pillar.icon;
                        return (
                          <div
                            key={pillar.title}
                            className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4"
                          >
                            <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#0f5b78] text-white">
                              <PillarIcon className="h-6 w-6" />
                            </div>
                            <h4 className="mt-3 text-base font-extrabold leading-snug">{pillar.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-[#5d6673]">{pillar.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-lg border border-[#ded2c3] bg-[#172033] p-5 text-white md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">
                            Investigations
                          </p>
                          <h3 className="mt-3 text-xl font-extrabold leading-tight">
                            Introduction to Math Investigations
                          </h3>
                        </div>
                        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-lg bg-white/10 text-[#f5b84b]">
                          <BookOpenCheck className="h-6 w-6" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Grades 6-8 is where students are first introduced to mathematical investigations. This is where
                        the tears usually happen, so I teach the exact framework for Criteria B, C, and D.
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                        {myp13InvestigationFramework.map((item, index) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#f5b84b] text-[11px] font-extrabold text-[#172033]">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-[#ded2c3] bg-[#fffaf0] p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">
                            Future-proofing
                          </p>
                          <h3 className="mt-3 text-xl font-extrabold leading-tight">Ready for MYP 4 and 5</h3>
                        </div>
                        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-white">
                          <Compass className="h-6 w-6" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#465160]">
                        The habits built in Grades 6 to 8 dictate a student's success in high school. Tutoring focuses
                        heavily on Approaches to Learning skills before the high-stakes years begin.
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#465160]">
                        {myp13AtlSkills.map((skill, index) => (
                          <li key={skill} className="flex gap-3">
                            <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-white text-[11px] font-extrabold text-[#0f5b78] ring-1 ring-[#ded2c3]">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Detailed syllabus</p>
                      <h3 className="mt-2 text-2xl font-extrabold leading-tight">
                        MYP 1 to 3 Syllabus (Grades 6-8 Foundations)
                      </h3>
                    </div>
                    <div className="hidden items-center gap-2 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] px-3 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0f5b78] md:flex">
                      <BookOpenCheck className="h-4 w-4" />
                      Unified pathway
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[#465160]">
                    During the first three years of the MYP, all students follow a unified pathway designed to build core
                    mathematical fluency and introduce critical thinking frameworks.
                  </p>

                  <div className="mt-6 grid gap-4 lg:grid-cols-3">
                    {myp13DetailedSyllabus.map((year) => (
                      <div key={year.year} className="flex flex-col rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5">
                        <div className="flex items-center justify-between gap-3 border-b border-[#e8e1d6] pb-4">
                          <h4 className="text-lg font-extrabold text-[#172033]">{year.year}</h4>
                          <span className="rounded-lg bg-[#0f5b78] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                            {year.grade}
                          </span>
                        </div>
                        <div className="mt-4 space-y-4">
                          {year.strands.map((item) => {
                            const StrandIcon = item.icon;
                            return (
                              <div key={item.strand} className="flex gap-3">
                                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-white text-[#0f5b78] ring-1 ring-[#e8e1d6]">
                                  <StrandIcon className="h-4 w-4" />
                                </span>
                                <div>
                                  <p className="text-sm font-extrabold text-[#172033]">{item.strand}</p>
                                  <p className="mt-1 text-sm leading-6 text-[#5d6673]">{item.detail}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {mypStagePage.slug === "myp-4-5" && (
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Course pathways</p>
                  <h3 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight md:text-3xl">
                    The Course Pathways: Standard vs. Extended
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    In MYP 4 and 5 (Grades 9 and 10), mathematics splits into two streams. The right choice protects a
                    student's grades today and keeps their IB Diploma options open tomorrow.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {myp45Tracks.map((track) => {
                    const TrackIcon = track.icon;
                    const isExtended = track.accent === "extended";
                    return (
                      <div
                        key={track.name}
                        className={`flex flex-col rounded-lg border p-5 md:p-6 ${
                          isExtended ? "border-[#e7d4ad] bg-[#fffaf0]" : "border-[#ded2c3] bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span
                              className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg text-white ${
                                isExtended ? "bg-[#a35c20]" : "bg-[#0f5b78]"
                              }`}
                            >
                              <TrackIcon className="h-5 w-5" />
                            </span>
                            <h4 className="text-lg font-extrabold md:text-xl">{track.name}</h4>
                          </div>
                          <span
                            className={`hidden rounded-lg px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] sm:block ${
                              isExtended ? "bg-[#f5e6c8] text-[#a35c20]" : "bg-[#e0eef2] text-[#0f5b78]"
                            }`}
                          >
                            {track.tag}
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[#465160]">{track.body}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <p className="text-sm leading-7 text-[#465160]">
                    Choosing the wrong track can leave a student under-challenged or completely overwhelmed, and it can
                    limit their options in the IB Diploma Programme (DP). Here is how I help students navigate this
                    crossroads and reach peak performance, whichever path they take.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {myp45Navigation.map((block, index) => (
                    <div
                      key={block.title}
                      className="flex flex-col rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-sm font-extrabold text-white">
                          {index + 1}
                        </span>
                        <h4 className="pt-1 text-lg font-extrabold leading-snug">{block.title}</h4>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#465160]">{block.intro}</p>
                      <div className="mt-4 space-y-3">
                        {block.points.map(([title, detail]) => (
                          <div key={title} className="flex gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                            <p className="text-sm leading-6 text-[#465160]">
                              <span className="font-extrabold text-[#172033]">{title}:</span> {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Detailed syllabus</p>
                  <h3 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight md:text-3xl">
                    {"MYP 4 & 5 Syllabus (Grades 9-10 Standard vs. Extended)"}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    The required time allocation is identical across both streams, but the depth and complexity of the
                    topics vary dramatically. Extended layers additional topics on top of the full standard syllabus.
                  </p>
                </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-5">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[820px] border-collapse text-left">
                      <thead>
                        <tr>
                          <th className="w-[168px] border border-[#1f2d40] bg-[#172033] px-4 py-3 align-middle text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                            Topic Area
                          </th>
                          <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 align-middle text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                            <span className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#5fbfe0]" />
                              Standard Track
                            </span>
                          </th>
                          <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 align-middle text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-[#f5b84b]" />
                              Extended Track
                              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-[#f5d79b]">
                                Additional Topics
                              </span>
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {myp45Syllabus.map((strand, index) => {
                          const StrandIcon = strand.icon;
                          return (
                            <tr key={strand.strand} className={index % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}>
                              <th scope="row" className="border border-[#e3d9ca] px-4 py-4 text-left align-top">
                                <span className="flex items-start gap-2.5">
                                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-[#172033] text-[#f5b84b]">
                                    <StrandIcon className="h-4 w-4" />
                                  </span>
                                  <span className="text-sm font-extrabold leading-snug text-[#172033]">{strand.strand}</span>
                                </span>
                              </th>
                              <td className="border border-[#e3d9ca] px-4 py-4 align-top">
                                <ul className="space-y-2.5">
                                  {strand.standard.map(([title, detail]) => (
                                    <li key={title} className="flex gap-2 text-sm leading-6 text-[#465160]">
                                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0f5b78]" />
                                      <span>
                                        <span className="font-extrabold text-[#172033]">{title}:</span> {detail}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                              <td className="border border-[#e3d9ca] px-4 py-4 align-top">
                                <ul className="space-y-2.5">
                                  {strand.extended.map(([title, detail]) => (
                                    <li key={title} className="flex gap-2 text-sm leading-6 text-[#465160]">
                                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#a35c20]" />
                                      <span>
                                        <span className="font-extrabold text-[#172033]">{title}:</span> {detail}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-[#8a8170] lg:hidden">Swipe horizontally to compare both tracks.</p>
                </div>

                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Choosing a pathway</p>
                  <h3 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight md:text-3xl">
                    Decoding the Pathways: Standard, Extended, and Enrichment
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    In the IB Middle Years Programme, mathematics is designed to challenge students according to their
                    individual academic goals and learning paces. The syllabus above divides topics into distinct
                    pathways. Here is how the official IB framework defines these levels, and how my signature enrichment
                    track takes them a step further.
                  </p>
                </div>

                {myp45Pathways.map((pathway, index) => (
                  <div key={pathway.name} className={`rounded-lg border p-5 md:p-6 ${pathway.cardClass}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg text-base font-extrabold text-white ${pathway.badgeClass}`}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className={`text-lg font-extrabold leading-tight md:text-xl ${pathway.titleClass}`}>
                          {pathway.name}
                        </h4>
                        <p className="mt-0.5 text-sm font-semibold text-[#5d6673]">{pathway.subtitle}</p>
                      </div>
                      {pathway.signature && (
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#fef3d8] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#a35c20]">
                          <Star className="h-3.5 w-3.5" />
                          Signature track
                        </span>
                      )}
                    </div>

                    <p className={`mt-4 border-l-2 pl-4 text-sm italic leading-7 text-[#465160] ${pathway.quoteClass}`}>
                      {pathway.definition}
                    </p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a35c20]">Who it is for</p>
                        <p className="mt-1.5 text-sm leading-7 text-[#465160]">{pathway.forWho}</p>
                      </div>
                      <div className="sm:border-l sm:border-[#e8e1d6] sm:pl-6">
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">The Approach</p>
                        <p className="mt-1.5 text-sm leading-7 text-[#465160]">{pathway.approach}</p>
                      </div>
                    </div>

                    {pathway.href && (
                      <a
                        href={pathway.href}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#172033] px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white"
                      >
                        Explore the Enrichment Tier
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {mypStagePage.slug === "myp-enrichment" && (
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Choosing a pathway</p>
                  <h3 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight md:text-3xl">
                    Decoding the Pathways: Standard, Extended, and Enrichment
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    In the IB Middle Years Programme, mathematics is designed to challenge students according to their
                    individual academic goals and learning paces. The syllabus below divides topics into three distinct
                    pathways. Here is how the official IB framework defines these levels, and how my signature enrichment
                    track takes them a step further.
                  </p>
                </div>

                {myp45Pathways
                  .filter((pathway) => !pathway.signature)
                  .map((pathway, index) => (
                    <div key={pathway.name} className={`rounded-lg border p-5 md:p-6 ${pathway.cardClass}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg text-base font-extrabold text-white ${pathway.badgeClass}`}
                        >
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className={`text-lg font-extrabold leading-tight md:text-xl ${pathway.titleClass}`}>
                            {pathway.name}
                          </h4>
                          <p className="mt-0.5 text-sm font-semibold text-[#5d6673]">{pathway.subtitle}</p>
                        </div>
                      </div>
                      <p className={`mt-4 border-l-2 pl-4 text-sm italic leading-7 text-[#465160] ${pathway.quoteClass}`}>
                        {pathway.definition}
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a35c20]">Who it is for</p>
                          <p className="mt-1.5 text-sm leading-7 text-[#465160]">{pathway.forWho}</p>
                        </div>
                        <div className="sm:border-l sm:border-[#e8e1d6] sm:pl-6">
                          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">The Approach</p>
                          <p className="mt-1.5 text-sm leading-7 text-[#465160]">{pathway.approach}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Shared foundation</p>
                  <h4 className="mt-2 text-xl font-extrabold md:text-2xl">The Foundation of All MYP Mathematics</h4>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">
                    Regardless of whether a student is on the Standard or Extended track, the official IB framework
                    dictates that all courses must train students to:
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {enrFoundationPoints.map((point, index) => (
                      <div key={point} className="flex gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4">
                        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-sm font-extrabold text-white">
                          {index === 0 ? "D" : "B"}
                        </span>
                        <p className="text-sm leading-6 text-[#465160]">{point}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#465160]">
                    My coaching ensures students don't just learn the math, but master the exact writing and analytical
                    skills needed to ace these specific IB criteria.
                  </p>
                </div>

                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f5b84b] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#172033]">
                    <Star className="h-3.5 w-3.5" />
                    Signature pathway
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                    What is the Enrichment Pathway?
                  </h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                    <p>
                      While many schools limit their curriculum strictly to the Extended framework, entering the IB
                      Diploma Programme (DP) still presents a notorious "transition shock." To completely bridge this gap,
                      I offer a specialized Enrichment Pathway.
                    </p>
                    <p>
                      Enrichment is not just extra homework. It is the strategic introduction of advanced, high-level
                      mathematical concepts (such as polar coordinates, number bases, fractals, and manual statistical
                      derivations) that lay the conceptual groundwork for university-level prep.
                    </p>
                  </div>
                  <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.06] p-4 md:p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f5b84b]">Why it matters</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      By introducing these advanced logical frameworks early in a supportive environment, students build
                      exceptional mathematical maturity. When they eventually encounter daunting DP topics like complex
                      numbers or advanced vectors, they do not panic, they excel, because they have already mastered the
                      underlying logic.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-5">
                  <div className="mb-4 flex items-center gap-2 px-1">
                    <BarChart3 className="h-5 w-5 text-[#0f5b78]" />
                    <h4 className="text-lg font-extrabold md:text-xl">How the Pathways Compare At a Glance</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead>
                        <tr>
                          <th className="w-[150px] border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                            Feature
                          </th>
                          <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#9fd6ea]">
                            Standard Track
                          </th>
                          <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f0c987]">
                            Extended Track
                          </th>
                          <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f5b84b]">
                            Enrichment Track
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {enrComparison.map((row, index) => (
                          <tr key={row.feature} className={index % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}>
                            <th scope="row" className="border border-[#e3d9ca] px-4 py-4 text-left align-top text-sm font-extrabold text-[#172033]">
                              {row.feature}
                            </th>
                            <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                              {row.standard}
                            </td>
                            <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                              {row.extended}
                            </td>
                            <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                              {row.enrichment}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-[#8a8170] lg:hidden">Swipe horizontally to compare all three tracks.</p>
                </div>

                <div className="rounded-lg border border-[#e7d4ad] bg-[#fffaf0] p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#a35c20] text-white">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-lg font-extrabold md:text-xl">
                        A Vital Note on Eligibility: The MYP-to-DP Transition
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[#465160]">
                        A common misconception among parents and students is that their MYP math placement permanently
                        locks their future academic options.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#465160]">
                        <span className="font-extrabold text-[#172033]">The Reality:</span> Irrespective of which
                        mathematics track a student takes in the MYP, whether Standard or Extended, they are still
                        officially eligible to choose any of the four mathematics pathways when entering the DP (AA SL/HL
                        or AI SL/HL). Taking Standard Math in MYP 1-5 does not disqualify a student from taking Higher
                        Level Math in the Diploma Programme.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Syllabus matrix</p>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                    The Master MYP Mathematics Syllabus Matrix
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    Below is the exact topic breakdown we navigate in our sessions, showing how we bridge the gap from
                    core standard math all the way to elite enrichment.
                  </p>
                </div>

                {enrichmentMatrix.map((module) => (
                  <div key={module.title} className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-6">
                    <div className="px-1">
                      <h4 className="text-lg font-extrabold leading-tight md:text-xl">{module.title}</h4>
                      <p className="mt-1 text-sm font-bold text-[#a35c20]">{module.subtitle}</p>
                      <p className="mt-2 max-w-4xl text-sm leading-7 text-[#465160]">{module.desc}</p>
                    </div>
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full min-w-[860px] border-collapse text-left">
                        <thead>
                          <tr>
                            <th className="w-[150px] border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                              Level / Stage
                            </th>
                            <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                              {module.colA}
                            </th>
                            <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                              {module.colB}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {module.rows.map((row, index) => {
                            const split = row.a.length > 0 && row.b.length > 0;
                            const renderList = (items: string[], dotClass: string) => (
                              <ul className="space-y-2.5">
                                {items.map((item) => (
                                  <li key={item} className="flex gap-2 text-sm leading-6 text-[#465160]">
                                    <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotClass}`} />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                            return (
                              <tr key={row.stage} className={index % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}>
                                <th scope="row" className="border border-[#e3d9ca] px-4 py-4 text-left align-top">
                                  <span className="block text-sm font-extrabold leading-snug text-[#172033]">
                                    {row.stage}
                                  </span>
                                  <span
                                    className={`mt-1.5 inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase leading-tight tracking-[0.1em] ${matrixTagStyles[index]}`}
                                  >
                                    {row.tag}
                                  </span>
                                </th>
                                {split ? (
                                  <>
                                    <td className="border border-[#e3d9ca] px-4 py-4 align-top">
                                      {renderList(row.a, "bg-[#0f5b78]")}
                                    </td>
                                    <td className="border border-[#e3d9ca] px-4 py-4 align-top">
                                      {renderList(row.b, "bg-[#a35c20]")}
                                    </td>
                                  </>
                                ) : (
                                  <td colSpan={2} className="border border-[#e3d9ca] px-4 py-4 align-top">
                                    {renderList([...row.a, ...row.b], "bg-[#0f5b78]")}
                                  </td>
                                )}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-[#0c4a61] bg-[#0f5b78] p-5 text-white md:p-6">
                  <p className="text-sm leading-7 md:text-base">
                    By explicitly covering the Extended and Enrichment pathways early, I bridge the gap between MYP and DP
                    Math, ensuring your child is structurally prepared to secure a 7 in DP AA or AI Math.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-3">
              {mypAcademicStages
                .filter((stage) => stage.slug !== mypStagePage.slug)
                .map((stage) => (
                  <a
                    key={stage.slug}
                    href={stage.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#d8ccbc] bg-white px-4 py-2.5 text-sm font-bold text-[#172033]"
                  >
                    {stage.label}
                    <ChevronRight className="h-4 w-4 text-[#0f5b78]" />
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

      {isDpCourse && (
        <section id="dp-pathways" className="scroll-mt-24 border-b border-[#ded2c3] bg-[#efe8dd] py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-4 px-6">
            <div className="rounded-lg border border-[#29445a] bg-[#172033] p-6 text-white md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.45fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">
                    IB Diploma Programme support
                  </p>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-4xl">
                    IB Diploma Programme (DP) Mathematics Support
                  </h2>
                  <p className="mt-3 text-base font-semibold text-[#9fd6ea] md:text-lg">
                    Demystifying the Core, Mastering the Exams, and Securing Your 7
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300 md:text-base">
                    {dpIntro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 md:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f5b84b]">
                    DP Maths at a glance
                  </p>
                  <div className="mt-4 divide-y divide-white/10">
                    {[
                      ["4", "Pathways: AA SL/HL and AI SL/HL"],
                      ["240 / 150", "HL / SL minimum teaching hours"],
                      ["20%", "Weight of the Internal Assessment"],
                      ["7", "The grade we coach students toward"],
                    ].map(([value, label]) => (
                      <div key={label} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                        <span className="w-[88px] flex-shrink-0 text-xl font-extrabold text-[#f5b84b]">{value}</span>
                        <span className="text-sm leading-6 text-slate-300">{label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={site.bookingHref}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f5b84b] px-5 py-3 text-sm font-extrabold text-[#172033] transition-colors hover:bg-[#e7a936]"
                  >
                    Book a free DP trial
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-6">
              <div className="px-1">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Choosing a track</p>
                <h3 className="mt-2 text-xl font-extrabold md:text-2xl">Navigating the DP Math Pathways</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#465160]">
                  Choosing the right track and level is vital for university alignment and academic sanity. Here is how I
                  support students across the four distinct branches of DP Mathematics.
                </p>
              </div>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse text-left">
                  <thead>
                    <tr>
                      {["Course Track", "Core Focus", "Best Suited For", "How I Help You Succeed"].map((heading, headingIndex) => (
                        <th
                          key={heading}
                          className={`border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white ${
                            headingIndex === 0 ? "w-[140px]" : ""
                          }`}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dpPathways.map((row, index) => {
                      const isCurrent = row.id === page.course.id;
                      return (
                        <tr
                          key={row.track}
                          className={isCurrent ? "bg-[#e7f4f8]" : index % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}
                        >
                          <th scope="row" className="border border-[#e3d9ca] px-4 py-4 text-left align-top">
                            <span className="block text-sm font-extrabold text-[#172033]">{row.track}</span>
                            <span className="mt-0.5 block text-xs font-semibold text-[#5d6673]">{row.full}</span>
                            {isCurrent && (
                              <span className="mt-2 inline-block rounded-full bg-[#0f5b78] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                                This course
                              </span>
                            )}
                          </th>
                          <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                            {row.focus}
                          </td>
                          <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                            {row.suited}
                          </td>
                          <td className="border border-[#e3d9ca] px-4 py-4 align-top text-sm leading-6 text-[#465160]">
                            {row.help}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[#8a8170] lg:hidden">Swipe horizontally to compare all four tracks.</p>
            </div>

            <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Syllabus pillars</p>
              <h3 className="mt-2 text-xl font-extrabold md:text-2xl">
                Comprehensive Mastery Across the 5 Syllabus Pillars
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[#465160]">
                Every DP Mathematics exam assesses students across five core branches. My curriculum ensures complete
                fluency in each domain, adapted strictly to whether you are on the AA or AI pathway.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {dpPillars.map((pillar, index) => {
                  const PillarIcon = pillar.icon;
                  const isLastOdd = index === dpPillars.length - 1 && dpPillars.length % 2 === 1;
                  return (
                    <div
                      key={pillar.title}
                      className={`rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4 md:p-5 ${
                        isLastOdd ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-white">
                          <PillarIcon className="h-5 w-5" />
                        </span>
                        <h4 className="text-base font-extrabold text-[#172033] md:text-lg">{pillar.title}</h4>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#465160]">{pillar.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border border-[#29445a] bg-[#172033] p-6 text-white md:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">The strategic advantage</p>
              <h3 className="mt-3 text-xl font-extrabold leading-tight md:text-2xl">Beyond the Textbook</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                To achieve a 6 or a 7 in DP Math, standard textbook practice is not enough. My coaching integrates the
                three critical pillars of IB assessment success.
              </p>
            </div>

            {dpStrategy.map((item, index) => {
              const StrategyIcon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-base font-extrabold text-white">
                      {index + 1}
                    </span>
                    <div className="flex items-center gap-2 pt-1.5">
                      <StrategyIcon className="h-5 w-5 flex-shrink-0 text-[#0f5b78]" />
                      <h4 className="text-lg font-extrabold leading-snug text-[#172033]">{item.title}</h4>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">{item.body}</p>
                </div>
              );
            })}

            <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Course overview</p>
              <h3 className="mt-2 text-xl font-extrabold md:text-2xl">IB DP Math Syllabus: Topics &amp; Overview</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#465160]">
                Designed for both Standard Level (SL) and Higher Level (HL) students, DP Mathematics covers a wide range
                of topics crucial for understanding and applying mathematics in real-world and academic scenarios. Higher
                Level study requires a minimum of 240 teaching hours, while Standard Level requires a minimum of 150. The
                syllabus spans statistics, calculus, and mathematical modeling across all five pillars.
              </p>
            </div>
          </div>
        </section>
      )}

      {isDpCourse && dpInfo && (
        <section id="dp-syllabus" className="scroll-mt-24 border-b border-[#ded2c3] bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-4 px-6">
            <div className="rounded-lg border border-[#ded2c3] bg-[#fbf8f2] p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Course profile</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">Mathematics: {dpInfo.tagline}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#465160] md:text-base">{dpInfo.description}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#e8e1d6] bg-white p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">Suitable for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {dpInfo.suitableFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#e8e1d6] bg-[#fbf8f2] px-3 py-1.5 text-xs font-semibold text-[#465160]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-[#e8e1d6] bg-white p-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">Choose {dpShort} if</p>
                  <ul className="mt-3 space-y-2.5">
                    {dpInfo.chooseIf.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#465160]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Syllabus content</p>
              <h3 className="mt-3 text-xl font-extrabold leading-tight md:text-2xl">
                {dpShort} Syllabus, Content and Guidance
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                The full topic-by-topic breakdown we work through in sessions, with the IB content statements and the
                guidance examiners expect. Tables scroll sideways on smaller screens.
              </p>
            </div>

            {dpTopics.map((topic, topicIndex) => (
              <div key={topic.name} className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-6">
                <div className="flex items-center gap-3 px-1">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#172033] text-sm font-extrabold text-[#f5b84b]">
                    {topicIndex + 1}
                  </span>
                  <h4 className="text-lg font-extrabold md:text-xl">{topic.name}</h4>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="w-[112px] border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                          Subtopic
                        </th>
                        <th className="w-[38%] border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                          Content
                        </th>
                        <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                          Guidance / Clarification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topic.rows.map((row, rowIndex) => {
                        const isAhl = row[0].startsWith("AHL");
                        return (
                          <tr key={row[0]} className={rowIndex % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}>
                            <th scope="row" className="border border-[#e3d9ca] px-4 py-3 text-left align-top">
                              <span
                                className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-extrabold ${
                                  isAhl ? "bg-[#f5e6c8] text-[#a35c20]" : "bg-[#e0eef2] text-[#0f5b78]"
                                }`}
                              >
                                {row[0]}
                              </span>
                            </th>
                            <td className="border border-[#e3d9ca] px-4 py-3 align-top text-sm font-semibold leading-6 text-[#172033]">
                              {row[1]}
                            </td>
                            <td className="border border-[#e3d9ca] px-4 py-3 align-top text-sm leading-6 text-[#465160]">
                              {row[2]}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div className="rounded-lg border border-[#ded2c3] bg-white p-4 md:p-6">
              <div className="flex flex-col gap-1 px-1 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Time allocation</p>
                  <h3 className="mt-2 text-xl font-extrabold md:text-2xl">{dpShort} Teaching Hours</h3>
                </div>
                <p className="text-xs font-semibold text-[#8a8170]">Minimum IB teaching hours by topic.</p>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[360px] border-collapse text-left">
                  <thead>
                    <tr>
                      <th className="border border-[#1f2d40] bg-[#172033] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                        Topic
                      </th>
                      <th className="w-[120px] border border-[#1f2d40] bg-[#172033] px-4 py-3 text-right text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                        Hours
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dpHourRows.map((row, rowIndex) => {
                      const isTotal = row.topic === "Total";
                      return (
                        <tr
                          key={row.topic}
                          className={isTotal ? "bg-[#172033]" : rowIndex % 2 === 1 ? "bg-[#fbf8f2]" : "bg-white"}
                        >
                          <th
                            scope="row"
                            className={`border border-[#e3d9ca] px-4 py-3 text-left text-sm ${
                              isTotal ? "font-extrabold text-white" : "font-semibold text-[#172033]"
                            }`}
                          >
                            {row.topic}
                          </th>
                          <td
                            className={`border border-[#e3d9ca] px-4 py-3 text-right text-sm font-extrabold ${
                              isTotal ? "text-[#f5b84b]" : "text-[#0f5b78]"
                            }`}
                          >
                            {row.hours}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {coursePaperList.length > 0 && (
              <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Practice</p>
                <h3 className="mt-2 text-xl font-extrabold md:text-2xl">{dpShort} Sample Papers</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#465160]">
                  Open each question paper alongside its mark scheme, shown side by side in a new tab.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {coursePaperList.map((paper) => (
                    <div key={paper.label} className="flex flex-col rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-white">
                          <FileText className="h-4 w-4" />
                        </span>
                        <h4 className="font-extrabold text-[#172033]">{paper.label}</h4>
                      </div>
                      <p className="mt-2 text-xs font-semibold text-[#5d6673]">
                        {paper.ms ? "Question paper + mark scheme" : "Question paper"}
                      </p>
                      <a
                        href={paperViewerHref(`${dpShort} ${paper.label}`, paper.qp, paper.ms)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f5b78] px-4 py-2.5 text-xs font-extrabold text-white transition-colors hover:bg-[#0b4358]"
                      >
                        {paper.ms ? "View paper + answer key" : "View question paper"}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {isIaCourse && (
        <section id="ia-overview" className="scroll-mt-24 border-b border-[#ded2c3] bg-[#efe8dd] py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-4 px-6">
            <div className="rounded-lg border border-[#29445a] bg-[#172033] p-6 text-white md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.45fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Internal Assessment</p>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-4xl">
                    A Complete Guide to the IB Maths Internal Assessment (IA)
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                    The Internal Assessment is an individual piece of written work known as the mathematical exploration.
                    Rather than a collection of calculations or a textbook report, it is a focused investigation where the
                    student applies mathematics to a topic, concept, or real-world issue of their own choosing.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 md:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f5b84b]">The IA at a glance</p>
                  <div className="mt-4 divide-y divide-white/10">
                    {[
                      ["20%", "Share of your final IB grade"],
                      ["12-20", "Pages allowed, everything included"],
                      ["20", "Total marks across Criteria A to E"],
                      ["AA & AI", "Same framework, both SL and HL"],
                    ].map(([value, label]) => (
                      <div key={label} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                        <span className="w-[84px] flex-shrink-0 text-lg font-extrabold text-[#f5b84b]">{value}</span>
                        <span className="text-sm leading-6 text-slate-300">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {iaFramework.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a35c20]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Operational rules</p>
              <h3 className="mt-2 text-xl font-extrabold md:text-2xl">Rules and Technical Specifications</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {iaRules.map((rule) => {
                  const RuleIcon = rule.icon;
                  return (
                    <div key={rule.title} className="flex gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4 md:p-5">
                      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#0f5b78] text-white">
                        <RuleIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-extrabold text-[#172033]">{rule.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-[#465160]">{rule.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="ia-criteria" className="scroll-mt-24 rounded-lg border border-[#29445a] bg-[#172033] p-5 text-white md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f5b84b]">Marking criteria</p>
              <h3 className="mt-3 text-xl font-extrabold leading-tight md:text-2xl">
                The Five Assessment Criteria (20 marks)
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {iaCriteria.map((criterion) => (
                  <span
                    key={criterion.letter}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-200"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-[#f5b84b] text-[11px] font-extrabold text-[#172033]">
                      {criterion.letter}
                    </span>
                    {criterion.name}
                    <span className="text-[#f5b84b]">{criterion.marks} marks</span>
                  </span>
                ))}
              </div>
            </div>

            {iaCriteria.map((criterion) => (
              <div key={criterion.letter} className="rounded-lg border border-[#ded2c3] bg-white p-5 md:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#172033] text-base font-extrabold text-[#f5b84b]">
                      {criterion.letter}
                    </span>
                    <h4 className="text-lg font-extrabold leading-snug md:text-xl">
                      Criterion {criterion.letter}: {criterion.name}
                    </h4>
                  </div>
                  <span className="flex-shrink-0 rounded-lg bg-[#e0eef2] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#0f5b78]">
                    {criterion.marks} marks
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">Key mandates</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#465160]">{criterion.mandate}</p>
                  </div>
                  {criterion.rules && (
                    <div className="rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a35c20]">Technical rules</p>
                      <p className="mt-1.5 text-sm leading-6 text-[#465160]">{criterion.rules}</p>
                    </div>
                  )}
                  {(criterion.sl || criterion.hl) && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-[#dbe7ec] bg-[#eef7fa] p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0f5b78]">Standard Level</p>
                        <p className="mt-1.5 text-sm leading-6 text-[#465160]">{criterion.sl}</p>
                      </div>
                      <div className="rounded-lg border border-[#e7d4ad] bg-[#fffaf0] p-4">
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a35c20]">Higher Level</p>
                        <p className="mt-1.5 text-sm leading-6 text-[#465160]">{criterion.hl}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-20">
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

          {!isMypCourse && (
            <section className="rounded-lg border border-[#ded2c3] bg-white p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Course prep</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{page.course.name} Course & Exam Prep</h2>
              <p className="mt-5 leading-8 text-[#465160]">
                Sessions cover topic understanding, written method, calculator habits, assessment timing, and review of
                current school tasks. The plan adapts around the student's syllabus and grade target.
              </p>
            </section>
          )}

          {isMypCourse && (
            <>
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
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a35c20]">Worked samples</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Criterion Exemplar Papers</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5d6673]">
                  Real MYP assessment exemplars mapped to the assessment criteria. Each opens in a side-by-side
                  viewer in a new tab.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {mypPapers.map((paper) => (
                    <a
                      key={paper.qp}
                      href={paperViewerHref(paper.label, paper.qp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-lg border border-[#e8e1d6] bg-[#fbf8f2] p-5 transition-colors hover:border-[#0f5b78]"
                    >
                      <span className="flex items-center gap-3">
                        <FileText className="h-6 w-6 flex-shrink-0 text-[#0f5b78]" />
                        <span className="font-extrabold">{paper.label}</span>
                      </span>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-[#0f5b78]" />
                    </a>
                  ))}
                </div>
              </section>
            </>
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

            <TestimonialWall videos={courseVideos} feedback={courseFeedback} layout="grid" />
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
      </div>
    </div>
  );
}
