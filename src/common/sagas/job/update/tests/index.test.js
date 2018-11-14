/*
 *  Test sagas for updating Job 
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

import { initialState, jobReducer } from "common/reducers/job";

import {
  JOB_UPDATE,
  updateJob as updateJobAction,
  updateJobSuccess,
  updateJobFail
} from "common/actions/job";

import { jobUpdateAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doUpdateJob, updateJob } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doUpdateJob Saga", () => {
  let doUpdateJobGenerator;

  beforeEach(() => {
    doUpdateJobGenerator = doUpdateJob();
  });
  afterEach(() => {});

  it("should update Job", () => {
    let fakeJob = {
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

    fakeJob["jobTitle"] = "Product Division Director";

    fakeJob["minSalary"] = 10367;

    fakeJob["maxSalary"] = 79570;

    let fakeResult = { ok: true, data: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doUpdateJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobUpdateAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield updateJobSuccess action with updating entity data
          .put(updateJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to update Job with message', () => {
    let fakeJob = {"_id":"5beba8c9d42cea39441eb4a0","jobTitle":"Product Brand Architect","minSalary":89948,"maxSalary":69568,"tasks":[{"_id":"5beba8c9d42cea39441eb4ab","title":"Quis minima asperiores ipsam vitae.","description":"Aliquid eveniet et. Voluptates non veritatis a. Neque quo accusantium et dolore sunt praesentium saepe. Voluptas minima est nam quo architecto dignissimos. Iure eum aut dolores quia ab rerum. Quia sit quia dolorem dolor blanditiis.","jobs":[{"_id":"5beba8c9d42cea39441eb4a2","jobTitle":"Dynamic Assurance Strategist","minSalary":14323,"maxSalary":6302,"tasks":[{"_id":"5beba8c9d42cea39441eb4ad","title":"Nam est sed non esse est commodi alias recusandae.","description":"Dolores aut distinctio fugiat quam aperiam aut reiciendis voluptatibus doloremque. Et sit rerum. Sequi incidunt maxime velit. Eos dolor deleniti dolorem voluptatibus suscipit eveniet necessitatibus aut quia. In quasi et repellendus et molestiae et reprehenderit. Minus minima et.","jobs":[{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]}]},{"_id":"5beba8c9d42cea39441eb4ac","title":"Omnis aliquam non.","description":"Est voluptatem distinctio quidem. Distinctio maxime omnis est sint laboriosam blanditiis. Nam facilis ullam saepe et ab libero excepturi sequi omnis. Nemo et eaque sit. Nam sed facere voluptas facilis et et quibusdam. Id aut quibusdam odit alias voluptas in quia.","jobs":[{"_id":"5beba8c9d42cea39441eb4a3","jobTitle":"Human Infrastructure Administrator","minSalary":90425,"maxSalary":51311,"tasks":[{"_id":"5beba8c9d42cea39441eb4ae","title":"Vel qui nostrum explicabo magnam officia.","description":"Aliquid dolore qui quod minus pariatur est quidem. Temporibus nisi ab cupiditate adipisci. Deleniti autem voluptatem blanditiis ullam.","jobs":[{"_id":"5beba8c9d42cea39441eb4a5","jobTitle":"Global Accountability Assistant","minSalary":48138,"maxSalary":67852,"tasks":[{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]}]},{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]}]},{"_id":"5beba8c9d42cea39441eb4a4","jobTitle":"Global Metrics Associate","minSalary":43734,"maxSalary":54679,"tasks":[{"_id":"5beba8c9d42cea39441eb4af","title":"Consequatur molestiae iste ipsa quasi a tenetur quam aut.","description":"Cumque atque quisquam. Iusto deserunt occaecati ut autem ut temporibus possimus saepe voluptas. Laudantium sunt molestias fugiat maxime ut sunt unde amet voluptatem.","jobs":[{"_id":"5beba8c9d42cea39441eb4a6","jobTitle":"Human Accountability Specialist","minSalary":45401,"maxSalary":45097,"tasks":[{"_id":"5beba8c9d42cea39441eb4b1","title":"Non rerum fuga qui eaque rerum sunt repudiandae dolores.","description":"Deserunt nesciunt placeat et similique et explicabo. Deleniti veniam beatae corrupti et. Voluptatibus dolor nobis illo ut aspernatur.","jobs":[]},{"_id":"5beba8c9d42cea39441eb4b2","title":"Nulla quos labore eos repellendus neque quibusdam.","description":"Quia dolor id dolores atque qui sit voluptatem animi. Totam omnis consectetur. Quidem aspernatur ab cupiditate inventore eum sed ullam. Quia sequi veritatis rerum possimus praesentium quisquam tempora nulla aut.","jobs":[]}]},{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]}]},{"_id":"5beba8c9d42cea39441eb4b0","title":"Nam aut placeat et est sunt aut.","description":"Est rerum eos. Harum inventore et aspernatur quo eaque. Alias sed iure vel nisi. Iusto praesentium animi voluptatibus eaque voluptatem nihil est dolore dolorem. Quia consequatur id minus inventore velit consequatur quibusdam amet nemo.","jobs":[{"_id":"5beba8c9d42cea39441eb4a7","jobTitle":"Direct Interactions Representative","minSalary":41265,"maxSalary":31800,"tasks":[]},{"_id":"5beba8c9d42cea39441eb4a8","jobTitle":"National Infrastructure Executive","minSalary":37266,"maxSalary":21003,"tasks":[]}]}]}]}]}
    let fakeResult={ok: false, data: {message: 'Failed to update Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeJob, form: 'JOB_UPDATE_FORM', promise: {resolve, reject} }
       return expectSaga(doUpdateJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobUpdateAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield updateJobFail action with error message
           .put(updateJobFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeJob = {
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

    fakeJob["jobTitle"] = "Internal Operations Producer";

    fakeJob["minSalary"] = 84434;

    fakeJob["maxSalary"] = 92957;

    let fakeResult = { ok: true, data: fakeJob };
    let finalState = { ...initialState, job: fakeJob };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_UPDATE_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(updateJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobUpdateAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(updateJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
