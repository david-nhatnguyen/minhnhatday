"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSectionRail } from "@/components/landing/section-rail-context";

const SECTIONS = [
  { id: "top", label: "Mở đầu" },
  { id: "cam-ket", label: "Bạn nhận được gì?" },
  { id: "tai-sao", label: "Vấn đề" },
  { id: "nghe-nhan", label: "Nghệ nhân" },
  { id: "cursor", label: "Cursor" },
  { id: "cong-thuc-4c", label: "Công thức 4C" },
  { id: "hanh-trinh", label: "Lộ trình" },
  { id: "ho-tro", label: "Hỗ trợ" },
  { id: "ket-qua", label: "Kết quả" },
  { id: "tu-duy", label: "Làm chủ" },
  { id: "gia", label: "Học phí" },
  { id: "dang-ky", label: "Đăng ký" },
] as const;

const RAIL_LEFT =
  "left-[max(0.5rem,env(safe-area-inset-left))]" as const;

/** Section becomes “current” when its top edge is at or above this px from viewport top (header + reading offset). */
function computeActiveId(activationY: number): string {
  let activeId: string = SECTIONS[0].id;
  for (const s of SECTIONS) {
    const el = document.getElementById(s.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= activationY) {
      activeId = s.id;
    }
  }
  return activeId;
}

function measureActivationY(): number {
  if (typeof document === "undefined") return 88;
  const header = document.querySelector("header");
  const h = header?.getBoundingClientRect().height ?? 56;
  return Math.round(Math.min(h + 22, 130));
}

export function SectionRail() {
  const { open, setOpen } = useSectionRail();
  const [activeId, setActiveId] = useState<string>("top");
  const rafRef = useRef<number | null>(null);
  const activationYRef = useRef(88);

  const updateActive = useCallback(() => {
    setActiveId(computeActiveId(activationYRef.current));
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateActive();
    });
  }, [updateActive]);

  const syncFromHash = useCallback(() => {
    const raw = window.location.hash.slice(1);
    if (raw && SECTIONS.some((s) => s.id === raw)) {
      requestAnimationFrame(() => {
        activationYRef.current = measureActivationY();
        setActiveId(computeActiveId(activationYRef.current));
      });
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    const remeasure = () => {
      activationYRef.current = measureActivationY();
      updateActive();
    };
    remeasure();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", remeasure, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", remeasure);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleUpdate, updateActive]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  /** Màn &lt; lg: không dùng rail — đóng panel để state không kẹt khi resize. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfNarrow = () => {
      if (!mq.matches) setOpen(false);
    };
    closeIfNarrow();
    mq.addEventListener("change", closeIfNarrow);
    return () => mq.removeEventListener("change", closeIfNarrow);
  }, [setOpen]);

  const reopenTab = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-controls="section-rail-panel"
      aria-label="Mở mục lục trang"
      className={`hidden fixed top-1/2 z-55 h-22 w-5 max-w-[min(100%,calc(100vw-0.5rem))] -translate-y-1/2 items-center justify-center rounded-r-xl border-zinc-200/95 bg-white py-2 pl-0 pr-0.5 text-zinc-800 shadow-[4px_0_32px_-10px_rgba(15,23,42,0.22),inset_0_1px_0_0_#fff] ring-1 ring-zinc-900/8 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 lg:inline-flex sm:h-28 sm:w-10 ${RAIL_LEFT}`}
      title="Mở mục lục"
    >
      <ChevronRight className="size-5 shrink-0 sm:size-6" aria-hidden />
    </button>
  );

  if (!open) {
    return reopenTab;
  }

  return (
    <nav
      id="section-rail-panel"
      aria-label="Mục lục các phần trên trang"
      className={`hidden fixed top-1/2 z-55 max-h-[min(28rem,calc(100dvh-2rem-env(safe-area-inset-top)-env(safe-area-inset-bottom)))] w-[min(100%,calc(100vw-1rem-2.75rem-env(safe-area-inset-left,0px)))] max-w-54 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-xl border border-zinc-200/95 bg-white py-2 pl-1.5 pr-1 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18),inset_0_1px_0_0_#fff] ring-1 ring-zinc-900/8 sm:max-w-none sm:w-35 lg:block ${RAIL_LEFT}`}
    >
      <div className="flex items-center gap-1.5 px-1.5 pb-1.5">
        <span
          className="h-px flex-1 bg-linear-to-r from-transparent via-zinc-300 to-transparent"
          aria-hidden
        />
        <p className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          Mục lục
        </p>
        <span
          className="h-px flex-1 bg-linear-to-r from-transparent via-zinc-300 to-transparent"
          aria-hidden
        />
      </div>
      <ul className="relative flex flex-col gap-0 pl-1 before:absolute before:left-[5px] before:top-0.5 before:bottom-0.5 before:w-px before:bg-linear-to-b before:from-zinc-200/80 before:via-zinc-200/60 before:to-zinc-200/80">
        {SECTIONS.map((s, index) => {
          const isActive = activeId === s.id;
          const num = String(index + 1).padStart(2, "0");
          return (
            <li key={s.id} className="relative z-1">
              <Link
                href={`#${s.id}`}
                title={s.label}
                aria-current={isActive ? "location" : undefined}
                className={`group flex items-start gap-1 rounded-md border border-transparent py-1 pl-1 pr-0.5 text-left transition-[color,background-color,box-shadow,border-color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${
                  isActive
                    ? "border-sky-200/95 bg-sky-50 text-sky-950 shadow-sm shadow-sky-900/8 ring-1 ring-sky-200/70"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <span
                  className={`mt-px w-3.5 shrink-0 text-right font-mono text-[7px] font-semibold tabular-nums leading-none ${
                    isActive ? "text-sky-600" : "text-zinc-400 group-hover:text-zinc-500"
                  }`}
                  aria-hidden
                >
                  {num}
                </span>
                <span
                  className={`min-w-0 flex-1 text-[9px] font-medium leading-tight ${
                    isActive ? "text-sky-950" : ""
                  }`}
                >
                  {s.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
