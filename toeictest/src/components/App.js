import React from "react";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Header from "./Header";
import WrittingTest from "./WrittingTest";
import AudioTest from "./AudioTest";
import About from "./About";
// import { Container } from "react-bootstrap";

import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <React.Fragment>
      {/* <AuthProvider>
        <Router>
          
        </Router>
      </AuthProvider> */}

      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            {" "}
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/writting-test" component={WrittingTest} />
            <Route path="/about" component={About} />
            <Route path="/audio-test" component={AudioTest} />
          </Switch>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
