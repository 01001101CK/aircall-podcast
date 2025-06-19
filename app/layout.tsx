import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aircall Podcast - Discover Audio Stories That Entertain, Inform, and Inspire",
  description: "Listen to the Aircall Podcast featuring conversations about customer experience, sales strategies, product development, and workplace culture. Discover insights from industry experts and thought leaders.",
  keywords: ["podcast", "customer experience", "sales", "product development", "workplace culture", "business insights", "Aircall"],
  authors: [{ name: "Yufa" }],
  creator: "Yufa",
  publisher: "Yufa",
  metadataBase: new URL("https://aircall-podcast.vercel.app/"),
  alternates: {
    canonical: "/podcast",
  },
  openGraph: {
    title: "Aircall Podcast - The Power of Conversation",
    description: "Listen to the Aircall Podcast featuring conversations about customer experience, sales strategies, product development, and workplace culture. Discover insights from industry experts and thought leaders.",
    url: "https://aircall-podcast.vercel.app/",
    siteName: "Aircall Podcast",
    images: [
      {
        url: "/log.svg",
        width: 139.81,
        height: 40,
        alt: "Aircall Podcast - The Power of Conversation",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aircall Podcast - Discover Audio Stories That Entertain, Inform, and Inspire",
    description: "Listen to the Aircall Podcast featuring conversations about customer experience, sales strategies, product development, and workplace culture.",
    images: ["/log.svg"], 
    creator: "@aircall",
    site: "@aircall",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", 
  //   yandex: "your-yandex-verification-code", 
  //   yahoo: "your-yahoo-verification-code", 
  // },
  category: "podcast",
  classification: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
