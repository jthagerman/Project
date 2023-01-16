import styled from "styled-components";

export const Container = styled.div<{
  src: string;
  color: string;
  height: string;
  width: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.src};
  mask-image: url(${(props) => props.src});
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
`;
