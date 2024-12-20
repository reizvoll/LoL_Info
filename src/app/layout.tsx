import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppProvider from "@/components/providers/RqProvider";
import { Suspense } from "react";
import Loading from "@/components/layout/Loading";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "LOL-INFO",
  description:
    "게임 '리그 오브 레전드'의 챔피언 및 아이템, 그리고 금주 로테이션 챔피언을 소개하는 페이지입니다.",
  icons: {
    icon: "/lol_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen dark">
      <ThemeProvider attribute="class">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <AppProvider>
              <main className="relative flex-grow flex flex-col">
                {children}
              </main>
            </AppProvider>
          </Suspense>
        </ErrorBoundary>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}