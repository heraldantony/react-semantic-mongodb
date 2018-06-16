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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
      const departmentId = "5b254369063db83598df2cfe";
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
        _id: "5b254369063db83598df2cfe",
        departmentName: "Optimization",
        location: {
          _id: "5b254369063db83598df2cf4",
          streetAddress: "0312 Alessandra Loop",
          postalCode: "97889-8410",
          city: "East Dejahbury",
          stateProvince: "Connecticut",
          country: {
            _id: "5b254369063db83598df2cea",
            countryName: "Grenada",
            region: {
              _id: "5b254369063db83598df2ce0",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5b254369063db83598df2d09",
            firstName: "Hattie",
            lastName: "Gusikowski",
            email: "Lysanne50@yahoo.com",
            phoneNumber: "1-070-345-3867",
            hireDate: "2018-02-28T23:33:35.473Z",
            salary: 86322,
            commissionPct: 7799,
            jobs: [
              {
                _id: "5b254369063db83598df2d14",
                jobTitle: "Senior Solutions Administrator",
                minSalary: 79377,
                maxSalary: 92116,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d1f",
                    title: "Nihil est animi.",
                    description:
                      "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d16",
                        jobTitle: "Central Intranet Producer",
                        minSalary: 11705,
                        maxSalary: 37904,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d21",
                            title:
                              "Mollitia eum magni in quasi nesciunt totam.",
                            description:
                              "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d18",
                                jobTitle: "National Response Developer",
                                minSalary: 31152,
                                maxSalary: 19557,
                                tasks: [
                                  {
                                    _id: "5b254369063db83598df2d23",
                                    title:
                                      "Et quia in quis modi minima quod voluptates iste.",
                                    description:
                                      "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d24",
                                    title:
                                      "Incidunt tenetur quas qui mollitia.",
                                    description:
                                      "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d0a",
            firstName: "Carissa",
            lastName: "Barrows",
            email: "Angela15@gmail.com",
            phoneNumber: "724.764.7759 x90445",
            hireDate: "2018-05-02T12:48:31.883Z",
            salary: 31436,
            commissionPct: 96274,
            jobs: [
              {
                _id: "5b254369063db83598df2d15",
                jobTitle: "Corporate Web Liaison",
                minSalary: 85109,
                maxSalary: 71038,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d20",
                    title:
                      "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                    description:
                      "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d17",
                        jobTitle: "Principal Configuration Representative",
                        minSalary: 72156,
                        maxSalary: 67196,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d22",
                            title: "Et hic eum.",
                            description:
                              "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                            jobs: [
                              {
                                _id: "5b254369063db83598df2d19",
                                jobTitle: "Dynamic Branding Orchestrator",
                                minSalary: 4723,
                                maxSalary: 11754,
                                tasks: []
                              },
                              {
                                _id: "5b254369063db83598df2d1a",
                                jobTitle: "Dynamic Brand Consultant",
                                minSalary: 3532,
                                maxSalary: 67241,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d16",
                jobTitle: "Central Intranet Producer",
                minSalary: 11705,
                maxSalary: 37904,
                tasks: [
                  {
                    _id: "5b254369063db83598df2d21",
                    title: "Mollitia eum magni in quasi nesciunt totam.",
                    description:
                      "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d18",
                        jobTitle: "National Response Developer",
                        minSalary: 31152,
                        maxSalary: 19557,
                        tasks: [
                          {
                            _id: "5b254369063db83598df2d23",
                            title:
                              "Et quia in quis modi minima quod voluptates iste.",
                            description:
                              "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                            jobs: []
                          },
                          {
                            _id: "5b254369063db83598df2d24",
                            title: "Incidunt tenetur quas qui mollitia.",
                            description:
                              "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d22",
                    title: "Et hic eum.",
                    description:
                      "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                    jobs: [
                      {
                        _id: "5b254369063db83598df2d19",
                        jobTitle: "Dynamic Branding Orchestrator",
                        minSalary: 4723,
                        maxSalary: 11754,
                        tasks: []
                      },
                      {
                        _id: "5b254369063db83598df2d1a",
                        jobTitle: "Dynamic Brand Consultant",
                        minSalary: 3532,
                        maxSalary: 67241,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
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
          _id: "5b254369063db83598df2cfe",
          departmentName: "Optimization",
          location: {
            _id: "5b254369063db83598df2cf4",
            streetAddress: "0312 Alessandra Loop",
            postalCode: "97889-8410",
            city: "East Dejahbury",
            stateProvince: "Connecticut",
            country: {
              _id: "5b254369063db83598df2cea",
              countryName: "Grenada",
              region: {
                _id: "5b254369063db83598df2ce0",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5b254369063db83598df2d09",
              firstName: "Hattie",
              lastName: "Gusikowski",
              email: "Lysanne50@yahoo.com",
              phoneNumber: "1-070-345-3867",
              hireDate: "2018-02-28T23:33:35.473Z",
              salary: 86322,
              commissionPct: 7799,
              jobs: [
                {
                  _id: "5b254369063db83598df2d14",
                  jobTitle: "Senior Solutions Administrator",
                  minSalary: 79377,
                  maxSalary: 92116,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d1f",
                      title: "Nihil est animi.",
                      description:
                        "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d16",
                          jobTitle: "Central Intranet Producer",
                          minSalary: 11705,
                          maxSalary: 37904,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d21",
                              title:
                                "Mollitia eum magni in quasi nesciunt totam.",
                              description:
                                "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d18",
                                  jobTitle: "National Response Developer",
                                  minSalary: 31152,
                                  maxSalary: 19557,
                                  tasks: [
                                    {
                                      _id: "5b254369063db83598df2d23",
                                      title:
                                        "Et quia in quis modi minima quod voluptates iste.",
                                      description:
                                        "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                      jobs: []
                                    },
                                    {
                                      _id: "5b254369063db83598df2d24",
                                      title:
                                        "Incidunt tenetur quas qui mollitia.",
                                      description:
                                        "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                      jobs: []
                                    }
                                  ]
                                },
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d17",
                          jobTitle: "Principal Configuration Representative",
                          minSalary: 72156,
                          maxSalary: 67196,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d20",
                      title:
                        "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                      description:
                        "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d17",
                          jobTitle: "Principal Configuration Representative",
                          minSalary: 72156,
                          maxSalary: 67196,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d15",
                  jobTitle: "Corporate Web Liaison",
                  minSalary: 85109,
                  maxSalary: 71038,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d20",
                      title:
                        "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                      description:
                        "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d17",
                          jobTitle: "Principal Configuration Representative",
                          minSalary: 72156,
                          maxSalary: 67196,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5b254369063db83598df2d0a",
              firstName: "Carissa",
              lastName: "Barrows",
              email: "Angela15@gmail.com",
              phoneNumber: "724.764.7759 x90445",
              hireDate: "2018-05-02T12:48:31.883Z",
              salary: 31436,
              commissionPct: 96274,
              jobs: [
                {
                  _id: "5b254369063db83598df2d15",
                  jobTitle: "Corporate Web Liaison",
                  minSalary: 85109,
                  maxSalary: 71038,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d20",
                      title:
                        "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                      description:
                        "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d17",
                          jobTitle: "Principal Configuration Representative",
                          minSalary: 72156,
                          maxSalary: 67196,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d16",
                  jobTitle: "Central Intranet Producer",
                  minSalary: 11705,
                  maxSalary: 37904,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "5b254369063db83598df2cff",
          departmentName: "Metrics",
          location: {
            _id: "5b254369063db83598df2cf4",
            streetAddress: "0312 Alessandra Loop",
            postalCode: "97889-8410",
            city: "East Dejahbury",
            stateProvince: "Connecticut",
            country: {
              _id: "5b254369063db83598df2cea",
              countryName: "Grenada",
              region: {
                _id: "5b254369063db83598df2ce0",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5b254369063db83598df2d0a",
              firstName: "Carissa",
              lastName: "Barrows",
              email: "Angela15@gmail.com",
              phoneNumber: "724.764.7759 x90445",
              hireDate: "2018-05-02T12:48:31.883Z",
              salary: 31436,
              commissionPct: 96274,
              jobs: [
                {
                  _id: "5b254369063db83598df2d15",
                  jobTitle: "Corporate Web Liaison",
                  minSalary: 85109,
                  maxSalary: 71038,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d20",
                      title:
                        "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                      description:
                        "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d17",
                          jobTitle: "Principal Configuration Representative",
                          minSalary: 72156,
                          maxSalary: 67196,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d22",
                              title: "Et hic eum.",
                              description:
                                "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                              jobs: [
                                {
                                  _id: "5b254369063db83598df2d19",
                                  jobTitle: "Dynamic Branding Orchestrator",
                                  minSalary: 4723,
                                  maxSalary: 11754,
                                  tasks: []
                                },
                                {
                                  _id: "5b254369063db83598df2d1a",
                                  jobTitle: "Dynamic Brand Consultant",
                                  minSalary: 3532,
                                  maxSalary: 67241,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d16",
                  jobTitle: "Central Intranet Producer",
                  minSalary: 11705,
                  maxSalary: 37904,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5b254369063db83598df2d0b",
              firstName: "Narciso",
              lastName: "Christiansen",
              email: "Howard_Hoeger@gmail.com",
              phoneNumber: "851-669-0469 x0139",
              hireDate: "2017-10-27T03:35:56.028Z",
              salary: 42970,
              commissionPct: 61213,
              jobs: [
                {
                  _id: "5b254369063db83598df2d16",
                  jobTitle: "Central Intranet Producer",
                  minSalary: 11705,
                  maxSalary: 37904,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d17",
                  jobTitle: "Principal Configuration Representative",
                  minSalary: 72156,
                  maxSalary: 67196,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d23",
                      title:
                        "Et quia in quis modi minima quod voluptates iste.",
                      description:
                        "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                      jobs: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "5b254369063db83598df2d00",
          departmentName: "Mobility",
          location: {
            _id: "5b254369063db83598df2cf4",
            streetAddress: "0312 Alessandra Loop",
            postalCode: "97889-8410",
            city: "East Dejahbury",
            stateProvince: "Connecticut",
            country: {
              _id: "5b254369063db83598df2cea",
              countryName: "Grenada",
              region: {
                _id: "5b254369063db83598df2ce0",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5b254369063db83598df2d0b",
              firstName: "Narciso",
              lastName: "Christiansen",
              email: "Howard_Hoeger@gmail.com",
              phoneNumber: "851-669-0469 x0139",
              hireDate: "2017-10-27T03:35:56.028Z",
              salary: 42970,
              commissionPct: 61213,
              jobs: [
                {
                  _id: "5b254369063db83598df2d16",
                  jobTitle: "Central Intranet Producer",
                  minSalary: 11705,
                  maxSalary: 37904,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d21",
                      title: "Mollitia eum magni in quasi nesciunt totam.",
                      description:
                        "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d18",
                          jobTitle: "National Response Developer",
                          minSalary: 31152,
                          maxSalary: 19557,
                          tasks: [
                            {
                              _id: "5b254369063db83598df2d23",
                              title:
                                "Et quia in quis modi minima quod voluptates iste.",
                              description:
                                "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                              jobs: []
                            },
                            {
                              _id: "5b254369063db83598df2d24",
                              title: "Incidunt tenetur quas qui mollitia.",
                              description:
                                "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d17",
                  jobTitle: "Principal Configuration Representative",
                  minSalary: 72156,
                  maxSalary: 67196,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d23",
                      title:
                        "Et quia in quis modi minima quod voluptates iste.",
                      description:
                        "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                      jobs: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "5b254369063db83598df2d0c",
              firstName: "Dillan",
              lastName: "Larkin",
              email: "Monica.Oberbrunner@yahoo.com",
              phoneNumber: "(660) 956-0818",
              hireDate: "2017-08-15T15:22:26.449Z",
              salary: 43152,
              commissionPct: 51668,
              jobs: [
                {
                  _id: "5b254369063db83598df2d17",
                  jobTitle: "Principal Configuration Representative",
                  minSalary: 72156,
                  maxSalary: 67196,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d22",
                      title: "Et hic eum.",
                      description:
                        "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                      jobs: [
                        {
                          _id: "5b254369063db83598df2d19",
                          jobTitle: "Dynamic Branding Orchestrator",
                          minSalary: 4723,
                          maxSalary: 11754,
                          tasks: []
                        },
                        {
                          _id: "5b254369063db83598df2d1a",
                          jobTitle: "Dynamic Brand Consultant",
                          minSalary: 3532,
                          maxSalary: 67241,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "5b254369063db83598df2d23",
                      title:
                        "Et quia in quis modi minima quod voluptates iste.",
                      description:
                        "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                      jobs: []
                    }
                  ]
                },
                {
                  _id: "5b254369063db83598df2d18",
                  jobTitle: "National Response Developer",
                  minSalary: 31152,
                  maxSalary: 19557,
                  tasks: [
                    {
                      _id: "5b254369063db83598df2d23",
                      title:
                        "Et quia in quis modi minima quod voluptates iste.",
                      description:
                        "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                      jobs: []
                    },
                    {
                      _id: "5b254369063db83598df2d24",
                      title: "Incidunt tenetur quas qui mollitia.",
                      description:
                        "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                      jobs: []
                    }
                  ]
                }
              ]
            }
          ]
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
        _id: "5b254369063db83598df2cf4",
        streetAddress: "0312 Alessandra Loop",
        postalCode: "97889-8410",
        city: "East Dejahbury",
        stateProvince: "Connecticut",
        country: {
          _id: "5b254369063db83598df2cea",
          countryName: "Grenada",
          region: {
            _id: "5b254369063db83598df2ce0",
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
        _id: "5b254369063db83598df2d08",
        firstName: "Addie",
        lastName: "Collins",
        email: "Dedrick_DuBuque@yahoo.com",
        phoneNumber: "961.198.0838",
        hireDate: "2017-07-23T13:58:11.883Z",
        salary: 76298,
        commissionPct: 38779,
        jobs: [
          {
            _id: "5b254369063db83598df2d13",
            jobTitle: "Central Metrics Administrator",
            minSalary: 78472,
            maxSalary: 53709,
            tasks: [
              {
                _id: "5b254369063db83598df2d1e",
                title: "Iure dolores beatae qui et beatae et sed.",
                description:
                  "Repudiandae beatae eius omnis impedit voluptate voluptates accusantium. Voluptatem necessitatibus repellat voluptas corporis voluptas est odio incidunt totam. Exercitationem id libero quam neque. Consectetur quas debitis occaecati modi magnam consequuntur est vero. Sequi corrupti et maiores culpa quisquam excepturi voluptatum qui maiores.",
                jobs: [
                  {
                    _id: "5b254369063db83598df2d15",
                    jobTitle: "Corporate Web Liaison",
                    minSalary: 85109,
                    maxSalary: 71038,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d20",
                        title:
                          "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                        description:
                          "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d17",
                            jobTitle: "Principal Configuration Representative",
                            minSalary: 72156,
                            maxSalary: 67196,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d22",
                                title: "Et hic eum.",
                                description:
                                  "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                                jobs: [
                                  {
                                    _id: "5b254369063db83598df2d19",
                                    jobTitle: "Dynamic Branding Orchestrator",
                                    minSalary: 4723,
                                    maxSalary: 11754,
                                    tasks: []
                                  },
                                  {
                                    _id: "5b254369063db83598df2d1a",
                                    jobTitle: "Dynamic Brand Consultant",
                                    minSalary: 3532,
                                    maxSalary: 67241,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d18",
                            jobTitle: "National Response Developer",
                            minSalary: 31152,
                            maxSalary: 19557,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              },
                              {
                                _id: "5b254369063db83598df2d24",
                                title: "Incidunt tenetur quas qui mollitia.",
                                description:
                                  "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d21",
                        title: "Mollitia eum magni in quasi nesciunt totam.",
                        description:
                          "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d18",
                            jobTitle: "National Response Developer",
                            minSalary: 31152,
                            maxSalary: 19557,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              },
                              {
                                _id: "5b254369063db83598df2d24",
                                title: "Incidunt tenetur quas qui mollitia.",
                                description:
                                  "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d16",
                    jobTitle: "Central Intranet Producer",
                    minSalary: 11705,
                    maxSalary: 37904,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d21",
                        title: "Mollitia eum magni in quasi nesciunt totam.",
                        description:
                          "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d18",
                            jobTitle: "National Response Developer",
                            minSalary: 31152,
                            maxSalary: 19557,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              },
                              {
                                _id: "5b254369063db83598df2d24",
                                title: "Incidunt tenetur quas qui mollitia.",
                                description:
                                  "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d1f",
                title: "Nihil est animi.",
                description:
                  "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                jobs: [
                  {
                    _id: "5b254369063db83598df2d16",
                    jobTitle: "Central Intranet Producer",
                    minSalary: 11705,
                    maxSalary: 37904,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d21",
                        title: "Mollitia eum magni in quasi nesciunt totam.",
                        description:
                          "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d18",
                            jobTitle: "National Response Developer",
                            minSalary: 31152,
                            maxSalary: 19557,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              },
                              {
                                _id: "5b254369063db83598df2d24",
                                title: "Incidunt tenetur quas qui mollitia.",
                                description:
                                  "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d17",
                    jobTitle: "Principal Configuration Representative",
                    minSalary: 72156,
                    maxSalary: 67196,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d23",
                        title:
                          "Et quia in quis modi minima quod voluptates iste.",
                        description:
                          "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5b254369063db83598df2d14",
            jobTitle: "Senior Solutions Administrator",
            minSalary: 79377,
            maxSalary: 92116,
            tasks: [
              {
                _id: "5b254369063db83598df2d1f",
                title: "Nihil est animi.",
                description:
                  "Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.",
                jobs: [
                  {
                    _id: "5b254369063db83598df2d16",
                    jobTitle: "Central Intranet Producer",
                    minSalary: 11705,
                    maxSalary: 37904,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d21",
                        title: "Mollitia eum magni in quasi nesciunt totam.",
                        description:
                          "Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d18",
                            jobTitle: "National Response Developer",
                            minSalary: 31152,
                            maxSalary: 19557,
                            tasks: [
                              {
                                _id: "5b254369063db83598df2d23",
                                title:
                                  "Et quia in quis modi minima quod voluptates iste.",
                                description:
                                  "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                                jobs: []
                              },
                              {
                                _id: "5b254369063db83598df2d24",
                                title: "Incidunt tenetur quas qui mollitia.",
                                description:
                                  "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d17",
                    jobTitle: "Principal Configuration Representative",
                    minSalary: 72156,
                    maxSalary: 67196,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d23",
                        title:
                          "Et quia in quis modi minima quod voluptates iste.",
                        description:
                          "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5b254369063db83598df2d20",
                title:
                  "Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.",
                description:
                  "Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.",
                jobs: [
                  {
                    _id: "5b254369063db83598df2d17",
                    jobTitle: "Principal Configuration Representative",
                    minSalary: 72156,
                    maxSalary: 67196,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d22",
                        title: "Et hic eum.",
                        description:
                          "Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.",
                        jobs: [
                          {
                            _id: "5b254369063db83598df2d19",
                            jobTitle: "Dynamic Branding Orchestrator",
                            minSalary: 4723,
                            maxSalary: 11754,
                            tasks: []
                          },
                          {
                            _id: "5b254369063db83598df2d1a",
                            jobTitle: "Dynamic Brand Consultant",
                            minSalary: 3532,
                            maxSalary: 67241,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5b254369063db83598df2d23",
                        title:
                          "Et quia in quis modi minima quod voluptates iste.",
                        description:
                          "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5b254369063db83598df2d18",
                    jobTitle: "National Response Developer",
                    minSalary: 31152,
                    maxSalary: 19557,
                    tasks: [
                      {
                        _id: "5b254369063db83598df2d23",
                        title:
                          "Et quia in quis modi minima quod voluptates iste.",
                        description:
                          "Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.",
                        jobs: []
                      },
                      {
                        _id: "5b254369063db83598df2d24",
                        title: "Incidunt tenetur quas qui mollitia.",
                        description:
                          "Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };
      const expectedResult = {
        type: DEPARTMENT_ADD_EMPLOYEE_SUCCESS,
        employee
      };

      expect(addEmployee(employee)).toEqual(expectedResult);
    });
  });
});
