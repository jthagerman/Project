import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  flex: 1;
  padding: 0rem 1rem;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0.75rem 0px;
`;
export const Subtitle = styled.h3`
  font-weight: ${(props) => props.theme.fonts.fontWeights.thin};
  font-style: italic;
`;

export const ReadMore = styled.h4`
  border-top: 1px solid blue;
`;
