import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*,
::after,
::before {
  box-sizing: inherit;
}
body {
  /* font-family: 'Montserrat', cursive, sans-serif; */
  background-color:  ${({theme}) => theme.color.whiteLilac};
  font-family: 'Inter', sans-serif;
  /*
  text-align: center;
  max-width: 5000px;
  margin: 0 auto;
  padding: 0 0px; */
}
`;
