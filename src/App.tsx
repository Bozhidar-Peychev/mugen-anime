import React from "react";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/Books" render={() => <Books />} />
        <Route
          exact
          path="/Register"
          render={(props) => <Register {...props} />}
        />
        <Route exact path="/Login" render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
}
