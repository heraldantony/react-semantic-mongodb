/*
 *  Test sagas for deleting Region 
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
  REGION_DELETE,
  deleteRegion as deleteRegionAction,
  deleteRegionSuccess,
  deleteRegionFail
} from "common/actions/region";

import { regionDeleteAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doDeleteRegion, deleteRegion } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doDeleteRegion Saga", () => {
  let doDeleteRegionGenerator;

  beforeEach(() => {
    doDeleteRegionGenerator = doDeleteRegion();
  });
  afterEach(() => {});

  it("should delete Region ", () => {
    let fakeRegion = {
      _id: "5b254369063db83598df2ce0",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = { ok: true, data: fakeRegion };
    let action = { payload: regionId };
    return (
      expectSaga(doDeleteRegion, action)
        .provide([[call(regionDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteRegionSuccess action
        .put(deleteRegionSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to delete Region with message", () => {
    let fakeRegion = {
      _id: "5b254369063db83598df2ce0",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Region, random error" }
    };
    let action = { payload: regionId };
    return (
      expectSaga(doDeleteRegion, action)
        .provide([[call(regionDeleteAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield deleteRegionFail action with error message
        .put(deleteRegionFail(fakeResult.data.message))
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
      _id: "5b254369063db83598df2ce0",
      regionName: "South-east Asia"
    };
    let regionId = fakeRegion._id;
    let fakeResult = { ok: true, data: fakeRegion };
    let finalState = { ...initialState, region: {} };
    let action = { payload: regionId };
    return expectSaga(doDeleteRegion, action)
      .withReducer(regionReducer)
      .provide([[call(regionDeleteAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(deleteRegionAction(action.payload, action.form, action.promise))
      .run();
  });
});
