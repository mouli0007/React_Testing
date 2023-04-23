
import { screen, render } from "@testing-library/react";
import Counter from "counter";


//// Checking for the initial value to be => 0

describe(Counter, () => {
  // Testing the initial Value for the count !

  it("counter displays correct initial count", () => {
    const { getByTextID } = render(<Counter initialCount={0} />);

    const countValue = getByTextID("counter").textContent;
    expect(countValue).toBe(0);
  });
});
