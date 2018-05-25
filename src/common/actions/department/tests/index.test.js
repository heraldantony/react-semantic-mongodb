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
      const departmentId = "7a20df89-1692-4cca-9eed-1dff9c4a7d59";
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
        type: DEPARTMENT_SET_LOCATION_SUCCESS,
        location
      };

      expect(setLocation(location)).toEqual(expectedResult);
    });
  });

  describe("addEmployee", () => {
    it("should return the correct action with employee", () => {
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
        type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
        employee
      };

      expect(addEmployee(employee)).toEqual(expectedResult);
    });
  });
});
