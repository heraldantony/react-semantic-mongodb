/*
 *  Test sagas for saving Region 
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
  REGION_SAVE,
  saveRegion as saveRegionAction,
  saveRegionSuccess,
  saveRegionFail
} from "common/actions/region";

import { regionSaveAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveRegion, saveRegion } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveRegion Saga", () => {
  let doSaveRegionGenerator;

  beforeEach(() => {
    doSaveRegionGenerator = doSaveRegion();
  });
  afterEach(() => {});

  it("should save Region", () => {
    let fakeRegion = {
      _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
      regionName: "South-east Asia"
    };

    fakeRegion["regionName"] = "South-east Asia";

    let fakeResult = { ok: true, data: fakeRegion };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeRegion,
        form: "REGION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveRegion, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(regionSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveRegionSuccess action with saving entity data
          .put(saveRegionSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Region with message', () => {
    let fakeRegion = {"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}
    let fakeResult={ok: false, data: {message: 'Failed to save Region, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeRegion, form: 'REGION_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveRegion, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(regionSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveRegionFail action with error message
           .put(saveRegionFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeRegion = {
      _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
      regionName: "South-east Asia"
    };

    fakeRegion["regionName"] = "South-east Asia";

    let fakeResult = { ok: true, data: fakeRegion };
    let finalState = { ...initialState, region: fakeRegion };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeRegion,
        form: "REGION_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveRegion, action)
        .withReducer(regionReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(regionSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(saveRegionAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
