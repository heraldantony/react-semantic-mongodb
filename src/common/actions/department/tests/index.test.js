// @flow
/*
 * Test actions for entity Department 
 *
*/

import {
  DEPARTMENT_ADD,
  DEPARTMENT_ADD_SUCCESS,
  DEPARTMENT_ADD_FAIL,
  DEPARTMENT_SAVE,
  DEPARTMENT_SAVE_SUCCESS,
  DEPARTMENT_SAVE_FAIL,
  DEPARTMENT_UPDATE,
  DEPARTMENT_UPDATE_SUCCESS,
  DEPARTMENT_UPDATE_FAIL,
  DEPARTMENT_GET,
  DEPARTMENT_GET_SUCCESS,
  DEPARTMENT_GET_FAIL,
  DEPARTMENT_SEARCH,
  DEPARTMENT_SEARCH_SUCCESS,
  DEPARTMENT_SEARCH_FAIL,
  DEPARTMENT_SET_LOCATION_SUCCESS,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
  addDepartment,
  addDepartmentSuccess,
  addDepartmentFail,
  saveDepartment,
  saveDepartmentSuccess,
  saveDepartmentFail,
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFail,
  getDepartment,
  getDepartmentSuccess,
  getDepartmentFail,
  searchDepartment,
  searchDepartmentSuccess,
  searchDepartmentFail,
  setLocation,
  addEmployee
} from "..";
import type {
  DEPARTMENT_ADD_TYPE,
  DEPARTMENT_ADD_SUCCESS_TYPE,
  DEPARTMENT_ADD_FAIL_TYPE,
  DEPARTMENT_SAVE_TYPE,
  DEPARTMENT_SAVE_SUCCESS_TYPE,
  DEPARTMENT_SAVE_FAIL_TYPE,
  DEPARTMENT_UPDATE_TYPE,
  DEPARTMENT_UPDATE_SUCCESS_TYPE,
  DEPARTMENT_UPDATE_FAIL_TYPE,
  DEPARTMENT_GET_TYPE,
  DEPARTMENT_GET_SUCCESS_TYPE,
  DEPARTMENT_GET_FAIL_TYPE,
  DEPARTMENT_SEARCH_TYPE,
  DEPARTMENT_SEARCH_SUCCESS_TYPE,
  DEPARTMENT_SEARCH_FAIL_TYPE,
  DEPARTMENT_SET_LOCATION_SUCCESS_TYPE,
  DEPARTMENT_ADD_EMPLOYEE_SUCCESS_TYPE
} from "..";

describe("Department Actions", () => {
  describe("addDepartment", () => {
    it("should return the correct action with add data, form name, and promise", () => {
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
      const form = "DEPARTMENT_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_ADD,
        payload: department,
        form: form,
        promise: promise
      };

      expect(addDepartment(department, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: DEPARTMENT_ADD_SUCCESS,
        payload: department
      };

      expect(addDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("addDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_ADD_FAIL,
        error: error
      };

      expect(addDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveDepartment", () => {
    it("should return the correct action with save data, form name, and promise", () => {
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
      const form = "DEPARTMENT_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_SAVE,
        payload: department,
        form: form,
        promise: promise
      };

      expect(saveDepartment(department, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: DEPARTMENT_SAVE_SUCCESS,
        payload: department
      };

      expect(saveDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_SAVE_FAIL,
        error: error
      };

      expect(saveDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateDepartment", () => {
    it("should return the correct action with update data, form name, and promise", () => {
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
      const form = "DEPARTMENT_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_UPDATE,
        payload: department,
        form: form,
        promise: promise
      };

      expect(updateDepartment(department, form, promise)).toEqual(
        expectedResult
      );
    });
  });

  describe("updateDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: DEPARTMENT_UPDATE_SUCCESS,
        payload: department
      };

      expect(updateDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("updateDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_UPDATE_FAIL,
        error: error
      };

      expect(updateDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("getDepartment", () => {
    it("should return the correct action with Department ID", () => {
      const departmentId = "ead82594-40fe-4e42-a0a3-4dbaf524333b";
      const expectedResult = {
        type: DEPARTMENT_GET,
        payload: departmentId
      };

      expect(getDepartment(departmentId)).toEqual(expectedResult);
    });
  });

  describe("getDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: DEPARTMENT_GET_SUCCESS,
        payload: department
      };

      expect(getDepartmentSuccess(department)).toEqual(expectedResult);
    });
  });

  describe("getDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_GET_FAIL,
        error: error
      };

      expect(getDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchDepartment", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "DEPARTMENT_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: DEPARTMENT_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchDepartment(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchDepartmentSuccess", () => {
    it("should return the correct action with results", () => {
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
      const expectedResult = {
        type: DEPARTMENT_SEARCH_SUCCESS,
        payload: departments
      };

      expect(searchDepartmentSuccess(departments)).toEqual(expectedResult);
    });
  });

  describe("searchDepartmentFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: DEPARTMENT_SEARCH_FAIL,
        error: error
      };

      expect(searchDepartmentFail(error)).toEqual(expectedResult);
    });
  });

  describe("setLocation", () => {
    it("should return the correct action with location", () => {
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
        type: DEPARTMENT_SET_LOCATION_SUCCESS,
        location
      };

      expect(setLocation(location)).toEqual(expectedResult);
    });
  });

  describe("addEmployee", () => {
    it("should return the correct action with employee", () => {
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
        type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
        employee
      };

      expect(addEmployee(employee)).toEqual(expectedResult);
    });
  });
});
