"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, PlayCircle, X } from "lucide-react";
import type { VideoTestimonial } from "./testimonials";

type Layout = "marquee" | "grid";

export function TestimonialWall({
  videos,
  feedback,
  layout = "grid",
}: {
  videos: VideoTestimonial[];
  feedback: string[];
  layout?: Layout;
}) {
  const [videoIdx, setVideoIdx] = useState<number | null>(null);
  const [shot, setShot] = useState<number | null>(null);

  const marquee = layout === "marquee";
  const dark = marquee;

  const moveVideo = useCallback(
    (dir: number) => {
      setVideoIdx((cur) => (cur === null ? cur : (cur + dir + videos.length) % videos.length));
    },
    [videos.length],
  );
  const moveShot = useCallback(
    (dir: number) => {
      setShot((cur) => (cur === null ? cur : (cur + dir + feedback.length) % feedback.length));
    },
    [feedback.length],
  );

  useEffect(() => {
    if (videoIdx === null && shot === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoIdx(null);
        setShot(null);
      } else if (event.key === "ArrowRight") {
        if (videoIdx !== null) moveVideo(1);
        else if (shot !== null) moveShot(1);
      } else if (event.key === "ArrowLeft") {
        if (videoIdx !== null) moveVideo(-1);
        else if (shot !== null) moveShot(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoIdx, shot, moveVideo, moveShot]);

  const videoCard = (video: VideoTestimonial, key: string, idx: number) => (
    <button
      key={key}
      type="button"
      onClick={() => setVideoIdx(idx)}
      className={`group ${marquee ? "mr-4" : ""} flex w-[190px] flex-shrink-0 flex-col overflow-hidden rounded-xl border text-left ${
        dark ? "border-white/10 bg-white/[0.05]" : "border-[#e8e1d6] bg-[#fbf8f2]"
      }`}
    >
      <div className="relative">
        <video
          src={`${video.src}#t=0.1`}
          muted
          playsInline
          preload="metadata"
          className="h-[250px] w-full bg-black object-cover"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-black/55 text-white transition-colors group-hover:bg-[#f5b84b] group-hover:text-[#172033]">
            <PlayCircle className="h-6 w-6" />
          </span>
        </span>
      </div>
      <figcaption className="px-3 py-2.5">
        <span className={`block truncate text-xs font-bold ${dark ? "text-slate-100" : "text-[#172033]"}`}>
          {video.name}
        </span>
        <span className={`block truncate text-[11px] font-medium ${dark ? "text-slate-400" : "text-[#5d6673]"}`}>
          {video.role}
        </span>
      </figcaption>
    </button>
  );

  const edgeFades = (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#172033] to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#172033] to-transparent md:w-20" />
    </>
  );

  const curVideo = videoIdx !== null ? videos[videoIdx] : null;

  return (
    <div className={marquee ? "space-y-8" : "mt-8 space-y-8"}>
      {videos.length > 0 &&
        (marquee ? (
          <div className="group relative overflow-hidden">
            <div className="ax-marquee flex w-max items-stretch group-hover:[animation-play-state:paused]">
              {[...videos, ...videos].map((video, index) =>
                videoCard(video, `${video.src}-${index}`, index % videos.length),
              )}
            </div>
            {edgeFades}
          </div>
        ) : (
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-extrabold">
              <PlayCircle className="h-5 w-5 text-[#0f5b78]" />
              Video Testimonials
            </h3>
            <div className="flex flex-wrap gap-4">
              {videos.map((video, index) => videoCard(video, `${video.src}-${index}`, index))}
            </div>
          </div>
        ))}

      {feedback.length > 0 &&
        (marquee ? (
          <div className="group relative overflow-hidden">
            <div className="ax-marquee-reverse flex w-max group-hover:[animation-play-state:paused]">
              {[...feedback, ...feedback].map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setShot(index % feedback.length)}
                  aria-label="Open feedback message"
                  className="group/card relative mr-4 block w-[150px] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]"
                >
                  <img src={src} alt="Feedback message" loading="lazy" className="h-[210px] w-full object-cover object-top" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-xs font-bold text-white opacity-0 transition-all group-hover/card:bg-black/40 group-hover/card:opacity-100">
                    Tap to expand
                  </span>
                </button>
              ))}
            </div>
            {edgeFades}
          </div>
        ) : (
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-extrabold">
              <ImageIcon className="h-5 w-5 text-[#0f5b78]" />
              WhatsApp Feedback
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {feedback.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(index)}
                  aria-label="Open feedback message"
                  className="group relative overflow-hidden rounded-lg border border-[#e8e1d6] bg-[#fbf8f2]"
                >
                  <img src={src} alt="Feedback message" loading="lazy" className="h-44 w-full object-cover object-top" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-xs font-bold text-white opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                    Tap to expand
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

      {curVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video testimonial"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setVideoIdx(null)}
        >
          <button
            type="button"
            onClick={() => setVideoIdx(null)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" />
            Close
          </button>
          {videos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveVideo(-1);
              }}
              aria-label="Previous video"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 md:left-6 md:h-14 md:w-14"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          <div onClick={(event) => event.stopPropagation()} className="flex max-w-[94vw] flex-col items-center gap-3">
            <video
              key={curVideo.src}
              src={curVideo.src}
              controls
              autoPlay
              playsInline
              className="max-h-[78vh] max-w-[94vw] rounded-lg bg-black"
            />
            <p className="text-sm font-bold text-white">
              {curVideo.name}
              <span className="font-medium text-slate-300"> · {curVideo.role}</span>
            </p>
          </div>
          {videos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveVideo(1);
              }}
              aria-label="Next video"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 md:right-6 md:h-14 md:w-14"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold text-white">
            {videoIdx! + 1} / {videos.length}
          </div>
        </div>
      )}

      {shot !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Feedback viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setShot(null)}
        >
          <button
            type="button"
            onClick={() => setShot(null)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" />
            Close
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              moveShot(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 md:left-6 md:h-14 md:w-14"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={feedback[shot]}
            alt={`Feedback message ${shot + 1}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              moveShot(1);
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 md:right-6 md:h-14 md:w-14"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold text-white">
            {shot + 1} / {feedback.length}
          </div>
        </div>
      )}
    </div>
  );
}
