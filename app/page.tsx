import Layout from "@/components/shared/layout";
import DevImage from "@/public/image/developer-pic-2.webp";
import Image from "next/image";
import AnimatedText from "@/components/shared/animate-text";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import lightBulb from "@/public/icons/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark dark:text-light w-full">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={DevImage}
                priority
                alt="Tanzir Ibne Ali"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!pb-[6px] !text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled Frontend developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in Frontend development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/pdf/tanziribneali.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                >
                  Resume{" "}
                  <span className="ml-1 text-2xl">
                    <HiExternalLink />
                  </span>
                </Link>
                <Link
                  href="mailto:tanziribneali@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
            <Image src={lightBulb} alt="lightBulb" priority className="w-full h-auto" />
          </div>
        </Layout>
      </main>
    </>
  );
}
