import "./css/Register.css";
import {Form, Input, Select, Button, DatePicker} from 'antd';
import api from "../../repasitory/RepositoryFactory";
import {useState} from "react";

function Register() {

    const [errMsg, setErrMsg] = useState("");
    const [param, setParam] = useState("");

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        let toTimestamp = strDate => Date.parse(strDate)
        values.day = toTimestamp(values.day)
        return api.auth('register', values)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            const data = err.response.data;
            console.log(data.data.errors[0].msg)
            setErrMsg(data.data.errors[0].msg)
            // setParam(data.data.param)
            console.log(data)
            // console.log(`<Form.Item rules>`);
        })

    }

    return (
        <div className="Register">
            <h1 className="sign-up">Sign In</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="name"
                    label="Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="surname"
                    label="Surname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your surname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="day"
                    label="Bird Day"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your bird day',
                        },
                    ]}
                >
                    <DatePicker/>

                </Form.Item>
                <Form.Item
                    name="pass"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="re_pass"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('pass') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Select.Option name="gender" value="Male">Male</Select.Option>
                        <Select.Option name="gender" value="Female">Female</Select.Option>
                        <Select.Option name="gender" value="Other">Other</Select.Option>
                    </Select>
                </Form.Item>
                {/*{if()}<p className="errors">{errMsg}</p>*/}
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
                <a className="link" href="/login">Already have an account?</a>
            </Form>
        </div>
    );
}

export default Register;