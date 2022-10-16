import styled from "styled-components";

export const Container = styled.div`
max-width: 1216px;
margin: auto;
min-width: 280px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
width:90%
  }
`;