import Head from "next/head";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import tuning from "public/images/icons/tuning.svg";
import RecommendedPart from "@/Components/Functional/RecommendedPart";
import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import Footer from "@/Components/Functional/Footer";
import DragyAdvertisement from "@/Components/Functional/DragyAdvertisement";

export default function Home({ time, parts }: any) {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <div>
        <DragyAdvertisement />
        <RecommendedPart {...parts} />
        <Footer />
      </div>
    </>
  );
}

export function getStaticProps() {
  console.log("Getting Static Props");

  function createReccomendedPart() {
    return {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 200, 2, "$"),
      description: faker.commerce.productDescription(),
      thumbnail: faker.image.technics(214, 214, false),
    };
  }

  return {
    props: {
      time: new Date().getTime(),
      parts: createReccomendedPart(),
    },
    revalidate: 100,
  };
}
