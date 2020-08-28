import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import {PrivateRoute} from './components/axiosWithAuth/PrivateRoute';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblepage' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;