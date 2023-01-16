import Head from "next/head";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import tuning from "public/images/icons/tuning.svg";
import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";

// import { faker } from '@faker-js/faker/locale/de';

export default function Home({ time, parts }: any) {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <div></div>
    </>
  );
}

export function getStaticProps() {
  console.log("Getting Static Props");

  return {
    props: {
      time: new Date().getTime(),
    },
    revalidate: 100,
  };
}
