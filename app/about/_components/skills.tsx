"use client";
import { motion } from "framer-motion";
import Skill from "./skill";
import { skills } from "@/constants/about";
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 text-dark dark:text-light">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark rounded-full lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLight lg:dark:bg-circularDark md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark dark:shadow-light cursor-pointer absolute lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.id} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
