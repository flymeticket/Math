// Real, verifiable per-location facts used to give every location page genuine,
// non-templated content: local time zone, standard UTC offset, the difference
// from the India-based tutor (IST, UTC+5:30), the IB examination session that
// prevails in the region, and a geographic region label.
//
// No fabricated data: time zones and UTC offsets are factual; IB sessions are
// stated as the prevailing tendency (May for Northern-Hemisphere-calendar
// schools, November where Southern-Hemisphere calendars dominate, "mixed"
// where both are common) and never as an absolute claim about a specific school.

export interface GeoInfo {
  tzName: string;
  offsetMin: number; // standard-time offset from UTC, in minutes
  dst: boolean; // observes daylight saving (so the IST gap shifts by an hour part of the year)
  region: string;
  exam: "may" | "november" | "mixed";
  multiZone?: boolean; // country spans several time zones (offset shown is a reference zone)
}

const IST_OFFSET_MIN = 330; // India Standard Time, UTC+5:30

// Country defaults, keyed by lowercased country name exactly as stored in seo_pages.json.
const COUNTRY: Record<string, GeoInfo> = {
  india: { tzName: "India Standard Time", offsetMin: 330, dst: false, region: "South Asia", exam: "may" },
  "united arab emirates": { tzName: "Gulf Standard Time", offsetMin: 240, dst: false, region: "the Gulf", exam: "may" },
  bahrain: { tzName: "Arabia Standard Time", offsetMin: 180, dst: false, region: "the Gulf", exam: "may" },
  "saudi arabia": { tzName: "Arabia Standard Time", offsetMin: 180, dst: false, region: "the Gulf", exam: "may" },
  qatar: { tzName: "Arabia Standard Time", offsetMin: 180, dst: false, region: "the Gulf", exam: "may" },
  kuwait: { tzName: "Arabia Standard Time", offsetMin: 180, dst: false, region: "the Gulf", exam: "may" },
  oman: { tzName: "Gulf Standard Time", offsetMin: 240, dst: false, region: "the Gulf", exam: "may" },
  jordan: { tzName: "Jordan Standard Time", offsetMin: 180, dst: false, region: "the Levant", exam: "may" },
  lebanon: { tzName: "Eastern European Time", offsetMin: 120, dst: true, region: "the Levant", exam: "may" },
  egypt: { tzName: "Eastern European Time", offsetMin: 120, dst: true, region: "North Africa", exam: "may" },
  singapore: { tzName: "Singapore Time", offsetMin: 480, dst: false, region: "Southeast Asia", exam: "may" },
  malaysia: { tzName: "Malaysia Time", offsetMin: 480, dst: false, region: "Southeast Asia", exam: "may" },
  indonesia: { tzName: "Western Indonesia Time", offsetMin: 420, dst: false, region: "Southeast Asia", exam: "may" },
  thailand: { tzName: "Indochina Time", offsetMin: 420, dst: false, region: "Southeast Asia", exam: "may" },
  "hong kong": { tzName: "Hong Kong Time", offsetMin: 480, dst: false, region: "East Asia", exam: "may" },
  china: { tzName: "China Standard Time", offsetMin: 480, dst: false, region: "East Asia", exam: "may" },
  japan: { tzName: "Japan Standard Time", offsetMin: 540, dst: false, region: "East Asia", exam: "may" },
  "south korea": { tzName: "Korea Standard Time", offsetMin: 540, dst: false, region: "East Asia", exam: "may" },
  "united kingdom": { tzName: "Greenwich Mean Time", offsetMin: 0, dst: true, region: "the UK and Ireland", exam: "may" },
  netherlands: { tzName: "Central European Time", offsetMin: 60, dst: true, region: "Western Europe", exam: "may" },
  germany: { tzName: "Central European Time", offsetMin: 60, dst: true, region: "Central Europe", exam: "may" },
  switzerland: { tzName: "Central European Time", offsetMin: 60, dst: true, region: "Central Europe", exam: "may" },
  spain: { tzName: "Central European Time", offsetMin: 60, dst: true, region: "Western Europe", exam: "may" },
  turkey: { tzName: "Turkey Time", offsetMin: 180, dst: false, region: "the Eastern Mediterranean", exam: "may" },
  "united states": { tzName: "Eastern Time", offsetMin: -300, dst: true, region: "the United States", exam: "may", multiZone: true },
  canada: { tzName: "Eastern Time", offsetMin: -300, dst: true, region: "Canada", exam: "may", multiZone: true },
  mexico: { tzName: "Central Time", offsetMin: -360, dst: false, region: "Mexico", exam: "may", multiZone: true },
  brazil: { tzName: "Brasilia Time", offsetMin: -180, dst: false, region: "South America", exam: "mixed" },
  "south africa": { tzName: "South Africa Standard Time", offsetMin: 120, dst: false, region: "Southern Africa", exam: "mixed" },
  australia: { tzName: "Australian Eastern Time", offsetMin: 600, dst: true, region: "Australia", exam: "november", multiZone: true },
};

// City-level overrides for the multi-time-zone countries. Only the fields that
// differ from the country default are set; the rest (region, exam) inherit.
const CITY_OVERRIDE: Record<string, Partial<GeoInfo>> = {
  // United States
  chicago: { tzName: "Central Time", offsetMin: -360 },
  houston: { tzName: "Central Time", offsetMin: -360 },
  "los angeles": { tzName: "Pacific Time", offsetMin: -480 },
  "san francisco": { tzName: "Pacific Time", offsetMin: -480 },
  seattle: { tzName: "Pacific Time", offsetMin: -480 },
  // Canada
  calgary: { tzName: "Mountain Time", offsetMin: -420 },
  vancouver: { tzName: "Pacific Time", offsetMin: -480 },
  // Australia
  perth: { tzName: "Australian Western Time", offsetMin: 480, dst: false },
  adelaide: { tzName: "Australian Central Time", offsetMin: 570 },
  brisbane: { tzName: "Australian Eastern Time", offsetMin: 600, dst: false },
  // Indonesia
  bali: { tzName: "Central Indonesia Time", offsetMin: 480 },
  // Mexico
  cancun: { tzName: "Eastern Time", offsetMin: -300 },
};

export interface GeoContext {
  tzLabel: string; // "Gulf Standard Time (UTC+4)"
  diffLabel: string; // "1 hour 30 minutes behind India (IST)"
  dstNote: string | null;
  examLabel: string; // "May session"
  examSentence: string;
  region: string;
  overlapSentence: string;
  introSentence: string;
}

function formatOffset(offsetMin: number): string {
  if (offsetMin === 0) return "UTC";
  const sign = offsetMin > 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `UTC${sign}${h}${m ? ":" + String(m).padStart(2, "0") : ""}`;
}

function formatDiff(offsetMin: number): string {
  const diff = offsetMin - IST_OFFSET_MIN;
  if (diff === 0) return "on the same clock as your India-based tutor (IST)";
  const abs = Math.abs(diff);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  const parts: string[] = [];
  if (h) parts.push(`${h} hour${h > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} minutes`);
  return `${parts.join(" ")} ${diff > 0 ? "ahead of India (IST)" : "behind India (IST)"}`;
}

// Deterministic per-name index so same-time-zone cities do not open with an
// identical sentence. The facts inserted are identical and true; only the
// framing rotates.
function nameIndex(name: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % mod;
}

export function getGeoContext(city?: string, country?: string): GeoContext | null {
  const countryKey = (country || "").trim().toLowerCase();
  const base = COUNTRY[countryKey];
  if (!base) return null;

  const cityKey = (city || "").trim().toLowerCase();
  const override = cityKey ? CITY_OVERRIDE[cityKey] : undefined;
  const info: GeoInfo = { ...base, ...(override || {}) };
  const label = (city && city.trim()) || country || "";

  const tzLabel = `${info.tzName} (${formatOffset(info.offsetMin)})`;
  const diffLabel = formatDiff(info.offsetMin);
  const diff = info.offsetMin - IST_OFFSET_MIN;

  const dstNote = info.dst
    ? `That offset shifts by an hour for part of the year, when ${label} observes daylight saving time, and we adjust the weekly slot automatically.`
    : null;

  const examLabel =
    info.exam === "may" ? "May session" : info.exam === "november" ? "November session" : "May or November session";
  const examSentence =
    info.exam === "may"
      ? `Most IB World Schools across ${info.region} prepare for the May examination session, so revision is planned back from the May timetable.`
      : info.exam === "november"
      ? `Schools across ${info.region} commonly sit the November examination session, with some international schools following May, and revision is planned around whichever session applies.`
      : `Schools across ${info.region} sit either the May or November session depending on their calendar, so we confirm the exact session first and plan revision backwards from it.`;

  const overlapSentence =
    diff >= -180
      ? `That keeps live lessons inside comfortable shared hours, so holding a fixed weekly evening slot on the ${label} clock is straightforward.`
      : `Our India-based tutors run early-morning and evening slots to line up with afternoons and evenings in ${label}, so weekly lessons stay consistent across the distance.`;

  const isHub = !cityKey;
  const introVariants = [
    `${label} runs on ${tzLabel}, ${diffLabel}.`,
    `In ${label}, the local clock is ${tzLabel}, ${diffLabel}.`,
    `${label} sits in ${info.region} on ${tzLabel}, ${diffLabel}.`,
    `Lessons for ${label} are scheduled against ${tzLabel}, ${diffLabel}.`,
  ];
  const introSentence =
    isHub && info.multiZone
      ? `${label} spans several time zones; the figures below use ${info.tzName} as a reference (${diffLabel}), and each student's lessons are fixed to their own local time.`
      : introVariants[nameIndex(label, introVariants.length)];

  return { tzLabel, diffLabel, dstNote, examLabel, examSentence, region: info.region, overlapSentence, introSentence };
}
