import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/section/Header/page";
import Topbar from "../components/section/Topbar/page";
import Footer from "../components/section/Footer/page";
import fullData from "../components/data/data.json";
import { RepairTemplateData } from "../components/types";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "FixPoint - Mobile Repair Services",
  description: "Fast, reliable, and professional mobile repair services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const common = (fullData as RepairTemplateData).common;

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero/herocover-mobile.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen bg-white text-[#171717]`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Topbar data={common.Header} />
        <Header data={common.Header} />
        <div id="main-content" className="flex-grow">
          {children}
        </div>
        <Footer data={common.Footer} />
      </body>
    </html>
  );
}
