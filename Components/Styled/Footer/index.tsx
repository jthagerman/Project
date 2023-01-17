import styled from "styled-components";
import Link from "next/link";

export const Container = styled.footer<{ src: string }>`
  max-width: 1440px;
  position: relative;
  background-color: ${(props) => props.theme.colors.blackBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.grayFont};
  font-family: ${(props) => props.theme.fonts.names.poppins};
  padding: 100px 1rem 3rem 1rem;
  margin: 50px 0px 0px 0px;
  overflow: hidden;

  ::after {
    content: "";
    left: 0px;
    right: 0px;
    top: 0px;
    height: 200px;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.src});
    content: "";
    position: absolute;
    display: inline-block;
  }

  > div:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.grayFont};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 180px 1rem 3rem 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 50px 1rem 3rem 1rem;
  }
`;

export const Row = styled.div<{ align: string }>`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: ${(props) => props.align};
  padding: 4rem 0rem;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Anchor = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;

  :hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 130px;
  height: 51px;
  margin: 1rem 0px 0px 0px;
  user-drag: none;
`;

export const Disclaimer = styled.p`
  max-width: 285px;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0.25rem 0px;
`;

export const Column = styled.div<{ flex?: string }>`
  list-style-type: none;
  gap: 0.5rem 0px;
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : `1`)};

  h1 {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.names.outfit};
    margin: 0px;
  }
  h2 {
    font-weight: ${(props) => props.theme.fonts.fontWeights.regular};
    font-size: ${(props) => props.theme.fonts.fontSizes.regular};
    max-width: 470px;
    margin: 0.75rem 1rem 0rem 0px;
    padding: 0px 0px 1rem 0px;
    min-width: 300px;
    line-height: 1.5rem;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 0.8rem 0px;
  list-style-type: none;
  width: max-content;
  align-self: flex-end;
  justify-self: flex-end;
  align-items: end;
  min-width: 200px;

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    padding: 0px;
  }
`;

export const ColumnName = styled.li`
  font-size: 1.5rem;
  margin: 0px;
  color: ${(props) => props.theme.colors.white};
`;

export const Input = styled.input`
  all: unset;
  margin: 0px;
  padding 1rem .5rem;
  font-size: ${(props) => props.theme.fonts.fontSizes.regular};
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  width: 366px;
  height: max-content;
  padding: 0px 5px 0px 5px;
  box-sizing: border-box;
  margin: 0px 0px 1rem 0px;
  height: min-content;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.colors.grayFont};
`;
