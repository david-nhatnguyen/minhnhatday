import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white/90 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} Minh Nhật Day. Giữ mọi quyền.
        </p>
        <nav aria-label="Chân trang" className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="#gia"
            className="text-zinc-600 transition hover:text-zinc-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Học phí
          </Link>
          <Link
            href="#hanh-trinh"
            className="text-zinc-600 transition hover:text-zinc-900 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Lộ trình
          </Link>
        </nav>
      </div>
    </footer>
  );
}
