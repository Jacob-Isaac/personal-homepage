import styled, {css} from "styled-components";
import { ReactComponent as ButtonImg} from '../../images/hireMe.svg';

export const Block = styled.div`
height: 404px;
margin: auto;
background-color:  ${({theme}) => theme.color.tilesBackground};
margin-bottom: 72px;
margin-top: 72px;
box-shadow: 0px 0px 20px rgba(9, 10, 51, 0.02), 0px 16px 20px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;


export const IntroBlock = styled.div`
   margin-top: 115px;
margin-bottom: 115px;
max-height: 404px;
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: 1fr 1fr 1fr 2fr 3fr;
 grid-template-areas:
      "photo mode "
      "photo txt "
      "photo myName "
      "photo article "
      "photo hireButton ";
      grid-row-gap: 10px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
  grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
 grid-template-areas:
      "mode"
      "photo" 
      "txt"
      "myName"
      "article"
      "hireButton";
      margin-top: 0px;
  }
`;

export const MyPhoto = styled.img`
grid-area: photo;
max-width: 398px;
border-radius: 50%;
margin-right: 66px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width:70%;
    min-width:202px;
    align-self:start;
    width:40%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
     min-width:150px; 
    width:50%;
  }
`;



export const Text = styled.div`
grid-area: txt;
align-self: end;
color:  ${({theme}) => theme.color.text};
font-weight: 700;
font-size: 12px;
line-height: 130%;
text-transform: uppercase;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 10px;
  }
`;

export const Name = styled.span`
grid-area: myName;
align-self: end;
color:  ${({theme}) => theme.color.titleAndIcons};
font-weight: 900;
/* font-size: 38px; */
/* line-height: 46px; */
letter-spacing: 0.05em;
animation: fadeInAnimation ease 4s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.extra}px) {
    font-size: 38px;
  }
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
grid-area: article;
align-self: center;
max-width: 630px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
color:  ${({theme}) => theme.color.text};
text-align: justify;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    width:90%;
    align-self: center;
  }
`;

// export const HireMeButton = styled.div`

// margin-top: 60px;
// width: 154px;
// height: 49px;
// border-radius: 4px;
// `;

// export const HireMeButton = styled(HireButton)`
// margin-top: 60px;

// &:hover {
//     box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
//     border-radius: 4px;
// }
// &:active {
//     content: url("../../images/Button-selected-LM.svg");
// }

// `;

export const HireMeButton = styled.a`
grid-area: hireButton;
padding-top: 15px;
/* margin-top: 60px; */
     /* padding-top: 14px;  */
     width: 154px;
 height: 49px;
 /* &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
        transition: 0.6s;
    } */
    /* border-radius: 4px; */
        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* align-self: center; */
    /* width: 110px;
 height: 30px; */
  }

`;

export const StyledButtonImg = styled(ButtonImg)`
/* grid-area: hireButton; */
 width: 154px;
 height: 49px;
 border-radius: 4px;
 &:hover{
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
        cursor: pointer;
        transition: 0.6s;

    }
   
        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* align-self: center; */
    width: 138px;
  height: 45px;
  }

`;





export const ModeChange = styled.div`
grid-area: mode;

display: flex;
     flex-direction: row;
     justify-content: flex-end;
    
/* line-height: 130%; */
/* display: flex; */
/* align-items: center; */

/* flex: none; */
/* order: 0;
flex-grow: 0; */
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    /* margin-top:15px;
    margin-bottom:15px; */
    align-self: center;
    margin-bottom: -45px;
  }
`;
export const DarkMode = styled.div`
     color: #6E7E91;
     font-weight: 700;
     font-size: 12px;
     display: flex;
     flex-direction: row-reverse;
     gap: 12px;
     padding: 7px;
     @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
 display:none;
  }


`;

export const IconBody = styled.button`

     width: 47px;
     height: 27px;
     padding: 2px;
     border: 1px solid  #6E7E91;
     border-radius: 15px;
     background: ${({theme}) => theme.color.background};
     transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
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




    
  
   
    
    

   