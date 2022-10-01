import styled from "styled-components";


export const Tiles = styled.div`
max-width: 586px;
background-color:  ${({theme}) => theme.color.white};
border: 6px solid rgba(209, 213, 218, 0.3);
box-shadow: 0px 0px 10px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
    min-width: 280px;
    }
`;

export const UlWrapper = styled.div`
margin-right:40px;
margin-bottom: 30px;
margin-top: 20px;
`;

export const StyledUl = styled.ul`
list-style-type: none;
display: inline-flex;
flex-wrap: wrap;
flex-direction: column;
gap: 22px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: -30px;
    }
`;

export const Name = styled.li`
font-weight: ${({theme}) => theme.fontSize.bold};
font-size: 24px;
line-height: 29px;
letter-spacing: 0.05em;
color: #0366D6;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    }

`;

export const Description = styled.li`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%; 
letter-spacing: 0.05em;
text-align: justify;
color: #6E7E91;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    }
`;

export const Links = styled.li`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.05em;
color: #6E7E91;
display: flex;
flex-direction: column;
gap:8px;
`;

export const Demo = styled.span`
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    }
`;

export const Code = styled.span`
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    }
`;

export const Link = styled.a`
    color: #0366D6;
    text-decoration: none;
    border-bottom: 1px solid #BAD0E8;
    padding-bottom: 1px;
    &:hover {
        border-bottom: 1px solid #0366D6;
        /* border-color: unset; */
    }
    /* α(#0366D6, 0.3); */

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
    }
`;