import React from "react";
import { Link } from "react-router-dom";
import Header from "../headfoot/Header";
import Footer from "../headfoot/Footer";
import LoginForm from "./LoginForm";
import "./Login.scss";


const Login = () => {
    return (
        <>
            <Header />
            <div className="login-container">
                <div className="top-spacer"></div>

                <div className="login-inner-container">
                    <div className="login-left">
                        <h1>Get Inspired. <br/> Inspire Others.</h1>
                        <p>Discover designs to inject into your daily life</p>
                        <Link to='/Gallery'><button className="explore-button">Explore Designs</button></Link>
                    </div>

                    <div className="login-right">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
