

// Layout
import { PublicLayout, AppLayout } from '../layouts';

// Pages
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const routes = [

  // Public pages
  { path: '/login', exact: true, component: Login, layout: PublicLayout },
  { path: '/signup', exact: true, component: Signup, layout: PublicLayout },

  // Non Public Pages
  { path: '/', exact: true, component: Home, layout: AppLayout },

];

export default routes;
