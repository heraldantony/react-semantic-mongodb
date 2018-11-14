// @flow
/*
 * Test actions for entity Job 
 *
*/

import {
  JOB_ADD,
  JOB_ADD_SUCCESS,
  JOB_ADD_FAIL,
  JOB_SAVE,
  JOB_SAVE_SUCCESS,
  JOB_SAVE_FAIL,
  JOB_UPDATE,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_GET,
  JOB_GET_SUCCESS,
  JOB_GET_FAIL,
  JOB_SEARCH,
  JOB_SEARCH_SUCCESS,
  JOB_SEARCH_FAIL,
  JOB_ADD_TASK_SUCCESS,
  addJob,
  addJobSuccess,
  addJobFail,
  saveJob,
  saveJobSuccess,
  saveJobFail,
  updateJob,
  updateJobSuccess,
  updateJobFail,
  getJob,
  getJobSuccess,
  getJobFail,
  searchJob,
  searchJobSuccess,
  searchJobFail,
  addTask
} from "..";
import type {
  JOB_ADD_TYPE,
  JOB_ADD_SUCCESS_TYPE,
  JOB_ADD_FAIL_TYPE,
  JOB_SAVE_TYPE,
  JOB_SAVE_SUCCESS_TYPE,
  JOB_SAVE_FAIL_TYPE,
  JOB_UPDATE_TYPE,
  JOB_UPDATE_SUCCESS_TYPE,
  JOB_UPDATE_FAIL_TYPE,
  JOB_GET_TYPE,
  JOB_GET_SUCCESS_TYPE,
  JOB_GET_FAIL_TYPE,
  JOB_SEARCH_TYPE,
  JOB_SEARCH_SUCCESS_TYPE,
  JOB_SEARCH_FAIL_TYPE,
  JOB_ADD_TASK_SUCCESS_TYPE
} from "..";

describe("Job Actions", () => {
  describe("addJob", () => {
    it("should return the correct action with add data, form name, and promise", () => {
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
      const form = "JOB_ADD_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_ADD,
        payload: job,
        form: form,
        promise: promise
      };

      expect(addJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("addJobSuccess", () => {
    it("should return the correct action with results", () => {
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
        type: JOB_ADD_SUCCESS,
        payload: job
      };

      expect(addJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("addJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_ADD_FAIL,
        error: error
      };

      expect(addJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("saveJob", () => {
    it("should return the correct action with save data, form name, and promise", () => {
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
      const form = "JOB_SAVE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SAVE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(saveJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("saveJobSuccess", () => {
    it("should return the correct action with results", () => {
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
        type: JOB_SAVE_SUCCESS,
        payload: job
      };

      expect(saveJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("saveJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SAVE_FAIL,
        error: error
      };

      expect(saveJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("updateJob", () => {
    it("should return the correct action with update data, form name, and promise", () => {
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
      const form = "JOB_UPDATE_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_UPDATE,
        payload: job,
        form: form,
        promise: promise
      };

      expect(updateJob(job, form, promise)).toEqual(expectedResult);
    });
  });

  describe("updateJobSuccess", () => {
    it("should return the correct action with results", () => {
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
        type: JOB_UPDATE_SUCCESS,
        payload: job
      };

      expect(updateJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("updateJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_UPDATE_FAIL,
        error: error
      };

      expect(updateJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("getJob", () => {
    it("should return the correct action with Job ID", () => {
      const jobId = "5beba8c9d42cea39441eb4a0";
      const expectedResult = {
        type: JOB_GET,
        payload: jobId
      };

      expect(getJob(jobId)).toEqual(expectedResult);
    });
  });

  describe("getJobSuccess", () => {
    it("should return the correct action with results", () => {
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
        type: JOB_GET_SUCCESS,
        payload: job
      };

      expect(getJobSuccess(job)).toEqual(expectedResult);
    });
  });

  describe("getJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_GET_FAIL,
        error: error
      };

      expect(getJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("searchJob", () => {
    it("should return the correct action with search data, form name, and promise", () => {
      const payload = { search: "test", pageNumber: 1, pageSize: 10 };
      const form = "JOB_SEARCH_FORM";
      const promise = {};
      const expectedResult = {
        type: JOB_SEARCH,
        payload: payload,
        form: form,
        promise: promise
      };

      expect(searchJob(payload, form, promise)).toEqual(expectedResult);
    });
  });
  describe("searchJobSuccess", () => {
    it("should return the correct action with results", () => {
      const jobs = [
        {
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
                      title:
                        "Nam est sed non esse est commodi alias recusandae.",
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
                                  jobTitle:
                                    "Direct Interactions Representative",
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
            }
          ]
        },
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
      ];
      const expectedResult = {
        type: JOB_SEARCH_SUCCESS,
        payload: jobs,
        total: jobs.length
      };

      expect(searchJobSuccess(jobs, jobs.length)).toEqual(expectedResult);
    });
  });

  describe("searchJobFail", () => {
    it("should return the correct action with error", () => {
      const error = "Some random error";
      const expectedResult = {
        type: JOB_SEARCH_FAIL,
        error: error
      };

      expect(searchJobFail(error)).toEqual(expectedResult);
    });
  });

  describe("addTask", () => {
    it("should return the correct action with task", () => {
      const task = {
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
        type: JOB_ADD_TASK_SUCCESS,
        task
      };

      expect(addTask(task)).toEqual(expectedResult);
    });
  });
});
