import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationSearch from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationSearch />", () => {
  it("should render LocationSearch", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationSearch />
      </Provider>
    );
    expect(renderedComponent.contains(<LocationSearch />)).toBe(true);
  });
});
