import styled from "styled-components";

export const Container = styled.section<{ src: string; scribble: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src});
  height: 40vw;
  min-height: 800px;
  max-height: 2560px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  color: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    height: 500px;
    min-height: unset;
    max-height: unset;
  }

  ::after {
    content: "";
    left: auto;
    right: auto;
    bottom: 0px;
    width: 100%;
    min-width: 300px;
    height: 180px;
    background-size: 120% 400px;
    background-repeat: no-repeat;
    background-position: center top;
    position: absolute;
    pointer-events: none;
    overflow: hidden;
    background-image: url(${(props) => props.scribble});

    @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
      bottom: -1px;
    }
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
  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    font-size: 40px;
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

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    margin: 0;
    justify-content: center;
    height: 100%;
    padding: 20px;
  }
`;
