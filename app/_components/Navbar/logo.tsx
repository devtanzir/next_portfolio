"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        href={"/"}
        className="w-16 h-16 bg-dark dark:border-light dark:border text-light flex items-center justify-center rounded-full text-2xl font-bold"
      >
        DT
      </MotionLink>
    </div>
  );
};

export default Logo;
