import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let user = null;

  return (
    <Router>
      {
        (!user) ?
          (<LoginScreen />)
          :
          (<Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>)
      }

    </Router>
  );
}

export default App;
