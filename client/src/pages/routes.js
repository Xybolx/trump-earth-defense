import React from 'react';
import Game from './Game';
import Home from './Home';
import Instructions from './Instructions';
import NotFound from './NotFound';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {

return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/instructions' component={Instructions} />
                <Route exact path='/game' component={Game} />
                <Route path='' component={NotFound} />
            </Switch>
        </Router>
    );

}

export default Routes;