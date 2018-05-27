/*
 *  Test sagas for updating Task 
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
  TASK_UPDATE,
  updateTask as updateTaskAction,
  updateTaskSuccess,
  updateTaskFail
} from "common/actions/task";

import { taskUpdateAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateTask, updateTask } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateTask Saga", () => {
  let doUpdateTaskGenerator;

  beforeEach(() => {
    doUpdateTaskGenerator = doUpdateTask();
  });
  afterEach(() => {});

  it("should update Task", () => {
    let fakeTask = {
      _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
      title:
        "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
      description:
        "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
      undefined: []
    };

    fakeTask["title"] = "Qui praesentium et aut.";

    fakeTask["description"] =
      "Aut voluptatem ut. Non id veniam fuga voluptas maiores dolore. Quis placeat sit aliquid rerum. Quia voluptate blanditiis exercitationem. Non expedita ut veritatis necessitatibus.";

    let fakeResult = { ok: true, data: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateTaskSuccess action with updating entity data
          .put(updateTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Task with message', () => {
    let fakeTask = {"_id":"db5998e1-fb33-446c-b13e-c4eb3a8edcfa","title":"Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.","description":"Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.","undefined":[]}
    let fakeResult={ok: false, data: {message: 'Failed to update Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeTask, form: 'TASK_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateTaskFail action with error message
           .put(updateTaskFail(fakeResult.data.message))
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
      "Culpa quibusdam ratione eveniet laudantium sequi quibusdam velit velit.";

    fakeTask["description"] =
      "Vel assumenda occaecati ut corrupti error eveniet sit quod. Officiis eveniet corrupti doloremque. Et quaerat quas architecto inventore. Placeat id non perspiciatis voluptas fuga. Iusto tempora cumque.";

    let fakeResult = { ok: true, data: fakeTask };
    let finalState = { ...initialState, task: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(updateTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
