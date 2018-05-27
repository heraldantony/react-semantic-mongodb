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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
      const employeeId = "595533cc-8c3d-4d69-9106-1e1bc8a0ccda";
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
        _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
        firstName: "Wallace",
        lastName: "Pollich",
        email: "Kara38@gmail.com",
        phoneNumber: "1-701-546-0394 x188",
        hireDate: "2017-10-21T22:25:56.081Z",
        salary: 6438,
        commissionPct: 44475,
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
          _id: "595533cc-8c3d-4d69-9106-1e1bc8a0ccda",
          firstName: "Wallace",
          lastName: "Pollich",
          email: "Kara38@gmail.com",
          phoneNumber: "1-701-546-0394 x188",
          hireDate: "2017-10-21T22:25:56.081Z",
          salary: 6438,
          commissionPct: 44475,
          undefined: []
        },
        {
          _id: "a10c5c2e-1bc4-4420-9e01-9903ff279a07",
          firstName: "Derick",
          lastName: "Pfeffer",
          email: "Felton.Hansen37@yahoo.com",
          phoneNumber: "759-856-0321 x4561",
          hireDate: "2017-07-07T18:05:18.274Z",
          salary: 85216,
          commissionPct: 95379,
          undefined: []
        },
        {
          _id: "80e75d2c-1cef-4c5a-bf35-abdd46462568",
          firstName: "Jaron",
          lastName: "Koelpin",
          email: "Watson.Batz@yahoo.com",
          phoneNumber: "514-926-5302 x1530",
          hireDate: "2017-06-16T09:49:47.342Z",
          salary: 83923,
          commissionPct: 96603,
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
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
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
