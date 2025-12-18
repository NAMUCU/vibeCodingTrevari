import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProcureVision – 조달 데이터 기반 전략 대시보드",
  description:
    "공공조달(나라장터) 데이터를 기반으로 시계열 단가와 제품 Spec을 결합해 인사이트를 제공하는 전략 대시보드 ProcureVision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}


