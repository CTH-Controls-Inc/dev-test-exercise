"use client";

// React
import { useState, useEffect } from "react";

// Components
import CustomForm from "@/components/CustomForm";

export default function UserLogin() {
  // manage state of component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  // focuses the input only when component loads (empty dependency [])
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // clear out error message when username or password changes
  // user may have read error, so when they go to continue typing, error should go away
  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  const onLogInSubmit = async () => {
    //  EXAMPLE
    // try {
    // ASYNC LOGIN FUNC VIA auth route and auth controller, or could use next-auth package
    // with nextjs server routes
    // } catch (err) {
    //   console.log(error);
    // }
    console.log("I look forward to hearing fro you CTH Controls Team!!!");
  };

  // Handlers
  const onEmailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const formFields = {
    error: errorMsg,
    formTitle: "User Login",
  };

  const formLabelAndInputFields = [
    {
      name: "Email",
      label: "Email:",
      type: "email",
      value: email,
      onChange: onEmailChanged,
      required: true,
    },
    {
      name: "Password",
      label: "Password:",
      type: "password",
      value: password,
      onChange: onPasswordChanged,
      required: true,
    },
  ];

  const buttonInfo = [
    {
      buttonTitle: "Login",
      onButtonClick: onLogInSubmit,
    },
  ];

  return (
    <section
      className="flex flex-col justify-center items-center w-full
    p-8 sm:p-12 md:p-24 space-y-6"
    >
      <CustomForm
        formFields={formFields}
        formLabelAndInputFields={formLabelAndInputFields}
        canSaveParams={[email, password]}
        buttonInfo={buttonInfo}
      />
    </section>
  );
}
