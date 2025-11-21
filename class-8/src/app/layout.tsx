
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: '%s | Class 8 App', // %s is replaced by child page title
    default: 'Class 8 - Metadata & SEO', // Default if no title in child
  },
  description: "Learning how to add SEO to Next.js apps",
  openGraph: {
      type: 'website',
      siteName: 'Class 8 Next.js Course',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">
            {children}
        </main>
      </body>
    </html>
  );
}
