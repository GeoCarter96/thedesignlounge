import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css"; 


import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";
import ConciergeOrb from "@/components/ConciergeOrb";

const luxurySerif = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-luxury',
});

const cleanSans = Montserrat({
  subsets: ['latin'],
  weight: ['300'], // Light weight is more "premium"
  variable: '--font-sans',
});
 
export const metadata: Metadata = {
  title: "The Design Lounge",
  description: "Curated with Intent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cleanSans.variable} ${luxurySerif.variable} antialiased bg-black`}>
        

        
          <div className="fixed top-0 left-0 w-full z-[100]">
            <Navbar />
          </div>
            

        <Sidebar />
        <ConciergeOrb/>
        
        <main>{children}</main>
      </body>
    </html>
  );
}