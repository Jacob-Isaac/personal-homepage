import styled from "styled-components";

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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

`;

export const MyPhoto = styled.img`
width: 398px;
height: 398px;
grid-area: 1 / 1 / 6 / 3;
`;

export const ModeChange = styled.div`
grid-area: 1 / 5 / 2 / 6; 
`;

export const Text = styled.div`
grid-area: 2 / 3 / 3 / 5;
`;

export const Name = styled.h3`
grid-area: 3 / 3 / 4 / 5;
`;

export const Article = styled.article`
grid-area: 4 / 3 / 5 / 5;
`;

export const HireMeButton = styled.button`
grid-area: 5 / 3 / 6 / 5;
`;




    
  
   
    
    

   