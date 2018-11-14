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
    let fakeLocationList = [{"_id":"5beba8c9d42cea39441eb482","streetAddress":"07240 Barrows Lakes","postalCode":"24105-1029","city":"South Guadalupe","stateProvince":"Maine","country":{"_id":"5beba8c9d42cea39441eb478","countryName":"Bermuda","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}}},{"_id":"5beba8c9d42cea39441eb483","streetAddress":"15333 Lyric Radial","postalCode":"92238-3778","city":"Eltamouth","stateProvince":"Mississippi","country":{"_id":"5beba8c9d42cea39441eb478","countryName":"Bermuda","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}}},{"_id":"5beba8c9d42cea39441eb484","streetAddress":"140 Hickle Rapids","postalCode":"81543","city":"Keelingborough","stateProvince":"Iowa","country":{"_id":"5beba8c9d42cea39441eb478","countryName":"Bermuda","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}}}]
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
