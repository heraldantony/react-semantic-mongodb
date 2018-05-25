import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountryAdd from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountryAdd />", () => {
  it("should render CountryAdd", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountryAdd />
      </Provider>
    );
    expect(renderedComponent.contains(<CountryAdd />)).toBe(true);
  });
});
