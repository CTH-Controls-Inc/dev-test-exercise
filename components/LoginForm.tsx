'use client'

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
};

// Email validation Regular Expression as per W3C specification
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginForm = () => {
  // Initializing React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Values:", data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Login</h1>
      <label htmlFor="login">Email</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: regex,
            message: "Invalid email format",
          },
        })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
