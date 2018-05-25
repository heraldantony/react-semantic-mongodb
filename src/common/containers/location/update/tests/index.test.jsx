import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationUpdate />", () => {
  it("should render LocationUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<LocationUpdate />)).toBe(true);
  });
});
