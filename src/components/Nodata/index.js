import "./index.css";
import React from "react";
// displayed on empty data
const NoData = (props) => {
  const { from } = props;
  return <div className="no-data">{from === "edit" ? "No Grocery Items Left!" : "Add Some Grocery Items!"}</div>;
};

export default NoData;
