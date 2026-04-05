import Link from "next/link";
import { ArrowRight, Braces, Sparkles, Timer } from "lucide-react";

export function FinalCta() {
  return (
    <section
      id="dang-ky"
      className="section-atmosphere section-atmosphere--sky section-pad"
      aria-labelledby="final-cta-heading"
    >
      <div className="on-light-panel relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-zinc-200/95 bg-linear-to-br from-white via-white to-sky-50 px-5 py-10 text-center shadow-[inset_0_1px_0_0_#fff,0_28px_64px_-28px_rgba(15,23,42,0.14),0_4px_16px_-8px_rgba(2,132,199,0.12),0_0_0_1px_rgb(56_189_248/0.08),0_0_48px_-12px_rgb(56_189_248/0.14)] ring-1 ring-sky-200/40 min-[480px]:px-6 min-[480px]:py-12 sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-cyan-500 to-sky-500"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-sky-400/10 blur-3xl"
          aria-hidden
        />

        <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/95 bg-sky-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-950 sm:text-xs">
          <Sparkles className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
          Bước tiếp theo
        </p>

        <h2
          id="final-cta-heading"
          className="mt-5 text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:mt-6 sm:text-3xl"
        >
          Bắt tay vào xây dựng{" "}
          <span className="bg-linear-to-r from-sky-700 via-cyan-600 to-sky-800 bg-clip-text text-transparent">
            ý tưởng của bạn
          </span>{" "}
          ngay
        </h2>

        <p className="text-zinc-900 mx-auto mt-4 max-w-lg text-md leading-relaxed sm:text-base sm:leading-relaxed">
          Sẵn sàng cho hành trình{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-zinc-800">
            <Timer className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2} />8 tiếng
          </span>{" "}
          và{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-zinc-800">
            <Braces className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2} />
            công thức 4C
          </span>
          ? Chọn gói học phù hợp và bắt đầu.
        </p>

        <div className="mt-9 sm:mt-10">
          <Link
            href="#gia"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-600 via-sky-600 to-cyan-500 px-8 py-3 text-md font-semibold text-white shadow-lg shadow-sky-500/25 transition [transition-property:transform,box-shadow,filter] duration-200 ease-out hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100"
          >
            Xem học phí
            <ArrowRight
              className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
