import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import React, { useRef } from "react";

import { Button } from "antd";
import { logoutUser } from "../../redux/actions/userActions";
import { LoginRoute } from '../../constants/routes/routes'

import CV from './CV/CV';

import "./css/Profile.css";


function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const divToPrint = useRef();

    function logout() {
        localStorage.removeItem('_token');
        localStorage.removeItem('user');
        dispatch(logoutUser());
        history.push(LoginRoute);
    }

    return (
        <div className="Profile">
            <header className='header'>
                <h1>Welcome  <a className='links' href="/profile/myCVs">My CVs</a></h1>
                <Button onClick={logout} type="primary">Log out</Button>
            </header>
            <div id="divToPrint" className="mt4" ref={divToPrint}>
                <CV/>
            </div>
        </div>
    );
}

export default Profile;