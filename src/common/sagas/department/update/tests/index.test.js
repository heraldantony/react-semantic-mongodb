/*
 *  Test sagas for updating Department 
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

import { initialState, departmentReducer } from "common/reducers/department";

import {
  DEPARTMENT_UPDATE,
  updateDepartment as updateDepartmentAction,
  updateDepartmentSuccess,
  updateDepartmentFail
} from "common/actions/department";

import { departmentUpdateAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateDepartment, updateDepartment } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateDepartment Saga", () => {
  let doUpdateDepartmentGenerator;

  beforeEach(() => {
    doUpdateDepartmentGenerator = doUpdateDepartment();
  });
  afterEach(() => {});

  it("should update Department", () => {
    let fakeDepartment = {
      _id: "5beba8c9d42cea39441eb48c",
      departmentName: "Configuration",
      location: {
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
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
      ]
    };

    fakeDepartment["departmentName"] = "Usability";

    let fakeResult = { ok: true, data: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateDepartment, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(departmentUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateDepartmentSuccess action with updating entity data
          .put(updateDepartmentSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Department with message', () => {
    let fakeDepartment = {"_id":"5beba8c9d42cea39441eb48c","departmentName":"Configuration","location":{"_id":"5beba8c9d42cea39441eb482","streetAddress":"07240 Barrows Lakes","postalCode":"24105-1029","city":"South Guadalupe","stateProvince":"Maine","country":{"_id":"5beba8c9d42cea39441eb478","countryName":"Bermuda","region":{"_id":"5beba8c9d42cea39441eb46e","regionName":"South-east Asia"}}},"employees":[{"_id":"5beba8c9d42cea39441eb497","firstName":"Emilie","lastName":"Ratke","email":"Laverne_Lowe@gmail.com","phoneNumber":"222.889.6926","hireDate":"2018-01-10T01:40:11.143Z","salary":94629,"commissionPct":63967,"jobs":[{"_id":"5beba8c9d42cea39441eb4a2","jobTitle":"Dynamic Assurance Strategist","minSalary":14323,"maxSalary":6302,"tasks":[{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb498","firstName":"Lincoln","lastName":"Davis","email":"Nels24@hotmail.com","phoneNumber":"(311) 656-5404","hireDate":"2017-12-10T16:46:11.344Z","salary":93540,"commissionPct":75723,"jobs":[{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]}]}]}
    let fakeResult={ok: false, data: {message: 'Failed to update Department, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeDepartment, form: 'DEPARTMENT_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateDepartment, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(departmentUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateDepartmentFail action with error message
           .put(updateDepartmentFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeDepartment = {
      _id: "5beba8c9d42cea39441eb48c",
      departmentName: "Configuration",
      location: {
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
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
      ]
    };

    fakeDepartment["departmentName"] = "Optimization";

    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeDepartment,
        form: "DEPARTMENT_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateDepartment, action)
        .withReducer(departmentReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(departmentUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(
          updateDepartmentAction(action.payload, action.form, action.promise)
        )
        .run();
    });
  });
});
