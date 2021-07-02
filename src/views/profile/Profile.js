import "./css/Profile.css";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import { LoginRoute } from '../../constants/routes/routes'
import { useHistory } from 'react-router-dom';
import CV from './CV/CV';
import {saveCVs, setDisplay} from "../../redux/actions/profileActions";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import React, { useRef } from "react";

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

    const sendFileServer = (file) => {
        dispatch(saveCVs(file))
            .then(res => {
            console.log(res)
        })
    }

    const printDocument = () => {
        dispatch(setDisplay(false))
        setTimeout(() => {
            html2canvas(divToPrint.current)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('p', 'mm', [157.42708333333, 180.44583333333]);
                    pdf.addImage(imgData, 'JPEG', -133.1, -3.3);

                    const formData = new FormData();
                    formData.append('pdf', new Blob([pdf.output('blob')], {type: 'application/pdf'}));
                    sendFileServer(formData);

                    pdf.save(`cv-${Date.now()}.pdf`);
                });
        }, 500)
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
            <button className='button' onClick={printDocument}>Save And Generate</button>
        </div>
    );
}

export default Profile;