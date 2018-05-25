import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EmployeeAdd from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<EmployeeAdd />", () => {
  it("should render EmployeeAdd", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <EmployeeAdd />
      </Provider>
    );
    expect(renderedComponent.contains(<EmployeeAdd />)).toBe(true);
  });
});
