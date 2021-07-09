import ProtectRoutes from "./protected-route/ProtectRoutes";
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from "../../routes";
import {useEffect, useState} from "react";
import Login from "../../views/auth/Login";

const hist = createBrowserHistory();

const RouterView = () => {
    const [midlewereRoutes, setMidlewereRoutes] = useState([])
    useEffect(() => {
        const obj = [];
        routes.forEach(el => {
            el.routes.forEach(route => obj.push(route))
        })
        setMidlewereRoutes(obj)
    }, [routes])
    return (
        <Router  history={hist}>
            <Switch>
                {/*<Route exact path={'/login'} component={Login} />*/}
                {
                    routes.map((each, index) => {
                        console.log(each)
                        return (<ProtectRoutes middlewares={each.middlewares} routes={midlewereRoutes} key={index}>
                            {
                                each.routes.map((item, i) => {
                                    return (<Route exact path={item.path} component={item.component} key={i} />)
                                })
                            }
                        </ProtectRoutes>)
                    })
                }
            </Switch>
        </Router>

    )
}

export default RouterView;