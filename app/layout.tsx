import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skylar Li / 李香蓄 · AI Product Manager",
  description:
    "Skylar 的中英双语 AI 产品经理个人主页，展示产品判断、项目案例、工作方式与联系方式。",
  keywords: ["Skylar", "AI 产品经理", "AI Product Manager", "产品作品集", "Product Portfolio"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
