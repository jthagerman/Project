import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 2rem);
  display: grid;
  padding: 1rem;
  grid-template-columns: 0.8fr 1fr;
  gap: 0px 5%;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const List = styled.div`
  min-width: 370px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1.2rem;
`;
export const Preview = styled.div`
  min-width: 360px;
  flex-grow: 2;
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  gap: 5px 0px;
  grid-template-rows: min-content min-content 1fr 3rem;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }

  @keyframes fadeInFAQ {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Title = styled.div`
  font-weight: ${(props) => props.theme.fonts.fontWeights.semibold};
  font-size: 1.5rem;

  margin: 0px 0px 0.25rem 0px;
`;
export const Description = styled.div`
  color: ${(props) => props.theme.colors.gray};
`;

export const ThumbWrapper = styled.div`
  max-width: 400px;
  justify-self: center;
  align-self: center;
  display: grid;
  place-items: center;
`;
export const Thumbnail = styled.img`
  min-width: 0px;
  max-width: 100%;
  margin-top: 1.25rem;
`;

export const Item = styled.button<{ selected: boolean }>`
  all: unset;
  max-width: calc(525px - 1.5rem);
  padding: 0.75rem 1rem;
  cursor: pointer;
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 1fr min-content;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) =>
    props.selected ? props.theme.colors.blackFont : props.theme.colors.gray};
  :hover {
    color: ${(props) => props.theme.colors.blackFont};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: unset;
    flex: 1;
  }
`;

export const Hidden = styled.div<{ hidden?: boolean }>`
  height: ${(props) => (props.hidden ? "0px" : "auto")};
  margin: 1rem;
  flex-direction: column;

  @media (min-width: ${(props) => `${props.theme.breakpoints.tablet}`}) {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 5s ease-in;
`;

export const Arrow = styled.div<{ selected: boolean }>`
  transition: transform 0.2s ease-in-out;
  width: 16px;
  display: grid;
  place-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    transform: ${(props) =>
      props.selected ? `rotate(90deg)` : `rotate(0deg)`};
  }
`;
