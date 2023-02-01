import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr max-content min-content;
  height: 620px;
  width: 370px;
  background-color: ${(props) => props.theme.colors.whiteBackgroundContrast};
  box-sizing: border-box;
  border: 2px solid #ebebeb;
  padding: 18px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: unset;
    height: unset;
    grid-template-columns: minmax(100px, 200px) 4fr;
    gap: 0px 1rem;

    > div:not(:first-child) {
      grid-column: 2;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    grid-template-columns: 1fr;
    > div:not(:first-child) {
      grid-column: 1;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 214px;
  height: 214px;
  align-self: center;
  justify-self: center;
  margin: 11px 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-row-start: 1;
    grid-row-end: 5;
    max-width: 100%;
  }
`;

export const Name = styled.div`
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.fonts.fontWeights.bold};
`;

export const Description = styled.div`
  font-family: ${(props) => props.theme.fonts.names.poppins};
  color: ${(props) => props.theme.colors.gray};
  line-height: 170.5%;
  margin: 0px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
  max-height: 160px;
`;
export const Price = styled.div`
  font-size: 1.5rem;
  margin: 21px 0px;
  font-weight: ${(props) => props.theme.fonts.fontWeights.bold};
`;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 12px;
`;
