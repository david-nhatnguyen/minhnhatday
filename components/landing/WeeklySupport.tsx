"use client";

import { CalendarHeart, HeartHandshake, Video } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
} as const;

const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export function WeeklySupport() {
  const reduce = useReducedMotion();
  const v = reduce ? undefined : container;
  const item = reduce ? undefined : rise;

  return (
    <section
      id="ho-tro"
      className="section-atmosphere section-atmosphere--violet section-pad"
      aria-labelledby="support-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.15 }}
        variants={v}
      >
        <motion.header variants={item} className="text-center">
          <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-violet-200/95 bg-violet-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-950 sm:text-xs">
            <HeartHandshake className="size-3.5 shrink-0 text-violet-600" aria-hidden strokeWidth={2.25} />
            Đồng hành
          </p>
          <h2
            id="support-heading"
            className="mt-4 text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:mt-5 sm:text-3xl"
          >
            Đồng hành{" "}
            <span className="bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              sau giờ học
            </span>
          </h2>
        </motion.header>

        <motion.div
          variants={item}
          className="relative mt-8 overflow-hidden rounded-3xl border border-violet-300/80 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-6 shadow-[inset_0_1px_0_0_#fff,0_22px_56px_-24px_rgba(109,40,217,0.16),0_2px_12px_-4px_rgba(15,23,42,0.06)] ring-1 ring-violet-200/55 sm:mt-10 sm:p-8"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-violet-500 opacity-90"
            aria-hidden
          />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-stretch">
              <motion.div
                className="flex size-16 items-center justify-center rounded-2xl border border-violet-200/90 bg-linear-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 ring-2 ring-white"
                aria-hidden
                initial={reduce ? undefined : { scale: 0.92, opacity: 0 }}
                whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <CalendarHeart className="size-8" strokeWidth={2} />
              </motion.div>
              <span className="surface-kicker inline-flex items-center gap-1.5 rounded-full border border-violet-200/90 bg-white px-2.5 py-1 text-xs font-medium text-violet-950 sm:justify-center">
                <Video className="size-3.5 text-violet-600" aria-hidden strokeWidth={2} />
                Meeting hàng tuần
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="copy-body text-sm leading-relaxed sm:text-base sm:leading-relaxed">
                Meeting hàng tuần để hướng dẫn và hỗ trợ học viên —{" "}
                <strong className="font-semibold text-zinc-800">bạn không đơn độc</strong> trên hành trình build sản
                phẩm.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
