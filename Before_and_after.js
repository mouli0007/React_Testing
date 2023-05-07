// Before and after  Hook !

beforeEach(() => {
  console.log("This will run before each test ");
  render(<App />);
});

afterEach(() => {
  console.log("This will run after each test ");
});

beforeAll(() => {
  console.log("This will run onluy once before all of the test ");
});

afterAll(() => {
  console.log("This will run only once after all of the test ");
});
