import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Clean sans-serif for body text
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif for headings - editorial/architectural feel
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grand Mesob Tower | A Landmark for Addis Ababa",
  description: "Grand Mesob Tower is a visionary 100+ floor mixed-use landmark tower in Addis Ababa, Ethiopia. A vertical city celebrating Ethiopian culture, business innovation, and world-class hospitality.",
  keywords: ["Grand Mesob Tower", "Addis Ababa", "Ethiopia", "landmark tower", "skyscraper", "architecture", "cultural heritage", "business hub"],
  openGraph: {
    title: "Grand Mesob Tower | A Landmark for Addis Ababa",
    description: "A visionary 100+ floor mixed-use landmark tower celebrating Ethiopian culture, business innovation, and world-class hospitality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
