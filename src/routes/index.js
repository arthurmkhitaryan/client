import GuestRoutes from './guest-routes';
import AuthRoutes from './user-routes';

const routes = [
    ...AuthRoutes,
    ...GuestRoutes,
];

export default routes;




