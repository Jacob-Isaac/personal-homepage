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
max-height: 404px;
max-width: 700px;
margin: left;
display:flex;
flex-direction: column;
margin-bottom: 100px;
`;




export const Text = styled.div`
color:  ${({theme}) => theme.color.SlateGray};
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 130%;
text-transform: uppercase;
`;

export const Name = styled.h1`
color:  ${({theme}) => theme.color.MineShaft};
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 38px;
line-height: 46px;
letter-spacing: 0.05em;
`;

export const Article = styled.article`
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

export const SocialMedia = styled.div`
margin-top:54px;
display: flex;
flex-direction: row;
`;

export const SocialLink = styled.div`
text-decoration: none;
list-style-type: none;
margin-right: 40px;

`;

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
display: flex;
flex-direction: row;
justify-content: flex-end;
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
     background: #E5E5E5;
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
  background:  ${({theme}) => theme.color.SlateGray};
  
  ${({ iconTransition }) =>
          iconTransition && css`
          transform: translateX(20px);
          & path {
            fill: ${({theme}) => theme.color.SlateGray};
        }
    `};
`;




    
  
   
    
    

   