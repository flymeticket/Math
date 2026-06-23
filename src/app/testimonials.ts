export interface VideoTestimonial {
  src: string;
  name: string;
  role: string;
  landscape?: boolean;
}

export const mypVideos: VideoTestimonial[] = [
  { src: "/testimonials/videos/myp-inaya-student.mp4", name: "MYP 2 Student", role: "IB MYP Mathematics" },
  { src: "/testimonials/videos/myp-aashrutha-student.mp4", name: "MYP 5 Student", role: "IB MYP Mathematics" },
  { src: "/testimonials/videos/myp-avika-student.mp4", name: "MYP 3 Student", role: "IB MYP Mathematics", landscape: true },
  { src: "/testimonials/videos/myp-gayatri-student.mp4", name: "MYP 5 Student", role: "IB MYP Mathematics", landscape: true },
  { src: "/testimonials/videos/myp-inaya-parent.mp4", name: "MYP 3, Parent", role: "IB MYP Mathematics", landscape: true },
  { src: "/testimonials/videos/myp-parent-2.mp4", name: "MYP 3, Parent", role: "IB MYP Mathematics" },
];

export const dpVideos: VideoTestimonial[] = [
  { src: "/testimonials/videos/dp-student-1.mp4", name: "Diploma Student", role: "DP Student" },
  { src: "/testimonials/videos/dp-student-2.mp4", name: "Diploma Student", role: "DP Student", landscape: true },
  { src: "/testimonials/videos/dp-parent-1.mp4", name: "A Parent", role: "DP Parent" },
];

// WhatsApp feedback screenshots grouped by programme (by source folder).
export const mypFeedback = [
  "/testimonials/feedback/feedback-01.png",
  "/testimonials/feedback/feedback-02.png",
  "/testimonials/feedback/feedback-03.png",
  "/testimonials/feedback/feedback-04.png",
  "/testimonials/feedback/feedback-05.png",
  "/testimonials/feedback/feedback-06.png",
  "/testimonials/feedback/feedback-07.png",
  "/testimonials/feedback/feedback-08.png",
  "/testimonials/feedback/feedback-09.png",
  "/testimonials/feedback/feedback-13.png",
];

export const dpFeedback = [
  "/testimonials/feedback/feedback-10.png",
  "/testimonials/feedback/feedback-11.png",
  "/testimonials/feedback/feedback-12.png",
];

export const allVideos: VideoTestimonial[] = [...mypVideos, ...dpVideos];
export const allFeedback = [...mypFeedback, ...dpFeedback];
