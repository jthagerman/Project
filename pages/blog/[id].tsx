import Head from "next/head";
import { Page, Content, VerticalSpacer } from "@/Components/Styled/Page";
import Footer from "@/Components/Functional/Footer";
import { faker } from "@faker-js/faker";
import BlogAd from "@/Components/Functional/BlogAd";
import Blog from "@/Components/Functional/BlogBody";
import { BlogRow } from "@/Components/Styled/Blog";
import RecommendedPosts from "@/Components/Functional/RecommendedPosts";

//todo move footer and page layout out of the pages and into _app

export default function BlogPage({ blogAd, blog, recommendBlogs }: any) {
  console.log(recommendBlogs);
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Page>
        <Content>
          <BlogRow>
            <Blog {...blog} />
            {blogAd && <BlogAd {...blogAd}></BlogAd>}
          </BlogRow>
          <RecommendedPosts list={recommendBlogs} />
        </Content>
        <Footer />
      </Page>
    </>
  );
}

export async function getServerSideProps() {
  function createBlogAd() {
    return {
      productName: faker.commerce.product(),
      price: faker.commerce.price(100, 200, 2, "$"),
      description: faker.commerce.productDescription(),
      thumbnail: faker.image.technics(320, 270, false),
    };
  }

  const createRecBlogList = () => {
    return new Array(10).fill({
      title: faker.lorem.sentence(),
      subtitle: faker.lorem.lines(3),
      thumbnail: faker.image.food(140, 100),
      date: "Feb 30",
    });
  };

  return {
    props: {
      blogAd: createBlogAd(),
      recommendBlogs: createRecBlogList(),
      blog: {
        title:
          "Why the Google layoffs are about personal ambition and poor leadership",
        subtitle:
          "How did the company that aspired to be so much more come to this?",
        content: "",
      },
    },
  };
}
