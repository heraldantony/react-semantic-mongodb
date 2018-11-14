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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
      const employeeId = "5beba8c9d42cea39441eb496";
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
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
        jobs: [
          {
            _id: "5beba8c9d42cea39441eb4a1",
            jobTitle: "Legacy Division Technician",
            minSalary: 39598,
            maxSalary: 6067,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ac",
                title: "Omnis aliquam non.",
                description:
                  "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a3",
                    jobTitle: "Human Infrastructure Administrator",
                    minSalary: 90425,
                    maxSalary: 51311,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4ae",
                        title: "Vel qui nostrum explicabo magnam officia.",
                        description:
                          "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a5",
                            jobTitle: "Global Accountability Assistant",
                            minSalary: 48138,
                            maxSalary: 67852,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b0",
                                title: "Nam aut placeat et est sunt aut.",
                                description:
                                  "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                jobs: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4a7",
                                    jobTitle:
                                      "Direct Interactions Representative",
                                    minSalary: 41265,
                                    maxSalary: 31800,
                                    tasks: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4a8",
                                    jobTitle:
                                      "National Infrastructure Executive",
                                    minSalary: 37266,
                                    maxSalary: 21003,
                                    tasks: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4a2",
            jobTitle: "Dynamic Assurance Strategist",
            minSalary: 14323,
            maxSalary: 6302,
            tasks: [
              {
                _id: "5beba8c9d42cea39441eb4ad",
                title: "Nam est sed non esse est commodi alias recusandae.",
                description:
                  "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a4",
                    jobTitle: "Global Metrics Associate",
                    minSalary: 43734,
                    maxSalary: 54679,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4af",
                        title:
                          "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                        description:
                          "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a6",
                            jobTitle: "Human Accountability Specialist",
                            minSalary: 45401,
                            maxSalary: 45097,
                            tasks: [
                              {
                                _id: "5beba8c9d42cea39441eb4b1",
                                title:
                                  "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                description:
                                  "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                jobs: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4b2",
                                title:
                                  "Nulla quos labore eos repellendus neque quibusdam.",
                                description:
                                  "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                jobs: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4ae",
                title: "Vel qui nostrum explicabo magnam officia.",
                description:
                  "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                jobs: [
                  {
                    _id: "5beba8c9d42cea39441eb4a5",
                    jobTitle: "Global Accountability Assistant",
                    minSalary: 48138,
                    maxSalary: 67852,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b0",
                        title: "Nam aut placeat et est sunt aut.",
                        description:
                          "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                        jobs: [
                          {
                            _id: "5beba8c9d42cea39441eb4a7",
                            jobTitle: "Direct Interactions Representative",
                            minSalary: 41265,
                            maxSalary: 31800,
                            tasks: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4a8",
                            jobTitle: "National Infrastructure Executive",
                            minSalary: 37266,
                            maxSalary: 21003,
                            tasks: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4a6",
                    jobTitle: "Human Accountability Specialist",
                    minSalary: 45401,
                    maxSalary: 45097,
                    tasks: [
                      {
                        _id: "5beba8c9d42cea39441eb4b1",
                        title:
                          "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                        description:
                          "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                        jobs: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4b2",
                        title:
                          "Nulla quos labore eos repellendus neque quibusdam.",
                        description:
                          "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
          _id: "5beba8c9d42cea39441eb496",
          firstName: "Trinity",
          lastName: "Funk",
          email: "Therese99@hotmail.com",
          phoneNumber: "219.777.3989 x405",
          hireDate: "2018-04-09T20:17:10.530Z",
          salary: 18043,
          commissionPct: 72958,
          jobs: [
            {
              _id: "5beba8c9d42cea39441eb4a1",
              jobTitle: "Legacy Division Technician",
              minSalary: 39598,
              maxSalary: 6067,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4ac",
                  title: "Omnis aliquam non.",
                  description:
                    "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a3",
                      jobTitle: "Human Infrastructure Administrator",
                      minSalary: 90425,
                      maxSalary: 51311,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4ae",
                          title: "Vel qui nostrum explicabo magnam officia.",
                          description:
                            "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a5",
                              jobTitle: "Global Accountability Assistant",
                              minSalary: 48138,
                              maxSalary: 67852,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b0",
                                  title: "Nam aut placeat et est sunt aut.",
                                  description:
                                    "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                                  jobs: [
                                    {
                                      _id: "5beba8c9d42cea39441eb4a7",
                                      jobTitle:
                                        "Direct Interactions Representative",
                                      minSalary: 41265,
                                      maxSalary: 31800,
                                      tasks: []
                                    },
                                    {
                                      _id: "5beba8c9d42cea39441eb4a8",
                                      jobTitle:
                                        "National Infrastructure Executive",
                                      minSalary: 37266,
                                      maxSalary: 21003,
                                      tasks: []
                                    }
                                  ]
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4af",
                          title:
                            "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                          description:
                            "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a4",
                      jobTitle: "Global Metrics Associate",
                      minSalary: 43734,
                      maxSalary: 54679,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4af",
                          title:
                            "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                          description:
                            "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4ad",
                  title: "Nam est sed non esse est commodi alias recusandae.",
                  description:
                    "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a4",
                      jobTitle: "Global Metrics Associate",
                      minSalary: 43734,
                      maxSalary: 54679,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4af",
                          title:
                            "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                          description:
                            "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5beba8c9d42cea39441eb4a2",
              jobTitle: "Dynamic Assurance Strategist",
              minSalary: 14323,
              maxSalary: 6302,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4ad",
                  title: "Nam est sed non esse est commodi alias recusandae.",
                  description:
                    "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a4",
                      jobTitle: "Global Metrics Associate",
                      minSalary: 43734,
                      maxSalary: 54679,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4af",
                          title:
                            "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                          description:
                            "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4ae",
                  title: "Vel qui nostrum explicabo magnam officia.",
                  description:
                    "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
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
          _id: "5beba8c9d42cea39441eb497",
          firstName: "Emilie",
          lastName: "Ratke",
          email: "Laverne_Lowe@gmail.com",
          phoneNumber: "222.889.6926",
          hireDate: "2018-01-10T01:40:11.143Z",
          salary: 94629,
          commissionPct: 63967,
          jobs: [
            {
              _id: "5beba8c9d42cea39441eb4a2",
              jobTitle: "Dynamic Assurance Strategist",
              minSalary: 14323,
              maxSalary: 6302,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4ad",
                  title: "Nam est sed non esse est commodi alias recusandae.",
                  description:
                    "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a4",
                      jobTitle: "Global Metrics Associate",
                      minSalary: 43734,
                      maxSalary: 54679,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4af",
                          title:
                            "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                          description:
                            "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a6",
                              jobTitle: "Human Accountability Specialist",
                              minSalary: 45401,
                              maxSalary: 45097,
                              tasks: [
                                {
                                  _id: "5beba8c9d42cea39441eb4b1",
                                  title:
                                    "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                  description:
                                    "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                  jobs: []
                                },
                                {
                                  _id: "5beba8c9d42cea39441eb4b2",
                                  title:
                                    "Nulla quos labore eos repellendus neque quibusdam.",
                                  description:
                                    "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                  jobs: []
                                }
                              ]
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4ae",
                  title: "Vel qui nostrum explicabo magnam officia.",
                  description:
                    "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "5beba8c9d42cea39441eb4a3",
              jobTitle: "Human Infrastructure Administrator",
              minSalary: 90425,
              maxSalary: 51311,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4ae",
                  title: "Vel qui nostrum explicabo magnam officia.",
                  description:
                    "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4af",
                  title:
                    "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                  description:
                    "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a7",
                      jobTitle: "Direct Interactions Representative",
                      minSalary: 41265,
                      maxSalary: 31800,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "5beba8c9d42cea39441eb498",
          firstName: "Lincoln",
          lastName: "Davis",
          email: "Nels24@hotmail.com",
          phoneNumber: "(311) 656-5404",
          hireDate: "2017-12-10T16:46:11.344Z",
          salary: 93540,
          commissionPct: 75723,
          jobs: [
            {
              _id: "5beba8c9d42cea39441eb4a3",
              jobTitle: "Human Infrastructure Administrator",
              minSalary: 90425,
              maxSalary: 51311,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4ae",
                  title: "Vel qui nostrum explicabo magnam officia.",
                  description:
                    "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a5",
                      jobTitle: "Global Accountability Assistant",
                      minSalary: 48138,
                      maxSalary: 67852,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b0",
                          title: "Nam aut placeat et est sunt aut.",
                          description:
                            "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                          jobs: [
                            {
                              _id: "5beba8c9d42cea39441eb4a7",
                              jobTitle: "Direct Interactions Representative",
                              minSalary: 41265,
                              maxSalary: 31800,
                              tasks: []
                            },
                            {
                              _id: "5beba8c9d42cea39441eb4a8",
                              jobTitle: "National Infrastructure Executive",
                              minSalary: 37266,
                              maxSalary: 21003,
                              tasks: []
                            }
                          ]
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4af",
                  title:
                    "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                  description:
                    "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a7",
                      jobTitle: "Direct Interactions Representative",
                      minSalary: 41265,
                      maxSalary: 31800,
                      tasks: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "5beba8c9d42cea39441eb4a4",
              jobTitle: "Global Metrics Associate",
              minSalary: 43734,
              maxSalary: 54679,
              tasks: [
                {
                  _id: "5beba8c9d42cea39441eb4af",
                  title:
                    "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                  description:
                    "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a6",
                      jobTitle: "Human Accountability Specialist",
                      minSalary: 45401,
                      maxSalary: 45097,
                      tasks: [
                        {
                          _id: "5beba8c9d42cea39441eb4b1",
                          title:
                            "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                          description:
                            "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                          jobs: []
                        },
                        {
                          _id: "5beba8c9d42cea39441eb4b2",
                          title:
                            "Nulla quos labore eos repellendus neque quibusdam.",
                          description:
                            "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                          jobs: []
                        }
                      ]
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a7",
                      jobTitle: "Direct Interactions Representative",
                      minSalary: 41265,
                      maxSalary: 31800,
                      tasks: []
                    }
                  ]
                },
                {
                  _id: "5beba8c9d42cea39441eb4b0",
                  title: "Nam aut placeat et est sunt aut.",
                  description:
                    "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                  jobs: [
                    {
                      _id: "5beba8c9d42cea39441eb4a7",
                      jobTitle: "Direct Interactions Representative",
                      minSalary: 41265,
                      maxSalary: 31800,
                      tasks: []
                    },
                    {
                      _id: "5beba8c9d42cea39441eb4a8",
                      jobTitle: "National Infrastructure Executive",
                      minSalary: 37266,
                      maxSalary: 21003,
                      tasks: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ];
      const expectedResult = {
        type: EMPLOYEE_SEARCH_SUCCESS,
        payload: employees,
        total: employees.length
      };

      expect(searchEmployeeSuccess(employees, employees.length)).toEqual(
        expectedResult
      );
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
        _id: "5beba8c9d42cea39441eb4a0",
        jobTitle: "Product Brand Architect",
        minSalary: 89948,
        maxSalary: 69568,
        tasks: [
          {
            _id: "5beba8c9d42cea39441eb4ab",
            title: "Quis minima asperiores ipsam vitae.",
            description:
              "Aliquid eveniet et. Voluptates non veritatis a. Neque quo accusantium et dolore sunt praesentium saepe. Voluptas minima est nam quo architecto dignissimos. Iure eum aut dolores quia ab rerum. Quia sit quia dolorem dolor blanditiis.",
            jobs: [
              {
                _id: "5beba8c9d42cea39441eb4a2",
                jobTitle: "Dynamic Assurance Strategist",
                minSalary: 14323,
                maxSalary: 6302,
                tasks: [
                  {
                    _id: "5beba8c9d42cea39441eb4ad",
                    title: "Nam est sed non esse est commodi alias recusandae.",
                    description:
                      "Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a4",
                        jobTitle: "Global Metrics Associate",
                        minSalary: 43734,
                        maxSalary: 54679,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4af",
                            title:
                              "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                            description:
                              "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a6",
                                jobTitle: "Human Accountability Specialist",
                                minSalary: 45401,
                                maxSalary: 45097,
                                tasks: [
                                  {
                                    _id: "5beba8c9d42cea39441eb4b1",
                                    title:
                                      "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                                    description:
                                      "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                                    jobs: []
                                  },
                                  {
                                    _id: "5beba8c9d42cea39441eb4b2",
                                    title:
                                      "Nulla quos labore eos repellendus neque quibusdam.",
                                    description:
                                      "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                                    jobs: []
                                  }
                                ]
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b0",
                            title: "Nam aut placeat et est sunt aut.",
                            description:
                              "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a8",
                                jobTitle: "National Infrastructure Executive",
                                minSalary: 37266,
                                maxSalary: 21003,
                                tasks: []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a5",
                        jobTitle: "Global Accountability Assistant",
                        minSalary: 48138,
                        maxSalary: 67852,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b0",
                            title: "Nam aut placeat et est sunt aut.",
                            description:
                              "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a8",
                                jobTitle: "National Infrastructure Executive",
                                minSalary: 37266,
                                maxSalary: 21003,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4ae",
                    title: "Vel qui nostrum explicabo magnam officia.",
                    description:
                      "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a5",
                        jobTitle: "Global Accountability Assistant",
                        minSalary: 48138,
                        maxSalary: 67852,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b0",
                            title: "Nam aut placeat et est sunt aut.",
                            description:
                              "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a8",
                                jobTitle: "National Infrastructure Executive",
                                minSalary: 37266,
                                maxSalary: 21003,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4a3",
                jobTitle: "Human Infrastructure Administrator",
                minSalary: 90425,
                maxSalary: 51311,
                tasks: [
                  {
                    _id: "5beba8c9d42cea39441eb4ae",
                    title: "Vel qui nostrum explicabo magnam officia.",
                    description:
                      "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a5",
                        jobTitle: "Global Accountability Assistant",
                        minSalary: 48138,
                        maxSalary: 67852,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b0",
                            title: "Nam aut placeat et est sunt aut.",
                            description:
                              "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a8",
                                jobTitle: "National Infrastructure Executive",
                                minSalary: 37266,
                                maxSalary: 21003,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4af",
                    title:
                      "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                    description:
                      "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a7",
                        jobTitle: "Direct Interactions Representative",
                        minSalary: 41265,
                        maxSalary: 31800,
                        tasks: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            _id: "5beba8c9d42cea39441eb4ac",
            title: "Omnis aliquam non.",
            description:
              "Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.",
            jobs: [
              {
                _id: "5beba8c9d42cea39441eb4a3",
                jobTitle: "Human Infrastructure Administrator",
                minSalary: 90425,
                maxSalary: 51311,
                tasks: [
                  {
                    _id: "5beba8c9d42cea39441eb4ae",
                    title: "Vel qui nostrum explicabo magnam officia.",
                    description:
                      "Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a5",
                        jobTitle: "Global Accountability Assistant",
                        minSalary: 48138,
                        maxSalary: 67852,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b0",
                            title: "Nam aut placeat et est sunt aut.",
                            description:
                              "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                            jobs: [
                              {
                                _id: "5beba8c9d42cea39441eb4a7",
                                jobTitle: "Direct Interactions Representative",
                                minSalary: 41265,
                                maxSalary: 31800,
                                tasks: []
                              },
                              {
                                _id: "5beba8c9d42cea39441eb4a8",
                                jobTitle: "National Infrastructure Executive",
                                minSalary: 37266,
                                maxSalary: 21003,
                                tasks: []
                              }
                            ]
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4af",
                    title:
                      "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                    description:
                      "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a7",
                        jobTitle: "Direct Interactions Representative",
                        minSalary: 41265,
                        maxSalary: 31800,
                        tasks: []
                      }
                    ]
                  }
                ]
              },
              {
                _id: "5beba8c9d42cea39441eb4a4",
                jobTitle: "Global Metrics Associate",
                minSalary: 43734,
                maxSalary: 54679,
                tasks: [
                  {
                    _id: "5beba8c9d42cea39441eb4af",
                    title:
                      "Consequatur molestiae iste ipsa quasi a tenetur quam aut.",
                    description:
                      "Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a6",
                        jobTitle: "Human Accountability Specialist",
                        minSalary: 45401,
                        maxSalary: 45097,
                        tasks: [
                          {
                            _id: "5beba8c9d42cea39441eb4b1",
                            title:
                              "Non rerum fuga qui eaque rerum sunt repudiandae dolores.",
                            description:
                              "Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.",
                            jobs: []
                          },
                          {
                            _id: "5beba8c9d42cea39441eb4b2",
                            title:
                              "Nulla quos labore eos repellendus neque quibusdam.",
                            description:
                              "Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.",
                            jobs: []
                          }
                        ]
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a7",
                        jobTitle: "Direct Interactions Representative",
                        minSalary: 41265,
                        maxSalary: 31800,
                        tasks: []
                      }
                    ]
                  },
                  {
                    _id: "5beba8c9d42cea39441eb4b0",
                    title: "Nam aut placeat et est sunt aut.",
                    description:
                      "Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.",
                    jobs: [
                      {
                        _id: "5beba8c9d42cea39441eb4a7",
                        jobTitle: "Direct Interactions Representative",
                        minSalary: 41265,
                        maxSalary: 31800,
                        tasks: []
                      },
                      {
                        _id: "5beba8c9d42cea39441eb4a8",
                        jobTitle: "National Infrastructure Executive",
                        minSalary: 37266,
                        maxSalary: 21003,
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
        type: EMPLOYEE_ADD_JOB_SUCCESS,
        job
      };

      expect(addJob(job)).toEqual(expectedResult);
    });
  });
});
