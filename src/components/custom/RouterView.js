import ProtectRoutes from "./protected-route/ProtectRoutes";
import {Route} from 'react-router-dom';
import routes from "../../routes";

const RouterView = () => {
    return (
        routes.map((each, index) =>
            <ProtectRoutes middlewares={each.middlewares} routes={each.routes.map(route => route.path)} key={index}>
                {
                    each.routes.map((item, i) =>
                        <Route exact path={item.path} component={item.component} key={i} />
                    )
                }
            </ProtectRoutes>
        )
    )
}

export default RouterView;