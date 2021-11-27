import "./index.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // navigation section of the app
  return (
    <div className="header-section-parent">
      <header>
        <div className="header-section">
          <div className="left-section">
            <NavLink
              to="/view-list"
              className="navigation"
              activeClassName="selected-nav"
              // className={isActive =>
              //   isActive ? "selected-nav" : "navigation"
              // }
            >
              View
            </NavLink>
            <NavLink
              to="/edit-list"
              className="navigation"
              activeClassName="selected-nav"
              // className={isActive =>
              //   isActive ? "selected-nav" : "navigation"
              // }
            >
              Edit
            </NavLink>
            <NavLink
              to="/calculator"
              className="navigation"
              activeClassName="selected-nav"
              // className={isActive =>
              //   isActive ? "selected-nav" : "navigation"
              // }
            >
              Calculator
            </NavLink>
          </div>
          <div className="right-section">GROCERY LIST</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
