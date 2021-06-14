import "./css/Login.css";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import api from "../../repasitory/RepositoryFactory";
import {Form, Input, Button, Checkbox} from 'antd';

function Login() {

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
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function submit(e) {

        const users = JSON.parse(localStorage.getItem("users"));

        let user = users.find(user => user.email === userData.email && user.pass === userData.pass);

        if (user) {
            history.push(`/profile/${user.id}`, {"name": user.name})
            localStorage.setItem("loggedUser", JSON.stringify(user.id));
        }

    }


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
                onSubmit={submit}
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

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
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
        // <div className="Login">
        //     <h1>Login</h1>
        //     <form action="#" method="post" onSubmit={handleSubmit(submit)}>
        //         <label htmlFor="email">
        //             Email
        //             <p className="err">{errors.email?.message}</p>
        //             <input
        //                 {...register("email")}
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={userData.email}
        //                 onChange={onChange}
        //             />
        //         </label>
        //         <label htmlFor="password">
        //             Password
        //             <p className="err">{errors.pass?.message}</p>
        //             <input
        //                 {...register("pass")}
        //                 id="password"
        //                 type="password"
        //                 name="pass"
        //                 value={userData.pass}
        //                 onChange={onChange}
        //             />
        //         </label>
        //         <button className="btn-sign-in" type="submit">Sign In</button>
        //         <a className="link" href="/forgot">Forgot Password</a>
        //         <a className="link" href="/register">Don't have an account?</a>
        //     </form>
        // </div>
    );
}

export default Login;