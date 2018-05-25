// @flow
import { fromJS } from "immutable";

import {
  addDepartment,
  addDepartmentSuccess,
  addDepartmentFail,
  saveDepartment,
  saveDepartmentSuccess,
  saveDepartmentFail,
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFail,
  searchDepartment,
  searchDepartmentSuccess,
  searchDepartmentFail,
  getDepartment,
  getDepartmentSuccess,
  getDepartmentFail,
  setLocation,
  addEmployee
} from "common/actions/department";
import { departmentReducer } from "common/reducers/department";

describe("Department Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      department: {},
      departments: [],
      start: 0,
      limit: 10,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchDepartments: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(departmentReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addDepartmentSuccess", () => {
    it("should update state with add results", () => {
      const department = {
        _id: "7a20df89-1692-4cca-9eed-1dff9c4a7d59",
        departmentName: "Marketing",
        location: {
          _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
          streetAddress: "473 Kuhn Plains",
          postalCode: "09305-0399",
          city: "Wainoshire",
          stateProvince: "Wisconsin",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        undefined: []
      };
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, addDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("addDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, addDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveDepartmentSuccess", () => {
    it("should update state with save results", () => {
      const department = {
        _id: "7a20df89-1692-4cca-9eed-1dff9c4a7d59",
        departmentName: "Marketing",
        location: {
          _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
          streetAddress: "473 Kuhn Plains",
          postalCode: "09305-0399",
          city: "Wainoshire",
          stateProvince: "Wisconsin",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        undefined: []
      };
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, saveDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, saveDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateDepartmentSuccess", () => {
    it("should update state with update results", () => {
      const department = {
        _id: "7a20df89-1692-4cca-9eed-1dff9c4a7d59",
        departmentName: "Marketing",
        location: {
          _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
          streetAddress: "473 Kuhn Plains",
          postalCode: "09305-0399",
          city: "Wainoshire",
          stateProvince: "Wisconsin",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        undefined: []
      };
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, updateDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("updateDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, updateDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchDepartmentSuccess", () => {
    it("should update state with search results", () => {
      const departments = [
        {
          _id: "7a20df89-1692-4cca-9eed-1dff9c4a7d59",
          departmentName: "Marketing",
          location: {
            _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
            streetAddress: "473 Kuhn Plains",
            postalCode: "09305-0399",
            city: "Wainoshire",
            stateProvince: "Wisconsin",
            country: {
              _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
              countryName: "Antigua and Barbuda",
              region: {
                _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
                regionName: "South-east Asia"
              }
            }
          },
          undefined: []
        },
        {
          _id: "0bd5e5b2-0764-4d80-9f49-3239d38172d9",
          departmentName: "Communications",
          location: {
            _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
            streetAddress: "473 Kuhn Plains",
            postalCode: "09305-0399",
            city: "Wainoshire",
            stateProvince: "Wisconsin",
            country: {
              _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
              countryName: "Antigua and Barbuda",
              region: {
                _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
                regionName: "South-east Asia"
              }
            }
          },
          undefined: []
        },
        {
          _id: "0f398865-deda-4e35-89f4-9c2ee0a2df59",
          departmentName: "Program",
          location: {
            _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
            streetAddress: "473 Kuhn Plains",
            postalCode: "09305-0399",
            city: "Wainoshire",
            stateProvince: "Wisconsin",
            country: {
              _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
              countryName: "Antigua and Barbuda",
              region: {
                _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
                regionName: "South-east Asia"
              }
            }
          },
          undefined: []
        }
      ];
      const expectedResult = { ...state, departments: departments };

      expect(
        departmentReducer(state, searchDepartmentSuccess(departments))
      ).toEqual(expectedResult);
    });
  });

  describe("searchDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, searchDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getDepartmentSuccess", () => {
    it("should update state with get results", () => {
      const department = {
        _id: "7a20df89-1692-4cca-9eed-1dff9c4a7d59",
        departmentName: "Marketing",
        location: {
          _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
          streetAddress: "473 Kuhn Plains",
          postalCode: "09305-0399",
          city: "Wainoshire",
          stateProvince: "Wisconsin",
          country: {
            _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
            countryName: "Antigua and Barbuda",
            region: {
              _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
              regionName: "South-east Asia"
            }
          }
        },
        undefined: []
      };
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, getDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("getDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, getDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("setLocation", () => {
    it("should update state with location", () => {
      const location = {
        _id: "feaac422-2c05-4217-b331-e4dad3df6e1d",
        streetAddress: "473 Kuhn Plains",
        postalCode: "09305-0399",
        city: "Wainoshire",
        stateProvince: "Wisconsin",
        country: {
          _id: "388be6d8-9bf6-40fa-b7a2-4f323c3d023a",
          countryName: "Antigua and Barbuda",
          region: {
            _id: "e4be3b4c-fd32-4ee1-90f1-448ab389dd53",
            regionName: "South-east Asia"
          }
        }
      };

      const expectedResult = {
        ...state,
        department: {
          ...state.department,
          location: location
        }
      };

      expect(departmentReducer(state, setLocation(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("addEmployee", () => {
    it("should update state with employee", () => {
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
        ...state,
        department: {
          ...state.department,
          employees: [employee]
        }
      };

      expect(departmentReducer(state, addEmployee(employee))).toEqual(
        expectedResult
      );
    });
  });
});
