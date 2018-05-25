import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskUpdate />", () => {
  it("should render TaskUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<TaskUpdate />)).toBe(true);
  });
});
