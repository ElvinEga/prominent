import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./custom.css";
import "./style.css";
import { LayoutProvider } from "@/components/layout-provider";

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
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
