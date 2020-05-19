import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GameOverProvider from './context/gameOver/GameOverProvider';
import ScoreProvider from './context/score/ScoreProvider';
import { Provider } from 'react-redux';
import store from './config/store';

ReactDOM.render(
  <ScoreProvider>
    <GameOverProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GameOverProvider>
  </ScoreProvider>,
  document.getElementById('root')
);
