import styled from "styled-components";

export const StyledEmphasis = styled.em<{
  fontSize?: string;
  color?: string;
  fontStyle?: string;
}>`
  display: inline;
  position: relative;
  color: ${(props) => (props?.color ? props.color : "inherit")};
  font-size: ${(props) => (props?.fontSize ? props.fontSize : "inherit")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "normal")};
`;

export const DecoratedEmphasis = styled(StyledEmphasis)<{
  src?: string;
  top?: string;
  height?: string;
  left?: string;
  right?: string;
}>`
  ::after {
    content: "";
    left: ${(props) => (props.left ? props.left : "0px")};
    right: ${(props) => (props.right ? props.right : "0px")};
    top: ${(props) => (props.top ? props.top : "0px")};
    height: ${(props) => (props.height ? props.height : "0px")};
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.src});
    content: "";
    position: absolute;
    display: inline-block;
  }
`;
