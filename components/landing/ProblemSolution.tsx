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
  return (
    <section
      id="tai-sao"
      className="section-atmosphere section-atmosphere--sky section-pad"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/95 bg-sky-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-950 sm:text-xs">
            <Scale className="size-3.5 shrink-0 text-sky-600" aria-hidden strokeWidth={2.25} />
            Bối cảnh
          </p>
          <h2
            id="problem-heading"
            className="heading-section-glow mt-4 text-balance text-3xl font-semibold tracking-tight min-[480px]:text-4xl sm:mt-5 sm:text-5xl lg:text-[2.65rem] lg:leading-[1.08]"
          >
            Luật chơi{" "}
            <span className="gradient-word-glow bg-linear-to-r from-sky-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
              đã đổi
            </span>
          </h2>
          <p className="copy-body mx-auto mt-3 max-w-2xl text-base leading-relaxed sm:text-lg">
            Cùng một ý tưởng phần mềm — nhưng cách hiện thực hóa không còn giống thời thuê đội và chờ đợi.
          </p>

          <div className="surface-content mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-200/95 px-5 py-6 text-left ring-1 ring-zinc-900/[0.07] sm:px-8 sm:py-7">
            <p className="copy-body text-[15px] leading-relaxed sm:text-base sm:leading-relaxed">
              Trước kia, hiện thực hóa ý tưởng phần mềm thường đồng nghĩa{" "}
              <span className="font-semibold text-zinc-800">phụ thuộc người khác</span> — thuê đội IT tốn kém,
              quy trình phức tạp, giao tiếp mệt mỏi, và đôi khi kết quả vẫn lệch ý tưởng hoặc đầy lỗi.
            </p>
          </div>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-14">
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-hidden
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-zinc-600/80 bg-zinc-900/90 text-[10px] font-bold uppercase tracking-widest text-zinc-300 shadow-md shadow-black/40 ring-4 ring-sky-500/15">
              vs
            </span>
          </div>

          <article
            className="surface-content group relative flex flex-col rounded-2xl border border-zinc-200/95 bg-linear-to-b from-zinc-50 to-white p-6 ring-1 ring-zinc-900/[0.06] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[0_22px_56px_-26px_rgba(15,23,42,0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
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
                  <li key={item.label} className="flex items-center gap-2.5 text-md text-zinc-700">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 bg-white text-zinc-500">
                      <Icon className="size-4" aria-hidden strokeWidth={2} />
                    </span>
                    <span className="font-medium leading-snug text-zinc-700">{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <p className="copy-body mt-auto border-t border-zinc-200/80 pt-5 text-md leading-relaxed">
              Chi phí cao, phụ thuộc đội ngũ bên ngoài, rủi ro truyền đạt sai và chất lượng không kiểm soát được
              trọn vẹn.
            </p>
          </article>

          <article
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-sky-300/70 bg-linear-to-br from-sky-50 via-white to-white p-6 shadow-[inset_0_1px_0_0_#fff,0_20px_52px_-24px_rgba(2,132,199,0.18),0_2px_12px_-4px_rgba(15,23,42,0.06)] ring-1 ring-sky-200/50 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_#fff,0_26px_60px_-22px_rgba(2,132,199,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
            aria-labelledby="vibe-era-heading"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-cyan-500 to-sky-400 opacity-90"
              aria-hidden
            />

            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex rounded-full border border-sky-200/90 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-900">
                  Hôm nay
                </span>
                <h3 id="vibe-era-heading" className="mt-3 text-lg font-semibold tracking-tight text-zinc-900">
                  Kỷ nguyên Vibe Coding
                </h3>
              </div>
              <div
                className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/30 ring-2 ring-white transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                aria-hidden
              >
                <Sparkles className="size-6" strokeWidth={2} />
              </div>
            </div>

            <ul className="mb-5 flex flex-col gap-2.5" aria-label="Lợi thế kỷ nguyên mới">
              {newWins.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2.5 text-md text-zinc-700">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-sky-200/80 bg-white text-sky-600 shadow-sm">
                      <Icon className="size-4" aria-hidden strokeWidth={2} />
                    </span>
                    <span className="font-semibold leading-snug text-zinc-800">{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-auto text-pretty border-t border-sky-200/60 pt-5 text-md leading-relaxed text-zinc-700 sm:text-[0.9375rem]">
              Bạn có thể <strong className="font-semibold text-zinc-900">tự xây dựng mọi thứ đúng ý muốn</strong> — đơn
              giản, hiệu quả và nhanh chóng chưa từng có.{" "}
              <span className="font-medium text-sky-800">Chào mừng đến cách làm mới.</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
