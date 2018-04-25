import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskView />
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
