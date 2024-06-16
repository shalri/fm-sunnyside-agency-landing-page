import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["600"] });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Sunnyside Agency | FScode",
  description: "A landing page challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} flex min-h-screen flex-col bg-ss-dark-blue`}
      >
        {children}
      </body>
    </html>
  );
}
