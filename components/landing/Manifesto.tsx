import { Layers, Sparkles } from "lucide-react";

const stack: { name: string; pill: string }[] = [
  { name: "Next.js", pill: "border-zinc-800/25 bg-zinc-900 text-white shadow-md shadow-zinc-900/15" },
  { name: "NestJS", pill: "border-rose-200/90 bg-rose-50 text-rose-950 shadow-sm shadow-rose-900/5" },
  { name: "Tailwind", pill: "border-sky-200/90 bg-sky-50 text-sky-950 shadow-sm shadow-sky-900/5" },
  { name: "React", pill: "border-sky-300/85 bg-sky-50 text-sky-950 shadow-sm" },
  { name: "TanStack", pill: "border-orange-200/90 bg-orange-50 text-orange-950 shadow-sm shadow-orange-900/5" },
  { name: "MUI", pill: "border-blue-200/90 bg-blue-50 text-blue-950 shadow-sm shadow-blue-900/5" },
  { name: "Vercel", pill: "border-zinc-800/30 bg-zinc-950 text-white shadow-md shadow-zinc-900/20" },
];

export function Manifesto() {
  return (
    <section
      id="tu-duy"
      className="section-atmosphere section-atmosphere--slate section-pad"
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <header>
          <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/95 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-800 sm:text-xs">
            <Layers className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
            Làm chủ stack
          </p>
          <h2
            id="manifesto-heading"
            className="heading-section-glow mt-4 text-balance text-3xl font-semibold tracking-tight sm:mt-5 sm:text-5xl sm:leading-[1.08]"
          >
            Hãy làm chủ{" "}
            <span className="gradient-word-glow bg-linear-to-r from-sky-300 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
              công nghệ
            </span>{" "}
            để phục vụ bạn
          </h2>
        </header>

        <p className="copy-body mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl">
          Đừng phụ thuộc bất kỳ ai khác để xây dựng giấc mơ của mình. Đầu tư một lần để sở hữu kỹ năng biến mọi ý tưởng
          thành hiện thực trên màn hình — <strong className="font-semibold text-zinc-100">nhanh và tiết kiệm</strong>{" "}
          hơn nhiều so với thuê ngoài.
        </p>

        <p className="copy-body mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-2 text-base sm:text-[1.0625rem]">
          <Sparkles className="size-4 shrink-0 text-amber-500" aria-hidden strokeWidth={2} />
          <span>Sản phẩm của bạn dùng công nghệ hiện đại, UI/UX chuyên nghiệp, mượt mà.</span>
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          aria-label="Công nghệ tiêu biểu trong khóa học"
        >
          {stack.map((tech) => (
            <span
              key={tech.name}
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold tracking-tight transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-4 sm:text-md ${tech.pill}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <p className="mt-6 text-md font-medium text-zinc-300 [text-shadow:0_0_20px_rgb(255_255_255_/0.06)]">
          Tech stack tiêu biểu trong hệ sinh thái khóa học
        </p>
      </div>
    </section>
  );
}
