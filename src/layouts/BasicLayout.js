import "./BasicLayout.css";
import React from "react";
import Header from "../components/Header";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Redirect,
  Switch
} from "react-router-dom";

const BasicLayout = () => {
  // by default the route is re directed to create page
  return (
    <div className="basic-component">
      <Header />
      <div className="bottom-part">
        <Switch>
         <Route
            path="/"
            exact

            render={() => <Redirect to="/view-list" />}
          />
          <Route path="/view-list" component={Create} />
          <Route path="/edit-list" component={Edit} />
          
        </Switch>
      </div>
    </div>
  );
};

export default BasicLayout;
