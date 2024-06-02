import type { Metadata } from "next";

import "./globals.css";
import { gilroy, gropled } from "./fonts";
import AllAbsolute from "@/components/sections/absolute/all-absolute";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.ru"),
  title: {
    template: "%s | Партнер - Аутсорсинг бухгалтерских услуг",
    default: "Партнер - Аутсорсинг бухгалтерских услуг",
  },
  description:
    "Мы обеспечим точное ведение бухгалтерского учета и надежную финансовую отчетность для вашего бизнеса.",
  icons: "/next.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${gropled.variable} ${gilroy.variable}`}>
        <AllAbsolute />
        {children}
      </body>
    </html>
  );
}
