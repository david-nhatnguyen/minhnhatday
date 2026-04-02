import {
  Bot,
  DraftingCompass,
  Hammer,
  Lightbulb,
  MessageSquareText,
  PenLine,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const workflow = [
  {
    icon: PenLine,
    label: "Phác thảo",
    hint: "bản vẽ, ý tưởng",
    accent: "text-amber-700",
    ring: "ring-amber-200/80",
    bg: "bg-amber-50/90",
  },
  {
    icon: MessageSquareText,
    label: "Chỉ dẫn",
    hint: "lời nói, prompt",
    accent: "text-sky-700",
    ring: "ring-sky-200/80",
    bg: "bg-sky-50/90",
  },
  {
    icon: Bot,
    label: "Thi công",
    hint: "AI thực hiện",
    accent: "text-violet-700",
    ring: "ring-violet-200/80",
    bg: "bg-violet-50/90",
  },
] as const;

export function Craftsman() {
  return (
    <section
      id="nghe-nhan"
      className="section-atmosphere section-atmosphere--cream px-4 py-14 sm:px-6 sm:py-16 lg:py-20"
      aria-labelledby="craft-heading"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-900/80 sm:text-xs">
              <span
                className="inline-flex size-8 items-center justify-center rounded-xl border border-amber-200/90 bg-linear-to-br from-amber-50 to-white shadow-sm shadow-amber-900/5"
                aria-hidden
              >
                <Hammer className="size-4 text-amber-600" strokeWidth={2.25} />
              </span>
              <span className="hidden min-[420px]:inline">+</span>
              <span
                className="inline-flex size-8 items-center justify-center rounded-xl border border-amber-200/90 bg-linear-to-br from-amber-50 to-white shadow-sm shadow-amber-900/5"
                aria-hidden
              >
                <DraftingCompass className="size-4 text-amber-700" strokeWidth={2.25} />
              </span>
              <span className="ml-1 min-[420px]:ml-2">Tư duy nghệ nhân</span>
            </p>
            <h2
              id="craft-heading"
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:mt-5 sm:text-4xl"
            >
              Người{" "}
              <span className="bg-linear-to-r from-amber-700 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                nghệ nhân
              </span>{" "}
              &amp;{" "}
              <span className="bg-linear-to-r from-zinc-800 via-zinc-700 to-zinc-600 bg-clip-text text-transparent">
                bộ đồ nghề
              </span>
            </h2>
          </header>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            aria-label="Luồng: từ ý tưởng đến thi công"
          >
            {workflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                  {i > 0 && (
                    <span
                      className="hidden text-xs font-medium text-zinc-300 sm:inline"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center gap-2 rounded-2xl border border-white/80 px-3 py-2 shadow-sm shadow-zinc-900/5 ring-1 ring-inset ${step.ring} ${step.bg} backdrop-blur-sm sm:px-4 sm:py-2.5`}
                  >
                    <Icon className={`size-4 shrink-0 sm:size-4.5 ${step.accent}`} aria-hidden strokeWidth={2} />
                    <span className="text-left leading-tight">
                      <span className="block text-xs font-semibold text-zinc-900 sm:text-sm">{step.label}</span>
                      <span className="block text-[10px] font-medium text-zinc-500 sm:text-[11px]">{step.hint}</span>
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-3xl border border-amber-200/70 bg-linear-to-br from-amber-50/95 via-white to-zinc-50/90 p-7 shadow-md shadow-amber-900/5 ring-1 ring-amber-900/4 sm:p-10">
              <p className="text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg sm:leading-relaxed">
                Hãy tưởng tượng AI như một <strong className="font-semibold text-zinc-900">bộ đồ nghề mộc siêu việt</strong>, và bạn là{" "}
                <strong className="font-semibold text-zinc-900">người nghệ nhân</strong>. Bạn không cần tự cưa từng khúc gỗ hay gõ từng cái đinh (viết
                code). Bạn chỉ cần phác thảo bản vẽ, đưa ra chỉ thị bằng lời nói — cỗ máy AI sẽ thi công chính xác. Sản phẩm{" "}
                <strong className="font-semibold text-zinc-900">mang dấu ấn của bạn</strong>, giải đúng bài toán của bạn.
              </p>

              <aside
                className="mt-8 flex gap-4 rounded-2xl border border-sky-200/80 bg-sky-50/70 px-4 py-4 sm:px-5 sm:py-5"
                aria-label="Tóm tắt"
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-200/90 bg-white shadow-sm"
                  aria-hidden
                >
                  <Lightbulb className="size-5 text-sky-600" strokeWidth={2} />
                </span>
                <p className="min-w-0 text-pretty text-sm font-medium leading-relaxed text-zinc-700 sm:text-base">
                  AI không phải phép thuật tự nghĩ ra mọi thứ — mà là{" "}
                  <span className="text-zinc-900">công cụ giải phóng bạn khỏi rào cản kỹ thuật</span>.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
