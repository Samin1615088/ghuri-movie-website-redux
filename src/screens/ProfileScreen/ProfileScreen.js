import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from './../../firebase';

import './ProfileScreen.css'
const ProfileScreen = () => {
    let user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="profileScreen">
            <NavBar />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <hr />
                <div className="profileScreen__info">
                    <div className="profileScreen__col-1">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
                    </div>
                    <div className="profileScreen__col-2">
                        <div className="profileScreen__details">
                            <input type="email" placeholder="" value={user.email} disabled />
                            <h3>Plans (Current Plan: premium)</h3>
                            <hr />
                            <h4>Renewal date: 04/03/2022</h4>
                        </div>
                        <div className="profileScreen__allPackages">

                            <div className="profileScreen__package">
                                <div className="profileScreen__packageName">
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>
                                <button className="profileScreen__button">Subscribe</button>
                            </div>

                            <div className="profileScreen__package">
                                <div className="profileScreen__packageName">
                                    <p>Netflix Basic</p>
                                    <p>480p</p>
                                </div>

                                <button className="profileScreen__button">Subscribe</button>

                            </div>

                            <div className="profileScreen__package">
                                <div className="profileScreen__packageName">
                                    <p>Netflix Premium</p>
                                    <p>1080p</p>
                                </div>

                                <button className="profileScreen__button button--active">Current Package</button>
                            </div>
                            <button className="profileScreen__signout" 
                            onClick={() =>{
                                auth.signOut();
                                history.push('/')
                            }}
                            >Sign Out</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;