import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentUpdate />", () => {
  it("should render DepartmentUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<DepartmentUpdate />)).toBe(true);
  });
});
