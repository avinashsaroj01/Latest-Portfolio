// Tooltip.js
import React from "react";
import classes from "./Tooltip.module.css";
const Tooltip = ({ children, text }) => {
  return (
    <span className={classes.tooltip} data-tooltip={text}>
      {children}
    </span>
  );
};

export default Tooltip;
