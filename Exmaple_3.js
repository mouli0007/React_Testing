// Creating a Login Testing Functionality !

// checking the word that exist in the document is
import App from "./App";

import { render, screen } from "@testing-library/react";

describe("Checking PART 1", () => {
  // List Items !

  test("renders 3 list item", () => {
    const { getAllByRole } = render(<App />);
    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  // h1 Tag !

  test("Testing the h1 tag", () => {
    const { getByTestId } = render(<App />);
    const h1 = getByTestId("h1Test");
    expect(h1).toBeTruthy();
  });

  // Renders Title Result !

  test("Tesitng the result of title", () => {
    const { getByTitle } = render(<App />);
    const add_ = getByTitle("sum");
    expect(add_.textContent).toBe("6");
  });
});
