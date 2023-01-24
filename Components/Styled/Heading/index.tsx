import styled from "styled-components";

export const Container = styled.section<{ margin: string }>`
  text-align: center;
  margin: ${(props) => props.margin};
`;
export const Heading = styled.h1`
  margin: auto auto 0.25rem auto;
  font-family: ${(props) => props.theme.fonts.names.outfit};
  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    font-size: 2rem;
  }
`;
export const Subheading = styled.h2`
  margin: auto;
  color: ${(props) => props.theme.colors.gray};
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: -0.005em;
`;
