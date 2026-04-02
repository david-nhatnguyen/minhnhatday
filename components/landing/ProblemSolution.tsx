"use client";

import {
  AlertTriangle,
  Banknote,
  Building2,
  Scale,
  Sparkles,
  Target,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
} as const;

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const oldPains = [
  { icon: Banknote, label: "Chi phí tốn kém" },
  { icon: Users, label: "Phụ thuộc đội ngoài" },
  { icon: AlertTriangle, label: "Rủi ro chất lượng" },
] as const;

const newWins = [
  { icon: Target, label: "Đúng ý tưởng" },
  { icon: Zap, label: "Nhanh, gọn" },
  { icon: Wand2, label: "Vibe Coding" },
] as const;

export function ProblemSolution() {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-10% 0px -8% 0px", amount: 0.15 },
        variants: container,
      };

  return (
    <section
      id="tai-sao"
      className="section-atmosphere section-atmosphere--sky px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="problem-heading"
    >
      <motion.div className="mx-auto max-w-6xl" {...motionProps}>
        <motion.div variants={reduce ? undefined : rise} className="text-center">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-800 shadow-sm shadow-sky-900/5 sm:text-xs">
            <Scale className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
            Bối cảnh
          </p>
          <h2
            id="problem-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
          >
            Luật chơi{" "}
            <span className="bg-linear-to-r from-sky-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
              đã đổi
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Cùng một ý tưởng phần mềm — nhưng cách hiện thực hóa không còn giống thời thuê đội và chờ đợi.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-200/90 bg-white/80 px-5 py-6 text-left shadow-md shadow-zinc-900/4 ring-1 ring-zinc-900/4 backdrop-blur-sm sm:px-8 sm:py-7">
            <p className="text-pretty text-[15px] leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
              Trước kia, hiện thực hóa ý tưởng phần mềm thường đồng nghĩa{" "}
              <span className="font-semibold text-zinc-800">phụ thuộc người khác</span> — thuê đội IT tốn kém,
              quy trình phức tạp, giao tiếp mệt mỏi, và đôi khi kết quả vẫn lệch ý tưởng hoặc đầy lỗi.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : rise}
          className="relative mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-14"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-hidden
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-zinc-200/90 bg-white text-[10px] font-bold uppercase tracking-widest text-zinc-400 shadow-md shadow-zinc-900/8 ring-4 ring-sky-50">
              vs
            </span>
          </div>

          <article
            className="group relative flex flex-col rounded-2xl border border-zinc-200/90 bg-linear-to-b from-zinc-50/95 to-white p-6 shadow-sm shadow-zinc-900/4 ring-1 ring-zinc-900/4 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            aria-labelledby="old-model-heading"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex rounded-full border border-zinc-200/90 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Trước đây
                </span>
                <h3 id="old-model-heading" className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">
                  Mô hình cũ
                </h3>
              </div>
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200/70 bg-linear-to-br from-zinc-100 to-zinc-50 text-zinc-700 shadow-sm ring-2 ring-white transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                aria-hidden
              >
                <Building2 className="size-6" strokeWidth={2} />
              </div>
            </div>

            <ul className="mb-5 flex flex-col gap-2.5" aria-label="Rủi ro mô hình cũ">
              {oldPains.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm text-zinc-600">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-500">
                      <Icon className="size-4" aria-hidden strokeWidth={2} />
                    </span>
                    <span className="font-medium leading-snug text-zinc-700">{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-auto text-pretty border-t border-zinc-200/80 pt-5 text-sm leading-relaxed text-zinc-600">
              Chi phí cao, phụ thuộc đội ngũ bên ngoài, rủi ro truyền đạt sai và chất lượng không kiểm soát được
              trọn vẹn.
            </p>
          </article>

          <article
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-sky-200/80 bg-linear-to-br from-sky-50/98 via-white to-cyan-50/50 p-6 shadow-md shadow-sky-500/10 ring-1 ring-sky-100/80 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/12 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            aria-labelledby="vibe-era-heading"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-cyan-500 to-sky-400 opacity-90"
              aria-hidden
            />

            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex rounded-full border border-sky-200/80 bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-800">
                  Hôm nay
                </span>
                <h3 id="vibe-era-heading" className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">
                  Kỷ nguyên Vibe Coding
                </h3>
              </div>
              <div
                className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30 ring-2 ring-white/90 transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                aria-hidden
              >
                <Sparkles className="size-6" strokeWidth={2} />
              </div>
            </div>

            <ul className="mb-5 flex flex-col gap-2.5" aria-label="Lợi thế kỷ nguyên mới">
              {newWins.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm text-zinc-700">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-200/70 bg-white/90 text-sky-600 shadow-sm">
                      <Icon className="size-4" aria-hidden strokeWidth={2} />
                    </span>
                    <span className="font-semibold leading-snug text-zinc-800">{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-auto text-pretty border-t border-sky-200/60 pt-5 text-sm leading-relaxed text-zinc-700 sm:text-[0.9375rem]">
              Bạn có thể <strong className="font-semibold text-zinc-900">tự xây dựng mọi thứ đúng ý muốn</strong> — đơn
              giản, hiệu quả và nhanh chóng chưa từng có.{" "}
              <span className="font-medium text-sky-800">Chào mừng đến cách làm mới.</span>
            </p>
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}
