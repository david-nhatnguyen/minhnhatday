# Minh Nhật Day — Landing

Landing page giới thiệu khóa học Vibe Coding & Cursor (Next.js + Tailwind CSS).

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy Vercel

1. Đẩy repo lên GitHub/GitLab/Bitbucket.
2. Trên [Vercel](https://vercel.com): **Add New Project** → import repo.
3. **Root Directory**: chọn thư mục `minhnhatday` (nếu repo monorepo chứa nhiều project).
4. Framework Preset: Next.js — Vercel tự nhận `next build`.
5. Deploy — mỗi push vào nhánh chính sẽ build production; nhánh khác tạo preview URL.

Hoặc từ CLI (đã cài `vercel`):

```bash
cd minhnhatday
vercel
```

## Tuỳ chỉnh CTA đăng ký

Các nút “Đăng ký” hiện trỏ tới anchor nội bộ (`#gia`, `#dang-ky`). Thay bằng link form Google, Zalo, hoặc `mailto:` trong `components/landing/Pricing.tsx` và `FinalCta.tsx`.

## Giá hiển thị

Số tiền trong `components/landing/Pricing.tsx` dùng hằng số (`PRICE_*`) và `formatVnd()` trong `lib/format.ts` (`Intl.NumberFormat` locale `vi-VN`).
# minhnhatday
# minhnhatday
