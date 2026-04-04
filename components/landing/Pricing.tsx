import Link from "next/link";
import { Flame, Crown, Check } from "lucide-react";
import { formatVnd } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";

const PRICE_BASIC = 3_999_000;
const PRICE_BASIC_WAS = 10_999_000;
const PRICE_PREMIUM = 12_999_000;
/** Giá niêm để hiển thị gạch ngang (gói nâng cao). */
const PRICE_PREMIUM_WAS = 39_990_000;

const basicFeatures = ["Toàn bộ 10 chương thực chiến", "Tự tay làm được app sau khóa", "Nền tảng Cursor & Vibe Coding"];

export function Pricing() {
  return (
    <section
      id="gia"
      className="section-atmosphere section-atmosphere--sky section-pad"
      aria-labelledby="pricing-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl">
        <h2
          id="pricing-heading"
          className="text-center text-pretty text-2xl font-semibold tracking-tight text-zinc-950 min-[480px]:text-3xl sm:text-4xl lg:text-[2.375rem] lg:leading-tight"
        >
          Học phí
        </h2>
        <p className="copy-body mx-auto mt-4 max-w-2xl text-center text-sm min-[480px]:text-base sm:text-lg">
          Số tiền bạn bỏ ra{" "}
          <strong className="font-semibold text-zinc-900">còn thấp hơn một tháng thuê developer</strong>
          {" "}— trong khi bạn tự tay tạo ra sản phẩm thật và giữ kỹ năng Cursor &amp; Vibe Coding cho riêng mình. Chọn
          gói phù hợp và <strong className="font-semibold text-zinc-900">đăng ký học ngay</strong>.
        </p>
        <p
          className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-2 text-center"
          role="status"
          aria-label="Chương trình đang sale 89 phần trăm học phí"
        >
          <span className="inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm sm:text-sm">
            Sale 89%
          </span>
          <span className="text-pretty text-sm font-semibold text-rose-800 sm:text-base">
            Đang trong đợt mở sale 89% học phí — slot có hạn, đăng ký ngay để giữ mức giá ưu đãi.
          </span>
        </p>
        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-2">
          <article className="surface-content relative flex flex-col rounded-3xl border border-zinc-200/95 p-6 ring-1 ring-zinc-900/[0.08] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[inset_0_1px_0_0_#fff,0_28px_64px_-26px_rgba(15,23,42,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
            <div
              className="absolute right-4 top-4 rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm sm:px-3 sm:py-1 sm:text-xs"
              aria-hidden
            >
              −89%
            </div>
            <div className="flex min-w-0 items-center gap-2 text-amber-700">
              <Flame className="size-6 shrink-0" aria-hidden />
              <h3 className="min-w-0 text-pretty text-xl font-semibold text-zinc-900">Gói cơ bản</h3>
            </div>
            <div className="mt-6 flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-mono text-3xl font-bold tabular-nums tracking-tight text-zinc-900 sm:text-4xl">
                {formatVnd(PRICE_BASIC)}
              </span>
              <span
                className="text-sm text-zinc-500 line-through decoration-zinc-400"
                aria-label={`Giá niêm yết ${formatVnd(PRICE_BASIC_WAS)}`}
              >
                {formatVnd(PRICE_BASIC_WAS)}
              </span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-zinc-700">
              {basicFeatures.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#dang-ky"
              className="mt-10 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-zinc-300 bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Đăng ký học ngay — gói cơ bản
            </Link>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-sky-400/60 bg-gradient-to-b from-sky-50 via-white to-white p-6 shadow-[inset_0_1px_0_0_#fff,0_24px_64px_-22px_rgba(2,132,199,0.26),0_2px_12px_-4px_rgba(15,23,42,0.06)] ring-1 ring-sky-400/25 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_#fff,0_32px_72px_-20px_rgba(2,132,199,0.32)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
            <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5">
              <span
                className="rounded-full bg-rose-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm sm:text-xs"
                aria-hidden
              >
                −89%
              </span>
              <span
                className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-semibold text-amber-950 shadow-sm sm:px-3 sm:text-xs"
                aria-label="Gói nổi bật"
              >
                Phổ biến
              </span>
            </div>
            <div className="flex min-w-0 items-center gap-2 text-sky-800">
              <Crown className="size-6 shrink-0" aria-hidden />
              <h3 className="min-w-0 text-pretty text-xl font-semibold text-zinc-900">Gói nâng cao (kèm 1-1)</h3>
            </div>
            <p className="copy-body mt-2 text-sm">
              Giảng viên Nguyễn Minh Nhật trực tiếp kèm 1-1 — vừa học vừa dùng AI để xây đúng dự án bạn đang ấp ủ.
            </p>
            <div className="mt-6 flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="font-mono text-3xl font-bold tabular-nums tracking-tight text-zinc-900 sm:text-4xl">
                {formatVnd(PRICE_PREMIUM)}
              </span>
              <span
                className="text-sm text-zinc-500 line-through decoration-zinc-400"
                aria-label={`Giá niêm yết ${formatVnd(PRICE_PREMIUM_WAS)}`}
              >
                {formatVnd(PRICE_PREMIUM_WAS)}
              </span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-zinc-800">
              <li className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-sky-600" aria-hidden />
                <span>Mọi nội dung gói cơ bản</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-sky-600" aria-hidden />
                <span>Buổi 1-1 với giảng viên</span>
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-sky-600" aria-hidden />
                <span>Tối ưu theo dự án cá nhân của bạn</span>
              </li>
            </ul>
            <Link
              href="#dang-ky"
              className="mt-10 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Đăng ký học ngay — gói 1-1
            </Link>
          </article>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
