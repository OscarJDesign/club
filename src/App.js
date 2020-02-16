import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import Videos from './components/Videos';
import Chicasagencia from './components/Chicasagencia';
import Menuburger from './components/Menuburger';
import Login from './components/Login';
import Publicidad from './components/Publicidad';

function App() {
  return (  
    <> 
    <GlobalStyles />
    <Navbar />
    <br/>
    <Login />
    <br/>
    <Menuburger />
    <br/>
    <Videos />
    <br/>
    <Chicasagencia />
    <br/>
    <Publicidad />
    </>
  );
}

export default App;
