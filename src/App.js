import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import api from "./repasitory/RepositoryFactory";

import {BrowserRouter} from "react-router-dom";
import RouterView from "./components/custom/RouterView";

import './App.css';
import 'antd/dist/antd.css';
import {setUser} from "./redux/actions/userActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('_token');
        token && api.auth('me').then((result) => {
            dispatch(setUser(result.data.data.user))
        })
    })

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <RouterView />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
