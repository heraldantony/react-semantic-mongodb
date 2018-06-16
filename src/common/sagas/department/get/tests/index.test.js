/*
 *  Test sagas for getting Department 
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
  DEPARTMENT_GET,
  getDepartment as getDepartmentAction,
  getDepartmentSuccess,
  getDepartmentFail
} from "common/actions/department";

import { departmentGetAPI } from "common/api/DepartmentSvc";

import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";

import { doGetDepartment, getDepartment } from "..";

/* eslint-disable redux-saga/yield-effects */
describe("doGetDepartment Saga", () => {
  let doGetDepartmentGenerator;

  beforeEach(() => {
    doGetDepartmentGenerator = doGetDepartment();
  });
  afterEach(() => {});

  it("should get Department ", () => {
    let fakeDepartment = {
      _id: "5b254369063db83598df2cfe",
      departmentName: "Optimization",
      location: {
        _id: "5b254369063db83598df2cf4",
        streetAddress: "0312 Alessandra Loop",
        postalCode: "97889-8410",
        city: "East Dejahbury",
        stateProvince: "Connecticut",
        country: {
          _id: "5b254369063db83598df2cea",
          countryName: "Grenada",
          region: {
            _id: "5b254369063db83598df2ce0",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "5b254369063db83598df2d09",
          firstName: "Hattie",
          lastName: "Gusikowski",
          email: "Lysanne50@yahoo.com",
          phoneNumber: "1-070-345-3867",
          hireDate: "2018-02-28T23:33:35.473Z",
          salary: 86322,
          commissionPct: 7799,
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
          _id: "5b254369063db83598df2d0a",
          firstName: "Carissa",
          lastName: "Barrows",
          email: "Angela15@gmail.com",
          phoneNumber: "724.764.7759 x90445",
          hireDate: "2018-05-02T12:48:31.883Z",
          salary: 31436,
          commissionPct: 96274,
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
    let departmentId = fakeDepartment._id;
    let fakeResult = { ok: true, data: fakeDepartment };
    let action = { payload: departmentId };
    return (
      expectSaga(doGetDepartment, action)
        .provide([[call(departmentGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getDepartmentSuccess action with retrieved entity
        .put(getDepartmentSuccess(fakeResult.data))
        .run()
    );
  });
  it("should fail to get Department with message", () => {
    let fakeDepartment = {
      _id: "5b254369063db83598df2cfe",
      departmentName: "Optimization",
      location: {
        _id: "5b254369063db83598df2cf4",
        streetAddress: "0312 Alessandra Loop",
        postalCode: "97889-8410",
        city: "East Dejahbury",
        stateProvince: "Connecticut",
        country: {
          _id: "5b254369063db83598df2cea",
          countryName: "Grenada",
          region: {
            _id: "5b254369063db83598df2ce0",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "5b254369063db83598df2d09",
          firstName: "Hattie",
          lastName: "Gusikowski",
          email: "Lysanne50@yahoo.com",
          phoneNumber: "1-070-345-3867",
          hireDate: "2018-02-28T23:33:35.473Z",
          salary: 86322,
          commissionPct: 7799,
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
          _id: "5b254369063db83598df2d0a",
          firstName: "Carissa",
          lastName: "Barrows",
          email: "Angela15@gmail.com",
          phoneNumber: "724.764.7759 x90445",
          hireDate: "2018-05-02T12:48:31.883Z",
          salary: 31436,
          commissionPct: 96274,
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
    let departmentId = fakeDepartment._id;
    let fakeResult = {
      ok: false,
      data: { message: "Failed to get Department, random error" }
    };
    let action = { payload: departmentId };
    return (
      expectSaga(doGetDepartment, action)
        .provide([[call(departmentGetAPI, action.payload), fakeResult]])
        //assert that saga will eventually yield getDepartmentFail action with error message
        .put(getDepartmentFail(fakeResult.data.message))
        .run()
        .catch(error => {
          expect(error).toEqual(
            new SubmissionError({ _error: result.data.message })
          );
        })
    );
  });
  it("should handle reducer and store state", () => {
    let fakeDepartment = {
      _id: "5b254369063db83598df2cfe",
      departmentName: "Optimization",
      location: {
        _id: "5b254369063db83598df2cf4",
        streetAddress: "0312 Alessandra Loop",
        postalCode: "97889-8410",
        city: "East Dejahbury",
        stateProvince: "Connecticut",
        country: {
          _id: "5b254369063db83598df2cea",
          countryName: "Grenada",
          region: {
            _id: "5b254369063db83598df2ce0",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "5b254369063db83598df2d09",
          firstName: "Hattie",
          lastName: "Gusikowski",
          email: "Lysanne50@yahoo.com",
          phoneNumber: "1-070-345-3867",
          hireDate: "2018-02-28T23:33:35.473Z",
          salary: 86322,
          commissionPct: 7799,
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
          _id: "5b254369063db83598df2d0a",
          firstName: "Carissa",
          lastName: "Barrows",
          email: "Angela15@gmail.com",
          phoneNumber: "724.764.7759 x90445",
          hireDate: "2018-05-02T12:48:31.883Z",
          salary: 31436,
          commissionPct: 96274,
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
    let departmentId = fakeDepartment._id;
    let fakeResult = { ok: true, data: fakeDepartment };
    let finalState = { ...initialState, department: fakeDepartment };
    let action = { payload: departmentId };
    return expectSaga(doGetDepartment, action)
      .withReducer(departmentReducer)
      .provide([[call(departmentGetAPI, action.payload), fakeResult]])
      .hasFinalState(finalState)
      .dispatch(
        getDepartmentAction(action.payload, action.form, action.promise)
      )
      .run();
  });
});
