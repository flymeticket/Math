// Sample/past papers per DP course. QP = question paper, MS = mark scheme (answer key).
// SL courses ship question papers only (no mark scheme provided).

export interface PaperEntry {
  label: string;
  qp: string;
  ms?: string;
}

export const coursePapers: Record<string, PaperEntry[]> = {
  "aa-hl": [
    { label: "Paper 1", qp: "/papers/aa-hl/Paper_1_QP.pdf", ms: "/papers/aa-hl/Paper_1_MS.pdf" },
    { label: "Paper 2", qp: "/papers/aa-hl/Paper_2_QP.pdf", ms: "/papers/aa-hl/Paper_2_MS.pdf" },
    { label: "Paper 3", qp: "/papers/aa-hl/Paper_3_QP.pdf", ms: "/papers/aa-hl/Paper_3_MS.pdf" },
  ],
  "ai-hl": [
    { label: "Paper 1", qp: "/papers/ai-hl/Paper_1_QP.pdf", ms: "/papers/ai-hl/Paper_1_MS.pdf" },
    { label: "Paper 2", qp: "/papers/ai-hl/Paper_2_QP.pdf", ms: "/papers/ai-hl/Paper_2_MS.pdf" },
    { label: "Paper 3", qp: "/papers/ai-hl/Paper_3_QP.pdf", ms: "/papers/ai-hl/Paper_3_MS.pdf" },
  ],
  "aa-sl": [
    { label: "Paper 1", qp: "/papers/aa-sl/Paper_1_QP.pdf" },
    { label: "Paper 2", qp: "/papers/aa-sl/Paper_2_QP.pdf" },
  ],
  "ai-sl": [
    { label: "Paper 1", qp: "/papers/ai-sl/Paper_1_QP.pdf" },
    { label: "Paper 2", qp: "/papers/ai-sl/Paper_2_QP.pdf" },
  ],
};

// MYP 1-3 criterion sample pages (single exemplar PDFs, open in a new tab).
export const mypPapers: PaperEntry[] = [
  { label: "Criterion A: Knowing and Understanding", qp: "/papers/myp/Criterion_A_Knowing_and_Understanding.pdf" },
  { label: "Criterion B: Investigating Patterns", qp: "/papers/myp/Criterion_B_Investigating_Patterns.pdf" },
  { label: "Criterion D: Applying Mathematics in Real-life Contexts", qp: "/papers/myp/Criterion_D_Applying_Mathematics.pdf" },
];

export function paperViewerHref(title: string, qp: string, ms?: string) {
  const params = new URLSearchParams({ title, qp });
  if (ms) params.set("ms", ms);
  return `/paper-viewer?${params.toString()}`;
}
