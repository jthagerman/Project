import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  border: 2px solid #ebebeb;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(3, auto);
  align-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
`;
export const Header = styled.h1`
  font-size: 2.625rem;
  position: relative;
  line-height: 3.75rem;
  margin: 0px 0px 2rem 0px;
  width: 100%;
`;
export const Description = styled.p`
  max-width: 425px;
  line-height: 1.5rem;
  margin: 0px;
`;

export const ButtonWrapper = styled.div`
  width: 7rem;
  margin: 1.25rem 0px 0px 0px;
  display: none;
`;

export const Image = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 100%;
  background-image: url(${(props) => props.src});
  grid-row: span 2;
  max-height: 300px;
  min-width: 200px;
  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    grid-row: span 1;
  }
`;
