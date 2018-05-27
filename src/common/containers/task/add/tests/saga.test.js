/*
 *  Test sagas for adding Task 
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
  TASK_ADD,
  addTask as addTaskAction,
  addTaskSuccess,
  addTaskFail
} from "common/actions/task";

import { taskAddAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddTask, addTask } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doAddTask Saga", () => {
  let doAddTaskGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddTaskGenerator = doAddTask();
  });
  afterEach(() => {});

  it("should add Task", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };
    delete fakeTask["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "b1f846f5-10ec-4f63-84ed-4f1f44f15dd4", ...fakeTask }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addTaskSuccess action with new entity data
          .put(addTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Task with message', () => {
    let fakeTask = {"_id":"db5998e1-fb33-446c-b13e-c4eb3a8edcfa","title":"Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.","description":"Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.","undefined":[]}
    delete fakeTask['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeTask, form: 'TASK_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addTaskFail action with error message
           .put(addTaskFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };
    delete fakeTask["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "e0f1d963-ee12-40f2-8494-fc4340c940be", ...fakeTask }
    };
    let finalState = {
      ...initialState,
      task: { ...fakeTask, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
