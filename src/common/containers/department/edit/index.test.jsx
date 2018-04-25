import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import DepartmentEdit from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<DepartmentEdit />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <DepartmentEdit />
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
