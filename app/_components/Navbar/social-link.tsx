"use client";
import { socialLinks } from "@/constants/navbar";
import { motion } from "framer-motion";
import ThemeButton from "./theme-btn";
import React from "react";

interface SocialProps {
  mobile?: boolean;
}
const SocialLink: React.FC<SocialProps> = ({ mobile }) => {
  return (
    <nav className={`flex gap-5 items-center ${mobile ? "mt-2" : ""}`}>
      {socialLinks.map((item) => (
        <motion.a
          key={item.id}
          href={item.url}
          target="_blank"
          className={`text-2xl ${
            !mobile ? "dark:text-light" : "text-light dark:text-dark"
          } `}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.a>
      ))}
      <ThemeButton />
    </nav>
  );
};

export default SocialLink;
