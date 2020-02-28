import React, { Fragment, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";
import Menuburger from "./Menuburger";
import Spinner from "./Spinner";
// import Login from "./Login";
import Videos from "./Videos";

// import Chicasagencia from "./Chicasagencia";
// import Avisos from "./Avisos";
// import Novedades from "./Novedades";
// import Publicidad from './Publicidad';
// import Publicidad2 from './Publicidad2';
// import Nosotros from "./Nosotros";
// import Footer from "./Footer";

const Chicasagencia = lazy(() => import("./Chicasagencia.js"));
const Avisos = lazy(() => import("./Avisos.js"));
const Novedades = lazy(() => import("./Novedades.js"));
const Publicidad = lazy(() => import("./Publicidad.js"));
const Publicidad2 = lazy(() => import("./Publicidad2.js"));
const Nosotros = lazy(() => import("./Nosotros.js"));
const Footer = lazy(() => import("./Footer.js"));
const Login = lazy(() => import("./Login.js"));

// const Videos = lazy(() => import("./Videos.js"));

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

      {/* INICIO LOGIN */}
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <Login
          datos={datos}
          guardarDatos={guardarDatos}
          guardarConsulta={guardarConsulta}
        />
      </Suspense>
      {/* FIN LOGIN */}

      {/* INICIO MENUBURGER */}
      <Menuburger />
      {/* FIN MENUBURGER */}


      
      <Videos />
      {/* </Suspense> */}
      <br />

      <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }>
      <Chicasagencia />
      </Suspense>

      <br />

      <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }>
      <Avisos />
      </Suspense>

      <br />
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
      <Publicidad />
      </Suspense>

      <br />

      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
      <Novedades />
      </Suspense>

      <br />
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
      <Publicidad2 />
      </Suspense>
      <br />

      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      > 
      <Nosotros />
      </Suspense>
      <br />

      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
      <Footer />
      </Suspense>
    </Fragment>
  );
};

export default Home;
