// Before and After !

// if you want to test some functioanlities before and after some test we ran !

import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

//  Testing for Async Components !

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers-List", () => {
  // Making some addditional functionalities before we run the test !

  // This function will run for addtional test or functionalities for every test block
  beforeEach(() => {
    console.log("Runiing before each test !");
  });

  // Run once before all test cases !

  beforeEach(() => {
    console.log("It will run pnly once before all the tset block !");
  });

    // Viceversa for before-each !
  afterEach(() => {
    console.log("after each test !");
  });
    
    // Vice-versa for beforeAll

  afterAll(() => {
    console.log("Run once after all test !");
  });

  it("Should Render Follower items", async () => {
    const { findByTestId } = render(<MockFollowersList />);
    const followersDivElement = await screen.findByTestId("follower-item-0");
    expect(followersDivElement).toBeInTheDocument();
  });
});
