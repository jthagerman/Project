import { useState } from "react";
import { useTheme } from "styled-components";
import { UITheme } from "@/types";
import styled from "styled-components";
import rightArrow from "@/public/images/icons/rightChevron.svg";
import Icon from "@/Components/Functional/Icon";
import Button from "@/Components/Functional/Button";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  thumbnail?: string;
  blogPost?: string;
}

interface FAQProps {
  faqs: FAQ[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(380px, 525px) 1fr;
  grid-auto-rows: 56px;
  grid-gap: 20px;
  height: calc((56px + 20px) * 10);
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    grid-template-columns: max-content;
    height: auto;
    grid-auto-rows: unset;
    width: 100%;
  }
`;

const Question = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 56px;
  color: ${(props) => props.theme.gray};
  padding: 0px 15px 0px 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background-color: #f8f8f8;
  }
`;

const QuestionLabel = styled.span<{ active: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.blackFont : props.theme.gray};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  padding: 15px 20px 15px 30px;
`;

const AnswerPlaceholder = styled.div<{ active: boolean }>`
  width: 400px;

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    width: 100%;
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

const Answer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  opacity: ${(props) => (props.active ? 1 : 0)};

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    width: 100vw;
    position: unset;
    top: unset;
    right: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  }
`;

const AnswerLabel = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 170.5%;
  /* or 27px */

  letter-spacing: -0.005em;
`;

const AnswerDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170.5%;
  /* or 27px */

  letter-spacing: -0.005em;

  color: #000000;

  opacity: 0.6;
`;

function FunctionalQuestion({
  question,
  active,
  onClick,
}: {
  question: string;
  active: boolean;
  onClick: () => void;
}) {
  const theme = useTheme() as UITheme;

  return (
    <Question onClick={onClick}>
      <QuestionLabel active={active}>{question}</QuestionLabel>
      <Icon
        src={rightArrow.src}
        height="16px"
        width="8px"
        color={active ? theme.colors.blackFont : theme.colors.gray}
      />
    </Question>
  );
}

export default function FAQs({ faqs }: FAQProps) {
  const [selected, setSelected] = useState(faqs[0]?._id);
  return (
    <Container>
      {faqs.map((faq: FAQ) => {
        const active = selected === faq._id;
        return (
          <>
            <FunctionalQuestion
              key={faq._id + faq.question}
              onClick={() => setSelected(faq._id)}
              question={faq.question}
              active={active}
            />
            <AnswerPlaceholder key={faq._id + "description"} active={active}>
              <Answer active={active}>
                <AnswerLabel>{faq.question}</AnswerLabel>
                <AnswerDescription>{faq.answer}</AnswerDescription>
                {faq.thumbnail && <img src={faq.thumbnail} width={"80%"} />}
                <Button marginTop="1.25rem">Read More</Button>
              </Answer>
            </AnswerPlaceholder>
          </>
        );
      })}
    </Container>
  );
}
