import "./css/Profile.css";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import { LoginRoute } from '../../constants/routes/routes'
import { useHistory } from 'react-router-dom';
import CV from './CV/CV';
import {saveCVs, setDisplay} from "../../redux/actions/profileActions";
import React, {useRef, useState} from "react";
import writer from 'write-file-p'

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

    const printDocument = (html) => {
        dispatch(setDisplay(false))
        let str = '';
        setTimeout(() => {
            str += html.innerHTML;
            dispatch(saveCVs(str))
                .then(res => {
                    console.log(res)
                })
        }, 300)
    }

    return (
        <div className="Profile">
            <header className='header'>
                <h1>Welcome</h1>
                <Button onClick={logout} type="primary">Log out</Button>
            </header>
            <div id="divToPrint" className="mt4" ref={divToPrint}>
                <CV/>
            </div>
            <button className='button' onClick={() => printDocument(divToPrint.current)}>Save And Generate</button>
        </div>
    );
}

export default Profile;