import { ChangeEvent, FormEvent, useState } from "react";
import { InputObject } from "../utils/Types";
import Inputs from "../layouts/Inputs";
import useInputValidation from "../hooks/useInputValidation";

export default function Login() {
  const [inputs, setInputs] = useState<InputObject>({}),
    [errors, setErrors] = useState<InputObject>({}),
    emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validateEmail = useInputValidation("email", inputs?.email, emailPattern);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    if (!validateEmail) {
      setErrors((values) => ({ ...values, email: "Invalid email entered" }));
      console.log("Error");
    } else {
      alert("Login successful");
    }
  }

  return (
    <section className="form__section">
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          <div className="form__container">
            <Inputs
              value={inputs?.email || ""}
              type="email"
              label="Email"
              id="login__email"
              name="email"
              error={errors?.email || ""}
              onChange={handleChange}
              autoComplete="on"
              className={`email ${errors?.email && "input__error"}`}
            />

            <Inputs
              value={inputs?.password || ""}
              type="password"
              label="Password"
              id="login__password"
              name="password"
              error={errors?.password || ""}
              onChange={handleChange}
              autoComplete="off"
              required="true"
              className="email "
            />

            <div className="submit__btn">
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
