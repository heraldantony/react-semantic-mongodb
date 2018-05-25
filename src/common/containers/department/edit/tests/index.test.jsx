import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentEdit />", () => {
  it("should render the DepartmentEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<DepartmentEdit />)).toBe(true);
  });
});
