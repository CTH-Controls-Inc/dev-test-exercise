import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";
import { onLogin } from "../validatorApi";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../validatorApi", () => ({
  onLogin: jest.fn(),
}));

describe("Login BE", () => {
  test("Server-side email success message", async () => {
    render(<Login />);
    const mockResponse = {
      message: "Email address is valid. (Client Side Validation)",
    };
    const loginButtonBE = screen.getByTestId("login-button-be");
    const emailInput = screen.getByTestId("email-input-field");

    onLogin.mockResolvedValue(mockResponse);

    await userEvent.type(emailInput, "test@test.com");
    userEvent.click(loginButtonBE);

    const emailSuccessMessage = await screen.findByTestId(
      "email-success-message"
    );

    expect(emailSuccessMessage).toBeInTheDocument();
    expect(emailSuccessMessage).toHaveTextContent(
      "Email address is valid. (Client Side Validation)"
    );
  });

  test("Server-side email error message", async () => {
    render(<Login />);
    const mockResponse = {
      response: {
        data: {
          errors: [
            {
              msg: "Please use a valid email address. (Server Side Validation)",
            },
          ],
        },
      },
    };
    const loginButtonBE = screen.getByTestId("login-button-be");
    const emailInput = screen.getByTestId("email-input-field");

    onLogin.mockRejectedValue(mockResponse);

    await userEvent.type(emailInput, "test");
    await userEvent.click(loginButtonBE);

    const emailErrorMessage = await screen.findByTestId("email-error-message");

    expect(screen.getByTestId("email-error-message")).toHaveTextContent(
      mockResponse.response.data.errors[0].msg
    );
    expect(emailErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toHaveTextContent(
      "Please use a valid email address. (Server Side Validation)"
    );

    expect(emailInput).toHaveClass("is-invalid");
  });
});
