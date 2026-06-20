import type { Metadata } from "next";
import { CheckCircle2, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper & Mark Scheme Viewer | IB Learners Academy",
  robots: { index: false, follow: false },
};

// Only allow our own local paper paths to be embedded.
function safePath(value: string | undefined) {
  if (!value) return "";
  return value.startsWith("/papers/") && !value.includes("..") ? value : "";
}

// Hide the built-in PDF toolbar (download / print / save) and fit to width.
const PDF_PARAMS = "#toolbar=0&navpanes=0&statusbar=0&view=FitH";

export default function PaperViewerPage({
  searchParams,
}: {
  searchParams: { qp?: string; ms?: string; title?: string };
}) {
  const qp = safePath(searchParams.qp);
  const ms = safePath(searchParams.ms);
  const title = (searchParams.title || "IB Mathematics Paper").slice(0, 140);

  if (!qp) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0f1623] p-6 text-center text-white">
        <h1 className="text-2xl font-extrabold">Paper not found</h1>
        <p className="mt-2 text-slate-300">No valid paper was provided in the link.</p>
        <a href="/" className="mt-6 rounded-lg bg-[#f5b84b] px-5 py-2.5 text-sm font-extrabold text-[#172033]">
          Return home
        </a>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1623] text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5b84b]">IB Learners Academy paper viewer</p>
          <h1 className="truncate text-sm font-extrabold md:text-base">{title}</h1>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-300">
          <Lock className="h-3.5 w-3.5" />
          View only
        </span>
      </div>

      <div className="grid flex-1 select-none gap-2 p-2 lg:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#9fd6ea]">
            <FileText className="h-4 w-4" />
            Question Paper
          </div>
          <iframe
            title="Question paper"
            src={`${qp}${PDF_PARAMS}`}
            className="h-[70vh] w-full flex-1 bg-white lg:h-[82vh]"
          />
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f5d79b]">
            <CheckCircle2 className="h-4 w-4" />
            Answer Key / Mark Scheme
          </div>
          {ms ? (
            <iframe
              title="Mark scheme"
              src={`${ms}${PDF_PARAMS}`}
              className="h-[70vh] w-full flex-1 bg-white lg:h-[82vh]"
            />
          ) : (
            <div className="flex flex-1 items-center justify-center p-8 text-center lg:min-h-[82vh]">
              <div className="max-w-xs">
                <p className="text-sm font-bold text-slate-200">Mark scheme not published</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This Standard Level sample is provided as a question paper only. Worked mark schemes accompany the
                  Higher Level papers.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
