/*
 *  Test sagas for updating Country 
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

import { initialState, countryReducer } from "common/reducers/country";

import {
  COUNTRY_UPDATE,
  updateCountry as updateCountryAction,
  updateCountrySuccess,
  updateCountryFail
} from "common/actions/country";

import { countryUpdateAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateCountry, updateCountry } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateCountry Saga", () => {
  let doUpdateCountryGenerator;

  beforeEach(() => {
    doUpdateCountryGenerator = doUpdateCountry();
  });
  afterEach(() => {});

  it("should update Country", () => {
    let fakeCountry = {
      _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
      countryName: "Aruba",
      region: {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      }
    };

    fakeCountry["countryName"] = "Cape Verde";

    let fakeResult = { ok: true, data: fakeCountry };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateCountry, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(countryUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateCountrySuccess action with updating entity data
          .put(updateCountrySuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Country with message', () => {
    let fakeCountry = {"_id":"f8057f81-9663-4c01-a556-dfe45c72fb50","countryName":"Aruba","region":{"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}}
    let fakeResult={ok: false, data: {message: 'Failed to update Country, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeCountry, form: 'COUNTRY_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateCountry, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(countryUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateCountryFail action with error message
           .put(updateCountryFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeCountry = {
      _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
      countryName: "Aruba",
      region: {
        _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
        regionName: "South-east Asia"
      }
    };

    fakeCountry["countryName"] = "Russian Federation";

    let fakeResult = { ok: true, data: fakeCountry };
    let finalState = { ...initialState, country: fakeCountry };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateCountry, action)
        .withReducer(countryReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(countryUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateCountryAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
