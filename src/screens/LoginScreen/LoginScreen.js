import React from 'react';
import './LoginScreen.css';
import logo from './../../images/logo.png';
const LoginScreen = () => {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src={logo}
                    alt=""
                />
                <button
                    className="loginScreen__button"
                    onClick={() => console.log("clicked")}
                >Sign In</button>

                <div className="loginScreen__gradient" />
            </div>
            {/* put below things over loginScreen__background */}
            <div className="loginScreen__body">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h4><span>Ready to watch?  </span> Enter your email to create or restart your membership.
</h4>
            </div>
        </div>
    );
};

export default LoginScreen;