import styled from "styled-components";

export const Container = styled.aside`
  width: calc(350px - 2rem);
  padding: 1rem;
  height: 600px;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 160px;
    padding: 0.5rem;
    width: calc(100% - 1rem);
    z-index: 10;
    display: grid;
    grid-template-columns: minmax(1fr 200px) 2fr;
    grid-template-rows: min-content 1fr min-content;
    gap: 5px 1rem;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  }
`;

export const Name = styled.h2`
  margin: 0px 0px 1rem 0px;
  font-size: 38px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 22px;
    grid-column: 2;
    grid-row: 1;
    margin: 0px;
  }
`;

export const Description = styled.p`
  font-style: italic;
  font-size: 0.875rem;
  margin: 1rem 0px;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: 2;
    grid-row: 2;
    margin: 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 0.75rem;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 2 / 1.5;
  object-fit: cover;
  background-color: ${(props) => props.theme.colors.lightGray};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: 1;
    grid-row: 1;
    grid-row-end: 4;
    align-self: center;
    margin: 5px 0px;
    max-width: 220px;
    max-height: 150px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-column: 2;
    grid-row: 3;
  }
`;
