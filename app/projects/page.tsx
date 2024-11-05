import AnimatedText from "@/components/shared/animate-text";
import Layout from "@/components/shared/layout";
import React from "react";
import Project from "./_components/project";
import { ProjectsData } from "@/constants/projects";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects | Tanzir Ibne Ali',
}

const Projects = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {ProjectsData.map((project) => (
              <div key={project.id} className="col-span-6 sm:col-span-12">
                <Project
                  id={project.slug}
                  title={project.title}
                  img={project.thumbnail}
                  link={project.preview}
                  type={project.type}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
