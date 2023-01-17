import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

export const List = styled.div`
  flex: 1.2;
  margin: 1rem 2rem;
  min-width: 380px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 1.2rem;
`;
export const Preview = styled.div`
  flex: 1;
  margin: 1rem 2rem;
  min-width: 380px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px 0px;
  grid-template-rows: min-content min-content 1fr 3rem;
  flex-direction: column;
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
  animation: fadeInFAQ 0.3s ease-in-out;
  margin: 0px 0px 0.25rem 0px;
`;
export const Description = styled.div`
  color: ${(props) => props.theme.colors.gray};
  animation: fadeInFAQ 0.3s ease-in-out;
`;

export const ThumbWrapper = styled.div`
  max-width: 400px;
  justify-self: center;
  align-self: center;
  display: grid;
  place-items: center;
  height: 100%;
  animation: fadeInFAQ 0.3s ease-in-out;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) =>
    props.selected ? props.theme.colors.blackFont : props.theme.colors.gray};
  :hover {
    color: ${(props) => props.theme.colors.blackFont};
  }
`;
