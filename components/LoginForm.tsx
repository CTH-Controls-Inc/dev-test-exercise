'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./UI/FormInput";

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

  const emailRegister = {
    ...register("email", {
      required: "Email is required",
      pattern: {
        value: regex,
        message: "Invalid email format",
      },
    }),
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Values:", data);
  };

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex bg-white rounded-lg min-w-[250px] w-[90%] md:w-3/4 xl:w-1/2 border-gray-500 shadow-lg"
    >
      <section className="flex-1 text-gray-700 p-6 md:px-20 md:py-16">
        <h1 className="text-center md:text-left text-xl md:text-3xl pb-2 font-bold">
          Login
        </h1>
        <FormInput
          id="email"
          label="Email"
          type="email"
          error={!!errors.email}
          errorMessage={errors.email?.message || null}
          register={emailRegister}
        />
        <div className="flex w-full gap-5 md:gap-2 items-center justify-center text-xs sm:text-sm mt-10">
          <button
            type="submit"
            className="flex-1 text-white py-3 rounded-lg bg-purple-500 hover:scale-105 ease-in-out"
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

export default LoginForm;
