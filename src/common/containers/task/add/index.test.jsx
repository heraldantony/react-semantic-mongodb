import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskAdd from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskAdd />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskAdd />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Task</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
