import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Ubuntu, Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Cursor, CursorPointer } from "@/app/components/cursor";
import { StarsBackground } from "@/app/components/stars";
import { Preloader } from "@/app/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alamgir Hossain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${ubuntu.variable} ${bricolageGrotesque.variable} ${spaceGrotesk.variable} antialiased bg-black min-h-screen relative`}
      >
        <Preloader />
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground
            className="h-full w-full bg-transparent"
            starColor="#ffffff"
          />
        </div>
        <div className="relative z-50">
          <Cursor />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}