import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import RegionEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegionEdit />", () => {
  it("should render the RegionEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <RegionEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<RegionEdit />)).toBe(true);
  });
});
