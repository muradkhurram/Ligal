import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ligal | Citizen Legal Ecosystem",
  description: "Understand the Law. Protect Your Rights.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ligal",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-bg-primary text-text-primary antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}