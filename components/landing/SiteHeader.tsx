import Link from "next/link";

const nav = [
  { href: "#tai-sao", label: "Vấn đề" },
  { href: "#cong-thuc-4c", label: "Công thức 4C" },
  { href: "#hanh-trinh", label: "Lộ trình" },
  { href: "#gia", label: "Học phí" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/45 pt-[env(safe-area-inset-top)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/35">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-sky-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Minh Nhật Day
        </Link>
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
          className="rounded-full bg-gradient-to-r from-sky-600 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-sky-500/25 transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 motion-reduce:transition-none motion-reduce:hover:scale-100"
        >
          Xem gói học
        </Link>
      </div>
    </header>
  );
}
