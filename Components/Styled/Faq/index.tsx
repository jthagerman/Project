import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  max-width: 1200px;
  border: 1px solid blue;
  height: 400px;
`;

export const List = styled.div`
  border: 1px solid green;
  flex: 1;
  margin: 1rem;
  min-width: 400px;
`;
export const Preview = styled.div`
  border: 1px solid green;
  flex: 1;
  margin: 1rem;
  min-width: 400px;
`;
export const Title = styled.div`
  font-weight: ${(props) => props.theme.fonts.fontWeights.semibold};
  font-size: 1.5rem;
`;
export const Description = styled.div``;
export const Thumbnail = styled.img``;
