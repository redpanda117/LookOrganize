import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyCalendar from "./pages/Calendar";
import Ideas from "./pages/Ideas";
import Finance from "./pages/Finance";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path= "/Schedule/:id" component={MyCalendar}/>
        <Route exact path = "/Finance/:id" component={Finance}/>
        <Route exact path="/Ideas" component={Ideas} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
