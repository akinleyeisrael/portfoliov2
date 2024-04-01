import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocialMediaful } from "./(home)/socialMedias";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akinola Akinleye",
  description:
    "Frontend Developer and Computer Programmer.",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="hidden md:block">
          <SocialMediaful />
        </div>
        <main className={`max-w-6xl mx-auto items-center min-h-screen `}>
          {children}
        </main>
        <style jsx global>{`
          .icon-round {
            border-radius: 50%;
          }
        `}</style>
      </body>
    </html>
  );
}

