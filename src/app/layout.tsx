import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fund My Main Character Arc (Kanye West India Tour)",
  description:
    "If I don't go, I become corporate. This is not a want. This is a character development arc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebas.variable} ${spaceGrotesk.variable} font-sans antialiased bg-stone-950 text-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
