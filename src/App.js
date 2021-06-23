import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from "react-router-dom";
import { ProfileRoute, LoginRoute, RegisterRoute} from './constants/routes/routes'
import api from "./repasitory/RepositoryFactory";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Profile from "./views/profile/Profile";
import React, {useEffect} from "react";


function App() {
    useEffect(() => {
        const token = localStorage.getItem('_token');
        token && api.auth('me').then((result) => {
            console.log(result)
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Route path={ProfileRoute} component={Profile}/>
                    <Route path={LoginRoute} component={Login}/>
                    <Route path={RegisterRoute} component={Register}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
