import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../images/error.svg";

export const ErrorContainer = styled.div`
  margin: 195px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 120px;
    min-width: 315px;
  }
`;

export const StyledDangerIcon = styled(DangerIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100px;
    height: 100px;
  }
`;
export const Title = styled.p`
 color: ${({theme}) => theme.color.titleAndIcons};
 margin-top: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  margin: 38px 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Text = styled.p`
 color: ${({theme}) => theme.color.text};
  margin: 24px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
    margin: 15px;
  }
`;

export const Button = styled.a`
margin-top: 20px;
  padding: 16px 24px;
  border: none;
  border-radius: 5px;
  background:  ${({ theme }) => theme.color.mainBlue};
  color: ${({ theme }) => theme.color.tilesBackground};
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: 0.4s;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
    padding: 12px 20px;
    line-height: 15px;
    margin-top: 10px;
  }

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(150%);
  }
`;
