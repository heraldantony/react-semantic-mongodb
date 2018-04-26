import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentAdd from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentAdd />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentAdd />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Department</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
