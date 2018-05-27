/*
 *  Test sagas for saving Task 
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
  TASK_SAVE,
  saveTask as saveTaskAction,
  saveTaskSuccess,
  saveTaskFail
} from "common/actions/task";

import { taskSaveAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSaveTask, saveTask } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSaveTask Saga", () => {
  let doSaveTaskGenerator;

  beforeEach(() => {
    doSaveTaskGenerator = doSaveTask();
  });
  afterEach(() => {});

  it("should save Task", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };

    fakeTask["title"] = "Est eos impedit.";

    fakeTask["description"] =
      "Saepe totam voluptatem. Ut non cum repudiandae ipsa. Aut iste harum aut mollitia incidunt omnis expedita enim. Aut nobis facilis non minima quasi ex distinctio.";

    let fakeResult = { ok: true, data: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_EDIT_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSaveTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskSaveAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield saveTaskSuccess action with saving entity data
          .put(saveTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to save Task with message', () => {
    let fakeTask = {"_id":"db5998e1-fb33-446c-b13e-c4eb3a8edcfa","title":"Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.","description":"Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.","undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to save Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeTask, form: 'TASK_EDIT_FORM', promise: {resolve, reject} }
       return expectSaga(doSaveTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskSaveAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield saveTaskFail action with error message
           .put(saveTaskFail(fakeResult.data.message))
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

    fakeTask["title"] =
      "Quis hic sit similique porro dolorem error laboriosam.";

    fakeTask["description"] =
      "Ut veritatis ut et dolores soluta nobis minus beatae. Et harum qui vel et qui impedit voluptatem voluptatibus. Et occaecati dolore.";

    let fakeResult = { ok: true, data: fakeTask };
    let finalState = { ...initialState, task: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_EDIT_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSaveTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskSaveAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(saveTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
