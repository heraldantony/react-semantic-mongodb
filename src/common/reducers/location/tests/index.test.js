// @flow
import { fromJS } from "immutable";

import {
  addLocation,
  addLocationSuccess,
  addLocationFail,
  saveLocation,
  saveLocationSuccess,
  saveLocationFail,
  updateLocation,
  updateLocationSuccess,
  updateLocationFail,
  searchLocation,
  searchLocationSuccess,
  searchLocationFail,
  getLocation,
  getLocationSuccess,
  getLocationFail,
  setCountry
} from "common/actions/location";
import { locationReducer } from "common/reducers/location";

describe("Location Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      location: {},
      locations: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchLocations: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(locationReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addLocationSuccess", () => {
    it("should update state with add results", () => {
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
      const expectedResult = { ...state, location: location };

      expect(locationReducer(state, addLocationSuccess(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("addLocationFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(locationReducer(state, addLocationFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveLocationSuccess", () => {
    it("should update state with save results", () => {
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
      const expectedResult = { ...state, location: location };

      expect(locationReducer(state, saveLocationSuccess(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveLocationFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(locationReducer(state, saveLocationFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateLocationSuccess", () => {
    it("should update state with update results", () => {
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
      const expectedResult = { ...state, location: location };

      expect(locationReducer(state, updateLocationSuccess(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateLocationFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(locationReducer(state, updateLocationFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchLocationSuccess", () => {
    it("should update state with search results", () => {
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
      const expectedResult = { ...state, locations: locations };

      expect(locationReducer(state, searchLocationSuccess(locations))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchLocationFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(locationReducer(state, searchLocationFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getLocationSuccess", () => {
    it("should update state with get results", () => {
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
      const expectedResult = { ...state, location: location };

      expect(locationReducer(state, getLocationSuccess(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("getLocationFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(locationReducer(state, getLocationFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("setCountry", () => {
    it("should update state with country", () => {
      const country = {
        _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
        countryName: "Antigua and Barbuda",
        region: {
          _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
          regionName: "South-east Asia"
        }
      };

      const expectedResult = {
        ...state,
        location: {
          ...state.location,
          country: country
        }
      };

      expect(locationReducer(state, setCountry(country))).toEqual(
        expectedResult
      );
    });
  });
});
