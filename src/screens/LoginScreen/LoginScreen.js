import React, { useState } from 'react';
import './LoginScreen.css';
import logo from './../../images/logo.png';
import SignupScreen from '../SignupScreen/SignupScreen';
const LoginScreen = () => {
    const [login, setLogin] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src={logo}
                    alt=""
                />
                {
                    !login && <button
                        className="loginScreen__button"
                        onClick={() => setLogin(!login)}
                    >Sign Up</button>
                }

                <div className="loginScreen__gradient" />
            </div>
            {/* put below things over loginScreen__background */}
            <div className="loginScreen__body">

                {
                    login ?
                        (<SignupScreen />)
                        :
                        (
                            <>
                                <h1>Unlimited movies, TV shows, and more.</h1>
                                <h2>Watch anywhere. Cancel anytime.</h2>
                                <h4><span>Ready to watch?  </span> Enter your email to create or restart your membership.</h4>

                                <div className="loginScreen__input">
                                    <form >
                                        <input type="email" placeholder="Email Address" />
                                        <button className="loginScreen__getStarted">GET STARTED</button>
                                    </form>
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    );
};

export default LoginScreen;