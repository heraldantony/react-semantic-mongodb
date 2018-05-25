import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentView from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentView />", () => {
  it("should render DepartmentView", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentView />
      </Provider>
    );
    expect(renderedComponent.contains(<DepartmentView />)).toBe(true);
  });
});
