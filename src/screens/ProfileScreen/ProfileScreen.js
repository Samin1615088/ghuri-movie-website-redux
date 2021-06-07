import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import logo from './../../images/logo.png';

import './ProfileScreen.css'
const ProfileScreen = () => {
    return (
        <div className="profileScreen">
            <NavBar />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;