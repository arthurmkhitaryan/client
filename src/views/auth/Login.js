import "./css/Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../repasitory/RepositoryFactory";
import { Form, Input, Button, Checkbox } from 'antd';
import { loginUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";

function Login({ loginUser }) {

    const [userData, setUserData] = useState({
        email: "",
        pass: ""
    });

    const history = useHistory();

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const tailLayout = {
        wrapperCol: {offset: 8, span: 16},
    };

    const onFinish = (values: any) => {
        api.auth("login", values)
        .then((res) => {
            localStorage.setItem('_token', res.data.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.data.user));
            loginUser(res.data.data.user);
            history.push('/profile')
        })
        .catch(err => {
            console.log(err.response.data)
        })

        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const onChange = (e) => setUserData({...userData, [e.target.name]: e.target.value});

    return (
        <div className="Login">
            <h1 className="sign-in">Sign In</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    name="pass"
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
                <a className="link" href="/forgot">Forgot Password</a>
                <a className="link" href="/register">Don't have an account?</a>
            </Form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: data => dispatch(loginUser(data))
    }
};

export default connect(null, mapDispatchToProps)(Login);
