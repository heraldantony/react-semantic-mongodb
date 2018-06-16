/*
 *  Test sagas for saving Country 
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
  COUNTRY_SAVE,
  saveCountry as saveCountryAction,
  saveCountrySuccess,
  saveCountryFail
} from "common/actions/country";

import { countrySaveAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveCountry, saveCountry } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveCountry Saga", () => {
  let doSaveCountryGenerator;

  beforeEach(() => {
    doSaveCountryGenerator = doSaveCountry();
  });
  afterEach(() => {});

  it("should save Country", () => {
    let fakeCountry = {
      _id: "5b254369063db83598df2cea",
      countryName: "Grenada",
      region: { _id: "5b254369063db83598df2ce0", regionName: "South-east Asia" }
    };

    fakeCountry["countryName"] = "Malawi";

    let fakeResult = { ok: true, data: fakeCountry };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveCountry, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(countrySaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveCountrySuccess action with saving entity data
          .put(saveCountrySuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Country with message', () => {
    let fakeCountry = {"_id":"5b254369063db83598df2cea","countryName":"Grenada","region":{"_id":"5b254369063db83598df2ce0","regionName":"South-east Asia"}}
    let fakeResult={ok: false, data: {message: 'Failed to save Country, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeCountry, form: 'COUNTRY_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveCountry, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(countrySaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveCountryFail action with error message
           .put(saveCountryFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeCountry = {
      _id: "5b254369063db83598df2cea",
      countryName: "Grenada",
      region: { _id: "5b254369063db83598df2ce0", regionName: "South-east Asia" }
    };

    fakeCountry["countryName"] = "Hong Kong";

    let fakeResult = { ok: true, data: fakeCountry };
    let finalState = { ...initialState, country: fakeCountry };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveCountry, action)
        .withReducer(countryReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(countrySaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          saveCountryAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
