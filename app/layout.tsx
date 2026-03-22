import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/common/Provider";
import NavbarMain from "@/components/custom/Navbar/NavbarMain";
import NavbarBottom from "@/components/custom/Navbar/NavbarBottom";
import Footer from "@/components/custom/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bigboss Collection",
  description: "A premium clothing collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30 selection:text-primary max-w-[2000px] mx-auto bg-background text-foreground`}
      >
        <Provider>
          <div className="flex flex-col h-[100dvh] overflow-hidden">
            <NavbarMain />
            <div className="flex-1 overflow-y-auto scroll-smooth">
              {children}
              <Footer />
            </div>
            <NavbarBottom />
          </div>
        </Provider>
      </body>
    </html>
  );
}
