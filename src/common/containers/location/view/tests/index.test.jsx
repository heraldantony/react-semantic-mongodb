import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationView from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationView />", () => {
  it("should render LocationView", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationView />
      </Provider>
    );
    expect(renderedComponent.contains(<LocationView />)).toBe(true);
  });
});
