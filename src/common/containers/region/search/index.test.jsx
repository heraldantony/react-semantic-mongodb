import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import RegionSearch from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegionSearch />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <RegionSearch />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Regions</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
