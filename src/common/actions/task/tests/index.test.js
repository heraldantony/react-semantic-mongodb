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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
      const taskId = "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342";
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
          _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
          title:
            "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
          description:
            "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
          undefined: []
        },
        {
          _id: "0e6c1592-51dc-44b0-b9c3-55babcc3d1b7",
          title: "vel",
          description:
            "Repudiandae non quis voluptatum. Maiores qui autem error. Unde eum sit nostrum dolore in in hic dolores veniam. Rerum praesentium eaque omnis qui dolorem officiis excepturi. Culpa omnis est harum quae dicta amet labore consequatur exercitationem. Et voluptas necessitatibus asperiores vitae adipisci esse.",
          undefined: []
        },
        {
          _id: "b2d6307c-a62d-4f44-8b9f-9201a376fdfb",
          title:
            "Incidunt tempore voluptate deleniti accusantium quis accusamus nostrum. Numquam eum voluptatum aut libero perspiciatis. Totam enim molestiae alias qui est nihil. Est et aliquam mollitia et ducimus nesciunt.\n \rTemporibus fugit odio illum laborum eos a sunt et. Nihil et vitae adipisci sequi velit aliquam et sunt ducimus. Rem quod sit est officia architecto. Iure ducimus quis commodi quos et qui. Perferendis impedit eum eum qui dolorem enim. Iusto suscipit repellat nobis est consectetur cum accusamus.\n \rVel et harum facilis et. Occaecati ratione vero aut. Quis officiis quis qui quia aut reiciendis deleniti aut facere. Beatae sequi sunt ipsum aspernatur et sint inventore.",
          description:
            "Odit itaque cum. Qui in fugit qui sunt est repellat. Aliquid temporibus error.",
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
