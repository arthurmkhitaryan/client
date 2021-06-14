import "./css/UserNav.css";
import { useHistory } from "react-router-dom";

function UserNav() {
    const history = useHistory();

    return (
        <div className="UserNav">
            <nav>
                <ul>
                    <li className="left-bar">
                        <a href="/profile">Profile</a>
                    </li>
                    <li className="auth">
                        <a href="/settings">Settings</a>
                        <a href="/logout" onClick={e => {
                            localStorage.removeItem("loggedUser");
                            history.push("/login");
                        }}>Log Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserNav;