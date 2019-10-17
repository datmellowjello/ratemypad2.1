import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./pages/Results";
import Place from "./pages/Place";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Results} />
          <Route exact path="/places" component={Results} />
          <Route exact path="/places/:id" component={Place} />
        </Switch>
      </div>
    </Router>
  );
}
