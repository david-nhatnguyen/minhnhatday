import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minh Nhật Day — Vibe Coding & Cursor | Khóa học 8 giờ",
  description:
    "Biến ý tưởng thành website và ứng dụng với AI & Cursor. Không cần biết code. Công thức 4C, 10 chương thực chiến cùng Nguyễn Minh Nhật.",
  openGraph: {
    title: "Minh Nhật Day — Vibe Coding & Cursor",
    description:
      "Hành trình tự build sản phẩm thực tế trong 8 tiếng. Premium, hiện đại, đáng tin.",
    locale: "vi_VN",
  },
};

export const viewport: Viewport = {
  themeColor: "#e6edf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakarta.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="mesh-bg min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
