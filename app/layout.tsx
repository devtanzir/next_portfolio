import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google"
import Navbar from "./_components/Navbar/navbar";
import Footer from "./_components/Footer/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});
export const metadata: Metadata = {
  title: "Tanzir Ibne Ali",
  description: "proficient frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-light  w-full min-h-screen`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
