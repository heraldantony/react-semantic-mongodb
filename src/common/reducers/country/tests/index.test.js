// @flow
import { fromJS } from "immutable";

import {
  addCountry,
  addCountrySuccess,
  addCountryFail,
  saveCountry,
  saveCountrySuccess,
  saveCountryFail,
  updateCountry,
  updateCountrySuccess,
  updateCountryFail,
  searchCountry,
  searchCountrySuccess,
  searchCountryFail,
  getCountry,
  getCountrySuccess,
  getCountryFail,
  setRegion
} from "common/actions/country";
import { countryReducer } from "common/reducers/country";

describe("Country Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      country: {},
      countries: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchCountries: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(countryReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addCountrySuccess", () => {
    it("should update state with add results", () => {
      const country = {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, addCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("addCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, addCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveCountrySuccess", () => {
    it("should update state with save results", () => {
      const country = {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, saveCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, saveCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateCountrySuccess", () => {
    it("should update state with update results", () => {
      const country = {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, updateCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, updateCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchCountrySuccess", () => {
    it("should update state with search results", () => {
      const countries = [
        {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "12ba3dec-6a84-4b74-963e-4e6028811605",
          countryName: "Isle of Man",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "18d43e05-d863-413b-9bbb-78bb9f631536",
          countryName: "Aruba",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      ];
      const expectedResult = { ...state, countries: countries };

      expect(countryReducer(state, searchCountrySuccess(countries))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, searchCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getCountrySuccess", () => {
    it("should update state with get results", () => {
      const country = {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = { ...state, country: country };

      expect(countryReducer(state, getCountrySuccess(country))).toEqual(
        expectedResult
      );
    });
  });

  describe("getCountryFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(countryReducer(state, getCountryFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("setRegion", () => {
    it("should update state with region", () => {
      const region = {
        _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
        regionName: "South-east Asia"
      };

      const expectedResult = {
        ...state,
        country: {
          ...state.country,
          region: region
        }
      };

      expect(countryReducer(state, setRegion(region))).toEqual(expectedResult);
    });
  });
});
