import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobView />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Job</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
