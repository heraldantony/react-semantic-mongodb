/*
 *  Test sagas for searching Task 
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
  TASK_SEARCH,
  searchTask as searchTaskAction,
  searchTaskSuccess,
  searchTaskFail
} from "common/actions/task";

import { taskSearchAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchTask, searchTask } from "../saga";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchTask Saga", () => {
  let doSearchTaskGenerator;

  beforeEach(() => {
    doSearchTaskGenerator = doSearchTask();
  });
  afterEach(() => {});

  it("should search and return  Task List", () => {
    let fakeTaskList = [
      {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      },
      {
        _id: "3ddf53d3-ad05-4249-9a1e-8815794ce5bd",
        title: "Saepe voluptas deserunt illo non.",
        description:
          "A rerum eos. Dolores minus quae similique labore et itaque necessitatibus. A ipsam ut ratione tempore aut et earum sit. Amet asperiores est ut aspernatur. Atque qui pariatur quia commodi eum. Rerum in autem doloribus sunt cum sequi voluptatem quia.",
        undefined: []
      },
      {
        _id: "0d7f6e50-e5f4-4f71-a9f1-24878b486c15",
        title: "Ipsum quam distinctio odit voluptas ad voluptate magnam.",
        description:
          "Doloremque hic amet ullam numquam eveniet. Quo velit officia omnis. Est deleniti consequatur impedit id et.",
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeTaskList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "TASK_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchTaskSuccess action with search
          .put(searchTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Task with message', () => {
    let fakeTaskList = [{"_id":"db5998e1-fb33-446c-b13e-c4eb3a8edcfa","title":"Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.","description":"Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.","undefined":[]},{"_id":"3ddf53d3-ad05-4249-9a1e-8815794ce5bd","title":"Saepe voluptas deserunt illo non.","description":"A rerum eos. Dolores minus quae similique labore et itaque necessitatibus. A ipsam ut ratione tempore aut et earum sit. Amet asperiores est ut aspernatur. Atque qui pariatur quia commodi eum. Rerum in autem doloribus sunt cum sequi voluptatem quia.","undefined":[]},{"_id":"0d7f6e50-e5f4-4f71-a9f1-24878b486c15","title":"Ipsum quam distinctio odit voluptas ad voluptate magnam.","description":"Doloremque hic amet ullam numquam eveniet. Quo velit officia omnis. Est deleniti consequatur impedit id et.","undefined":[]}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'TASK_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchTaskFail action with error message
           .put(searchTaskFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeTaskList = [
      {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      },
      {
        _id: "3ddf53d3-ad05-4249-9a1e-8815794ce5bd",
        title: "Saepe voluptas deserunt illo non.",
        description:
          "A rerum eos. Dolores minus quae similique labore et itaque necessitatibus. A ipsam ut ratione tempore aut et earum sit. Amet asperiores est ut aspernatur. Atque qui pariatur quia commodi eum. Rerum in autem doloribus sunt cum sequi voluptatem quia.",
        undefined: []
      },
      {
        _id: "0d7f6e50-e5f4-4f71-a9f1-24878b486c15",
        title: "Ipsum quam distinctio odit voluptas ad voluptate magnam.",
        description:
          "Doloremque hic amet ullam numquam eveniet. Quo velit officia omnis. Est deleniti consequatur impedit id et.",
        undefined: []
      }
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeTaskList } };
    let finalState = { ...initialState, tasks: fakeTaskList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "TASK_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(searchTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
