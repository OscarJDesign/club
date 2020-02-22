import React, { Fragment } from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";
import Videos from "./Videos";
import Avisos from "./Avisos";
import Chicasagencia from "./Chicasagencia";
import Menuburger from "./Menuburger";
import Login from "./Login";
import Footer from "./Footer";
import Novedades from "./Novedades";
import Publicidad from "./Publicidad";
import Nosotros from "./Nosotros";

const Home = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Login />
      <Menuburger />
      <Videos />
      <br />
      <Chicasagencia />
      <br />
      <Avisos />
      <br />
      <Publicidad />
      <br />
      <Novedades />
      <br />
      <Publicidad />
      <br />
      <Nosotros />
      <br />
      <Footer />
    </Fragment>
  );
};

export default Home;
