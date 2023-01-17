import styled from "styled-components";

export const Container = styled.section<{ src: string; scribble: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src});
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1440px;
  background-position: center;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 700px;
  }

  ::after {
    content: "";
    left: 0px;
    right: -1px;
    top: 0px;
    bottom: -20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.scribble});
    background-position: center bottom;
    position: absolute;
    display: inline-block;
    pointer-events: none;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  max-width: 777px;
  font-size: 90px;
  text-align: center;
  line-height: 1.2;
  font-family: ${(props) => props.theme.fonts.names.outfit};
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 80px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 60px;
  }
`;
export const SubHeading = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fonts.fontSizes.emphasized};
`;
export const Buttons = styled.div`
  width: 100%;
  margin-top: 50px;
  max-width: 400px;
  align-self: center;
  justify-self: center;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px 20px;
  margin: 20px 0px 15px 0px;
`;
export const Wrapper = styled.div`
  margin-top: 189px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 189px 1rem 0px 1rem;
`;
