import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import EmployeeView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<EmployeeView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <EmployeeView />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Employee</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
