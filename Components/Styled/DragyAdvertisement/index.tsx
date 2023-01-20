import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  max-width: min(1170px, 100vw);
  background-color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  border: 2px solid #ebebeb;
  justify-content: center;
  align-items: center;
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

export const Section = styled.div`
  flex: 1;
  margin: 50px 1rem;
`;
export const Image = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-image: url(${(props) => props.src});
`;
