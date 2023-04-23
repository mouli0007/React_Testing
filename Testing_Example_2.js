
import { render } from "@testing-library/react";
import Input from "./Input";
import Button from "./Button";

describe("Input Component", () => {
  // Testing wheather the input appears on the screen while rendering !

  test("redered input", () => {
    const { getByTestId } = render(<Input showDiv={false} />);
    const inputElement = getByTestId("searchBar");
    expect(inputElement).toBeTruthy();
  });

  //
  test("render div", () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  //
  test("dont render the div", () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  });

  // ######################
  // ######################
  // IMPORTANT TEST CASE !

  test("Change on Input cause change on header", async () => {
    //
    await act(async () => {
      const { getByTestId } = render(<Input showDiv={true} />);
      const input = getByTestId("searchBar");
      const inputWord = "Mouli VJ";
      await fireEevnt.change(input, { target: { value: inputWord } });
      const header = getByTestId("displaySearch");
      expect(header.innerHTML).toBe(inputWord);
    });
  });
});
