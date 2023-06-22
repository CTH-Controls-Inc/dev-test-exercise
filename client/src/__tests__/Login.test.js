import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Login from "../Login";

describe("Login rendering", () => {
  test("Login component rendering", () => {
    render(<Login />);
    const loginComponent = screen.getByTestId("login-component");
    expect(loginComponent).toBeInTheDocument();
  });
  test ("Login email input rendering", () => {
    render(<Login />);
    const loginEmailInput = screen.getByTestId("email-input-field");
    expect(loginEmailInput).toBeInTheDocument();
  });
  test("Login password input rendering", () => {
    render(<Login />);
    const loginPasswordInput = screen.getByTestId("password-input-field");
    expect(loginPasswordInput).toBeInTheDocument();
  });
  test("Login FE button rendering", () => {
    render(<Login />);
    const loginButtonFE = screen.getByTestId("login-button-fe");
    expect(loginButtonFE).toBeInTheDocument();
  });
  test("Login BE button rendering", () => {
    render(<Login />);
    const loginButtonBE = screen.getByTestId("login-button-be");
    expect(loginButtonBE).toBeInTheDocument();
  });
});
