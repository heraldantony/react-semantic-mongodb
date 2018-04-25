import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import TaskSearch from "./index.jsx";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<TaskSearch />", () => {
  it("should render the header", () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <TaskSearch />
      </Provider>
    );
    expect(
      renderedComponent.contains(
        <Helmet>
          <title>Tasks</title>
        </Helmet>
      )
    ).toBe(true);
  });
});
