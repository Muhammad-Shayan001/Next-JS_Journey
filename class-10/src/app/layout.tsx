import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Class 10 - Middleware",
  description: "Next.js Middleware and Auth Logic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
