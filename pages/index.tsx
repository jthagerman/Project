import Head from "next/head";
import { faker } from "@faker-js/faker";
import { getKnowledgeBankEntries } from "@/data/fetchers/GetKnowledgeBankEntries";
import Footer from "@/Components/Functional/Footer";
import Hero from "@/Components/Functional/Hero";
import DragyAdvertisement from "@/Components/Functional/DragyAdvertisement";
import { Page, Content, VerticalSpacer } from "@/Components/Styled/Page";
import Heading from "@/Components/Functional/Heading";
import RecommendedPart from "@/Components/Functional/RecommendedPart";
import ChartSection from "@/Components/Functional/ChartSection";
import FAQs from "@/Components/Functional/FAQ";

export default function Home({ time, parts, knowledge_bank }: any) {
  console.log(knowledge_bank);
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <Page>
        <Hero />
        <Content>
          <Heading
            heading="Platform world-record holder"
            subheading="The world’s fastest 3.3T in the 1/4th mile."
          />
          <VerticalSpacer size="60px" />
          <ChartSection />
          <DragyAdvertisement />
          <VerticalSpacer size="20px" />
          <Heading
            heading="Recommnended Parts"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {parts.map((part: any) => (
              <RecommendedPart key={Math.random()} {...part} />
            ))}
          </div>
          <VerticalSpacer size="20px" />
          <Heading
            heading="Knowledge Bank"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <FAQs faqs={knowledge_bank} />
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
      parts: [
        createReccomendedPart(),
        createReccomendedPart(),
        createReccomendedPart(),
      ],
      knowledge_bank: knowledge_bank,
    },
    revalidate: 100,
  };
}
