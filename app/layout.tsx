import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/navigation/NavSide";

export const metadata: Metadata = {
  title: "Smart Sales Sakai",
  description: "Smart Sales",
  icons: {
    icon: "/sakai_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        <div className="p-4 mt-14">{children}</div>
      </body>
    </html>
  );
}
