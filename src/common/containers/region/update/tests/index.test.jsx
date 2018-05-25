import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import RegionUpdate from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegionUpdate />", () => {
  it("should render RegionUpdate", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <RegionUpdate />
      </Provider>
    );
    expect(renderedComponent.contains(<RegionUpdate />)).toBe(true);
  });
});
