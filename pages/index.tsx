import Head from "next/head";
import { faker } from "@faker-js/faker";
import FAQs from "@/Components/Functional/FAQ";
import { getKnowledgeBankEntries } from "@/data/fetchers/GetKnowledgeBankEntries";
import DragyAdvertisement from "@/Components/Functional/DragyAdvertisement";
import RecommendedPart from "@/Components/Functional/RecommendedPart";
import Row from "@/Components/Styled/Row"

export default function Home({ time, parts, knowledge_bank }: any) {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <FAQs data={knowledge_bank} />
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
      parts: [createReccomendedPart(), createReccomendedPart(), createReccomendedPart()],
      knowledge_bank: knowledge_bank,
    },
    revalidate: 100,
  };
}
