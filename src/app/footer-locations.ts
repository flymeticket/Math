import fs from "fs";
import path from "path";

export interface FooterCountry {
  country: string;
  countrySlug?: string;
  cities: { city: string; slug: string }[];
}

let cache: FooterCountry[] | null = null;

// Groups every MYP location page (country + city hubs) by country for the footer.
// Uses the MYP page as the one representative link per location.
export function getFooterLocations(): FooterCountry[] {
  if (cache) return cache;

  const dataPath = path.join(process.cwd(), "data", "seo_pages.json");
  let pages: Array<Record<string, unknown>> = [];
  try {
    pages = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } catch {
    return [];
  }

  const byCountry = new Map<string, FooterCountry>();
  for (const p of pages) {
    if (p.course_id !== "myp") continue;
    if (p.type !== "city_hub" && p.type !== "country_hub") continue;
    const country = typeof p.country === "string" ? p.country : "";
    const slug = typeof p.slug === "string" ? p.slug : "";
    if (!country || !slug) continue;

    if (!byCountry.has(country)) byCountry.set(country, { country, cities: [] });
    const group = byCountry.get(country)!;
    if (typeof p.city === "string" && p.city) {
      group.cities.push({ city: p.city, slug });
    } else {
      group.countrySlug = slug;
    }
  }

  const groups = Array.from(byCountry.values());
  for (const group of groups) group.cities.sort((a, b) => a.city.localeCompare(b.city));
  groups.sort((a, b) => a.country.localeCompare(b.country));

  cache = groups;
  return groups;
}
