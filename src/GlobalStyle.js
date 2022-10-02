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
  background-color:  ${({theme}) => theme.color.bodyBackground};
  font-family: 'Inter', sans-serif;
  display: block;
}
`;
