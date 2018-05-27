// @flow
import { fromJS } from "immutable";

import {
  addEmployee,
  addEmployeeSuccess,
  addEmployeeFail,
  saveEmployee,
  saveEmployeeSuccess,
  saveEmployeeFail,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeFail,
  searchEmployee,
  searchEmployeeSuccess,
  searchEmployeeFail,
  getEmployee,
  getEmployeeSuccess,
  getEmployeeFail,
  addJob
} from "common/actions/employee";
import { employeeReducer } from "common/reducers/employee";

describe("Employee Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      employee: {},
      employees: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchEmployees: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(employeeReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addEmployeeSuccess", () => {
    it("should update state with add results", () => {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, addEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("addEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, addEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveEmployeeSuccess", () => {
    it("should update state with save results", () => {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, saveEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, saveEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateEmployeeSuccess", () => {
    it("should update state with update results", () => {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, updateEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, updateEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchEmployeeSuccess", () => {
    it("should update state with search results", () => {
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
      const expectedResult = { ...state, employees: employees };

      expect(employeeReducer(state, searchEmployeeSuccess(employees))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, searchEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getEmployeeSuccess", () => {
    it("should update state with get results", () => {
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
      const expectedResult = { ...state, employee: employee };

      expect(employeeReducer(state, getEmployeeSuccess(employee))).toEqual(
        expectedResult
      );
    });
  });

  describe("getEmployeeFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(employeeReducer(state, getEmployeeFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("addJob", () => {
    it("should update state with job", () => {
      const job = {
        _id: "cc63e617-b34c-4808-a000-7faf49595268",
        jobTitle: "Central Program Assistant",
        minSalary: 89368,
        maxSalary: 13863,
        undefined: []
      };

      const expectedResult = {
        ...state,
        employee: {
          ...state.employee,
          jobs: [job]
        }
      };

      expect(employeeReducer(state, addJob(job))).toEqual(expectedResult);
    });
  });
});
