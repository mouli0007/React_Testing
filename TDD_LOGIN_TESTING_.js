import App from "../App";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// 1=>  Rendering the component
// 2=> Finding with the elements
// 3=> Interacting woth the elements
// 4=> Expecting the element to be !
describe("Testing the Login Application !", () => {
  // Should render the text !

  it("All input's Should initially be empty ", () => {
    const { getByRole, getByLabelText } = render(<App />);
    const EmailInput = getByRole("textbox");
    const passwordInput = getByLabelText(/password/i);
    const confirmPassword = getByLabelText(/confirm password/i);
    expect(EmailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(confirmPassword.value).toBe("");
  });

  it("should be able to type an email", () => {
    const { getByRole } = render(<App />);
    const EmailInput = getByRole("textbox", {
      name: /email/i,
    });

    userEvent.type(EmailInput, "moulivj@gmail.com");
    expect(EmailInput.value).toBe("moulivj@gmail.com");
  });

  it("should be able to type the password", () => {
    const { getByLabelText } = render(<App />);
    const passwordInput = getByLabelText(/password/i);
    userEvent.type(passwordInput, "12345");
    expect(passwordInput.value).toBe("12345");
  });

  it("Should be able to type confirm password", () => {
    const { getByLabelText } = render(<App />);
    const passwordInput = getByLabelText(/confirm password/i);
    userEvent.type(passwordInput, "12345");
    expect(passwordInput.value).toBe("12345");
  });

  // Toggling the Error Message !
  // Should add tow way binding to make this test work
  it("Should SHow email error msg on invalid email", () => {
    const { getByRole, getByText, queryByText } = render(<App />);
    const emailErrorElement = queryByText(/The email you input in invalid/i);
    expect(emailErrorElement).not.toBeInTheDocument();

    const emailInput = getByRole("textbox", {
      name: /email/i,
    });

    userEvent.type(emailInput, "mouligmail.com");
    const submitBtnElement = getByRole("button", {
      name: /submit/i,
    });

    userEvent.click(submitBtnElement);
    const emailErrorElement_ = getByText(/The email you input in invalid/i);
    expect(emailErrorElement_).toBeInTheDocument();
  });

  // Handling the Password Error !

  it("Should show password error if he password is less than 5 chracters ", () => {
    const { queryByText, getByRole, getByLabelText } = render(<App />);

    const emailInput = getByRole("textbox", {
      name: /email/i,
    });

    const passwordElement = getByLabelText(/password/i);
    const passwordErrorElement = queryByText(
      /the password  you input is should contain 5 or more chracter/i
    );

    const BtnElement = getByRole("button", {
      name: /submit/i,
    });
    userEvent.type(emailInput, "mouli@gmail.com");
    expect(emailInput.value).toBe("mouli@gmail.com");

    expect(passwordErrorElement).not.toBeInTheDocument();

    userEvent.type(passwordElement, "123");
    userEvent.click(BtnElement);
    const passwordErrorElement_ = queryByText(
      /the password  you input is should contain 5 or more chracter/i
    );
    expect(passwordErrorElement_).toBeInTheDocument();
  });

  // Confirm Password Error Handling !

  it("Should Show the confirm password error if the password dosent match the password !", () => {
    const { getByRole, getByLabelText, queryByText } = render(<App />);

    const emailInputElement = getByRole("textbox", {
      name: /email/i,
    });

    userEvent.type(emailInputElement, "mouli@gmail.com");
    expect(emailInputElement.value).toBe("mouli@gmail.com");

    const passwordElement = getByLabelText("Password");
    userEvent.type(passwordElement, "12345");

    const confirmPasswordError = queryByText(/the Password dont match again !/);

    userEvent.type(confirmPasswordElement, "123");
    const BtnElement = getByRole("button", {
      name: /submit/i,
    });

    expect(confirmPasswordError).not.toBeInTheDocument();
    userEvent.click(BtnElement);
    const confirmPasswordError_ = queryByText(
      /the Password dont match again !/
    );

    expect(confirmPasswordError_).toBeInTheDocument();
  });
});
