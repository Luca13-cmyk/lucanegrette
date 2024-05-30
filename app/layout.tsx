import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Negrette",
  description:
    "Apaixonado por tecnologia e desenvolvimento, com foco na criação de sistemas eficientes e intuitivos",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["ln", "lucanegrette", "Luca Negrette"],
  themeColor: "#000000",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/L_2L.png",
        href: "/L_2L.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/L_2L.png",
        href: "/L_2L.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
