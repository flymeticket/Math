// Unique, authentic per-location content for Middle East / MENA SEO pages.
// Keyed by the lowercased `city` (for city pages) or `country` (for country pages)
// used in data/seo_pages.json, so existing location entries auto-enrich.
// All prose is original; school names and counts are factual context (IB World Schools
// that operate in each location), not endorsements of the tutoring service.

export interface MenaLocaleFaq {
  q: string;
  a: string;
}

export interface MenaLocale {
  displayName: string;
  scope: "city" | "country";
  parent: string; // country for a city, region for a country
  timezone: string;
  intro: string[];
  stats: [string, string][];
  schoolsHeading: string;
  schools: string[];
  faqs: MenaLocaleFaq[];
}

const menaLocales: Record<string, MenaLocale> = {
  dubai: {
    displayName: "Dubai",
    scope: "city",
    parent: "United Arab Emirates",
    timezone: "Gulf Standard Time (GMT+4)",
    intro: [
      "Dubai runs one of the largest concentrations of IB education in the Middle East. More than twenty schools across the emirate offer at least one International Baccalaureate programme, and around a dozen carry the full Diploma, all regulated locally by the KHDA. MYP and DP cohorts here are large and competitive, and students are expected to be fluent in the IB's habits of inquiry, modelling, and written communication from an early stage.",
      "Because most Dubai schools sit the May examination session, we build the year around a September-to-May calendar, with internal-assessment drafts and mock preparation front-loaded into the winter term. Lessons run on Gulf Standard Time, so students revise at sensible hours with a tutor who keeps the same clock rather than working across a large time difference.",
    ],
    stats: [
      ["20+", "IB World Schools in Dubai"],
      ["GMT+4", "Gulf Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "Dubai is home to established IB World Schools, including",
    schools: [
      "GEMS World Academy",
      "Dubai International Academy",
      "Repton School Dubai",
      "Raffles World Academy",
      "Uptown International School",
      "Swiss International Scientific School",
      "Dwight School Dubai",
      "GEMS Wellington International School",
    ],
    faqs: [
      {
        q: "Do you follow the same May exam timeline Dubai IB schools use?",
        a: "Yes. We plan the year around the May session most Dubai schools sit, with IA drafts and mock preparation scheduled through the winter term so nothing is left until the spring.",
      },
      {
        q: "Can lessons fit around a Dubai school week?",
        a: "Sessions run on Gulf Standard Time (GMT+4), so we schedule after-school and weekend slots that fit the local school week without any awkward late-night hours.",
      },
      {
        q: "Which parts of IB Maths do Dubai students find hardest?",
        a: "The two we see most often are the Criterion B and C write-ups in MYP and the internal-assessment exploration in the Diploma, both of which reward clear communication as much as correct working.",
      },
    ],
  },

  "abu dhabi": {
    displayName: "Abu Dhabi",
    scope: "city",
    parent: "United Arab Emirates",
    timezone: "Gulf Standard Time (GMT+4)",
    intro: [
      "Abu Dhabi has a well-established IB community of roughly a dozen to fifteen schools offering International Baccalaureate programmes across the capital, from Al Reem and Al Bateen to Khalifa City. Families here often choose the IB for its university reach into the UK, US, and Europe, so the pressure on final Diploma grades and the internal assessment is high.",
      "We align tutoring with the May examination cycle that Abu Dhabi schools follow, keeping IA milestones and mock exams on the same calendar as the classroom. Working on Gulf Standard Time means lessons land in the after-school and weekend windows that suit the capital's families.",
    ],
    stats: [
      ["12+", "IB World Schools in Abu Dhabi"],
      ["GMT+4", "Gulf Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "Abu Dhabi's IB World Schools include",
    schools: [
      "Raha International School",
      "British International School Abu Dhabi",
      "Bateen World Academy",
      "American International School Abu Dhabi",
      "GEMS World Academy Abu Dhabi",
      "Emirates National Schools",
    ],
    faqs: [
      {
        q: "Do you support both the AA and AI Diploma routes used in Abu Dhabi?",
        a: "Yes. We cover Analysis and Approaches and Applications and Interpretation at both SL and HL, and help students who are still deciding which route fits their target degree.",
      },
      {
        q: "How do you handle the internal assessment for Abu Dhabi students?",
        a: "We work to your school's IA deadlines, coaching topic choice, the exploration structure, and the mathematical write-up so the 20% is earned cleanly rather than rushed.",
      },
      {
        q: "Are lessons in the same time zone as Abu Dhabi?",
        a: "Yes, everything runs on Gulf Standard Time (GMT+4), so revision and IA feedback happen at hours that work for the capital.",
      },
    ],
  },

  "united arab emirates": {
    displayName: "the UAE",
    scope: "country",
    parent: "Gulf",
    timezone: "Gulf Standard Time (GMT+4)",
    intro: [
      "The UAE has one of the deepest IB ecosystems outside Europe and North America, spread across Dubai, Abu Dhabi, Sharjah, and Al Ain. Large operators such as GEMS run several IB World Schools between them, and Dubai International Academy was the first school in the country authorised to offer the full IB continuum. For students, that means competitive cohorts and a strong expectation of top Diploma scores.",
      "We tutor across all seven emirates online, keeping to the May examination session that UAE schools follow and to Gulf Standard Time so scheduling stays simple. Whether a student is in MYP, on the AA or AI Diploma route, or finishing the internal assessment, the plan is shaped around their specific school calendar.",
    ],
    stats: [
      ["7", "Emirates covered"],
      ["GMT+4", "Gulf Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "IB World Schools across the UAE include",
    schools: [
      "Dubai International Academy",
      "GEMS World Academy",
      "Repton School Dubai",
      "Raha International School",
      "British International School Abu Dhabi",
      "Swiss International Scientific School",
    ],
    faqs: [
      {
        q: "Do you tutor students outside Dubai and Abu Dhabi?",
        a: "Yes. Because lessons are online, we support IB Maths students anywhere in the UAE, including Sharjah, Al Ain, and Ras Al Khaimah, all on Gulf Standard Time.",
      },
      {
        q: "Which IB Maths courses do you cover?",
        a: "All of them: MYP Maths, Analysis and Approaches SL and HL, Applications and Interpretation SL and HL, and full support for the internal assessment.",
      },
      {
        q: "Do you match the UAE school year?",
        a: "Yes. We follow the September-to-May year and the May exam session that UAE IB schools use, with IA and mock milestones built into the winter term.",
      },
    ],
  },

  riyadh: {
    displayName: "Riyadh",
    scope: "city",
    parent: "Saudi Arabia",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Riyadh's international-school sector has grown quickly, and around fifteen schools in the capital now offer International Baccalaureate programmes as Saudi families look for globally recognised routes to university. IB Maths sits at the centre of that ambition, because Diploma scores and a strong internal assessment carry real weight in competitive university applications.",
      "We keep tutoring on Arabia Standard Time and on the May examination calendar Riyadh schools follow, so revision, IA drafts, and mock preparation stay in step with the classroom. Lessons are online and one-to-one, shaped around each student's school syllabus and grade target.",
    ],
    stats: [
      ["15+", "IB World Schools in Riyadh"],
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "IB World Schools in Riyadh include",
    schools: [
      "Al Faris International School",
      "King Faisal School",
      "Khaled International Schools",
      "SEK International School Riyadh",
      "Multinational School Riyadh",
    ],
    faqs: [
      {
        q: "Do you keep to Riyadh's timings?",
        a: "Yes. Lessons run on Arabia Standard Time (GMT+3), so students in Riyadh study at comfortable after-school and weekend hours.",
      },
      {
        q: "Can you help with the IB Diploma internal assessment?",
        a: "Yes. We coach the exploration from topic choice through to the final write-up, keeping to your school's IA deadlines so the 20% is secured well before exams.",
      },
      {
        q: "Which Diploma Maths route should a Riyadh student pick?",
        a: "It depends on the intended degree. We help students weigh Analysis and Approaches against Applications and Interpretation, and match the level, SL or HL, to their university plans.",
      },
    ],
  },

  "saudi arabia": {
    displayName: "Saudi Arabia",
    scope: "country",
    parent: "Gulf",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Saudi Arabia's IB sector spans Riyadh, Jeddah, and the Eastern Province, and it has expanded steadily as families seek international university routes. IB Maths is a decisive subject in that plan, since Diploma grades and the internal assessment weigh heavily in applications to universities abroad.",
      "We tutor students across the Kingdom online, on Arabia Standard Time and the May examination calendar, with MYP, Diploma, and IA support shaped around each school's syllabus. One-to-one lessons keep the focus on the exact gaps a student needs to close.",
    ],
    stats: [
      ["3", "Major IB regions"],
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "IB World Schools in Saudi Arabia include",
    schools: [
      "Al Faris International School",
      "King Faisal School",
      "Khaled International Schools",
      "SEK International School Riyadh",
    ],
    faqs: [
      {
        q: "Which cities in Saudi Arabia do you cover?",
        a: "All of them. Online lessons let us support IB Maths students in Riyadh, Jeddah, Dammam, Khobar, and beyond, all on Arabia Standard Time.",
      },
      {
        q: "Do you cover MYP as well as the Diploma?",
        a: "Yes. We teach MYP Maths, the AA and AI Diploma routes at SL and HL, and full internal-assessment support.",
      },
      {
        q: "How do lessons fit the Saudi school week?",
        a: "We schedule around the local Sunday-to-Thursday week and the May exam session, with IA and mock milestones planned into the winter term.",
      },
    ],
  },

  doha: {
    displayName: "Doha",
    scope: "city",
    parent: "Qatar",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Doha is the centre of Qatar's IB education, and the country hosts around seventeen IB World Schools, most of them in and around the capital. Several run the full continuum from the Primary Years through to the Diploma, and university placement, particularly into the UK and US, is a strong focus for families here.",
      "Our tutoring stays on Arabia Standard Time and the May examination cycle Doha schools use, so IA drafts and mock exams line up with the classroom. Lessons are one-to-one and online, built around each student's syllabus and grade target.",
    ],
    stats: [
      ["17", "IB World Schools in Qatar"],
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "IB World Schools in Doha include",
    schools: [
      "Qatar Academy Doha",
      "Qatar Academy Sidra",
      "Doha College",
      "American School of Doha",
      "SEK International School Qatar",
    ],
    faqs: [
      {
        q: "Do lessons run on Doha time?",
        a: "Yes. Everything is scheduled on Arabia Standard Time (GMT+3), so Doha students study at sensible after-school and weekend hours.",
      },
      {
        q: "Can you prepare students for Paper 3 at HL?",
        a: "Yes. For AA HL and AI HL we build the extended problem-solving technique Paper 3 rewards, using past-paper practice mapped to the mark scheme.",
      },
      {
        q: "Do you help with the internal assessment in Doha?",
        a: "Yes. We coach topic choice, the exploration structure, and the mathematical write-up to your school's IA deadlines.",
      },
    ],
  },

  qatar: {
    displayName: "Qatar",
    scope: "country",
    parent: "Gulf",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Qatar hosts around seventeen IB World Schools, concentrated in Doha and its surrounding education districts. The IB is a popular route for families targeting universities abroad, which puts a premium on strong Diploma Maths grades and a polished internal assessment.",
      "We tutor across Qatar online, on Arabia Standard Time and the May examination calendar, covering MYP, the AA and AI Diploma routes, and the IA. Lessons are shaped around each school's syllabus so the support is specific, not generic.",
    ],
    stats: [
      ["17", "IB World Schools"],
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
    ],
    schoolsHeading: "IB World Schools in Qatar include",
    schools: [
      "Qatar Academy Doha",
      "Qatar Academy Sidra",
      "Doha College",
      "American School of Doha",
    ],
    faqs: [
      {
        q: "Do you cover the whole of Qatar?",
        a: "Yes. Online lessons reach IB Maths students anywhere in Qatar, all on Arabia Standard Time.",
      },
      {
        q: "Which IB Maths courses do you teach?",
        a: "MYP Maths, Analysis and Approaches SL and HL, Applications and Interpretation SL and HL, and full internal-assessment support.",
      },
      {
        q: "Do you follow the Qatar school calendar?",
        a: "Yes. We keep to the September-to-May year and the May exam session, with IA and mock milestones set into the winter term.",
      },
    ],
  },
  kuwait: {
    displayName: "Kuwait",
    scope: "country",
    parent: "Gulf",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Kuwait has hosted IB World Schools since the early 1990s, and a focused group of schools in and around Kuwait City now offers the International Baccalaureate, several running the full continuum from the Primary Years to the Diploma. Families here use the IB as a direct route to universities in the US, UK, and Canada.",
      "We tutor across Kuwait online, on Arabia Standard Time and the May examination calendar, covering MYP, the AA and AI Diploma routes, and the internal assessment, with each plan shaped around the student's own school syllabus.",
    ],
    stats: [
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Kuwait include",
    schools: ["American International School Kuwait", "Kuwait Bilingual School", "American Creativity Academy"],
    faqs: [
      {
        q: "Which parts of Kuwait do you cover?",
        a: "All of it. Online lessons reach IB Maths students anywhere in Kuwait, all on Arabia Standard Time.",
      },
      {
        q: "Do you teach both Diploma Maths routes?",
        a: "Yes. We cover Analysis and Approaches and Applications and Interpretation at both SL and HL, plus the internal assessment.",
      },
    ],
  },

  "kuwait city": {
    displayName: "Kuwait City",
    scope: "city",
    parent: "Kuwait",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Kuwait City is the centre of the country's IB education, home to established schools that run the Diploma alongside the MYP and PYP. Cohorts are internationally minded and focused on competitive university applications abroad, so Diploma grades and a strong internal assessment carry real weight.",
      "Lessons run on Arabia Standard Time and the May examination calendar Kuwait City schools follow, one-to-one and online, built around each student's syllabus and grade target.",
    ],
    stats: [
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Kuwait City include",
    schools: ["American International School Kuwait", "Kuwait Bilingual School", "American Creativity Academy"],
    faqs: [
      {
        q: "Do you tutor Kuwait City students on local time?",
        a: "Yes. Lessons run on Arabia Standard Time (GMT+3), with after-school and weekend slots that fit the local school week.",
      },
      {
        q: "Can you help with the internal assessment?",
        a: "Yes. We coach the exploration from topic choice to the final write-up, keeping to your school's IA deadlines.",
      },
    ],
  },

  bahrain: {
    displayName: "Bahrain",
    scope: "country",
    parent: "Gulf",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Bahrain has one of the larger IB communities in the Gulf for its size, with a well-established group of schools authorised for the Diploma and several offering the MYP and PYP as well. The island's international families use the IB for its reach into UK, US, and European universities.",
      "We tutor across Bahrain online, on Arabia Standard Time and the May examination calendar, covering MYP, the AA and AI Diploma routes at SL and HL, and the internal assessment, all shaped around each school's syllabus.",
    ],
    stats: [
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Bahrain include",
    schools: [
      "Bahrain Bayan School",
      "Ibn Khuldoon National School",
      "Bahrain Preparatory School",
      "The International School of Choueifat Manama",
    ],
    faqs: [
      {
        q: "Do you cover the whole of Bahrain?",
        a: "Yes. Online lessons reach IB Maths students across the island, all on Arabia Standard Time.",
      },
      {
        q: "Which IB Maths courses do you teach?",
        a: "MYP Maths, Analysis and Approaches SL and HL, Applications and Interpretation SL and HL, and full internal-assessment support.",
      },
    ],
  },

  manama: {
    displayName: "Manama",
    scope: "city",
    parent: "Bahrain",
    timezone: "Arabia Standard Time (GMT+3)",
    intro: [
      "Manama holds most of Bahrain's IB World Schools, several of them long-standing continuum schools that carry students from the Primary Years through to the Diploma. Competition for top universities is strong, which puts a premium on Diploma Maths grades and a polished internal assessment.",
      "Our tutoring stays on Arabia Standard Time and the May examination cycle Manama schools use, with one-to-one online lessons built around each student's syllabus and deadlines.",
    ],
    stats: [
      ["GMT+3", "Arabia Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Manama include",
    schools: [
      "Bahrain Bayan School",
      "Ibn Khuldoon National School",
      "Bahrain Preparatory School",
      "The International School of Choueifat Manama",
    ],
    faqs: [
      {
        q: "Are lessons on Manama time?",
        a: "Yes. Everything runs on Arabia Standard Time (GMT+3), so revision and IA feedback happen at sensible hours.",
      },
      {
        q: "Can you prepare students for Paper 3 at HL?",
        a: "Yes. For AA HL and AI HL we build the extended problem-solving technique Paper 3 rewards, using past-paper practice mapped to the mark scheme.",
      },
    ],
  },

  oman: {
    displayName: "Oman",
    scope: "country",
    parent: "Gulf",
    timezone: "Gulf Standard Time (GMT+4)",
    intro: [
      "Oman's IB sector is smaller and centred on Muscat, where a handful of well-regarded continuum schools run the full programme from the Primary Years to the Diploma. Families here choose the IB for its recognised route into universities abroad.",
      "We tutor across Oman online, on Gulf Standard Time and the May examination calendar, covering MYP, the AA and AI Diploma routes, and the internal assessment, with each plan shaped around the student's school syllabus.",
    ],
    stats: [
      ["GMT+4", "Gulf Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Oman include",
    schools: ["ABA Oman International School", "OurPlanet International School", "The Sultan's School", "Ellesmere Muscat"],
    faqs: [
      {
        q: "Do you cover students outside Muscat?",
        a: "Yes. Because lessons are online, we support IB Maths students anywhere in Oman, all on Gulf Standard Time.",
      },
      {
        q: "Do you help with the internal assessment?",
        a: "Yes. We coach topic choice, the exploration structure, and the write-up to your school's IA deadlines.",
      },
    ],
  },

  muscat: {
    displayName: "Muscat",
    scope: "city",
    parent: "Oman",
    timezone: "Gulf Standard Time (GMT+4)",
    intro: [
      "Muscat is the heart of Oman's IB education, home to the country's established continuum schools that run the Diploma alongside the MYP and PYP. Students here aim for competitive university places abroad, so final Diploma grades matter.",
      "Lessons run on Gulf Standard Time and the May examination calendar Muscat schools follow, one-to-one and online, built around each student's syllabus and grade target.",
    ],
    stats: [
      ["GMT+4", "Gulf Standard Time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Muscat include",
    schools: ["ABA Oman International School", "OurPlanet International School", "The Sultan's School", "Ellesmere Muscat"],
    faqs: [
      {
        q: "Do you tutor Muscat students on local time?",
        a: "Yes. Lessons run on Gulf Standard Time (GMT+4), with after-school and weekend slots that fit the local school week.",
      },
      {
        q: "Which Diploma Maths route should a Muscat student choose?",
        a: "It depends on the intended degree. We help students weigh Analysis and Approaches against Applications and Interpretation and match the level to their university plans.",
      },
    ],
  },

  jordan: {
    displayName: "Jordan",
    scope: "country",
    parent: "Levant",
    timezone: "GMT+3",
    intro: [
      "Jordan has a strong IB tradition led from Amman, and more than twenty IB World Schools now operate across the country. Amman Baccalaureate School was the first in the region authorised for the full IB continuum, and the IB is a well-worn route from Jordan into universities in the UK, US, and Europe.",
      "We tutor across Jordan online, on local time and the May examination calendar, covering MYP, the AA and AI Diploma routes, and the internal assessment, with each plan shaped around the student's school syllabus.",
    ],
    stats: [
      ["22+", "IB World Schools in Jordan"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Jordan include",
    schools: [
      "Amman Baccalaureate School",
      "Mashrek International School",
      "International Academy-Amman",
      "Cambridge High School",
    ],
    faqs: [
      {
        q: "Which parts of Jordan do you cover?",
        a: "All of it. Online lessons reach IB Maths students anywhere in Jordan, most of them in and around Amman.",
      },
      {
        q: "Do you cover MYP as well as the Diploma?",
        a: "Yes. We teach MYP Maths, the AA and AI Diploma routes at SL and HL, and full internal-assessment support.",
      },
    ],
  },

  amman: {
    displayName: "Amman",
    scope: "city",
    parent: "Jordan",
    timezone: "GMT+3",
    intro: [
      "Amman is the centre of Jordan's IB education, with around seventeen schools in the capital offering International Baccalaureate programmes, several running the full continuum. Cohorts are competitive and university-focused, so Diploma Maths grades and the internal assessment carry real weight.",
      "Our tutoring keeps to local time and the May examination cycle Amman schools follow, with one-to-one online lessons built around each student's syllabus and deadlines.",
    ],
    stats: [
      ["17+", "IB World Schools in Amman"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Amman include",
    schools: [
      "Amman Baccalaureate School",
      "Mashrek International School",
      "International Academy-Amman",
      "Cambridge High School",
    ],
    faqs: [
      {
        q: "Do you tutor Amman students on local time?",
        a: "Yes. Lessons are scheduled for Amman hours, with after-school and weekend slots that fit the local school week.",
      },
      {
        q: "Can you help with the internal assessment?",
        a: "Yes. We coach the exploration from topic choice to the final write-up, keeping to your school's IA deadlines.",
      },
    ],
  },

  lebanon: {
    displayName: "Lebanon",
    scope: "country",
    parent: "Levant",
    timezone: "GMT+2",
    intro: [
      "Lebanon has one of the deepest IB communities in the region, with close to thirty IB World Schools, most of them offering the Diploma. Many families run trilingual education and use the IB as an international pathway alongside the Lebanese and French curricula.",
      "We tutor across Lebanon online, on local time and the May examination calendar, covering MYP, the AA and AI Diploma routes, and the internal assessment, with each plan shaped around the student's school syllabus.",
    ],
    stats: [
      ["29", "IB World Schools in Lebanon"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Lebanon include",
    schools: [
      "American Community School Beirut",
      "International College Beirut",
      "Wellspring Learning Community",
      "LWIS-CiS City International School",
    ],
    faqs: [
      {
        q: "Which parts of Lebanon do you cover?",
        a: "All of it. Online lessons reach IB Maths students anywhere in Lebanon, most of them in and around Beirut.",
      },
      {
        q: "Do you teach both Diploma Maths routes?",
        a: "Yes. We cover Analysis and Approaches and Applications and Interpretation at both SL and HL, plus the internal assessment.",
      },
    ],
  },

  beirut: {
    displayName: "Beirut",
    scope: "city",
    parent: "Lebanon",
    timezone: "GMT+2",
    intro: [
      "Beirut holds most of Lebanon's IB World Schools, several of them long-standing continuum schools that carry students from the Primary Years through to the Diploma. Students here are often trilingual and aim for universities across the US, UK, and Europe.",
      "Our tutoring keeps to Beirut time and the May examination cycle its schools follow, with one-to-one online lessons built around each student's syllabus and deadlines.",
    ],
    stats: [
      ["GMT+2", "Beirut time"],
      ["May", "Main DP exam session"],
      ["1-to-1", "Every lesson"],
    ],
    schoolsHeading: "IB World Schools in Beirut include",
    schools: [
      "American Community School Beirut",
      "International College Beirut",
      "Wellspring Learning Community",
      "LWIS-CiS City International School",
    ],
    faqs: [
      {
        q: "Are lessons on Beirut time?",
        a: "Yes. Everything runs on Beirut time, so revision and IA feedback happen at sensible hours for the city.",
      },
      {
        q: "Do you support the internal assessment in Beirut?",
        a: "Yes. We coach topic choice, the exploration structure, and the mathematical write-up to your school's IA deadlines.",
      },
    ],
  },
};

function normalizeKey(value: string | undefined): string {
  return (value || "").trim().toLowerCase();
}

// City match takes priority; country pages (no city) fall back to the country locale.
export function getMenaLocale(city?: string, country?: string): MenaLocale | undefined {
  const cityLocale = menaLocales[normalizeKey(city)];
  if (cityLocale) return cityLocale;
  return menaLocales[normalizeKey(country)];
}
