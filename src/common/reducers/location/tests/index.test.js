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
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
          _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
          streetAddress: "15615 Prosacco Alley",
          postalCode: "69000",
          city: "Lake Anaton",
          stateProvince: "Michigan",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "e45d6521-c81c-456d-81dc-744594b26184",
          streetAddress: "6514 Wisoky Cliff",
          postalCode: "21474-6864",
          city: "Pollichside",
          stateProvince: "New Jersey",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "486b4125-2e8b-48f1-acef-feb135593b24",
          streetAddress: "899 Kassulke Landing",
          postalCode: "98961",
          city: "South Adriannastad",
          stateProvince: "Massachusetts",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
        countryName: "Aruba",
        region: {
          _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
