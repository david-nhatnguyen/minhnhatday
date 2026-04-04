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
    <header className="sticky top-0 z-60 border-b border-zinc-200/90 bg-white/95 pt-[env(safe-area-inset-top)] shadow-sm shadow-zinc-900/[0.08] backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-none sm:flex-none sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="section-rail-panel"
            aria-label={open ? "Ẩn mục lục trang" : "Hiện mục lục trang"}
            className="surface-kicker hidden h-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200/95 bg-white px-2 text-zinc-800 transition-[background-color,box-shadow,color] duration-200 hover:bg-zinc-50 hover:shadow-[0_8px_24px_-10px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 motion-reduce:transition-none lg:inline-flex"
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
            className="truncate text-sm font-semibold tracking-tight text-zinc-950 transition-colors duration-200 hover:text-sky-800 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Minh Nhật Day
          </Link>
        </div>
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 transition-colors duration-200 hover:text-zinc-950 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#gia"
          className="shrink-0 rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-sky-600/20 transition-[transform,box-shadow,filter] duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:px-4 sm:text-sm"
        >
          <span className="hidden max-[380px]:inline">Học phí</span>
          <span className="inline max-[380px]:hidden">Xem gói học</span>
        </Link>
      </div>
    </header>
  );
}
