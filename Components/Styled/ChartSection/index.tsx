import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 1rem 0px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const Chart = styled.div`
  height: 350px;
  width: 100%;
`;

export const Tiles = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem;
`;
export const Tile = styled.div`
  margin: auto;
  display: grid;
  justify-items: center;
  gap: 0.1rem 0px;
  max-width: 120px;
  padding: 1rem 0.5rem;
  background-color: rgba(248, 248, 248, 1);
  flex: 1;
`;
export const Key = styled.div`
  font-weight: ${(props) => props.theme.fonts.fontWeights.thin};
  font-size: 0.975rem;
  color: rgba(0, 0, 0, 0.6);
`;
export const Value = styled.div`
  font-weight: ${(props) => props.theme.fonts.fontWeights.bold};
  font-size: ${(props) => props.theme.fonts.fontSizes.large};
`;
