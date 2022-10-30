import styled from "styled-components";
import { ReactComponent as Marker } from "../../images/marker.svg";

export const Block = styled.div`
padding:30px;
padding-top: 10px;
padding-bottom: 15px;
margin: auto;
background-color: ${({ theme }) => theme.color.tilesBackground};
transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
margin-bottom: 72px;
margin-top: 72px;
box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;
export const StyledMarker = styled(Marker)`
    margin-right: 16px;
    flex-shrink: 0;
    & circle {
        fill: ${({ theme }) => theme.color.mainBlue};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-right: 8px;
        width: 6px;
        height: 6px;
    }
`;


export const Title = styled.h2`
font-weight: 900;
font-size: 30px;
line-height: 36px;
letter-spacing: 0.05em;
color: ${({theme}) => theme.color.titleAndIcons};
animation: fadeInAnimation ease 4s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
border-bottom: 1px solid ${({ theme }) => theme.color.borderBottom};
padding-bottom: 15px;
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  font-size: 18px;
    }
`;
