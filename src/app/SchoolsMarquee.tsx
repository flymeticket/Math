"use client";

import { useState } from "react";

interface School {
  name: string;
  domain?: string;
  initials: string;
  color: string;
}

const partnerSchools: School[] = [
  { name: "Tsukuba International School", domain: "tis.ac.jp", initials: "TS", color: "#0f5b78" },
  { name: "Manchester Global School", domain: "manchester.global", initials: "MG", color: "#7a2e3b" },
  { name: "The Gaudium School", domain: "thegaudium.com", initials: "GA", color: "#a35c20" },
  { name: "Pathways School, Noida", domain: "pathwaysnoida.edu.in", initials: "PS", color: "#3a6b4f" },
  { name: "Sreenidhi International School", domain: "sis.edu.in", initials: "SN", color: "#4a4b9c" },
  { name: "The International School of Kuala Lumpur (ISKL)", domain: "iskl.edu.my", initials: "IS", color: "#0f5b78" },
  { name: "Raipur International School", initials: "RS", color: "#b5562a" },
  { name: "Genesis Global School", domain: "genesisglobalschool.edu.in", initials: "GG", color: "#1c3d5a" },
  { name: "GEMS Modern Academy, Dubai", domain: "gemsmodernacademy-dubai.com", initials: "GM", color: "#7a2e3b" },
  { name: "Oakridge International School", domain: "www.oakridge.in", initials: "OK", color: "#3a6b4f" },
  { name: "Oberoi International School", domain: "oberoi-is.org", initials: "OB", color: "#a35c20" },
  { name: "Wockhardt Global School", domain: "wockhardtglobalschool.com", initials: "WG", color: "#4a4b9c" },
  { name: "Kunskapsskolan", domain: "kunskapsskolan.se", initials: "KU", color: "#0f5b78" },
];

function SchoolBadge({ school }: { school: School }) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(school.domain) && !failed;

  return (
    <span className="mx-2 flex flex-shrink-0 items-center gap-3 rounded-full border border-[#e0d7ca] bg-white py-2 pl-3 pr-5 shadow-sm">
      {showLogo ? (
        <img
          src={`https://www.google.com/s2/favicons?domain=${school.domain}&sz=128`}
          alt={`${school.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-9 w-9 flex-shrink-0 object-contain"
        />
      ) : (
        <span
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-xs font-extrabold text-white"
          style={{ backgroundColor: school.color }}
        >
          {school.initials}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-semibold text-[#46505f]">{school.name}</span>
    </span>
  );
}

export function SchoolsMarquee() {
  return (
    <div>
      <h2 className="px-6 text-center text-2xl font-extrabold tracking-tight text-[#172033] md:text-3xl">
        Supporting Students from Top-Tier World Schools
      </h2>
      <div className="group relative mt-7 overflow-hidden">
        <div className="ax-marquee-reverse flex w-max items-center group-hover:[animation-play-state:paused]">
          {[...partnerSchools, ...partnerSchools].map((school, index) => (
            <SchoolBadge key={`${school.name}-${index}`} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
}
