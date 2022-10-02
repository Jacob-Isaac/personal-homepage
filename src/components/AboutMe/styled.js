import styled, {css} from "styled-components";

export const Block = styled.div`
height: 404px;
margin: auto;
background-color:  ${({theme}) => theme.color.white};
margin-bottom: 72px;
margin-top: 72px;
box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;

export const IntroBlock = styled.div`
height: 404px;
margin: auto;
margin-top: 115px;
display: grid;
/* grid-template-columns: repeat(5); */
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`;

export const MyPhoto = styled.img`
width: 398px;
height: 398px;
grid-area: 1 / 1 / 6 / 3;
border-radius: 50%;
margin-right: 66px;
`;



export const Text = styled.div`
grid-area: 2 / 3 / 2 / 5;
color:  ${({theme}) => theme.color.grey};
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 130%;
text-transform: uppercase;
`;

export const Name = styled.h1`
grid-area: 2 / 3 / 4 / 5;
color:  ${({theme}) => theme.color.black};
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 38px;
line-height: 46px;
letter-spacing: 0.05em;
animation: fadeInAnimation ease 4s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
`;

export const Article = styled.article`
grid-area: 3 / 3 / 5 / 5;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color:  ${({theme}) => theme.color.SlateGray};
text-align: justify;
margin-top: 16px;
`;

// export const HireMeButton = styled.div`
// grid-area: 4 / 3 / 5 / 4;
// margin-top: 60px;
// width: 154px;
// height: 49px;
// border-radius: 4px;
// `;

// export const HireMeButton = styled(HireButton)`
// margin-top: 60px;
// grid-area: 4 / 3 / 5 / 4;
// &:hover {
//     box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
//     border-radius: 4px;
// }
// &:active {
//     content: url("../../images/Button-selected-LM.svg");
// }

// `;

export const HireMeButton = styled.a`
    margin-top: 60px;
    grid-area: 4 / 3 / 5 / 4;
    width: 154px;
 height: 49px;
 &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
        transition: 0.6s;
    }
    border-radius: 4px;
`;



export const ModeChange = styled.div`

grid-area: 1 / 6 / 1 / 6 ; 
display: flex;
     flex-direction: row;
     justify-content: flex-end;
/* line-height: 130%; */
/* display: flex; */
/* align-items: center; */

/* flex: none; */
/* order: 0;
flex-grow: 0; */
`;
export const DarkMode = styled.div`
     color: #6E7E91;
     font-weight: 700;
     font-size: 12px;
     display: flex;
     flex-direction: row-reverse;
     gap: 12px;
     padding: 7px;


`;

export const IconBody = styled.button`

     width: 47px;
     height: 27px;
     padding: 2px;
     border: 1px solid  #6E7E91;
     border-radius: 15px;
     background: ${({theme}) => theme.color.background};
     &:hover{
          cursor: pointer;
     }
`;
export const Body = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform .6s;
  background:  ${({theme}) => theme.color.background};
  
  ${({ iconTransition }) =>
          iconTransition && css`
          transform: translateX(20px);
          & path {
            fill: ${({theme}) => theme.color.background};
        }
    `};
`;




    
  
   
    
    

   