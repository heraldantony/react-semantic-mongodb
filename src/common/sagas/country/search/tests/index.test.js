/*
 *  Test sagas for searching Country 
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
  COUNTRY_SEARCH,
  searchCountry as searchCountryAction,
  searchCountrySuccess,
  searchCountryFail
} from "common/actions/country";

import { countrySearchAPI } from "common/api/CountrySvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchCountry, searchCountry } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchCountry Saga", () => {
  let doSearchCountryGenerator;

  beforeEach(() => {
    doSearchCountryGenerator = doSearchCountry();
  });
  afterEach(() => {});

  it("should search and return  Country List", () => {
    let fakeCountryList = [
      {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      },
      {
        _id: "5beba8c9d42cea39441eb479",
        countryName: "Seychelles",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      },
      {
        _id: "5beba8c9d42cea39441eb47a",
        countryName: "Sri Lanka",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeCountryList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "COUNTRY_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchCountry, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(countrySearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchCountrySuccess action with search
          .put(searchCountrySuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Country with message', () => {
    let fakeCountryList = [{"_id":"5beba8c9d42cea39441eb478","countryName":"Bermuda","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}},{"_id":"5beba8c9d42cea39441eb479","countryName":"Seychelles","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}},{"_id":"5beba8c9d42cea39441eb47a","countryName":"Sri Lanka","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Country, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'COUNTRY_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchCountry, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(countrySearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchCountryFail action with error message
           .put(searchCountryFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeCountryList = [
      {
        _id: "5beba8c9d42cea39441eb478",
        countryName: "Bermuda",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      },
      {
        _id: "5beba8c9d42cea39441eb479",
        countryName: "Seychelles",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      },
      {
        _id: "5beba8c9d42cea39441eb47a",
        countryName: "Sri Lanka",
        region: {
          _id: "5beba8c9d42cea39441eb46e",
          regionName: "South-east Asia"
        }
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeCountryList } };
    let finalState = { ...initialState, countries: fakeCountryList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "COUNTRY_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchCountry, action)
        .withReducer(countryReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(countrySearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchCountryAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
