import Link from "next/link";
import { ZALO_CHAT_URL, ZALO_PHONE_DISPLAY } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-800/90 bg-zinc-950 px-4 py-10 shadow-[0_-12px_48px_-24px_rgba(0,0,0,0.5)] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-400">
          © {year} Minh Nhật Đây. Giữ mọi quyền.
        </p>
        <nav aria-label="Chân trang" className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="#gia"
            className="text-zinc-400 transition hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Học phí
          </Link>
          <Link
            href="#hanh-trinh"
            className="text-zinc-400 transition hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Lộ trình
          </Link>
          <a
            href={ZALO_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Zalo {ZALO_PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </footer>
  );
}
