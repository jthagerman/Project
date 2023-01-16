import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: row wrap;
  max-width: 1170px;
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
`;
export const Description = styled.p`
  max-width: 425px;
  Line height 1.5rem;
  margin: 0px;
`;

export const ButtonWrapper = styled.div`
  width: 7rem;
  margin: 1.25rem 0px 0px 0px;
`;

export const Section = styled.div`
  flex: 1;
  border: 1px sold pink;
  margin: 50px 1rem;
`;
export const Image = styled.div<{ src: string }>`
  flex: 0.9;
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 300px;
  min-height: 300px;
  background-image: url(${(props) => props.src});
`;

export const EmphasizedOrange = styled.em<{ src: string }>`
  font-style: normal;
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.colors.orange};
  ::after {
    content: "";
    left: 0px;
    right: 0px;
    top: 3.1rem;
    height: 22px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.src});
    content: "";
    position: absolute;
    display: inline-block;
  }
`;
