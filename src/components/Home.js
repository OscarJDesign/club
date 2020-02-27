import React, { Fragment, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";
import Menuburger from "./Menuburger";
import Spinner from "./Spinner";
import Login from './Login';
import Videos from './Videos';

const Nosotros = lazy(() => import("./Nosotros.js"));
const Publicidad = lazy(() => import("./Publicidad.js"));
const Publicidad2 = lazy(() => import("./Publicidad2.js"));
const Novedades = lazy(() => import("./Novedades.js"));
const Chicasagencia = lazy(() => import("./Chicasagencia.js"));
const Footer = lazy(() => import("./Footer.js"));
const Avisos = lazy(() => import("./Avisos.js"));

const Home = () => {
  // State
  const [datos, guardarDatos] = useState({
    email: "",
    password: ""
  });

  const [guardarConsulta] = useState(false);

  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Login 
        datos={datos} 
        guardarDatos={guardarDatos} 
        guardarConsulta = {guardarConsulta}
      />
      <Menuburger />

      <Videos />
      <br />

      <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }>
      <Chicasagencia />
      
      <br />
      
      <Avisos />
      
      <br />

      <Publicidad />
      
      <br />

      <Novedades />
      <br />

      <Publicidad2 />
      <br />

      <Nosotros />
      <br />

      <Footer />
      </Suspense>
    </Fragment>
  );
};

export default Home;
