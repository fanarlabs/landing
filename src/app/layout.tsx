import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fanar — AI-Powered Apps for Everyday Life",
  description:
    "Fanar builds intelligent applications that seamlessly integrate AI into daily routines. Like the lighthouse guiding ships through darkness, Fanar illuminates the path forward.",
  openGraph: {
    title: "Fanar — AI-Powered Apps for Everyday Life",
    description:
      "Intelligent applications that seamlessly integrate AI into daily routines.",
    siteName: "Fanar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanar — AI-Powered Apps for Everyday Life",
    description:
      "Intelligent applications that seamlessly integrate AI into daily routines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
