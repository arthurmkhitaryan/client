import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {ProfileRoute} from "../../../constants/routes/routes";
import {useSelector} from "react-redux";

const UserRoutes = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user.user) || JSON.parse(localStorage.getItem('user') || null);
    return (
        <Route {...rest} render={
            props => {
                if (!user) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: ProfileRoute,
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}
export default UserRoutes;