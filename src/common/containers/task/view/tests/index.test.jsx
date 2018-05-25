import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskView from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskView />", () => {
  it("should render TaskView", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskView />
      </Provider>
    );
    expect(renderedComponent.contains(<TaskView />)).toBe(true);
  });
});
