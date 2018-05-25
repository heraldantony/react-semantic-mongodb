/**
 * @flow
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "api/LocalStorageCookiesSvc";

/**
 * Component that protects route from unauthorized users.
 */

type Props = {
  canAccess: string => boolean,
  path: string
};

const RouteAuth = (props: Props) => {
  var { canAccess, path } = props;
  const allowedToVisitPath = ["/auth", "/signup"];
  // FIXME - canAccess is undefined in some cases
  canAccess =
    (canAccess && canAccess(path)) ||
    isLoggedIn ||
    allowedToVisitPath.includes(path);
  return canAccess ? <Route {...props} /> : <Redirect to="/auth" />;
};

export default RouteAuth;
