import {
  Container,
  List,
  Preview,
  Title,
  Description,
  Thumbnail,
  ThumbWrapper,
  Item,
} from "@/Components/Styled/Faq";
import { useState } from "react";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import rightArrow from "@/public/images/icons/rightChevron.svg";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";

export default function FAQs({
  data,
}: {
  data: {
    _id: string;
    question: string;
    answer: string;
    thumbnail: string;
    blogPost: string;
    interest: number;
    _v: number;
  }[];
}) {
  const theme = useTheme() as UITheme;
  const [selected, setSelected] = useState(() => {
    return Array.isArray(data)
      ? data[0]
      : { id_: "", question: "", answer: "", thumbail: "", thumbnail: "" };
  });

  if (!Array.isArray(data)) return null;
  return (
    <Container>
      <List>
        {data.map((el) => {
          return (
            <Item
              key={el._id}
              selected={selected?.question === el?.question}
              onClick={() => setSelected(el)}
            >
              <span>{el.question}</span>

              <Icon
                src={rightArrow.src}
                height="16px"
                width="8px"
                color={
                  selected?.question === el?.question
                    ? theme.colors.blackFont
                    : theme.colors.gray
                }
              />
            </Item>
          );
        })}
      </List>
      <Preview key={selected.question}>
        <Title>{selected.question}</Title>
        <Description>{selected.answer}</Description>
        <ThumbWrapper>
          <Thumbnail src={selected.thumbnail} alt={selected.question} />
        </ThumbWrapper>
        <Button>Read More</Button>
      </Preview>
    </Container>
  );
}
