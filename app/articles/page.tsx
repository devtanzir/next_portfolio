import Layout from "@/components/shared/layout";
import AnimatedText from "@/components/shared/animate-text";
import Article from "./_components/article";
import FeaturedArticle from "./_components/featured";
import { allBlog, featureBlog } from "@/constants/articles";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Articles | Tanzir Ibne Ali',
}

const Articles = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden ">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            {featureBlog.map((item) => (
              <FeaturedArticle
                key={item.id}
                title={item.title}
                img={item.img}
                time={item.time}
                summary={item.summary}
                link={item.link}
              />
            ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 text-dark dark:text-light">
            All Articles
          </h2>
          <ul>
            {allBlog.map((item) => (
              <Article
                key={item.id}
                title={item.title}
                img={item.img}
                date={item.date}
                link={item.link}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
