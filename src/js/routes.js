
import HomePage from '../pages/home.jsx';
import UpcomingEvents from '../pages/upcoming-events.jsx';
import NotFoundPage from '../pages/404.jsx';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/upcoming/',
    component: UpcomingEvents,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
