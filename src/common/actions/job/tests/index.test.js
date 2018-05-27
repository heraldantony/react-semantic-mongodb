// @flow
/*
 * Test actions for entity Job 
 *
*/

import {
  JOB_ADD,
  JOB_ADD_SUCCESS,
  JOB_ADD_FAIL,
  JOB_SAVE,
  JOB_SAVE_SUCCESS,
  JOB_SAVE_FAIL,
  JOB_UPDATE,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_GET,
  JOB_GET_SUCCESS,
  JOB_GET_FAIL,
  JOB_SEARCH,
  JOB_SEARCH_SUCCESS,
  JOB_SEARCH_FAIL,
  JOB_ADD_TASK_SUCCESS,
  addJob,
  addJobSuccess,
  addJobFail,
  saveJob,
  saveJobSuccess,
  saveJobFail,
  updateJob,
  updateJobSuccess,
  updateJobFail,
  getJob,
  getJobSuccess,
  getJobFail,
  searchJob,
  searchJobSuccess,
  searchJobFail,
  addTask
} from "..";
import type {
  JOB_ADD_TYPE,
  JOB_ADD_SUCCESS_TYPE,
  JOB_ADD_FAIL_TYPE,
  JOB_SAVE_TYPE,
  JOB_SAVE_SUCCESS_TYPE,
  JOB_SAVE_FAIL_TYPE,
  JOB_UPDATE_TYPE,
  JOB_UPDATE_SUCCESS_TYPE,
  JOB_UPDATE_FAIL_TYPE,
  JOB_GET_TYPE,
  JOB_GET_SUCCESS_TYPE,
  JOB_GET_FAIL_TYPE,
  JOB_SEARCH_TYPE,
  JOB_SEARCH_SUCCESS_TYPE,
  JOB_SEARCH_FAIL_TYPE,
  JOB_ADD_TASK_SUCCESS_TYPE
} from "..";

describe("Job Actions", () => {
  describe("addJob", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const form = "JOB_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_ADD,
        payload: job,
        form: form,
        promise: promise
      };

      expect(addJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addJobSuccess", () => {
    it("should return the correct action with results", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const expectedResult = {
        type: JOB_ADD_SUCCESS,
        payload: job
      };

      expect(addJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("addJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_ADD_FAIL,
        error: error
      };

      expect(addJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveJob", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const form = "JOB_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SAVE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(saveJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveJobSuccess", () => {
    it("should return the correct action with results", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const expectedResult = {
        type: JOB_SAVE_SUCCESS,
        payload: job
      };

      expect(saveJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("saveJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SAVE_FAIL,
        error: error
      };

      expect(saveJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateJob", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const form = "JOB_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_UPDATE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(updateJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateJobSuccess", () => {
    it("should return the correct action with results", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const expectedResult = {
        type: JOB_UPDATE_SUCCESS,
        payload: job
      };

      expect(updateJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("updateJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_UPDATE_FAIL,
        error: error
      };

      expect(updateJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("getJob", () => {
    it("should return the correct action with Job ID", () => {
      const jobId = "cc63e617-b34c-4808-a000-7faf49595268";
      const expectedResult = {
        type: JOB_GET,
        payload: jobId
      };

      expect(getJob(jobId)).toEqual(expectedResult);
    });
  });

  describe("getJobSuccess", () => {
    it("should return the correct action with results", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };
      const expectedResult = {
        type: JOB_GET_SUCCESS,
        payload: job
      };

      expect(getJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("getJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_GET_FAIL,
        error: error
      };

      expect(getJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchJob", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "JOB_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchJob(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchJobSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: JOB_SEARCH_SUCCESS,
        payload: jobs
      };

      expect(searchJobSuccess(jobs)).toEqual(expectedResult);
    });
  });

  describe("searchJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SEARCH_FAIL,
        error: error
      };

      expect(searchJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("addTask", () => {
    it("should return the correct action with task", () => {
      const task = {
        _id: "db5998e1-fb33-446c-b13e-c4eb3a8edcfa",
        title:
          "Occaecati assumenda ratione facilis excepturi hic quas recusandae minus voluptas.",
        description:
          "Consectetur minima quaerat animi velit magnam temporibus debitis rerum earum. Et enim omnis dignissimos quos et et dignissimos possimus. Omnis ea et nihil voluptatem harum incidunt. Quidem minima ut corrupti perspiciatis maxime dolor optio rerum repudiandae. Iusto velit sit saepe vero.",
        undefined: []
      };
      const expectedResult = {
        type: JOB_ADD_TASK_SUCCESS,
        task
      };

      expect(addTask(task)).toEqual(expectedResult);
    });
  });
});
