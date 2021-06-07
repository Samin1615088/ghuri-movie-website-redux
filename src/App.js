import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  let user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user.uid)
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        )
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [])

  return (
    <Router>
      {
        (!user) ?
          (<LoginScreen />)
          :
          (<Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>)
      }

    </Router>
  );
}

export default App;
