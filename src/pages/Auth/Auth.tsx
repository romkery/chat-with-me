import React, {useEffect, useState} from 'react';
import './Auth.scss';
import LoginForm from '../../modules/LoginForm/Components/LoginForm';
import RegisterForm from '../../modules/RegisterForm/Components/RegisterForm';
import {Route, Routes, useNavigate, useRoutes} from 'react-router-dom';
import Home from '../Home/Home';

const Auth = () => {

    const nav = useNavigate();
    const [isUser, setIsUser] = useState(true);
    const routes = useRoutes([
        {path: '/', element: <LoginForm/>},
        {path: '/login', element: <LoginForm/>},
        {path: 'register', element: <RegisterForm/>}
    ]);

    return (
        <>
            <div className='auth'>
                <div className='auth__content'>
                    {routes}
                </div>
            </div>
        </>
    );
};

export default Auth;