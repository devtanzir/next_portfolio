"use client"
import { socialLinks } from "@/constants/navbar";
import { motion } from "framer-motion";

const SocialLink = () => {
    return (
        <nav className="flex gap-5 items-center">
          {socialLinks.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              className="text-2xl"
              whileHover={{y: -2}}
              whileTap={{scale: 0.9}}
            >
              {item.icon}
            </motion.a>
          ))}
        </nav>
    );
};

export default SocialLink;