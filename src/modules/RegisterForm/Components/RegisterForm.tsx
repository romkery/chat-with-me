import React, {useState} from 'react';
import {Form, Input} from "antd";
import {InfoCircleTwoTone, LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Router} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Block from "../../../components/Block/Block";
import "./../../../pages/Auth/Auth.scss"
import {FormikErrors, useFormik} from "formik";

const RegisterForm = () => {

    const [success, setSuccess] = useState(true)

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
        },

        validateOnChange: true,

        validate: (values: FormValues) => {

            let errors: FormikErrors<FormValues> = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.username) {
                errors.username = 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Required';
            }


            return errors;
        },

        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>To enter the chat, you need to register</p>
                </div>
                {success ?
                    <Block>
                        <Form
                            name="register"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={formik.handleSubmit}>
                            <Form.Item
                                name="email"
                                hasFeedback
                                validateStatus={!formik.touched.email ? '' : formik.errors.email ? 'error' : 'success'}
                                rules={[{required: true, message: 'Please input your E-mail!'}]}>
                                <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                       placeholder='E-Mail'
                                       type="email"
                                       size='large'
                                       name="email"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.email}/>
                            </Form.Item>

                            <Form.Item
                                name="user"
                                hasFeedback
                                validateStatus={!formik.touched.username ? '' : formik.errors.username ? 'error' : 'success'}
                                rules={[{required: true, message: 'Please input your Name!'}]}>
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="user"
                                    size='large'
                                    placeholder="Your name"
                                    name="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                hasFeedback
                                validateStatus={!formik.touched.password ? '' : formik.errors.password ? 'error' : 'success'}
                                rules={[{required: true, message: 'Please input your Password!'}]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    size='large'
                                    placeholder="Password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}/>
                            </Form.Item>

                            <Form.Item
                                name="password-repeat"
                                hasFeedback
                                validateStatus={!formik.touched.repeatPassword ? '' : formik.errors.repeatPassword ? 'error' : 'success'}
                                rules={[{required: true, message: 'Please input your Password!'}]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    size='large'
                                    placeholder="Repeat password"
                                    name="repeatPassword"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.repeatPassword}/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                                    Register
                                </Button>
                            </Form.Item>
                            <Link className='auth__register-link' to='/login'>Sign in</Link>
                        </Form>
                    </Block>
                    :
                    <Block>
                        <div className="auth__success-block">
                            <InfoCircleTwoTone/>
                            <h2>Verify your account</h2>
                            <p>An email has been sent to your email address with a confirmation link.</p>
                        </div>
                    </Block>
                }
            </div>

        </>
    );
};

export default RegisterForm;

type FormValues = {
    email: string
    username: string
    password: string
    repeatPassword: string
}
