/*
 *  Test sagas for updating Employee 
 *
*/

import { SubmissionError, startSubmit, reset, stopSubmit } from "redux-form";
import {
  call,
  put,
  select,
  takeLatest,
  take,
  cancel
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "react-router-redux";

import { initialState, employeeReducer } from "common/reducers/employee";

import {
  EMPLOYEE_UPDATE,
  updateEmployee as updateEmployeeAction,
  updateEmployeeSuccess,
  updateEmployeeFail
} from "common/actions/employee";

import { employeeUpdateAPI } from "common/api/EmployeeSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateEmployee, updateEmployee } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateEmployee Saga", () => {
  let doUpdateEmployeeGenerator;

  beforeEach(() => {
    doUpdateEmployeeGenerator = doUpdateEmployee();
  });
  afterEach(() => {});

  it("should update Employee", () => {
    let fakeEmployee = {
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

    fakeEmployee["firstName"] = "Reva";

    fakeEmployee["lastName"] = "Weimann";

    fakeEmployee["email"] = "Reanna.Hilpert@yahoo.com";

    fakeEmployee["phoneNumber"] = "1-189-401-9013";

    fakeEmployee["hireDate"] =
      "Sat Nov 10 2018 15:37:07 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 58078;

    fakeEmployee["commissionPct"] = 16547;

    let fakeResult = { ok: true, data: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateEmployee, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(employeeUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateEmployeeSuccess action with updating entity data
          .put(updateEmployeeSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Employee with message', () => {
    let fakeEmployee = {"_id":"5beba8c9d42cea39441eb496","firstName":"Trinity","lastName":"Funk","email":"Therese99@hotmail.com","phoneNumber":"219.777.3989 x405","hireDate":"2018-04-09T20:17:10.530Z","salary":18043,"commissionPct":72958,"jobs":[{"_id":"5beba8c9d42cea39441eb4a1","jobTitle":"Legacy Division Technician","minSalary":39598,"maxSalary":6067,"tasks":[{"_id":"5beba8c9d42cea39441eb4ac","title":"Omnis aliquam non.","description":"Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.","jobs":[{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4a2","jobTitle":"Dynamic Assurance Strategist","minSalary":14323,"maxSalary":6302,"tasks":[{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]}]}]}
    let fakeResult={ok: false, data: {message: 'Failed to update Employee, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeEmployee, form: 'EMPLOYEE_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateEmployee, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(employeeUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateEmployeeFail action with error message
           .put(updateEmployeeFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeEmployee = {
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

    fakeEmployee["firstName"] = "Jedediah";

    fakeEmployee["lastName"] = "O&#39;Kon";

    fakeEmployee["email"] = "Eudora_Dietrich@hotmail.com";

    fakeEmployee["phoneNumber"] = "254-827-3928 x251";

    fakeEmployee["hireDate"] =
      "Thu May 24 2018 15:04:54 GMT+0530 (India Standard Time)";

    fakeEmployee["salary"] = 81122;

    fakeEmployee["commissionPct"] = 69345;

    let fakeResult = { ok: true, data: fakeEmployee };
    let finalState = { ...initialState, employee: fakeEmployee };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeEmployee,
        form: "EMPLOYEE_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateEmployee, action)
        .withReducer(employeeReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(employeeUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateEmployeeAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
