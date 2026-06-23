"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface NavMenuItem {
  href: string;
  label: string;
}

export function NavDropdown({ label, items }: { label: string; items: NavMenuItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 whitespace-nowrap text-[#3b4657] transition-colors hover:text-[#0f5b78]"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* pt-2 keeps a hover bridge so the menu does not close in the gap */}
      <div className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 ${open ? "block" : "hidden"}`}>
        <div className="overflow-hidden rounded-xl border border-[#e8e1d6] bg-white p-1.5 shadow-xl">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#3b4657] transition-colors hover:bg-[#eef2f4] hover:text-[#0f5b78]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
