import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/menu";

export const metadata: Metadata = {
  title: "To Do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <main className="pt-16 md:pl-64 min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
