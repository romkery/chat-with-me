import React, {useState} from 'react';
import {Form, Input} from 'antd';
import {InfoCircleTwoTone, LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import {Link, Router} from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Block from '../../../components/Block/Block';
import './../../../pages/Auth/Auth.scss';
import {FormikErrors, useFormik} from 'formik';
import validateForm from '../../../utils/helpers/validate';
import validateField from '../../../utils/helpers/validateField';

const RegisterForm = () => {

    const [success, setSuccess] = useState(true);

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            password2: '',
        },

        validateOnChange: true,

        validate: (values: FormValues) => {

            const errors: FormikErrors<FormValues> = {};
            validateForm({isAuth: false, values, errors});

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
                                validateStatus={validateField('email', formik)}
                                help={!formik.touched.email ? '' : formik.errors.email}>
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
                                validateStatus={validateField('username', formik)}
                                help={!formik.touched.username ? '' : formik.errors.username}>
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
                                validateStatus={validateField('password', formik)}
                                help={!formik.touched.password ? '' : formik.errors.password}>
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
                                validateStatus={validateField('password2', formik)}
                                help={!formik.touched.password2 ? '' : formik.errors.password2}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    size='large'
                                    placeholder="Repeat password"
                                    name="password2"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password2}/>
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
    password2: string
}
