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
  transition: background-color 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
}
`;
