import { CalendarHeart, HeartHandshake, Video } from "lucide-react";

export function WeeklySupport() {
  return (
    <section
      id="ho-tro"
      className="section-atmosphere section-atmosphere--violet section-pad"
      aria-labelledby="support-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-violet-200/95 bg-violet-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-950 sm:text-xs">
            <HeartHandshake className="size-3.5 shrink-0 text-violet-600" aria-hidden strokeWidth={2.25} />
            Đồng hành
          </p>
          <h2
            id="support-heading"
            className="heading-section-glow mt-4 text-balance text-3xl font-semibold tracking-tight sm:mt-5 sm:text-4xl sm:leading-tight"
          >
            Đồng hành{" "}
            <span className="gradient-word-glow bg-linear-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
              sau giờ học
            </span>
          </h2>
        </header>

        <div className="on-light-panel relative mt-8 overflow-hidden rounded-3xl border border-violet-300/85 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-6 shadow-[inset_0_1px_0_0_#fff,0_22px_56px_-24px_rgba(109,40,217,0.2),0_2px_12px_-4px_rgba(15,23,42,0.06),0_0_0_1px_rgb(139_92_246/0.12),0_0_44px_-10px_rgb(139_92_246/0.16)] ring-1 ring-violet-300/50 sm:mt-10 sm:p-8">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-90"
            aria-hidden
          />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-stretch">
              <div
                className="flex size-16 items-center justify-center rounded-2xl border border-violet-200/90 bg-linear-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 ring-2 ring-white"
                aria-hidden
              >
                <CalendarHeart className="size-8" strokeWidth={2} />
              </div>
              <span className="surface-kicker inline-flex items-center gap-1.5 rounded-full border border-violet-200/90 bg-white px-2.5 py-1 text-xs font-medium text-violet-950 sm:justify-center">
                <Video className="size-3.5 text-violet-600" aria-hidden strokeWidth={2} />
                Meeting hàng tuần
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-base leading-relaxed text-zinc-900 sm:text-base sm:leading-relaxed">
                Meeting hàng tuần để hướng dẫn và hỗ trợ học viên —{" "}
                <strong className="font-semibold text-zinc-800">bạn không đơn độc</strong> trên hành trình build sản
                phẩm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
