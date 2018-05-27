// @flow
/*
 * Test actions for entity Region 
 *
*/

import {
  REGION_ADD,
  REGION_ADD_SUCCESS,
  REGION_ADD_FAIL,
  REGION_SAVE,
  REGION_SAVE_SUCCESS,
  REGION_SAVE_FAIL,
  REGION_UPDATE,
  REGION_UPDATE_SUCCESS,
  REGION_UPDATE_FAIL,
  REGION_GET,
  REGION_GET_SUCCESS,
  REGION_GET_FAIL,
  REGION_SEARCH,
  REGION_SEARCH_SUCCESS,
  REGION_SEARCH_FAIL,
  addRegion,
  addRegionSuccess,
  addRegionFail,
  saveRegion,
  saveRegionSuccess,
  saveRegionFail,
  updateRegion,
  updateRegionSuccess,
  updateRegionFail,
  getRegion,
  getRegionSuccess,
  getRegionFail,
  searchRegion,
  searchRegionSuccess,
  searchRegionFail
} from "..";
import type {
  REGION_ADD_TYPE,
  REGION_ADD_SUCCESS_TYPE,
  REGION_ADD_FAIL_TYPE,
  REGION_SAVE_TYPE,
  REGION_SAVE_SUCCESS_TYPE,
  REGION_SAVE_FAIL_TYPE,
  REGION_UPDATE_TYPE,
  REGION_UPDATE_SUCCESS_TYPE,
  REGION_UPDATE_FAIL_TYPE,
  REGION_GET_TYPE,
  REGION_GET_SUCCESS_TYPE,
  REGION_GET_FAIL_TYPE,
  REGION_SEARCH_TYPE,
  REGION_SEARCH_SUCCESS_TYPE,
  REGION_SEARCH_FAIL_TYPE
} from "..";

describe("Region Actions", () => {
  describe("addRegion", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const form = "REGION_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: REGION_ADD,
        payload: region,
        form: form,
        promise: promise
      };

      expect(addRegion(region, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addRegionSuccess", () => {
    it("should return the correct action with results", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const expectedResult = {
        type: REGION_ADD_SUCCESS,
        payload: region
      };

      expect(addRegionSuccess(region)).toEqual(expectedResult);
    });
  });

  describe("addRegionFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: REGION_ADD_FAIL,
        error: error
      };

      expect(addRegionFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveRegion", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const form = "REGION_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: REGION_SAVE,
        payload: region,
        form: form,
        promise: promise
      };

      expect(saveRegion(region, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveRegionSuccess", () => {
    it("should return the correct action with results", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const expectedResult = {
        type: REGION_SAVE_SUCCESS,
        payload: region
      };

      expect(saveRegionSuccess(region)).toEqual(expectedResult);
    });
  });

  describe("saveRegionFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: REGION_SAVE_FAIL,
        error: error
      };

      expect(saveRegionFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateRegion", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const form = "REGION_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: REGION_UPDATE,
        payload: region,
        form: form,
        promise: promise
      };

      expect(updateRegion(region, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateRegionSuccess", () => {
    it("should return the correct action with results", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const expectedResult = {
        type: REGION_UPDATE_SUCCESS,
        payload: region
      };

      expect(updateRegionSuccess(region)).toEqual(expectedResult);
    });
  });

  describe("updateRegionFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: REGION_UPDATE_FAIL,
        error: error
      };

      expect(updateRegionFail(error)).toEqual(expectedResult);
    });
  });

  describe("getRegion", () => {
    it("should return the correct action with Region ID", () => {
      const regionId = "95e0e7aa-6679-423b-930a-7c0a284836ec";
      const expectedResult = {
        type: REGION_GET,
        payload: regionId
      };

      expect(getRegion(regionId)).toEqual(expectedResult);
    });
  });

  describe("getRegionSuccess", () => {
    it("should return the correct action with results", () => {
      const region = {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      };
      const expectedResult = {
        type: REGION_GET_SUCCESS,
        payload: region
      };

      expect(getRegionSuccess(region)).toEqual(expectedResult);
    });
  });

  describe("getRegionFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: REGION_GET_FAIL,
        error: error
      };

      expect(getRegionFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchRegion", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "REGION_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: REGION_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchRegion(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchRegionSuccess", () => {
    it("should return the correct action with results", () => {
      const regions = [
        {
          _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
          regionName: "South-east Asia"
        },
        { _id: "11bdc542-351f-4844-8768-5f84bd84f5f7", regionName: "Africa" },
        {
          _id: "83c34b6f-fff9-412a-a8f2-31fb358b2881",
          regionName: "Eastern Europe"
        }
      ];
      const expectedResult = {
        type: REGION_SEARCH_SUCCESS,
        payload: regions
      };

      expect(searchRegionSuccess(regions)).toEqual(expectedResult);
    });
  });

  describe("searchRegionFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: REGION_SEARCH_FAIL,
        error: error
      };

      expect(searchRegionFail(error)).toEqual(expectedResult);
    });
  });
});
