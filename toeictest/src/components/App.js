import React from "react";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Header from "./Header";
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
          </Switch>
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
