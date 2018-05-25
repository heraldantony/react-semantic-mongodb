import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobUpdate />", () => {
  it("should render JobUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<JobUpdate />)).toBe(true);
  });
});
