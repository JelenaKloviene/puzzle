import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -o-box-sizing:border-box;
    -ms-box-sizing:border-box;
    box-sizing:border-box;
  }
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
