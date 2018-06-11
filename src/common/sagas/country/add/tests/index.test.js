/*
 *  Test sagas for adding Country 
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
  COUNTRY_ADD,
  addCountry as addCountryAction,
  addCountrySuccess,
  addCountryFail
} from "common/actions/country";

import { countryAddAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddCountry, addCountry } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddCountry Saga", () => {
  let doAddCountryGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddCountryGenerator = doAddCountry();
  });
  afterEach(() => {});

  it("should add Country", () => {
    let fakeCountry = {
      _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
      countryName: "Cyprus",
      region: {
        _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
        regionName: "South-east Asia"
      }
    };
    delete fakeCountry["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "8176b299-286d-4f17-be3a-052fb11f7442", ...fakeCountry }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddCountry, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(countryAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addCountrySuccess action with new entity data
          .put(addCountrySuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Country with message', () => {
    let fakeCountry = {"_id":"50dc6101-cdab-44a6-a0ba-1b0d17182a5b","countryName":"Cyprus","region":{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"}}
    delete fakeCountry['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Country, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeCountry, form: 'COUNTRY_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddCountry, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(countryAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addCountryFail action with error message
           .put(addCountryFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeCountry = {
      _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
      countryName: "Cyprus",
      region: {
        _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
        regionName: "South-east Asia"
      }
    };
    delete fakeCountry["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "8a85bc0d-a20a-4fa5-80ed-286eff8cb1a3", ...fakeCountry }
    };
    let finalState = {
      ...initialState,
      country: { ...fakeCountry, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeCountry,
        form: "COUNTRY_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddCountry, action)
        .withReducer(countryReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(countryAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addCountryAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
