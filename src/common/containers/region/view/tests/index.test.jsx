import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import RegionView from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegionView />", () => {
  it("should render RegionView", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <RegionView />
      </Provider>
    );
    expect(renderedComponent.contains(<RegionView />)).toBe(true);
  });
});
