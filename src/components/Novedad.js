import React, { Fragment } from 'react';
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menuburger from "./Menuburger";

const Contenedornovedad = styled.div`

`;

const Novedad = () => {
    return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <br/>
      <Menuburger />

        <Contenedornovedad>
         <p>fdsfdsfdsf</p>   
        </Contenedornovedad>

        
     <Footer/> 
    </Fragment>
    );
};

export default Novedad;