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
        _id: "acb92846-feaf-4369-a853-e0b6ec3c8716",
        jobTitle: "Product Applications Facilitator",
        minSalary: 79081,
        maxSalary: 97938,
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
