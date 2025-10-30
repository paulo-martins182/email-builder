import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/custom/header";
import MainProvider from "@/providers/main-provider";

const getRedHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mailtool",
  description: "tools to generate your email template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${getRedHatDisplay.className} antialiased`}>
          <MainProvider>
            <Header />
            {children}
          </MainProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
