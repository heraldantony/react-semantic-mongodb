import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EmployeeSearch from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<EmployeeSearch />", () => {
  it("should render EmployeeSearch", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <EmployeeSearch />
      </Provider>
    );
    expect(renderedComponent.contains(<EmployeeSearch />)).toBe(true);
  });
});
