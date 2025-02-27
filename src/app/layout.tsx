import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./custom.css";
import "./style.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prominent Australia",
  description: "Prominent Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <div className="page-wrapper relative z-[1] bg-white">
          <main className="main-wrapper relative overflow-hidden">
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-2">
                <div className="min-h-screen bg-white">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
