import React from "react";
import Signup from "./auth/Signup.js";
import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import Header from "./Header";
import WrittingTest from "./WrittingTest";
import About from "./About";

import AudioMain from "./audio/AudioMain";

import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            {" "}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/writting-test" component={WrittingTest} />
            <Route path="/about" component={About} />
            <Route exact path="/audio-test" component={AudioMain} />
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
