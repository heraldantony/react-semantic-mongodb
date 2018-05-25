// @flow
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { asyncComponent } from "react-async-component";
import { Loader, Dimmer, Header, Icon } from "semantic-ui-react";
import RouteAuth from "components/addons/RouteAuth";
import _ from "lodash";
import { isLoggedIn } from "api/LocalStorageCookiesSvc";
import type { RouteItem } from "types";

function asyncComponentCreator(url) {
  return asyncComponent({
    // flow-disable-next-line: The parameter passed to import() must be a literal string
    resolve: () =>
      import(/* webpackChunkName:"[index].[request]" */ `containers/${url}/index.jsx`),
    LoadingComponent() {
      return (
        <Dimmer active>
          <Loader size="large" active>
            Loading page...
          </Loader>
        </Dimmer>
      );
    },
    ErrorComponent() {
      return (
        <Dimmer active>
          <Header inverted as="h2" icon textAlign="center">
            <Icon name="refresh" />
            Refresh
            <Header.Subheader>Got error while loading page.</Header.Subheader>
          </Header>
        </Dimmer>
      );
    },
    autoResolveES2015Default: true,
    env: process.env.BROWSER ? "browser" : "node",
    serverMode: "resolve"
  });
}

function routingFnCreator(
  useFor: "sidebar" | "routing" | "meta" | "all" = "all"
) {
  const [
    AsyncDashboard,
    AsyncLogin,
    AsyncSignup,
    AsyncRegionSearch,
    AsyncRegionAdd,
    AsyncRegionEdit,
    AsyncRegionView,
    AsyncCountrySearch,
    AsyncCountryAdd,
    AsyncCountryEdit,
    AsyncCountryView,
    AsyncLocationSearch,
    AsyncLocationAdd,
    AsyncLocationEdit,
    AsyncLocationView,
    AsyncDepartmentSearch,
    AsyncDepartmentAdd,
    AsyncDepartmentEdit,
    AsyncDepartmentView,
    AsyncEmployeeSearch,
    AsyncEmployeeAdd,
    AsyncEmployeeEdit,
    AsyncEmployeeView,
    AsyncJobSearch,
    AsyncJobAdd,
    AsyncJobEdit,
    AsyncJobView,
    AsyncTaskSearch,
    AsyncTaskAdd,
    AsyncTaskEdit,
    AsyncTaskView,
    AsyncNotFound
  ] = [
    "Dashboard",
    "login",
    "signup",
    "region/search",
    "region/add",
    "region/edit",
    "region/view",
    "country/search",
    "country/add",
    "country/edit",
    "country/view",
    "location/search",
    "location/add",
    "location/edit",
    "location/view",
    "department/search",
    "department/add",
    "department/edit",
    "department/view",
    "employee/search",
    "employee/add",
    "employee/edit",
    "employee/view",
    "job/search",
    "job/add",
    "job/edit",
    "job/view",
    "task/search",
    "task/add",
    "task/edit",
    "task/view",
    "NotFound"
  ].map(a => asyncComponentCreator(a));

  const sidebarExternalLinks = [];

  const routes: Array<RouteItem> = [
    {
      path: "/",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncDashboard,
      meta: {
        icon: "newspaper",
        name: "Dashboard",
        sidebarVisible: true
      }
    },
    {
      path: "/auth",
      exact: true,
      tag: Route,
      component: AsyncLogin,
      meta: {
        name: "Auth"
      }
    },
    {
      path: "/signup",
      exact: true,
      tag: Route,
      component: AsyncSignup,
      meta: {
        name: "Signup"
      }
    },
    {
      path: "/region",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncRegionSearch,
      meta: {
        name: "Region",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addRegion",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncRegionAdd,
      meta: {
        name: "Add Region",
        sidebarVisible: false
      }
    },
    {
      path: "/editRegion/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncRegionEdit,
      meta: {
        name: "Edit Region",
        sidebarVisible: false
      }
    },
    {
      path: "/viewRegion/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncRegionView,
      meta: {
        name: "View Region",
        sidebarVisible: false
      }
    },
    {
      path: "/country",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncCountrySearch,
      meta: {
        name: "Country",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addCountry",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncCountryAdd,
      meta: {
        name: "Add Country",
        sidebarVisible: false
      }
    },
    {
      path: "/editCountry/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncCountryEdit,
      meta: {
        name: "Edit Country",
        sidebarVisible: false
      }
    },
    {
      path: "/viewCountry/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncCountryView,
      meta: {
        name: "View Country",
        sidebarVisible: false
      }
    },
    {
      path: "/location",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncLocationSearch,
      meta: {
        name: "Location",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addLocation",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncLocationAdd,
      meta: {
        name: "Add Location",
        sidebarVisible: false
      }
    },
    {
      path: "/editLocation/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncLocationEdit,
      meta: {
        name: "Edit Location",
        sidebarVisible: false
      }
    },
    {
      path: "/viewLocation/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncLocationView,
      meta: {
        name: "View Location",
        sidebarVisible: false
      }
    },
    {
      path: "/department",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncDepartmentSearch,
      meta: {
        name: "Department",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addDepartment",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncDepartmentAdd,
      meta: {
        name: "Add Department",
        sidebarVisible: false
      }
    },
    {
      path: "/editDepartment/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncDepartmentEdit,
      meta: {
        name: "Edit Department",
        sidebarVisible: false
      }
    },
    {
      path: "/viewDepartment/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncDepartmentView,
      meta: {
        name: "View Department",
        sidebarVisible: false
      }
    },
    {
      path: "/employee",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncEmployeeSearch,
      meta: {
        name: "Employee",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addEmployee",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncEmployeeAdd,
      meta: {
        name: "Add Employee",
        sidebarVisible: false
      }
    },
    {
      path: "/editEmployee/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncEmployeeEdit,
      meta: {
        name: "Edit Employee",
        sidebarVisible: false
      }
    },
    {
      path: "/viewEmployee/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncEmployeeView,
      meta: {
        name: "View Employee",
        sidebarVisible: false
      }
    },
    {
      path: "/job",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncJobSearch,
      meta: {
        name: "Job",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addJob",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncJobAdd,
      meta: {
        name: "Add Job",
        sidebarVisible: false
      }
    },
    {
      path: "/editJob/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncJobEdit,
      meta: {
        name: "Edit Job",
        sidebarVisible: false
      }
    },
    {
      path: "/viewJob/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncJobView,
      meta: {
        name: "View Job",
        sidebarVisible: false
      }
    },
    {
      path: "/task",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncTaskSearch,
      meta: {
        name: "Task",
        icon: "bookmark",
        sidebarVisible: true
      }
    },
    {
      path: "/addTask",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncTaskAdd,
      meta: {
        name: "Add Task",
        sidebarVisible: false
      }
    },
    {
      path: "/editTask/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncTaskEdit,
      meta: {
        name: "Edit Task",
        sidebarVisible: false
      }
    },
    {
      path: "/viewTask/:id",
      exact: true,
      tag: RouteAuth,
      canAccess: isLoggedIn,
      component: AsyncTaskView,
      meta: {
        name: "View Task",
        sidebarVisible: false
      }
    },
    // Find the way to add/remove routes conditionally
    {
      tag: Route,
      component: AsyncNotFound,
      meta: {
        name: "404"
      }
    },
    {
      tag: Redirect,
      to: "/auth"
    }
  ];

  const fns = {
    // Returns routing for sidebar menu
    sidebar(x: Array<RouteItem> = routes.concat(sidebarExternalLinks)) {
      return x
        .filter(a => a.meta && a.meta.sidebarVisible)
        .map(a => _.pick(a, ["path", "meta", "external", "strict", "exact"]));
    },
    // Returns routing for React-Router
    routing(x: Array<RouteItem> = routes) {
      return x
        .filter(a => a.tag)
        .map(a =>
          _.pick(a, [
            "path",
            "strict",
            "exact",
            "component",
            "tag",
            "to",
            "canAccess"
          ])
        );
    },
    // Returns `meta` + path. used in Header
    meta(x: Array<RouteItem> = routes) {
      return x
        .filter(a => a.tag)
        .map(a => _.pick(a, ["path", "strict", "exact", "meta"]));
    },
    all() {
      return routes;
    }
  };

  return fns[useFor];
}

export const getRoutes = routingFnCreator();
export const getMetaRoutes = routingFnCreator("meta");
export const getSidebarRoutes = routingFnCreator("sidebar");
export const getRouterRoutes = routingFnCreator("routing");
