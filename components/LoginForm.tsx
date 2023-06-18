"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import formImage from "@/public/laser.jpg";
import FormInput from "./UI/FormInput";

type FormValues = {
  email: string;
  password: string;
};

// Email validation Regular Expression as per W3C specification
const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginForm = () => {
  // Initializing React-Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
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

  const passwordRegister = {
    ...register("password", {
      required: "Password is required",
    }),
  };

  // Form submit handler
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Values:", data);
    reset();
  };

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

        {/* Password field */}
        <FormInput
          id="password"
          label="Password"
          type="password"
          error={!!errors.password}
          errorMessage={errors.password?.message || null}
          register={passwordRegister}
        />

        {/* Login checkbox */}
        <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm">
          <input
            type="checkbox"
            id="checkbox"
            value="checked"
            className="h-5 w-5 rounded-full outline-none text-purple-500 focus:ring-transparent focus:outline-none"
          />
          <label htmlFor="checkbox">Keep me logged in</label>
        </div>

        {/* Buttons */}
        <div className="flex w-full gap-5 md:gap-2 items-center justify-center text-xs sm:text-sm mt-10">
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className={`flex-1 text-white py-3 rounded-lg ${
              Object.keys(errors).length === 0
                ? "bg-purple-500 hover:scale-105 ease-in-out"
                : "bg-purple-500/50"
            }`}
          >
            Login
          </button>
          <button className="flex-1 py-3 text-purple-500 font-bold hover:scale-105 ease-in-out">
            Cancel
          </button>
        </div>
      </section>

      {/* Image */}
      <section className="hidden md:block flex-1 relative overflow-hidden">
        <Image
          src={formImage}
          alt="loginImage"
          priority
          fill
          sizes="25vw"
          className="object-cover rounded-lg brightness-75"
        />
      </section>
    </form>
  );
};

export default LoginForm;
