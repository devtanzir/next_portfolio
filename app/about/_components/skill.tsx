"use client"
import { motion } from "framer-motion";
import React from "react";
interface SkillProps {
    name: string;
    x: string;
    y: string;
  
}
const Skill:React.FC<SkillProps> = ({name, x, y}) => {

        return (
          <motion.div
            className="flex items-center justify-center rounded-full origin-center font-semibold bg-dark  text-light  py-3 px-6 shadow-dark cursor-pointer absolute
              lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent  xs:text-dark  xs:font-bold
              "
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
          >
            {name}
          </motion.div>
        );
      
};

export default Skill;