import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import Videos from './components/Videos';
import Chicasagencia from './components/Chicasagencia';

function App() {
  return (  
    <> 
    <GlobalStyles />
    <Navbar />
    <br/>
    <Videos />
    <br/>
    <Chicasagencia />
    </>
  );
}

export default App;
