// React testing again !

import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// Testing the inital Value to be 0 !

describe(Counter, () => {
  // Testing the initial Value for the count !
  it("counter displays correct initial count", () => {
    const { getByTextId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTextId("counter").textContent);
    expect(countValue).toEqual(0);
  });

  // Testing for Increment Button !
  it("Count Should increment by 1", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    // Before we Click the button !
    const countValue = Number(getByTestId("counter").textContent);
    expect(countValue).toBe(0);

    // After we click the button !
    const incrementBTN = getByRole("button", { name: /increment/i });
    fireEvent.click(incrementBTN);
    const UpdatedcountValue = Number(getByTestId("counter").textContent);
    expect(UpdatedcountValue).toBe(1);
  });

  // Testing for Decrrement Button !

  it("Count Should Decrement by 1", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(1);

    const decrementBTN = getByRole("button", { name: /decrement/i });
    fireEvent.click(decrementBTN);
    const countValue2 = Number(getByTestId("counter").textContent);
    expect(countValue2).toBe(0);
  });

  // Chaning the Value to be 0

  it("Count Should reset back to zero", () => {
    // Render the cimponent and get the role ! button

    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(50);

    const resetBtn = getByRole("button", { name: /reset/i });
    fireEvent.click(resetBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toBe(0);
  });


// 

});
