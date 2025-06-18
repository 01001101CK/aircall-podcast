import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


const fellix = localFont({
  src: [
    {
      path: '../public/Fellix-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Fellix-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/Fellix-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Fellix-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Fellix-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fellix',
});

export const metadata: Metadata = {
  title: "Aircall Podcast",
  description: "Aircall Podcast",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fellix.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
