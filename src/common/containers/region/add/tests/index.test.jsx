import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import RegionAdd from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegionAdd />", () => {
  it("should render RegionAdd", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <RegionAdd />
      </Provider>
    );
    expect(renderedComponent.contains(<RegionAdd />)).toBe(true);
  });
});
