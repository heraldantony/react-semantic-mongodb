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
                              jobTitle:
                                "Principal Configuration Representative",
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
        },
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
        _id: "5b254369063db83598df2d12",
        jobTitle: "Internal Factors Facilitator",
        minSalary: 53407,
        maxSalary: 8906,
        tasks: [
          {
            _id: "5b254369063db83598df2d1d",
            title:
              "Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio.",
            description:
              "Ut quasi minima voluptatem. Aut fuga dolorem id et sit quaerat maxime et. Quis aut excepturi soluta ratione eos vel a tempora delectus. Quam placeat sit ullam odit quia voluptates voluptate cum delectus. Cupiditate qui earum labore vel.",
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
          }
        ]
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
