import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Block from "../../../components/Block/Block";
import "./../../../pages/Auth/Auth.scss"
// @ts-ignore
import validateForm from './../../../utils/helpers/validate'
// @ts-ignore
import validateField from './../../../utils/helpers/validateField'
import {FormikErrors, useFormik} from "formik";

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnChange: true,
        validate: (values: FormValues) => {

            let errors: FormikErrors<FormValues> = {}
            validateForm({isAuth: true, values, errors})

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
                        name="email"
                        hasFeedback
                        validateStatus={validateField('email', formik)}
                        help={!formik.touched.email ? '' : formik.errors.email}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               size='large'
                               placeholder="E-mail"
                               id="email"
                               name="email"
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}
                               value={formik.values.email}/>
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
                            onBlur={formik.handleBlur}
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
    email: string
    password: string
}
