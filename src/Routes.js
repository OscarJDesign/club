import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registro from './components/Registro';
import Home from './components/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/home' component= {Home} />
            <Route exact path='/registro' component= {Registro} />
        </Switch>
    );
};

export default Routes;