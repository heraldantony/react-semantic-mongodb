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
      _id: "0cba782f-7962-441b-bf94-96b11a51d911",
      jobTitle: "Investor Group Planner",
      minSalary: 33165,
      maxSalary: 26367,
      tasks: [
        {
          _id: "642e8f50-bbe7-47c1-8666-a62e2fa27fe9",
          title: "Repudiandae ad ut ex quisquam.",
          description:
            "Et a explicabo dolor. Quia et repellat sint quidem temporibus sint voluptas incidunt eos. Quaerat consequatur voluptas et est assumenda nisi. Mollitia et cumque nemo corrupti libero quia voluptates non. Explicabo voluptatum nostrum rerum aut odit est modi hic. Reprehenderit accusamus aut non tenetur omnis omnis facere soluta.",
          jobs: [
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
            },
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
            }
          ]
        },
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
        }
      ]
    };

    fakeJob["jobTitle"] = "Chief Marketing Representative";

    fakeJob["minSalary"] = 79411;

    fakeJob["maxSalary"] = 69827;

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
    let fakeJob = {"_id":"0cba782f-7962-441b-bf94-96b11a51d911","jobTitle":"Investor Group Planner","minSalary":33165,"maxSalary":26367,"tasks":[{"_id":"642e8f50-bbe7-47c1-8666-a62e2fa27fe9","title":"Repudiandae ad ut ex quisquam.","description":"Et a explicabo dolor. Quia et repellat sint quidem temporibus sint voluptas incidunt eos. Quaerat consequatur voluptas et est assumenda nisi. Mollitia et cumque nemo corrupti libero quia voluptates non. Explicabo voluptatum nostrum rerum aut odit est modi hic. Reprehenderit accusamus aut non tenetur omnis omnis facere soluta.","jobs":[{"_id":"78cac805-f0c9-4bfc-a509-98adc419ccc7","jobTitle":"Direct Factors Coordinator","minSalary":8909,"maxSalary":31108,"tasks":[{"_id":"eab1382d-b41a-4bd0-85fc-01c3fa1ecdf0","title":"Quo qui labore culpa autem molestiae tempore.","description":"Officia quidem est rerum maiores. Et nesciunt aut quis sed aut veritatis magni. Illo atque autem quia perspiciatis id voluptate. Nesciunt illo omnis nostrum ut. Ullam praesentium praesentium dolores voluptas aut quia molestiae.","jobs":[{"_id":"11cb274b-184c-46b0-89ac-500ba6c95d15","jobTitle":"Human Brand Consultant","minSalary":25551,"maxSalary":53722,"tasks":[{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]},{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]}]},{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]}]},{"_id":"2430c74b-2f25-465e-ab7c-23d77c98abbe","title":"Et mollitia aliquid eius minima expedita corrupti laborum sed modi.","description":"Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.","jobs":[{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]},{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]}]}]},{"_id":"688b8a39-f2d8-493d-b71d-e91c2b4ac873","jobTitle":"Principal Branding Officer","minSalary":20639,"maxSalary":25412,"tasks":[{"_id":"2430c74b-2f25-465e-ab7c-23d77c98abbe","title":"Et mollitia aliquid eius minima expedita corrupti laborum sed modi.","description":"Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.","jobs":[{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]},{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]}]},{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]}]}]},{"_id":"903555da-167e-44bb-b2f0-32dd75e96847","title":"Eaque ipsum minima natus iste voluptatem tempora nam dolores.","description":"Aut nostrum eius a dolores amet ad excepturi. Non deleniti sed reiciendis harum molestiae fugit quam occaecati deserunt. Dolores harum blanditiis. Magnam laudantium quisquam mollitia praesentium.","jobs":[{"_id":"688b8a39-f2d8-493d-b71d-e91c2b4ac873","jobTitle":"Principal Branding Officer","minSalary":20639,"maxSalary":25412,"tasks":[{"_id":"2430c74b-2f25-465e-ab7c-23d77c98abbe","title":"Et mollitia aliquid eius minima expedita corrupti laborum sed modi.","description":"Saepe cumque ut temporibus harum sed et eos qui. Hic voluptatibus eum. Et aut dolores repellendus doloribus quam ut reprehenderit. Beatae voluptas sunt nam qui enim et quis. Odio recusandae officiis rerum ad. Veritatis qui enim minus iusto ratione autem dolorem consequatur.","jobs":[{"_id":"1f403133-072b-4a27-8926-2bf3efb71fb0","jobTitle":"Dynamic Branding Administrator","minSalary":11174,"maxSalary":34003,"tasks":[{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]},{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]}]},{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]}]},{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]}]},{"_id":"11cb274b-184c-46b0-89ac-500ba6c95d15","jobTitle":"Human Brand Consultant","minSalary":25551,"maxSalary":53722,"tasks":[{"_id":"a3729636-f5d9-43d9-8571-55b476f6bb75","title":"In voluptatibus et iusto consequuntur sed velit reiciendis commodi.","description":"Rerum ut aperiam amet molestiae. Sed maiores nostrum. Excepturi delectus maxime tempora inventore quia sint voluptatem error. Aut impedit nihil nihil iusto placeat culpa. Quia numquam est impedit hic doloremque.","jobs":[{"_id":"28fbe05a-5337-4677-b2d8-48c226bd9e99","jobTitle":"Chief Creative Orchestrator","minSalary":19158,"maxSalary":71154,"tasks":[{"_id":"3d36c7e3-c9c3-4681-84e8-5541f6c5b62a","title":"Recusandae perferendis vitae perspiciatis voluptates cumque beatae illum dolorem aut.","description":"Dolorum sit necessitatibus ab tenetur quo omnis pariatur. Sapiente recusandae eaque ab unde sint quod dignissimos. Quo qui aliquam dolore consequatur sequi ut et. Iure et eligendi quas quam officia. Dicta eaque ut vero voluptatem nemo quidem.","jobs":[]},{"_id":"4f8804d9-c432-4c5c-8efe-40545426e4b8","title":"Deserunt mollitia molestias voluptas sint animi et rerum molestiae.","description":"Temporibus ratione laborum odit. Vel consectetur sunt est et eum eveniet molestias corporis nam. Rerum fugiat natus et. Delectus corrupti illum quos perferendis maiores iusto.","jobs":[]}]},{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]}]},{"_id":"0f0c64cf-1622-4921-b28b-c2c453bc4dd4","title":"Laboriosam vel beatae velit molestiae.","description":"Voluptatem aut alias ut perspiciatis sit modi non. Voluptatem illo esse et amet aut veritatis ipsam. Exercitationem non et temporibus accusamus. Iure aspernatur aspernatur ab perspiciatis necessitatibus.","jobs":[{"_id":"32698f19-b49e-4525-919f-a1b1fc217a37","jobTitle":"Central Brand Consultant","minSalary":30756,"maxSalary":99908,"tasks":[]},{"_id":"52e18726-cf2a-430a-8186-2277ddf5ff80","jobTitle":"Internal Brand Producer","minSalary":92791,"maxSalary":93558,"tasks":[]}]}]}]}]}
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
      _id: "0cba782f-7962-441b-bf94-96b11a51d911",
      jobTitle: "Investor Group Planner",
      minSalary: 33165,
      maxSalary: 26367,
      tasks: [
        {
          _id: "642e8f50-bbe7-47c1-8666-a62e2fa27fe9",
          title: "Repudiandae ad ut ex quisquam.",
          description:
            "Et a explicabo dolor. Quia et repellat sint quidem temporibus sint voluptas incidunt eos. Quaerat consequatur voluptas et est assumenda nisi. Mollitia et cumque nemo corrupti libero quia voluptates non. Explicabo voluptatum nostrum rerum aut odit est modi hic. Reprehenderit accusamus aut non tenetur omnis omnis facere soluta.",
          jobs: [
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
            },
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
            }
          ]
        },
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
        }
      ]
    };

    fakeJob["jobTitle"] = "Future Division Officer";

    fakeJob["minSalary"] = 48795;

    fakeJob["maxSalary"] = 74683;

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
