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
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
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
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
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
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
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
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
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
          _id: "5beba8c9d42cea39441eb482",
          streetAddress: "07240 Barrows Lakes",
          postalCode: "24105-1029",
          city: "South Guadalupe",
          stateProvince: "Maine",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "5beba8c9d42cea39441eb483",
          streetAddress: "15333 Lyric Radial",
          postalCode: "92238-3778",
          city: "Eltamouth",
          stateProvince: "Mississippi",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        {
          _id: "5beba8c9d42cea39441eb484",
          streetAddress: "140 Hickle Rapids",
          postalCode: "81543",
          city: "Keelingborough",
          stateProvince: "Iowa",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        }
      ];
      const expectedResult = {
        ...state,
        locations: locations,
        totalItemsCount: locations.length
      };

      expect(
        locationReducer(
          state,
          searchLocationSuccess(locations, locations.length)
        )
      ).toEqual(expectedResult);
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
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
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
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
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
