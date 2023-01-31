import styled from "styled-components";

import Row from "@/Components/Styled/Row";

export const BlogRow = styled(Row)`
  > :first-child {
    border-right: 1px solid ${(props) => props.theme.colors.lightGray};
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      border: none;
    }
  }
`;
