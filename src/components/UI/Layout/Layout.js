import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const { fluid } = props;
  return (
    <div className={`${classes.layout} ${fluid ? classes.fluid : ""}`}>
      {props.children}
    </div>
  );
};

export default Layout;
