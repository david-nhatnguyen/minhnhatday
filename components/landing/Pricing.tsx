import Link from "next/link";
import { Flame, Crown, Check } from "lucide-react";
import { formatVnd } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";

const PRICE_BASIC = 3_999_000;
const PRICE_BASIC_WAS = 10_999_000;
const PRICE_PREMIUM = 6_999_000;

const basicFeatures = ["Toàn bộ 10 chương thực chiến", "Tự tay làm được app sau khóa", "Nền tảng Cursor & Vibe Coding"];

export function Pricing() {
  return (
    <section
      id="gia"
      className="section-atmosphere section-atmosphere--sky px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="pricing-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl">
        <h2
          id="pricing-heading"
          className="text-center text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          Học phí
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600">
          Chọn gói phù hợp — cả hai đều hướng tới kết quả là bạn tự tay tạo ra sản phẩm.
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700">
              <Flame className="size-6" aria-hidden />
              <h3 className="text-xl font-semibold text-zinc-900">Gói cơ bản</h3>
            </div>
            <div className="mt-6 flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-4xl font-bold tabular-nums tracking-tight text-zinc-900">
                {formatVnd(PRICE_BASIC)}
              </span>
              <span
                className="text-sm text-zinc-500 line-through decoration-zinc-400"
                aria-label={`Giá niêm yết trước đây ${formatVnd(PRICE_BASIC_WAS)}`}
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
              Chọn gói cơ bản
            </Link>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-3xl border border-sky-300 bg-gradient-to-b from-sky-50 to-white p-8 shadow-lg shadow-sky-500/15">
            <div
              className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-950 shadow-sm"
              aria-label="Gói nổi bật"
            >
              Phổ biến
            </div>
            <div className="flex items-center gap-2 text-sky-800">
              <Crown className="size-6" aria-hidden />
              <h3 className="text-xl font-semibold text-zinc-900">Gói nâng cao (kèm 1-1)</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Giảng viên Nguyễn Minh Nhật trực tiếp kèm 1-1 — vừa học vừa dùng AI để xây đúng dự án bạn đang ấp ủ.
            </p>
            <div className="mt-6">
              <span className="font-mono text-4xl font-bold tabular-nums tracking-tight text-zinc-900">
                {formatVnd(PRICE_PREMIUM)}
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
              Đăng ký gói 1-1
            </Link>
          </article>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
