import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/settings/Sidebar";

export const metadata: Metadata = {
  title: "Adxens - Settings",
  description: "Manage your account, preferences, and security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
