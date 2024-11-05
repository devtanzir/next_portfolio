import AnimatedText from "@/components/shared/animate-text";
import Layout from "@/components/shared/layout";
import React from "react";
import profile from "@/public/image/tanzir.webp";
import Image from "next/image";
import AnimatedNumbers from "./_components/animated-number";
import Skills from "./_components/skills";
import Education from "./_components/education";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About | Tanzir Ibne Ali',
}

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-dark dark:text-light">
                Hi, I&apos;m Tanzir Ibne Ali, a web developer and Frontend Developer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 1.5 years of experience
                in the field. I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>
              <p className="my-4 font-medium text-dark dark:text-light">
                I believe that Development is about more than just making things
                look Functional. it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium text-dark dark:text-light">
                Whether I&apos;m working on a website or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profile}
                alt="TanzirIbneAli"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-dark dark:text-light">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
