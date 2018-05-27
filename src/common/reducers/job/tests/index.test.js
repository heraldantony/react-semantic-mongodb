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
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
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
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
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
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
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
          _id: "cc63e617-b34c-4808-a000-7faf49595268",
          jobTitle: "Central Program Assistant",
          minSalary: 89368,
          maxSalary: 13863,
          undefined: []
        },
        {
          _id: "bf3691ab-a9f4-4c1a-942c-7335ebf10b92",
          jobTitle: "Regional Assurance Planner",
          minSalary: 41622,
          maxSalary: 5260,
          undefined: []
        },
        {
          _id: "27cce88f-85d6-43d8-9d7c-87e64938ab85",
          jobTitle: "Global Web Agent",
          minSalary: 52327,
          maxSalary: 11640,
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
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
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
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
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
