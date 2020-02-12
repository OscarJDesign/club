import { createGlobalStyle } from 'styled-components';
import Fondo from "../asset/img/fondo.jpg";




const GlobalStyles= createGlobalStyle`
*{
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      background: url(${Fondo}) no-repeat;
      background-size: cover;
      background-attachment: fixed;
      font-family: 'Satisfy', cursive;
      font-size: 16px;
      ;
  }
`;
export default GlobalStyles;