import Head from "next/head";
import { faker } from "@faker-js/faker";
import FAQs from "@/Components/Functional/FAQ";
import { getKnowledgeBankEntries } from "@/data/fetchers/GetKnowledgeBankEntries";
import Hero from "@/Components/Functional/Hero";

export default function Home({ time, parts, knowledge_bank }: any) {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <div>
        <Hero />
        <FAQs data={knowledge_bank} />
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
