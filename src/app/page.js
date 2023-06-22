"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/input";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    triggerValidation,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // Enable real-time validation on each change
  });

  function onSubmit(data) {
    // Handle login logic here
    console.log(data);
  }


  return (
    <div className="steam-signup-form">
      <div className="front">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            name="email"
            label="Email adress"
            placeholder="mail@domain.com"
            tooltip="Please enter your email address"
            error={errors?.email?.message}
            onBlur={triggerValidation}
            {...register("email")}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="mail@domain.com"
            error={errors?.password?.message}
            onBlur={triggerValidation}
            {...register("password")}
          />
          <button className="button">Sign up now</button>
        </form>
      </div>
    </div>
  );
}
