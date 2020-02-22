import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";


const ContenedorRegistro = styled.div`
    height: 400px;
    margin-top: 200px;
    text-align: center;
    color: white;    
`;

const Registro = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Link to="/home">
          <ContenedorRegistro type="button">
        <h1>FORMULARIO REGISTRO</h1>
        </ContenedorRegistro>
      </Link>

      <Footer />
    </Fragment>
  );
};

export default Registro;
