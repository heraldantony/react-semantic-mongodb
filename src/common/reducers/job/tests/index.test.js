// @flow
import { fromJS } from "immutable";

import {
  addJob,
  addJobSuccess,
  addJobFail,
  saveJob,
  saveJobSuccess,
  saveJobFail,
  updateJob,
  updateJobSuccess,
  updateJobFail,
  searchJob,
  searchJobSuccess,
  searchJobFail,
  getJob,
  getJobSuccess,
  getJobFail,
  addTask
} from "common/actions/job";
import { jobReducer } from "common/reducers/job";

describe("Job Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      job: {},
      jobs: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchJobs: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(jobReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addJobSuccess", () => {
    it("should update state with add results", () => {
      const job = {
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
        undefined: []
      };
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, addJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("addJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, addJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("saveJobSuccess", () => {
    it("should update state with save results", () => {
      const job = {
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
        undefined: []
      };
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, saveJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("saveJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, saveJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("updateJobSuccess", () => {
    it("should update state with update results", () => {
      const job = {
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
        undefined: []
      };
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, updateJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("updateJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, updateJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("searchJobSuccess", () => {
    it("should update state with search results", () => {
      const jobs = [
        {
          _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
          jobTitle: "Product Applications Facilitator",
          minSalary: 79081,
          maxSalary: 97938,
          undefined: []
        },
        {
          _id: "fac8722e-4a34-48d5-bf5e-6c5d1e6c4fce",
          jobTitle: "Direct Intranet Representative",
          minSalary: 52488,
          maxSalary: 49930,
          undefined: []
        },
        {
          _id: "ed50dd81-fe15-456e-9d4f-c548c03c5ed9",
          jobTitle: "Direct Metrics Executive",
          minSalary: 77403,
          maxSalary: 5752,
          undefined: []
        }
      ];
      const expectedResult = { ...state, jobs: jobs };

      expect(jobReducer(state, searchJobSuccess(jobs))).toEqual(expectedResult);
    });
  });

  describe("searchJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, searchJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("getJobSuccess", () => {
    it("should update state with get results", () => {
      const job = {
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
        undefined: []
      };
      const expectedResult = { ...state, job: job };

      expect(jobReducer(state, getJobSuccess(job))).toEqual(expectedResult);
    });
  });

  describe("getJobFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(jobReducer(state, getJobFail(error))).toEqual(expectedResult);
    });
  });

  describe("addTask", () => {
    it("should update state with task", () => {
      const task = {
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
        undefined: []
      };

      const expectedResult = {
        ...state,
        job: {
          ...state.job,
          tasks: [task]
        }
      };

      expect(jobReducer(state, addTask(task))).toEqual(expectedResult);
    });
  });
});
