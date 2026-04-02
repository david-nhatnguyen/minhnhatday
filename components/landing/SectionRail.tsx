"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Mở đầu" },
  { id: "cam-ket", label: "Bạn nhận được gì?" },
  { id: "tai-sao", label: "Vấn đề" },
  { id: "nghe-nhan", label: "Nghệ nhân" },
  { id: "cursor", label: "Cursor" },
  { id: "cong-thuc-4c", label: "Công thức 4C" },
  { id: "hanh-trinh", label: "Lộ trình" },
  { id: "ho-tro", label: "Hỗ trợ" },
  { id: "tu-duy", label: "Làm chủ" },
  { id: "gia", label: "Học phí" },
  { id: "dang-ky", label: "Đăng ký" },
] as const;

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

  return (
    <div className="pointer-events-none fixed left-2 top-0 z-40 hidden h-dvh max-h-svh w-37 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] lg:flex lg:flex-col lg:justify-center">
      <nav
        className="pointer-events-auto max-h-[min(28rem,calc(100dvh-2rem))] w-35 overflow-y-auto overscroll-contain rounded-xl border border-zinc-200/90 bg-white/92 py-2 pl-1.5 pr-1 shadow-[0_8px_28px_-10px_rgba(15,23,42,0.1)] ring-1 ring-zinc-900/5 backdrop-blur-md"
        aria-label="Mục lục các phần trên trang"
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
                    ? "border-sky-200/90 bg-linear-to-r from-sky-50 to-sky-50/40 text-sky-950 shadow-sm shadow-sky-900/5 ring-1 ring-sky-200/60"
                    : "text-zinc-600 hover:bg-zinc-50/90 hover:text-zinc-900"
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
    </div>
  );
}
