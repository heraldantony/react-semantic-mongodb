/*
 *  Test sagas for getting Country 
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
  COUNTRY_GET,
  getCountry as getCountryAction,
  getCountrySuccess,
  getCountryFail
} from "common/actions/country";

import { countryGetAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetCountry, getCountry } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doGetCountry Saga", () => {
  let doGetCountryGenerator;

  beforeEach(() => {
    doGetCountryGenerator = doGetCountry();
  });
  afterEach(() => {});

  it("should get Country ", () => {
    let fakeCountry = {
      _id: "5beba8c9d42cea39441eb478",
      countryName: "Bermuda",
      region: { _id: "5beba8c9d42cea39441eb46e", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = { ok: true, data: fakeCountry };
    let action = { payload: countryId };
    return (
      expectSaga(doGetCountry, action)
        .provide([[call(countryGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getCountrySuccess action with retrieved entity
        .put(getCountrySuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Country with message", () => {
    let fakeCountry = {
      _id: "5beba8c9d42cea39441eb478",
      countryName: "Bermuda",
      region: { _id: "5beba8c9d42cea39441eb46e", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Country, random error" }
    };
    let action = { payload: countryId };
    return (
      expectSaga(doGetCountry, action)
        .provide([[call(countryGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getCountryFail action with error message
        .put(getCountryFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeCountry = {
      _id: "5beba8c9d42cea39441eb478",
      countryName: "Bermuda",
      region: { _id: "5beba8c9d42cea39441eb46e", regionName: "South-east Asia" }
    };
    let countryId = fakeCountry._id;
    let fakeResult = { ok: true, data: fakeCountry };
    let finalState = { ...initialState, country: fakeCountry };
    let action = { payload: countryId };
    return expectSaga(doGetCountry, action)
      .withReducer(countryReducer)
      .provide([[call(countryGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getCountryAction(action.payload, action.form, action.promise))
      .run();
  });
});
