/*
 *  Test sagas for searching Job 
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
  JOB_SEARCH,
  searchJob as searchJobAction,
  searchJobSuccess,
  searchJobFail
} from "common/actions/job";

import { jobSearchAPI } from "common/api/JobSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doSearchJob, searchJob } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doSearchJob Saga", () => {
  let doSearchJobGenerator;

  beforeEach(() => {
    doSearchJobGenerator = doSearchJob();
  });
  afterEach(() => {});

  it("should search and return  Job List", () => {
    let fakeJobList = [
      {
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
      },
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: fakeJobList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "JOB_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return (
        expectSaga(doSearchJob, action)
          .provide([
            [call(startSubmit, action.form), {}],
            [call(jobSearchAPI, action.payload), fakeResult],
            [call(stopSubmit, action.form), {}],
            [call(reset, action.form), {}]
          ])
          //assert that saga will eventually yield searchJobSuccess action with search
          .put(searchJobSuccess(fakeResult.data))
          .run()
      );
    });
  });
  /*
  it('should fail to search for Job with message', () => {
    let fakeJobList = [{"_id":"5b254369063db83598df2d12","jobTitle":"Internal Factors Facilitator","minSalary":53407,"maxSalary":8906,"tasks":[{"_id":"5b254369063db83598df2d1d","title":"Totam culpa aut qui vel consequatur quod voluptatum aspernatur odio.","description":"Ut quasi minima voluptatem. Aut fuga dolorem id et sit quaerat maxime et. Quis aut excepturi soluta ratione eos vel a tempora delectus. Quam placeat sit ullam odit quia voluptates voluptate cum delectus. Cupiditate qui earum labore vel.","jobs":[{"_id":"5b254369063db83598df2d14","jobTitle":"Senior Solutions Administrator","minSalary":79377,"maxSalary":92116,"tasks":[{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]}]},{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]}]},{"_id":"5b254369063db83598df2d1e","title":"Iure dolores beatae qui et beatae et sed.","description":"Repudiandae beatae eius omnis impedit voluptate voluptates accusantium. Voluptatem necessitatibus repellat voluptas corporis voluptas est odio incidunt totam. Exercitationem id libero quam neque. Consectetur quas debitis occaecati modi magnam consequuntur est vero. Sequi corrupti et maiores culpa quisquam excepturi voluptatum qui maiores.","jobs":[{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]}]}]},{"_id":"5b254369063db83598df2d13","jobTitle":"Central Metrics Administrator","minSalary":78472,"maxSalary":53709,"tasks":[{"_id":"5b254369063db83598df2d1e","title":"Iure dolores beatae qui et beatae et sed.","description":"Repudiandae beatae eius omnis impedit voluptate voluptates accusantium. Voluptatem necessitatibus repellat voluptas corporis voluptas est odio incidunt totam. Exercitationem id libero quam neque. Consectetur quas debitis occaecati modi magnam consequuntur est vero. Sequi corrupti et maiores culpa quisquam excepturi voluptatum qui maiores.","jobs":[{"_id":"5b254369063db83598df2d15","jobTitle":"Corporate Web Liaison","minSalary":85109,"maxSalary":71038,"tasks":[{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]}]},{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]}]},{"_id":"5b254369063db83598df2d14","jobTitle":"Senior Solutions Administrator","minSalary":79377,"maxSalary":92116,"tasks":[{"_id":"5b254369063db83598df2d1f","title":"Nihil est animi.","description":"Accusamus quibusdam animi eius sint consequuntur aliquam nostrum facere maiores. Eum hic quo impedit. Unde dolor eius. Velit omnis commodi ipsam sint nostrum id perspiciatis quia eveniet. Magnam assumenda ipsam numquam occaecati quaerat distinctio dolores et id. Voluptatum beatae delectus aliquam non illum quia omnis.","jobs":[{"_id":"5b254369063db83598df2d16","jobTitle":"Central Intranet Producer","minSalary":11705,"maxSalary":37904,"tasks":[{"_id":"5b254369063db83598df2d21","title":"Mollitia eum magni in quasi nesciunt totam.","description":"Corrupti voluptatem sequi quia. Molestiae aut dolor. Eos corporis repellat. Ab molestiae molestiae.","jobs":[{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]},{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]}]},{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]}]},{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]}]},{"_id":"5b254369063db83598df2d20","title":"Excepturi esse cumque aut quisquam consequatur rerum et dolore doloremque.","description":"Ab modi temporibus sed corrupti vero iste dolorem. Consequatur perspiciatis alias dolores dolores laboriosam minima. Vel dolor quaerat quis numquam iure ut voluptatibus. Reiciendis error voluptas voluptas.","jobs":[{"_id":"5b254369063db83598df2d17","jobTitle":"Principal Configuration Representative","minSalary":72156,"maxSalary":67196,"tasks":[{"_id":"5b254369063db83598df2d22","title":"Et hic eum.","description":"Accusantium eum eos iusto. Vero exercitationem saepe doloribus architecto et voluptatem reprehenderit. Qui asperiores temporibus. Perferendis et amet dolore sit neque est possimus. Temporibus voluptatum voluptatem voluptatem voluptas est at aperiam nam perspiciatis.","jobs":[{"_id":"5b254369063db83598df2d19","jobTitle":"Dynamic Branding Orchestrator","minSalary":4723,"maxSalary":11754,"tasks":[]},{"_id":"5b254369063db83598df2d1a","jobTitle":"Dynamic Brand Consultant","minSalary":3532,"maxSalary":67241,"tasks":[]}]},{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]}]},{"_id":"5b254369063db83598df2d18","jobTitle":"National Response Developer","minSalary":31152,"maxSalary":19557,"tasks":[{"_id":"5b254369063db83598df2d23","title":"Et quia in quis modi minima quod voluptates iste.","description":"Eaque alias ratione et aspernatur rerum. Ab ex adipisci ab architecto ut fugit nam. Consequuntur qui consequatur tempore voluptatem. Sequi voluptas non est quae officiis. Cupiditate aspernatur eum. Dolore ut distinctio in quia omnis et atque.","jobs":[]},{"_id":"5b254369063db83598df2d24","title":"Incidunt tenetur quas qui mollitia.","description":"Eos repellat incidunt modi. Ducimus qui veritatis rerum amet iusto iure velit ea. Eum optio dolorem voluptas suscipit doloremque suscipit. Provident repellat animi repellendus qui assumenda. Rerum vero quasi corporis necessitatibus perferendis beatae exercitationem. Nulla ullam deleniti sunt et qui quaerat blanditiis in eveniet.","jobs":[]}]}]}]}]
    let searchFormData = {search: 'test', pageNumber: 1, pageSize: 10}
    let fakeResult={ok: false, data: {message: 'Failed to search for Job, random error' } }
    return new Promise((resolve, reject) => {
       let action = {payload: searchFormData, form: 'JOB_SEARCH_FORM', promise: {resolve, reject} }
       return expectSaga(doSearchJob, action)
           .provide([
              [call(startSubmit, action.form), {}],
              [call(jobSearchAPI, action.payload), fakeResult],
           ])
           //assert that saga will eventually yield searchJobFail action with error message
           .put(searchJobFail(fakeResult.data.message))
           .run()
            .catch(error => {
          expect(error).toEqual( new SubmissionError({ _error: result.data.message}))
        });
    })
  });
*/
  it("should handle reducer and store state", () => {
    let fakeJobList = [
      {
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
      },
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
                    title: "Et quia in quis modi minima quod voluptates iste.",
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
    ];
    let searchFormData = { search: "test", pageNumber: 1, pageSize: 10 };
    let fakeResult = { ok: true, data: { docs: fakeJobList } };
    let finalState = { ...initialState, jobs: fakeJobList };
    return new Promise((resolve, reject) => {
      let action = {
        payload: searchFormData,
        form: "JOB_SEARCH_FORM",
        promise: { resolve, reject }
      };
      return expectSaga(doSearchJob, action)
        .withReducer(jobReducer)
        .provide([
          [call(startSubmit, action.form), {}],
          [call(jobSearchAPI, action.payload), fakeResult],
          [call(stopSubmit, action.form), {}],
          [call(reset, action.form), {}]
        ])
        .hasFinalState(finalState)
        .dispatch(searchJobAction(action.payload, action.form, action.promise))
        .run();
    });
  });
});
