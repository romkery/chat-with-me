import React, {useState} from 'react';
import {Form, Input} from "antd";
import {InfoCircleTwoTone, LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Link, Router} from "react-router-dom";
import Button from "../../../components/Button/Button";
import Block from "../../../components/Block/Block";
import "./../../../pages/Auth/Auth.scss"

const RegisterForm = () => {

    const [success, setSuccess] = useState(true)

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                {success ?
                    <Block>
                        <Form
                            name="register"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={onFinish}>
                            <Form.Item
                                name="email"
                                hasFeedback
                                validateStatus="success"
                                rules={[{required: true, message: 'Please input your Email!'}]}>
                                <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                       placeholder='E-Mail'
                                       type="email"
                                       size='large'/>
                            </Form.Item>

                            <Form.Item
                                name="user"
                                hasFeedback
                                validateStatus="success"
                                rules={[{required: true, message: 'Please input your Name!'}]}>
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="user"
                                    size='large'
                                    placeholder="Ваше имя"/>
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
                                    placeholder="Пароль"/>
                            </Form.Item>

                            <Form.Item
                                name="password-repeat"
                                hasFeedback
                                validateStatus="success"
                                rules={[{required: true, message: 'Please input your Password!'}]}>
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    size='large'
                                    placeholder="Повторите пароль"/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size='large' className="login-form-button">
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link className='auth__register-link' to='/login'>Войти в аккаунт</Link>
                        </Form>
                    </Block>
                    :
                    <Block>
                        <div className="auth__success-block">
                            <InfoCircleTwoTone/>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение</p>
                        </div>
                    </Block>
                }
            </div>

        </>
    );
};

export default RegisterForm;
