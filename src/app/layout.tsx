import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "../../components/main/StarCanvas";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
// Import the inter font with the desired subsets

const inter = Inter({ subsets: ['latin'] });

// ... rest of your code
// Define the metadata object for your Next.js app
export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

// Create the RootLayout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
            <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas />
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body> 
    </html>
  );
}