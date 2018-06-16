/*
 *  Test sagas for adding Job 
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
  JOB_ADD,
  addJob as addJobAction,
  addJobSuccess,
  addJobFail
} from "common/actions/job";

import { jobAddAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doAddJob, addJob } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doAddJob Saga", () => {
  let doAddJobGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    doAddJobGenerator = doAddJob();
  });
  afterEach(() => {});

  it("should add Job", () => {
    let fakeJob = {
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
      ]
    };
    delete fakeJob["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "7fec60a4-5789-45ed-be86-cfedfe099c3c", ...fakeJob }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_ADD_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doAddJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobAddAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield addJobSuccess action with new entity data
          .put(addJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to add Job with message', () => {
    let fakeJob = {"_id":"5b254369063db83598df2d12","jobTitle":"Internal Factors Facilitator","minSalary":53407,"maxSalary":8906,"tasks":[{"_id":"5b254369063db83598df2d1d","title":"Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio.","description":"Ut quasi minima voluptatem. Aut fuga dolorem id et sit quaerat maxime et. Quis aut excepturi soluta ratione eos vel a tempora delectus. Quam placeat sit ullam odit quia voluptates voluptate cum delectus. Cupiditate qui earum labore vel.","jobs":[{"_id":"5b254369063db83598df2d14","jobTitle":"Senior Solutions Administrator","minSalary":79377,"maxSalary":92116,"tasks":[{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]}]},{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]}]},{"_id":"5b254369063db83598df2d1e","title":"Iure dolores beatae qui et beatae et sed.","description":"Repudiandae beatae eius omnis impedit voluptate voluptates accusantium. Voluptatem necessitatibus repellat voluptas corporis voluptas est odio incidunt totam. Exercitationem id libero quam neque. Consectetur quas debitis occaecati modi magnam consequuntur est vero. Sequi corrupti et maiores culpa quisquam excepturi voluptatum qui maiores.","jobs":[{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]}]}]}
    delete fakeJob['_id'];
    let fakeResult={ok: false, data: {message: 'Failed to add Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: fakeJob, form: 'JOB_ADD_FORM', promise: {resolve, reject} }
       return expectSaga(doAddJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobAddAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield addJobFail action with error message
           .put(addJobFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeJob = {
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
      ]
    };
    delete fakeJob["_id"];
    let fakeResult = {
      ok: true,
      data: { _id: "e6d8dabe-d9b8-47a8-be40-8da66cfcf536", ...fakeJob }
    };
    let finalState = {
      ...initialState,
      job: { ...fakeJob, _id: fakeResult.data._id }
    };
    return new Promise((resolve, reject) => {
      let action = {
        payload: fakeJob,
        form: "JOB_ADD_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doAddJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobAddAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(addJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
