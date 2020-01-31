import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/axiosWithAuth/PrivateRoute';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  useEffect( () => {
    setIsLoggedIn(isLoggedIn === false ? false : true);
  }, []);
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login} setIsLoggedIn={setIsLoggedIn} />
        <PrivateRoute exact path="/bubbles"  isLoggedIn={isLoggedIn} component={BubblePage}/>
      </Switch>
      </div>
    </Router>
  );
}
export default App;