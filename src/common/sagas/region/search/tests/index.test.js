/*
 *  Test sagas for searching Region 
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
  REGION_SEARCH,
  searchRegion as searchRegionAction,
  searchRegionSuccess,
  searchRegionFail
} from "common/actions/region";

import { regionSearchAPI } from "common/api/RegionSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchRegion, searchRegion } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchRegion Saga", () => {
  let doSearchRegionGenerator;

  beforeEach(() => {
    doSearchRegionGenerator = doSearchRegion();
  });
  afterEach(() => {});

  it("should search and return  Region List", () => {
    let fakeRegionList = [
      {
        _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
        regionName: "South-east Asia"
      },
      { _id: "eedf4124-3976-4e4f-86ba-a7dd7520ee1f", regionName: "Africa" },
      {
        _id: "02dc7ad0-7423-42a0-8f33-51f680b95190",
        regionName: "Eastern Europe"
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeRegionList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "REGION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchRegion, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(regionSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchRegionSuccess action with search
          .put(searchRegionSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Region with message', () => {
    let fakeRegionList = [{"_id":"fd5db0ba-f121-4606-bffc-ef2fda65aa14","regionName":"South-east Asia"},{"_id":"eedf4124-3976-4e4f-86ba-a7dd7520ee1f","regionName":"Africa"},{"_id":"02dc7ad0-7423-42a0-8f33-51f680b95190","regionName":"Eastern Europe"}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Region, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'REGION_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchRegion, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(regionSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchRegionFail action with error message
           .put(searchRegionFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeRegionList = [
      {
        _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
        regionName: "South-east Asia"
      },
      { _id: "eedf4124-3976-4e4f-86ba-a7dd7520ee1f", regionName: "Africa" },
      {
        _id: "02dc7ad0-7423-42a0-8f33-51f680b95190",
        regionName: "Eastern Europe"
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeRegionList } };
    let finalState = { ...initialState, regions: fakeRegionList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "REGION_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchRegion, action)
        .withReducer(regionReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(regionSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          searchRegionAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
