import "./css/Profile.css";
import { connect } from "react-redux";

function Profile({ user }) {
    console.log(user)
    return (
        <div className="Profile">
            <h1>Welcome</h1>
            {/*<h1>Welcome {location.state.name}</h1>*/}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Profile);