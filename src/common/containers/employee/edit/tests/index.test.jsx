import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EmployeeEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<EmployeeEdit />", () => {
  it("should render the EmployeeEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <EmployeeEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<EmployeeEdit />)).toBe(true);
  });
});
