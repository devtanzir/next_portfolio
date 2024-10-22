"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "@/app/about/_components/li-icon";

const Boxes = ({
  right = false,
  children,
}: {
  right?: boolean;
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  return (
    <>
      {right ? (
        <div
          ref={ref}
          className="flex justify-between w-full sm:w-[90%] max-w-[1200px] relative z-20"
        >
          <LiIcon
            reference={ref}
            className="!left-[50%] translate-x-[-31px] sm:!left-0 sm:translate-x-[-52px] xs:hidden"
          />
          <motion.div
            className="w-[45%] sm:w-full ml-auto"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      ) : (
        <div
          ref={ref}
          className="flex justify-between w-full sm:w-[90%] max-w-[1200px] relative z-20 "
        >
          <LiIcon
            reference={ref}
            className="!left-[50%] translate-x-[-31px] sm:!left-0 sm:translate-x-[-52px] xs:hidden"
          />
          <motion.div
            className="w-[45%] sm:w-full mr-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Boxes;
