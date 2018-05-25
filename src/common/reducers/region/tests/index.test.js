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
        _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        {
          _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
          regionName: "South-east Asia"
        },
        { _id: "36d683a3-5cca-4e50-ab21-22e389320751", regionName: "Africa" },
        {
          _id: "cb39471b-3103-4801-8f0d-10618edfc7a7",
          regionName: "Eastern Europe"
        }
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
        _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
