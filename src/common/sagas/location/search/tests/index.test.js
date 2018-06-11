/*
 *  Test sagas for searching Location 
 *
*/

import { SubmissionError, startSubmit, reset, stopSubmit } from "redux-form";
import {
  call,
  put,
  select,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "react-router-redux";

import { initialState, locationReducer } from "common/reducers/location";

import {
  LOCATION_SEARCH,
  searchLocation as searchLocationAction,
  searchLocationSuccess,
  searchLocationFail
} from "common/actions/location";

import { locationSearchAPI } from "common/api/LocationSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchLocation, searchLocation } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchLocation Saga", () => {
  let doSearchLocationGenerator;

  beforeEach(() => {
    doSearchLocationGenerator = doSearchLocation();
  });
  afterEach(() => {});

  it("should search and return  Location List", () => {
    let fakeLocationList = [
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
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeLocationList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "LOCATION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchLocation, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(locationSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchLocationSuccess action with search
          .put(searchLocationSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Location with message', () => {
    let fakeLocationList = [{"_id":"36848807-a4cd-43ec-8773-cffff9525cfc","streetAddress":"57916 Johns Wall","postalCode":"06466-7765","city":"Lake Marquesmouth","stateProvince":"Idaho","country":{"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}},{"_id":"0e65ff16-6ede-47d8-9284-5a2d78d25b18","streetAddress":"06057 Feeney Coves","postalCode":"20338","city":"West Aronhaven","stateProvince":"Illinois","country":{"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}},{"_id":"efd08870-8ee7-4a44-a3b6-8bee4eaddb50","streetAddress":"496 Koelpin Isle","postalCode":"89843","city":"O'Connerview","stateProvince":"Tennessee","country":{"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Location, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'LOCATION_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchLocation, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(locationSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchLocationFail action with error message
           .put(searchLocationFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeLocationList = [
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
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeLocationList } };
    let finalState = { ...initialState, locations: fakeLocationList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "LOCATION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchLocation, action)
        .withReducer(locationReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(locationSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchLocationAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
