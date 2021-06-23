import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';

import {LoginRoute} from '../../constants/routes/routes';
import {Link} from 'react-router-dom';

import {Form, Input, Select, Button, DatePicker} from 'antd';
import "./css/Register.css";

import {registerUser} from "../../redux/actions/userActions";
import { executeErrors } from '../../helpers/main';

function Register() {

    const dispatch = useDispatch();
    const history = useHistory;
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
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

    // const executeErrors = (error) => {
    //     let serverErrors = [];
    //     serverErrors = error.errors.map(eachError => {
    //         return {
    //             name: eachError.param,
    //             errors: [eachError.msg]
    //         }
    //     });
    //
    //     form.setFields(serverErrors);
    // }

    const onFinish = (values) => {
        let toTimestamp = strDate => Date.parse(strDate)
        values.birth_day = toTimestamp(values.birth_day);
        dispatch(registerUser(values))
            .then(() => {
                history.push(LoginRoute)
            })
            .catch(err => {
                const data = err.response.data.data;
                executeErrors(form, data);
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
                    <Input />
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
                    <Input />
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
                    <Input />
                </Form.Item>

                <Form.Item
                    name="birth_day"
                    label="Bird Day"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your bird day',
                        },
                    ]}
                >
                    <DatePicker />

                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm_password"
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
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
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
                    <Select placeholder="select your gender" >
                        <Select.Option name="gender" value="Male">Male</Select.Option>
                        <Select.Option name="gender" value="Female">Female</Select.Option>
                        <Select.Option name="gender" value="Other">Other</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
                <Link className="link" to={LoginRoute}>Already have an account?</Link>
            </Form>
        </div>
    );
}

export default Register;