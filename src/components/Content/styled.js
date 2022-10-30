import styled from "styled-components";

export const Wrapper = styled.div`
margin-bottom: 120px;
`;
export const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 26px;
gap: 10px;
min-width: 280px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    gap: 1px;
    }
`;

export const Portfolio = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 36px;
letter-spacing: 0.05em;
color: ${({ theme }) => theme.color.titleAndIcons};
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    }
`;

export const Subtitle = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color: ${({ theme }) => theme.color.titleAndIcons};
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    }
`;
