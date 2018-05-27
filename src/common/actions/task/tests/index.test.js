// @flow
/*
 * Test actions for entity Task 
 *
*/

import {
  TASK_ADD,
  TASK_ADD_SUCCESS,
  TASK_ADD_FAIL,
  TASK_SAVE,
  TASK_SAVE_SUCCESS,
  TASK_SAVE_FAIL,
  TASK_UPDATE,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_FAIL,
  TASK_GET,
  TASK_GET_SUCCESS,
  TASK_GET_FAIL,
  TASK_SEARCH,
  TASK_SEARCH_SUCCESS,
  TASK_SEARCH_FAIL,
  TASK_ADD_JOB_SUCCESS,
  addTask,
  addTaskSuccess,
  addTaskFail,
  saveTask,
  saveTaskSuccess,
  saveTaskFail,
  updateTask,
  updateTaskSuccess,
  updateTaskFail,
  getTask,
  getTaskSuccess,
  getTaskFail,
  searchTask,
  searchTaskSuccess,
  searchTaskFail,
  addJob
} from "..";
import type {
  TASK_ADD_TYPE,
  TASK_ADD_SUCCESS_TYPE,
  TASK_ADD_FAIL_TYPE,
  TASK_SAVE_TYPE,
  TASK_SAVE_SUCCESS_TYPE,
  TASK_SAVE_FAIL_TYPE,
  TASK_UPDATE_TYPE,
  TASK_UPDATE_SUCCESS_TYPE,
  TASK_UPDATE_FAIL_TYPE,
  TASK_GET_TYPE,
  TASK_GET_SUCCESS_TYPE,
  TASK_GET_FAIL_TYPE,
  TASK_SEARCH_TYPE,
  TASK_SEARCH_SUCCESS_TYPE,
  TASK_SEARCH_FAIL_TYPE,
  TASK_ADD_JOB_SUCCESS_TYPE
} from "..";

describe("Task Actions", () => {
  describe("addTask", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const form = "TASK_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: TASK_ADD,
        payload: task,
        form: form,
        promise: promise
      };

      expect(addTask(task, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addTaskSuccess", () => {
    it("should return the correct action with results", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const expectedResult = {
        type: TASK_ADD_SUCCESS,
        payload: task
      };

      expect(addTaskSuccess(task)).toEqual(expectedResult);
    });
  });

  describe("addTaskFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: TASK_ADD_FAIL,
        error: error
      };

      expect(addTaskFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveTask", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const form = "TASK_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: TASK_SAVE,
        payload: task,
        form: form,
        promise: promise
      };

      expect(saveTask(task, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveTaskSuccess", () => {
    it("should return the correct action with results", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const expectedResult = {
        type: TASK_SAVE_SUCCESS,
        payload: task
      };

      expect(saveTaskSuccess(task)).toEqual(expectedResult);
    });
  });

  describe("saveTaskFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: TASK_SAVE_FAIL,
        error: error
      };

      expect(saveTaskFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateTask", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const form = "TASK_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: TASK_UPDATE,
        payload: task,
        form: form,
        promise: promise
      };

      expect(updateTask(task, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateTaskSuccess", () => {
    it("should return the correct action with results", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const expectedResult = {
        type: TASK_UPDATE_SUCCESS,
        payload: task
      };

      expect(updateTaskSuccess(task)).toEqual(expectedResult);
    });
  });

  describe("updateTaskFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: TASK_UPDATE_FAIL,
        error: error
      };

      expect(updateTaskFail(error)).toEqual(expectedResult);
    });
  });

  describe("getTask", () => {
    it("should return the correct action with Task ID", () => {
      const taskId = "db5998e1-fb33-446c-b13e-c4eb3a8edcfa";
      const expectedResult = {
        type: TASK_GET,
        payload: taskId
      };

      expect(getTask(taskId)).toEqual(expectedResult);
    });
  });

  describe("getTaskSuccess", () => {
    it("should return the correct action with results", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const expectedResult = {
        type: TASK_GET_SUCCESS,
        payload: task
      };

      expect(getTaskSuccess(task)).toEqual(expectedResult);
    });
  });

  describe("getTaskFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: TASK_GET_FAIL,
        error: error
      };

      expect(getTaskFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchTask", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "TASK_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: TASK_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchTask(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchTaskSuccess", () => {
    it("should return the correct action with results", () => {
      const tasks = [
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
      const expectedResult = {
        type: TASK_SEARCH_SUCCESS,
        payload: tasks
      };

      expect(searchTaskSuccess(tasks)).toEqual(expectedResult);
    });
  });

  describe("searchTaskFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: TASK_SEARCH_FAIL,
        error: error
      };

      expect(searchTaskFail(error)).toEqual(expectedResult);
    });
  });

  describe("addJob", () => {
    it("should return the correct action with job", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const expectedResult = {
        type: TASK_ADD_JOB_SUCCESS,
        job
      };

      expect(addJob(job)).toEqual(expectedResult);
    });
  });
});
