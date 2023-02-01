import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2rem);
  margin: 1rem;
  gap: 5px 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
