import AnimatedText from "@/components/shared/animate-text";
import Layout from "@/components/shared/layout";
import { ProjectsData } from "@/constants/projects";
import React from "react";
import ScrollComponent from "./_components/information";
import Links from "./_components/links";

interface ShopBDCaseStudyProps {
  params: {
    caseStudy: string;
  };
}

const ShopBDCaseStudy: React.FC<ShopBDCaseStudyProps> = ({ params }) => {
  const data = ProjectsData.find((item) => item.slug === params.caseStudy);
  if (!data) return;
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={data.title}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Links links={data.links} duration={data.duration} />
          <ScrollComponent project={data} />
        </Layout>
      </main>
    </>
  );
};

export default ShopBDCaseStudy;
