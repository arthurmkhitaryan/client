import authMiddleware from '../middlewares/auth';

import {ProfileRoute} from "../constants/routes/routes";

import Profile from "../views/profile/Profile";

const routes =  [
    {
        middlewares: [authMiddleware],
        routes: [
            {
                path: ProfileRoute,
                component: Profile
            }
        ]
    }
];

export default routes;