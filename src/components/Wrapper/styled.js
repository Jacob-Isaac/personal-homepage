import styled from "styled-components";
import { FlexCenter } from "../../theme";

export const Tiles = styled.div`
  width: 586px;
  height: 322px;
  background-color: ${({ theme }) => theme.color.tilesBackground};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px 0px 10px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  max-width: 1216px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    ${FlexCenter}
  }
`;
