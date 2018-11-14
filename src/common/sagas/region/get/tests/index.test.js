/*
 *  Test sagas for getting Region 
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

import { initialState, regionReducer } from "common/reducers/region";

import {
  REGION_GET,
  getRegion as getRegionAction,
  getRegionSuccess,
  getRegionFail
} from "common/actions/region";

import { regionGetAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetRegion, getRegion } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doGetRegion Saga", () => {
  let doGetRegionGenerator;

  beforeEach(() => {
    doGetRegionGenerator = doGetRegion();
  });
  afterEach(() => {});

  it("should get Region ", () => {
    let fakeRegion = {
      _id: "5beba8c9d42cea39441eb46e",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = { ok: true, data: fakeRegion };
    let action = { payload: regionId };
    return (
      expectSaga(doGetRegion, action)
        .provide([[call(regionGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getRegionSuccess action with retrieved entity
        .put(getRegionSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Region with message", () => {
    let fakeRegion = {
      _id: "5beba8c9d42cea39441eb46e",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Region, random error" }
    };
    let action = { payload: regionId };
    return (
      expectSaga(doGetRegion, action)
        .provide([[call(regionGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getRegionFail action with error message
        .put(getRegionFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeRegion = {
      _id: "5beba8c9d42cea39441eb46e",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = { ok: true, data: fakeRegion };
    let finalState = { ...initialState, region: fakeRegion };
    let action = { payload: regionId };
    return expectSaga(doGetRegion, action)
      .withReducer(regionReducer)
      .provide([[call(regionGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getRegionAction(action.payload, action.form, action.promise))
      .run();
  });
});
