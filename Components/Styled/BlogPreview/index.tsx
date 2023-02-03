import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 0px 1rem;
  grid-template-columns: minmax(150px, 700px) 1fr;
  grid-auto-flow: column;
  grid-template-rows: auto auto auto;
  margin: 1rem;
`;

export const Thumbnail = styled.img`
  grid-row-end: span 3;
  align-self: center;
  justify-self: end;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100px;
  }
`;
export const Title = styled.a`
  margin: 0px;
  font-size: 1.5rem;
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
export const Subtitle = styled.p`
  font-weight: 300;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const Date = styled.time`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.gray};
`;
