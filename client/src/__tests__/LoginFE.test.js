import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

describe("Login FE", () => {
  test("Client-side email success message", async () => {
    render(<Login />);
    const loginButtonFE = screen.getByTestId("login-button-fe");
    const emailInput = screen.getByTestId("email-input-field");

    await userEvent.type(emailInput, "test@test.com");
    await userEvent.click(loginButtonFE);

    const emailSuccessMessage = await screen.findByTestId(
      "email-success-message"
    );

    expect(emailSuccessMessage).toBeInTheDocument();
    expect(emailSuccessMessage).toHaveTextContent(
      "Email address is valid. (Client Side Validation)"
    );
  });
  test("Client-side email error message", async () => {
    render(<Login />);
    const loginButtonFE = screen.getByTestId("login-button-fe");
    const emailInput = screen.getByTestId("email-input-field");

    await userEvent.type(emailInput, "test");
    await userEvent.click(loginButtonFE);

    const emailErrorMessage = await screen.findByTestId("email-error-message");

    expect(emailErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toHaveTextContent(
      "Please use a valid email address. (Client Side Validation)"
    );
    expect(emailInput).toHaveClass("is-invalid");
  });
});
