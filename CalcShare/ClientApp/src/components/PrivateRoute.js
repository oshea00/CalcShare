import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect, getTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  useEffect(() => {
      const fn = async () => {
          const token = await getTokenSilently();
          setToken(token);
      };
      fn();
  },[token]);

  const render = props => isAuthenticated === true ? <Component {...props} idToken={token}
        isAuthenticated={isAuthenticated} /> : null;

    return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;