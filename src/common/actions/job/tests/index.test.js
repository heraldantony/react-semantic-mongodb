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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
      const jobId = "acb92846-feaf-4369-a853-e0b6ec3c8716";
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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
        _id: "a5a3dc7a-2ab2-4fda-9e4c-2ce545f3e342",
        title:
          "Repellat porro velit est. Earum modi voluptate consequuntur. Aut tempore vel ipsum a quo. Architecto pariatur ad et tenetur. Ut impedit voluptate ad ducimus aut. Explicabo totam et tenetur.",
        description:
          "Non ullam et ut maxime vel autem commodi quia. Quasi eos iure voluptatum veritatis nobis ipsa debitis id. Amet neque voluptatibus placeat dolore minima.",
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
