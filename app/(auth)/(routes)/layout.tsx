import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Fuse - Sign Up",
  description: "Sign Up Form",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
          {children}
        </div>
      </body>
    </html>
  );
}
