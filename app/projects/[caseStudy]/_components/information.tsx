"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Boxes from "./boxes";
import { Des, Title, Wrapper } from "@/components/ui/case-study";
import ListItem, { ListDiv } from "./list-item";

interface InformationProps {
  project: any;
}
export interface ProjectInfo {
  id: string;
  title: string;
  content?: string;
}
const ScrollComponent: React.FC<InformationProps> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  return (
    <>
      <div ref={ref} className="mx-auto relative w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[50.3%] top-0 w-[4px] h-full bg-dark dark:bg-light origin-top 
          md:w-[2px] sm:left-[20px]"
        />
        <div className="flex flex-col items-center p-5 relative sm:gap-10">
          {project?.caseStudy?.map((caseStudy: any, index: number) => (
            <Boxes right={index % 2 !== 0}>
              <Wrapper>
                <Title>{caseStudy?.name}</Title>
                {caseStudy.content && <Des>{caseStudy.content}</Des>}
                {caseStudy.type === "section" && (
                  <ListDiv data={caseStudy.sections} />
                )}
                {caseStudy.type === "list" && (
                  <ListItem data={caseStudy.lists} />
                )}
                {caseStudy.description && <Des>{caseStudy.description}</Des>}
              </Wrapper>
            </Boxes>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollComponent;
