import styled from "styled-components";
import Link from "next/link";

export const Container = styled.footer<{ src: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.colors.grayFont};
  font-family: ${(props) => props.theme.fonts.names.poppins};
  overflow: show;
  background-color: ${(props) => props.theme.colors.blackBackground};

  ::after {
    content: "";
    left: 0px;
    right: -1px;
    top: -1px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.src});
    background-position: center top;
    position: absolute;
    display: inline-block;
    pointer-events: none;
  }

  > div:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.grayFont};
  }
`;

export const Row = styled.div<{ align?: string }>`
  width: 100%;
  max-width: 970px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: ${(props) => props.align ?? "flex-start"};
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
    line-height: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    align-items: center;
    justify-content: center;
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
  padding: 1rem 0.5rem;
  font-size: ${(props) => props.theme.fonts.fontSizes.regular};
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  width: 366px;
  border: 2px solid ${(props) => props.theme.colors.grayFont};

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 100vw;
  margin: 100px 1rem 3rem 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    margin: 180px 1rem 3rem 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin: 50px 1rem 3rem 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

export const ContentRow = styled(Row)`
  align-items: center;
  justify-content: center;
`;
