// Mocking the api request

// the foldername and the file name is extremley important
// Mock like the same structure like how you are detting from an api

// Ways to make mock function wrok correctly

//  1 => node_modules => scripts=> utils =>createJestConifig=>resetMocks : false

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
