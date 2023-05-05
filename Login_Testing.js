// Login Test Again !
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import App from "./App";

describe("Login Application", () => {
  // UserName
  test("Testing for username input", () => {
    const { getByPlaceholderText } = render(<App />);
    const userName = getByPlaceholderText(/username/i);
    expect(userName).toBeInTheDocument();
  });

  // Testing Password

  test("Testing for Password input", () => {
    const { getByPlaceholderText } = render(<App />);
    const password = getByPlaceholderText(/password/i);
    expect(password).toBeInTheDocument();
  });

  // Button !

  test("Testing for Button input", () => {
    const { getByRole } = render(<App />);
    const buttonEle = getByRole("button");
    expect(buttonEle).toBeInTheDocument();
  });

  // Username Value to be empty !

  test("Username value to be empty", () => {
    const { getByPlaceholderText } = render(<App />);
    const userName = getByPlaceholderText(/username/i);

    expect(userName.value).toBe("");
  });

  // Password value to be empty !

  test("Username value to be empty", () => {
    const { getByPlaceholderText } = render(<App />);
    const password = getByPlaceholderText(/password/i);
    expect(password.value).toBe("");
  });

  // Error msg

  test("Error Message Should be invincible !", () => {
    const { getByTestId } = render(<App />);
    const errorMessage = getByTestId("error");
    expect(errorMessage).not.toBeVisible();
  });

  // Username Input Should Change !

  test("Username input should change", () => {
    const { getByPlaceholderText } = render(<App />);
    const userNameInput = getByPlaceholderText(/username/i);
    const testValue = "test";
    fireEvent.change(userNameInput, { target: { value: testValue } });
    const userNameInput_ = getByPlaceholderText(/username/i);
    expect(userNameInput_.value).toBe(testValue);
  });

  // Password ! Input Should Change !

  test("PAssword Input Should be changed", () => {
    const { getByPlaceholderText } = render(<App />);
    const passwordInput = getByPlaceholderText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordInput, { target: { value: testValue } });
    const passwordInput_ = getByPlaceholderText(/password/i);
    expect(passwordInput_.value).toBe(testValue);
  });

  // Button Should be enabled !

  test("button should be disabled when input exist !", () => {
    const { getByPlaceholderText, getByRole } = render(<App />);
    const userNameInput_ = getByPlaceholderText(/username/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const ButtonEle = getByRole("button");
    const testValue = "test";

    fireEvent.change(userNameInput_, { target: { value: testValue } });
    fireEvent.change(passwordInput, { target: { value: testValue } });
    expect(ButtonEle).not.toBeDisabled();
  });

  // Button loading state

  test("Testing button loading state", () => {
    const { getByRole } = render(<App />);
    const buttonEle = getByRole("button");
    expect(buttonEle).not.toHaveTextContent(/loading/i);
  });

  test("Testing Loadin state after click", () => {
    const { getByRole } = render(<App />);
    const buttonEle = getByRole("button");
    fireEvent.click(buttonEle);
    expect(buttonEle).toHaveTextContent(/login/i);
  });

  // Mocking the async Data with JEST !

  jest.mock("fetch", () => ({
    __esModule: true,
    default: {
      get: () => ({
        data: { id: 1, name: "Leanne Graham" },
      }),
    },
  }));

  test("loading should not be visible after fetching", async () => {
    const { getByRole } = render(<App />);
    const ButtonEle = getByRole("button");
    fireEvent.click(ButtonEle);
    await waitFor(() =>
      expect(ButtonEle).not.toHaveTextContent(/please wait/i)
    );
  });

  // USer Should render after fetching !

  test("button should be disabled when input exist !", async () => {
    const { getByRole, findByText } = render(<App />);
    const ButtonEle = getByRole("button");
    fireEvent.click(ButtonEle);
    const userItem = await findByText("Leanne Graham");
    expect(userItem).toBeInTheDocument();
  });
});
