import React from "react";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Header from "./Header";
import WrittingTest from "./WrittingTest";
import AudioTestList from "./AudioTestList";
import About from "./About";
import AudioPlayer from "./AudioPlayer";
// import { Container } from "react-bootstrap";

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
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/writting-test" component={WrittingTest} />
            <Route path="/about" component={About} />
            <Route
              path="/audio-test"
              render={() => (
                <React.Fragment>
                  <AudioPlayer />
                  <AudioTestList />
                </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
