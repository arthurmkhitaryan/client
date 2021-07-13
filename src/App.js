import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import api from "./repasitory/RepositoryFactory";

import {BrowserRouter} from "react-router-dom";
import UserRoutes from "./components/custom/protected-route/UserRoutes";
import GuestRoutes from "./components/custom/protected-route/GuestRoutes";
import {MyCVsRoute, ProfileRoute, RegisterRoute, LoginRoute} from "./constants/routes/routes";

import {setUser} from "./redux/actions/userActions";

import Profile from "./views/profile/Profile";
import MyCVs from "./views/profile/CV/MyCVs";
import Login from "./views/auth/Login";
import Navbar from "./views/navbar/Navbar";
import Register from "./views/auth/Register";

import './App.css';
import 'antd/dist/antd.css';






function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('_token');
        token && api.auth('me').then((result) => {
            dispatch(setUser(result.data.data.user))
        }).catch(e => {
            console.log(e)
        })
    })



    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="app-wrapper">
                    <GuestRoutes component={Login} exact path={LoginRoute} />
                    <GuestRoutes component={Register} exact path={RegisterRoute} />
                    <UserRoutes component={Profile} exact path={ProfileRoute}/>
                    <UserRoutes component={MyCVs} exact path={MyCVsRoute}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
