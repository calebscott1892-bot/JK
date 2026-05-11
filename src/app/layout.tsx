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
    default: "JK Plumbing Solutions | Campbelltown Plumber Servicing Sydney",
    template: "%s | JK Plumbing Solutions",
  },
  description:
    "Licensed plumbing solutions across Campbelltown and Sydney. Blocked drains, hot water, gas, maintenance, renovations, new builds, emergency repairs and commercial plumbing.",
  alternates: {
    canonical: "/",
  },
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    title: "JK Plumbing Solutions | Campbelltown Plumber Servicing Sydney",
    description:
      "Reliable, transparent and professional plumbing solutions across Campbelltown and Sydney.",
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JK Plumbing Solutions",
    description: "Licensed plumbing solutions across Campbelltown and Sydney.",
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
