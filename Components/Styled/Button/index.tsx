import styled from "styled-components";
import hexToRGBA from "@/utils/helpers/hexToRGBA";

export const Container = styled.button<{
  fontSize: string;
  bgColor: string;
  color: string;
  height: string;
  fontWeight: string;
  width: string;
  padding: string;
  blur: boolean;
}>`
  all: unset;
  outline: none;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0px 10px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  ${(props) => {
    if (props.blur) {
      return `
      background-color: ${hexToRGBA(props.bgColor, 0.25)};
      backdrop-filter: blur(10px);
      `;
    }
  }}
`;

export const Text = styled.span``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 0.5rem;
`;
