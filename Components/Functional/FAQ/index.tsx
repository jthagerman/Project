import {
  Container,
  List,
  Preview,
  Title,
  Description,
  Thumbnail,
  ThumbWrapper,
  Item,
  Hidden,
  ItemWrapper,
  Arrow,
} from "@/Components/Styled/Faq";
import { useState } from "react";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import rightArrow from "@/public/images/icons/rightChevron.svg";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";

interface faqItem {
  _id: string;
  question: string;
  answer: string;
  thumbnail: string;
  blogPost: string;
  interest: number;
  _v: number;
}

export default function FAQs({ data }: { data: faqItem[] }) {
  const theme = useTheme() as UITheme;
  const [mostRecentIndex, setMostRecentIndex] = useState<number>(() => 0);
  const [selected, setSelected] = useState<any>(() => {
    return Array.isArray(data)
      ? [data[0]]
      : [{ id_: "", question: "", answer: "", thumbnail: "", _id: "" }];
  });

  const PreviewBody = ({ el }: { el: faqItem }) => {
    return (
      <>
        <Title>{el?.question}</Title>
        <Description>{el?.answer}</Description>
        <ThumbWrapper>
          <Thumbnail src={el?.thumbnail} alt={el?.question} />
        </ThumbWrapper>
        <Button marginTop="1.25rem">Read More</Button>
      </>
    );
  };

  if (!Array.isArray(data)) return null;
  return (
    <Container>
      <List>
        {data.map((el: faqItem, index: number) => {
          return (
            <ItemWrapper key={el._id}>
              <Item
                selected={selected.includes(el)}
                onClick={() => {
                  setMostRecentIndex(index);
                  setSelected((prev: faqItem[]) => {
                    if (selected.includes(el)) {
                      const index = selected.indexOf(el);
                      if (index > -1) {
                        return [
                          ...prev.slice(0, index),
                          ...prev.slice(index + 1),
                        ];
                      }
                    } else return [...prev, el];
                  });
                }}
              >
                <span>{el.question}</span>
                <Arrow selected={selected.includes(el)}>
                  <Icon
                    src={rightArrow.src}
                    height="16px"
                    width="8px"
                    color={
                      selected.includes(el)
                        ? theme.colors.blackFont
                        : theme.colors.gray
                    }
                  />
                </Arrow>
              </Item>
              <Hidden hidden={!selected.includes(el)}>
                <PreviewBody el={el} />
              </Hidden>
            </ItemWrapper>
          );
        })}
      </List>
      <Preview key={selected?.question}>
        <PreviewBody el={data[mostRecentIndex]} />
      </Preview>
    </Container>
  );
}
