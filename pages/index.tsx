import Head from "next/head";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import tuning from "public/images/icons/tuning.svg";
import RecommendedPart from "@/Components/Functional/RecommendedPart";
import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import FAQs from "@/Components/Functional/FAQ";
import axios from "axios";
import { getKnowledgeBankEntries } from "@/data/fetchers/GetKnowledgeBankEntries";
import DragyAdvertisement from "@/Components/Functional/DragyAdvertisement";
import Footer from "@/Components/Functional/Footer";

export default function Home({ time, parts, knowledge_bank }: any) {

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <div>
        <FAQs data={knowledge_bank} />
        <DragyAdvertisement />
        <RecommendedPart {...parts} />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  console.log("Getting Static Props");

  const knowledge_bank = await getKnowledgeBankEntries(10, 0);

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
      knowledge_bank: knowledge_bank,
    },
    revalidate: 100,
  };
}
