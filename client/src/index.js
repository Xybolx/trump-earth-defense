import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GameOverProvider from './context/gameOver/GameOverProvider';
import ScoreProvider from './context/score/ScoreProvider';
import PausedProvider from './context/paused/PausedProvider';
import { Provider } from 'react-redux';
import store from './config/store';
import ScoresProvider from './context/scores/ScoresProvider';

ReactDOM.render(
  <ScoresProvider>
    <PausedProvider>
      <ScoreProvider>
        <GameOverProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </GameOverProvider>
      </ScoreProvider>
    </PausedProvider>
  </ScoresProvider>,
  document.getElementById('root')
);
