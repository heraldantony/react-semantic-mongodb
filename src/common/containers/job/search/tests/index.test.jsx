import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobSearch from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobSearch />", () => {
  it("should render JobSearch", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobSearch />
      </Provider>
    );
    expect(renderedComponent.contains(<JobSearch />)).toBe(true);
  });
});
