import {
  AppWindow,
  Bug,
  Layers,
  LayoutGrid,
  Rocket,
  Sparkles,
} from "lucide-react";

const outcomes: {
  icon: typeof AppWindow;
  title: string;
  body: string;
}[] = [
  {
    icon: AppWindow,
    title: "Tự build app cho chính mình",
    body:
      "Ý tưởng chốt hạ thành app chạy được — không xếp hàng chờ dev, không phụ thuộc backlog team ngoài.",
  },
  {
    icon: Sparkles,
    title: "Ra lệnh cho AI như người trong nghề",
    body:
      "Viết prompt rõ ràng, có ngữ cảnh — AI hiểu đúng ý từ đầu, bớt vòng sửa vặt.",
  },
  {
    icon: Bug,
    title: "Fix bug mà không cần đọc hết code",
    body:
      "Mô tả triệu chứng, đưa log — để AI lần ra gốc rễ và gợi ý patch, bạn quyết định áp dụng.",
  },
  {
    icon: Rocket,
    title: "Ship sản phẩm — kiếm tiền thật",
    body:
      "Đóng gói installer, build đa nền tảng, chuẩn bị bàn giao — sẵn sàng đưa ra thị trường.",
  },
  {
    icon: LayoutGrid,
    title: "Portfolio gây ấn tượng mạnh",
    body:
      "Show app desktop chạy thật, có luồng dùng rõ — không dừng ở câu “tôi biết React”.",
  },
  {
    icon: Layers,
    title: "Tư duy người tạo sản phẩm",
    body:
      "Lên kế hoạch, chia module, chọn kiến trúc phù hợp — làm chủ quy trình từ ý tưởng đến bàn giao.",
  },
];

export function CourseOutcomes() {
  return (
    <section
      id="ket-qua"
      className="section-atmosphere section-atmosphere--sky section-pad"
      aria-labelledby="outcomes-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="surface-kicker inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/95 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-950 sm:text-xs">
            <Rocket className="size-3.5 shrink-0 text-emerald-600" aria-hidden strokeWidth={2.25} />
            Sau khóa học
          </p>
          <h2
            id="outcomes-heading"
            className="heading-section-glow mt-4 text-balance text-3xl font-semibold tracking-tight sm:mt-5 sm:text-5xl lg:text-[2.55rem] lg:leading-[1.08]"
          >
            Bạn sẽ{" "}
            <span className="gradient-word-glow bg-linear-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
              không còn như trước
            </span>
          </h2>
          <p className="copy-body mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed">
            Không dừng ở “biết thêm”. Bạn{" "}
            <strong className="font-semibold text-zinc-100">tự tay làm được</strong> những việc trước đây thường phải
            thuê dev — từ prototype đến bàn giao.
          </p>
        </header>

        <ul
          className="mt-12 grid list-none gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5"
          aria-label="Kết quả cụ thể sau khóa"
        >
          {outcomes.map((row) => {
            const Icon = row.icon;
            return (
              <li key={row.title}>
                <article className="surface-content group flex h-full flex-col rounded-2xl border border-zinc-200/95 p-5 ring-1 ring-zinc-900/[0.07] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-300/80 hover:shadow-[0_22px_56px_-24px_rgba(15,23,42,0.16),0_0_0_1px_rgba(16,185,129,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6">
                  <div
                    className="mb-4 flex size-11 items-center justify-center rounded-xl border border-emerald-200/90 bg-linear-to-br from-emerald-50 to-teal-50/80 text-emerald-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                    aria-hidden
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-900">{row.title}</h3>
                  <p className="copy-body mt-2.5 flex-1 text-md leading-relaxed">{row.body}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
