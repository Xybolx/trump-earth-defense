import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './pages/routes';
import background from './features/map/stars.jpg';

const App = () => {

  const mappedRoutes = routes && routes.map(route => (
    <Route 
      key={route.id} 
      exact={route.exact} 
      path={route.path} 
      component={route.component} 
    />
  ));

  return (
    <Router>
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
      }}>
        <Switch>
          {mappedRoutes}
        </Switch>
      </div>
      </Router>
  );
};

export default App;
