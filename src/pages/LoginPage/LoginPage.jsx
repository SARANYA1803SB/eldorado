import React from 'react';
import Header from '../../components/Header/Header';
import Navigationbar from '../../components/Navigationbar/Navigationbar';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
    return(
        <div className="login-page">
            <Header/>
            <Navigationbar/>
            <LoginForm/>
        </div>
)};

export default LoginPage;