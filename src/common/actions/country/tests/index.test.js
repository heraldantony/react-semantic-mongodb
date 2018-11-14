// @flow
/*
 * Test actions for entity Country 
 *
*/

import {
  COUNTRY_ADD,
  COUNTRY_ADD_SUCCESS,
  COUNTRY_ADD_FAIL,
  COUNTRY_SAVE,
  COUNTRY_SAVE_SUCCESS,
  COUNTRY_SAVE_FAIL,
  COUNTRY_UPDATE,
  COUNTRY_UPDATE_SUCCESS,
  COUNTRY_UPDATE_FAIL,
  COUNTRY_GET,
  COUNTRY_GET_SUCCESS,
  COUNTRY_GET_FAIL,
  COUNTRY_SEARCH,
  COUNTRY_SEARCH_SUCCESS,
  COUNTRY_SEARCH_FAIL,
  COUNTRY_SET_REGION_SUCCESS,
  addCountry,
  addCountrySuccess,
  addCountryFail,
  saveCountry,
  saveCountrySuccess,
  saveCountryFail,
  updateCountry,
  updateCountrySuccess,
  updateCountryFail,
  getCountry,
  getCountrySuccess,
  getCountryFail,
  searchCountry,
  searchCountrySuccess,
  searchCountryFail,
  setRegion
} from "..";
import type {
  COUNTRY_ADD_TYPE,
  COUNTRY_ADD_SUCCESS_TYPE,
  COUNTRY_ADD_FAIL_TYPE,
  COUNTRY_SAVE_TYPE,
  COUNTRY_SAVE_SUCCESS_TYPE,
  COUNTRY_SAVE_FAIL_TYPE,
  COUNTRY_UPDATE_TYPE,
  COUNTRY_UPDATE_SUCCESS_TYPE,
  COUNTRY_UPDATE_FAIL_TYPE,
  COUNTRY_GET_TYPE,
  COUNTRY_GET_SUCCESS_TYPE,
  COUNTRY_GET_FAIL_TYPE,
  COUNTRY_SEARCH_TYPE,
  COUNTRY_SEARCH_SUCCESS_TYPE,
  COUNTRY_SEARCH_FAIL_TYPE,
  COUNTRY_SET_REGION_SUCCESS_TYPE
} from "..";

describe("Country Actions", () => {
  describe("addCountry", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const form = "COUNTRY_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: COUNTRY_ADD,
        payload: country,
        form: form,
        promise: promise
      };

      expect(addCountry(country, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addCountrySuccess", () => {
    it("should return the correct action with results", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = {
        type: COUNTRY_ADD_SUCCESS,
        payload: country
      };

      expect(addCountrySuccess(country)).toEqual(expectedResult);
    });
  });

  describe("addCountryFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: COUNTRY_ADD_FAIL,
        error: error
      };

      expect(addCountryFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveCountry", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const form = "COUNTRY_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: COUNTRY_SAVE,
        payload: country,
        form: form,
        promise: promise
      };

      expect(saveCountry(country, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveCountrySuccess", () => {
    it("should return the correct action with results", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = {
        type: COUNTRY_SAVE_SUCCESS,
        payload: country
      };

      expect(saveCountrySuccess(country)).toEqual(expectedResult);
    });
  });

  describe("saveCountryFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: COUNTRY_SAVE_FAIL,
        error: error
      };

      expect(saveCountryFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateCountry", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const form = "COUNTRY_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: COUNTRY_UPDATE,
        payload: country,
        form: form,
        promise: promise
      };

      expect(updateCountry(country, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateCountrySuccess", () => {
    it("should return the correct action with results", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = {
        type: COUNTRY_UPDATE_SUCCESS,
        payload: country
      };

      expect(updateCountrySuccess(country)).toEqual(expectedResult);
    });
  });

  describe("updateCountryFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: COUNTRY_UPDATE_FAIL,
        error: error
      };

      expect(updateCountryFail(error)).toEqual(expectedResult);
    });
  });

  describe("getCountry", () => {
    it("should return the correct action with Country ID", () => {
      const countryId = "5beba8c9d42cea39441eb478";
      const expectedResult = {
        type: COUNTRY_GET,
        payload: countryId
      };

      expect(getCountry(countryId)).toEqual(expectedResult);
    });
  });

  describe("getCountrySuccess", () => {
    it("should return the correct action with results", () => {
      const country = {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = {
        type: COUNTRY_GET_SUCCESS,
        payload: country
      };

      expect(getCountrySuccess(country)).toEqual(expectedResult);
    });
  });

  describe("getCountryFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: COUNTRY_GET_FAIL,
        error: error
      };

      expect(getCountryFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchCountry", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "COUNTRY_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: COUNTRY_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchCountry(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchCountrySuccess", () => {
    it("should return the correct action with results", () => {
      const countries = [
        {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "5beba8c9d42cea39441eb479",
          countryName: "Seychelles",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        },
        {
          _id: "5beba8c9d42cea39441eb47a",
          countryName: "Sri Lanka",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        }
      ];
      const expectedResult = {
        type: COUNTRY_SEARCH_SUCCESS,
        payload: countries,
        total: countries.length
      };

      expect(searchCountrySuccess(countries, countries.length)).toEqual(
        expectedResult
      );
    });
  });

  describe("searchCountryFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: COUNTRY_SEARCH_FAIL,
        error: error
      };

      expect(searchCountryFail(error)).toEqual(expectedResult);
    });
  });

  describe("setRegion", () => {
    it("should return the correct action with region", () => {
      const region = {
        _id: "5beba8c9d42cea39441eb46e",
        regionName: "South-east Asia"
      };
      const expectedResult = {
        type: COUNTRY_SET_REGION_SUCCESS,
        region
      };

      expect(setRegion(region)).toEqual(expectedResult);
    });
  });
});
