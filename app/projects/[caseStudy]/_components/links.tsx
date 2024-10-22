"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
interface ProjectLink {
  id: string;
  title: string;
  url: string;
}
interface LinkProps {
  links: ProjectLink[];
  duration: string;
}

const Links: React.FC<LinkProps> = ({ links, duration }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      <p className="text-lg font-semibold text-dark/75 dark:text-light/75">
        Duration: {duration}
      </p>
      <div className="flex items-center gap-5">
        {links.map((link) => (
          <MotionLink
            key={link.id}
            target="_blank"
            whileTap={{ scale: 0.9 }}
            href={link.url}
            className="text-lg font-semibold underline md:text-base text-dark dark:text-light hover:no-underline capitalize"
          >
            {link.title}
          </MotionLink>
        ))}
      </div>
    </div>
  );
};

export default Links;
