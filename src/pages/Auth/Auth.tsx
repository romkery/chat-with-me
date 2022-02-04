import React, {useEffect, useState} from "react";
import "./Auth.scss"
import LoginForm from "../../modules/LoginForm/Components/LoginForm";
import RegisterForm from "../../modules/RegisterForm/Components/RegisterForm";
import {Route, Routes, useNavigate} from "react-router-dom";

const Auth = () => {

    const nav = useNavigate()
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        isUser ? nav('login') : nav('register')
    }, [])

    return (
        <>
            <div className='auth'>
                <div className='auth__content'>
                    <Routes>
                        <Route path="/login" element={<LoginForm/>}/>
                        <Route path='/register' element={<RegisterForm/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Auth