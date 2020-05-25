import React from 'react';
import Routes from './pages/Routes';
import background from './features/map/stars.jpg';

const App = () => {

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
      }}>
        <Routes />
      </div>
  );
};

export default App;
