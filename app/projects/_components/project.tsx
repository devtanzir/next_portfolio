import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
interface ProjectProps {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
}
const Project: React.FC<ProjectProps> = ({
  title,
  type,
  img,
  link,
  github,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 duration-300"
          priority
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl text-dark dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <Link
              href={link}
              target="_blank"
              className="ml-4 text-lg font-semibold underline md:text-base text-dark dark:text-light"
            >
              Visit
            </Link>
            <Link
              href={github}
              target="_blank"
              className="text-4xl md:w-6 dark:text-light"
            >
              <FaGithub />
            </Link>
          </div>
          <Link
            href={"/"}
            className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
          >
            Case Study
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
