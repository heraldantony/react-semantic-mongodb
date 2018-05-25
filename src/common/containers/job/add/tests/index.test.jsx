import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobAdd from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobAdd />", () => {
  it("should render JobAdd", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobAdd />
      </Provider>
    );
    expect(renderedComponent.contains(<JobAdd />)).toBe(true);
  });
});
