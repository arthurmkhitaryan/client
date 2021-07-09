import authMiddleware from '../middlewares/auth';

import {ProfileRoute, MyCVsRoute} from "../constants/routes/routes";

import Profile from "../views/profile/Profile";
import MyCVs from "../views/profile/CV/MyCVs";

const routes =  [
    {
        middlewares: [authMiddleware],
        routes: [
            {
                path: ProfileRoute,
                component: Profile
            },
            {
                path: MyCVsRoute,
                component: MyCVs
            }
        ]
    }
];

export default routes;