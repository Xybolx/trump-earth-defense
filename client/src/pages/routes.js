import Game from './Game';
import Home from './Home';
import Instructions from './Instructions';
import NotFound from './NotFound';

const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home
    },

    {
        id: 2,
        path: '/instructions',
        exact: true,
        component: Instructions
    },
    
    {
        id: 3,
        path: '/game',
        exact: true,
        component: Game
    },

    {
        id: 3,
        path: '',
        exact: false,
        component: NotFound
    }
];

export default routes;