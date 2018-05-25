import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskAdd from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskAdd />", () => {
  it("should render TaskAdd", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskAdd />
      </Provider>
    );
    expect(renderedComponent.contains(<TaskAdd />)).toBe(true);
  });
});
