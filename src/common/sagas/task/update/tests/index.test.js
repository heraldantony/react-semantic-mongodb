/*
 *  Test sagas for updating Task 
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

import { initialState, taskReducer } from "common/reducers/task";

import {
  TASK_UPDATE,
  updateTask as updateTaskAction,
  updateTaskSuccess,
  updateTaskFail
} from "common/actions/task";

import { taskUpdateAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateTask, updateTask } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateTask Saga", () => {
  let doUpdateTaskGenerator;

  beforeEach(() => {
    doUpdateTaskGenerator = doUpdateTask();
  });
  afterEach(() => {});

  it("should update Task", () => {
    let fakeTask = {
      _id: "5beba8c9d42cea39441eb4aa",
      title: "Quo aperiam soluta est dolorem.",
      description:
        "Et quae explicabo qui dolorem exercitationem. Et incidunt sed est provident distinctio exercitationem vitae. Temporibus sed similique. Officiis ex officiis. Enim placeat nesciunt consequatur ex omnis nihil omnis. Pariatur et repellat debitis consequuntur.",
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

    fakeTask["title"] = "Aut non dolore cupiditate.";

    fakeTask["description"] =
      "Ut adipisci quia temporibus. Nobis neque et nam ut voluptate. Ut dolor deserunt odio est harum neque magnam iure voluptas.";

    let fakeResult = { ok: true, data: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateTaskSuccess action with updating entity data
          .put(updateTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Task with message', () => {
    let fakeTask = {"_id":"5beba8c9d42cea39441eb4aa","title":"Quo aperiam soluta est dolorem.","description":"Et quae explicabo qui dolorem exercitationem. Et incidunt sed est provident distinctio exercitationem vitae. Temporibus sed similique. Officiis ex officiis. Enim placeat nesciunt consequatur ex omnis nihil omnis. Pariatur et repellat debitis consequuntur.","jobs":[{"_id":"5beba8c9d42cea39441eb4a1","jobTitle":"Legacy Division Technician","minSalary":39598,"maxSalary":6067,"tasks":[{"_id":"5beba8c9d42cea39441eb4ac","title":"Omnis aliquam non.","description":"Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.","jobs":[{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4a2","jobTitle":"Dynamic Assurance Strategist","minSalary":14323,"maxSalary":6302,"tasks":[{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]}]}]}
    let fakeResult={ok: false, data: {message: 'Failed to update Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeTask, form: 'TASK_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateTaskFail action with error message
           .put(updateTaskFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeTask = {
      _id: "5beba8c9d42cea39441eb4aa",
      title: "Quo aperiam soluta est dolorem.",
      description:
        "Et quae explicabo qui dolorem exercitationem. Et incidunt sed est provident distinctio exercitationem vitae. Temporibus sed similique. Officiis ex officiis. Enim placeat nesciunt consequatur ex omnis nihil omnis. Pariatur et repellat debitis consequuntur.",
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

    fakeTask["title"] = "Quia itaque et occaecati aliquid labore ex.";

    fakeTask["description"] =
      "Debitis ab et. Molestiae ut maiores doloremque. Et rerum exercitationem ea.";

    let fakeResult = { ok: true, data: fakeTask };
    let finalState = { ...initialState, task: fakeTask };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(updateTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
