import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aircall Podcast",
  description: "Listen to the Aircall Podcast",
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
