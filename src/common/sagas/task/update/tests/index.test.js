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
      _id: "3766fa61-af1d-47c1-8e17-d8f4a559675d",
      title: "Occaecati amet excepturi qui commodi.",
      description:
        "Corrupti est asperiores quidem cumque modi ab. Placeat distinctio et porro consectetur perspiciatis ad. Qui odio non molestiae nisi harum. Beatae tempore consequatur totam omnis autem eum.",
      jobs: [
        {
          _id: "481dcac5-cb01-42cf-a58b-c236c394c429",
          jobTitle: "International Integration Consultant",
          minSalary: 39687,
          maxSalary: 52084,
          tasks: [
            {
              _id: "903555da-167e-44bb-b2f0-32dd75e96847",
              title:
                "Eaque ipsum minima natus iste voluptatem tempora nam dolores.",
              description:
                "Aut nostrum eius a dolores amet ad excepturi. Non deleniti sed reiciendis harum molestiae fugit quam occaecati deserunt. Dolores harum blanditiis. Magnam laudantium quisquam mollitia praesentium.",
              jobs: [
                {
                  _id: "688b8a39-f2d8-493d-b71d-e91c2b4ac873",
                  jobTitle: "Principal Branding Officer",
                  minSalary: 20639,
                  maxSalary: 25412,
                  tasks: [
                    {
                      _id: "2430c74b-2f25-465e-ab7c-23d77c98abbe",
                      title:
                        "Et mollitia aliquid eius minima expedita corrupti laborum sed modi.",
                      description:
                        "Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.",
                      jobs: [
                        {
                          _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                          jobTitle: "Dynamic Branding Administrator",
                          minSalary: 11174,
                          maxSalary: 34003,
                          tasks: [
                            {
                              _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                              title: "Laboriosam vel beatae velit molestiae.",
                              description:
                                "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                              jobs: [
                                {
                                  _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                                  jobTitle: "Central Brand Consultant",
                                  minSalary: 30756,
                                  maxSalary: 99908,
                                  tasks: []
                                },
                                {
                                  _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                                  jobTitle: "Internal Brand Producer",
                                  minSalary: 92791,
                                  maxSalary: 93558,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0",
              title: "Quo qui labore culpa autem molestiae tempore.",
              description:
                "Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.",
              jobs: [
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "78cac805-f0c9-4bfc-a509-98adc419ccc7",
          jobTitle: "Direct Factors Coordinator",
          minSalary: 8909,
          maxSalary: 31108,
          tasks: [
            {
              _id: "eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0",
              title: "Quo qui labore culpa autem molestiae tempore.",
              description:
                "Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.",
              jobs: [
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "2430c74b-2f25-465e-ab7c-23d77c98abbe",
              title:
                "Et mollitia aliquid eius minima expedita corrupti laborum sed modi.",
              description:
                "Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.",
              jobs: [
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                },
                {
                  _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                  jobTitle: "Chief Creative Orchestrator",
                  minSalary: 19158,
                  maxSalary: 71154,
                  tasks: [
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    },
                    {
                      _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                      title:
                        "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                      description:
                        "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
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

    fakeTask["title"] = "Ducimus iure alias id quo.";

    fakeTask["description"] =
      "Dolor non quia sed vel. Quos dolor debitis voluptates inventore. Sequi magni sed quis voluptatem voluptatem ipsam veritatis voluptas. Ut quia quis cum rem voluptatibus optio magnam soluta. Accusantium reprehenderit eveniet est ut non totam eos aut. Molestias modi assumenda assumenda numquam nesciunt iste reprehenderit nesciunt magni.";

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
    let fakeTask = {"_id":"3766fa61-af1d-47c1-8e17-d8f4a559675d","title":"Occaecati amet excepturi qui commodi.","description":"Corrupti est asperiores quidem cumque modi ab. Placeat distinctio et porro consectetur perspiciatis ad. Qui odio non molestiae nisi harum. Beatae tempore consequatur totam omnis autem eum.","jobs":[{"_id":"481dcac5-cb01-42cf-a58b-c236c394c429","jobTitle":"International Integration Consultant","minSalary":39687,"maxSalary":52084,"tasks":[{"_id":"903555da-167e-44bb-b2f0-32dd75e96847","title":"Eaque ipsum minima natus iste voluptatem tempora nam dolores.","description":"Aut nostrum eius a dolores amet ad excepturi. Non deleniti sed reiciendis harum molestiae fugit quam occaecati deserunt. Dolores harum blanditiis. Magnam laudantium quisquam mollitia praesentium.","jobs":[{"_id":"688b8a39-f2d8-493d-b71d-e91c2b4ac873","jobTitle":"Principal Branding Officer","minSalary":20639,"maxSalary":25412,"tasks":[{"_id":"2430c74b-2f25-465e-ab7c-23d77c98abbe","title":"Et mollitia aliquid eius minima expedita corrupti laborum sed modi.","description":"Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.","jobs":[{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]},{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]}]},{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]}]},{"_id":"11cb274b-184c-46b0-89ac-500ba6c95d15","jobTitle":"Human Brand Consultant","minSalary":25551,"maxSalary":53722,"tasks":[{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]},{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]}]}]},{"_id":"eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0","title":"Quo qui labore culpa autem molestiae tempore.","description":"Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.","jobs":[{"_id":"11cb274b-184c-46b0-89ac-500ba6c95d15","jobTitle":"Human Brand Consultant","minSalary":25551,"maxSalary":53722,"tasks":[{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]},{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]}]},{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]}]}]},{"_id":"78cac805-f0c9-4bfc-a509-98adc419ccc7","jobTitle":"Direct Factors Coordinator","minSalary":8909,"maxSalary":31108,"tasks":[{"_id":"eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0","title":"Quo qui labore culpa autem molestiae tempore.","description":"Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.","jobs":[{"_id":"11cb274b-184c-46b0-89ac-500ba6c95d15","jobTitle":"Human Brand Consultant","minSalary":25551,"maxSalary":53722,"tasks":[{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]},{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]}]},{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]}]},{"_id":"2430c74b-2f25-465e-ab7c-23d77c98abbe","title":"Et mollitia aliquid eius minima expedita corrupti laborum sed modi.","description":"Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.","jobs":[{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]},{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]}]}]}]}
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
      _id: "3766fa61-af1d-47c1-8e17-d8f4a559675d",
      title: "Occaecati amet excepturi qui commodi.",
      description:
        "Corrupti est asperiores quidem cumque modi ab. Placeat distinctio et porro consectetur perspiciatis ad. Qui odio non molestiae nisi harum. Beatae tempore consequatur totam omnis autem eum.",
      jobs: [
        {
          _id: "481dcac5-cb01-42cf-a58b-c236c394c429",
          jobTitle: "International Integration Consultant",
          minSalary: 39687,
          maxSalary: 52084,
          tasks: [
            {
              _id: "903555da-167e-44bb-b2f0-32dd75e96847",
              title:
                "Eaque ipsum minima natus iste voluptatem tempora nam dolores.",
              description:
                "Aut nostrum eius a dolores amet ad excepturi. Non deleniti sed reiciendis harum molestiae fugit quam occaecati deserunt. Dolores harum blanditiis. Magnam laudantium quisquam mollitia praesentium.",
              jobs: [
                {
                  _id: "688b8a39-f2d8-493d-b71d-e91c2b4ac873",
                  jobTitle: "Principal Branding Officer",
                  minSalary: 20639,
                  maxSalary: 25412,
                  tasks: [
                    {
                      _id: "2430c74b-2f25-465e-ab7c-23d77c98abbe",
                      title:
                        "Et mollitia aliquid eius minima expedita corrupti laborum sed modi.",
                      description:
                        "Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.",
                      jobs: [
                        {
                          _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                          jobTitle: "Dynamic Branding Administrator",
                          minSalary: 11174,
                          maxSalary: 34003,
                          tasks: [
                            {
                              _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                              title: "Laboriosam vel beatae velit molestiae.",
                              description:
                                "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                              jobs: [
                                {
                                  _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                                  jobTitle: "Central Brand Consultant",
                                  minSalary: 30756,
                                  maxSalary: 99908,
                                  tasks: []
                                },
                                {
                                  _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                                  jobTitle: "Internal Brand Producer",
                                  minSalary: 92791,
                                  maxSalary: 93558,
                                  tasks: []
                                }
                              ]
                            },
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              _id: "eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0",
              title: "Quo qui labore culpa autem molestiae tempore.",
              description:
                "Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.",
              jobs: [
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          _id: "78cac805-f0c9-4bfc-a509-98adc419ccc7",
          jobTitle: "Direct Factors Coordinator",
          minSalary: 8909,
          maxSalary: 31108,
          tasks: [
            {
              _id: "eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0",
              title: "Quo qui labore culpa autem molestiae tempore.",
              description:
                "Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.",
              jobs: [
                {
                  _id: "11cb274b-184c-46b0-89ac-500ba6c95d15",
                  jobTitle: "Human Brand Consultant",
                  minSalary: 25551,
                  maxSalary: 53722,
                  tasks: [
                    {
                      _id: "a3729636-f5d9-43d9-8571-55b476f6bb75",
                      title:
                        "In voluptatibus et iusto consequuntur sed velit reiciendis commodi.",
                      description:
                        "Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.",
                      jobs: [
                        {
                          _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                          jobTitle: "Chief Creative Orchestrator",
                          minSalary: 19158,
                          maxSalary: 71154,
                          tasks: [
                            {
                              _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                              title:
                                "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                              description:
                                "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                              jobs: []
                            },
                            {
                              _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                              title:
                                "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                              description:
                                "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
                              jobs: []
                            }
                          ]
                        },
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    }
                  ]
                },
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                }
              ]
            },
            {
              _id: "2430c74b-2f25-465e-ab7c-23d77c98abbe",
              title:
                "Et mollitia aliquid eius minima expedita corrupti laborum sed modi.",
              description:
                "Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.",
              jobs: [
                {
                  _id: "1f403133-072b-4a27-8926-2bf3efb71fb0",
                  jobTitle: "Dynamic Branding Administrator",
                  minSalary: 11174,
                  maxSalary: 34003,
                  tasks: [
                    {
                      _id: "0f0c64cf-1622-4921-b28b-c2c453bc4dd4",
                      title: "Laboriosam vel beatae velit molestiae.",
                      description:
                        "Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.",
                      jobs: [
                        {
                          _id: "32698f19-b49e-4525-919f-a1b1fc217a37",
                          jobTitle: "Central Brand Consultant",
                          minSalary: 30756,
                          maxSalary: 99908,
                          tasks: []
                        },
                        {
                          _id: "52e18726-cf2a-430a-8186-2277ddf5ff80",
                          jobTitle: "Internal Brand Producer",
                          minSalary: 92791,
                          maxSalary: 93558,
                          tasks: []
                        }
                      ]
                    },
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    }
                  ]
                },
                {
                  _id: "28fbe05a-5337-4677-b2d8-48c226bd9e99",
                  jobTitle: "Chief Creative Orchestrator",
                  minSalary: 19158,
                  maxSalary: 71154,
                  tasks: [
                    {
                      _id: "3d36c7e3-c9c3-4681-84e8-5541f6c5b62a",
                      title:
                        "Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.",
                      description:
                        "Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.",
                      jobs: []
                    },
                    {
                      _id: "4f8804d9-c432-4c5c-8efe-40545426e4b8",
                      title:
                        "Deserunt mollitia molestias voluptas sint animi et rerum molestiae.",
                      description:
                        "Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.",
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

    fakeTask["title"] =
      "Quaerat vel consequatur exercitationem totam sint quia quasi.";

    fakeTask["description"] =
      "Veritatis commodi saepe cum sed illum nobis qui. Eveniet voluptates saepe error esse. Unde sint cumque blanditiis numquam labore.";

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
