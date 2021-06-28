import "./css/Profile.css";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import { LoginRoute } from '../../constants/routes/routes'
import { useHistory } from 'react-router-dom';
import CV from './CV/CV';

function Profile() {
    const dispatch = useDispatch();
    const history = useHistory();


    function logout() {
        localStorage.removeItem('_token');
        localStorage.removeItem('user');
        dispatch(logoutUser())
        history.push(LoginRoute);
    }

    return (
        <div className="Profile">
            <header className='header'>
                <h1>Welcome</h1>
                <Button onClick={logout} type="primary">Log out</Button>
            </header>
            <div className="wrapper">
                <CV />
            </div>
        </div>
    );
}

export default Profile;