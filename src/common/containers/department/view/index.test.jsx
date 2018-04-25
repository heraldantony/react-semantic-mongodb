import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentView />
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
