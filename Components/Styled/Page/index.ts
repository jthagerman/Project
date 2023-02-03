
import styled from 'styled-components';

export const Page = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  min-height: 100dvh;
  justify-content: center;
  grid-template-columns: 1fr;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 100%;
  max-width: 1170px;
  flex: 1;
`

export const VerticalSpacer = styled.div<{ size: string }>`
  width: 1px;
  height: ${props => props.size};
`

