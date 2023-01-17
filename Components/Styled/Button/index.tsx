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
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  margin?: string;
  hoverColor?: string;
  hoverFontColor?: string;
}>`
  all: unset;
  outline: none;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  background-color: ${(props) =>
    props.blur ? hexToRGBA(props.bgColor, 0.25) : props.bgColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`};
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`};
  ${(props) => props.margin && `margin: ${props.margin};`};
  ${(props) => props.blur && `backdrop-filter: blur(10px);`}

  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 0px 10px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;

  :hover {
    ${(props) => {
      if (props.hoverColor || props.hoverFontColor) {
        return `
        background-color: ${
          props?.hoverColor ? props.hoverColor : props.bgColor
        };
        color: ${props?.hoverFontColor ? props.hoverFontColor : props.color};
        `;
      } else return "opacity: 0.8;";
    }};

    div:nth-of-type(1) {
      background-color: ${(props) =>
        props.hoverFontColor ? props.hoverFontColor : props.color};
    }
  }
`;

export const Text = styled.span``;
