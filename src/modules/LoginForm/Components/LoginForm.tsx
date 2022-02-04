import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Router} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Block from "../../../components/Block/Block";
import "./../../../pages/Auth/Auth.scss"

const LoginForm = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в аккаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        hasFeedback
                        validateStatus="success"
                        rules={[{required: true, message: 'Please input your Username!'}]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               size='large'
                               placeholder="Username"/>
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
                            placeholder="Password"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/register'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;
