import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import fs from 'fs';
import path from 'path';
import "./globals.css";
import Header from "../components/section/Header/page";
import Topbar from "../components/section/Topbar/page";
import Footer from "../components/section/Footer/page";
import { RepairTemplateData } from "../components/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  // Read data from data.json
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const common = fullData.common;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Topbar data={common.Header} />
        <Header data={common.Header} />
        <div className="flex-grow">
          {children}
        </div>
        <Footer data={common.Footer} />
      </body>
    </html>
  );
}
