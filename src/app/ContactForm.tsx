"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { site } from "./site";

// FormSubmit's /ajax/ endpoint returns JSON instead of redirecting to their page.
const AJAX_ENDPOINT = site.contactFormAction.replace("formsubmit.co/", "formsubmit.co/ajax/");

// Fires the lead conversion once, only after a successful form submission
// (never on page view). GA4 gets a generate_lead event; Google Ads gets a
// conversion once the label is set in site.ts.
function fireLeadConversion() {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "generate_lead", { event_category: "enquiry", event_label: "IB Maths enquiry form" });
  if (site.googleAdsConversionLabel) {
    gtag("event", "conversion", { send_to: `${site.googleAdsId}/${site.googleAdsConversionLabel}` });
  }
}

export function ContactForm({ className, children }: { className?: string; children: ReactNode }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(AJAX_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
        fireLeadConversion();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={className}>
        <div className="flex items-start gap-3 rounded-lg border border-[#bfe0cf] bg-[#eaf7ef] p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1a7f4b]" />
          <div>
            <p className="font-extrabold text-[#14603a]">Inquiry sent successfully</p>
            <p className="mt-1 text-sm leading-6 text-[#2f6b4b]">
              Thanks. We have received your details and will reply shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      {status === "sending" && <p className="text-sm font-semibold text-[#5d6673]">Sending your inquiry...</p>}
      {status === "error" && (
        <p className="text-sm font-semibold text-[#b5562a]">
          Something went wrong. Please try again, or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}
