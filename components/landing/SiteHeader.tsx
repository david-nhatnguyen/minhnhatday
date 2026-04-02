"use client";

import Link from "next/link";
import { List, PanelLeftClose } from "lucide-react";
import { useSectionRail } from "@/components/landing/section-rail-context";

const nav = [
  { href: "#tai-sao", label: "Vấn đề" },
  { href: "#cong-thuc-4c", label: "Công thức 4C" },
  { href: "#hanh-trinh", label: "Lộ trình" },
  { href: "#gia", label: "Học phí" },
];

export function SiteHeader() {
  const { open, toggle } = useSectionRail();

  return (
    <header className="sticky top-0 z-60 border-b border-zinc-200/70 bg-white/45 pt-[env(safe-area-inset-top)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/35">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="section-rail-panel"
            aria-label={open ? "Ẩn mục lục trang" : "Hiện mục lục trang"}
            className="flex h-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/90 bg-white/80 px-2 text-zinc-700 shadow-sm shadow-zinc-900/5 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            title={open ? "Ẩn mục lục" : "Hiện mục lục"}
          >
            {open ? (
              <PanelLeftClose className="h-5 w-5 shrink-0" aria-hidden />
            ) : (
              <List className="h-5 w-5 shrink-0" aria-hidden />
            )}
          </button>
          <Link
            href="#top"
            className="truncate text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-sky-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Minh Nhật Day
          </Link>
        </div>
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#gia"
          className="shrink-0 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-sky-500/25 transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          Xem gói học
        </Link>
      </div>
    </header>
  );
}
