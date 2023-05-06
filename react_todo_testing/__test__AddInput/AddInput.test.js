import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("Testing the Input Component", () => {
  // Input Tag !!
  it("Should render input element ", () => {
    const { getByPlaceholderText } = render(
      <AddInput todos={[]} setTodos={mockedSetTodo} />
    );
    const inputElement = getByPlaceholderText(/add a anew task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  // Fire Event in Input Tag !

  it("Input should be displayed when user types !", () => {
    const { getByPlaceholderText } = render(
      <AddInput todos={[]} setTodos={mockedSetTodo} />
    );
    const inputValue = "Mouli";
    const inputElement = getByPlaceholderText(/add a new task here /i);
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });

  // Making the input element empty after submitting

  it("Should have emptyed input when button is clicked", () => {
    const { getByPlaceholderText, getByRole } = render(
      <AddInput todos={[]} setTodos={mockedSetTodo} />
    );
    const inputElement = getByPlaceholderText(/add a new task here /i);
    const addButton = getByRole("button", {
      name: /add/i,
    });
    fireEvent.click(addButton);
    expect(inputElement).toBe("");
  });
});
