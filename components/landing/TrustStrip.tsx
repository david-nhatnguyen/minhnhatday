import { BookOpen, CalendarSync, Clock, GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type PillarAccent = "sky" | "emerald" | "violet" | "amber";

const highlights: {
  icon: typeof Clock;
  title: string;
  description: string;
  accent: PillarAccent;
}[] = [
  {
    icon: Clock,
    title: "8 giờ thực chiến",
    description:
      "Cả khóa gói gọn trong 8 giờ làm việc trực tiếp — ưu tiên build sản phẩm thật, không kéo lý thuyết hay filler.",
    accent: "sky",
  },
  {
    icon: BookOpen,
    title: "10 chương",
    description:
      "Lộ trình chia thành 10 chương rõ ràng: từ thiết lập môi trường, làm chủ prompt, đến vá lỗi và đóng gói bàn giao.",
    accent: "emerald",
  },
  {
    icon: Sparkles,
    title: "Cursor & AI",
    description:
      "Học trong Cursor với AI: biến ý tưởng và mô tả tiếng Việt thành code, giao diện và luồng xử lý đúng ý bạn.",
    accent: "violet",
  },
  {
    icon: CalendarSync,
    title: "Meeting hàng tuần",
    description:
      "Buổi gặp nhóm định kỳ để hỏi đáp, xử lý chỗ kẹt và đồng bộ tiến độ — không học xong rồi bơi một mình.",
    accent: "amber",
  },
];

const accentStyles: Record<
  PillarAccent,
  {
    iconWrap: string;
    icon: string;
    hoverBorder: string;
    hoverRing: string;
  }
> = {
  sky: {
    iconWrap:
      "border-sky-200/90 bg-linear-to-br from-sky-50 to-sky-100/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
    icon: "text-sky-700",
    hoverBorder: "group-hover:border-sky-200/90",
    hoverRing: "group-hover:shadow-sky-500/8 group-hover:ring-sky-200/50",
  },
  emerald: {
    iconWrap:
      "border-emerald-200/90 bg-linear-to-br from-emerald-50 to-emerald-100/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
    icon: "text-emerald-800",
    hoverBorder: "group-hover:border-emerald-200/90",
    hoverRing: "group-hover:shadow-emerald-500/8 group-hover:ring-emerald-200/50",
  },
  violet: {
    iconWrap:
      "border-violet-200/90 bg-linear-to-br from-violet-50 to-violet-100/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
    icon: "text-violet-800",
    hoverBorder: "group-hover:border-violet-200/90",
    hoverRing: "group-hover:shadow-violet-500/8 group-hover:ring-violet-200/50",
  },
  amber: {
    iconWrap:
      "border-amber-200/90 bg-linear-to-br from-amber-50 to-amber-100/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
    icon: "text-amber-900",
    hoverBorder: "group-hover:border-amber-200/90",
    hoverRing: "group-hover:shadow-amber-500/8 group-hover:ring-amber-200/50",
  },
};

export function TrustStrip() {
  return (
    <section
      id="cam-ket"
      className="section-atmosphere section-atmosphere--ribbon relative border-y border-zinc-700/50 section-pad-compact"
      aria-labelledby="trust-strip-heading"
    >
      <Reveal>
        <div className="mx-auto w-full max-w-6xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-900 sm:text-xs">
              <GraduationCap className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
              Trong một khóa học
            </p>
            <h2
              id="trust-strip-heading"
              className="heading-section-glow mt-4 text-balance text-3xl font-semibold tracking-tight sm:mt-5 sm:text-4xl lg:text-[2.35rem] lg:leading-tight"
            >
              Bạn{" "}
              <span className="gradient-word-glow bg-linear-to-r from-sky-300 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
                nhận được
              </span>{" "}
              gì?
            </h2>
            <p className="copy-body mt-4 text-base leading-relaxed sm:text-lg sm:leading-relaxed">
              Bốn trụ cột dưới đây giữ cho hành trình <strong className="font-semibold text-zinc-100">ngắn gọn nhưng đủ sâu</strong>:
              đủ thời lượng để làm ra sản phẩm, đủ cấu trúc để không lạc, đủ công cụ hiện đại và đủ hỗ trợ sau mỗi buổi.
            </p>
          </header>

          <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5" aria-label="Bốn trụ cột khóa học">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const a = accentStyles[item.accent];
              const num = String(index + 1).padStart(2, "0");
              return (
                <li key={item.title} className="min-w-0">
                  <article
                    className={`surface-content group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/95 p-5 ring-1 ring-zinc-900/[0.07] transition [transition-property:transform,box-shadow,border-color,ring-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-24px_rgba(15,23,42,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${a.hoverBorder} ${a.hoverRing}`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-2">
                      <div
                        className={`flex size-12 items-center justify-center rounded-2xl border transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 ${a.iconWrap}`}
                        aria-hidden
                      >
                        <Icon className={`size-6 ${a.icon}`} strokeWidth={2} />
                      </div>
                      <span className="font-mono text-[10px] font-bold tabular-nums leading-none text-zinc-300 sm:text-[11px]">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="copy-body mt-2.5 flex-1 text-md leading-relaxed">{item.description}</p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
