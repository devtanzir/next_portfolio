import HireMe from "@/components/shared/hireme";
import Layout from "@/components/shared/layout";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg md:text-base">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
          <span className="text-dark dark:text-light">
            {new Date().getFullYear()} &copy; All Rights Reserved
          </span>
          <div className="flex items-center lg:py-2 text-dark dark:text-light">
            Build With{" "}
            <span className="text-primary dark:text-primaryDark text-2xl px-1">
              &#9825;
            </span>{" "}
            by&nbsp;
            <Link href="/" className="underline underline-offset-2">
              TanzirIbneAli
            </Link>
          </div>
        </Layout>
        <HireMe />
      </footer>
    </>
  );
};

export default Footer;
