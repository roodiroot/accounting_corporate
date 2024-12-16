import { Suspense } from "react";
import type { Metadata } from "next";

import { gilroy, gropled } from "@/app/fonts";
import { MetrikYA } from "@/components/utils/metrica-ya";
import AllAbsolute from "@/components/sections/absolute/all-absolute";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://partner-biznes.ru"),
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
        <Suspense>
          <MetrikYA />
        </Suspense>
        <AllAbsolute />
        {children}
      </body>
    </html>
  );
}
