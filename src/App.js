import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles';
import Videos from './components/Videos';

function App() {
  return (  
    <> 
    <GlobalStyles />
    <Navbar />
    <br/>
    <Videos />
    </>
  );
}

export default App;
