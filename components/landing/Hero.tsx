import Link from "next/link";
import { ArrowRight, Clock, Sparkles, LayoutTemplate } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-hero flex-col justify-center overflow-x-hidden bg-[#f0f4f8] px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto flex w-full max-w-5xl flex-col text-center">
        <p className="animate-fade-up mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:mb-5 sm:text-xs">
          Khóa học thực chiến · 8 giờ
        </p>

        <div className="animate-fade-up mb-5 inline-flex items-center justify-center gap-2 self-center rounded-full border border-zinc-200/90 bg-white/75 px-1 py-1 pl-3 pr-1 shadow-sm shadow-zinc-900/5 ring-1 ring-zinc-900/[0.04] backdrop-blur-md sm:mb-8 md:mb-10">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800">
            <Sparkles className="size-3.5 shrink-0 text-amber-500" aria-hidden />
            Vibe Coding
          </span>
          <span className="text-zinc-300" aria-hidden>
            ·
          </span>
          <span className="rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Cursor
          </span>
        </div>

        <div className="relative mx-auto mt-1 w-full max-w-4xl space-y-6 sm:mt-2 sm:space-y-8">
          <div className="hero-copy-messaging px-0 sm:px-2">
            <h1
              id="hero-heading"
              className="animate-fade-up animate-delay-1 text-balance font-semibold tracking-tight text-zinc-900"
            >
              <span className="block text-[clamp(1.35rem,4.2vw+0.65rem,2.25rem)] leading-[1.2] sm:text-5xl sm:leading-[1.15] lg:text-[3.25rem] lg:leading-[1.1]">
                Bạn đang có ý tưởng xây website hay ứng dụng cho riêng mình?
              </span>
              <span className="mt-2 block max-w-none bg-gradient-to-r from-zinc-900 via-sky-700 to-cyan-800 bg-clip-text text-[clamp(1.15rem,2.8vw+0.5rem,1.75rem)] leading-snug text-transparent sm:mt-4 sm:text-4xl sm:leading-tight lg:mx-auto lg:text-[2.65rem]">
                Hãy tự tay xây dựng nó theo cách của bạn.
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-2 mx-auto mt-5 max-w-none text-pretty text-sm leading-relaxed text-zinc-600 sm:mt-9 sm:text-lg sm:leading-relaxed">
              Bạn không cần biết code — chỉ cần có ý tưởng. Hãy để tôi giúp bạn thực hiện nó{" "}
              <span className="font-semibold text-zinc-800">theo cách của bạn!</span>
            </p>
          </div>

          <div
            className="hero-copy-trust animate-fade-up animate-delay-2 flex flex-col items-center justify-center gap-5 text-sm text-zinc-600 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3"
            aria-label="Thông tin khóa học và giảng viên"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20">
                <Clock className="size-4" aria-hidden />
              </span>
              <span>
                <span className="font-semibold tabular-nums text-zinc-900">8 tiếng</span>
                <span className="text-zinc-400"> · </span>
                <span>build sản phẩm thực tế</span>
              </span>
            </div>

            <span className="hidden text-zinc-300 sm:inline" aria-hidden>
              ·
            </span>

            <div className="flex items-center gap-3">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 text-sm font-bold text-white shadow-lg shadow-zinc-900/20"
                aria-hidden
              >
                MN
              </span>
              <div className="text-left leading-tight">
                <p className="font-semibold text-zinc-900">Nguyễn Minh Nhật</p>
                <p className="text-xs text-zinc-500">Giảng viên · Hành trình kèm cận</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-3 mt-5 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 md:mt-12">
          <Link
            href="#gia"
            className="group inline-flex min-h-12 min-w-[220px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 via-sky-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition [transition-property:transform,box-shadow,filter] duration-200 ease-out hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100"
          >
            Đăng ký khóa học
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link
            href="#cong-thuc-4c"
            className="inline-flex min-h-12 min-w-[220px] items-center justify-center gap-2 rounded-full border border-zinc-300/90 bg-white/90 px-8 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm ring-1 ring-zinc-900/[0.04] backdrop-blur-sm transition [transition-property:background-color,border-color,box-shadow,transform] duration-200 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 active:scale-[0.99] motion-reduce:transition-none motion-reduce:active:scale-100"
          >
            <LayoutTemplate className="size-4 text-sky-600" aria-hidden />
            Xem công thức 4C
          </Link>
        </div>
      </div>
    </section>
  );
}
