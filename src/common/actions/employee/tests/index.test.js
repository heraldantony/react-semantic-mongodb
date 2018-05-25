// @flow
/*
 * Test actions for entity Employee 
 *
*/

import {
  EMPLOYEE_ADD,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_ADD_FAIL,
  EMPLOYEE_SAVE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_SAVE_FAIL,
  EMPLOYEE_UPDATE,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_GET,
  EMPLOYEE_GET_SUCCESS,
  EMPLOYEE_GET_FAIL,
  EMPLOYEE_SEARCH,
  EMPLOYEE_SEARCH_SUCCESS,
  EMPLOYEE_SEARCH_FAIL,
  EMPLOYEE_ADD_JOB_SUCCESS,
  addEmployee,
  addEmployeeSuccess,
  addEmployeeFail,
  saveEmployee,
  saveEmployeeSuccess,
  saveEmployeeFail,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeFail,
  getEmployee,
  getEmployeeSuccess,
  getEmployeeFail,
  searchEmployee,
  searchEmployeeSuccess,
  searchEmployeeFail,
  addJob
} from "..";
import type {
  EMPLOYEE_ADD_TYPE,
  EMPLOYEE_ADD_SUCCESS_TYPE,
  EMPLOYEE_ADD_FAIL_TYPE,
  EMPLOYEE_SAVE_TYPE,
  EMPLOYEE_SAVE_SUCCESS_TYPE,
  EMPLOYEE_SAVE_FAIL_TYPE,
  EMPLOYEE_UPDATE_TYPE,
  EMPLOYEE_UPDATE_SUCCESS_TYPE,
  EMPLOYEE_UPDATE_FAIL_TYPE,
  EMPLOYEE_GET_TYPE,
  EMPLOYEE_GET_SUCCESS_TYPE,
  EMPLOYEE_GET_FAIL_TYPE,
  EMPLOYEE_SEARCH_TYPE,
  EMPLOYEE_SEARCH_SUCCESS_TYPE,
  EMPLOYEE_SEARCH_FAIL_TYPE,
  EMPLOYEE_ADD_JOB_SUCCESS_TYPE
} from "..";

describe("Employee Actions", () => {
  describe("addEmployee", () => {
    it("should return the correct action with add data, form name, and promise", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const form = "EMPLOYEE_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: EMPLOYEE_ADD,
        payload: employee,
        form: form,
        promise: promise
      };

      expect(addEmployee(employee, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addEmployeeSuccess", () => {
    it("should return the correct action with results", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const expectedResult = {
        type: EMPLOYEE_ADD_SUCCESS,
        payload: employee
      };

      expect(addEmployeeSuccess(employee)).toEqual(expectedResult);
    });
  });

  describe("addEmployeeFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: EMPLOYEE_ADD_FAIL,
        error: error
      };

      expect(addEmployeeFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveEmployee", () => {
    it("should return the correct action with save data, form name, and promise", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const form = "EMPLOYEE_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: EMPLOYEE_SAVE,
        payload: employee,
        form: form,
        promise: promise
      };

      expect(saveEmployee(employee, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveEmployeeSuccess", () => {
    it("should return the correct action with results", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const expectedResult = {
        type: EMPLOYEE_SAVE_SUCCESS,
        payload: employee
      };

      expect(saveEmployeeSuccess(employee)).toEqual(expectedResult);
    });
  });

  describe("saveEmployeeFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: EMPLOYEE_SAVE_FAIL,
        error: error
      };

      expect(saveEmployeeFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateEmployee", () => {
    it("should return the correct action with update data, form name, and promise", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const form = "EMPLOYEE_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: EMPLOYEE_UPDATE,
        payload: employee,
        form: form,
        promise: promise
      };

      expect(updateEmployee(employee, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateEmployeeSuccess", () => {
    it("should return the correct action with results", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const expectedResult = {
        type: EMPLOYEE_UPDATE_SUCCESS,
        payload: employee
      };

      expect(updateEmployeeSuccess(employee)).toEqual(expectedResult);
    });
  });

  describe("updateEmployeeFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: EMPLOYEE_UPDATE_FAIL,
        error: error
      };

      expect(updateEmployeeFail(error)).toEqual(expectedResult);
    });
  });

  describe("getEmployee", () => {
    it("should return the correct action with Employee ID", () => {
      const employeeId = "7be2a9f1-706a-4105-9f1c-e3f6d8c56504";
      const expectedResult = {
        type: EMPLOYEE_GET,
        payload: employeeId
      };

      expect(getEmployee(employeeId)).toEqual(expectedResult);
    });
  });

  describe("getEmployeeSuccess", () => {
    it("should return the correct action with results", () => {
      const employee = {
        _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
        firstName: "Lawson",
        lastName: "Mante",
        email: "Mateo75@gmail.com",
        phoneNumber: "494-300-7018 x6451",
        hireDate: "2018-01-24T17:41:26.556Z",
        salary: 98998,
        commissionPct: 67245,
        undefined: []
      };
      const expectedResult = {
        type: EMPLOYEE_GET_SUCCESS,
        payload: employee
      };

      expect(getEmployeeSuccess(employee)).toEqual(expectedResult);
    });
  });

  describe("getEmployeeFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: EMPLOYEE_GET_FAIL,
        error: error
      };

      expect(getEmployeeFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchEmployee", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "EMPLOYEE_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: EMPLOYEE_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchEmployee(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchEmployeeSuccess", () => {
    it("should return the correct action with results", () => {
      const employees = [
        {
          _id: "7be2a9f1-706a-4105-9f1c-e3f6d8c56504",
          firstName: "Lawson",
          lastName: "Mante",
          email: "Mateo75@gmail.com",
          phoneNumber: "494-300-7018 x6451",
          hireDate: "2018-01-24T17:41:26.556Z",
          salary: 98998,
          commissionPct: 67245,
          undefined: []
        },
        {
          _id: "5081d0e3-6389-4954-b309-303a43bea3c9",
          firstName: "Malvina",
          lastName: "Wolf",
          email: "Nicolas32@gmail.com",
          phoneNumber: "(493) 651-8635",
          hireDate: "2017-07-01T02:57:37.629Z",
          salary: 80030,
          commissionPct: 27961,
          undefined: []
        },
        {
          _id: "e0471afb-1c6d-4719-9723-2aa6b7feff75",
          firstName: "Kim",
          lastName: "Beier",
          email: "Hayden64@gmail.com",
          phoneNumber: "437.658.5812 x4051",
          hireDate: "2017-12-29T07:39:12.119Z",
          salary: 3034,
          commissionPct: 72127,
          undefined: []
        }
      ];
      const expectedResult = {
        type: EMPLOYEE_SEARCH_SUCCESS,
        payload: employees
      };

      expect(searchEmployeeSuccess(employees)).toEqual(expectedResult);
    });
  });

  describe("searchEmployeeFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: EMPLOYEE_SEARCH_FAIL,
        error: error
      };

      expect(searchEmployeeFail(error)).toEqual(expectedResult);
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
        type: EMPLOYEE_ADD_JOB_SUCCESS,
        job
      };

      expect(addJob(job)).toEqual(expectedResult);
    });
  });
});
