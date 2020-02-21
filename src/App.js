import React  from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
import Videos from "./components/Videos";
import Avisos from "./components/Avisos";
// import Spinner from "./components/Spinner";

// import CuadroVideos from "./components/CuadroVideos";
import Chicasagencia from "./components/Chicasagencia";
import Menuburger from "./components/Menuburger";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Novedades from "./components/Novedades";
import Publicidad from "./components/Publicidad";
import Nosotros from "./components/Nosotros";


// const Menuburger = lazy(() => import("./components/Menuburger"));
// const Login = lazy(() => import("./components/Login"));
// const Chicasagencia = lazy(() => import("./components/Chicasagencia"));

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <br />
      {/* <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      > */}
        <Login />
      {/* </Suspense> */}
      <br />
      {/* <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      > */}
        <Menuburger />
      {/* </Suspense> */}
      <br />
      <Videos />
      <br />
      {/* <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      > */}
        <Chicasagencia />
        <br />
        <Avisos />
        <br/>
        <Publicidad/>
        <br/>
        <Novedades/>
        <br/>
        <Publicidad/>
        <br/>
        <Nosotros/>
      {/* </Suspense> */}
      <br />
      <Footer />
    </>
  );
}

export default App;
