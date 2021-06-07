import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './SignupScreen.css';

const SignupScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                alert(error.message)
            });
        // emailRef.current.value = '';
        // passwordRef.current.value = '';
    }
    const signIn = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email)
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
        // emailRef.current.value = '';
        // passwordRef.current.value = '';
    }

    return (
        <div className="signupScreen">
            <form>
                <h2>Sign In</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={emailRef}
                    autoComplete="username"
                />

                <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    autoComplete="current-password"
                />

                <button onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Movie Mela? </span>
                    <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignupScreen;