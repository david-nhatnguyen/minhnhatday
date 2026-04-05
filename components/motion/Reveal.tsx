import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Khung bọc nội dung section — không còn animate theo scroll (mượt khi cuộn). */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
