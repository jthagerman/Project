import {
  Container,
  List,
  Preview,
  Title,
  Description,
  Thumbnail,
} from "@/Components/Styled/Faq";
import { useState } from "react";

export default function FAQs({
  data,
}: {
  data: {
    _id: string;
    question: string;
    answer: string;
    thumbail: string;
    blogPost: string;
    interest: number;
    _v: number;
  }[];
}) {
  console.log(data, "k");
  const [selected, setSelected] = useState(() => {
    return Array.isArray(data)
      ? data[0]
      : { id_: "", question: "", answer: "", thumbail: "" };
  });

  if (!Array.isArray(data)) return null;
  return (
    <Container>
      <List></List>
      <Preview>
        <Title>{selected?.question}</Title>

        <Description>{selected?.answer}</Description>
      </Preview>
    </Container>
  );
}
