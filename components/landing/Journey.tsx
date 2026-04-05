import {
  Bug,
  Download,
  Layers,
  MapPinned,
  MessageSquareText,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type StageAccent = "sky" | "violet" | "amber" | "emerald";

const stages: {
  step: number;
  title: string;
  body: string;
  icon: typeof Download;
  accent: StageAccent;
}[] = [
  {
    step: 1,
    title: "Chuẩn bị đồ nghề",
    body: "Cài đặt môi trường Cursor và công cụ bổ trợ chỉ trong 15 phút.",
    icon: Download,
    accent: "sky",
  },
  {
    step: 2,
    title: "Làm chủ công cụ",
    body: "Nắm kỹ năng viết Prompt — dùng ngôn ngữ tự nhiên để định hình cấu trúc và giao diện.",
    icon: MessageSquareText,
    accent: "violet",
  },
  {
    step: 3,
    title: "Gọt giũa & vá lỗi",
    body: "Đối diện bug nhẹ nhàng — chỉ đạo Cursor tự tìm và khắc phục.",
    icon: Bug,
    accent: "amber",
  },
  {
    step: 4,
    title: "Đóng gói & đưa ra thế giới",
    body: "Tút tát giao diện chuyên nghiệp; đóng gói .exe hoặc website chạy thật.",
    icon: Rocket,
    accent: "emerald",
  },
];

/** Modern numeric knot: gradient + specular edge + restrained shadow */
const accentStyles: Record<
  StageAccent,
  { knot: string; iconBox: string; icon: string; cardBar: string }
> = {
  sky: {
    knot: "bg-linear-to-br from-sky-400 via-sky-600 to-sky-800 text-white shadow-[0_2px_12px_-2px_rgba(14,165,233,0.45),inset_0_1px_0_0_rgba(255,255,255,0.28)] ring-1 ring-sky-300/50 ring-offset-2 ring-offset-amber-50",
    iconBox: "border-sky-200/80 bg-sky-50",
    icon: "text-sky-700",
    cardBar: "border-l-sky-400/90",
  },
  violet: {
    knot: "bg-linear-to-br from-violet-400 via-violet-600 to-violet-900 text-white shadow-[0_2px_12px_-2px_rgba(139,92,246,0.42),inset_0_1px_0_0_rgba(255,255,255,0.26)] ring-1 ring-violet-300/45 ring-offset-2 ring-offset-amber-50",
    iconBox: "border-violet-200/80 bg-violet-50",
    icon: "text-violet-800",
    cardBar: "border-l-violet-500/90",
  },
  amber: {
    knot: "bg-linear-to-br from-amber-400 via-amber-600 to-orange-700 text-white shadow-[0_2px_12px_-2px_rgba(245,158,11,0.4),inset_0_1px_0_0_rgba(255,255,255,0.28)] ring-1 ring-amber-300/50 ring-offset-2 ring-offset-amber-50",
    iconBox: "border-amber-200/80 bg-amber-50",
    icon: "text-amber-900",
    cardBar: "border-l-amber-500/90",
  },
  emerald: {
    knot: "bg-linear-to-br from-emerald-400 via-emerald-600 to-emerald-900 text-white shadow-[0_2px_12px_-2px_rgba(16,185,129,0.4),inset_0_1px_0_0_rgba(255,255,255,0.26)] ring-1 ring-emerald-300/50 ring-offset-2 ring-offset-amber-50",
    iconBox: "border-emerald-200/80 bg-emerald-50",
    icon: "text-emerald-800",
    cardBar: "border-l-emerald-500/90",
  },
};

export function Journey() {
  return (
    <section
      id="hanh-trinh"
      className="section-atmosphere section-atmosphere--cream section-pad-compact"
      aria-labelledby="journey-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-2xl md:max-w-3xl">
          <header className="text-center">
            <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-amber-200/95 bg-amber-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-950 sm:px-3 sm:py-1 sm:text-[11px]">
              <MapPinned className="size-3 shrink-0 text-amber-600 sm:size-3.5" aria-hidden strokeWidth={2.25} />
              Lộ trình
            </p>
            <h2
              id="journey-heading"
              className="heading-section-glow mt-3 text-balance text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl sm:leading-tight"
            >
              Hành trình{" "}
              <span className="gradient-word-glow bg-linear-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                8 tiếng
              </span>
            </h2>
            <p className="copy-body mx-auto mt-2 flex max-w-md flex-wrap items-center justify-center gap-x-2 gap-y-1 text-md sm:mt-3 sm:text-base">
              <span className="surface-kicker inline-flex items-center gap-1 rounded-full border border-zinc-200/95 px-2 py-0.5 font-medium text-zinc-800">
                <Layers className="size-3 text-amber-600" aria-hidden strokeWidth={2} />
                10 chương thực chiến
              </span>
              <span className="text-zinc-500" aria-hidden>
                ·
              </span>
              <span className="text-zinc-200">4 chặng chính</span>
            </p>
          </header>

          <div className="relative mt-9 sm:mt-10">
            <div
              className="pointer-events-none absolute left-5 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-linear-to-b from-sky-200/90 via-zinc-200/80 to-emerald-200/90 sm:bottom-8 sm:top-9 sm:block"
              aria-hidden
            />

            <ol className="relative space-y-4 sm:space-y-5" aria-label="Bốn chặng trong 8 tiếng">
              {stages.map((s) => {
                const Icon = s.icon;
                const a = accentStyles[s.accent];
                return (
                  <li key={s.step} className="relative flex gap-3 sm:gap-4">
                    <div className="relative z-1 flex w-10 shrink-0 justify-center sm:w-11">
                      <span
                        className={`flex size-9 items-center justify-center rounded-full font-mono text-[13px] font-bold tabular-nums tracking-tight antialiased sm:size-10 sm:text-md ${a.knot}`}
                        aria-hidden
                      >
                        {s.step}
                      </span>
                    </div>

                    <article
                      className={`surface-content min-w-0 flex-1 rounded-xl border border-zinc-200/95 py-3 pl-3 pr-3 ring-1 ring-zinc-900/[0.06] sm:py-3.5 sm:pl-4 sm:pr-4 border-l-[3px] ${a.cardBar} transition [transition-property:box-shadow,border-color] duration-200 hover:border-zinc-300/90 hover:shadow-[0_18px_44px_-22px_rgba(15,23,42,0.14)]`}
                    >
                      <div className="flex items-start gap-3 sm:justify-between">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-zinc-900 sm:text-base">
                            {s.title}
                          </h3>
                          <p className="copy-body mt-1.5 text-xs leading-relaxed sm:text-[13px] sm:leading-relaxed">
                            {s.body}
                          </p>
                        </div>
                        <div
                          className={`flex size-9 shrink-0 items-center justify-center rounded-lg border sm:size-10 ${a.iconBox}`}
                          aria-hidden
                        >
                          <Icon className={`size-4 sm:size-4.5 ${a.icon}`} strokeWidth={2} />
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
