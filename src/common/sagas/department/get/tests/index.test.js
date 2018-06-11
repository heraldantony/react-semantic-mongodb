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
      _id: "d519d1c8-65e0-45cd-817d-61e39f760e31",
      departmentName: "Operations",
      location: {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "576c37f8-641a-4e43-ae92-4cd456edc478",
          firstName: "Sabryna",
          lastName: "Rath",
          email: "Toney45@yahoo.com",
          phoneNumber: "(748) 327-3014 x4203",
          hireDate: "2018-03-07T10:34:04.190Z",
          salary: 44305,
          commissionPct: 43826,
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
          _id: "fcd38306-72f7-4c1d-a39d-3332b3f3c286",
          firstName: "Gustave",
          lastName: "Gulgowski",
          email: "Lois.Denesik@hotmail.com",
          phoneNumber: "1-383-768-8564",
          hireDate: "2018-03-20T07:11:04.478Z",
          salary: 73204,
          commissionPct: 5280,
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
      _id: "d519d1c8-65e0-45cd-817d-61e39f760e31",
      departmentName: "Operations",
      location: {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "576c37f8-641a-4e43-ae92-4cd456edc478",
          firstName: "Sabryna",
          lastName: "Rath",
          email: "Toney45@yahoo.com",
          phoneNumber: "(748) 327-3014 x4203",
          hireDate: "2018-03-07T10:34:04.190Z",
          salary: 44305,
          commissionPct: 43826,
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
          _id: "fcd38306-72f7-4c1d-a39d-3332b3f3c286",
          firstName: "Gustave",
          lastName: "Gulgowski",
          email: "Lois.Denesik@hotmail.com",
          phoneNumber: "1-383-768-8564",
          hireDate: "2018-03-20T07:11:04.478Z",
          salary: 73204,
          commissionPct: 5280,
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
      _id: "d519d1c8-65e0-45cd-817d-61e39f760e31",
      departmentName: "Operations",
      location: {
        _id: "36848807-a4cd-43ec-8773-cffff9525cfc",
        streetAddress: "57916 Johns Wall",
        postalCode: "06466-7765",
        city: "Lake Marquesmouth",
        stateProvince: "Idaho",
        country: {
          _id: "50dc6101-cdab-44a6-a0ba-1b0d17182a5b",
          countryName: "Cyprus",
          region: {
            _id: "fd5db0ba-f121-4606-bffc-ef2fda65aa14",
            regionName: "South-east Asia"
          }
        }
      },
      employees: [
        {
          _id: "576c37f8-641a-4e43-ae92-4cd456edc478",
          firstName: "Sabryna",
          lastName: "Rath",
          email: "Toney45@yahoo.com",
          phoneNumber: "(748) 327-3014 x4203",
          hireDate: "2018-03-07T10:34:04.190Z",
          salary: 44305,
          commissionPct: 43826,
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
          _id: "fcd38306-72f7-4c1d-a39d-3332b3f3c286",
          firstName: "Gustave",
          lastName: "Gulgowski",
          email: "Lois.Denesik@hotmail.com",
          phoneNumber: "1-383-768-8564",
          hireDate: "2018-03-20T07:11:04.478Z",
          salary: 73204,
          commissionPct: 5280,
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
