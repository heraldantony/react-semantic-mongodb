import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountryUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountryUpdate />", () => {
  it("should render CountryUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountryUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<CountryUpdate />)).toBe(true);
  });
});
