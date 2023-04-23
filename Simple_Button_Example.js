// Unit Test for Button !

describe("Button Component", () => {
  test("Render a button", () => {
    const { getByTestId } = render(<Button />);
    const btn = getByTestId("buttnon");
    expect(btn).toBeTruthy();
  });

  // Check hte button length

  test("Render 1 button before button click", () => {
    // Every Button !
    const { getAllByTestId } = render(<Button />);
    const buttonList = getAllByTestId("button");
    expect(buttonList).toHaveLength(1);
  });

  test("render 2 buttons after  button click", async () => {
    await act(async () => {
      const { getAllByTestId } = render(<Button />);
      const buttonList = getAllByTestId("button");
      await fireEevnt.click(buttonList[0]);
      const UpdatedbuttonList = getAllByTestId("button");
      expect(UpdatedbuttonList).toHaveLength(1);
    });
  });
});
