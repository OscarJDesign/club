import React, { Fragment, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";
import Menuburger from "./Menuburger";
import Spinner from "./Spinner";
import Login from './Login';
import Videos from './Videos';

import Chicasagencia from './Chicasagencia';
import Avisos from './Avisos';
import Novedades from './Novedades';
// import Publicidad from './Publicidad';
// import Publicidad2 from './Publicidad2';
import Nosotros from './Nosotros';
import Footer from './Footer';

// const Chicasagencia = lazy(() => import("./Chicasagencia.js"));
// const Avisos = lazy(() => import("./Avisos.js"));
// const Novedades = lazy(() => import("./Novedades.js"));
const Publicidad = lazy(() => import("./Publicidad.js"));
const Publicidad2 = lazy(() => import("./Publicidad2.js"));
// const Nosotros = lazy(() => import("./Nosotros.js"));
// const Footer = lazy(() => import("./Footer.js"));

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

      {/* <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }> */}
      <Chicasagencia />
      
      <br />
      
      <Avisos />
      
      <br />
<Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }>
      <Publicidad />
      </Suspense>
      
      <br />

      <Novedades />
      <br />
<Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }>
      <Publicidad2 />
      </Suspense>
      <br />

      <Nosotros />
      <br />

      <Footer />
      {/* </Suspense> */}
    </Fragment>
  );
};

export default Home;
