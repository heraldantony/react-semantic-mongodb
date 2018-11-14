// @flow
import { fromJS } from "immutable";

import {
  addDepartment,
  addDepartmentSuccess,
  addDepartmentFail,
  saveDepartment,
  saveDepartmentSuccess,
  saveDepartmentFail,
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFail,
  searchDepartment,
  searchDepartmentSuccess,
  searchDepartmentFail,
  getDepartment,
  getDepartmentSuccess,
  getDepartmentFail,
  setLocation,
  addEmployee
} from "common/actions/department";
import { departmentReducer } from "common/reducers/department";

describe("Department Reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      search: "",
      department: {},
      departments: [],
      start: 0,
      limit: 10,
      totalItemsCount: 0,
      otherSearchStart: 0,
      otherSearchLimit: 10,
      otherSearchTotalItemsCount: 0,
      otherSearchDepartments: [],
      error: ""
    };
  });
  it("should return the initial state", () => {
    const expectedResult = state;
    expect(departmentReducer(undefined, {})).toEqual(expectedResult);
  });

  describe("addDepartmentSuccess", () => {
    it("should update state with add results", () => {
      const department = {
        _id: "5beba8c9d42cea39441eb48c",
        departmentName: "Configuration",
        location: {
          _id: "5beba8c9d42cea39441eb482",
          streetAddress: "07240 Barrows Lakes",
          postalCode: "24105-1029",
          city: "South Guadalupe",
          stateProvince: "Maine",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5beba8c9d42cea39441eb497",
            firstName: "Emilie",
            lastName: "Ratke",
            email: "Laverne_Lowe@gmail.com",
            phoneNumber: "222.889.6926",
            hireDate: "2018-01-10T01:40:11.143Z",
            salary: 94629,
            commissionPct: 63967,
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
            _id: "5beba8c9d42cea39441eb498",
            firstName: "Lincoln",
            lastName: "Davis",
            email: "Nels24@hotmail.com",
            phoneNumber: "(311) 656-5404",
            hireDate: "2017-12-10T16:46:11.344Z",
            salary: 93540,
            commissionPct: 75723,
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
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, addDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("addDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, addDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("saveDepartmentSuccess", () => {
    it("should update state with save results", () => {
      const department = {
        _id: "5beba8c9d42cea39441eb48c",
        departmentName: "Configuration",
        location: {
          _id: "5beba8c9d42cea39441eb482",
          streetAddress: "07240 Barrows Lakes",
          postalCode: "24105-1029",
          city: "South Guadalupe",
          stateProvince: "Maine",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5beba8c9d42cea39441eb497",
            firstName: "Emilie",
            lastName: "Ratke",
            email: "Laverne_Lowe@gmail.com",
            phoneNumber: "222.889.6926",
            hireDate: "2018-01-10T01:40:11.143Z",
            salary: 94629,
            commissionPct: 63967,
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
            _id: "5beba8c9d42cea39441eb498",
            firstName: "Lincoln",
            lastName: "Davis",
            email: "Nels24@hotmail.com",
            phoneNumber: "(311) 656-5404",
            hireDate: "2017-12-10T16:46:11.344Z",
            salary: 93540,
            commissionPct: 75723,
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
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, saveDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("saveDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, saveDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("updateDepartmentSuccess", () => {
    it("should update state with update results", () => {
      const department = {
        _id: "5beba8c9d42cea39441eb48c",
        departmentName: "Configuration",
        location: {
          _id: "5beba8c9d42cea39441eb482",
          streetAddress: "07240 Barrows Lakes",
          postalCode: "24105-1029",
          city: "South Guadalupe",
          stateProvince: "Maine",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5beba8c9d42cea39441eb497",
            firstName: "Emilie",
            lastName: "Ratke",
            email: "Laverne_Lowe@gmail.com",
            phoneNumber: "222.889.6926",
            hireDate: "2018-01-10T01:40:11.143Z",
            salary: 94629,
            commissionPct: 63967,
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
            _id: "5beba8c9d42cea39441eb498",
            firstName: "Lincoln",
            lastName: "Davis",
            email: "Nels24@hotmail.com",
            phoneNumber: "(311) 656-5404",
            hireDate: "2017-12-10T16:46:11.344Z",
            salary: 93540,
            commissionPct: 75723,
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
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, updateDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("updateDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, updateDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("searchDepartmentSuccess", () => {
    it("should update state with search results", () => {
      const departments = [
        {
          _id: "5beba8c9d42cea39441eb48c",
          departmentName: "Configuration",
          location: {
            _id: "5beba8c9d42cea39441eb482",
            streetAddress: "07240 Barrows Lakes",
            postalCode: "24105-1029",
            city: "South Guadalupe",
            stateProvince: "Maine",
            country: {
              _id: "5beba8c9d42cea39441eb478",
              countryName: "Bermuda",
              region: {
                _id: "5beba8c9d42cea39441eb46e",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5beba8c9d42cea39441eb497",
              firstName: "Emilie",
              lastName: "Ratke",
              email: "Laverne_Lowe@gmail.com",
              phoneNumber: "222.889.6926",
              hireDate: "2018-01-10T01:40:11.143Z",
              salary: 94629,
              commissionPct: 63967,
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
              _id: "5beba8c9d42cea39441eb498",
              firstName: "Lincoln",
              lastName: "Davis",
              email: "Nels24@hotmail.com",
              phoneNumber: "(311) 656-5404",
              hireDate: "2017-12-10T16:46:11.344Z",
              salary: 93540,
              commissionPct: 75723,
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
          _id: "5beba8c9d42cea39441eb48d",
          departmentName: "Usability",
          location: {
            _id: "5beba8c9d42cea39441eb482",
            streetAddress: "07240 Barrows Lakes",
            postalCode: "24105-1029",
            city: "South Guadalupe",
            stateProvince: "Maine",
            country: {
              _id: "5beba8c9d42cea39441eb478",
              countryName: "Bermuda",
              region: {
                _id: "5beba8c9d42cea39441eb46e",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5beba8c9d42cea39441eb498",
              firstName: "Lincoln",
              lastName: "Davis",
              email: "Nels24@hotmail.com",
              phoneNumber: "(311) 656-5404",
              hireDate: "2017-12-10T16:46:11.344Z",
              salary: 93540,
              commissionPct: 75723,
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
              _id: "5beba8c9d42cea39441eb499",
              firstName: "Bell",
              lastName: "Reilly",
              email: "Dina_Abbott@yahoo.com",
              phoneNumber: "1-804-709-2420 x731",
              hireDate: "2018-05-20T14:33:31.373Z",
              salary: 98179,
              commissionPct: 76056,
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
          _id: "5beba8c9d42cea39441eb48e",
          departmentName: "Accounts",
          location: {
            _id: "5beba8c9d42cea39441eb482",
            streetAddress: "07240 Barrows Lakes",
            postalCode: "24105-1029",
            city: "South Guadalupe",
            stateProvince: "Maine",
            country: {
              _id: "5beba8c9d42cea39441eb478",
              countryName: "Bermuda",
              region: {
                _id: "5beba8c9d42cea39441eb46e",
                regionName: "South-east Asia"
              }
            }
          },
          employees: [
            {
              _id: "5beba8c9d42cea39441eb499",
              firstName: "Bell",
              lastName: "Reilly",
              email: "Dina_Abbott@yahoo.com",
              phoneNumber: "1-804-709-2420 x731",
              hireDate: "2018-05-20T14:33:31.373Z",
              salary: 98179,
              commissionPct: 76056,
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
              _id: "5beba8c9d42cea39441eb49a",
              firstName: "Kurt",
              lastName: "Metz",
              email: "Barney66@gmail.com",
              phoneNumber: "(021) 847-3082 x521",
              hireDate: "2018-01-20T22:25:32.769Z",
              salary: 88452,
              commissionPct: 20038,
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
        ...state,
        departments: departments,
        totalItemsCount: departments.length
      };

      expect(
        departmentReducer(
          state,
          searchDepartmentSuccess(departments, departments.length)
        )
      ).toEqual(expectedResult);
    });
  });

  describe("searchDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, searchDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("getDepartmentSuccess", () => {
    it("should update state with get results", () => {
      const department = {
        _id: "5beba8c9d42cea39441eb48c",
        departmentName: "Configuration",
        location: {
          _id: "5beba8c9d42cea39441eb482",
          streetAddress: "07240 Barrows Lakes",
          postalCode: "24105-1029",
          city: "South Guadalupe",
          stateProvince: "Maine",
          country: {
            _id: "5beba8c9d42cea39441eb478",
            countryName: "Bermuda",
            region: {
              _id: "5beba8c9d42cea39441eb46e",
              regionName: "South-east Asia"
            }
          }
        },
        employees: [
          {
            _id: "5beba8c9d42cea39441eb497",
            firstName: "Emilie",
            lastName: "Ratke",
            email: "Laverne_Lowe@gmail.com",
            phoneNumber: "222.889.6926",
            hireDate: "2018-01-10T01:40:11.143Z",
            salary: 94629,
            commissionPct: 63967,
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
            _id: "5beba8c9d42cea39441eb498",
            firstName: "Lincoln",
            lastName: "Davis",
            email: "Nels24@hotmail.com",
            phoneNumber: "(311) 656-5404",
            hireDate: "2017-12-10T16:46:11.344Z",
            salary: 93540,
            commissionPct: 75723,
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
      const expectedResult = { ...state, department: department };

      expect(
        departmentReducer(state, getDepartmentSuccess(department))
      ).toEqual(expectedResult);
    });
  });

  describe("getDepartmentFail", () => {
    it("should update state with error", () => {
      const error = "Some random error";
      const expectedResult = { ...state, error: error };

      expect(departmentReducer(state, getDepartmentFail(error))).toEqual(
        expectedResult
      );
    });
  });

  describe("setLocation", () => {
    it("should update state with location", () => {
      const location = {
        _id: "5beba8c9d42cea39441eb482",
        streetAddress: "07240 Barrows Lakes",
        postalCode: "24105-1029",
        city: "South Guadalupe",
        stateProvince: "Maine",
        country: {
          _id: "5beba8c9d42cea39441eb478",
          countryName: "Bermuda",
          region: {
            _id: "5beba8c9d42cea39441eb46e",
            regionName: "South-east Asia"
          }
        }
      };

      const expectedResult = {
        ...state,
        department: {
          ...state.department,
          location: location
        }
      };

      expect(departmentReducer(state, setLocation(location))).toEqual(
        expectedResult
      );
    });
  });

  describe("addEmployee", () => {
    it("should update state with employee", () => {
      const employee = {
        _id: "5beba8c9d42cea39441eb496",
        firstName: "Trinity",
        lastName: "Funk",
        email: "Therese99@hotmail.com",
        phoneNumber: "219.777.3989 x405",
        hireDate: "2018-04-09T20:17:10.530Z",
        salary: 18043,
        commissionPct: 72958,
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
        ...state,
        department: {
          ...state.department,
          employees: [employee]
        }
      };

      expect(departmentReducer(state, addEmployee(employee))).toEqual(
        expectedResult
      );
    });
  });
});
