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
    <header className="sticky top-0 z-60 border-b border-zinc-800/90 bg-zinc-950/92 pt-[env(safe-area-inset-top)] shadow-sm shadow-black/40 backdrop-blur-sm supports-backdrop-filter:bg-zinc-950/88">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-none sm:flex-none sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="section-rail-panel"
            aria-label={open ? "Ẩn mục lục trang" : "Hiện mục lục trang"}
            className="hidden h-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700/90 bg-zinc-900/90 px-2 text-zinc-100 shadow-sm shadow-black/30 transition-[background-color,box-shadow,color] duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none lg:inline-flex"
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
            className="truncate text-md font-semibold tracking-tight text-zinc-50 [text-shadow:0_0_24px_rgb(255_255_255_/0.12)] transition-colors duration-200 hover:text-sky-300 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Minh Nhật Đây
          </Link>
        </div>
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md text-zinc-300 transition-colors duration-200 hover:text-white hover:[text-shadow:0_0_16px_rgb(56_189_248_/0.35)] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#gia"
          className="shrink-0 rounded-full bg-gradient-to-r from-sky-700 to-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-sky-600/20 transition-[transform,box-shadow,filter] duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:px-4 sm:text-md"
        >
          <span className="hidden max-[380px]:inline">Học phí</span>
          <span className="inline max-[380px]:hidden">Xem gói học</span>
        </Link>
      </div>
    </header>
  );
}
