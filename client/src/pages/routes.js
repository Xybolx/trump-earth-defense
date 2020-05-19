import Game from './Game';
import Home from './Home';
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