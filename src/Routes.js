import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registro from './components/Perfil';
import Home from './components/Home';
import Novedad from './components/Novedad';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route exact path='/perfil' component= {Registro} />
            <Route exact path='/' component= {Home} />
            <Route exact path='/novedad' component= {Novedad} />
        </Switch>
        
    );
};

export default Routes;