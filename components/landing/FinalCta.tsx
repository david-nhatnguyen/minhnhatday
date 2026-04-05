import Link from "next/link";
import { ArrowRight, Braces, MessageCircle, Sparkles, Timer } from "lucide-react";
import { ZALO_CHAT_URL, ZALO_PHONE_DISPLAY } from "@/lib/contact";

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

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-800 sm:leading-relaxed">
          Sẵn sàng cho hành trình{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-zinc-900">
            <Timer className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2} />8 tiếng
          </span>{" "}
          và{" "}
          <span className="inline-flex items-center gap-1 font-semibold text-zinc-900">
            <Braces className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2} />
            công thức 4C
          </span>
          ? Xem học phí, rồi liên hệ Zalo để được hướng dẫn đăng ký và thanh toán —{" "}
          <strong className="font-semibold text-zinc-900">chỉ khoảng 2 phút</strong> là xong.
        </p>

        <div className="mt-8 rounded-2xl border border-sky-200/90 bg-sky-50/80 px-4 py-4 text-left text-sm text-zinc-800 ring-1 ring-sky-200/50 sm:px-5 sm:text-[0.9375rem] sm:leading-relaxed">
          <p className="font-semibold text-sky-950">Thanh toán &amp; đăng ký</p>
          <p className="mt-1.5">
            Đăng ký siêu nhanh, <span className="font-semibold text-zinc-900">2 phút là xong</span>. Nhắn Zalo để được
            hướng dẫn từng bước.
          </p>
          <p className="mt-2 font-mono text-base font-semibold tabular-nums text-zinc-900">
            SĐT Zalo:{" "}
            <a
              href={ZALO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline decoration-sky-400/70 underline-offset-2 transition hover:text-sky-800"
            >
              {ZALO_PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div className="mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 self-center sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="#gia"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-linear-to-r from-sky-600 via-sky-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition [transition-property:transform,box-shadow,filter] duration-200 ease-out hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100"
          >
            Xem học phí
            <ArrowRight
              className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
          <a
            href={ZALO_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sky-300/90 bg-white px-8 py-3 text-sm font-semibold text-sky-800 shadow-sm ring-1 ring-sky-200/60 transition [transition-property:transform,box-shadow] duration-200 hover:border-sky-400 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            <MessageCircle className="size-4 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
            Nhắn Zalo {ZALO_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
