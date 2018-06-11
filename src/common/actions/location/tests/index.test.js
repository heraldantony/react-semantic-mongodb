// @flow
/*
 * Test actions for entity Location 
 *
*/

import {
  LOCATION_ADD,
  LOCATION_ADD_SUCCESS,
  LOCATION_ADD_FAIL,
  LOCATION_SAVE,
  LOCATION_SAVE_SUCCESS,
  LOCATION_SAVE_FAIL,
  LOCATION_UPDATE,
  LOCATION_UPDATE_SUCCESS,
  LOCATION_UPDATE_FAIL,
  LOCATION_GET,
  LOCATION_GET_SUCCESS,
  LOCATION_GET_FAIL,
  LOCATION_SEARCH,
  LOCATION_SEARCH_SUCCESS,
  LOCATION_SEARCH_FAIL,
  LOCATION_SET_COUNTRY_SUCCESS,
  addLocation,
  addLocationSuccess,
  addLocationFail,
  saveLocation,
  saveLocationSuccess,
  saveLocationFail,
  updateLocation,
  updateLocationSuccess,
  updateLocationFail,
  getLocation,
  getLocationSuccess,
  getLocationFail,
  searchLocation,
  searchLocationSuccess,
  searchLocationFail,
  setCountry
} from "..";
import type {
  LOCATION_ADD_TYPE,
  LOCATION_ADD_SUCCESS_TYPE,
  LOCATION_ADD_FAIL_TYPE,
  LOCATION_SAVE_TYPE,
  LOCATION_SAVE_SUCCESS_TYPE,
  LOCATION_SAVE_FAIL_TYPE,
  LOCATION_UPDATE_TYPE,
  LOCATION_UPDATE_SUCCESS_TYPE,
  LOCATION_UPDATE_FAIL_TYPE,
  LOCATION_GET_TYPE,
  LOCATION_GET_SUCCESS_TYPE,
  LOCATION_GET_FAIL_TYPE,
  LOCATION_SEARCH_TYPE,
  LOCATION_SEARCH_SUCCESS_TYPE,
  LOCATION_SEARCH_FAIL_TYPE,
  LOCATION_SET_COUNTRY_SUCCESS_TYPE
} from "..";

describe("Location Actions", () => {
  describe("addLocation", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const form = "LOCATION_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: LOCATION_ADD,
        payload: location,
        form: form,
        promise: promise
      };

      expect(addLocation(location, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addLocationSuccess", () => {
    it("should return the correct action with results", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const expectedResult = {
        type: LOCATION_ADD_SUCCESS,
        payload: location
      };

      expect(addLocationSuccess(location)).toEqual(expectedResult);
    });
  });

  describe("addLocationFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOCATION_ADD_FAIL,
        error: error
      };

      expect(addLocationFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveLocation", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const form = "LOCATION_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: LOCATION_SAVE,
        payload: location,
        form: form,
        promise: promise
      };

      expect(saveLocation(location, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveLocationSuccess", () => {
    it("should return the correct action with results", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const expectedResult = {
        type: LOCATION_SAVE_SUCCESS,
        payload: location
      };

      expect(saveLocationSuccess(location)).toEqual(expectedResult);
    });
  });

  describe("saveLocationFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOCATION_SAVE_FAIL,
        error: error
      };

      expect(saveLocationFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateLocation", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const form = "LOCATION_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: LOCATION_UPDATE,
        payload: location,
        form: form,
        promise: promise
      };

      expect(updateLocation(location, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateLocationSuccess", () => {
    it("should return the correct action with results", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const expectedResult = {
        type: LOCATION_UPDATE_SUCCESS,
        payload: location
      };

      expect(updateLocationSuccess(location)).toEqual(expectedResult);
    });
  });

  describe("updateLocationFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOCATION_UPDATE_FAIL,
        error: error
      };

      expect(updateLocationFail(error)).toEqual(expectedResult);
    });
  });

  describe("getLocation", () => {
    it("should return the correct action with Location ID", () => {
      const locationId = "36848807-a4cd-43ec-8773-cffff9525cfc";
      const expectedResult = {
        type: LOCATION_GET,
        payload: locationId
      };

      expect(getLocation(locationId)).toEqual(expectedResult);
    });
  });

  describe("getLocationSuccess", () => {
    it("should return the correct action with results", () => {
      const location = {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      };
      const expectedResult = {
        type: LOCATION_GET_SUCCESS,
        payload: location
      };

      expect(getLocationSuccess(location)).toEqual(expectedResult);
    });
  });

  describe("getLocationFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOCATION_GET_FAIL,
        error: error
      };

      expect(getLocationFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchLocation", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "LOCATION_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: LOCATION_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchLocation(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchLocationSuccess", () => {
    it("should return the correct action with results", () => {
      const locations = [
        {
          _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
          streetAddress: "57916 Johns Wall",
          postalCode: "06466-7765",
          city: "Lake Marquesmouth",
          stateProvince: "Idaho",
          country: {
            _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
            countryName: "Cyprus",
            region: {
              _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "0e65ff16-6ede-47d8-9284-5a2d78d25b18",
          streetAddress: "06057 Feeney Coves",
          postalCode: "20338",
          city: "West Aronhaven",
          stateProvince: "Illinois",
          country: {
            _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
            countryName: "Cyprus",
            region: {
              _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "efd08870-8ee7-4a44-a3b6-8bee4eaddb50",
          streetAddress: "496 Koelpin Isle",
          postalCode: "89843",
          city: "O'Connerview",
          stateProvince: "Tennessee",
          country: {
            _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
            countryName: "Cyprus",
            region: {
              _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
              regionName: "South-east Asia"
            }
          }
        }
      ];
      const expectedResult = {
        type: LOCATION_SEARCH_SUCCESS,
        payload: locations
      };

      expect(searchLocationSuccess(locations)).toEqual(expectedResult);
    });
  });

  describe("searchLocationFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: LOCATION_SEARCH_FAIL,
        error: error
      };

      expect(searchLocationFail(error)).toEqual(expectedResult);
    });
  });

  describe("setCountry", () => {
    it("should return the correct action with country", () => {
      const country = {
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
          regionName: "South-east Asia"
        }
      };
      const expectedResult = {
        type: LOCATION_SET_COUNTRY_SUCCESS,
        country
      };

      expect(setCountry(country)).toEqual(expectedResult);
    });
  });
});
