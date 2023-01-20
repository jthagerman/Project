import {
  Container,
  AnswerLabel,
  AnswerDescription,
  Thumbnail,
  ThumbWrapper,
  Answer,
  Question,
  Arrow,
  QuestionLabel,
} from "@/Components/Styled/Faq";
import { useState } from "react";
import Button from "@/Components/Functional/Button";
import Icon from "@/Components/Functional/Icon";
import rightArrow from "@/public/images/icons/rightChevron.svg";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";
import { Fragment } from "react";

interface faqItem {
  _id: string;
  question: string;
  answer: string;
  thumbnail: string;
  blogPost: string;
  interest: number;
  _v: number;
}

const FunctionalQuestion = ({
  question,
  onClick,
  mobileActive,
  desktopActive,
}: {
  question: string;
  onClick: () => void;
  desktopActive: boolean;
  mobileActive: boolean;
}) => {
  const theme = useTheme() as UITheme;
  return (
    <Question
      onClick={onClick}
      active={mobileActive}
      desktopActive={desktopActive}
    >
      <QuestionLabel>{question}</QuestionLabel>
      <Arrow active={mobileActive}>
        <Icon
          src={rightArrow.src}
          height="16px"
          width="8px"
          color={theme.colors.gray}
        />
      </Arrow>
    </Question>
  );
};

export default function FAQs({ faqs }: { faqs: faqItem[] }) {
  const [mobileSelected, setMobileSelected] = useState<string[]>([
    faqs[0]?._id,
  ]);
  const [desktopSelected, setDesktopSelected] = useState<string>(
    () => faqs[0]?._id
  );

  if (!Array.isArray(faqs)) return null;
  return (
    <Container>
      {faqs.map((faq: faqItem) => {
        const mobileActive = mobileSelected.includes(faq._id);
        const desktopActive = desktopSelected === faq._id;

        return (
          <Fragment key={faq._id}>
            <FunctionalQuestion
              onClick={() =>
                setMobileSelected((prev: string[]) => {
                  setDesktopSelected(faq._id);
                  const index = mobileSelected.indexOf(faq._id);
                  if (index > -1) {
                    return [...prev.slice(0, index), ...prev.slice(index + 1)];
                  } else return [...prev, faq._id];
                })
              }
              question={faq.question}
              mobileActive={mobileActive}
              desktopActive={desktopActive}
            />
            <Answer mobileActive={mobileActive} desktopActive={desktopActive}>
              <AnswerLabel>{faq?.question}</AnswerLabel>
              <AnswerDescription>{faq?.answer}</AnswerDescription>
              <ThumbWrapper>
                {faq.thumbnail && (
                  <Thumbnail src={faq?.thumbnail} alt={faq?.question} />
                )}
              </ThumbWrapper>
              <Button marginTop="1.25rem">Read More</Button>
            </Answer>
          </Fragment>
        );
      })}
    </Container>
  );
}
