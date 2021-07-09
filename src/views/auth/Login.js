import {useState} from "react";
import {useHistory, Link} from "react-router-dom";

import {loginUser} from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";

import {
    ProfileRoute,
    RegisterRoute,
    ForgotPasswordRoute
} from "../../constants/routes/routes";

import {Form, Input, Button} from 'antd';
import "./css/Login.css";

function Login() {
    console.log("login page");
    const history = useHistory();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: "",
        pass: ""
    });
    const [loginError, setLoginError] = useState('');

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };
    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

    const onFinish = (values: any) => {
        dispatch(loginUser(values))
            .then(() => {
                history.push(ProfileRoute);
            })
            .catch(({response}) => {
                setLoginError(response.data.data.message);
            })
    };

    const onChange = (e) => setUserData({...userData, [e.target.name]: e.target.value});

    return (
        <div className="Login">
            <h1 className="sign-in">Sign In</h1>
            {loginError && <h3>{loginError}</h3>}
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                action="#"
                method="post"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "The input is not valid E-mail!"
                        }
                    ]}
                    onChange={onChange}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    onChange={onChange}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
                <Link className="link" to={ForgotPasswordRoute}>Forgot Password</Link>
                <Link className="link" to={RegisterRoute}>Don't have an account?</Link>
            </Form>
        </div>
    );
}

export default Login;
