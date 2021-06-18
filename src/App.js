import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import api from "./repasitory/RepositoryFactory";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Profile from "./views/profile/Profile";
import React, {useEffect} from "react";


function App() {

    useEffect(() => {
        api.auth('me').then((res) => {
            console.log(res)
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
