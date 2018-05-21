import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationSearch from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationSearch />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationSearch />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Locations</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
