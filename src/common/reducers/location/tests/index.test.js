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
        _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
        countryName: "Cyprus",
        region: {
          _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
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
