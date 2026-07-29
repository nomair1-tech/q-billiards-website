import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import WhatsHappeningBar from "@/components/WhatsHappeningBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qbilliardshtx.com"),

  title: {
    default: "Q Billiards Arena | Pool Hall & Snooker in Houston",
    template: "%s | Q Billiards Arena",
  },

  description:
    "Q Billiards Arena in Houston offers American pool, snooker, Chinese 9-ball, carom, weekly tournaments, food, drinks, and BYOB—open late daily.",

  keywords: [
    "Q Billiards Arena",
    "pool hall Houston",
    "snooker Houston",
    "billiards Houston",
    "Chinese 9-ball Houston",
    "carom billiards Houston",
    "poker room rental Houston",
    "pool tournaments Houston",
    "snooker tournaments Houston",
    "late night pool hall Houston",
    "free pool Houston",
  ],

  authors: [
    {
      name: "Q Billiards Arena",
      url: "https://www.qbilliardshtx.com",
    },
  ],

  creator: "Q Billiards Arena",
  publisher: "Q Billiards Arena",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.qbilliardshtx.com",
    siteName: "Q Billiards Arena",
    title: "Q Billiards Arena | Houston Pool Hall & Snooker Club",
    description:
      "Pool, snooker, Chinese 9-ball, carom billiards, tournaments, poker room rentals, food and late-night entertainment in Houston.",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Q Billiards Arena in Houston",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Q Billiards Arena | Houston Pool Hall & Snooker Club",
    description:
      "Pool, snooker, Chinese 9-ball, tournaments, poker room rentals, food and late-night entertainment in Houston.",
    images: ["/images/hero/hero.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950 antialiased">
        <StructuredData />

        <WhatsHappeningBar />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}