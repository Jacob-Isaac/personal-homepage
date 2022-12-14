import styled from "styled-components";

export const Tiles = styled.div`
  max-width: 586px;
  background-color: ${({ theme }) => theme.color.tilesBackground};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px 0px 10px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
  &:hover {
    transition: border-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
    border-color: ${({ theme }) => theme.color.tileHover};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-top: 30px;
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 22px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 10px;
  }
`;

export const Name = styled.li`
  font-weight: ${({ theme }) => theme.fontSize.bold};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.tileTitle};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;

export const Description = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-align: justify;
  color: ${({ theme }) => theme.color.text};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    padding-right: 10px;
    text-align: left;
  }
`;

export const Links = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Demo = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const Code = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mainBlue};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.linkBorder};
  padding-bottom: 1px;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
