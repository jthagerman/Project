import styled from 'styled-components';

export default styled.div<{ align?: string, justify?: string }>`
  display: flex;
  flex-flow: row;
  justify-content: ${(props) => props.justify ?? 'space-between'};
  align-items: ${(props) => props.align ?? 'flex-start'};

  @media (max-width: ${(props) => props.theme.breakpoints.largePhone}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;