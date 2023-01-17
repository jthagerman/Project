
import styled from 'styled-components';

export const Page = styled.div`
  margin: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
`

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1170px;
`

export const VerticalSpacer = styled.div<{ size: string }>`
  width: 1px;
  height: ${props => props.size};
`