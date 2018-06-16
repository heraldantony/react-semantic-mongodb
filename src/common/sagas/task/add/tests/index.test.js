/*
 *  Test sagas for adding Task 
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
  TASK_ADD,
  addTask as addTaskAction,
  addTaskSuccess,
  addTaskFail
} from "common/actions/task";

import { taskAddAPI } from "common/api/TaskSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddTask, addTask } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddTask Saga", () => {
  let doAddTaskGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddTaskGenerator = doAddTask();
  });
  afterEach(() => {});

  it("should add Task", () => {
    let fakeTask = {
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
    delete fakeTask["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "a20f5bb5-f912-4459-88e0-c15f95771e03", ...fakeTask }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddTask, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(taskAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addTaskSuccess action with new entity data
          .put(addTaskSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Task with message', () => {
    let fakeTask = {"_id":"5b254369063db83598df2d1c","title":"Sit aut dolores modi aut.","description":"Odit non neque culpa inventore deserunt illum natus reiciendis. Soluta eos consequuntur qui hic reprehenderit ea aliquam delectus sit. Ea est aut quis non temporibus sunt laborum accusamus. Et tempore ea velit enim alias aut sit. Quam qui sit. Voluptates sapiente nisi minus nihil quae.","jobs":[{"_id":"5b254369063db83598df2d13","jobTitle":"Central Metrics Administrator","minSalary":78472,"maxSalary":53709,"tasks":[{"_id":"5b254369063db83598df2d1e","title":"Iure dolores beatae qui et beatae et sed.","description":"Repudiandae beatae eius omnis impedit voluptate voluptates accusantium. Voluptatem necessitatibus repellat voluptas corporis voluptas est odio incidunt totam. Exercitationem id libero quam neque. Consectetur quas debitis occaecati modi magnam consequuntur est vero. Sequi corrupti et maiores culpa quisquam excepturi voluptatum qui maiores.","jobs":[{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]}]},{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]}]},{"_id":"5b254369063db83598df2d14","jobTitle":"Senior Solutions Administrator","minSalary":79377,"maxSalary":92116,"tasks":[{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]}]}]}
    delete fakeTask['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Task, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeTask, form: 'TASK_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddTask, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(taskAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addTaskFail action with error message
           .put(addTaskFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeTask = {
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
    delete fakeTask["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "70fa79f2-7124-4d1e-a5c7-99eee3a3e389", ...fakeTask }
    };
    let finalState = {
      ...initialState,
      task: { ...fakeTask, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeTask,
        form: "TASK_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddTask, action)
        .withReducer(taskReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(taskAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addTaskAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
