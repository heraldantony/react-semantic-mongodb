// @flow
import { fromJS } from "immutable";

import {
  addRegion,
  addRegionSuccess,
  addRegionFail,
  saveRegion,
  saveRegionSuccess,
  saveRegionFail,
  updateRegion,
  updateRegionSuccess,
  updateRegionFail,
  searchRegion,
  searchRegionSuccess,
  searchRegionFail,
  getRegion,
  getRegionSuccess,
  getRegionFail
} from "common/actions/region";
import { regionReducer } from "common/reducers/region";

describe("Region Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      region: {},
      regions: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchRegions: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(regionReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addRegionSuccess", () => {
    it("should update state with add results", () => {
      const region = {
        _id: "5b254369063db83598df2ce0",
        regionName: "South-east Asia"
      };
      const expectedResult = { ...state, region: region };

      expect(regionReducer(state, addRegionSuccess(region))).toEqual(
        expectedResult
      );
    });
  });

  describe("addRegionFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(regionReducer(state, addRegionFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveRegionSuccess", () => {
    it("should update state with save results", () => {
      const region = {
        _id: "5b254369063db83598df2ce0",
        regionName: "South-east Asia"
      };
      const expectedResult = { ...state, region: region };

      expect(regionReducer(state, saveRegionSuccess(region))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveRegionFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(regionReducer(state, saveRegionFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateRegionSuccess", () => {
    it("should update state with update results", () => {
      const region = {
        _id: "5b254369063db83598df2ce0",
        regionName: "South-east Asia"
      };
      const expectedResult = { ...state, region: region };

      expect(regionReducer(state, updateRegionSuccess(region))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateRegionFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(regionReducer(state, updateRegionFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchRegionSuccess", () => {
    it("should update state with search results", () => {
      const regions = [
        { _id: "5b254369063db83598df2ce0", regionName: "South-east Asia" },
        { _id: "5b254369063db83598df2ce1", regionName: "Africa" },
        { _id: "5b254369063db83598df2ce2", regionName: "Eastern Europe" }
      ];
      const expectedResult = { ...state, regions: regions };

      expect(regionReducer(state, searchRegionSuccess(regions))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchRegionFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(regionReducer(state, searchRegionFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getRegionSuccess", () => {
    it("should update state with get results", () => {
      const region = {
        _id: "5b254369063db83598df2ce0",
        regionName: "South-east Asia"
      };
      const expectedResult = { ...state, region: region };

      expect(regionReducer(state, getRegionSuccess(region))).toEqual(
        expectedResult
      );
    });
  });

  describe("getRegionFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(regionReducer(state, getRegionFail(error))).toEqual(
        expectedResult
      );
    });
  });
});
