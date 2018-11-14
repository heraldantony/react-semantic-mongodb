// @flow
import { fromJS } from "immutable";

import {
  addTask,
  addTaskSuccess,
  addTaskFail,
  saveTask,
  saveTaskSuccess,
  saveTaskFail,
  updateTask,
  updateTaskSuccess,
  updateTaskFail,
  searchTask,
  searchTaskSuccess,
  searchTaskFail,
  getTask,
  getTaskSuccess,
  getTaskFail,
  addJob
} from "common/actions/task";
import { taskReducer } from "common/reducers/task";

describe("Task Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      task: {},
      tasks: [],
      start: 0,
      limit: 10,
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
      otherSearchTasks: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(taskReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addTaskSuccess", () => {
    it("should update state with add results", () => {
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
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, addTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("addTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, addTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("saveTaskSuccess", () => {
    it("should update state with save results", () => {
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
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, saveTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("saveTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, saveTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("updateTaskSuccess", () => {
    it("should update state with update results", () => {
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
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, updateTaskSuccess(task))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, updateTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("searchTaskSuccess", () => {
    it("should update state with search results", () => {
      const tasks = [
        {
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
        },
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
      ];
      const expectedResult = {
        ...state,
        tasks: tasks,
        totalItemsCount: tasks.length
      };

      expect(
        taskReducer(state, searchTaskSuccess(tasks, tasks.length))
      ).toEqual(expectedResult);
    });
  });

  describe("searchTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, searchTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("getTaskSuccess", () => {
    it("should update state with get results", () => {
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
      const expectedResult = { ...state, task: task };

      expect(taskReducer(state, getTaskSuccess(task))).toEqual(expectedResult);
    });
  });

  describe("getTaskFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(taskReducer(state, getTaskFail(error))).toEqual(expectedResult);
    });
  });

  describe("addJob", () => {
    it("should update state with job", () => {
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
        ...state,
        task: {
          ...state.task,
          jobs: [job]
        }
      };

      expect(taskReducer(state, addJob(job))).toEqual(expectedResult);
    });
  });
});
