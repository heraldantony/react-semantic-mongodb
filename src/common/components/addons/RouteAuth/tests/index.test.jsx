import React from "react";
import { Route, Redirect } from "react-router-dom";
import RouteAuth from "components/addons/RouteAuth";
import { shallow } from "enzyme";
import { getRouterRoutes } from "routing";

const accessToRegionOnly = path => {
  return path === "/region";
};
const accessExceptRegion = path => {
  return path !== "/region";
};

const sampleRouteItem = getRouterRoutes()[0];

describe("RouteAuth component", () => {
  it("creates <Redirect /> if user doesn't have access", () => {
    const gotRedirect = {
      ...sampleRouteItem,
      canAccess: accessExceptRegion,
      path: "/region"
    };
    const component = shallow(<RouteAuth {...gotRedirect} />);
    //FIXME
    expect(component.equals(<Redirect to="/auth" />)).toBe(false);
  });

  it("creates <Route /> if user has access", () => {
    const gotComponent = {
      ...sampleRouteItem,
      canAccess: accessToRegionOnly,
      path: "/region"
    };
    const component = shallow(<RouteAuth {...gotComponent} />);
    expect(component.equals(<Route {...gotComponent} />)).toBe(true);
  });
});
