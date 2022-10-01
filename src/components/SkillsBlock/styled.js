import styled from "styled-components";
import { ReactComponent as Marker } from "../../images/marker.svg";

export const Block = styled.div`
max-height: 404px;
padding:20px;
margin: auto;
background-color:  white;
margin-bottom: 72px;
margin-top: 72px;
box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;
export const Wrapper = styled.div`
height: 404px;
margin: auto;
margin-top: 115px;
display: grid;
/* grid-template-columns: repeat(5); */
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`;

export const StyledMarker = styled(Marker)`
    margin-right: 16px;
    flex-shrink: 0;
    & circle {
        fill: blue;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-right: 8px;
        width: 6px;
        height: 6px;
    }
`;


export const Title = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 30px;
line-height: 36px;
letter-spacing: 0.05em;
overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* border-right: .15em solid orange; The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  /* margin: 0 auto; Gives that scrolling effect as the typing happens */
 
  animation: 
    typing 4.5s steps(40, end);
    /* blink-caret .75s step-end; */

    @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
/* @keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: transparent; }
} */
`;

export const Article = styled.article`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color:  gray;
text-align: justify;
margin-top: 16px;
`;
