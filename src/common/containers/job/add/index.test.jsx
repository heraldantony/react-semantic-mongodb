import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobAdd from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobAdd />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobAdd />
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
