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
`;

export const Thumbnail = styled.img`
  width: 214px;
  height: 214px;
  align-self: center;
  justify-self: center;
  margin: 11px 0px;
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
