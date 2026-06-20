"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function ThemeToggle() {
  const [v2, setV2] = useState(false);

  useEffect(() => {
    setV2(document.documentElement.classList.contains("theme-v2"));
  }, []);

  function toggle() {
    const next = !v2;
    setV2(next);
    document.documentElement.classList.toggle("theme-v2", next);
    try {
      localStorage.setItem("ax-theme", next ? "v2" : "v1");
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={v2}
      title="Switch site design"
      className="hidden items-center gap-1.5 rounded-lg border border-[#d8ccbc] px-3 py-2 text-xs font-bold text-[#3b4657] transition-colors hover:border-[#0f5b78] hover:text-[#0f5b78] sm:inline-flex"
    >
      <Sparkles className="h-3.5 w-3.5" />
      {v2 ? "Classic look" : "New look"}
    </button>
  );
}
