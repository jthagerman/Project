import styled from "styled-components";

export const Container = styled.button<{
  fontSize: string;
  bgColor: string;
  color: string;
  height: string;
  fontWeight: string;
  width: string;
  padding: string;
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
  diplay: flex;
  flex-direction: row;
  gap: 0px 10px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

export const Text = styled.span``;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px 0.5rem;
`;
