import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationView />
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
