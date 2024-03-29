import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Schock | Web Developer",
  description:
    "Ryan Schock personal portfolio. Full Stack Web Developer. Based out of Ottawa, Ontario.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
