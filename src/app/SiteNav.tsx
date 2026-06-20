import {
  BarChart3,
  BookOpen,
  Calculator,
  CalendarCheck,
  ChevronRight,
  Compass,
  FileText,
  FunctionSquare,
  Home,
  Star,
  type LucideIcon,
} from "lucide-react";

interface NavChild {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  children?: NavChild[];
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const dpChildren: NavChild[] = [
  { href: "#dp-pathways", label: "Pathways & overview" },
  { href: "#dp-syllabus", label: "Syllabus & hours" },
];

const navGroups: NavGroup[] = [
  {
    label: "Get started",
    items: [
      { href: "/", label: "Home", icon: Home },
      { href: "/book-a-session/", label: "Book a Free Trial", icon: CalendarCheck },
    ],
  },
  {
    label: "MYP Maths",
    items: [
      {
        href: "/ib-myp-maths/",
        label: "IB MYP Maths",
        icon: BookOpen,
        children: [
          { href: "#myp-framework", label: "Framework & criteria" },
          { href: "#myp-academic-stage", label: "Academic stages" },
        ],
      },
      { href: "/myp-1-3/", label: "MYP 1-3, Grades 6 to 8", icon: Calculator },
      { href: "/myp-4-5/", label: "MYP 4-5, Grades 9 to 10", icon: FunctionSquare },
      { href: "/myp-enrichment/", label: "MYP Enrichment Tier", icon: Star },
    ],
  },
  {
    label: "DP courses",
    items: [
      { href: "/ib-math-aa-sl/", label: "Math AA SL", icon: Compass, children: dpChildren },
      { href: "/ib-math-aa-hl/", label: "Math AA HL", icon: Compass, children: dpChildren },
      { href: "/ib-math-ai-sl/", label: "Math AI SL", icon: BarChart3, children: dpChildren },
      { href: "/ib-math-ai-hl/", label: "Math AI HL", icon: BarChart3, children: dpChildren },
    ],
  },
  {
    label: "Internal Assessment",
    items: [
      {
        href: "/ib-math-ia/",
        label: "IA Guidance",
        icon: FileText,
        children: [
          { href: "#ia-overview", label: "The exploration" },
          { href: "#ia-criteria", label: "Marking criteria" },
        ],
      },
    ],
  },
];

function normalize(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

function isActive(href: string, current: string) {
  const h = normalize(href);
  const c = normalize(current);
  if (h === "") return c === "";
  return c === h || c.startsWith(`${h}-`);
}

function NavList({ current }: { current: string }) {
  return (
    <div className="space-y-5">
      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a8f7d]">{group.label}</p>
          <ul className="mt-1.5 space-y-0.5">
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href, current);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group/link flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-[#0f5b78] font-semibold text-white shadow-sm"
                        : "font-medium text-[#46505f] hover:bg-[#eef2f4] hover:text-[#0f5b78]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 flex-shrink-0 ${
                        active ? "text-white" : "text-[#aab1ba] group-hover/link:text-[#0f5b78]"
                      }`}
                    />
                    <span className="leading-tight">{item.label}</span>
                  </a>
                  {active && item.children && item.children.length > 0 && (
                    <ul className="mb-1 ml-[1.6rem] mt-1 space-y-0.5 border-l border-[#e6ddd0] pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-md px-3 py-1.5 text-[13px] font-medium text-[#5d6673] transition-colors hover:bg-[#eef2f4] hover:text-[#0f5b78]"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function SiteNav({ current = "/" }: { current?: string }) {
  return (
    <div className="lg:sticky lg:top-24 lg:w-[240px] lg:flex-shrink-0 lg:self-start">
      <details className="group rounded-xl border border-[#e6ddd0] bg-white shadow-sm lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-extrabold text-[#172033] [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-[#0f5b78]" />
            Browse all pages
          </span>
          <ChevronRight className="h-4 w-4 text-[#0f5b78] transition-transform group-open:rotate-90" />
        </summary>
        <div className="border-t border-[#efe7da] px-2 pb-4 pt-3">
          <NavList current={current} />
        </div>
      </details>

      <nav
        aria-label="Site sections"
        className="hidden rounded-xl border border-[#e6ddd0] bg-white p-3 shadow-sm lg:block"
      >
        <NavList current={current} />
      </nav>
    </div>
  );
}
