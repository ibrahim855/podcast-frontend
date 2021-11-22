import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { authActions } from "../context/auth/auth-slice";

function AutoLogin(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      const expiresIn = +localStorage.getItem("expiresIn");
      if (Date.now() > expiresIn) {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("expiresIn");
      } else {
        console.log("nice");
        dispatch(
          authActions.login({
            token,
            username,
          })
        );
        const diff = expiresIn - Date.now();
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          dispatch(authActions.logout());
        }, diff);
      }
    }
  }, [dispatch]);

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default AutoLogin;
