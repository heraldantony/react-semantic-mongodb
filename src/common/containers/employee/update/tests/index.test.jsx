import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EmployeeUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<EmployeeUpdate />", () => {
  it("should render EmployeeUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <EmployeeUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<EmployeeUpdate />)).toBe(true);
  });
});
