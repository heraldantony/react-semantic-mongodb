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
        _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
        departmentName: "Communications",
        location: {
          _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
          streetAddress: "15615 Prosacco Alley",
          postalCode: "69000",
          city: "Lake Anaton",
          stateProvince: "Michigan",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
        departmentName: "Communications",
        location: {
          _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
          streetAddress: "15615 Prosacco Alley",
          postalCode: "69000",
          city: "Lake Anaton",
          stateProvince: "Michigan",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
        departmentName: "Communications",
        location: {
          _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
          streetAddress: "15615 Prosacco Alley",
          postalCode: "69000",
          city: "Lake Anaton",
          stateProvince: "Michigan",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
          _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
          departmentName: "Communications",
          location: {
            _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
            streetAddress: "15615 Prosacco Alley",
            postalCode: "69000",
            city: "Lake Anaton",
            stateProvince: "Michigan",
            country: {
              _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
              countryName: "Aruba",
              region: {
                _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
                regionName: "South-east Asia"
              }
            }
          },
          undefined: []
        },
        {
          _id: "577923db-db20-4322-8562-28e08dd28bef",
          departmentName: "Solutions",
          location: {
            _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
            streetAddress: "15615 Prosacco Alley",
            postalCode: "69000",
            city: "Lake Anaton",
            stateProvince: "Michigan",
            country: {
              _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
              countryName: "Aruba",
              region: {
                _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
                regionName: "South-east Asia"
              }
            }
          },
          undefined: []
        },
        {
          _id: "d760be3b-3b1f-42da-9d52-5f0d080a05b6",
          departmentName: "Group",
          location: {
            _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
            streetAddress: "15615 Prosacco Alley",
            postalCode: "69000",
            city: "Lake Anaton",
            stateProvince: "Michigan",
            country: {
              _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
              countryName: "Aruba",
              region: {
                _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "ead82594-40fe-4e42-a0a3-4dbaf524333b",
        departmentName: "Communications",
        location: {
          _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
          streetAddress: "15615 Prosacco Alley",
          postalCode: "69000",
          city: "Lake Anaton",
          stateProvince: "Michigan",
          country: {
            _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
            countryName: "Aruba",
            region: {
              _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
        _id: "10484fff-9593-4d5b-b26d-f01799c79a3f",
        streetAddress: "15615 Prosacco Alley",
        postalCode: "69000",
        city: "Lake Anaton",
        stateProvince: "Michigan",
        country: {
          _id: "f8057f81-9663-4c01-a556-dfe45c72fb50",
          countryName: "Aruba",
          region: {
            _id: "95e0e7aa-6679-423b-930a-7c0a284836ec",
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
