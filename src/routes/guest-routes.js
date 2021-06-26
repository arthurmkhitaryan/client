import guestMiddleware from '../middlewares/guest';

import { LoginRoute, RegisterRoute } from "../constants/routes/routes";

import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const routes = [
    {
        middlewares: [guestMiddleware],
        routes: [
            {
                path: LoginRoute,
                component: Login
            },
            {
                path: RegisterRoute,
                component: Register
            }
        ]
    }
]

export default routes;