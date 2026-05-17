import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/* Inter font - sans font */
const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/* Calistoga font - serif font */
const calistogaFont = Calistoga({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-calistoga",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Multimedia Project",
  description:
    "A modern one-page multimedia website featuring text, images, animations, and video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${calistogaFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
