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
  description: "Create an account or log in to DATEHOOD - A simple, fun & creative way to connect with friends and communities with simple tweets",
  generator: 'Next.js',
  authors: [
    {
      name: 'mohamed ali hosni',
    }
  ],
  applicationName: 'Datehood',
  keywords: ['Social', 'Social media', 'connect with people', 'tweets', 'threads', 'networking', 'connect', 'friends', 'community'],
  openGraph: {
    title: 'Datehood',
    description: 'Create an account or log in to DATEHOOD - A simple, fun & creative way to connect with friends and communities with simple tweets',
    images: [
      {
        url: '/ogimg.png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'mohamedalihosni',
    title: 'Datehood',
    description: 'Create an account or log in to DATEHOOD - A simple, fun & creative way to connect with friends and communities with simple tweets',
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
