import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Block List",
  description:
    "Verify guests and protect your property. Effortlessly manage and review guest history to protect your property and ensure peace of mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
