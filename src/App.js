
import "./App.css";
import React from "react";
import BasicLayout from "./layouts/BasicLayout";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/" component={BasicLayout} />
          <Route path="/view-list"  component={BasicLayout} />
          <Route path="/edit-list" component={BasicLayout} />
          <Route path="/calculator" component={BasicLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
