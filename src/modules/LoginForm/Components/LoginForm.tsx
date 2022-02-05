import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Router, useNavigate} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Block from "../../../components/Block/Block";
import "./../../../pages/Auth/Auth.scss"
import {FormikErrors, FormikState, FormikValues, useFormik} from "formik";

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            user: '',
            password: '',
        },
        validate: (values:FormValues) => {

            let errors:FormikErrors<FormValues> = {}
                if (!values.password) {
                    errors.password = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
                    errors.password = 'Invalid email address';
                }


                return errors;
            },

        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <div className="auth__top">
                <h2>Sign in</h2>
                <p>Please Sign in</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={formik.handleSubmit}>
                    <Form.Item
                        name="username"
                        hasFeedback
                        validateStatus="success"
                        rules={[{required: true, message: 'Please input your Username!'}]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               size='large'
                               placeholder="Username"
                               id="user"
                               name="user"
                               onChange={formik.handleChange}
                               value={formik.values.user}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        hasFeedback
                        validateStatus="success"
                        rules={[{required: true, message: 'Please input your Password!'}]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            size='large'
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}/>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                            Sign in
                        </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/register'>Register</Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;

type FormValues = {
   user: string
   password: string
}
