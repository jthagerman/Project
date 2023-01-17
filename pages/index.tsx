import Head from "next/head";
import { faker } from "@faker-js/faker";
import FAQs from "@/Components/Functional/FAQ";
import { getKnowledgeBankEntries } from "@/data/fetchers/GetKnowledgeBankEntries";
import Hero from "@/Components/Functional/Hero";
import RecommendedPart from "@/Components/Functional/RecommendedPart";
import Footer from "@/Components/Functional/Footer";
import DragyAdvertisement from "@/Components/Functional/DragyAdvertisement";
import { Page, Content, VerticalSpacer } from "@/Components/Styled/Page"


export default function Home({ time, parts, knowledge_bank }: any) {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      
      <Page>
        <Hero />
        <Content>
          <VerticalSpacer size="60px" />
          <DragyAdvertisement />
          <VerticalSpacer size="20px" />
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>{ parts.map((part:any) => <RecommendedPart key={Math.random()} {...part } />)}</div>
          <VerticalSpacer size="20px" />
          <FAQs data={knowledge_bank} />
          <VerticalSpacer size="60px" />
        </Content>
        <Footer />
      </Page>
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
      parts: [createReccomendedPart(),createReccomendedPart(),createReccomendedPart()],
      knowledge_bank: knowledge_bank,
    },
    revalidate: 100,
  };
}
