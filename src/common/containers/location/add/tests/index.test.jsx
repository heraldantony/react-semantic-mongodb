import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationAdd from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationAdd />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationAdd />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Location</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
