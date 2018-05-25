// @flow
import { fromJS } from "immutable";

import {
  addTask,
  addTaskSuccess,
  addTaskFail,
  saveTask,
  saveTaskSuccess,
  saveTaskFail,
  updateTask,
  updateTaskSuccess,
  updateTaskFail,
  searchTask,
  searchTaskSuccess,
  searchTaskFail,
  getTask,
  getTaskSuccess,
  getTaskFail,
  addJob
} from "common/actions/task";
import { taskReducer } from "common/reducers/task";

describe("Task Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      task: {},
      tasks: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTasks: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(taskReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addTaskSuccess", () => {
    it("should update state with add results", () => {
      const task = {
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
        undefined: []
      };
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, addTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("addTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, addTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("saveTaskSuccess", () => {
    it("should update state with save results", () => {
      const task = {
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
        undefined: []
      };
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, saveTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("saveTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, saveTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("updateTaskSuccess", () => {
    it("should update state with update results", () => {
      const task = {
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
        undefined: []
      };
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, updateTaskSuccess(task))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, updateTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("searchTaskSuccess", () => {
    it("should update state with search results", () => {
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
      const expectedResult = { ...state, tasks: tasks };

      expect(taskReducer(state, searchTaskSuccess(tasks))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, searchTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("getTaskSuccess", () => {
    it("should update state with get results", () => {
      const task = {
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
        undefined: []
      };
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, getTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("getTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, getTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("addJob", () => {
    it("should update state with job", () => {
      const job = {
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
        undefined: []
      };

      const expectedResult = {
        ...state,
        task: {
          ...state.task,
          jobs: [job]
        }
      };

      expect(taskReducer(state, addJob(job))).toEqual(expectedResult);
    });
  });
});
