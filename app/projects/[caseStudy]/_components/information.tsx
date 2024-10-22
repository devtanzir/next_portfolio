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
          <Boxes>
            <Wrapper>
              <Title>{project.box1.name}</Title>
              <Des>{project.box1.information}</Des>
              <ListDiv data={project.box1.moreInfo} />
            </Wrapper>
          </Boxes>
          <Boxes right>
            <Wrapper>
              <Title>{project.box2.name}</Title>
              <Des>{project.box2.information}:</Des>
              <ListItem data={project.box2.lists} />
              <Des>{project.box2.description}</Des>
            </Wrapper>
          </Boxes>
          <Boxes>
            <Wrapper>
              <Title>{project.box3.name}</Title>
              <Des>{project.box3.information}</Des>
              <ListDiv data={project.box3.moreInfo} />
            </Wrapper>
          </Boxes>
          <Boxes right>
            <Wrapper>
              <Title>{project.box4.name}</Title>
              <Des>{project.box4.information}</Des>
            </Wrapper>
          </Boxes>
          <Boxes>
            <Wrapper>
              <Title>{project.box5.name}</Title>
              <Des>{project.box5.information}</Des>
              <ListDiv data={project.box5.moreInfo} />
            </Wrapper>
          </Boxes>
          <Boxes right>
            <Wrapper>
              <Title>{project.box6.name}</Title>
              <Des>{project.box6.information}</Des>
              <ListItem data={project.box6.lists} />
            </Wrapper>
          </Boxes>
          <Boxes>
            <Wrapper>
              <Title>{project.box7.name}</Title>
              <Des>{project.box7.information}</Des>
            </Wrapper>
          </Boxes>
          <Boxes right>
            <Wrapper>
              <Title>{project.box8.name}</Title>
              <Des>{project.box8.information}</Des>
              <ListItem data={project.box8.lists} />
            </Wrapper>
          </Boxes>
          <Boxes>
            <Wrapper>
              <Title>{project.box9.name}</Title>
              <Des>{project.box9.information}</Des>
              <ListItem data={project.box9.lists} />
            </Wrapper>
          </Boxes>
          <Boxes right>
            <Wrapper>
              <Title>{project.box10.name}</Title>
              <ListDiv data={project.box10.lists} />
            </Wrapper>
          </Boxes>
          <Boxes>
            <Wrapper>
              <Title>{project.box11.name}</Title>
              <Des>{project.box11.information}</Des>
              <Des>{project.box11.information1}</Des>
              <ListItem data={project.box11.lists} />
              <Des>{project.box11.information2}</Des>
              <ListItem data={project.box11.lists2} />
            </Wrapper>
          </Boxes>
        </div>
      </div>
    </>
  );
};

export default ScrollComponent;
