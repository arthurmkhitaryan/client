import './App.css';
import 'antd/dist/antd.css';
import { Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Profile from "./views/profile/Profile";

function App() {

    return (
        <div className="App">
            <div className="app-wrapper">
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
