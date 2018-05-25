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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
      const locationId = "feaac422-2c05-4217-b331-e4dad3df6e1d";
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
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
          _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
          streetAddress: "473 Kuhn Plains",
          postalCode: "09305-0399",
          city: "Wainoshire",
          stateProvince: "Wisconsin",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "5d7a3974-f74a-4490-b58c-9bb0349f4da2",
          streetAddress: "96307 Assunta Row",
          postalCode: "18946-2615",
          city: "New Frederick",
          stateProvince: "Michigan",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "8bb8dad9-2a94-4274-8fb9-853d2098727d",
          streetAddress: "193 Blake Fields",
          postalCode: "81151",
          city: "East Chaddfurt",
          stateProvince: "Arkansas",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
        _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
        countryName: "Antigua and Barbuda",
        region: {
          _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
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
