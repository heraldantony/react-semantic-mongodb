import { configureApp } from "app";
import rootReducer from "reducers";
import { getRoutes, history } from "routing";

describe("configureApp", () => {
  const routes = getRoutes();
  const initialState = {};
  const preloadedState = rootReducer({})(undefined, {});
  const result = configureApp(initialState);

  it("has same history", () => {
    expect(result.history).toEqual(history);
  });

  it("has same routes", () => {
    expect(result.routes).toEqual(routes);
  });

  it("has same preloadedState", () => {
    expect(result.store.getState()).toEqual(preloadedState);
  });
});
