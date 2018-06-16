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
      otherSearchStart: 0,
      otherSearchLimit: 10,
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
        _id: "5b254369063db83598df2d1c",
        title: "Sit aut dolores modi aut.",
        description:
          "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
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
        _id: "5b254369063db83598df2d1c",
        title: "Sit aut dolores modi aut.",
        description:
          "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
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
        _id: "5b254369063db83598df2d1c",
        title: "Sit aut dolores modi aut.",
        description:
          "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
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
          _id: "5b254369063db83598df2d1c",
          title: "Sit aut dolores modi aut.",
          description:
            "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
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
      ];
      const expectedResult = { ...state, tasks: tasks };

      expect(taskReducer(state, searchTaskSuccess(tasks))).toEqual(
        expectedResult
      );
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
        _id: "5b254369063db83598df2d1c",
        title: "Sit aut dolores modi aut.",
        description:
          "Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.",
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
        task: {
          ...state.task,
          jobs: [job]
        }
      };

      expect(taskReducer(state, addJob(job))).toEqual(expectedResult);
    });
  });
});
