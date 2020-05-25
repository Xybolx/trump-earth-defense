import React from 'react';
import Game from './pages/Game';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import background from './features/map/stars.jpg';

const App = () => {

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
      }}>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/instructions' component={Instructions} />
                <Route path='/game' component={Game} />
                <Route path='' component={NotFound} />
            </Switch>
        </Router>
      </div>
  );
};

export default App;
