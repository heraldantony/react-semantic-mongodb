import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountryView from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountryView />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountryView />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Country</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
