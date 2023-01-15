import Head from "next/head";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import tuning from "public/images/icons/tuning.svg";

export default function Home({ time }: any) {
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
