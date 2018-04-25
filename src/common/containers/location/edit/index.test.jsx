import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LocationEdit from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<LocationEdit />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LocationEdit />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Location</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
