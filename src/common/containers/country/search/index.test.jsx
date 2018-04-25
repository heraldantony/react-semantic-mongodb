import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountrySearch from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountrySearch />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountrySearch />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Countries</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
