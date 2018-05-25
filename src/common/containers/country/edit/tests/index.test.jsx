import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import CountryEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<CountryEdit />", () => {
  it("should render the CountryEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <CountryEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<CountryEdit />)).toBe(true);
  });
});
