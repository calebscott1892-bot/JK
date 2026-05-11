import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "JK Plumbing Solutions | Campbelltown Plumber For Sydney Jobs",
    template: "%s | JK Plumbing Solutions",
  },
  description:
    "Campbelltown based plumber servicing Sydney. Call JK Plumbing Solutions for blocked drains, leaks, hot water, gas, renovations, new builds and commercial maintenance.",
  alternates: {
    canonical: "/",
  },
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    title: "JK Plumbing Solutions | Campbelltown Plumber For Sydney Jobs",
    description:
      "Blocked, leaking, cold or building? Call a licensed Campbelltown plumber for a practical next step.",
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JK Plumbing Solutions",
    description: "Campbelltown based plumber servicing Sydney repairs, maintenance and project work.",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
