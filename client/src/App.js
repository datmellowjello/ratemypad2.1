import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./pages/Results";
import Search from "./pages/Search";
import Newnav from "./components/Newnav";

import Place from "./pages/Place";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
      <Newnav />
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/places/:id" component={Place} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}
