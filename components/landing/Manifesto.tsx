"use client";

import { Layers, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const stack: { name: string; pill: string }[] = [
  { name: "Next.js", pill: "border-zinc-800/25 bg-zinc-900 text-white shadow-md shadow-zinc-900/15" },
  { name: "NestJS", pill: "border-rose-200/90 bg-rose-50 text-rose-950 shadow-sm shadow-rose-900/5" },
  { name: "Tailwind", pill: "border-sky-200/90 bg-sky-50 text-sky-950 shadow-sm shadow-sky-900/5" },
  { name: "React", pill: "border-sky-300/80 bg-sky-50/90 text-sky-950 shadow-sm" },
  { name: "TanStack", pill: "border-orange-200/90 bg-orange-50 text-orange-950 shadow-sm shadow-orange-900/5" },
  { name: "MUI", pill: "border-blue-200/90 bg-blue-50 text-blue-950 shadow-sm shadow-blue-900/5" },
  { name: "Vercel", pill: "border-zinc-800/30 bg-zinc-950 text-white shadow-md shadow-zinc-900/20" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
} as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

/** Nested stagger for tech pills only */
const pillList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.02 },
  },
} as const;

export function Manifesto() {
  const reduce = useReducedMotion();
  const v = reduce ? undefined : container;
  const item = reduce ? undefined : rise;

  return (
    <section
      id="tu-duy"
      className="section-atmosphere section-atmosphere--slate px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="manifesto-heading"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, margin: "-10% 0px -8% 0px", amount: 0.12 }}
        variants={v}
      >
        <motion.header variants={item}>
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-700 shadow-sm sm:text-xs">
            <Layers className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
            Làm chủ stack
          </p>
          <h2
            id="manifesto-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-4xl"
          >
            Hãy làm chủ{" "}
            <span className="bg-linear-to-r from-sky-700 via-cyan-600 to-sky-700 bg-clip-text text-transparent">
              công nghệ
            </span>{" "}
            để phục vụ bạn
          </h2>
        </motion.header>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-relaxed"
        >
          Đừng phụ thuộc bất kỳ ai khác để xây dựng giấc mơ của mình. Đầu tư một lần để sở hữu kỹ năng biến mọi ý tưởng
          thành hiện thực trên màn hình — <strong className="font-semibold text-zinc-800">nhanh và tiết kiệm</strong>{" "}
          hơn nhiều so với thuê ngoài.
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-2 text-pretty text-sm text-zinc-500 sm:text-base"
        >
          <Sparkles className="size-4 shrink-0 text-amber-500" aria-hidden strokeWidth={2} />
          <span>Sản phẩm của bạn dùng công nghệ hiện đại, UI/UX chuyên nghiệp, mượt mà.</span>
        </motion.p>

        <motion.div
          variants={reduce ? undefined : pillList}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          aria-label="Công nghệ tiêu biểu trong khóa học"
        >
          {stack.map((tech) => (
            <motion.span
              key={tech.name}
              variants={item}
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold tracking-tight transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-4 sm:text-sm ${tech.pill}`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-6 text-sm font-medium text-zinc-500">
          Tech stack tiêu biểu trong hệ sinh thái khóa học
        </motion.p>
      </motion.div>
    </section>
  );
}
