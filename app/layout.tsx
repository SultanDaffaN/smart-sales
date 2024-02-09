import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/navigation/NavSide";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body suppressHydrationWarning={true}>
        <SideNav />
        <div className="p-4 mt-14">{children}</div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ width: "400px" }}
        />
      </body>
    </html>
  );
}
