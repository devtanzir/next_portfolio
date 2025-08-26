import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./_components/Navbar/navbar";
import Footer from "./_components/Footer/footer";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
   title: "Tanzir Ibne Ali | Frontend Developer Portfolio",
  description:
    "Explore the professional portfolio of Tanzir Ibne Ali – a proficient Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, responsive, and SEO-friendly web applications.",
  authors: [{ name: "Tanzir Ibne Ali" }],
  keywords: [
    "portfolio",
    "tanziribneali",
    "tanzir",
    "Tanzir Ibne Ali",
    "next.js portfolio",
    "typeScript portfolio", 
    
    // Primary
    "frontend developer portfolio",
    "react developer portfolio",
    "next.js developer portfolio",
    "typescript developer portfolio",
    "modern frontend portfolio website",
    "web developer portfolio",

    // Tech-specific
    "professional next.js portfolio template",
    "best react portfolio website",
    "personal portfolio website frontend developer",
    "next.js seo friendly portfolio",
    "responsive developer portfolio",
    "fullstack developer portfolio website",

    // Location-based (optional)
    "frontend developer in Bangladesh",
    "react developer in Dhaka",
    "next.js developer remote jobs",
    "freelance frontend developer Bangladesh",

    // Personal branding
    "Tanzir Ibne Ali frontend developer",
    "Tanzir Ibne Ali portfolio",
    "Tanzir Ibne Ali react developer",
    "hire Tanzir Ibne Ali developer",
    "portfolio of Tanzir Ibne Ali",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Tanzir Ibne Ali",
    description: "Proficient frontend developer",
    url: "https://tanziribneali.vercel.app/",
    siteName: "Tanzir Ibne Ali Portfolio",
    images: [
      {
        url: "https://tanziribneali.vercel.app/image/website-banner.png",
        width: 1200,
        height: 630,
        alt: "Tanzir Ibne Ali Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzir Ibne Ali",
    description: "Proficient frontend developer",
    images: ["https://tanziribneali.vercel.app/image/website-banner.png"],
    creator: "@TanzirIbneAli",
  },
  alternates: {
    canonical: "https://tanziribneali.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-light dark:bg-dark  w-full min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tanzir Ibne Ali",
              url: "https://tanziribneali.vercel.app/",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/devtanzir",
                "https://www.linkedin.com/in/tanziribneali",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
