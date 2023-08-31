import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dwi Naufal Aprialdhi",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth relative">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
