import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Perfil from './components/Perfil';
import Home from './components/Home';
import Novedad from './components/Novedad';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component= {Home} />
            <Route exact path='/perfil' component= {Perfil} />
            <Route exact path='/novedad' component= {Novedad} />
        </Switch>
    );
};

export default Routes;