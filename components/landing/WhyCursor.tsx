import { Award, Terminal, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type ReasonAccent = "sky" | "emerald" | "amber";

const reasons: {
  icon: typeof Zap;
  title: string;
  body: string;
  accent: ReasonAccent;
}[] = [
  {
    icon: Zap,
    title: "Mạnh mẽ",
    body: "Công cụ hiện đại, phù hợp để biến prompt thành code và sản phẩm thật.",
    accent: "sky",
  },
  {
    icon: Workflow,
    title: "Dễ sử dụng",
    body: "Tập trung vào luồng làm việc tự nhiên — phù hợp người mới, không cần nền lập trình dày.",
    accent: "emerald",
  },
  {
    icon: Award,
    title: "The best of the market",
    body: "Được cộng đồng và doanh nghiệp tin dùng — chọn đúng công cụ để đi nhanh và bền.",
    accent: "amber",
  },
];

const accentStyles: Record<
  ReasonAccent,
  {
    iconWrap: string;
    icon: string;
    hoverRing: string;
    hoverBorder: string;
  }
> = {
  sky: {
    iconWrap:
      "border-sky-200/80 bg-gradient-to-br from-sky-50 to-sky-100/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]",
    icon: "text-sky-600",
    hoverRing: "group-hover:ring-sky-200/70",
    hoverBorder: "group-hover:border-sky-200/90",
  },
  emerald: {
    iconWrap:
      "border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-emerald-100/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]",
    icon: "text-emerald-600",
    hoverRing: "group-hover:ring-emerald-200/70",
    hoverBorder: "group-hover:border-emerald-200/90",
  },
  amber: {
    iconWrap:
      "border-amber-200/80 bg-gradient-to-br from-amber-50 to-amber-100/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]",
    icon: "text-amber-700",
    hoverRing: "group-hover:ring-amber-200/70",
    hoverBorder: "group-hover:border-amber-200/90",
  },
};

export function WhyCursor() {
  return (
    <section
      id="cursor"
      className="section-atmosphere section-atmosphere--sky px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="cursor-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-800 shadow-sm shadow-sky-900/5 sm:text-xs">
              <Terminal className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
              Công cụ cốt lõi
            </p>
            <h2
              id="cursor-heading"
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-4xl"
            >
              Tại sao là{" "}
              <span className="bg-linear-to-r from-sky-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Cursor
              </span>
              ?
            </h2>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
              Gắn liền toàn bộ khóa học — từ ý tưởng mô tả bằng tiếng Việt đến sản phẩm chạy thật, có chất lượng.
            </p>
          </header>

          <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
            {reasons.map((r) => {
              const a = accentStyles[r.accent];
              const Icon = r.icon;
              return (
                <article
                  key={r.title}
                  className={`group relative flex flex-col rounded-2xl border border-zinc-200/90 bg-white/85 p-6 shadow-sm shadow-zinc-900/4 ring-1 ring-zinc-900/3 backdrop-blur-sm transition [transition-property:box-shadow,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/6 motion-reduce:transform-none motion-reduce:hover:transform-none ${a.hoverBorder} ${a.hoverRing}`}
                >
                  <div
                    className={`mb-5 flex size-12 items-center justify-center rounded-2xl border transition-transform duration-200 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 ${a.iconWrap}`}
                  >
                    <Icon className={`size-6 ${a.icon}`} aria-hidden strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{r.title}</h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem] sm:leading-relaxed">
                    {r.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
