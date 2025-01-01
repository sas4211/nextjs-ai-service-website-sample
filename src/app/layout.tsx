import type { Metadata } from "next";
import { Sen } from "next/font/google"
import "./globals.css";


export const metadata: Metadata = {
  title: "AI-SERVICE-WEBSITE",
  description: "Digital Services",
};

const SenFont = Sen({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SenFont.className}>
        {children}
      </body>
    </html>
  );
}
