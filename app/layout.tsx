import type { Metadata } from "next";
import { Heebo, Work_Sans } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--heebo-font",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--work-sans-font",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home Page | Pinnacle Montessori of St. Paul",
  description: "Pinnacle Montessori of St Paul - Wylie, Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heebo.variable} ${workSans.variable}`}>
      <body className="font-heebo text-body-dark antialiased">{children}</body>
    </html>
  );
}
