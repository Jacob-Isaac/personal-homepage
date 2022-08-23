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
  background: #4b4d66;
  text-align: center;
  max-width: 5000px;
  margin: 0 auto;
  padding: 0 0px;
}
`;
