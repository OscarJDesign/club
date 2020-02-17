import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
import Videos from "./components/Videos";
import Publicidad from "./components/Publicidad";
// import Spinner from "./components/Spinner";

// import CuadroVideos from "./components/CuadroVideos";
import Chicasagencia from "./components/Chicasagencia";
import Menuburger from "./components/Menuburger";
import Login from "./components/Login";

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
        <Publicidad />
      {/* </Suspense> */}
    </>
  );
}

export default App;
