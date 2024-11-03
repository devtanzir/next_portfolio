"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

const FramerImage = motion(Image);
interface FeaturedProps {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}
const FeaturedArticle: React.FC<FeaturedProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  bg-dark dark:bg-light rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2 xs:text-lg text-dark dark:text-light">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 text-dark dark:text-light line-clamp-2" title={summary
      }>{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};
export default FeaturedArticle;
