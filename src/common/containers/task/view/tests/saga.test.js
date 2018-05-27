/*
 *  Test sagas for getting Task 
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

import { initialState, taskReducer } from "common/reducers/task";

import {
  TASK_GET,
  getTask as getTaskAction,
  getTaskSuccess,
  getTaskFail
} from "common/actions/task";

import { taskGetAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetTask, getTask } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doGetTask Saga", () => {
  let doGetTaskGenerator;

  beforeEach(() => {
    doGetTaskGenerator = doGetTask();
  });
  afterEach(() => {});

  it("should get Task ", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };
    let taskId = fakeTask._id;
    let fakeResult = { ok: true, data: fakeTask };
    let action = { payload: taskId };
    return (
      expectSaga(doGetTask, action)
        .provide([[call(taskGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getTaskSuccess action with retrieved entity
        .put(getTaskSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Task with message", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };
    let taskId = fakeTask._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Task, random error" }
    };
    let action = { payload: taskId };
    return (
      expectSaga(doGetTask, action)
        .provide([[call(taskGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getTaskFail action with error message
        .put(getTaskFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };
    let taskId = fakeTask._id;
    let fakeResult = { ok: true, data: fakeTask };
    let finalState = { ...initialState, task: fakeTask };
    let action = { payload: taskId };
    return expectSaga(doGetTask, action)
      .withReducer(taskReducer)
      .provide([[call(taskGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(getTaskAction(action.payload, action.form, action.promise))
      .run();
  });
});
