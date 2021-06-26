import GuestRoutes from './guest-routes';
import AuthRoutes from './user-routes';

const routes = [
    ...GuestRoutes,
    ...AuthRoutes,
];

export default routes;




