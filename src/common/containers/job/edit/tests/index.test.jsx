import React from "react";
import { Helmet } from "react-helmet";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import JobEdit from "../index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<JobEdit />", () => {
  it("should render the JobEdit", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <JobEdit />
      </Provider>
    );
    expect(renderedComponent.contains(<JobEdit />)).toBe(true);
  });
});
