/*
 *  Test sagas for updating Region 
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
  REGION_UPDATE,
  updateRegion as updateRegionAction,
  updateRegionSuccess,
  updateRegionFail
} from "common/actions/region";

import { regionUpdateAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateRegion, updateRegion } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateRegion Saga", () => {
  let doUpdateRegionGenerator;

  beforeEach(() => {
    doUpdateRegionGenerator = doUpdateRegion();
  });
  afterEach(() => {});

  it("should update Region", () => {
    let fakeRegion = {
      _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
      regionName: "South-east Asia"
    };

    fakeRegion["regionName"] = "South-east Asia";

    let fakeResult = { ok: true, data: fakeRegion };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeRegion,
        form: "REGION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateRegion, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(regionUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateRegionSuccess action with updating entity data
          .put(updateRegionSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Region with message', () => {
    let fakeRegion = {"_id":"95e0e7aa-6679-423b-930a-7c0a284836ec","regionName":"South-east Asia"}
    let fakeResult={ok: false, data: {message: 'Failed to update Region, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeRegion, form: 'REGION_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateRegion, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(regionUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateRegionFail action with error message
           .put(updateRegionFail(fakeResult.data.message))
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
        form: "REGION_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateRegion, action)
        .withReducer(regionReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(regionUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateRegionAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
