import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 0.8fr 1fr;
  grid-auto-rows: 3.25rem;
  padding: 1rem;
  gap: 20px 4%;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const Question = styled.div<{ active: boolean; desktopActive: boolean }>`
  grid-column: 1 / 1;
  all: unset;
  padding: 0.75rem 1rem;
  cursor: pointer;
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 1fr min-content;
  background-color: ${(props) => props.theme.colors.white};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${(props) =>
    props.desktopActive
      ? props.theme.colors.blackFont
      : props.theme.colors.gray};
  font-weight: 500;

  :hover {
    color: ${(props) => props.theme.colors.blackFont};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 18px 0px;
    color: ${(props) =>
      props.active ? props.theme.colors.blackFont : props.theme.colors.gray};
  }
`;

export const QuestionLabel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`;

export const Arrow = styled.div<{ active: boolean }>`
  transition: transform 0.2s ease-in-out;
  width: 16px;
  display: grid;
  place-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    transform: ${(props) => (props.active ? `rotate(90deg)` : `rotate(0deg)`)};
  }
`;

export const AnswerLabel = styled.h3`
  font-weight: ${(props) => props.theme.fonts.fontWeights.semibold};
  font-size: 1rem;
  margin: 0px 0px 0.25rem 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const AnswerDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  line-height: 1.7rem;
  margin: 0.5rem 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 0px;
  }
`;

export const ThumbWrapper = styled.div`
  max-width: 500px;
  justify-self: center;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

export const Thumbnail = styled.img`
  object-fit: scale-down;
  max-width: 500px;
  width: 100%;
`;

export const Answer = styled.div<{
  mobileActive?: boolean;
  desktopActive: boolean;
}>`
  display: ${(props) => (!props.desktopActive ? "none" : "grid")};
  margin: 0px 1rem;
  flex-direction: column;
  grid-area: 1 / 2 / 11 / 2;
  grid-template-rows: min-content min-content 1fr max-content;
  overflow: hidden;
  background-color: #f9f9f9;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-area: unset;
    display: ${(props) => (!props.mobileActive ? "none" : "grid")};
    grid-auto-rows: min-content;
    margin: 20px 0px;
  }
`;
