import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";


import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSideBar/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Datehood",
  description: "A Social Media Platform Clone For Meta Threads Application",
  generator: 'Next.js',
  applicationName: 'Datehood',
  keywords: ['Social', 'Social media', 'connect with people'],
  openGraph: {
    title: 'Datehood',
    description: 'A Social Media Platform Clone For Meta Threads Application',
    images: [
      {
        url: '/ogimg.png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mohamedalihosni',
    title: 'Datehood',
    description: 'A Social Media Platform Clone For Meta Threads Application',
    images: [
      {
        url: '/ogimg.png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
