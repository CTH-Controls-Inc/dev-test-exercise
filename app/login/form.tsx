"use client";

import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { InputHTMLAttributes, useState } from "react";

export default function LoginForm() {
  const [isValidEmail, setIsValidEmail] = useState(false);

  //function to validate email on input
  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email.includes("@")) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  return (
    <div>
      <Input
        placeholder="Email"
        type="email "
        className={clsx("m-4", !isValidEmail && "border-red-600")}
        onChange={(e) => validateEmail(e)}
      ></Input>
      <Input placeholder="Password" type="password" className="m-4"></Input>
      {!isValidEmail ? <p>Invalid email entered</p> : ""}
    </div>
  );
}
