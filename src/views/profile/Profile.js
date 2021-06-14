import "./css/Profile.css";
import { useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();
    console.log(location)

    return (
        <div className="Profile">
            {/*<h1>Welcome {location.state.name}</h1>*/}
        </div>
    );
}

export default Profile;