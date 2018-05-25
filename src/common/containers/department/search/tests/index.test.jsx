import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentSearch from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentSearch />", () => {
  it("should render DepartmentSearch", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentSearch />
      </Provider>
    );
    expect(renderedComponent.contains(<DepartmentSearch />)).toBe(true);
  });
});
