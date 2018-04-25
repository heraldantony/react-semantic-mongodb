import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountryEdit from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountryEdit />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountryEdit />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Country</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
