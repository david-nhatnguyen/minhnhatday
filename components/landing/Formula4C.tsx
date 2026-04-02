import { Bug, Braces, Globe, ListChecks, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type FourCAccent = "sky" | "emerald" | "amber" | "rose";

const pillars: {
  title: string;
  subtitle: string;
  icon: typeof Globe;
  example: string;
  accent: FourCAccent;
}[] = [
  {
    subtitle: "Ngữ cảnh",
    title: "Context",
    icon: Globe,
    example: "Ứng dụng này dành cho người già sử dụng…",
    accent: "sky",
  },
  {
    subtitle: "Nhiệm vụ rõ ràng",
    title: "Clear Task",
    icon: ListChecks,
    example: "Làm giao diện đăng nhập chữ to, độ tương phản cao.",
    accent: "emerald",
  },
  {
    subtitle: "Ràng buộc",
    title: "Constraints",
    icon: Shield,
    example: "Không dùng hiệu ứng chuyển động phức tạp.",
    accent: "amber",
  },
  {
    subtitle: "Chỉnh sửa",
    title: "Correction",
    icon: Bug,
    example: "Ném đoạn lỗi vào Cursor — phân tích ngược (Reverse Debugging) và tự sửa.",
    accent: "rose",
  },
];

const accentStyles: Record<
  FourCAccent,
  {
    card: string;
    iconWrap: string;
    icon: string;
    quote: string;
    num: string;
    hover: string;
  }
> = {
  sky: {
    card: "border-sky-200/50 bg-linear-to-br from-sky-50/95 via-white to-white",
    iconWrap: "border-sky-200/85 bg-linear-to-br from-sky-50 to-sky-100/40",
    icon: "text-sky-600",
    quote: "border-sky-200/70 bg-sky-50/50",
    num: "text-sky-600/90",
    hover: "hover:border-sky-300/80 hover:shadow-sky-500/8",
  },
  emerald: {
    card: "border-emerald-200/50 bg-linear-to-br from-emerald-50/95 via-white to-white",
    iconWrap: "border-emerald-200/85 bg-linear-to-br from-emerald-50 to-emerald-100/40",
    icon: "text-emerald-700",
    quote: "border-emerald-200/70 bg-emerald-50/50",
    num: "text-emerald-700/90",
    hover: "hover:border-emerald-300/80 hover:shadow-emerald-500/8",
  },
  amber: {
    card: "border-amber-200/50 bg-linear-to-br from-amber-50/95 via-white to-white",
    iconWrap: "border-amber-200/85 bg-linear-to-br from-amber-50 to-amber-100/40",
    icon: "text-amber-700",
    quote: "border-amber-200/70 bg-amber-50/50",
    num: "text-amber-800/90",
    hover: "hover:border-amber-300/80 hover:shadow-amber-500/8",
  },
  rose: {
    card: "border-rose-200/50 bg-linear-to-br from-rose-50/95 via-white to-white",
    iconWrap: "border-rose-200/85 bg-linear-to-br from-rose-50 to-rose-100/40",
    icon: "text-rose-600",
    quote: "border-rose-200/70 bg-rose-50/50",
    num: "text-rose-600/90",
    hover: "hover:border-rose-300/80 hover:shadow-rose-500/8",
  },
};

export function Formula4C() {
  return (
    <section
      id="cong-thuc-4c"
      className="section-atmosphere section-atmosphere--sky px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="formula-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-700 shadow-sm shadow-zinc-900/5 sm:text-xs">
              <Braces className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
              Công thức 4C
            </p>
            <h2
              id="formula-heading"
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-4xl"
            >
              Bạn sẽ{" "}
              <span className="bg-linear-to-r from-sky-700 via-cyan-600 to-sky-700 bg-clip-text text-transparent">
                làm gì?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
              Chỉ viết ra lệnh (prompt). Trong khóa học, bạn làm chủ{" "}
              <strong className="font-semibold text-zinc-900">Công thức 4C</strong>{" "}
              — kỹ năng cốt lõi của người tạo ra sản phẩm.
            </p>
          </header>

          <ol className="mt-12 grid list-none gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14" aria-label="Bốn chữ C trong Công thức 4C">
            {pillars.map((p, index) => {
              const Icon = p.icon;
              const a = accentStyles[p.accent];
              const step = index + 1;
              return (
                <li key={p.title}>
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-md shadow-zinc-900/4 ring-1 ring-zinc-900/4 transition [transition-property:transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${a.card} ${a.hover}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm ${a.iconWrap}`}
                        aria-hidden
                      >
                        <Icon className={`size-6 ${a.icon}`} strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{p.subtitle}</p>
                          <span className={`font-mono text-xs font-bold tabular-nums ${a.num}`}>
                            {String(step).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
                          <span className="font-mono font-bold text-zinc-400">{step}.</span> {p.title}
                        </h3>
                      </div>
                    </div>
                    <blockquote
                      className={`mt-5 border-l-[3px] pl-4 text-pretty text-sm italic leading-relaxed text-zinc-700 sm:pl-5 sm:text-[0.9375rem] sm:leading-relaxed ${a.quote}`}
                    >
                      <span aria-hidden className="text-zinc-400">
                        “
                      </span>
                      {p.example}
                      <span aria-hidden className="text-zinc-400">
                        ”
                      </span>
                    </blockquote>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
