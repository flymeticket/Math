import type { Metadata } from "next";
import { Suspense } from "react";
import { PaperViewer } from "./PaperViewer";

export const metadata: Metadata = {
  title: "Paper & Mark Scheme Viewer | IB Learners Academy",
  robots: { index: false, follow: false },
};

// Static shell: metadata (noindex) stays server-side; the viewer reads the
// query string in the browser. Suspense is required around useSearchParams
// for a static export.
export default function PaperViewerPage() {
  return (
    <Suspense>
      <PaperViewer />
    </Suspense>
  );
}
