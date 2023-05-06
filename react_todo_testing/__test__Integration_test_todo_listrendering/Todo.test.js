import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

// Integration Testing !

// Integrating with adding the component
// Integrating with rendering the component !

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodo = (task) => {
  const inputElements = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByRole("button", {
    name: /add/i,
  });

  task.forEach((task) => {
    fireEvent.change(inputElements, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("TODO-Component", () => {
  // Checking for the rendered component

  it("Testing for rendering the list", () => {
    render(<MockTodo />);
    const inputElements = screen.getByPlaceholderText(/add a new task/i);
    const buttonElement = screen.getByRole("button", {
      name: /add/i,
    });
    const inputValue = "mouli";
    fireEvent.change(inputElements, { target: { value: inputValue } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(inputValue);
    expect(divElement).toBeInTheDocument();
  });

  // Checking the length of the rendered list !

  it("Testing for rendering the list", () => {
    render(<MockTodo />);

    addTodo(["Grocery Shopping", "Pet My Cat", "and it Works !"]);
    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  // Task Should not have a class when initially rendered
  // Making the todo style not to have  as dashed

  it(" Task Should not have a class when initially rendered !", () => {
    render(<MockTodo />);

    addTodo(["Grocery Shopping"]);
    const divElement = screen.getByText("Grocery Shopping");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  // Task Should have the class element when we click !
  // Making the todo style not to have  as dashed

  it(" Task Should have the class element when we click !", () => {
    render(<MockTodo />);

    addTodo(["Grocery Shopping"]);
    const divElement = screen.getByText("Grocery Shopping");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
