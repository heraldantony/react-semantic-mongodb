import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskEdit />", () => {
  it("should render the TaskEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<TaskEdit />)).toBe(true);
  });
});
